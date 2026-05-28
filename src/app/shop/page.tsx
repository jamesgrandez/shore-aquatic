"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { products, subCategories } from "@/lib/mockData";
import { waterGardenProducts } from "@/lib/waterGardenData";
import { saltwaterProducts } from "@/lib/saltwaterData";
import { livestockProducts } from "@/lib/livestockData";

// Grouped Water Garden filters — group label maps to the subCategory prefix it matches
const WG_GROUPS = [
  { label: "Hardy Lilies",    prefix: "Hardy Lily",    emoji: "🪷" },
  { label: "Tropical Lilies", prefix: "Tropical Lily", emoji: "🌺" },
  { label: "Lotus",           prefix: "Lotus",         emoji: "🌸" },
  { label: "Marginals",       prefix: "Marginal",      emoji: "🌿" },
  { label: "Specialty",       prefix: "Specialty",     emoji: "⭐" },
] as const;

// Variant chips shown when a group is active (suffix after the prefix + " - ")
const WG_VARIANTS: Record<string, string[]> = {
  "Hardy Lily":    ["Changeable", "Peach/Orange", "Pink", "Red", "White", "Yellow", "Potted"],
  "Tropical Lily": ["Autumn Shades", "Blue", "Blue/Green", "Lavender", "Night/Pink", "Night/Red", "Night/White", "Pink", "Purple", "Red", "White", "Yellow"],
  "Lotus":         ["Pink", "Red", "Versicolor", "White", "Yellow", "Potted"],
  "Marginal":      ["Hardy", "Tropical"],
};

// Saltwater sub-category chips — extensible as we add Corals, Invertebrates, Marine Plants
const SW_SUBCATEGORIES = ["Macroalgae", "Live Food", "Invertebrates"] as const;

// Livestock sub-category chips — extensible as we add Shrimp, Fish, etc.
const LS_SUBCATEGORIES = ["Snails"] as const;
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const allProducts = [...products, ...waterGardenProducts, ...saltwaterProducts, ...livestockProducts];

const CATEGORIES = ["All", "Plants", "Water Garden", "Saltwater", "Livestock", "Dry Goods"] as const;
const WATER_TYPES = ["All", "Freshwater", "Saltwater"] as const;
const AVAILABILITIES = ["All", "Available Now", "Backorder", "Out of Season"] as const;
const PAGE_SIZE = 24;

const availabilityMap: Record<string, string> = {
  "Available Now": "AVAILABLE",
  Backorder: "BACKORDER",
  "Out of Season": "OUT OF SEASON",
};

