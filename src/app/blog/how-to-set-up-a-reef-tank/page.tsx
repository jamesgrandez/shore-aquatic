import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import RelatedGuides from "@/components/RelatedGuides";

export const metadata: Metadata = {
  title: "How to Set Up Your First Reef Tank: Complete Beginner Guide",
  description:
    "Complete reef tank setup guide for beginners. Equipment tiers ($300-$1,500+), cycling protocol, water parameters, livestock order, refugium setup, and a realistic first-year budget. From a Florida saltwater specialist.",
  alternates: { canonical: "https://shoreaquatic.com/blog/how-to-set-up-a-reef-tank" },
  openGraph: {
    title: "How to Set Up Your First Reef Tank: Complete Beginner Guide",
    description:
      "Equipment tiers, cycling, parameters, livestock order, and budget reality for your first reef tank. Definitive 5,000-word walkthrough.",
    type: "article",
    url: "https://shoreaquatic.com/blog/how-to-set-up-a-reef-tank",
  },
};

// ─── Types ──────────────────────────────────────────────────────────────
interface TankTier { size: string; gallons: string; pros: string; cons: string; verdict: string; colorClass: string; borderClass: string; }
interface EquipmentRow { component: string; entry: string; mid: string; premium: string; }
interface WaterParam { name: string; target: string; ideal: string; testKit: string; }
interface CycleSign { label: string; threshold: string; meaning: string; }
interface RockComparison { type: string; pros: string[]; cons: string[]; bestFor: string; }
interface LivestockPhase { weeks: string; milestone: string; species: string; rationale: string; colorClass: string; }
interface Coral { name: string; tier: "Easy" | "Avoid"; note: string; }
interface Macroalgae { name: string; role: string; growth: string; href: string; }
interface MaintenanceTask { period: string; minutes: string; tasks: string[]; tone: string; }
interface Mistake { n: number; title: string; detail: string; }
interface FaqItem { q: string; a: string; }

// ─── Data ───────────────────────────────────────────────────────────────
const TANK_TIERS: TankTier[] = [
  {
    size: "Nano",
    gallons: "10–30 gallons",
    pros: "Low cost, small footprint, plug-and-play AIO options",
    cons: "High failure velocity — chemical swings escalate fast",
    verdict: "Best for the disciplined beginner ready to test daily",
    colorClass: "bg-rose-400/10 text-rose-300",
    borderClass: "border-rose-400/30",
  },
  {
    size: "Standard",
    gallons: "20–40 gallons",
    pros: "Stability buffer for beginner mistakes, manageable water changes, broad equipment selection",
    cons: "Moderate footprint and weight, mid-range cost",
    verdict: "The sweet spot for most first-time reef keepers",
    colorClass: "bg-emerald-400/10 text-emerald-300",
    borderClass: "border-emerald-400/40",
  },
  {
    size: "Large",
    gallons: "90+ gallons",
    pros: "Exceptional stability from dilution, room for centerpiece fish and SPS in time",
    cons: "1,000+ lb weight (floor reinforcement), high cost, salt mix burns through fast",
    verdict: "Reserve for round 2 after you've cycled a smaller tank",
    colorClass: "bg-aqua-400/10 text-aqua-300",
    borderClass: "border-aqua-400/40",
  },
];

const EQUIPMENT: EquipmentRow[] = [
  { component: "Tank & Stand",      entry: "20g long or 29g + basic stand",    mid: "AIO rimless cube with cabinet",       premium: "Drilled tank with sump" },
  { component: "Lighting",          entry: "Basic black-box LED",              mid: "AI Prime 16HD or AI Blade",           premium: "EcoTech Radion XR15" },
  { component: "Water Flow",        entry: "Fixed-speed AC powerhead",         mid: "Jebao DC Wavemaker",                  premium: "VorTech MP10 / MP40" },
  { component: "Filtration",        entry: "HOB power filter",                 mid: "AIO rear chamber + socks",            premium: "Sump + protein skimmer" },
  { component: "Heater & Control",  entry: "50–100W glass heater",             mid: "Heater + Inkbird controller",         premium: "Titanium element + reef controller" },
  { component: "Purification",      entry: "Buy RO/DI water from LFS",         mid: "4-stage 50 GPD home RO/DI unit",      premium: "5-stage 150 GPD unit" },
  { component: "Auto Top-Off",      entry: "Manual daily top-offs",            mid: "Tunze Osmolator Nano",                premium: "Tunze Osmolator 3 + backup" },
  { component: "Salinity Testing",  entry: "Optical refractometer",            mid: "Refractometer + salinity pen",        premium: "Digital salinity tester" },
  { component: "Chemistry Test Kits",entry: "API Master Saltwater Kit",        mid: "Salifert titration kits",             premium: "Hanna Digital Checkers" },
];

