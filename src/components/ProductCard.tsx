"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/mockData";
import { CartUtils } from "@/lib/cart";
import AvailabilityBadge from "./AvailabilityBadge";

function CategoryIcon({ category }: { category: string }) {
  if (category === "Plants") {
    return (
      <svg viewBox="0 0 48 48" className="w-16 h-16 opacity-20" aria-hidden>
        <path d="M24 44 C24 44,24 20,24 12 C24 4,16 2,10 8 C4 14,8 24,24 20" fill="#10B981" />
        <path d="M24 44 C24 44,24 24,24 16 C24 8,32 4,38 10 C44 16,38 28,24 24" fill="#059669" />
      </svg>
    );
  }
  if (category === "Livestock") {
    return (
      <svg viewBox="0 0 48 48" className="w-16 h-16 opacity-20" aria-hidden>
        <ellipse cx="22" cy="24" rx="14" ry="9" fill="#3B82F6" />
        <path d="M36 24 C40 18,44 16,44 24 C44 32,40 30,36 24" fill="#60A5FA" />
        <circle cx="14" cy="22" r="2" fill="white" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="w-16 h-16 opacity-20" aria-hidden>
      <rect x="8" y="14" width="32" height="24" rx="3" stroke="#94A3B8" strokeWidth="2" fill="none" />
      <circle cx="24" cy="26" r="5" stroke="#67E8F9" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const isOutOfSeason = product.availability === "OUT OF SEASON";
  const isBackorder = product.availability === "BACKORDER";

  const handleAdd = () => {
    CartUtils.add(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
      className="group glass flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/20"
    >
      {/* Top gradient area */}
      <div
        className={`relative h-44 bg-gradient-to-br ${product.imageGradient} flex items-center justify-center`}
      >
        <CategoryIcon category={product.category} />
      </div>

      {/* Info panel */}
      <div className="flex flex-1 flex-col p-5">
        {/* Badges row */}
        <div className="mb-2 flex flex-wrap gap-1.5">
          <span className="inline-block rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-300 uppercase tracking-wider">
            {product.category}
          </span>
          <span className="inline-block rounded-full bg-aqua-400/10 px-2 py-0.5 text-[10px] font-medium text-aqua-300 uppercase tracking-wider">
            {product.waterType}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-base font-bold text-white leading-tight">
          {product.name}
        </h3>

        {/* Scientific name */}
        {product.scientificName && (
          <p className="mt-0.5 text-xs italic text-slate-500">
            {product.scientificName}
          </p>
        )}

        {/* Description */}
        <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Size */}
        {product.size && (
          <p className="mt-1.5 text-xs text-slate-500">
            Size: {product.size}
          </p>
        )}

        {/* Spacer */}
        <div className="mt-auto pt-4" />

        {/* Bottom row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            <span className="text-xl font-bold text-aqua-400">
              ${product.price.toFixed(2)}
            </span>
            <AvailabilityBadge status={product.availability} />
          </div>

          <button
            onClick={handleAdd}
            disabled={isOutOfSeason}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all cursor-pointer disabled:cursor-not-allowed ${
              isOutOfSeason
                ? "bg-slate-700/50 text-slate-500"
                : isBackorder
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30"
                : "bg-coral text-white shadow-lg shadow-coral/20 hover:bg-orange-500 hover:shadow-coral/40"
            }`}
          >
            <ShoppingCart size={14} />
            {isOutOfSeason ? "Unavailable" : "Add to Cart"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
