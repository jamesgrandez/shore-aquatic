import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import VariantSelector from "./VariantSelector";

export const metadata: Metadata = {
  title: "Live Marine Rotifers — Live Aquarium, Reef & Fry Food Culture",
  description:
    "High-density live marine rotifer culture for larval fish, corals, seahorses, and reef tanks. Shipped alive in growing water at 500–1,000 per mL. 1/2 gallon, 1 gallon, 2 gallon. Free local pickup or overnight shipping included.",
  keywords: [
    "live rotifers", "marine rotifers", "saltwater rotifers", "live fish food",
    "clownfish larvae food", "coral food", "seahorse food", "rotifer culture",
    "live zooplankton", "reef tank food", "larval fish food", "fry food",
  ],
  alternates: { canonical: "https://shoreaquatic.com/shop/live-marine-rotifers" },
  openGraph: {
    title: "Live Marine Rotifers — Reef & Fry Food Culture",
    description:
      "Live marine rotifer culture at 500–1,000 per mL, shipped in their own growing water. Feed clownfish larvae, corals, seahorses, and reef inverts.",
    url: "https://shoreaquatic.com/shop/live-marine-rotifers",
    type: "website",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Live Marine Rotifers",
  description:
    "Live marine rotifer culture shipped in its own growing water at 500–1,000 rotifers per mL. For larval fish, corals, seahorses, and reef inverts.",
  brand: { "@type": "Brand", name: "Shore Aquatic" },
  category: "Live Aquarium Food",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "75",
    highPrice: "250",
    offerCount: 9,
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Shore Aquatic" },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this sold by count or by volume?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By volume. Each size is a measured volume of live culture at a density of 500–1,000 rotifers per mL. Approximate count ranges are a guide only — we don't guarantee an exact headcount, which is normal for live culture products.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a separate shipping charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Shipping is already built into the shipped price — $50 for overnight, $30 for 2-day, flat per shipment. Local pickup has no shipping cost at all.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of rotifers are these?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A live marine (saltwater) rotifer strain well suited to reef tanks and larval feeding. Size ~150–250 microns.",
      },
    },
    {
      "@type": "Question",
      name: "How long will they last before I use them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Best within a few days of arrival. Keep them cool, give them air exchange (lid cracked, not sealed), and feed live phytoplankton if you're holding longer.",
      },
    },
    {
      "@type": "Question",
      name: "What do I feed them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Live phytoplankton is ideal; a commercial rotifer feed also works. Keep the water lightly tinted green — enough food without fouling.",
      },
    },
  ],
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

const SPECS: { label: string; value: string }[] = [
  { label: "Form",         value: "Live, actively reproducing culture in growing water" },
  { label: "Density",      value: "500–1,000 rotifers per mL" },
  { label: "Rotifer Size", value: "~150–250 microns" },
  { label: "Sizes",        value: "1/2 gallon, 1 gallon, 2 gallon" },
  { label: "Strain",       value: "Marine (saltwater)" },
  { label: "Origin",       value: "Cultured in Fort Lauderdale, FL" },
];

const TARGETS: { emoji: string; name: string; detail: string }[] = [
  { emoji: "🐠", name: "Clownfish & marine fry",  detail: "First food for larvae too small for brine shrimp" },
  { emoji: "🪸", name: "Corals",                  detail: "LPS, SPS, and zoanthids actively feed on rotifers" },
  { emoji: "🦐", name: "Filter feeders",          detail: "Featherdusters, sponges, tube worms, clams" },
  { emoji: "🐴", name: "Seahorses & pipefish",    detail: "Juvenile syngnathids depend on live zooplankton" },
  { emoji: "🐟", name: "Mandarins & dragonets",   detail: "A way to fatten finicky feeders" },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is this sold by count or by volume?",
    a: "By volume. Each size is a measured volume of live culture at a density of 500–1,000 rotifers per mL. We give approximate count ranges as a guide, but we don't guarantee an exact headcount — that's normal for a live culture product.",
  },
  {
    q: "Is there a separate shipping charge?",
    a: "No. Shipping is already built into the shipped price — $50 for overnight, $30 for 2-day, flat per shipment. Pick local pickup and there's no shipping cost at all.",
  },
  {
    q: "What kind of rotifers are these?",
    a: "A live marine (saltwater) rotifer strain well suited to reef and larval feeding. ~150–250 micron size class. We don't publish a specific species name until our strain ID is independently confirmed — happy to discuss specifics by email.",
  },
  {
    q: "How long will they last before I use them?",
    a: "Best within a few days of arrival. Keep them cool, give them air exchange (lid cracked, not sealed), and feed live phytoplankton if you're holding longer. Many keepers refrigerate short-term.",
  },
  {
    q: "What do I feed them?",
    a: "Live phytoplankton is ideal; a commercial rotifer feed also works. Keep the water lightly tinted green — enough food without fouling.",
  },
  {
    q: "Can I start my own culture from this?",
    a: "Yes — that's part of why we ship in growing water instead of as a dewatered concentrate. Add to clean prepared saltwater with gentle aeration and low light, feed phytoplankton, and harvest ~25% daily to keep the population young and productive.",
  },
  {
    q: "Do you ship year-round?",
    a: "We ship Monday through Wednesday so nothing sits in a facility over a weekend. We hold shipments when origin or destination temperatures are extreme.",
  },
  {
    q: "Is there a live arrival guarantee?",
    a: "Yes on overnight orders. 2-Day orders carry more transit risk, so the guarantee is reduced or waived — rotifers tolerate transit better than copepods or fish, but we want you to know the trade-off up front.",
  },
];

