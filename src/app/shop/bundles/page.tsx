import type { Metadata } from "next";
import Link from "next/link";
import { getBundles } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const URL = "https://shoreaquatic.com/shop/bundles";
const DESCRIPTION =
  "Aquarium plant bundles and variety packs: fill your tank in one box. Beginner variety packs, Anubias and macroalgae bundles and buy-more-save deals, priced below buying plants one at a time.";

export const metadata: Metadata = {
  title: { absolute: "Aquarium Plant Bundles & Variety Packs | Shore Aquatic" },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "Aquarium Plant Bundles & Variety Packs | Shore Aquatic",
    description: DESCRIPTION,
    url: URL,
  },
};

export default function BundlesPage() {
  const bundles = getBundles();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aquarium Plant Bundles & Variety Packs",
    itemListElement: bundles.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://shoreaquatic.com/shop/${p.id}`,
      name: p.name,
    })),
  };

  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#0b3d2e] via-[#0a2e24] to-ocean-950 border-b border-white/5">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center rounded-full border border-coral/30 bg-coral/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-300">
            Bundle Packs &amp; Combo Deals
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Aquarium Plant Bundles &amp; Variety Packs
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Fill your tank in one box. Variety packs, tank-size bundles and buy-more-save deals,
            priced below buying plants one at a time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <p className="mb-6 text-sm text-slate-500">{bundles.length} bundles</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bundles.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-14 glass rounded-2xl p-6 sm:p-8 text-sm text-slate-400 leading-relaxed">
          <h2 className="text-lg font-bold text-white">New to planted tanks?</h2>
          <p className="mt-2">
            Our{" "}
            <Link href="/blog/best-aquarium-plants-for-beginners" className="text-aqua-400 hover:underline">
              beginner plant guide
            </Link>{" "}
            explains where each plant goes, and every species has a free{" "}
            <Link href="/care-guides" className="text-aqua-400 hover:underline">
              care guide
            </Link>
            . Prefer to pick plants one by one?{" "}
            <Link href="/shop?category=Plants" className="text-aqua-400 hover:underline">
              Browse all plants
            </Link>
            .
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