const WATER_PARAMS: WaterParam[] = [
  { name: "Salinity",            target: "1.024–1.026 SG",    ideal: "1.025",   testKit: "Calibrated refractometer" },
  { name: "Temperature",         target: "76–80°F",            ideal: "78°F",    testKit: "Digital probe + backup" },
  { name: "pH",                  target: "8.1–8.4",            ideal: "8.3",     testKit: "Digital probe or Salifert" },
  { name: "Alkalinity",          target: "8.0–11.0 dKH",       ideal: "9.0 dKH", testKit: "Hanna Digital Checker" },
  { name: "Calcium",             target: "400–450 ppm",        ideal: "420 ppm", testKit: "Salifert / Red Sea titration" },
  { name: "Magnesium",           target: "1,250–1,450 ppm",    ideal: "1,350 ppm", testKit: "Salifert titration" },
  { name: "Ammonia",             target: "0.0 ppm",            ideal: "0.0",     testKit: "Salifert or Seachem Badge" },
  { name: "Nitrite",             target: "0.0 ppm",            ideal: "0.0",     testKit: "Salifert or API" },
  { name: "Nitrate",             target: "2–20 ppm",           ideal: "10 ppm",  testKit: "Nyos or Hanna HR Nitrate" },
  { name: "Phosphate",           target: "0.01–0.10 ppm",      ideal: "0.03 ppm", testKit: "Hanna ULR Checker" },
];

const CYCLE_READINESS: CycleSign[] = [
  { label: "Ammonia", threshold: "0.0 ppm for 3 days",     meaning: "Nitrifying bacteria converting ammonia successfully" },
  { label: "Nitrite", threshold: "0.0 ppm for 3 days",     meaning: "Second-stage bacteria are active" },
  { label: "Nitrate", threshold: "≥ 5.0 ppm detected",     meaning: "Proof the cycle ran (nitrate is the end product)" },
];

const ROCK_OPTIONS: RockComparison[] = [
  {
    type: "Cured Live Rock",
    pros: ["Established beneficial bacteria from day 1", "Brings copepods, amphipods, beneficial sponges", "Faster cycle (1–3 weeks)", "More stable long-term biology"],
    cons: ["Expensive ($6–12 per lb)", "High risk of hitchhiker pests (aiptasia, majano, mantis shrimp, vermetid snails)", "Smells strong during transport — must be moved wet"],
    bestFor: "Patient buyers willing to inspect every piece for pests",
  },
  {
    type: "Sterile Dry Rock",
    pros: ["Cheap ($2–5 per lb)", "Zero pest risk", "Easy to glue into intricate aquascapes", "Shapes available in countless cuts"],
    cons: ["Slower cycle (4–6 weeks)", "Prolonged 'ugly phase' of diatom and hair algae", "No microfauna seed — needs separate copepod additions"],
    bestFor: "First-timers prioritizing safety and design freedom over speed",
  },
];

const LIVESTOCK_PHASES: LivestockPhase[] = [
  {
    weeks: "Weeks 1–2",
    milestone: "Cycle stabilization",
    species: "Nothing yet — monitor only",
    rationale: "Diatom bloom appears as the cycle settles. Test daily. If ammonia or nitrite are anything but zero, do not add livestock.",
    colorClass: "bg-amber-400/10 text-amber-300 border-amber-400/30",
  },
  {
    weeks: "Weeks 3–4",
    milestone: "First foragers (tank inhabitants)",
    species: "Snails: Banded Trochus (glass grazers), Cerith (versatile), Nassarius (sand scavengers)",
    rationale: "Snails handle low-level ammonia better than fish or shrimp. Start with 4–8 in a 20-gallon system.",
    colorClass: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
  },
  {
    weeks: "Weeks 5–8",
    milestone: "First fish",
    species: "Captive-bred Ocellaris clownfish pair, firefish goby, royal gramma, or court jester goby",
    rationale: "Hardy small species that tolerate parameter drift. Add ONE species at a time. Wait 2 weeks before the next.",
    colorClass: "bg-aqua-400/10 text-aqua-300 border-aqua-400/30",
  },
  {
    weeks: "Weeks 9–12",
    milestone: "Peaceful invertebrates",
    species: "Scarlet hermit crabs, peppermint shrimp, cleaner shrimp",
    rationale: "Add only after parameters have been stable for a month and fish are eating well.",
    colorClass: "bg-rose-400/10 text-rose-300 border-rose-400/30",
  },
  {
    weeks: "Months 3–6",
    milestone: "First corals",
    species: "Beginner soft corals (mushrooms, zoanthids, GSP on isolated rocks)",
    rationale: "Wait until alkalinity, calcium, and magnesium have held steady for 4+ weeks before introducing corals.",
    colorClass: "bg-violet-400/10 text-violet-300 border-violet-400/30",
  },
];

const CORALS: Coral[] = [
  { name: "Mushrooms (Discosoma, Ricordea)", tier: "Easy", note: "Low light, low flow, tolerant of nutrient swings" },
  { name: "Zoanthids & Palythoa",            tier: "Easy", note: "Bulletproof under most lighting; handle imperfect water" },
  { name: "Duncan Coral (Duncanopsammia)",   tier: "Easy", note: "Loves direct feeding; visible growth when happy" },
  { name: "Branching Hammer (Euphyllia)",    tier: "Easy", note: "Easier than torch; moderate flow + moderate light" },
  { name: "Kenya Tree, Toadstool, Leather Coral", tier: "Easy", note: "Soft corals that grow under almost any setup" },
  { name: "Acropora (SPS)",                  tier: "Avoid", note: "Demands rock-stable parameters and high light. Beginner Acro almost always becomes dead Acro." },
  { name: "Goniopora",                       tier: "Avoid", note: "Notoriously poor survival in home aquariums under 6 months" },
  { name: "Non-Photosynthetic (Sun Coral, Dendrophyllia)", tier: "Avoid", note: "Requires multiple feedings per day; water fouls quickly" },
  { name: "Pulsing Xenia & GSP (uncontained)", tier: "Avoid", note: "Will smother the entire aquascape. If you must keep them, isolate on island rocks." },
];

