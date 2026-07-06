import type { Metadata } from "next";
import Link from "next/link";
import { getCurrentSession } from "@/lib/wholesale-session";
import { products } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Wholesale Portal",
  description: "Shore Aquatic wholesale catalog, price list, and download center for licensed retailers.",
  robots: { index: false, follow: false },
};

const NON_PLANT_KEYWORDS = [
  "aquascaping", "tool", "scissors", "tweezers", "spatula",
  "book", "poster", "kasselmann", "driftwood", "spider wood",
  "malasian", "lucky bamboo", "assorted",
];

function isRealPlant(name: string) {
  const n = name.toLowerCase();
  return !NON_PLANT_KEYWORDS.some((k) => n.includes(k));
}

export default async function WholesalePortalLanding() {
  const session = (await getCurrentSession())!;  // layout already validated

  // Compute live counts so the dashboard stays accurate as inventory shifts
  const realPlants = products.filter(
    (p) =>
      p.category === "Plants" &&
      p.availability === "AVAILABLE" &&
      isRealPlant(p.name)
  );
  const totalSkus = realPlants.length;
  const genera = new Set(
    realPlants.map((p) => (p.scientificName || p.name).split(" ")[0])
  );

  return (
    <>
      {/* Welcome */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Welcome, {session.company}
          </h1>
          <p className="mt-3 text-slate-400 max-w-2xl">
            Browse our current B2B catalog, download the latest price list, and place your next order. Pricing
            shown is net wholesale before shipping. Minimum order quantity is 6 units per SKU.
          </p>
        </div>
      </section>

      {/* Stats cards */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-3xl font-bold text-aqua-400">{totalSkus}</div>
            <div className="mt-1 text-sm text-slate-400">Available SKUs</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-3xl font-bold text-aqua-400">{genera.size}</div>
            <div className="mt-1 text-sm text-slate-400">Unique genera</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-3xl font-bold text-aqua-400">$5.00+</div>
            <div className="mt-1 text-sm text-slate-400">Wholesale price floor / unit</div>
          </div>
        </div>
      </section>

      {/* Action cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/wholesale/portal/catalog"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-aqua-400/40 hover:bg-aqua-400/5"
          >
            <div className="text-3xl mb-3">🌿</div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-aqua-300 transition-colors">
              Browse Interactive Catalog
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sortable, filterable HTML table with all {totalSkus} active SKUs. Filter by format
              (Leaded Bunch, 2-inch Potted, Bare Root, Tissue Culture Cup, Mat, Specimen), genus,
              or price range.
            </p>
            <p className="mt-4 text-xs font-medium text-aqua-400 group-hover:translate-x-1 transition-transform">
              Open catalog →
            </p>
          </Link>

          <a
            id="download"
            href="/api/wholesale/download"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-aqua-400/40 hover:bg-aqua-400/5"
          >
            <div className="text-3xl mb-3">📥</div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-aqua-300 transition-colors">
              Download Price List (Excel)
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Branded XLSX with auto-filter and grouped formats. Print-ready, importable into
              your purchasing system. Same data as the interactive catalog, downloadable for offline use.
            </p>
            <p className="mt-4 text-xs font-medium text-aqua-400 group-hover:translate-x-1 transition-transform">
              Download .xlsx →
            </p>
          </a>
        </div>
      </section>

      {/* Wholesale terms summary */}
      <section className="pb-20 bg-ocean-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl font-bold text-white mb-4">Account Terms</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-slate-400">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="font-semibold text-white mb-1">MOQ</div>
              6 units per SKU (mats sold individually)
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="font-semibold text-white mb-1">Payment</div>
              Net 30 (approved accounts) or prepaid
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="font-semibold text-white mb-1">Free Shipping</div>
              On orders over $500
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="font-semibold text-white mb-1">DOA Window</div>
              24 hours from delivery, photo evidence
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="font-semibold text-white mb-1">Heat Packs</div>
              Included Nov–Mar at no extra charge
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="font-semibold text-white mb-1">Contact</div>
              <a href="mailto:shoreaquatic@gmail.com" className="text-aqua-400 hover:text-aqua-300">
                shoreaquatic@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