export default function RotifersPage() {
  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-ocean-800 to-ocean-950 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-slate-700">/</span>
            <Link href="/shop" className="hover:text-white">Shop</Link>
            <span className="mx-2 text-slate-700">/</span>
            <span className="text-slate-300">Live Marine Rotifers</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image gallery */}
            <div>
              <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-gradient-to-br from-ocean-700 to-ocean-900 border border-white/10 relative">
                {/* Drop image at public/images/rotifers/microscope-1.jpg */}
                <img
                  src="/images/rotifers/microscope-1.jpg"
                  alt="Live marine rotifers under microscope at 400x — Shore Aquatic culture"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnail strip — drop additional photos at /public/images/rotifers/microscope-N.jpg to enable */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                {[2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className="aspect-square rounded-lg bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-900 border border-white/10 flex items-center justify-center"
                  >
                    <span className="text-[10px] text-slate-600 uppercase tracking-wide">Photo {n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Title + selector */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-full bg-aqua-400/10 border border-aqua-400/20 px-2.5 py-1 text-[11px] font-bold text-aqua-300 uppercase tracking-wide">
                  Live Culture
                </span>
                <span className="rounded-full bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 text-[11px] font-medium text-cyan-300">
                  Marine / Saltwater
                </span>
                <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  Live Arrival Guarantee*
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Live Marine Rotifers
              </h1>
              <p className="mt-2 text-lg text-slate-400">
                Live first food for fry, reef inverts, and finicky feeders
              </p>
              <p className="mt-5 text-slate-300 leading-relaxed">
                Microscopic zooplankton, shipped alive in their own growing water at <span className="text-white font-semibold">500–1,000 per mL</span>. Feed straight away, or grow your own ongoing supply.
              </p>

              <div className="mt-8">
                <VariantSelector />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spec strip */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {SPECS.map((s) => (
              <div key={s.label} className="flex items-start justify-between border-b border-white/5 pb-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{s.label}</span>
                <span className="text-sm text-slate-200 text-right max-w-[60%]">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">What they are, what they do</h2>
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>
              Rotifers are microscopic zooplankton and one of the most important live first foods in the marine aquarium and aquaculture world. Their tiny size and slow, drifting swim make them the go-to starter food for larval and fry fish whose mouths are too small for anything else — clownfish and other marine larvae especially.
            </p>
            <p>
              They're also readily taken by corals, filter-feeding invertebrates, seahorses, pipefish, and mandarins.
            </p>
            <p>
              Our rotifers ship as a <span className="text-white font-semibold">live, actively reproducing culture</span> in their own growing water at a density of 500–1,000 per mL — <span className="text-white font-semibold">not a dewatered concentrate</span>. That means you can feed them straight away, or pour the culture into a bucket and grow your own ongoing supply.
            </p>
            <p>
              A rotifer is only as nutritious as what it has eaten, so ours are raised on a live microalgae / phytoplankton blend right up to harvest, so they arrive gut-loaded and ready to pass that nutrition on to your tank.
            </p>
          </div>
        </div>
      </section>

      {/* Target animals */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Who eats them</h2>
          <p className="text-slate-400 mb-8">Animals that benefit most from live rotifer feedings.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {TARGETS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-3xl mb-2">{t.emoji}</div>
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-xs text-slate-400 mt-1 leading-relaxed">{t.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Full pricing</h2>
          <p className="text-slate-400 mb-6">Shipping is baked into the price. Pickup is free. Flat fee per shipment, not per gallon.</p>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/10">
                  <th className="text-left p-4 font-semibold text-slate-300">Size</th>
                  <th className="text-right p-4 font-semibold text-slate-300">Local Pickup</th>
                  <th className="text-right p-4 font-semibold text-slate-300">Overnight (incl. $50)</th>
                  <th className="text-right p-4 font-semibold text-slate-300">2-Day (incl. $30)</th>
                  <th className="text-right p-4 font-semibold text-slate-300 hidden sm:table-cell">Approx. Rotifers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-bold text-white">1/2 Gallon</td>
                  <td className="p-4 text-right text-aqua-300 font-semibold">$75</td>
                  <td className="p-4 text-right text-slate-200">$125</td>
                  <td className="p-4 text-right text-slate-200">$105</td>
                  <td className="p-4 text-right text-slate-500 text-xs hidden sm:table-cell">~0.95–1.9 M</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-bold text-white">1 Gallon</td>
                  <td className="p-4 text-right text-aqua-300 font-semibold">$125</td>
                  <td className="p-4 text-right text-slate-200">$175</td>
                  <td className="p-4 text-right text-slate-200">$155</td>
                  <td className="p-4 text-right text-slate-500 text-xs hidden sm:table-cell">~1.9–3.8 M</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">2 Gallon</td>
                  <td className="p-4 text-right text-aqua-300 font-semibold">$200</td>
                  <td className="p-4 text-right text-slate-200">$250</td>
                  <td className="p-4 text-right text-slate-200">$230</td>
                  <td className="p-4 text-right text-slate-500 text-xs hidden sm:table-cell">~3.8–7.6 M</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-aqua-400/20 bg-aqua-400/5 p-5">
            <div className="text-sm font-bold text-aqua-300 uppercase tracking-wide mb-1">Bulk & standing orders</div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Each additional gallon is <span className="font-bold text-white">$100/gallon</span>, plus the flat shipping fee once per shipment ($50 overnight / $30 2-day). Example: 3 gallons shipped overnight = $300 + $50 = <span className="font-bold text-white">$350</span>. Email for recurring weekly delivery rates.
            </p>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Approximate rotifer counts are derived from the 500–1,000/mL density and are a guide only. Product is sold by volume, not by guaranteed count.
          </p>
        </div>
      </section>

      {/* Care & Use */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Care &amp; use</h2>
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-base font-bold text-white mb-2">On arrival</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Open the container and let it reach room or tank temperature before use. If the culture looks cloudy or the water is tinted, that's normal — it's the algae the rotifers feed on.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-base font-bold text-white mb-2">To feed your tank</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pour or pipette directly into the tank, or strain through a fine (~53-micron) sieve and rinse into your target tank with a turkey baster or pipette. Turn off skimmers and strong return flow for 15–60 minutes so animals can graze.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-base font-bold text-white mb-2">To start your own culture</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Add the culture to a clean container of prepared saltwater with gentle aeration (a light rolling bubble) and low light, and feed live phytoplankton or a rotifer feed. Harvest ~25% daily to keep the population young and productive.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 p-6">
              <h3 className="text-base font-bold text-amber-300 mb-2">Storage</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Rotifers are hardy. Kept cool with the lid cracked for air exchange, an unused culture will hold for several days; many keepers refrigerate short-term. <span className="font-bold text-amber-300">Don't seal the container airtight</span> — they need oxygen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Pickup */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Shipping &amp; pickup</h2>
          <p className="text-slate-400 mb-8">Pick the option that matches your timeline. Domestic US only.</p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-6">
              <div className="text-xs font-bold text-emerald-300 uppercase tracking-wide mb-2">Local Pickup</div>
              <div className="text-2xl font-bold text-white mb-2">FREE</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Fort Lauderdale, FL. Email or call to schedule a pickup time. No shipping cost — exactly the price you see for the pickup column.
              </p>
            </div>
            <div className="rounded-2xl border border-aqua-400/30 bg-aqua-400/5 p-6 ring-1 ring-aqua-400/20">
              <div className="text-xs font-bold text-aqua-300 uppercase tracking-wide mb-2">Overnight</div>
              <div className="text-2xl font-bold text-white mb-2">$50 baked in</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Recommended. Tightest live-arrival window. Ships Mon–Wed. <span className="font-bold text-white">Live arrival guaranteed.</span>
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-2">2-Day</div>
              <div className="text-2xl font-bold text-white mb-2">$30 baked in</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Budget option. Rotifers tolerate transit better than copepods or fish, but carries more risk than overnight. Live arrival is reduced or waived on 2-day.
              </p>
            </div>
          </div>

          <div className="mt-6 text-xs text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-400">Why a flat shipping fee?</span> Live cultures need overnight insulated boxes regardless of order size, so we absorb the carrier cost into a per-shipment flat. Order more gallons and the shipping cost per gallon drops fast.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Frequently asked</h2>
          <div className="space-y-2">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 list-none">
                  <span className="text-sm font-semibold text-white pr-4">{f.q}</span>
                  <span className="text-slate-500 group-open:rotate-45 transition-transform text-xl leading-none flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to feed?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We confirm live availability before charging and ship Mon–Wed for best transit. Local pickup available year-round in Fort Lauderdale.
          </p>
          <a
            href="mailto:shoreaquatic@gmail.com?subject=Live%20Rotifer%20Order%20Inquiry"
            className="inline-block rounded-xl bg-aqua-400 hover:bg-aqua-300 text-ocean-950 font-bold px-8 py-4 transition shadow-lg shadow-aqua-400/20"
          >
            Email shoreaquatic@gmail.com →
          </a>
          <p className="text-xs text-slate-600 mt-6">
            *Live arrival guarantee on overnight orders only. Reduced or waived on 2-day shipments.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
