"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check } from "lucide-react";
import type { Product } from "@/lib/mockData";
import { CartUtils } from "@/lib/cart";
import {
  TANKS,
  DEFAULT_TANK,
  DEFAULT_DENSITY,
  customCounts,
  zoneSplit,
  type Density,
  type PackKey,
} from "@/lib/plantCalculator";

export type CalcPack = { product: Product; image: string | null; variant?: string };

type Gtag = (...args: unknown[]) => void;
const gtag: Gtag = (...args) => {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === "function") g(...args);
};

const gaItem = (p: Product, variant?: string) => ({
  item_id: p.shopify?.sku ?? p.id,
  item_name: p.name,
  item_brand: "Shore Aquatic",
  item_category: p.category,
  item_category2: p.subCategory,
  ...(variant ? { item_variant: variant } : {}),
  price: p.price,
  quantity: 1,
});

const DENSITIES: { id: Density; label: string }[] = [
  { id: "light", label: "Light" },
  { id: "medium", label: "Medium" },
  { id: "full", label: "Full" },
];

/**
 * "How many plants" calculator. Server-renders the default (20 gal long,
 * Medium); the chart table in the guide is the no-JS fallback. Packs whose
 * product is hidden arrive as null and fall back to the 9-pack.
 */
export default function PlantCalculator({
  packs,
  fallback,
}: {
  packs: Record<PackKey, CalcPack | null>;
  fallback: CalcPack | null;
}) {
  const [tankId, setTankId] = useState<string>(DEFAULT_TANK);
  const [density, setDensity] = useState<Density>(DEFAULT_DENSITY);
  const [custom, setCustom] = useState({ l: 36, d: 12 });
  const [added, setAdded] = useState(false);
  const firstRender = useRef(true);

  const isCustom = tankId === "custom";
  const tank = TANKS.find((t) => t.id === tankId);
  const counts = isCustom ? customCounts(custom.l || 0, custom.d || 0) : tank!;
  const n = counts[density];
  const zones = zoneSplit(n);

  const pack: CalcPack | null = useMemo(() => {
    if (isCustom || !tank) return fallback;
    return packs[tank.pack] ?? fallback;
  }, [isCustom, tank, packs, fallback]);
  const isFallback = !isCustom && tank && !packs[tank.pack];

  // GA4: calculator_use on change (debounced), not on first render
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const t = window.setTimeout(() => {
      gtag("event", "calculator_use", {
        tank_size: isCustom ? `custom ${custom.l}x${custom.d}` : tank?.label,
        density,
        plant_count: n,
      });
    }, 800);
    return () => window.clearTimeout(t);
  }, [tankId, density, custom.l, custom.d, n, isCustom, tank]);

  const addToCart = () => {
    if (!pack) return;
    const item = gaItem(pack.product, pack.variant);
    gtag("event", "add_to_cart", { currency: "USD", value: pack.product.price, items: [item] });
    CartUtils.add(pack.product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };
  const selectItem = () => {
    if (!pack) return;
    gtag("event", "select_item", {
      item_list_id: "plant_calculator",
      item_list_name: "Plant calculator",
      items: [gaItem(pack.product, pack.variant)],
    });
  };

  return (
    <section
      aria-labelledby="plant-calc-heading"
      className="not-prose my-10 rounded-2xl border border-aqua-400/20 bg-gradient-to-br from-[#062a3a] to-ocean-950 p-5 sm:p-7"
    >
      <h2 id="plant-calc-heading" className="text-lg sm:text-xl font-bold text-white">
        Plant calculator
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Tank size</span>
          <select
            value={tankId}
            onChange={(e) => setTankId(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-ocean-950 px-3 py-2.5 text-sm text-white focus:border-aqua-400 focus:outline-none"
          >
            {TANKS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label} ({t.l} × {t.d} in)
              </option>
            ))}
            <option value="custom">Custom size…</option>
          </select>
        </label>

        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400" id="density-label">
            Planting density
          </span>
          <div role="radiogroup" aria-labelledby="density-label" className="mt-1.5 grid grid-cols-3 gap-1 rounded-xl border border-white/15 p-1">
            {DENSITIES.map((d) => (
              <button
                key={d.id}
                type="button"
                role="radio"
                aria-checked={density === d.id}
                onClick={() => setDensity(d.id)}
                className={`rounded-lg py-2 text-sm font-semibold transition-colors cursor-pointer ${
                  density === d.id ? "bg-aqua-400 text-ocean-950" : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom footprint (kept in the layout to avoid shifting) */}
      <div className={`mt-4 grid grid-cols-2 gap-4 ${isCustom ? "" : "hidden"}`}>
        {(["l", "d"] as const).map((k) => (
          <label key={k} className="block">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {k === "l" ? "Length (in)" : "Depth, front to back (in)"}
            </span>
            <input
              type="number"
              min={6}
              max={120}
              inputMode="numeric"
              value={custom[k] || ""}
              onChange={(e) => setCustom((c) => ({ ...c, [k]: Math.min(120, Math.max(0, Number(e.target.value))) }))}
              className="mt-1.5 w-full rounded-xl border border-white/15 bg-ocean-950 px-3 py-2.5 text-sm text-white focus:border-aqua-400 focus:outline-none"
            />
          </label>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_minmax(0,18rem)] items-stretch">
        {/* Result */}
        <div aria-live="polite" className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">You need about</p>
          <p className="mt-1 text-4xl font-bold text-white">
            {n} <span className="text-xl font-semibold text-aqua-300">plants</span>
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Back <strong className="text-white">{zones.back}</strong> · Middle{" "}
            <strong className="text-white">{zones.middle}</strong> · Front{" "}
            <strong className="text-white">{zones.front}</strong>
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Individual stems or plants after separating bundles.
            {isCustom && " Custom sizes assume a tank about 12 in tall."}
          </p>
        </div>

        {/* Recommended pack */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col min-h-[17rem]">
          <p className="text-xs font-semibold uppercase tracking-wider text-aqua-400">Recommended pack</p>
          {pack ? (
            <>
              <Link
                href={`/shop/${pack.product.id}`}
                onClick={selectItem}
                className="mt-3 flex gap-3 group"
              >
                <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-white">
                  {pack.image && (
                    <Image src={pack.image} alt="" fill sizes="80px" className="object-contain" />
                  )}
                </span>
                <span className="min-w-0">
                  <span className="line-clamp-3 text-sm font-semibold text-white group-hover:text-aqua-300">
                    {pack.product.name}
                  </span>
                  <span className="mt-1 block text-lg font-bold text-aqua-400">
                    ${pack.product.price.toFixed(2)}
                  </span>
                </span>
              </Link>
              <button
                type="button"
                onClick={addToCart}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-coral/20 hover:bg-orange-500 cursor-pointer"
              >
                {added ? <Check size={16} /> : <ShoppingCart size={16} />}
                {added ? "Added to cart" : "Add to cart"}
              </button>
            </>
          ) : null}
          <Link href="/shop/bundles" className="mt-auto pt-3 text-center text-sm text-aqua-400 hover:underline">
            {isFallback || isCustom ? "See all bundles →" : "Compare all bundles →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
