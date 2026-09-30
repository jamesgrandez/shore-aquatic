"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export interface WholesaleItem {
  id: string;
  name: string;
  sci: string;
  size: string;
  availability: string;
  category: string;
  subCategory: string;
}

const AV_LABEL: Record<string, string> = {
  AVAILABLE: "In Stock",
  BACKORDER: "Ask / Seasonal",
  "OUT OF SEASON": "Seasonal",
};
const AV_CLASS: Record<string, string> = {
  AVAILABLE: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  BACKORDER: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "OUT OF SEASON": "bg-slate-500/15 text-slate-300 border-slate-500/30",
};

export default function WholesaleCatalog({ items }: { items: WholesaleItem[] }) {
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const it of items) counts.set(it.category, (counts.get(it.category) ?? 0) + 1);
    // stable, friendly order
    const order = ["Plants", "Water Garden", "Livestock", "Saltwater", "Dry Goods"];
    return [...counts.keys()].sort(
      (a, b) => (order.indexOf(a) + 1 || 99) - (order.indexOf(b) + 1 || 99)
    );
  }, [items]);

  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>(categories[0] ?? "Plants");

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    return items.filter((it) => {
      if (q) {
        const hay = (it.name + " " + it.sci + " " + it.subCategory).toLowerCase();
        return hay.includes(q); // search spans all categories
      }
      return it.category === cat;
    });
  }, [items, q, cat]);

  // group by sub-category
  const groups = useMemo(() => {
    const m = new Map<string, WholesaleItem[]>();
    for (const it of filtered) {
      const key = (q ? it.category + " · " : "") + (it.subCategory || "General");
      if (!m.has(key)) m.set(key, []);
      m.get(key)!.push(it);
    }
    return [...m.entries()];
  }, [filtered, q]);

  return (
    <div>
      {/* Controls */}
      <div className="sticky top-16 z-30 -mx-4 px-4 py-3 bg-ocean-950/90 backdrop-blur border-b border-white/5">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search all products by name or scientific name…"
          className="w-full rounded-lg border border-white/10 bg-ocean-900/60 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-aqua-400/40 focus:outline-none focus:ring-2 focus:ring-aqua-400/20"
        />
        {!q && (
          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  cat === c
                    ? "bg-aqua-400 text-ocean-950"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {c}
                <span className="ml-1.5 opacity-60">
                  {items.filter((i) => i.category === c).length}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results */}
      <p className="mt-4 text-xs text-slate-500">
        {q
          ? `${filtered.length} result${filtered.length === 1 ? "" : "s"} for “${query}”`
          : `${filtered.length} items in ${cat}`}{" "}
        · pricing available to approved wholesale accounts
      </p>

      <div className="mt-3 space-y-6">
        {groups.map(([sub, rows]) => (
          <div key={sub}>
            <h3 className="sticky top-32 z-20 bg-ocean-950/80 backdrop-blur py-1.5 text-sm font-bold text-aqua-300 border-b border-white/5">
              {sub} <span className="text-slate-600 font-normal">({rows.length})</span>
            </h3>
            <ul className="divide-y divide-white/5">
              {rows.map((it) => (
                <li key={it.id} className="flex items-center justify-between gap-3 py-2">
                  <div className="min-w-0">
                    <Link
                      href={`/shop/${it.id}`}
                      className="text-sm text-white hover:text-aqua-400 transition-colors"
                    >
                      {it.name}
                    </Link>
                    {it.sci && (
                      <span className="ml-2 text-xs italic text-slate-500">{it.sci}</span>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    {it.size && <span className="hidden sm:inline text-xs text-slate-500">{it.size}</span>}
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
                        AV_CLASS[it.availability] ?? AV_CLASS["OUT OF SEASON"]
                      }`}
                    >
                      {AV_LABEL[it.availability] ?? it.availability}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-center text-sm text-slate-500">
            No matches. Try another search, or email us — we can often source it.
          </p>
        )}
      </div>
    </div>
  );
}
