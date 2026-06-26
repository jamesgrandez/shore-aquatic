import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Get Rid of Aiptasia: The Complete Reef-Keeper's Guide | Shore Aquatic",
  description:
    "Aiptasia (glass anemones) taking over your reef? Learn to identify them, why scraping makes it worse, and how to kill aiptasia for good — manual, chemical, and biological controls (Berghia, peppermint shrimp, copperband) compared.",
  alternates: { canonical: "https://shoreaquatic.com/blog/how-to-get-rid-of-aiptasia" },
  openGraph: {
    title: "How to Get Rid of Aiptasia: The Complete Reef-Keeper's Guide",
    description:
      "Identify aiptasia vs. look-alikes, why scraping spreads it, and every removal method compared — including the biological controls that actually work.",
    type: "article",
    url: "https://shoreaquatic.com/blog/how-to-get-rid-of-aiptasia",
    images: ["https://shoreaquatic.com/images/blog/aiptasia.jpg"],
  },
};

// ─── Types ──────────────────────────────────────────────────────────────
interface LookAlike { name: string; tell: string; }
interface Method { title: string; how: string; verdict: string; tone: "warn" | "ok" | "bad"; }
interface Predator {
  id: string;
  name: string;
  sci: string;
  price: number;
  img: string;
  speed: string;
  reefSafe: string;
  reliability: string;
  tank: string;
  bestFor: string;
  risk: string;
  pros: string;
  cons: string;
}
interface FaqItem { q: string; a: string; }

// ─── Data ───────────────────────────────────────────────────────────────
const LOOKALIKES: LookAlike[] = [
  { name: "Majano Anemone", tell: "More opaque, often green/brown/pink, with bulbous club-shaped tentacle tips — not the sharp, tapered tentacles of aiptasia." },
  { name: "Zoanthids / Palythoa", tell: "Form a rubbery colonial mat with blunt, uniform tentacles. They are strictly sessile and can't crawl or retract into rock pores." },
  { name: "Feather Dusters", tell: "Symmetrical feather-like radioles forming a circular crown that emerges from a rigid tube — not a fleshy column." },
  { name: "Tube Anemones", tell: "Live in a soft mucus-and-sand tube buried in the substrate; they don't attach directly to live rock." },
];

const MANUAL_METHODS: Method[] = [
  { title: "Scraping / tweezing", how: "Physically pulling anemones off the rock.", verdict: "Usually backfires — the rapid retraction reflex leaves basal tissue behind that regenerates via pedal laceration into more anemones.", tone: "bad" },
  { title: "Super glue encapsulation", how: "Covering a retracted polyp with thick cyanoacrylate gel.", verdict: "Workable for isolated polyps on removable rock.", tone: "ok" },
  { title: "Boiling live rock", how: "Some guides suggest boiling infested rock.", verdict: "NEVER do this — it can fracture the rock and aerosolize lethal palytoxins from hidden coral tissue, causing severe human illness.", tone: "warn" },
];

const CHEMICAL_METHODS: Method[] = [
  { title: "F-Aiptasia paste", how: "A paste that hardens into a shell over the anemone.", verdict: "Seals the polyp and prevents it from releasing reproductive spores as it dies.", tone: "ok" },
  { title: "Aiptasia-X", how: "A thixotropic fluid the anemone mistakes for food and ingests.", verdict: "Causes the anemone to implode from the inside. Effective on visible polyps.", tone: "ok" },
  { title: "DIY injections (kalkwasser / lemon juice / vinegar)", how: "Injecting a caustic paste directly into the column.", verdict: "Cheap, but overuse can swing pH and alkalinity dangerously — risky in small tanks.", tone: "warn" },
];