export default function ShopPage() {
  const [category, setCategory] = useState<string>("All");
  const [subCategory, setSubCategory] = useState<string>("All");
  const [wgGroup, setWgGroup] = useState<string>("All");     // WG top-level group
  const [wgVariant, setWgVariant] = useState<string>("All"); // WG color/variant within group
  const [waterType, setWaterType] = useState<string>("All");
  const [availability, setAvailability] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  // Read initial category from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && CATEGORIES.includes(cat as (typeof CATEGORIES)[number])) {
      setCategory(cat);
    }
    const sub = params.get("sub");
    if (sub) setSubCategory(sub);
  }, []);

  // Reset page on filter change
  useEffect(() => { setPage(1); }, [category, subCategory, wgGroup, wgVariant, waterType, availability, search]);

  // Derive active WG variant chips for the selected group
  const activeWgVariants = wgGroup !== "All" ? (WG_VARIANTS[wgGroup] ?? []) : [];

  // Build the exact subCategory string from WG group + variant selection
  const wgSubCatFilter = useMemo(() => {
    if (wgGroup === "All") return null; // no WG filter
    const group = WG_GROUPS.find(g => g.prefix === wgGroup);
    if (!group) return null;
    if (wgVariant === "All") return wgGroup; // prefix match: any sub under this group
    // Build exact subCategory: e.g. "Hardy Lily - Pink" or "Marginal Hardy - 2\" Pot"
    if (wgGroup === "Marginal") {
      return `Marginal ${wgVariant} - 2" Pot`;
    }
    return `${wgGroup} - ${wgVariant}`;
  }, [wgGroup, wgVariant]);

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      if (category !== "All" && p.category !== category) return false;

      // WG-specific group filter (replaces subCategory for Water Garden)
      if (category === "Water Garden" && wgSubCatFilter !== null) {
        const sub = p.subCategory ?? "";
        // Exact match for variant, prefix match for group-only
        if (wgVariant !== "All") {
          if (sub !== wgSubCatFilter) return false;
        } else {
          if (!sub.startsWith(wgGroup)) return false;
        }
      }

      // Aquarium plant sub-category filter
      if (category === "Plants" && subCategory !== "All" && p.subCategory !== subCategory) return false;

      // Saltwater sub-category filter
      if (category === "Saltwater" && subCategory !== "All" && p.subCategory !== subCategory) return false;

      // Livestock sub-category filter
      if (category === "Livestock" && subCategory !== "All" && p.subCategory !== subCategory) return false;

      if (waterType !== "All" && p.waterType !== waterType && p.waterType !== "Both") return false;
      if (availability !== "All" && p.availability !== availabilityMap[availability]) return false;
      if (search) {
        const q = search.toLowerCase();
        const haystack = `${p.name} ${p.scientificName || ""} ${p.description} ${p.tags.join(" ")} ${p.subCategory}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [category, subCategory, wgGroup, wgVariant, wgSubCatFilter, waterType, availability, search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const resetFilters = useCallback(() => {
    setCategory("All");
    setSubCategory("All");
    setWgGroup("All");
    setWgVariant("All");
    setWaterType("All");
    setAvailability("All");
    setSearch("");
    setPage(1);
  }, []);

  const hasActiveFilters = category !== "All" || subCategory !== "All" || wgGroup !== "All" || waterType !== "All" || availability !== "All" || search;

  return (
    <main className="pt-16">
      {/* Hero strip */}
      <section className="relative py-14 sm:py-18 bg-gradient-to-b from-ocean-800 to-ocean-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            The Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-slate-400 text-sm"
          >
            {allProducts.length} premium aquatic plants — freshwater, saltwater & water garden
          </motion.p>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-40 bg-ocean-950/95 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          {/* Top row: main filters + search */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Category pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setCategory(cat); setSubCategory("All"); }}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all cursor-pointer ${
                    category === cat
                      ? "bg-aqua-400/20 text-aqua-300 border border-aqua-400/40"
                      : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden sm:block w-px h-5 bg-white/10" />

            {/* Availability */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {AVAILABILITIES.map((av) => (
                <button
                  key={av}
                  onClick={() => setAvailability(av)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all cursor-pointer ${
                    availability === av
                      ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/40"
                      : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative ml-auto">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search plants..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-48 rounded-full border border-white/10 bg-white/5 pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-aqua-400/50 focus:ring-1 focus:ring-aqua-400/20 transition-all"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white cursor-pointer">
                  <X size={11} />
                </button>
              )}
            </div>
          </div>

          {/* Water Garden: grouped two-tier filter */}
          {category === "Water Garden" && (
            <div className="mt-2 space-y-1.5">
              {/* Tier 1: groups */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs text-slate-600 w-8 shrink-0">Type</span>
                <button
                  onClick={() => { setWgGroup("All"); setWgVariant("All"); }}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all cursor-pointer ${
                    wgGroup === "All"
                      ? "bg-teal-400/20 text-teal-300 border border-teal-400/40"
                      : "bg-white/5 text-slate-400 border border-white/10 hover:text-white"
                  }`}
                >
                  All Types
                </button>
                {WG_GROUPS.map(({ label, prefix, emoji }) => (
                  <button
                    key={prefix}
                    onClick={() => { setWgGroup(prefix); setWgVariant("All"); }}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      wgGroup === prefix
                        ? "bg-teal-400/20 text-teal-300 border border-teal-400/40"
                        : "bg-white/5 text-slate-400 border border-white/10 hover:text-white"
                    }`}
                  >
                    <span>{emoji}</span>{label}
                  </button>
                ))}
              </div>

              {/* Tier 2: variants (shown only when a group with variants is active) */}
              {activeWgVariants.length > 0 && (
                <div className="flex items-center gap-1.5 flex-wrap pl-10">
                  <button
                    onClick={() => setWgVariant("All")}
                    className={`rounded-full px-2.5 py-0.5 text-[11px] transition-all cursor-pointer ${
                      wgVariant === "All"
                        ? "bg-teal-400/15 text-teal-300 border border-teal-400/30"
                        : "bg-white/5 text-slate-500 border border-white/8 hover:text-slate-300"
                    }`}
                  >
                    All Colors
                  </button>
                  {activeWgVariants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setWgVariant(v)}
                      className={`rounded-full px-2.5 py-0.5 text-[11px] transition-all cursor-pointer ${
                        wgVariant === v
                          ? "bg-teal-400/15 text-teal-300 border border-teal-400/30"
                          : "bg-white/5 text-slate-500 border border-white/8 hover:text-slate-300"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Saltwater: sub-category row (Macroalgae / Corals / Marine Plants as they grow) */}
          {category === "Saltwater" && (
            <div className="mt-2 flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-slate-600 mr-1">Type:</span>
              <button
                onClick={() => setSubCategory("All")}
                className={`rounded-full px-2.5 py-0.5 text-xs transition-all cursor-pointer ${
                  subCategory === "All"
                    ? "bg-rose-400/20 text-rose-300 border border-rose-400/40"
                    : "bg-white/5 text-slate-500 border border-white/10 hover:text-white"
                }`}
              >
                All Saltwater
              </button>
              {SW_SUBCATEGORIES.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSubCategory(sub)}
                  className={`rounded-full px-2.5 py-0.5 text-xs transition-all cursor-pointer ${
                    subCategory === sub
                      ? "bg-rose-400/20 text-rose-300 border border-rose-400/40"
                      : "bg-white/5 text-slate-500 border border-white/10 hover:text-white"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Livestock: sub-category row (Snails / Shrimp / Fish as they grow) */}
          {category === "Livestock" && (
            <div className="mt-2 flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-slate-600 mr-1">Type:</span>
              <button
                onClick={() => setSubCategory("All")}
                className={`rounded-full px-2.5 py-0.5 text-xs transition-all cursor-pointer ${
                  subCategory === "All"
                    ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/40"
                    : "bg-white/5 text-slate-500 border border-white/10 hover:text-white"
                }`}
              >
                All Livestock
              </button>
              {LS_SUBCATEGORIES.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSubCategory(sub)}
                  className={`rounded-full px-2.5 py-0.5 text-xs transition-all cursor-pointer ${
                    subCategory === sub
                      ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/40"
                      : "bg-white/5 text-slate-500 border border-white/10 hover:text-white"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Aquarium plants: genus sub-category row */}
          {(category === "All" || category === "Plants") && (
            <div className="mt-2 flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-slate-600 mr-1">Genus:</span>
              <button
                onClick={() => setSubCategory("All")}
                className={`rounded-full px-2.5 py-0.5 text-xs transition-all cursor-pointer ${
                  subCategory === "All"
                    ? "bg-teal-400/20 text-teal-300 border border-teal-400/40"
                    : "bg-white/5 text-slate-500 border border-white/10 hover:text-white"
                }`}
              >
                All Genera
              </button>
              {subCategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSubCategory(sub)}
                  className={`rounded-full px-2.5 py-0.5 text-xs transition-all cursor-pointer ${
                    subCategory === sub
                      ? "bg-teal-400/20 text-teal-300 border border-teal-400/40"
                      : "bg-white/5 text-slate-500 border border-white/10 hover:text-white"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Count + active filter chips */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5 pb-2 flex items-center justify-between flex-wrap gap-2">
        <p className="text-xs text-slate-500">
          Showing{" "}
          <span className="text-slate-300 font-medium">{(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)}</span>
          {" "}of{" "}
          <span className="text-slate-300 font-medium">{filtered.length}</span> products
          {filtered.length !== allProducts.length && ` (${allProducts.length} total)`}
        </p>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X size={10} />
            Clear filters
          </button>
        )}
      </div>

      {/* Product grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <AnimatePresence mode="wait">
          {paginated.length > 0 ? (
            <motion.div
              key={`${category}-${subCategory}-${availability}-${search}-${page}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {paginated.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.03, 0.3), duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center py-24"
            >
              <div className="glass-strong rounded-2xl p-10 text-center max-w-md">
                <p className="text-lg font-medium text-white">No products found</p>
                <p className="mt-2 text-sm text-slate-400">Try adjusting your filters or search terms.</p>
                <button
                  onClick={resetFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-aqua-400/20 px-5 py-2 text-sm font-medium text-aqua-300 border border-aqua-400/30 hover:bg-aqua-400/30 transition-all cursor-pointer"
                >
                  <X size={14} />
                  Reset Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
              disabled={page === 1}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronLeft size={14} /> Prev
            </button>

            {/* Page numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                let pageNum: number;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (page <= 4) {
                  pageNum = i < 5 ? i + 1 : i === 5 ? -1 : totalPages;
                } else if (page >= totalPages - 3) {
                  pageNum = i === 0 ? 1 : i === 1 ? -1 : totalPages - (6 - i);
                } else {
                  pageNum = i === 0 ? 1 : i === 1 ? -1 : i === 5 ? -2 : i === 6 ? totalPages : page + (i - 3);
                }
                if (pageNum < 0) return (
                  <span key={i} className="px-1 text-slate-600 text-sm">…</span>
                );
                return (
                  <button
                    key={i}
                    onClick={() => { setPage(pageNum); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                    className={`w-9 h-9 rounded-full text-sm font-medium transition-all cursor-pointer ${
                      page === pageNum
                        ? "bg-aqua-400/20 text-aqua-300 border border-aqua-400/40"
                        : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
              disabled={page === totalPages}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
          <p className="text-center text-xs text-slate-600 mt-3">
            Page {page} of {totalPages}
          </p>
        </div>
      )}

      <Footer />
    </main>
  );
}
