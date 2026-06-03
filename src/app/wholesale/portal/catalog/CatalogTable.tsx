"use client";

import { useMemo, useState } from "react";

export type CatalogRow = {
  sku: string;
  name: string;
  sci: string;
  genus: string;
  format:
    | "Leaded Bunch"
    | "2-inch Potted"
    | "Large Potted"
    | "Bare Root"
    | "Tissue Culture Cup"
    | "Mat"
    | "Specimen"
    | "Portion";
  size: string;
  wholesale: number;
  msrp: number;
  moq: number;
};

const FORMATS = [
  "All Formats",
  "Leaded Bunch",
  "2-inch Potted",
  "Large Potted",
  "Bare Root",
  "Tissue Culture Cup",
  "Mat",
  "Specimen",
  "Portion",
] as const;

export default function CatalogTable({ rows }: { rows: CatalogRow[] }) {
  const [format, setFormat] = useState<(typeof FORMATS)[number]>("All Formats");
  const [genus, setGenus] = useState<string>("All Genera");
  const [query, setQuery] = useState<string>("");

  // Distinct genera, sorted alphabetically — derived from rows so it stays in sync
  const allGenera = useMemo(() => {
    const set = new Set<string>();
    rows.forEach((r) => set.add(r.genus));
    return ["All Genera", ...Array.from(set).sort()];
  }, [rows]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (format !== "All Formats" && r.format !== format) return false;
      if (genus !== "All Genera" && r.genus !== genus) return false;
      if (q && !r.name.toLowerCase().includes(q) && !r.sci.toLowerCase().includes(q) && !r.sku.toLowerCase().includes(q)) {
        return false;
      }
      return true;
    });
  }, [rows, format, genus, query]);

  // Stats based on filtered set
  const totalShown = filtered.length;
  const minWholesale = filtered.length ? Math.min(...filtered.map((r) => r.wholesale)) : 0;
  const maxWholesale = filtered.length ? Math.max(...filtered.map((r) => r.wholesale)) : 0;

  return (
    <div>
      {/* Filter bar */}
      <div className="grid gap-3 sm:grid-cols-3 mb-4">
        <div>
          <label className="block text-[11px] font-medium uppercase tracking-wider text-slate-500 mb-1.5">
            Search
          </label>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Plant name, scientific name, or SKU…"
            className="w-full rounded-lg border border-white/10 bg-ocean-900/50 px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:border-aqua-400/40 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-[11px] font-medium uppercase tracking-wider text-slate-500 mb-1.5">
            Format
          </label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as (typeof FORMATS)[number])}
            className="w-full rounded-lg border border-white/10 bg-ocean-900/50 px-3 py-2 text-sm text-white focus:border-aqua-400/40 focus:outline-none"
          >
            {FORMATS.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-medium uppercase tracking-wider text-slate-500 mb-1.5">
            Genus
          </label>
          <select
            value={genus}
            onChange={(e) => setGenus(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-ocean-900/50 px-3 py-2 text-sm text-white focus:border-aqua-400/40 focus:outline-none"
          >
            {allGenera.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mb-4 flex items-center gap-3 text-xs text-slate-500">
        <span>
          Showing <span className="text-aqua-300 font-semibold">{totalShown}</span> SKU{totalShown === 1 ? "" : "s"}
        </span>
        {totalShown > 0 && (
          <>
            <span>·</span>
            <span>
              Range{" "}
              <span className="text-white font-semibold">${minWholesale.toFixed(2)}</span> –{" "}
              <span className="text-white font-semibold">${maxWholesale.toFixed(2)}</span> per unit
            </span>
          </>
        )}
        {(format !== "All Formats" || genus !== "All Genera" || query) && (
          <button
            onClick={() => {
              setFormat("All Formats");
              setGenus("All Genera");
              setQuery("");
            }}
            className="ml-auto rounded-full border border-white/10 px-3 py-0.5 text-slate-400 hover:border-white/20 hover:text-white transition-colors cursor-pointer"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 sticky top-0">
            <tr className="text-left">
              <th className="px-3 py-3 font-semibold text-slate-300 whitespace-nowrap">SKU</th>
              <th className="px-3 py-3 font-semibold text-slate-300">Plant Name</th>
              <th className="px-3 py-3 font-semibold text-slate-300">Scientific</th>
              <th className="px-3 py-3 font-semibold text-slate-300 whitespace-nowrap">Format</th>
              <th className="px-3 py-3 font-semibold text-slate-300">Size</th>
              <th className="px-3 py-3 font-semibold text-slate-300 text-center">MOQ</th>
              <th className="px-3 py-3 font-semibold text-slate-300 text-right whitespace-nowrap">Wholesale</th>
              <th className="px-3 py-3 font-semibold text-slate-300 text-right whitespace-nowrap">MSRP</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-3 py-12 text-center text-slate-500">
                  No SKUs match the current filters. Try clearing one.
                </td>
              </tr>
            ) : (
              filtered.map((r, idx) => (
                <tr
                  key={r.sku}
                  className={`border-t border-white/5 hover:bg-white/[0.02] transition-colors ${
                    idx % 2 === 1 ? "bg-white/[0.01]" : ""
                  }`}
                >
                  <td className="px-3 py-2.5 font-mono text-[11px] text-slate-400 whitespace-nowrap">{r.sku}</td>
                  <td className="px-3 py-2.5 text-white">{r.name}</td>
                  <td className="px-3 py-2.5 italic text-slate-500">{r.sci || "—"}</td>
                  <td className="px-3 py-2.5">
                    <span className="inline-block rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-400 uppercase tracking-wider whitespace-nowrap">
                      {r.format}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-slate-500 text-xs">{r.size}</td>
                  <td className="px-3 py-2.5 text-center text-slate-400">{r.moq}</td>
                  <td className="px-3 py-2.5 text-right font-semibold text-aqua-300">${r.wholesale.toFixed(2)}</td>
                  <td className="px-3 py-2.5 text-right text-slate-500">${r.msrp.toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom note */}
      <p className="mt-4 text-xs text-slate-600 leading-relaxed">
        MSRP shown as suggested keystone retail (2× wholesale). Pricing valid 30 days from page generation.
        Federal noxious weeds excluded. Some species restricted from shipment to AZ, GA, HI.
      </p>
    </div>
  );
}