const PREDATORS: Predator[] = [
  {
    id: "swl-berghia-nudibranch-5pk",
    name: "Berghia Nudibranch",
    sci: "Berghia stephanieae",
    price: 145.99,
    img: "/images/marine/swl-berghia-nudibranch-5pk.webp",
    speed: "Slow (2–4 mo)",
    reefSafe: "100% reef-safe",
    reliability: "Extremely high",
    tank: "Any size",
    bestFor: "Severe, established plagues",
    risk: "Starves once aiptasia is gone; eaten by wrasses & some shrimp",
    pros: "Obligate predator — eats ONLY aiptasia. Nocturnal pack-hunters that reach pests buried deep in rockwork, and they breed in your tank so the population scales to the problem.",
    cons: "Slow-acting and will starve after eradication. Sensitive to water quality, flow, and predators — keep them away from wrasses, large hermits, and peppermint shrimp.",
  },
  {
    id: "swl-peppermint-shrimp-5pk",
    name: "Peppermint Shrimp",
    sci: "Lysmata wurdemanni / boggessi",
    price: 97.99,
    img: "/images/marine/swl-peppermint-shrimp-5pk.webp",
    speed: "Moderate",
    reefSafe: "With caution",
    reliability: "Moderate",
    tank: "10+ gallons",
    bestFor: "Mild outbreaks & ongoing prevention",
    risk: "Imposter species; may nip corals if underfed",
    pros: "Affordable and effective at controlling small aiptasia recruits. Doubles as a permanent cleanup-crew member that picks off new polyps before they establish.",
    cons: "Only true Lysmata wurdemanni / boggessi reliably eat aiptasia — imposters won't. May nip LPS corals or steal food if hungry.",
  },
  {
    id: "swl-copperband-butterfly-small",
    name: "Copperband Butterflyfish",
    sci: "Chelmon rostratus",
    price: 108.99,
    img: "/images/marine/swl-copperband-butterfly-small.jpg",
    speed: "Rapid",
    reefSafe: "With caution",
    reliability: "Moderate",
    tank: "100+ gallons",
    bestFor: "Large display tanks",
    risk: "Finicky eater; may pick at clams & feather dusters",
    pros: "Highly effective at clearing infestations fast in large, established display tanks. A stunning centerpiece fish in its own right.",
    cons: "An expert-only fish — notoriously finicky and hard to acclimate. May prey on feather dusters, clams, and fleshy corals.",
  },
  {
    id: "swl-green-file-fish-medium",
    name: "Matted Filefish",
    sci: "Acreichthys tomentosus",
    price: 86.99,
    img: "/images/blog/matted-filefish.jpg",
    speed: "Rapid",
    reefSafe: "With caution",
    reliability: "High",
    tank: "30+ gallons",
    bestFor: "Heavy outbreaks",
    risk: "May nip zoanthids/softies once aiptasia runs out",
    pros: "Hardy and an aggressive aiptasia eater that also consumes invasive majano anemones.",
    cons: "Reef-safe with caution — some individuals nip zoanthids or soft corals after the aiptasia supply is exhausted.",
  },
];

const FAQS: FaqItem[] = [
  { q: "How many Berghia nudibranchs do I need?", a: "The rule of thumb is one Berghia per 10–12 gallons for a moderate infestation, but always stock at least three so they can breed and build a self-sustaining colony." },
  { q: "How long does it take Berghia to clear a tank?", a: "Typically 2 to 4 months. They work slowly at first, then accelerate as their population reaches critical mass and they hunt down the remaining hidden polyps." },
  { q: "Will peppermint shrimp eat my corals?", a: "They can. Peppermint shrimp are opportunistic and may nip LPS coral polyps or steal food if they're underfed. Keep them well-fed only enough to keep them foraging for aiptasia." },
  { q: "Are Berghia nudibranchs reef safe?", a: "Yes — they are 100% reef-safe obligate carnivores that eat only aiptasia. They will not touch corals, clams, fish, or other invertebrates." },
  { q: "What eats aiptasia naturally?", a: "The reliable predators are Berghia nudibranchs, true peppermint shrimp (Lysmata wurdemanni / boggessi), matted filefish, and copperband butterflyfish." },
  { q: "Why does aiptasia keep coming back?", a: "Because of their cellular resilience — any microscopic fragment of tissue left behind from scraping or an incomplete kill can regenerate into a brand-new polyp." },
  { q: "Can I just cut or scrape aiptasia off the rock?", a: "No. Scraping ruptures the anemone and triggers pedal laceration, where the torn-off basal fragments each grow into new anemones — turning one pest into dozens." },
  { q: "Do Berghia survive after the aiptasia is gone?", a: "No — they will starve within about a week once their only food source is exhausted. Harvest the colony and pass it to another hobbyist before that happens." },
];

const KEYWORDS = "how to get rid of aiptasia, aiptasia control, what eats aiptasia, berghia nudibranch, aiptasia vs majano, peppermint shrimp aiptasia";