const MACROALGAE: Macroalgae[] = [
  { name: "Chaetomorpha",          role: "Gold-standard nutrient exporter", growth: "15–20% per week", href: "/shop/sw-chaeto" },
  { name: "Red Ogo (Gracilaria)",  role: "Nutrient exporter + tang food",   growth: "Moderate",        href: "/shop/sw-redogo" },
  { name: "Pom Pom (Gracilaria)",  role: "Pod habitat + ornamental accent", growth: "Slow",            href: "/shop/sw-pompom" },
];

const MAINTENANCE: MaintenanceTask[] = [
  {
    period: "Daily",
    minutes: "5 min",
    tasks: ["Verify ATO is dripping freshwater (salinity drift in nano tanks happens in hours, not days)", "Check display thermometer (target 78°F)", "Observe livestock for stress, clamped fins, hidden fish"],
    tone: "bg-emerald-400/10 border-emerald-400/30 text-emerald-300",
  },
  {
    period: "Weekly",
    minutes: "30 min",
    tasks: ["10% water change with RO/DI + premixed saltwater (matched to tank temperature and salinity)", "Scrape coralline and film off glass panels", "Replace filter sock or rinse media", "Test alkalinity (the single most important parameter to track weekly)"],
    tone: "bg-aqua-400/10 border-aqua-400/30 text-aqua-300",
  },
  {
    period: "Monthly",
    minutes: "60 min",
    tasks: ["Remove and clean return pump impeller (mineral deposits + biofilm reduce flow)", "Soak wavemakers in 50/50 citric acid + RO water for 30 min", "Test calcium, magnesium, nitrate, phosphate", "Inspect all hose connections for salt creep"],
    tone: "bg-violet-400/10 border-violet-400/30 text-violet-300",
  },
  {
    period: "Quarterly",
    minutes: "90 min",
    tasks: ["Calibrate refractometer with 35 ppt calibration solution (not RO water)", "Replace RO/DI sediment and carbon prefilters", "Test RO/DI output TDS (must read 0)", "Lubricate pump shafts and inspect heater for limescale"],
    tone: "bg-amber-400/10 border-amber-400/30 text-amber-300",
  },
];

const MISTAKES: Mistake[] = [
  { n: 1, title: "Overstocking and overfeeding", detail: "Adding too many fish too fast or feeding 3× per day produces ammonia faster than the bacteria can convert. The result is a hair-algae bloom that takes months to clear. Stock half what you think the tank can hold and feed once per day in measured amounts." },
  { n: 2, title: "Adding livestock during the cycle", detail: "Ammonia at any detectable level burns gill tissue. Snails and shrimp die first; clownfish develop ammonia burn over a week. Wait for ammonia AND nitrite to read zero for 3 consecutive days." },
  { n: 3, title: "Ignoring salinity drift from evaporation", detail: "A 20-gallon nano can lose 1/2 gallon of water per day to evaporation. The salt stays behind, so salinity climbs from 1.025 to 1.027+ within a week. An Auto Top-Off (ATO) system is not optional — it's the difference between stability and rolling crises." },
  { n: 4, title: "Skipping fish quarantine", detail: "Wild-caught and store-tank fish carry ich (Cryptocaryon irritans), velvet (Amyloodinium), and brooklynella. Direct-to-display introduction can wipe out the entire system within a month. Quarantine every new fish in a separate 10-gallon for 4 weeks." },
  { n: 5, title: "Running lights at 100% from day one", detail: "New corals adapt to lower light intensity. Running a powerful LED at full intensity bleaches photosynthetic tissue and fuels algae blooms. Start at 20–30% and ramp up 5% per week." },
];

