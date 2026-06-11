"use client";

import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowLeft, Leaf, Sun, Droplets, MapPin, FlaskConical, Move, Zap, CheckCircle2 } from "lucide-react";
import { products } from "@/lib/mockData";
import { waterGardenProducts } from "@/lib/waterGardenData";
import { saltwaterProducts } from "@/lib/saltwaterData";
import { livestockProducts } from "@/lib/livestockData";
import { dryGoodsProducts } from "@/lib/dryGoodsData";
import { getProductImage } from "@/lib/imageMap";
import { findPlantDetail } from "@/lib/plantDetails";
import { CartUtils } from "@/lib/cart";
import AvailabilityBadge from "@/components/AvailabilityBadge";

const allProducts = [...products, ...waterGardenProducts, ...saltwaterProducts, ...livestockProducts, ...dryGoodsProducts];

const CARE_ROWS = [
  { key: "commonName",   label: "Common Name",        icon: Leaf },
  { key: "family",       label: "Family",              icon: FlaskConical },
  { key: "nativeTo",     label: "Native To",           icon: MapPin },
  { key: "lighting",     label: "Lighting",            icon: Sun },
  { key: "requirements", label: "Requirements",        icon: Droplets },
  { key: "growthForm",   label: "Growth Form",         icon: Move },
  { key: "growthRate",   label: "Growth Rate",         icon: Zap },
  { key: "trueAquatic",  label: "True Aquatic",        icon: CheckCircle2 },
  { key: "placement",    label: "Placement in Tank",   icon: Leaf },
  { key: "availableAs",  label: "Available As",        icon: Leaf },
] as const;

export default function ProductDetailClient() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const product = useMemo(() => allProducts.find((p) => p.id === id), [id]);
  const imageUrl = product ? getProductImage(product.id) : null;
  const detail = product?.scientificName ? findPlantDetail(product.scientificName) : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Product not found.</p>
      </div>
    );
  }

  const isOutOfSeason = product.availability === "OUT OF SEASON";
  const isBackorder = product.availability === "BACKORDER";

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="mb-8 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowLeft size={16} />
        Back to shop
      </button>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${product.imageGradient} aspect-square`}>
            {imageUrl ? (
              <img
                src={`${imageUrl}?format=800w`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center opacity-20">
                <Leaf size={80} className="text-teal-400" />
              </div>
            )}
          </div>
        </motion.div>

        {/* RIGHT: Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300 uppercase tracking-wider">
              {product.category}
            </span>
            <span className="rounded-full bg-aqua-400/10 px-3 py-1 text-xs font-medium text-aqua-300 uppercase tracking-wider">
              {product.waterType}
            </span>
            {product.subCategory && (
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400 uppercase tracking-wider">
                {product.subCategory}
              </span>
            )}
          </div>

          {/* Name */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {product.name}
            </h1>
            {product.scientificName && (
              <p className="mt-1 text-base italic text-slate-400">
                {product.scientificName}
              </p>
            )}
          </div>

          {/* Price + availability */}
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-aqua-400">
              ${product.price.toFixed(2)}
            </span>
            <AvailabilityBadge status={product.availability} />
          </div>

          {/* Size */}
          {product.size && (
            <p className="text-sm text-slate-400">
              Size: <span className="text-white">{product.size}</span>
            </p>
          )}

          {/* Add to cart */}
          <button
            onClick={() => CartUtils.add(product)}
            disabled={isOutOfSeason}
            className={`flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all cursor-pointer disabled:cursor-not-allowed w-full sm:w-auto ${
              isOutOfSeason
                ? "bg-slate-700/50 text-slate-500"
                : isBackorder
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30"
                : "bg-coral text-white shadow-lg shadow-coral/20 hover:bg-orange-500 hover:shadow-coral/40 hover:scale-105"
            }`}
          >
            <ShoppingCart size={18} />
            {isOutOfSeason ? "Out of Season" : isBackorder ? "Add to Cart (Backorder)" : "Add to Cart"}
          </button>

          {/* Short description (from product data) */}
          {product.description && (
            <p className="text-sm text-slate-400 leading-relaxed">
              {product.description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Detail section — only if FAN data exists */}
      {detail && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid lg:grid-cols-2 gap-8"
        >
          {/* Description */}
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-4">About this Plant</h2>
            <div className="text-sm text-slate-300 leading-relaxed space-y-4">
              {detail.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Care table */}
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-4">Care Guide</h2>
            <dl className="space-y-3">
              {CARE_ROWS.map(({ key, label, icon: Icon }) => {
                const value = detail[key as keyof typeof detail];
                if (!value) return null;
                return (
                  <div key={key} className="flex gap-3 py-2.5 border-b border-white/5 last:border-0">
                    <Icon size={15} className="text-aqua-400 mt-0.5 shrink-0" />
                    <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-1">
                      <dt className="text-xs text-slate-500 uppercase tracking-wider font-medium w-36 shrink-0">
                        {label}
                      </dt>
                      <dd className="text-sm text-white text-right">
                        {value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </motion.div>
      )}

      {/* Tags */}
      {product.tags && product.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </main>
  );
}
