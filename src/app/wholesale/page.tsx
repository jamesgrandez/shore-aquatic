import type { Metadata } from "next";
import Link from "next/link";
import { getCurrentSession } from "@/lib/wholesale-session";
import { products } from "@/lib/mockData";
import { waterGardenProducts } from "@/lib/waterGardenData";
import { saltwaterProducts } from "@/lib/saltwaterData";
import { livestockProducts } from "@/lib/livestockData";
import { dryGoodsProducts } from "@/lib/dryGoodsData";
import { marineLivestockProducts } from "@/lib/marineLivestockData";
import WholesaleCatalog, { type WholesaleItem } from "@/components/WholesaleCatalog";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wholesale Aquarium Plants & Livestock — Florida | Shore Aquatic",
  description:
    "Shore Aquatic wholesale: Florida-grown aquarium plants, water-garden plants, snails, and saltwater livestock for retailers, public aquariums, and museums. Browse our full range and apply for trade pricing.",
  alternates: { canonical: "https://shoreaquatic.com/wholesale" },
  openGraph: {
    title: "Wholesale — Shore Aquatic",
    description:
      "Florida-grown aquarium plants and livestock at trade pricing for retailers, public aquariums, and museums. Browse the full range; apply with your resale certificate.",
    url: "https://shoreaquatic.com/wholesale",
  },
};

const APPLY_MAILTO =
  "mailto:info@shoreaquatic.com?subject=Wholesale%20Account%20Request&body=Business%20name%3A%0AResale%20certificate%3A%20(please%20attach)%0AShipping%20state%3A%0AWhat%20you'd%20like%20to%20order%20(plants%2C%20livestock%2C%20etc.)%3A%0A";
const LIST_HREF = "/downloads/shore-aquatic-wholesale-product-list.xlsx";

function toItems(): WholesaleItem[] {
  const all = [
    ...products,
    ...waterGardenProducts,
    ...saltwaterProducts,
    ...livestockProducts,
    ...dryGoodsProducts,
    ...marineLivestockProducts,
  ];
  const seen = new Set<string>();
  const out: WholesaleItem[] = [];
  for (const p of all) {
    if (!p.name || seen.has(p.id)) continue;
    seen.add(p.id);
    out.push({
      id: p.id,
      name: p.name,
      sci: p.scientificName ?? "",
      size: p.size ?? "",
      // Pond / water-garden season is closed — show as seasonal/ask.
      availability: p.category === "Water Garden" ? "BACKORDER" : p.availability,
      category: p.category,
      subCategory: p.subCategory ?? "General",
    });
  }
  return out;
}

export default async function WholesaleLandingPage() {
  const session = await getCurrentSession();
  const items = toItems();

  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      {/* Hero */}
      <section className="relative border-b border-white/5 bg-gradient-to-b from-[#0b3d2e] via-[#0a2e24] to-ocean-950 py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-[8%] w-[30vw] h-[30vw] rounded-full bg-emerald-600/10 blur-[120px]" />
          <div className="absolute bottom-0 right-[6%] w-[24vw] h-[24vw] rounded-full bg-aqua-500/10 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Wholesale & Trade
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Florida-Grown Aquatic Plants &amp; Livestock,{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-aqua-300 bg-clip-text text-transparent">
              at Trade Pricing
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            For retailers, public aquariums, museums, and institutions. Browse our full range below,
            then apply for a wholesale account to unlock pricing and ordering.
          </p>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap gap-2.5 text-xs">
            {[
              "★ State-Licensed FL Aquaculture · #AQ3616100",
              "Live Arrival Guarantee",
              "Free Shipping on Orders $200+",
              "FedEx 2-Day · Overnight on Request",
            ].map((b) => (
              <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200">
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={LIST_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-aqua-400 px-6 py-3 text-sm font-bold text-ocean-950 shadow-lg shadow-aqua-400/20 transition-all hover:bg-aqua-300"
            >
              ⬇ Download Full Product List (Excel)
            </a>
            <a
              href={APPLY_MAILTO}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              Apply for a Wholesale Account →
            </a>
            {session ? (
              <Link href="/wholesale/portal" className="text-sm text-aqua-400 hover:text-aqua-300">
                Go to your portal →
              </Link>
            ) : (
              <Link href="/wholesale/login" className="text-sm text-aqua-400 hover:text-aqua-300">
                Already approved? Sign in →
              </Link>
            )}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Product list shows everything we offer — no pricing. Pricing is provided to approved accounts.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-lg font-bold text-white">Open a wholesale account in 4 steps</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-4 text-sm">
          {[
            ["1. Email us", "Send your business name and resale certificate to info@shoreaquatic.com."],
            ["2. Tell us your focus", "Plants, livestock, dry goods — whatever you stock."],
            ["3. Get approved", "We set up your portal login, usually within 1 business day."],
            ["4. Sign in & order", "View pricing and place orders in the wholesale portal."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-semibold text-emerald-300">{t}</p>
              <p className="mt-1 text-slate-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a
            href={APPLY_MAILTO}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-500"
          >
            Email your resale certificate to apply →
          </a>
        </div>
      </section>

      {/* Full catalog — browse the range (no pricing) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-4 flex items-end justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-lg font-bold text-white">Everything we offer</h2>
            <p className="text-sm text-slate-400">
              {items.length.toLocaleString()} products across plants, water garden, livestock, and dry goods.
            </p>
          </div>
          <a href={LIST_HREF} className="text-sm text-aqua-400 hover:underline">
            ⬇ Download as Excel
          </a>
        </div>
        <WholesaleCatalog items={items} />
      </section>

      <Footer />
    </main>
  );
}
