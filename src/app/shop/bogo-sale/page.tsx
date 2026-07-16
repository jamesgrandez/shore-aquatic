import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/mockData";
import { waterGardenProducts } from "@/lib/waterGardenData";
import { saltwaterProducts } from "@/lib/saltwaterData";
import { livestockProducts } from "@/lib/livestockData";
import { dryGoodsProducts } from "@/lib/dryGoodsData";
import { marineLivestockProducts } from "@/lib/marineLivestockData";
import { BOGO_SALE } from "@/lib/promotions";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const allProducts = [
  ...products,
  ...waterGardenProducts,
  ...saltwaterProducts,
  ...livestockProducts,
  ...dryGoodsProducts,
  ...marineLivestockProducts,
];

export const metadata: Metadata = {
  title: "Buy One, Get One FREE — Plant Sale",
  description:
    "Buy One, Get One FREE on select Florida-grown aquarium plants. No code needed — add two from the collection and the second is free at checkout. While supplies last.",
  alternates: { canonical: "https://shoreaquatic.com/shop/bogo-sale" },
  openGraph: {
    title: "Buy One, Get One FREE — Aquarium Plant Sale | Shore Aquatic",
    description:
      "BOGO on select aquarium plants — no code needed, applied automatically at checkout. Limited stock on rare bulbs and swords.",
    url: "https://shoreaquatic.com/shop/bogo-sale",
  },
};

export default function BogoSalePage() {
  // Preserve the curated order from the promo config (specials first).
  const saleProducts = BOGO_SALE.productIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter((p): p is (typeof allProducts)[number] => Boolean(p));

  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      {/* Hero */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#0b3d2e] via-[#0a2e24] to-ocean-950 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-[10%] w-[30vw] h-[30vw] rounded-full bg-emerald-600/10 blur-[120px]" />
          <div className="absolute bottom-0 right-[8%] w-[24vw] h-[24vw] rounded-full bg-yellow-500/10 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-300">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Fresh Restock · This Week
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Buy One, Get One{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-yellow-300 bg-clip-text text-transparent">
              FREE
            </span>{" "}
            🌿
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {BOGO_SALE.blurb}
          </p>
          {/* Mechanic strip */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300">
            <span>🛒 Add any 2 below</span>
            <span className="text-slate-600">→</span>
            <span>✨ 2nd is free automatically</span>
            <span className="text-slate-600">→</span>
            <span className="text-emerald-300 font-semibold">No code needed</span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
          <p className="text-sm text-slate-400">
            {saleProducts.length} plants in the sale · rare bulbs &amp; swords are{" "}
            <span className="text-coral font-medium">limited stock</span>
          </p>
          <Link href="/shop?category=Plants" className="text-sm text-aqua-400 hover:underline">
            Browse all plants →
          </Link>
        </div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* How it works */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white">How the Buy One, Get One works</h2>
          <div className="mt-4 grid sm:grid-cols-3 gap-5 text-sm text-slate-400">
            <div>
              <p className="font-semibold text-emerald-300">1. Add two</p>
              <p className="mt-1 leading-relaxed">Add any two plants from this collection to your cart — mix and match, they don&apos;t have to be the same.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-300">2. Free applies itself</p>
              <p className="mt-1 leading-relaxed">The lower-priced plant comes off automatically at checkout. No coupon code to remember.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-300">3. Ships fresh</p>
              <p className="mt-1 leading-relaxed">Florida-grown and hand-selected, with free 2-day shipping on orders over $100.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
