"use client";

import { useState } from "react";

type Size = "4 oz" | "16 oz" | "32 oz" | "1 Gallon";
type Fulfillment = "Local Pickup" | "Overnight Shipping" | "2-Day Shipping";

const PRICING: Record<Size, Record<Fulfillment, number>> = {
  "4 oz":     { "Local Pickup":  19.99, "Overnight Shipping":  69.99, "2-Day Shipping":  49.99 },
  "16 oz":    { "Local Pickup":  39.99, "Overnight Shipping":  89.99, "2-Day Shipping":  69.99 },
  "32 oz":    { "Local Pickup":  59.99, "Overnight Shipping": 109.99, "2-Day Shipping":  89.99 },
  "1 Gallon": { "Local Pickup": 124.99, "Overnight Shipping": 174.99, "2-Day Shipping": 154.99 },
};

const APPROX_COUNT: Record<Size, string> = {
  "4 oz":     "~60k – 120k",
  "16 oz":    "~240k – 470k",
  "32 oz":    "~470k – 950k",
  "1 Gallon": "~1.9M – 3.8M",
};

const VOLUME_ML: Record<Size, string> = {
  "4 oz":     "118 mL",
  "16 oz":    "473 mL",
  "32 oz":    "946 mL",
  "1 Gallon": "3.8 L",
};

const USE_CASE: Record<Size, string> = {
  "4 oz":     "Single feeding / test pack",
  "16 oz":    "Small clownfish breeder",
  "32 oz":    "Mid-sized breeder",
  "1 Gallon": "Hatchery / serious breeder",
};

const SIZES: Size[] = ["4 oz", "16 oz", "32 oz", "1 Gallon"];
const FULFILLMENTS: { value: Fulfillment; sub: string }[] = [
  { value: "Local Pickup",        sub: "FREE • Fort Lauderdale, FL" },
  { value: "Overnight Shipping",  sub: "+$50 baked in • recommended" },
  { value: "2-Day Shipping",      sub: "+$30 baked in • budget option" },
];

export default function VariantSelector() {
  const [size, setSize] = useState<Size>("32 oz");
  const [fulfillment, setFulfillment] = useState<Fulfillment>("Overnight Shipping");

  const price = PRICING[size][fulfillment];
  const count = APPROX_COUNT[size];
  const vol = VOLUME_ML[size];
  const use = USE_CASE[size];

  const subject = encodeURIComponent(`Rotifer order — ${size} • ${fulfillment}`);
  const body = encodeURIComponent(
    `Hello Shore Aquatic,\n\nI'd like to order:\n  Size: ${size} (${vol})\n  Fulfillment: ${fulfillment}\n  Price: $${price.toFixed(2)}\n\nName:\nShipping address (if applicable):\nDesired arrival date:\n\nThanks!`
  );
  const mailtoUrl = `mailto:shoreaquatic@gmail.com?subject=${subject}&body=${body}`;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      {/* Size selector */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Size</h3>
          <span className="text-xs text-slate-500">500–1,000 / mL</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {SIZES.map((s) => {
            const active = s === size;
            return (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`rounded-xl border px-3 py-3 text-center transition cursor-pointer ${
                  active
                    ? "border-aqua-400 bg-aqua-400/10 text-white"
                    : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <div className="text-sm font-bold">{s}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{VOLUME_ML[s]}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{APPROX_COUNT[s]}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fulfillment selector */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">Fulfillment</h3>
        <div className="space-y-2">
          {FULFILLMENTS.map(({ value, sub }) => {
            const active = value === fulfillment;
            return (
              <button
                key={value}
                onClick={() => setFulfillment(value)}
                className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 text-left transition cursor-pointer ${
                  active
                    ? "border-aqua-400 bg-aqua-400/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <div>
                  <div className={`text-sm font-bold ${active ? "text-white" : "text-slate-200"}`}>{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
                </div>
                <div className={`h-4 w-4 rounded-full border-2 ${active ? "border-aqua-400 bg-aqua-400" : "border-white/30"}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Price + CTA */}
      <div className="rounded-xl bg-gradient-to-br from-aqua-400/10 to-cyan-400/5 border border-aqua-400/20 p-5 mb-4">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">Your selection</div>
            <div className="text-sm text-slate-300 mt-0.5">{size} • {fulfillment}</div>
            <div className="text-xs text-slate-500 mt-1">{count} rotifers · {use}</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white">${price.toFixed(2)}</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-wide">Shipping included</div>
          </div>
        </div>
      </div>

      <a
        href={mailtoUrl}
        className="block w-full text-center rounded-xl bg-aqua-400 hover:bg-aqua-300 text-ocean-950 font-bold py-4 transition shadow-lg shadow-aqua-400/20"
      >
        Email to Order →
      </a>

      <p className="text-xs text-slate-500 text-center mt-3">
        We confirm live availability before charging. Orders placed by Tuesday 10am ET ship same week.
      </p>
    </div>
  );
}