const FAQS: FaqItem[] = [
  { q: "What's the smallest reef tank a beginner should attempt?", a: "20 gallons is the realistic minimum for a first reef. Smaller tanks (5–10 gallon pico) demand daily testing and have almost no margin for error — one missed top-off or overfeeding can crash them. A 20–30 gallon AIO (all-in-one) tank gives enough water volume to forgive small mistakes while staying affordable." },
  { q: "Can I use tap water if I add dechlorinator?", a: "No. Dechlorinator only removes chlorine and chloramine — it leaves behind nitrates, phosphates, silicates, copper, and other dissolved minerals that fuel algae and stress invertebrates. RO/DI water with 0 ppm TDS is the only acceptable starting water for a reef tank. Buy refills from your local fish store at $1/gallon, or invest in a home unit (~$150) that pays for itself in six months." },
  { q: "How long does cycling actually take?", a: "2 to 6 weeks depending on method. Dry rock + bottled nitrifying bacteria (FritzZyme TurboStart 900, Dr. Tim's One & Only) can shorten the cycle to about 5–10 days. Cured live rock cycles in 1–3 weeks. Always confirm with three consecutive days of zero ammonia and zero nitrite before adding livestock." },
  { q: "Do I really need a protein skimmer?", a: "Not for a small nano (10–30 gallons). Weekly 10% water changes export waste sufficiently in that size. For tanks above 40 gallons, a skimmer becomes increasingly valuable because water changes can't keep up with the bioload. If you can afford one for any tank size, it adds water clarity and reduces algae fuel — but it's not the make-or-break piece of equipment that lighting and powerheads are." },
  { q: "How many fish can I keep in a 30-gallon reef?", a: "Plan for 3 to 5 small peaceful fish maximum. A clownfish pair plus a goby plus a small wrasse is a comfortable bioload for 30 gallons with good filtration. Stocking density matters more than tank size — packing 7 fish into a 30-gallon is a recipe for ammonia spikes and algae problems." },
  { q: "How often should I do water changes?", a: "10% weekly is the standard recommendation. Some experienced reef keepers run lower-frequency changes (20% biweekly) with automated dosing — that works too, but only after you understand which parameters drift in your tank. Beginners should stick with weekly until they have 6 months of test logs." },
  { q: "When can I add corals?", a: "After the tank has cycled, lived through its diatom/algae phase, AND held stable alkalinity, calcium, and magnesium for at least 4 consecutive weeks. For most beginner tanks that's 3 to 6 months from setup. Start with beginner soft corals (mushrooms, zoanthids) and avoid SPS for at least the first year." },
  { q: "What's the realistic first-year cost?", a: "A standard 40-gallon system runs about $3,000 in true first-year cost: $2,090 in capital (tank, stand, LED, RO/DI, ATO, rock, sand) and $980 in ongoing operating costs (salt mix, electricity, food, replacement filters, test reagents, first livestock additions). A budget nano can drop that to $500–$1,000 first year, but requires more daily monitoring." },
  { q: "Should I run the lights overnight in my refugium?", a: "Yes — a refugium runs on the opposite photoperiod of the display tank. Lights on at night, off during the day. This stabilizes pH around the clock (macroalgae consumes CO2 and produces oxygen during its photoperiod) and produces the most copepods for natural pod cycling into the display." },
  { q: "Why do I need three types of snails?", a: "Each species occupies a different ecological niche. Trochus snails clean film algae off glass and rocks. Cerith snails work all surfaces and burrow into the sand at night. Nassarius snails sense food underground and surface to scavenge waste. Stocking only one species leaves gaps in your forager coverage." },
];

// ─── JSON-LD ────────────────────────────────────────────────────────────
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Your First Reef Tank: Complete Beginner Guide",
  description:
    "Complete reef tank setup guide covering tank size, tiered equipment lists, RO/DI water, cycling, water parameters, live rock vs dry rock, livestock order, beginner corals, refugium setup, maintenance schedule, common mistakes, and realistic first-year budget.",
  author: { "@type": "Organization", name: "Shore Aquatic" },
  publisher: {
    "@type": "Organization",
    name: "Shore Aquatic",
    logo: { "@type": "ImageObject", url: "https://shoreaquatic.com/logo.png" },
  },
  datePublished: "2026-06-07",
  dateModified: "2026-06-07",
  mainEntityOfPage: "https://shoreaquatic.com/blog/how-to-set-up-a-reef-tank",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shoreaquatic.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://shoreaquatic.com/blog" },
    { "@type": "ListItem", position: 3, name: "Reef Tank Setup Guide", item: "https://shoreaquatic.com/blog/how-to-set-up-a-reef-tank" },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════
