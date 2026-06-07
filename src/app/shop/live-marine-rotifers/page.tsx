import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import VariantSelector from "./VariantSelector";

export const metadata: Metadata = {
  title: "Live Marine Rotifers (L-Type Brachionus) — Built for Breeders | Shore Aquatic",
  description:
    "L-type marine rotifer culture sized for first-feed marine larvae (150–360 microns). Day-0 productive density — feed today, not in 3 weeks. Signed Quality Report with every shipment. 4 oz, 16 oz, 32 oz, and 1 Gallon sizes.",
  alternates: { canonical: "https://shoreaquatic.com/shop/live-marine-rotifers" },
  openGraph: {
    title: "Live Marine Rotifers — Built for Breeders | Shore Aquatic",
    description:
      "L-type Brachionus rotifer culture at 500–1,000 per mL. Sized for clownfish, seahorse, mandarin, and dottyback fry. Signed Quality Report with every shipment.",
    type: "website",
    url: "https://shoreaquatic.com/shop/live-marine-rotifers",
    images: ["/images/rotifers/hero-packshot.jpg"],
  },
};

// ─── JSON-LD ────────────────────────────────────────────────────────────
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Live Marine Rotifers (L-Type Brachionus)",
  description:
    "L-type marine rotifer culture at 500–1,000 per mL, sized 150–360 microns for first-feed marine larvae. Made-to-order weekly. Includes signed Quality Report.",
  image: [
    "https://shoreaquatic.com/images/rotifers/hero-packshot.jpg",
    "https://shoreaquatic.com/images/rotifers/sizes-lineup.jpg",
    "https://shoreaquatic.com/images/rotifers/quality-report.jpg",
  ],
  brand: { "@type": "Organization", name: "Shore Aquatic" },
  category: "Live Aquarium Food",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "19.99",
    highPrice: "174.99",
    offerCount: "12",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Shore Aquatic" },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shoreaquatic.com" },
    { "@type": "ListItem", position: 2, name: "Shop", item: "https://shoreaquatic.com/shop" },
    { "@type": "ListItem", position: 3, name: "Live Marine Rotifers", item: "https://shoreaquatic.com/shop/live-marine-rotifers" },
  ],
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "Are these rotifers ready to feed when they arrive?",
    a: "Yes. Every order is made to ship — we harvest from a productive parent culture so you receive a live, dense, actively reproducing culture you can feed the day it arrives. No grow-out period required.",
  },
  {
    q: "What size rotifers are these?",
    a: "L-type Brachionus plicatilis, 150–360 microns. Sized for the mouth opening of first-feed marine larvae including clownfish fry, seahorse fry, mandarin fry, dottybacks, and angelfish.",
  },
  {
    q: "What is the density?",
    a: "500 to 1,000 rotifers per mL, measured before pack-out. Density is declared on the Quality Report that ships with every order.",
  },
  {
    q: "How long do they keep?",
    a: "Best within 5 days of arrival. Refrigerate immediately to slow metabolism, then warm to room temperature before feeding. Lid cracked open for air exchange — never seal airtight.",
  },
  {
    q: "Is there a Live Arrival Guarantee?",
    a: "Yes — 100% Live Arrival Guarantee on overnight orders. Photo or video evidence of an unopened bag at delivery required for claims. 2-day shipping carries reduced coverage given the longer transit window.",
  },
  {
    q: "Can I start my own culture from these?",
    a: "Yes. The product is a live, actively reproducing culture in its own growing water. Pour into a clean container with prepared saltwater, add gentle aeration and live phytoplankton (or commercial rotifer feed), harvest about 25% daily and your culture stays productive.",
  },
  {
    q: "When do you ship?",
    a: "We harvest Tuesday morning, pack and ship Tuesday afternoon, and deliver Wednesday (overnight) or Thursday/Friday (2-day). Order by Tuesday 10am ET to ship the same week.",
  },
  {
    q: "What if my tank temperature is colder or warmer than the bag?",
    a: "Float the sealed bag in your tank for 15 minutes to match temperature before adding rotifers. Rotifers tolerate 60–82°F — they slow at colder temps but resume activity at room temperature.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ═══════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════
export default function LiveMarineRotifersPage() {
  return (
    <main id="top" className="pt-16 min-h-screen bg-ocean-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ─── HERO with packshot + variant selector ─── */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-ocean-900/40 to-ocean-950 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-aqua-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-aqua-400">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Live Marine Rotifers</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-5 items-start">
            {/* Left: packshot + value strip */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-aqua-400/15 text-aqua-300 border border-aqua-400/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider">Live Culture</span>
                <span className="rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider">Day-Zero Productive</span>
                <span className="rounded-full bg-rose-400/15 text-rose-300 border border-rose-400/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider">100% Live Arrival</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
                Live Marine Rotifers
              </h1>
              <p className="mt-2 text-base text-slate-400">
                <em>L-type Brachionus plicatilis</em> · 150–360 microns · 500–1,000 per mL · made-to-order weekly
              </p>

              <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white">
                <Image
                  src="/images/rotifers/hero-packshot.jpg"
                  alt="Shore Aquatic Live Rotifer Culture — bottle and bagged units alongside a signed Quality Report"
                  width={1295}
                  height={816}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { h: "Made-to-Order", s: "Harvested fresh Tuesday. Shipped same day." },
                  { h: "Day-Zero Feeding", s: "Skip the 3-week grow-out other products require." },
                  { h: "Signed Quality Report", s: "Density declared, count verified, batch dated." },
                  { h: "L-Type Sized", s: "150–360 µm — fits first-feed larvae mouth opening." },
                ].map((v) => (
                  <div key={v.h} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-xs font-semibold text-aqua-300 uppercase tracking-wider mb-1">{v.h}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{v.s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <VariantSelector />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUILT FOR BREEDERS ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Built for breeders.</h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                If you&rsquo;re feeding first-feed marine larvae, you need a live food sized for their mouth opening
                and dense enough to fuel rapid growth. Our L-type Brachionus culture is matched to the species
                most commonly raised in home and commercial hatcheries.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                {[
                  "Clownfish fry — first 14 days post-hatch",
                  "Seahorse fry — first 30+ days post-release",
                  "Mandarin fry — entire larval window",
                  "Dottybacks & angels — first-feed window",
                  "Coral spawn larvae — pelagic phase",
                  "Filter-feeding inverts — copepods, soft corals, gorgonians",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-aqua-400 mt-0.5">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
              <Image
                src="/images/rotifers/who-is-this-for.jpg"
                alt="Six species first-feed grid: clownfish fry, seahorse fry, mandarin, dottybacks and angels, coral spawn, filter feeders"
                width={1024}
                height={1024}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── DAY ZERO ADVANTAGE ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold text-white mb-3">Feed today. Not in three weeks.</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Most live rotifer products are sold as starter cultures — you receive a low-density seed and grow it
                out over 14 to 21 days before you can actually feed your larvae. That timeline doesn&rsquo;t work for
                a breeder watching a spawn approach its first-feed window.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Our packs ship from a productive parent culture at 500–1,000 rotifers per mL. <strong className="text-aqua-300">Open the bag,
                acclimate the water, and feed directly.</strong> Use what you need; refrigerate the rest; harvest as needed
                across the next 5 days.
              </p>
              <div className="rounded-xl border border-aqua-400/30 bg-aqua-400/5 p-4">
                <div className="text-xs text-aqua-300 font-bold uppercase tracking-wider mb-1">Why this matters</div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Clownfish fry will starve within 72 hours of hatch if first-feed isn&rsquo;t available. A 3-week
                  grow-out from a seed culture isn&rsquo;t a buying option — it&rsquo;s a scheduling commitment.
                </p>
              </div>
            </div>
            <div className="md:order-1 rounded-2xl overflow-hidden border border-white/10 bg-white">
              <Image
                src="/images/rotifers/day-zero-advantage.jpg"
                alt="Day Zero advantage timeline comparison: other live rotifer products require 21 days to reach productive density, our made-to-order pack starts feeding on Day 1"
                width={1024}
                height={1024}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PACK DATE IS SHIP DATE ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Pack date is ship date.</h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                From culture tank to your door in 48 hours. We don&rsquo;t hold inventory in a warehouse — every order
                is harvested fresh from a productive parent culture, tested for density and vigor, packed in
                phase-change insulated mailers, and shipped the same afternoon.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-aqua-300 bg-aqua-400/10 border border-aqua-400/30 rounded px-2 py-1 whitespace-nowrap">TUE 7AM</span>
                  <span className="text-slate-300"><strong className="text-white">Harvested fresh.</strong> Adults counted at peak density.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-aqua-300 bg-aqua-400/10 border border-aqua-400/30 rounded px-2 py-1 whitespace-nowrap">TUE 1PM</span>
                  <span className="text-slate-300"><strong className="text-white">Quality Report signed.</strong> Density, vigor, water parameters verified.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-aqua-300 bg-aqua-400/10 border border-aqua-400/30 rounded px-2 py-1 whitespace-nowrap">TUE 4PM</span>
                  <span className="text-slate-300"><strong className="text-white">Packed and shipped.</strong> Insulated kit with phase-change cold pack.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-aqua-300 bg-aqua-400/10 border border-aqua-400/30 rounded px-2 py-1 whitespace-nowrap">WED</span>
                  <span className="text-slate-300"><strong className="text-white">At your door.</strong> Refrigerate immediately. Use within 5 days.</span>
                </li>
              </ul>
              <p className="mt-5 text-xs text-slate-500 italic">
                Order by Tuesday 10am ET to ship the same week. Orders received Wed–Mon ship the following Tuesday.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
              <Image
                src="/images/rotifers/pack-to-ship-timeline.jpg"
                alt="Pack date is ship date weekly schedule: Tuesday morning harvest, Tuesday afternoon quality report and shipping, Wednesday delivery"
                width={1024}
                height={1024}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIZE MATTERS ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold text-white mb-3">Size matters for first-feed larvae.</h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                Larval clownfish, seahorses, and mandarins have a mouth opening of approximately 400 microns at first
                feed. The food you offer needs to be small enough to ingest yet large enough to fuel growth.
                L-type <em>Brachionus plicatilis</em> at 150–360 microns is the textbook fit.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Lorica</div>
                  <div className="text-base font-bold text-white mt-1">150–360 µm</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Doubling time</div>
                  <div className="text-base font-bold text-white mt-1">~24 hrs</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Salinity</div>
                  <div className="text-base font-bold text-white mt-1">5–40 ppt</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-slate-400 italic">
                Small enough to ingest. Big enough to nourish.
              </p>
            </div>
            <div className="md:order-1 rounded-2xl overflow-hidden border border-white/10 bg-white">
              <Image
                src="/images/rotifers/mouth-size.jpg"
                alt="Size comparison: sea salt grain 300 microns, Brachionus plicatilis L-type 150 to 360 microns, larval fish mouth opening approximately 400 microns"
                width={1024}
                height={1024}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUALITY REPORT ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-3 text-center">Every bag is a document, not a guess.</h2>
          <p className="text-slate-400 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            A signed Certificate of Analysis ships with every order. You know the exact density, vigor rating, and
            batch ID of what you received. No estimates, no &ldquo;target&rdquo; numbers — measured before pack-out and
            recorded on paper.
          </p>

          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
              <Image
                src="/images/rotifers/quality-report.jpg"
                alt="Sample Quality Report showing culture density, total estimated count, mobility rating, and signature"
                width={1200}
                height={753}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-aqua-400/20 text-aqua-300 font-bold text-sm border border-aqua-400/40">1</div>
                  <h3 className="text-base font-bold text-white">Density declared</h3>
                </div>
                <p className="text-sm text-slate-400 pl-10">Measured before pack-out. Every bag, every batch.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-aqua-400/20 text-aqua-300 font-bold text-sm border border-aqua-400/40">2</div>
                  <h3 className="text-base font-bold text-white">Count verified</h3>
                </div>
                <p className="text-sm text-slate-400 pl-10">Total population quantified, not estimated.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-aqua-400/20 text-aqua-300 font-bold text-sm border border-aqua-400/40">3</div>
                  <h3 className="text-base font-bold text-white">Signed and dated</h3>
                </div>
                <p className="text-sm text-slate-400 pl-10">Traceable batch IDs on every shipment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIZES LINEUP ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-3 text-center">Choose your size.</h2>
          <p className="text-slate-400 leading-relaxed mb-10 text-center max-w-2xl mx-auto">
            From a single-feed test bottle to a hatchery-scale gallon bag. Density is identical across sizes —
            500 to 1,000 rotifers per mL — so per-larva nutrition is the same regardless of pack volume.
          </p>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white max-w-3xl mx-auto mb-10">
            <Image
              src="/images/rotifers/sizes-lineup.jpg"
              alt="Four pack sizes: 4 oz bottle, 16 oz bottle, 32 oz bottle, 1 gallon bag — all Shore Aquatic Live Rotifer Culture with 100% Live Arrival Guarantee"
              width={1024}
              height={1024}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { size: "4 oz",     vol: "118 mL",  count: "~60k – 120k",    use: "Single feeding / test pack",     pickup: 19.99,  overnight: 69.99,  twoDay: 49.99 },
              { size: "16 oz",    vol: "473 mL",  count: "~240k – 470k",   use: "Small clownfish breeder",        pickup: 39.99,  overnight: 89.99,  twoDay: 69.99 },
              { size: "32 oz",    vol: "946 mL",  count: "~470k – 950k",   use: "Mid-sized breeder",              pickup: 59.99,  overnight: 109.99, twoDay: 89.99 },
              { size: "1 Gallon", vol: "3.8 L",   count: "~1.9M – 3.8M",   use: "Hatchery / serious breeder",     pickup: 124.99, overnight: 174.99, twoDay: 154.99 },
            ].map((s) => (
              <div key={s.size} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-lg font-bold text-white">{s.size}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{s.vol} · {s.count}</p>
                <p className="text-sm text-slate-400 italic mt-2 mb-4">{s.use}</p>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between"><span className="text-slate-500">Local Pickup</span><span className="text-aqua-300 font-semibold">${s.pickup.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Overnight</span><span className="text-aqua-300 font-semibold">${s.overnight.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">2-Day</span><span className="text-aqua-300 font-semibold">${s.twoDay.toFixed(2)}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CARE & USE ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-3">On arrival.</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">
            Rotifers are hardy but they don&rsquo;t love surprises. Get them refrigerated, room-temp them before
            feeding, and treat them like a live culture (not a frozen food).
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "1", h: "Open and inspect", d: "Tilt the bag — water should look slightly cloudy or tinted. That's normal — it's the algae the rotifers feed on. Refrigerate immediately." },
              { n: "2", h: "Feed your tank", d: "Pour or pipette directly, or strain through a fine (~53-micron) sieve and rinse into the target tank. Turn off skimmers and strong return flow for 15–60 minutes." },
              { n: "3", h: "Start your own culture", d: "Add to a clean container of prepared saltwater with gentle aeration and low light. Feed live phytoplankton or rotifer feed. Harvest about 25% daily." },
              { n: "4", h: "Storage", d: "Refrigerator-safe for 5–7 days with the lid cracked for air exchange. Don't seal airtight. Smaller bottles handle storage better than the gallon bag." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-aqua-400/20 text-aqua-300 font-bold text-sm border border-aqua-400/40 mb-3">{s.n}</div>
                <h3 className="text-base font-bold text-white mb-2">{s.h}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-3">Frequently asked.</h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Everything we get asked before someone places their first order.
          </p>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4 hover:bg-white/[0.05] transition-colors">
                  <span className="text-base font-semibold text-white pr-2">{f.q}</span>
                  <span className="text-aqua-300 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-14 bg-gradient-to-b from-ocean-950 to-aqua-900/20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to order?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Made-to-order weekly. Tuesday harvest, Wednesday delivery. Pick your size and fulfillment in the
            selector at the top of this page — or email us and we&rsquo;ll confirm live availability for your
            target arrival date.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:shoreaquatic@gmail.com?subject=Live%20Rotifer%20Order"
              className="rounded-full bg-aqua-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-ocean-950 shadow-lg shadow-aqua-400/20 transition-all hover:bg-aqua-300"
            >
              Email to Order →
            </a>
            <a
              href="#top"
              className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-bold uppercase tracking-wider text-slate-300 hover:border-aqua-400/40 hover:text-aqua-300 transition-all"
            >
              Back to size selector
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