const BASE = "https://shoreaquatic.com";
const URL = `${BASE}/blog/how-to-get-rid-of-aiptasia`;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get Rid of Aiptasia: The Complete Reef-Keeper's Guide",
  description: "Identify aiptasia, understand why scraping spreads it, and compare every removal method — manual, chemical, and biological controls including Berghia nudibranchs, peppermint shrimp, and copperband butterflyfish.",
  image: `${BASE}/images/blog/aiptasia.jpg`,
  author: { "@type": "Organization", name: "Shore Aquatic" },
  publisher: {
    "@type": "Organization",
    name: "Shore Aquatic",
    logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
  },
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
  url: URL,
  keywords: KEYWORDS,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
    { "@type": "ListItem", position: 3, name: "How to Get Rid of Aiptasia", item: URL },
  ],
};

function ToneBadge({ tone }: { tone: "warn" | "ok" | "bad" }) {
  const map = {
    ok: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
    warn: "bg-amber-400/15 text-amber-300 border-amber-400/30",
    bad: "bg-rose-400/15 text-rose-300 border-rose-400/30",
  } as const;
  const label = { ok: "Works", warn: "Caution", bad: "Backfires" } as const;
  return (
    <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${map[tone]}`}>
      {label[tone]}
    </span>
  );
}

export default function AiptasiaGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="pt-16 bg-ocean-950">
        {/* Breadcrumb */}
        <nav className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <ol className="flex items-center gap-1.5 text-xs text-slate-500 flex-wrap">
            <li><Link href="/" className="hover:text-aqua-400">Home</Link></li>
            <li className="text-slate-700">/</li>
            <li><Link href="/blog" className="hover:text-aqua-400">Blog</Link></li>
            <li className="text-slate-700">/</li>
            <li className="text-slate-300">Get Rid of Aiptasia</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-rose-950/40 via-amber-950/20 to-ocean-950 border-b border-white/5">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-coral mb-3">Saltwater · Pest Control</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              How to Get Rid of Aiptasia <span className="text-coral">(And Keep It Gone)</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              That one little glass anemone won&apos;t stay one for long. Here&apos;s how to
              identify aiptasia, why scraping it off makes things dramatically worse, and
              every method that actually eliminates it — ranked and compared.
            </p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/blog/aiptasia.jpg"
                alt="Aiptasia glass anemones (Exaiptasia diaphana) on reef rock"
                width={960}
                height={720}
                className="w-full h-auto object-cover"
                priority
              />
              <p className="text-[11px] text-slate-500 px-3 py-2 bg-black/30">
                Aiptasia (<em>Exaiptasia diaphana</em>) — a translucent column topped with up to
                96 thin, tapered tentacles.
              </p>
            </div>
          </div>
        </section>

        {/* 1. What it is */}
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white">What Is Aiptasia?</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Commonly called <strong>glass, rock, or pale anemones</strong>, these pests belong
              to the genus <em>Exaiptasia</em> — with <em>Exaiptasia diaphana</em> (formerly
              <em> E. pallida</em>) the accepted species. They have a translucent, slender column
              up to about an inch long, ranging from clear to brownish-tan depending on the density
              of the symbiotic algae living in their tissues, topped by up to 96 thin, tapered,
              highly flexible tentacles.
            </p>
            <h3 className="mt-7 text-lg font-semibold text-white">Aiptasia vs. the look-alikes</h3>
            <p className="mt-2 text-slate-400 text-sm">
              Identify carefully before you treat — you don&apos;t want to nuke a harmless hitchhiker.
            </p>
            <div className="mt-4 space-y-3">
              {LOOKALIKES.map((l) => (
                <div key={l.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-aqua-300">{l.name}</p>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">{l.tell}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-rose-400/20 bg-rose-400/5 p-5">
              <h3 className="text-sm font-semibold text-rose-300 uppercase tracking-wide">Why it spreads so fast</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li><strong>Pedal laceration:</strong> as the anemone moves, tiny fragments of its base tear off and grow into clones within days.</li>
                <li><strong>Stress fragmentation:</strong> under physical or chemical stress, a single surviving cell can regenerate a whole new individual.</li>
                <li><strong>Larval spread:</strong> they also spawn into the water column, sending planktonic larvae to colonize distant rock.</li>
              </ul>
            </div>
          </section>

          {/* 2. Why it's a problem */}
          <section>
            <h2 className="text-2xl font-bold text-white">Why Aiptasia Is a Problem</h2>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Chemical warfare</p>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">Stinging nematocysts and thread-like acontia fire on contact, causing tissue necrosis, bleaching, and chronic recession in nearby corals and clams.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Space competition</p>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">They outcompete prized corals for space and light, feeding through both photosynthesis and active predation on zooplankton.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Bio-security risk</p>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">Microscopic fragments ride the undersides of frag plugs — selling or trading frags from an infested tank spreads aiptasia to everyone you swap with.</p>
              </div>
            </div>
          </section>

          {/* 3. How it gets in */}
          <section>
            <h2 className="text-2xl font-bold text-white">How Aiptasia Gets Into Your Tank</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Aiptasia almost always arrives as a hitchhiker — on <strong>live rock</strong>, the
              rough undersides of <strong>coral frag plugs</strong>, snail shells, or even used
              powerheads and heaters. The single best defense is a strict <strong>4-to-6-week
              quarantine</strong> of every new addition (long enough for microscopic tissue to grow
              visible), and <strong>removing retail frag plugs entirely</strong> — cut the coral off
              and remount it on a sterile plug before it ever touches your display.
            </p>
          </section>

          {/* 4. Removal methods */}
          <section>
            <h2 className="text-2xl font-bold text-white">Removal Methods, Ranked</h2>

            <h3 className="mt-6 text-lg font-semibold text-white">Manual &amp; physical</h3>
            <div className="mt-3 space-y-3">
              {MANUAL_METHODS.map((m) => (
                <div key={m.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{m.title}</p>
                    <ToneBadge tone={m.tone} />
                  </div>
                  <p className="mt-1.5 text-sm text-slate-400">{m.how}</p>
                  <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">{m.verdict}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-7 text-lg font-semibold text-white">Chemical spot-treatments</h3>
            <div className="mt-3 space-y-3">
              {CHEMICAL_METHODS.map((m) => (
                <div key={m.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{m.title}</p>
                    <ToneBadge tone={m.tone} />
                  </div>
                  <p className="mt-1.5 text-sm text-slate-400">{m.how}</p>
                  <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">{m.verdict}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Biological controls — the core */}
          <section>
            <h2 className="text-2xl font-bold text-white">Biological Controls: What Actually Eats Aiptasia</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Spot-treatments kill what you can see — but aiptasia hides. Living predators hunt down
              the polyps wedged deep in your rockwork that no syringe will ever reach. These four are
              the reliable options, and they suit very different situations.
            </p>

            <div className="mt-6 space-y-5">
              {PREDATORS.map((p) => (
                <div key={p.id} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden sm:flex">
                  <div className="sm:w-44 shrink-0">
                    <Image
                      src={p.img}
                      alt={`${p.name} (${p.sci})`}
                      width={400}
                      height={300}
                      className="w-full h-44 sm:h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <h3 className="text-lg font-bold text-white">{p.name}</h3>
                      <Link href={`/shop/${p.id}`} className="text-sm font-semibold text-coral hover:text-orange-400">
                        From ${p.price.toFixed(2)} &rarr;
                      </Link>
                    </div>
                    <p className="text-xs italic text-slate-500">{p.sci}</p>
                    <p className="mt-2 text-sm text-emerald-300/90 leading-relaxed">{p.pros}</p>
                    <p className="mt-1.5 text-sm text-slate-400 leading-relaxed"><span className="text-amber-300 font-medium">Watch out:</span> {p.cons}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison table */}
            <h3 className="mt-10 text-lg font-semibold text-white">At-a-glance comparison</h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="bg-white/5 text-left text-[11px] uppercase tracking-wider text-slate-400">
                    <th className="px-4 py-3 font-semibold">Predator</th>
                    <th className="px-4 py-3 font-semibold">Speed</th>
                    <th className="px-4 py-3 font-semibold">Reef-safe</th>
                    <th className="px-4 py-3 font-semibold">Reliability</th>
                    <th className="px-4 py-3 font-semibold">Tank</th>
                    <th className="px-4 py-3 font-semibold">Best for</th>
                    <th className="px-4 py-3 font-semibold">Key risk</th>
                  </tr>
                </thead>
                <tbody>
                  {PREDATORS.map((p) => (
                    <tr key={p.id} className="border-t border-white/5">
                      <td className="px-4 py-3"><Link href={`/shop/${p.id}`} className="font-medium text-aqua-300 hover:underline">{p.name}</Link></td>
                      <td className="px-4 py-3 text-slate-400">{p.speed}</td>
                      <td className="px-4 py-3 text-slate-400">{p.reefSafe}</td>
                      <td className="px-4 py-3 text-slate-400">{p.reliability}</td>
                      <td className="px-4 py-3 text-slate-400">{p.tank}</td>
                      <td className="px-4 py-3 text-slate-400">{p.bestFor}</td>
                      <td className="px-4 py-3 text-slate-400">{p.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Decision framework */}
          <section>
            <h2 className="text-2xl font-bold text-white">Which Approach Should You Use?</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                <p className="text-sm font-semibold text-emerald-300">A few isolated polyps</p>
                <p className="mt-1 text-sm text-slate-300">Hit them immediately with a chemical spot-treatment (F-Aiptasia / Aiptasia-X) or super glue. Done early, this is often all you need.</p>
              </div>
              <div className="rounded-xl border border-aqua-400/20 bg-aqua-400/5 p-4">
                <p className="text-sm font-semibold text-aqua-300">Mild infestation in a nano tank</p>
                <p className="mt-1 text-sm text-slate-300">Add <Link href="/shop/swl-peppermint-shrimp-5pk" className="text-coral hover:underline">peppermint shrimp</Link> and feed sparingly so they forage for aiptasia.</p>
              </div>
              <div className="rounded-xl border border-coral/20 bg-coral/5 p-4">
                <p className="text-sm font-semibold text-coral">Severe, established plague</p>
                <p className="mt-1 text-sm text-slate-300">Seed a breeding colony of <Link href="/shop/swl-berghia-nudibranch-5pk" className="text-coral hover:underline">Berghia nudibranchs</Link> — first making sure no wrasses, large hermits, or peppermint shrimp are present to eat them.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">The pro move: combine methods</p>
                <p className="mt-1 text-sm text-slate-300">Spot-treat the large, mature polyps to knock the population down, then deploy biological controls to seek out the microscopic recruits and hidden tissue. Expect chemical follow-ups weekly for 4–8 weeks and 2–4 months for Berghia to finish the job.</p>
              </div>
            </div>
          </section>

          {/* 7. Prevention */}
          <section>
            <h2 className="text-2xl font-bold text-white">Keeping It Gone</h2>
            <ul className="mt-4 space-y-2.5 text-slate-300">
              <li className="flex gap-3"><span className="text-aqua-400">•</span><span><strong>Biosecurity:</strong> dip and quarantine every new addition, and always remove retail frag plugs.</span></li>
              <li className="flex gap-3"><span className="text-aqua-400">•</span><span><strong>Nutrient control:</strong> keeping nitrate under 10 ppm and phosphate under 0.05 ppm starves aiptasia and slows its fission.</span></li>
              <li className="flex gap-3"><span className="text-aqua-400">•</span><span><strong>After eradication:</strong> harvest your remaining Berghia and pass them to another hobbyist before they starve, and keep a peppermint shrimp or two on permanent cleanup duty.</span></li>
            </ul>
          </section>

          {/* Commercial bridge */}
          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-ocean-900 to-ocean-950 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">Shop the Solutions</h2>
            <p className="mt-2 text-sm text-slate-400">Every aiptasia-eater in this guide is aquacultured or hand-selected and ships overnight with a live arrival guarantee.</p>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PREDATORS.map((p) => (
                <Link key={p.id} href={`/shop/${p.id}`} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-aqua-400/30 transition-colors">
                  <div className="h-32 overflow-hidden">
                    <Image src={p.img} alt={p.name} width={400} height={300} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-semibold text-white leading-tight">{p.name}</p>
                    <p className="mt-0.5 text-aqua-400 text-sm font-bold">From ${p.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/shop?category=Livestock&sub=Marine%20Fish" className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3 text-sm font-bold text-white hover:bg-orange-500 transition-colors">
              Browse all saltwater livestock &rarr;
            </Link>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
            <div className="mt-5 space-y-5">
              {FAQS.map((f) => (
                <div key={f.q} className="border-b border-white/5 pb-4 last:border-0">
                  <h3 className="text-base font-semibold text-white">{f.q}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Photo credits */}
          <section className="text-xs text-slate-500 leading-relaxed border-t border-white/5 pt-6">
            Photo credits: aiptasia (<em>Exaiptasia diaphana</em>) — public domain (CC0) via iNaturalist;
            matted filefish (<em>Acreichthys tomentosus</em>) — © portioid, CC-BY, via iNaturalist.
            Livestock photos are our own or supplied by our wholesale partners. See our{" "}
            <Link href="/image-credits" className="text-aqua-400 hover:underline">full photo credits</Link>.
          </section>
        </article>

        <Footer />
      </main>
    </>
  );
}