export default function ReefTankSetupGuidePage() {
  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ─── HERO ─── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-cyan-950 via-teal-950 to-ocean-950 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-aqua-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-aqua-400">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Reef Tank Setup Guide</span>
          </nav>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-aqua-400/15 text-aqua-300 border border-aqua-400/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider">Setup Guide</span>
            <span className="rounded-full bg-cyan-400/15 text-cyan-300 border border-cyan-400/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider">Saltwater</span>
            <span className="rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider">22 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            How to Set Up Your First Reef Tank
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Equipment tiers from $300 to $1,500+, the cycling protocol that actually works, the precise water parameters
            to target, the livestock order that prevents crashes, and the brutal honest first-year budget. Built for someone
            who wants a reef tank that lasts five years — not a YouTube influencer build that crashes in six months.
          </p>
        </div>
      </section>

      {/* ─── QUICK ANSWER ─── */}
      <section className="py-10 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-aqua-400/40 bg-aqua-950/30 p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🪸</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-3">Quick Answer</h2>
                <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                  <li><strong className="text-aqua-300">Tank size:</strong> 20–40 gallons is the sweet spot. Smaller = harder. Larger = far more expensive.</li>
                  <li><strong className="text-aqua-300">Water:</strong> RO/DI only. Tap water has nitrates, phosphates, and silicates that fuel algae from day one.</li>
                  <li><strong className="text-aqua-300">Cycle:</strong> 2–6 weeks. Use dry rock + bottled bacteria. Wait for ammonia AND nitrite at 0 ppm for 3 days before adding anything.</li>
                  <li><strong className="text-aqua-300">Livestock order:</strong> Snails first (week 3–4), then fish (week 5–8), then peaceful invertebrates (week 9–12), then corals (month 3–6).</li>
                  <li><strong className="text-aqua-300">First-year budget:</strong> ~$3,000 for a standard 40-gallon system. $500–$1,000 for a budget nano with diligent monitoring.</li>
                  <li><strong className="text-aqua-300">Realistic time commitment:</strong> 5 min daily, 30 min weekly, 60 min monthly.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: TANK SIZE ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">1. Choose Your Tank Size</h2>
          <p className="text-slate-400 mb-8">
            Tank size is a triangle of trade-offs: stability, space, and cost. The smaller the tank, the faster a chemical
            problem cascades into a crash. The larger the tank, the more expensive every gallon of salt mix and the more
            stress on your floor.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {TANK_TIERS.map((t) => (
              <div key={t.size} className={`rounded-2xl border ${t.borderClass} bg-white/[0.03] p-5`}>
                <div className="mb-3 flex items-center justify-between">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wider border ${t.colorClass}`}>{t.size}</span>
                  <span className="text-xs text-slate-500">{t.gallons}</span>
                </div>
                <h3 className="text-base font-bold text-emerald-300 mb-2">Pros</h3>
                <p className="text-sm text-slate-400 mb-3 leading-relaxed">{t.pros}</p>
                <h3 className="text-base font-bold text-rose-300 mb-2">Cons</h3>
                <p className="text-sm text-slate-400 mb-3 leading-relaxed">{t.cons}</p>
                <div className="mt-4 pt-3 border-t border-white/5">
                  <p className="text-xs text-slate-300 italic leading-relaxed"><strong>Verdict:</strong> {t.verdict}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-950/20 p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-amber-300">⚠ The pico tank trap.</strong> Many beginners pick 5 or 10-gallon pico tanks because they look manageable.
              They&rsquo;re not. A 5-gallon tank loses 10% of its volume to evaporation in 3 days; the resulting salinity swing kills livestock.
              Pico tanks belong to experienced keepers who already know how to dose, test, and intervene daily.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: EQUIPMENT TIERS ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">2. Tiered Equipment List</h2>
          <p className="text-slate-400 mb-8">
            Most beginner setup guides quote a single dollar amount and pretend choices don&rsquo;t exist. Here&rsquo;s the
            real spread for a 15–40 gallon system, broken down by component. Budget rule of thumb: 70% on hardware, 20% on
            livestock, 10% emergency reserve.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr className="text-left">
                  <th className="px-4 py-3 text-slate-300 font-semibold">Component</th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Entry <span className="text-slate-500 font-normal">($300–500)</span></th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Mid-Range <span className="text-slate-500 font-normal">($700–1,200)</span></th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Premium <span className="text-slate-500 font-normal">($1,500+)</span></th>
                </tr>
              </thead>
              <tbody>
                {EQUIPMENT.map((row) => (
                  <tr key={row.component} className="border-t border-white/5">
                    <td className="px-4 py-3 text-white font-medium">{row.component}</td>
                    <td className="px-4 py-3 text-slate-400">{row.entry}</td>
                    <td className="px-4 py-3 text-slate-300">{row.mid}</td>
                    <td className="px-4 py-3 text-slate-400">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-emerald-300">Where to spend on the entry tier:</strong> If you have $500 total, spend more on lighting
              and water flow than on the tank itself. A $40 LED strip from a generic seller will hold back coral growth far more than
              a basic 20-gallon long will hold back fish health. Lighting and flow are the two purchases worth upgrading from entry to mid.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: RO/DI WATER ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">3. RO/DI Water — Why Tap Water Won&rsquo;t Work</h2>
          <p className="text-slate-400 mb-8">
            Tap water contains four categories of contaminants that destroy reef tanks: halogens (toxic to bacteria),
            nitrates and phosphates (algae fuel), silicates (diatom fuel), and dissolved heavy metals (toxic to invertebrates).
            Even &ldquo;clean&rdquo; municipal supplies measure 200+ ppm Total Dissolved Solids.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">The four-stage RO/DI purification chain</h3>
            <ol className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-3"><span className="text-aqua-300 font-bold">1.</span><span><strong className="text-white">Sediment filter</strong> — removes rust, sand, and particulate matter from municipal water.</span></li>
              <li className="flex gap-3"><span className="text-aqua-300 font-bold">2.</span><span><strong className="text-white">Carbon block</strong> — strips chlorine, chloramine, volatile organics, and pesticide residue.</span></li>
              <li className="flex gap-3"><span className="text-aqua-300 font-bold">3.</span><span><strong className="text-white">Reverse Osmosis membrane</strong> — pushes water through a semi-permeable membrane at high pressure, rejecting 90–99% of dissolved solids.</span></li>
              <li className="flex gap-3"><span className="text-aqua-300 font-bold">4.</span><span><strong className="text-white">Deionization resin</strong> — captures the last remaining ions to deliver water at 0 ppm TDS.</span></li>
            </ol>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-base font-bold text-white mb-2">Buy refills from a fish store</h3>
              <ul className="text-sm text-slate-400 space-y-1.5 mb-3">
                <li>• ~$1.00 per gallon at most LFS</li>
                <li>• Zero setup cost</li>
                <li>• Inconvenient — weekly trips</li>
              </ul>
              <div className="rounded-lg bg-rose-950/30 border border-rose-500/30 p-3">
                <p className="text-xs text-slate-300"><strong className="text-rose-300">Year 1 cost (40-gal tank, 10% weekly changes + top-off):</strong> ~$390</p>
              </div>
            </div>
            <div className="rounded-2xl border-2 border-emerald-400/40 bg-emerald-950/20 p-5">
              <h3 className="text-base font-bold text-white mb-2">Home 4-stage RO/DI unit (recommended)</h3>
              <ul className="text-sm text-slate-400 space-y-1.5 mb-3">
                <li>• ~$150 initial cost</li>
                <li>• Unlimited 0-ppm water on demand</li>
                <li>• Pays for itself in 6 months</li>
              </ul>
              <div className="rounded-lg bg-emerald-950/30 border border-emerald-500/30 p-3">
                <p className="text-xs text-slate-300"><strong className="text-emerald-300">Year 1 cost (unit + filters + municipal water):</strong> ~$200</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CYCLING ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">4. Cycling the Tank</h2>
          <p className="text-slate-400 mb-8">
            Unlike freshwater cycles, a saltwater system is a biogeochemical reactor — multiple bacterial colonies working
            in sequence on rock surfaces, in the substrate, and inside the filter media. The goal: establish populations that
            convert toxic ammonia (NH₃) to nitrite (NO₂⁻) to relatively harmless nitrate (NO₃⁻) before livestock arrives.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold text-white mb-3">Standard cycle protocol (dry rock + bacteria)</h3>
              <ol className="text-sm text-slate-400 space-y-2 leading-relaxed">
                <li><strong className="text-white">Day 1:</strong> Set up tank with dry rock, sand, salt mix at 1.025 SG, heater to 78°F.</li>
                <li><strong className="text-white">Day 2:</strong> Dose bottled bacteria (FritzZyme TurboStart 900 or Dr. Tim&rsquo;s One &amp; Only).</li>
                <li><strong className="text-white">Day 3:</strong> Add pure ammonia source to 2 ppm (Dr. Tim&rsquo;s Ammonium Chloride).</li>
                <li><strong className="text-white">Days 5–10:</strong> Ammonia drops, nitrite rises, then nitrite drops.</li>
                <li><strong className="text-white">Days 10–14:</strong> Both at zero; nitrate detectable. Cycle complete.</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold text-white mb-3">Confirmed readiness signals</h3>
              <ul className="space-y-3 text-sm">
                {CYCLE_READINESS.map((s) => (
                  <li key={s.label} className="border-l-2 border-emerald-400/40 pl-3">
                    <div className="text-white font-semibold">{s.label}: <span className="text-emerald-300">{s.threshold}</span></div>
                    <div className="text-xs text-slate-400 mt-0.5">{s.meaning}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border-2 border-amber-500/40 bg-amber-950/30 p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-amber-300">⚠ Do not skip the 3-day confirmation window.</strong> A single zero ammonia reading
              could be a testing fluke or temporary. Test for three consecutive days. Beginners who add livestock at the first zero
              reading often crash within a week because the bacterial colony wasn&rsquo;t actually established.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WATER PARAMETERS ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">5. Target Water Parameters</h2>
          <p className="text-slate-400 mb-8">
            Stability matters more than achieving a specific number. A tank that reads pH 8.2 every day is healthier than
            one that swings from 7.9 to 8.4. Test enough to track stability, not chase numbers.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr className="text-left">
                  <th className="px-4 py-3 text-slate-300 font-semibold">Parameter</th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Target Range</th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Ideal</th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Test Kit</th>
                </tr>
              </thead>
              <tbody>
                {WATER_PARAMS.map((p) => (
                  <tr key={p.name} className="border-t border-white/5">
                    <td className="px-4 py-3 text-white font-medium">{p.name}</td>
                    <td className="px-4 py-3 text-slate-400">{p.target}</td>
                    <td className="px-4 py-3 text-aqua-300 font-semibold">{p.ideal}</td>
                    <td className="px-4 py-3 text-slate-400">{p.testKit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-aqua-400/30 bg-aqua-400/5 p-4">
              <h3 className="text-base font-bold text-aqua-300 mb-2">Test weekly</h3>
              <p className="text-sm text-slate-300">Salinity, alkalinity, temperature. These drift fastest and matter most for coral health.</p>
            </div>
            <div className="rounded-xl border border-violet-400/30 bg-violet-400/5 p-4">
              <h3 className="text-base font-bold text-violet-300 mb-2">Test monthly</h3>
              <p className="text-sm text-slate-300">Calcium, magnesium, nitrate, phosphate. Slower to drift; monthly tracking catches trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: LIVE ROCK vs DRY ROCK ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">6. Live Rock vs. Dry Rock</h2>
          <p className="text-slate-400 mb-8">
            The single biggest aesthetic and biological decision in your build. Both can produce a stable reef — they
            just deliver different starting conditions.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {ROCK_OPTIONS.map((r) => (
              <div key={r.type} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-bold text-white mb-4">{r.type}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-emerald-300 mb-2">Pros</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    {r.pros.map((p) => <li key={p}>• {p}</li>)}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-rose-300 mb-2">Cons</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    {r.cons.map((c) => <li key={c}>• {c}</li>)}
                  </ul>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <p className="text-xs text-slate-300 italic"><strong>Best for:</strong> {r.bestFor}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">Aquascape design principles</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h4 className="text-base font-bold text-aqua-300 mb-2">Rule of thirds</h4>
              <p className="text-sm text-slate-400">Place focal rocks on the intersection of imaginary thirds. A single tall structure dead-center always looks artificial.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h4 className="text-base font-bold text-aqua-300 mb-2">Golden ratio (1:1.618)</h4>
              <p className="text-sm text-slate-400">If your tank is 24&quot; tall, your main rock formation should be roughly 15&quot;. Visual harmony from a natural proportion.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h4 className="text-base font-bold text-aqua-300 mb-2">6-inch flow paths</h4>
              <p className="text-sm text-slate-400">Leave at least 6 inches between rocks and glass. Detritus collects in dead zones; flow keeps the substrate healthy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: LIVESTOCK ORDER ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">7. First Livestock Additions (Order Matters)</h2>
          <p className="text-slate-400 mb-8">
            The order in which you add inhabitants determines whether the bioload builds gradually (good) or hits the
            bacteria all at once (crash). Every addition should follow this sequence — never skip ahead.
          </p>

          <div className="space-y-4">
            {LIVESTOCK_PHASES.map((p) => (
              <div key={p.weeks} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider border ${p.colorClass}`}>{p.weeks}</span>
                  <h3 className="text-base font-bold text-white">{p.milestone}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-2"><strong className="text-aqua-300">Add:</strong> {p.species}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{p.rationale}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-rose-500/30 bg-rose-950/20 p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-rose-300">🚨 The cardinal rule:</strong> Add ONE species at a time. Wait two weeks between
              additions. A new fish brings ammonia from its waste, potentially parasites from its previous tank, and a
              social adjustment period. Stacking introductions causes most beginner crashes.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CORALS ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">8. Beginner Corals (What to Buy &amp; What to Skip)</h2>
          <p className="text-slate-400 mb-8">
            Corals should only enter the tank after 3 to 6 months of stable parameters. Even then, the wrong picks will
            die or take over. Here&rsquo;s a reality-check list.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            {CORALS.map((c) => (
              <div key={c.name} className={`rounded-xl border p-4 ${c.tier === "Easy" ? "border-emerald-500/30 bg-emerald-950/15" : "border-rose-500/30 bg-rose-950/15"}`}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-sm font-bold text-white">{c.name}</h3>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${c.tier === "Easy" ? "bg-emerald-400/15 text-emerald-300 border border-emerald-400/30" : "bg-rose-400/15 text-rose-300 border border-rose-400/30"}`}>
                    {c.tier === "Easy" ? "Easy" : "Avoid"}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: REFUGIUM ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">9. The Refugium</h2>
          <p className="text-slate-400 mb-8">
            A refugium is a dedicated chamber (in a sump or hang-on box) that runs on the opposite photoperiod from the
            display tank. Lights on at night, off during the day. It does two things no other piece of equipment can:
            export nutrients via macroalgae growth, and produce a steady supply of copepods for natural live feeding.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-8">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <h3 className="text-lg font-bold text-emerald-300 mb-3">🌿 Nutrient export</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Fast-growing macroalgae absorbs dissolved nitrate and phosphate into its tissue. When you harvest
                the algae (typically every 1–2 weeks), those nutrients leave the system permanently. Better than carbon
                dosing, more reliable than a protein skimmer, and totally passive.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-950/20 p-6">
              <h3 className="text-lg font-bold text-violet-300 mb-3">🦐 Pod habitat</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Copepods and amphipods reproduce uncontrolled in the refugium where no fish can hunt them. They drift
                through the return pump into the display, providing natural live food for mandarins, dragonets, wrasses,
                and filter feeders.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Choose your refugium macroalgae</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {MACROALGAE.map((m) => (
              <Link key={m.name} href={m.href} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-aqua-400/40 hover:bg-aqua-400/5 transition-all">
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-aqua-300 transition-colors">{m.name}</h4>
                <p className="text-sm text-slate-400 mb-3">{m.role}</p>
                <p className="text-xs text-slate-500"><strong>Growth rate:</strong> {m.growth}</p>
                <p className="mt-3 text-xs font-medium text-aqua-400 group-hover:translate-x-1 transition-transform">View listing →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: MAINTENANCE ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">10. Realistic Maintenance Schedule</h2>
          <p className="text-slate-400 mb-8">
            Reef tanks are not low-maintenance pets — but they don&rsquo;t demand hours every day either. Here&rsquo;s
            the honest time commitment.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {MAINTENANCE.map((m) => (
              <div key={m.period} className={`rounded-2xl border ${m.tone} p-5`}>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{m.period}</h3>
                  <span className="text-xs font-bold text-white/70">{m.minutes}</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {m.tasks.map((t) => <li key={t} className="leading-relaxed">• {t}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-aqua-400/30 bg-aqua-400/5 p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-aqua-300">Total weekly time:</strong> About 30 minutes for routine maintenance,
              plus 5 minutes daily for observation. About 3 hours per month on average. If you can&rsquo;t commit that,
              don&rsquo;t buy a reef tank yet — the time investment doesn&rsquo;t shrink.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: MISTAKES ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">11. The Five Beginner Mistakes That Crash Tanks</h2>
          <p className="text-slate-400 mb-8">
            Almost every beginner-tank failure comes down to one of these. Avoiding them puts you ahead of 80% of new
            reef keepers.
          </p>

          <ol className="space-y-4">
            {MISTAKES.map((m) => (
              <li key={m.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-400/20 text-rose-300 font-bold border border-rose-400/40">
                    {m.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── SECTION 12: BUDGET BREAKDOWN ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">12. The Honest First-Year Budget</h2>
          <p className="text-slate-400 mb-8">
            Beginners focus on initial setup cost and undercount ongoing expenses. Here&rsquo;s the realistic
            breakdown for a standard 40-gallon system.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div className="rounded-2xl border-2 border-aqua-400/40 bg-aqua-950/20 p-6">
              <h3 className="text-lg font-bold text-aqua-300 mb-2">Initial Setup (Capital)</h3>
              <p className="text-3xl font-bold text-white mb-3">~$2,090</p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Tank, stand, AIO chambers</li>
                <li>• Dual LED lighting</li>
                <li>• Heater + controller</li>
                <li>• Powerheads / wavemakers</li>
                <li>• RO/DI 4-stage unit</li>
                <li>• ATO system</li>
                <li>• Dry rock + sand</li>
                <li>• Test kits + refractometer</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-violet-400/40 bg-violet-950/20 p-6">
              <h3 className="text-lg font-bold text-violet-300 mb-2">Year 1 Operating Costs</h3>
              <p className="text-3xl font-bold text-white mb-3">~$980</p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Salt mix ($10/month average)</li>
                <li>• Electricity ($15/month)</li>
                <li>• Fish food + coral food</li>
                <li>• Replacement filter socks, pads, RO/DI filters</li>
                <li>• Test reagents</li>
                <li>• Initial livestock additions (snails, fish, first corals)</li>
                <li>• Replacement bulbs or LED modules</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-emerald-400/40 bg-emerald-950/30 p-6 text-center">
            <h3 className="text-base font-bold text-emerald-300 uppercase tracking-wider mb-2">Total true first-year cost</h3>
            <p className="text-5xl font-bold text-white">~$3,070</p>
            <p className="text-sm text-slate-400 mt-3">For a standard 40-gallon mid-range build. A budget nano cuts this to $500–$1,000 — with the trade-off of daily monitoring.</p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-400 mb-8">
            The questions we hear most from people about to set up their first reef.
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

      {/* ─── COMMERCIAL BRIDGE ─── */}
      <section className="py-14 bg-gradient-to-b from-ocean-950 to-aqua-950/30 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Building Your First Reef? Start With These</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We ship sustainably-sourced macroalgae, reef-safe invertebrates, and live rotifer cultures from our licensed
            Florida facility. Overnight shipping, live arrival guarantee on our saltwater livestock.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <Link href="/shop/sw-chaeto" className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-aqua-400/40 hover:bg-aqua-400/5 transition-all">
              <div className="text-2xl mb-2">🌿</div>
              <h3 className="text-sm font-bold text-white mb-1">Chaetomorpha</h3>
              <p className="text-xs text-slate-400 mb-2">Refugium gold standard</p>
              <p className="text-base font-bold text-aqua-300">$29.99</p>
            </Link>
            <Link href="/shop/sw-redogo" className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-aqua-400/40 hover:bg-aqua-400/5 transition-all">
              <div className="text-2xl mb-2">🌱</div>
              <h3 className="text-sm font-bold text-white mb-1">Red Ogo Gracilaria</h3>
              <p className="text-xs text-slate-400 mb-2">Nutrient export + tang food</p>
              <p className="text-base font-bold text-aqua-300">$29.99</p>
            </Link>
            <Link href="/shop/sw-hermit-scarlet-5" className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-aqua-400/40 hover:bg-aqua-400/5 transition-all">
              <div className="text-2xl mb-2">🦀</div>
              <h3 className="text-sm font-bold text-white mb-1">Scarlet Hermits (5 Pack)</h3>
              <p className="text-xs text-slate-400 mb-2">Peaceful reef inhabitant</p>
              <p className="text-base font-bold text-aqua-300">$29.99</p>
            </Link>
            <Link href="/shop/live-marine-rotifers" className="group rounded-xl border-2 border-aqua-400/40 bg-aqua-950/20 p-4 hover:border-aqua-400/60 transition-all">
              <div className="text-2xl mb-2">🔬</div>
              <h3 className="text-sm font-bold text-white mb-1">Live Marine Rotifers</h3>
              <p className="text-xs text-aqua-300 mb-2">Built for breeders</p>
              <p className="text-base font-bold text-aqua-300">From $19.99</p>
            </Link>
          </div>

          <Link
            href="/shop?category=Saltwater"
            className="inline-block rounded-full bg-aqua-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-ocean-950 shadow-lg shadow-aqua-400/20 transition-all hover:bg-aqua-300"
          >
            Shop All Saltwater →
          </Link>
        </div>
      </section>

      {/* ─── RELATED ARTICLES ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">More Aquarium Guides</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/mystery-snail-eggs" className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition-all">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-aqua-300 transition-colors">Mystery Snail Eggs Guide</h3>
              <p className="text-xs text-slate-400">Found pink eggs above your waterline? Complete identification and decision guide.</p>
            </Link>
            <Link href="/blog/best-aquarium-plants-for-beginners" className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition-all">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-aqua-300 transition-colors">15 Best Beginner Aquarium Plants</h3>
              <p className="text-xs text-slate-400">No-CO2 freshwater plants that thrive in low-tech setups. Companion to your reef-tank build.</p>
            </Link>
            <Link href="/blog/best-plants-for-betta-fish" className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition-all">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-aqua-300 transition-colors">Best Plants for Betta Fish</h3>
              <p className="text-xs text-slate-400">Specialized species-fit guide for the most popular freshwater tank.</p>
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="how-to-set-up-a-reef-tank" />
      <Footer />
    </main>
  );
}
