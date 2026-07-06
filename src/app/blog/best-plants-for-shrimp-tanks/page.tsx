import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import RelatedGuides from "@/components/RelatedGuides";

export const metadata: Metadata = {
  title: "Best Plants for Shrimp Tanks: 10 Species Ranked + Safety Protocol",
  description:
    "10 ranked shrimp-safe plants scored on biofilm production, shelter, light, and difficulty. Plant safety protocol (pesticide, copper, glutaraldehyde risks), quarantine steps, low-tech carpet picks, and Caridina vs Neocaridina specifics.",
  alternates: { canonical: "https://shoreaquatic.com/blog/best-plants-for-shrimp-tanks" },
  openGraph: {
    title: "Best Plants for Shrimp Tanks (10-Species Ranked Guide)",
    description:
      "10 shrimp-safe plants ranked by biofilm production, shelter quality, and difficulty. Plus the safety protocol that prevents colony wipeouts.",
    type: "article",
    url: "https://shoreaquatic.com/blog/best-plants-for-shrimp-tanks",
  },
};

// ─── Types ──────────────────────────────────────────────────────────────
interface Role { icon: string; title: string; detail: string; }
interface SafetyThreat { threat: string; danger: string; threshold: string; }
interface PrepStep { step: string; protects: string; procedure: string; }
interface ShrimpPlant {
  rank: number;
  name: string;
  sci: string;
  format: "Moss" | "Epiphyte" | "Rosette" | "Carpet" | "Algae";
  light: string;
  growth: string;
  difficulty: "Beginner" | "Intermediate";
  biofilm: number;  // 1-5
  shelter: number;  // 1-5
  detail: string;
  pro: string;
  warning?: string;
}
interface AvoidPlant { name: string; sci: string; why: string; }
interface QuarantineStep { n: number; title: string; detail: string; }
interface LayoutZone { zone: string; pick: string; purpose: string; colorClass: string; }
interface ShrimpType { name: string; sci: string; ph: string; copperTolerance: string; bestPlants: string; cautionPlants: string; }
interface FaqItem { q: string; a: string; }

// ─── Data ───────────────────────────────────────────────────────────────
const ROLES: Role[] = [
  {
    icon: "🍃",
    title: "Biofilm farms",
    detail:
      "Plants are the primary food substrate in a shrimp tank. Their surfaces host a complex consortium of bacteria, algae, and protozoa that shrimp graze almost continuously — their digestive tracts are so short they need a near-constant food supply.",
  },
  {
    icon: "🛡️",
    title: "Molt safety",
    detail:
      "During ecdysis (molting), a shrimp's new exoskeleton is soft for several hours. Dense plants provide cryptic 'micro-refugia' where vulnerable adults can hide while the new shell calcifies. Without this shelter, post-molt shrimp are easy prey for tankmates.",
  },
  {
    icon: "👶",
    title: "Baby shrimp shelter",
    detail:
      "Newborn shrimplets are 1.0–2.0 mm — small enough to be sucked into filter intakes or eaten by curious tankmates. Fine-leaved plants act as physical barriers that exclude predators while serving as a food-dense nursery canopy.",
  },
];

const SAFETY_THREATS: SafetyThreat[] = [
  {
    threat: "Pesticide residue",
    danger: "Imported and commercial plants are often treated with organophosphates or neonicotinoid insecticides to meet USDA regulations.",
    threshold: "Lethal at trace amounts. Symptoms: backflipping, twitching, mass death within hours.",
  },
  {
    threat: "Copper-based snail killers",
    danger: "Many plants ship from growers who use copper sulfate to control hitchhiker snails.",
    threshold: "Toxicity starts at 0.03 mg/L. Lethal at 0.3 mg/L (100% mortality).",
  },
  {
    threat: "Liquid carbon (Excel, Flourish Excel)",
    danger: "Contains glutaraldehyde — a disinfectant used as an algicide. Marketed as safe for shrimp, but only at single dose. Easy to overdose.",
    threshold: "Acute toxicity at 4–6× the recommended algicidal dose.",
  },
  {
    threat: "Heavy metals in fertilizers",
    danger: "Some all-in-one fertilizers contain trace copper, zinc, and iron above safe shrimp thresholds.",
    threshold: "Caridina (Crystal/Bee) species: any detectable copper. Neocaridina: more tolerant but still risky.",
  },
];

const PREP_STEPS: PrepStep[] = [
  { step: "Simple rinse", protects: "Agar gel residue, transit debris, surface contaminants", procedure: "Room-temp dechlorinated water, 30 seconds per plant. Essential for tissue-cultured (TC) cups." },
  { step: "Bleach dip (1:20)", protects: "Algae spores, surface bacteria, planaria eggs", procedure: "90–150 seconds in 1 part bleach to 20 parts water. IMMEDIATE dechlorinator bath afterward." },
  { step: "Alum soak (1 tbsp/gal)", protects: "Snail eggs and embedded pests", procedure: "Either: 3 days at low concentration, OR several hours at higher concentration. Rinse thoroughly." },
  { step: "1-week quarantine", protects: "Systemic pesticides absorbed into plant tissue", procedure: "Separate vessel with daily 100% water changes. Add Seachem Prime to bind residual ammonia." },
  { step: "Cull-shrimp bioassay", protects: "Confirms plant is safe before introducing to main colony", procedure: "Add a single 'cull' shrimp (least-valued specimen) to the quarantine vessel. Grazing happily after 6 hours = plant is clean." },
];

const PLANTS: ShrimpPlant[] = [
  {
    rank: 1,
    name: "Java Moss",
    sci: "Taxiphyllum barbieri",
    format: "Moss",
    light: "Low–Medium",
    growth: "Moderate",
    difficulty: "Beginner",
    biofilm: 5,
    shelter: 5,
    detail: "The gold standard. Forms three-dimensional mats by interlocking fronds into a springy nursery canopy. Tolerates pH 6.0–7.5, 60–82°F, and nearly any lighting.",
    pro: "A single gram of Java Moss has ~80 m² of biofilm-hosting surface area — more than commercial filter media.",
  },
  {
    rank: 2,
    name: "Christmas Moss",
    sci: "Vesicularia montagnei",
    format: "Moss",
    light: "Low–Medium",
    growth: "Slow",
    difficulty: "Beginner",
    biofilm: 5,
    shelter: 5,
    detail: "Triangular fir-shaped fronds that trap detritus efficiently. Slower-growing than Java Moss but holds its shape better when attached to wood or rock.",
    pro: "Highest visual appeal of any shrimp-safe moss; pearls beautifully under medium light.",
  },
  {
    rank: 3,
    name: "Flame Moss",
    sci: "Taxiphyllum 'Flame'",
    format: "Moss",
    light: "Low–Medium",
    growth: "Slow",
    difficulty: "Beginner",
    biofilm: 4,
    shelter: 4,
    detail: "Distinctive vertical growth pattern — grows upward in flame-like spirals rather than spreading horizontally. Adds architectural height to shrimp aquascapes.",
    pro: "Vertical structure creates climbing paths shrimp actively use during peak activity hours.",
  },
  {
    rank: 4,
    name: "Subwassertang",
    sci: "Lomariopsis sp.",
    format: "Moss",
    light: "Low–Medium",
    growth: "Slow–Moderate",
    difficulty: "Beginner",
    biofilm: 5,
    shelter: 5,
    detail: "Technically a fern gametophyte, not a true moss. Forms massive springy cushions with ribbon-like ribbon structures that shrimplets hide inside.",
    pro: "Best shelter rating of any plant on this list — shrimplets disappear inside it completely.",
  },
  {
    rank: 5,
    name: "Anubias Nana Petite",
    sci: "Anubias barteri var. nana 'Petite'",
    format: "Epiphyte",
    light: "Low–Medium",
    growth: "Very Slow",
    difficulty: "Beginner",
    biofilm: 3,
    shelter: 3,
    detail: "Hardy rhizome plant. Attach to wood or rock — never bury the rhizome. Broad waxy leaves act as grazing platforms and rest spots.",
    pro: "Virtually indestructible. The cheap insurance plant — buy a small clump, glue to driftwood, forget about it.",
  },
  {
    rank: 6,
    name: "Bucephalandra",
    sci: "Bucephalandra spp.",
    format: "Epiphyte",
    light: "Low–Medium",
    growth: "Very Slow",
    difficulty: "Intermediate",
    biofilm: 3,
    shelter: 3,
    detail: "Premium Borneo epiphyte. Iridescent leaves in cultivar-specific colors (Brownie Ghost, Wavy Green, Red Mini, Kedagang, Velvet). Attaches to hardscape like Anubias.",
    pro: "Adds visual interest no other shrimp-safe plant matches. Tolerates soft Caridina water excellently.",
  },
  {
    rank: 7,
    name: "Java Fern",
    sci: "Microsorum pteropus",
    format: "Epiphyte",
    light: "Low–Medium",
    growth: "Slow",
    difficulty: "Beginner",
    biofilm: 3,
    shelter: 4,
    detail: "Excellent midground/background plant. Fibrous root tangle on driftwood acts as both a hiding zone and a mechanical filter for fine detritus.",
    pro: "Windelov and Trident cultivars produce frilled leaf tips that increase shelter rating further.",
  },
  {
    rank: 8,
    name: "Crypt Wendtii",
    sci: "Cryptocoryne wendtii",
    format: "Rosette",
    light: "Low–Medium",
    growth: "Slow–Moderate",
    difficulty: "Beginner",
    biofilm: 3,
    shelter: 4,
    detail: "Adaptable rosette plant. Ruffled bronze, green, or red leaves create shaded pockets under the leaves where post-molt adults rest. Heavy root feeder.",
    pro: "Available in dozens of cultivars — Green, Bronze, Red, Mi Oya, Tropica, Florida Sunset — pick the color that matches your aquascape.",
    warning: "May 'melt' during transition or in extremely soft Caridina water. New growth follows in 2–3 weeks.",
  },
  {
    rank: 9,
    name: "Marimo Moss Ball",
    sci: "Aegagropila linnaei",
    format: "Algae",
    light: "Low",
    growth: "Extremely Slow",
    difficulty: "Beginner",
    biofilm: 4,
    shelter: 2,
    detail: "Technically a filamentous algae colony, not a true moss or plant. Shrimp methodically pick through its velvety surface for trapped food particles.",
    pro: "Acts as a continuous feeding station. Roll occasionally to keep it spherical. Tolerates cold water (Crystal shrimp friendly).",
  },
  {
    rank: 10,
    name: "Marsilea hirsuta",
    sci: "Marsilea hirsuta",
    format: "Carpet",
    light: "Medium–High",
    growth: "Slow–Moderate",
    difficulty: "Beginner",
    biofilm: 3,
    shelter: 4,
    detail: "Dwarf four-leaf-clover-shaped foreground plant. Forms a low carpet under medium-high light. Adapts leaf shape to light intensity — small clover leaves in high light, larger leaves in low.",
    pro: "Only carpeting plant on this list — provides foreground cover for juveniles without the CO2 demand of HC or Monte Carlo.",
  },
];

const AVOID_PLANTS: AvoidPlant[] = [
  {
    name: "Hornwort",
    sci: "Ceratophyllum demersum",
    why: "Highly sensitive to parameter changes. Sheds needles overnight when stressed — clogs filter intakes and decomposing needles spike ammonia in hours. Not worth the risk in a small shrimp tank.",
  },
  {
    name: "Fast-rooting stems (Hygrophila, Bacopa)",
    sci: "Various",
    why: "Require frequent uprooting to trim. Pulling roots from established substrate releases trapped hydrogen sulfide pockets and ammonia — a known shrimp killer in soft Caridina water.",
  },
  {
    name: "Dwarf Baby Tears (HC)",
    sci: "Hemianthus callitrichoides",
    why: "Requires high light + CO2 + aggressive fertilization to carpet. The chemistry demands suppress shrimp breeding and trigger hair algae growth that traps and kills shrimplets.",
  },
  {
    name: "Pearl Weed",
    sci: "Hemianthus micranthemoides",
    why: "Same problem as HC — needs high-tech setup to look good. Without CO2, it stretches and becomes a tangled mess that traps shrimp during molting.",
  },
  {
    name: "Glossostigma",
    sci: "Glossostigma elatinoides",
    why: "Tiny ground-cover that demands very high light to carpet. Under low/medium light it grows vertically toward the surface, defeating its carpeting purpose AND fueling algae that endangers shrimp.",
  },
];

const QUARANTINE_STEPS: QuarantineStep[] = [
  { n: 1, title: "Strip the plant", detail: "Remove all rock wool, ceramic plugs, plastic pots, and lead weights. These hide pests and absorb chemicals you can't see. Discard everything that came with the plant." },
  { n: 2, title: "Rinse in dechlorinated water", detail: "Room-temperature water (not cold or hot — sudden temperature changes shed leaves). Hold the plant under gentle running water for 30 seconds to dislodge debris and surface contaminants." },
  { n: 3, title: "Bleach or alum dip", detail: "Bleach 1:20 for 90–150 seconds then immediate dechlorinator bath. OR alum (1 tbsp per gallon) for 3 days. Bleach is faster but more aggressive — soft plants like mosses prefer alum." },
  { n: 4, title: "5–7 day quarantine vessel", detail: "Keep the plant in a separate container with daily 100% water changes and Seachem Prime. This flushes systemic pesticides absorbed into the plant tissue. Light from a window is fine — full aquarium lighting not required." },
  { n: 5, title: "Cull-shrimp bioassay", detail: "Drop a single 'cull' shrimp (the least-valued specimen in your colony) into the quarantine vessel. If it grazes happily for 6 hours with no twitching or backflipping, the plant is safe for your main colony." },
];

const LAYOUT_ZONES: LayoutZone[] = [
  { zone: "Foreground", pick: "Marsilea, Dwarf Sagittaria, Mini Pellia", purpose: "'Grazer flats' — low-profile cover for shrimplets and clear viewing of the adult colony from the front", colorClass: "from-emerald-900/30 to-emerald-950/20 border-emerald-500/30" },
  { zone: "Midground", pick: "Anubias Nana Petite, Bucephalandra (on rocks)", purpose: "'Epiphytic terraces' — climbing paths up the hardscape and resting platforms for post-molt adults", colorClass: "from-teal-900/30 to-teal-950/20 border-teal-500/30" },
  { zone: "Background", pick: "Java Fern, Crypt Wendtii, Flame Moss", purpose: "'Vertical canopies' — shade and shelter for breeding females and stress-sensitive Crystal/Bee shrimp", colorClass: "from-aqua-900/30 to-aqua-950/20 border-aqua-400/30" },
  { zone: "Mid-water decor", pick: "Marimo Moss Balls, free-floating Subwassertang clumps", purpose: "Continuous feeding stations the colony actively grazes throughout the day", colorClass: "from-violet-900/30 to-violet-950/20 border-violet-500/30" },
];

const SHRIMP_TYPES: ShrimpType[] = [
  {
    name: "Neocaridina",
    sci: "Cherry, Yellow, Blue Velvet, Snowball",
    ph: "6.5–7.5 (neutral to slightly alkaline)",
    copperTolerance: "Moderate — tolerates trace copper in some plant fertilizers",
    bestPlants: "Any plant on the top 10 list. Hard water tolerance means Crypts thrive without melting.",
    cautionPlants: "Still avoid copper overdosing and liquid carbon at high concentration.",
  },
  {
    name: "Caridina",
    sci: "Crystal Red, Black, Bee, Tiger, Taiwan Bee",
    ph: "5.8–6.8 (soft, acidic)",
    copperTolerance: "ZERO — hypersensitive to any detectable copper",
    bestPlants: "Mosses, Anubias, Bucephalandra, Java Fern, Subwassertang — all thrive in soft acidic water.",
    cautionPlants: "Cryptocoryne species more likely to melt during transition due to extreme softness. Use Java Fern and Anubias instead.",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Do shrimp eat plants?",
    a: "No. Shrimp lack the enzymes to digest healthy plant cellulose. What looks like plant-eating is actually biofilm grazing — they use brush-like appendages called scopocerites to scrape the bacterial-algal film off leaves. They only consume plant tissue when it's already decaying and soft (essentially eating the bacteria that are decomposing the plant, not the plant itself).",
  },
  {
    q: "Will a Marimo Moss Ball kill my shrimp?",
    a: "No. Marimo Moss Balls (Aegagropila linnaei) are slow-growing algae colonies that act as continuous feeding stations. They're completely safe for shrimp and highly recommended for any colony tank. Roll them occasionally to keep them spherical and prevent the bottom from getting flat. The only Marimo concern is buying counterfeit or treated balls from non-aquarium retailers (decorative shops sometimes sell green-dyed cotton spheres labeled as Marimo).",
  },
  {
    q: "How much moss do I need for a breeding colony?",
    a: "Moss should occupy 10–20% of the visible tank volume to create a secure nursery for shrimplets. In a 10-gallon shrimp tank, that's roughly one fist-sized Java Moss clump split into 3–4 locations: a back corner, one piece tied to driftwood mid-tank, and small clumps wedged between rocks. Newborn shrimplets need to be able to walk from any tank surface to a moss patch without crossing open water.",
  },
  {
    q: "Can I dose plant fertilizers with shrimp?",
    a: "Yes, but only specialized shrimp-safe fertilizers explicitly labeled copper-free (Aquario NEO, Salty Shrimp, Shrimp King). Always start at 1/4 to 1/2 the recommended dose and monitor behavior for 48 hours before increasing. If you see twitching, hiding, or unusual swimming patterns, do an immediate 50% water change with Seachem Prime. For Caridina (Crystal/Bee) shrimp, root tabs near plants are safer than water column dosing.",
  },
  {
    q: "Do floating plants help shrimp?",
    a: "Yes. Floating plants like Salvinia minima, Red Root Floaters, and Amazon Frogbit absorb dissolved nitrate and phosphate (nutrient export) and provide long trailing roots that shrimp love to hang upside-down on. The root mass is a high-oxygen grazing zone with constant water movement. Floaters also reduce direct light intensity at the substrate — perfect for shrimp who prefer dim conditions.",
  },
  {
    q: "Are tissue-cultured (TC) plants worth the extra cost?",
    a: "For shrimp tanks, absolutely yes. TC plants are grown in sterile lab conditions on agar gel, so they arrive with zero pesticide residue, zero snail hitchhikers, and zero algae spores. The 30–50% price premium is cheap insurance against a colony wipeout. Always rinse TC plants thoroughly to remove agar before planting.",
  },
  {
    q: "Will high-tech plants (CO2 setup) work in a shrimp tank?",
    a: "Generally no. CO2 cycles cause pH swings of 0.5–1.0 daily, which stress shrimp and suppress breeding. The aggressive fertilization required for high-tech setups introduces metals that wipe out Caridina colonies. Stick with low-tech plants (10–30 PAR, no CO2) for any shrimp-focused tank.",
  },
  {
    q: "Why is my Java Moss turning brown?",
    a: "Three common causes: (1) too much light — moss prefers shade, scorches under high-intensity LEDs running at 100%; (2) inadequate water flow — stagnant water lets detritus settle on the moss and rot it from inside; (3) dying-back as the moss adapts to your water chemistry. If it's localized browning with healthy green growth elsewhere, trim the brown sections and the plant will recover.",
  },
  {
    q: "Can I keep snails in a planted shrimp tank?",
    a: "Yes — Ramshorn, Nerite, and Mystery snails are all shrimp-safe and help control biofilm and algae. Avoid Assassin Snails (will eat shrimplets) and Trumpet Snails (multiply uncontrollably). Mystery Snails are particularly compatible because they breathe atmospheric air via a siphon and don't compete with shrimp for water-column oxygen.",
  },
  {
    q: "How long does it take to establish a shrimp-safe planted tank?",
    a: "Plan for a 4–8 week mature-cycle before introducing shrimp. The first 4 weeks establish nitrifying bacteria; weeks 5–8 grow visible biofilm and a stable plant root system. Adding shrimp too early — before biofilm has developed — means they starve. The 'older the better' rule applies to shrimp tanks more than any other freshwater setup.",
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────
function ScoreDots({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={i < value ? "text-emerald-400" : "text-slate-700"}
          aria-hidden
        >
          ●
        </span>
      ))}
      <span className="sr-only">{value} out of {max}</span>
    </span>
  );
}

function formatColor(f: ShrimpPlant["format"]) {
  if (f === "Moss")     return "bg-emerald-400/15 text-emerald-300 border-emerald-400/30";
  if (f === "Epiphyte") return "bg-teal-400/15 text-teal-300 border-teal-400/30";
  if (f === "Rosette")  return "bg-aqua-400/15 text-aqua-300 border-aqua-400/30";
  if (f === "Carpet")   return "bg-lime-400/15 text-lime-300 border-lime-400/30";
  return "bg-cyan-400/15 text-cyan-300 border-cyan-400/30";  // Algae
}

// ─── JSON-LD ────────────────────────────────────────────────────────────
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Plants for Shrimp Tanks: 10 Species Ranked + Safety Protocol",
  description:
    "10 ranked shrimp-safe plants with biofilm and shelter scores, plant safety hazards (pesticides, copper, glutaraldehyde), 5-step quarantine protocol, low-tech carpet picks, and species-specific notes for Neocaridina and Caridina.",
  author: { "@type": "Organization", name: "Shore Aquatic" },
  publisher: {
    "@type": "Organization",
    name: "Shore Aquatic",
    logo: { "@type": "ImageObject", url: "https://shoreaquatic.com/logo.png" },
  },
  datePublished: "2026-06-07",
  dateModified: "2026-06-07",
  mainEntityOfPage: "https://shoreaquatic.com/blog/best-plants-for-shrimp-tanks",
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

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Quarantine New Plants Before Adding to a Shrimp Tank",
  description:
    "5-step quarantine protocol that removes pesticide residue, copper-based snail treatments, and algae spores before plants enter a shrimp colony tank.",
  totalTime: "P7D",
  step: QUARANTINE_STEPS.map((s) => ({
    "@type": "HowToStep",
    position: s.n,
    name: s.title,
    text: s.detail,
  })),
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: PLANTS.map((p) => ({
    "@type": "ListItem",
    position: p.rank,
    name: p.name,
    description: p.detail,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shoreaquatic.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://shoreaquatic.com/blog" },
    { "@type": "ListItem", position: 3, name: "Best Plants for Shrimp Tanks", item: "https://shoreaquatic.com/blog/best-plants-for-shrimp-tanks" },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════
export default function ShrimpPlantsPage() {
  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ─── HERO ─── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-emerald-950 via-teal-950 to-ocean-950 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-aqua-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-aqua-400">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Best Plants for Shrimp Tanks</span>
          </nav>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider">Buyer&apos;s Guide</span>
            <span className="rounded-full bg-teal-400/15 text-teal-300 border border-teal-400/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider">Freshwater</span>
            <span className="rounded-full bg-aqua-400/15 text-aqua-300 border border-aqua-400/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider">18 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Best Plants for Shrimp Tanks
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            10 shrimp-safe species ranked by biofilm production, shelter quality, and difficulty — plus the
            safety protocol that prevents pesticide-related colony wipeouts. Built for Cherry, Crystal, Bee, and
            Taiwan Bee keepers who want a tank that breeds, not one that drips.
          </p>
        </div>
      </section>

      {/* ─── QUICK ANSWER ─── */}
      <section className="py-10 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-emerald-400/40 bg-emerald-950/30 p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🦐</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-3">Quick Answer</h2>
                <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                  <li><strong className="text-emerald-300">Top pick:</strong> Java Moss — gold standard for biofilm production and shrimplet shelter, virtually indestructible.</li>
                  <li><strong className="text-emerald-300">Cover 10–20% of tank volume with moss</strong> to create a viable shrimplet nursery.</li>
                  <li><strong className="text-emerald-300">Buy tissue-cultured (TC) plants</strong> — they&rsquo;re pesticide-free, snail-free, and worth the 30–50% premium.</li>
                  <li><strong className="text-emerald-300">Quarantine every plant 5–7 days</strong> before adding to your colony, even TC. Run a cull-shrimp bioassay before introduction.</li>
                  <li><strong className="text-emerald-300">Avoid:</strong> Hornwort (sheds in spikes), Excel/Flourish liquid carbon (glutaraldehyde toxicity), copper-based plant fertilizers.</li>
                  <li><strong className="text-emerald-300">Light:</strong> 10–30 PAR at the substrate. High-tech setups (CO2, aggressive ferts) suppress shrimp breeding.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: WHY SHRIMP NEED PLANTS ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">1. Why Shrimp Need Plants</h2>
          <p className="text-slate-400 mb-8">
            Plants are not decoration in a shrimp tank — they&rsquo;re the foundation of the food web and the only
            reliable shelter system. A shrimp tank without dense planting is a shrimp tank that fails within a few
            months.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {ROLES.map((r) => (
              <div key={r.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: SAFETY ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">2. The Hidden Risks (What Kills Colonies)</h2>
          <p className="text-slate-400 mb-8">
            Most shrimp colony wipeouts trace back to a plant — not livestock disease, not parameter shifts, but a
            recently-added plant carrying a chemical the keeper didn&rsquo;t suspect. Here&rsquo;s what to watch for.
          </p>

          <div className="space-y-3 mb-8">
            {SAFETY_THREATS.map((s) => (
              <div key={s.threat} className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-5">
                <h3 className="text-base font-bold text-rose-300 mb-1">{s.threat}</h3>
                <p className="text-sm text-slate-400 mb-2 leading-relaxed">{s.danger}</p>
                <p className="text-xs text-slate-500 italic"><strong>Toxicity threshold:</strong> {s.threshold}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Preparation steps (use as a checklist)</h3>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr className="text-left">
                  <th className="px-4 py-3 text-slate-300 font-semibold">Step</th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Protects against</th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Procedure</th>
                </tr>
              </thead>
              <tbody>
                {PREP_STEPS.map((p) => (
                  <tr key={p.step} className="border-t border-white/5">
                    <td className="px-4 py-3 text-white font-medium">{p.step}</td>
                    <td className="px-4 py-3 text-slate-400">{p.protects}</td>
                    <td className="px-4 py-3 text-slate-400">{p.procedure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-emerald-300">✓ The single best safety move:</strong> Buy tissue-cultured (TC)
              cup plants whenever possible. They&rsquo;re grown in sterile lab conditions on agar gel — zero
              pesticides, zero snails, zero algae. The 30–50% price premium pays for itself the first time you
              avoid a $200 colony wipeout.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE 10 RANKED PICKS ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">3. The 10 Ranked Picks</h2>
          <p className="text-slate-400 mb-8">
            Scored on biofilm production (food density) and shelter quality (nursery + molt safety). All 10 are
            shrimp-safe and proven across thousands of established colony tanks.
          </p>

          <div className="space-y-4">
            {PLANTS.map((p) => (
              <div key={p.rank} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 font-bold text-lg border border-emerald-400/40">
                    {p.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                      <h3 className="text-lg font-bold text-white">{p.name}</h3>
                      <span className="text-xs text-slate-500 italic">{p.sci}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${formatColor(p.format)}`}>{p.format}</span>
                      <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-slate-400">{p.difficulty}</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-4 mb-4">
                  <div className="rounded-lg bg-white/[0.02] border border-white/5 p-2.5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Biofilm</div>
                    <ScoreDots value={p.biofilm} />
                  </div>
                  <div className="rounded-lg bg-white/[0.02] border border-white/5 p-2.5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Shelter</div>
                    <ScoreDots value={p.shelter} />
                  </div>
                  <div className="rounded-lg bg-white/[0.02] border border-white/5 p-2.5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Light</div>
                    <div className="text-xs text-white font-semibold">{p.light}</div>
                  </div>
                  <div className="rounded-lg bg-white/[0.02] border border-white/5 p-2.5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Growth</div>
                    <div className="text-xs text-white font-semibold">{p.growth}</div>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-3">{p.detail}</p>

                <div className="rounded-lg bg-emerald-950/30 border border-emerald-500/30 p-3 mb-2">
                  <p className="text-xs text-slate-300"><strong className="text-emerald-300">💡 Pro insight:</strong> {p.pro}</p>
                </div>

                {p.warning && (
                  <div className="rounded-lg bg-amber-950/30 border border-amber-500/30 p-3">
                    <p className="text-xs text-slate-300"><strong className="text-amber-300">⚠ Heads-up:</strong> {p.warning}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHY MOSSES DOMINATE ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">4. Why Mosses Dominate Shrimp Tanks</h2>
          <p className="text-slate-400 mb-8">
            Four of the top five plants on this list are mosses. That&rsquo;s not bias — it&rsquo;s biofilm physics.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <h3 className="text-lg font-bold text-emerald-300 mb-3">The single-cell-layer advantage</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Vascular plants (Anubias, Java Fern, Crypts) have leaves covered with a waxy cuticle that limits how
                much surface area is biologically active. Moss leaves are typically <strong className="text-white">one cell
                layer thick</strong> — every surface interacts directly with the water column, hosting bacteria, algae,
                and protozoa on both sides simultaneously.
              </p>
            </div>
            <div className="rounded-2xl border border-aqua-400/30 bg-aqua-950/20 p-6">
              <h3 className="text-lg font-bold text-aqua-300 mb-3">80 m² per gram</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A single gram of Java Moss provides approximately <strong className="text-white">80 square meters</strong>{" "}
                of active surface area for biofilm hosting. That&rsquo;s more than most commercial filter media,
                spread throughout the tank where shrimp can graze it directly. The moss isn&rsquo;t just a nursery
                — it&rsquo;s the kitchen.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-slate-400 leading-relaxed">
              This is also why moss-heavy tanks have a documented nitrogen-cycling advantage. The same surface area
              that hosts shrimp food also hosts nitrifying bacteria that convert ammonia and nitrite directly into
              inert nitrogen gas. Heavily-mossed shrimp tanks often run with measurable ammonia readings of zero
              even at high stocking densities, because the moss is a passive biological filter operating throughout
              the water column.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CARPETING PLANTS ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">5. Carpeting Plants — Worth It?</h2>
          <p className="text-slate-400 mb-8">
            Carpeting plants make Instagram aquascapes look gorgeous. They also drive most shrimp keepers crazy.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-6">
              <h3 className="text-lg font-bold text-rose-300 mb-3">The high-tech trap</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dwarf Baby Tears (HC), Glossostigma, and Monte Carlo require high light + CO2 + aggressive
                fertilization to carpet. That chemistry stack is hostile to shrimp breeding — CO2 swings stress
                them, and the fertilization regimen introduces metals at toxic concentrations. Worse, the high
                light + nutrients combination almost always triggers hair algae, which entangles and kills shrimp
                during molting.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <h3 className="text-lg font-bold text-emerald-300 mb-3">The low-tech exceptions</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Marsilea hirsuta</strong> and <strong className="text-white">Dwarf Sagittaria</strong>
                {" "}are the two viable low-tech carpets. Both grow reliably at 15–25 PAR without CO2, stay short, and
                provide ground-level cover for juveniles without forcing a chemistry compromise. Plant individual
                plugs, trim regularly, and let them spread via runners over 2–3 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: PLANTS TO AVOID ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">6. Plants to Avoid in Shrimp Tanks</h2>
          <p className="text-slate-400 mb-8">
            These species are popular in general aquascaping but cause specific problems in shrimp colonies. Skip
            them — there&rsquo;s no aquascape compromise worth a wiped-out colony.
          </p>

          <div className="space-y-3">
            {AVOID_PLANTS.map((p) => (
              <div key={p.name} className="rounded-xl border border-rose-500/30 bg-rose-950/15 p-5">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-base font-bold text-rose-300">{p.name}</h3>
                  <span className="text-xs text-slate-500 italic">{p.sci}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{p.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: QUARANTINE (HowTo) ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">7. The 5-Step Quarantine Protocol</h2>
          <p className="text-slate-400 mb-8">
            Run this on every new plant — even tissue-cultured cups. The cost of a bleach dip and a week of patience
            is nothing compared to losing a Crystal colony.
          </p>

          <ol className="space-y-4">
            {QUARANTINE_STEPS.map((s) => (
              <li key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 font-bold border border-emerald-400/40">
                    {s.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-emerald-300">✓ The bioassay rule:</strong> A 6-hour cull-shrimp bioassay catches
              systemic toxicity that no chemical test can detect. If the cull is alive, grazing, and showing normal
              swimming after 6 hours, the plant is safe. If you see twitching, backflipping, or paralysis — the plant
              has retained pesticide. Discard it and start over.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: TANK LAYOUT ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">8. Tank Layout &amp; Composition</h2>
          <p className="text-slate-400 mb-8">
            A well-zoned shrimp tank looks intentional and breeds harder than a random plant pile. Match each
            plant&rsquo;s height and habit to the zone where it earns its keep.
          </p>

          <div className="space-y-4 mb-8">
            {LAYOUT_ZONES.map((z) => (
              <div key={z.zone} className={`rounded-2xl border bg-gradient-to-br ${z.colorClass} p-5`}>
                <h3 className="text-lg font-bold text-white mb-2">{z.zone}</h3>
                <p className="text-sm text-slate-300 mb-2"><strong className="text-white">Plants:</strong> {z.pick}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{z.purpose}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-violet-500/30 bg-violet-950/20 p-5">
            <h3 className="text-base font-bold text-violet-300 mb-2">Dark substrate triggers color expression</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Cherry, Crystal, and Bee shrimp have specialized pigment cells called <em>chromatophores</em> that
              react to their environment. Dark substrate (black or dark brown) triggers maximum pigment expression
              — your reds get redder, your blacks get deeper. Light or white substrate causes shrimp to dilute
              their coloration as camouflage. Always choose dark substrate for show-grade colony tanks.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: LIGHTING ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">9. Lighting — The Low-Light Balance</h2>
          <p className="text-slate-400 mb-8">
            Shrimp evolved in shaded forest streams. They&rsquo;re photo-stressed under intense lighting and breed
            more reliably in dim setups. This conveniently aligns with the lighting needs of every plant on the top
            10 list.
          </p>

          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-5 text-center">
              <div className="text-3xl font-bold text-white mb-1">10–30</div>
              <div className="text-xs text-amber-300 uppercase tracking-wider mb-2">PAR at substrate</div>
              <p className="text-xs text-slate-400">The sweet spot for shrimp and low-tech plants alike</p>
            </div>
            <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-5 text-center">
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-xs text-rose-300 uppercase tracking-wider mb-2">PAR — too much</div>
              <p className="text-xs text-slate-400">Triggers algae, suppresses breeding, scorches mosses</p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 text-center">
              <div className="text-3xl font-bold text-white mb-1">6–8</div>
              <div className="text-xs text-emerald-300 uppercase tracking-wider mb-2">Hours per day</div>
              <p className="text-xs text-slate-400">Mimics natural canopy photoperiod</p>
            </div>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            Counter-intuitively, low-light tanks experience LESS algae. High light forces fast nutrient demand,
            which means heavy dosing, which means algae fuel. Low light + heavy moss + natural photoperiod creates
            a self-regulating system where green spot algae becomes a continuous shrimp snack rather than a
            tank-killer.
          </p>
        </div>
      </section>

      {/* ─── SECTION 10: SPECIES-SPECIFIC ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">10. Species-Specific Notes</h2>
          <p className="text-slate-400 mb-8">
            Neocaridina and Caridina shrimp have fundamentally different water chemistry needs. The plant picks
            change accordingly.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {SHRIMP_TYPES.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-bold text-white mb-1">{t.name}</h3>
                <p className="text-sm text-slate-500 italic mb-4">{t.sci}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-aqua-300 font-bold uppercase tracking-wider mb-1">Water chemistry</div>
                    <p className="text-slate-300">{t.ph}</p>
                  </div>
                  <div>
                    <div className="text-xs text-rose-300 font-bold uppercase tracking-wider mb-1">Copper tolerance</div>
                    <p className="text-slate-300">{t.copperTolerance}</p>
                  </div>
                  <div>
                    <div className="text-xs text-emerald-300 font-bold uppercase tracking-wider mb-1">Best plants</div>
                    <p className="text-slate-300">{t.bestPlants}</p>
                  </div>
                  <div>
                    <div className="text-xs text-amber-300 font-bold uppercase tracking-wider mb-1">Use caution with</div>
                    <p className="text-slate-300">{t.cautionPlants}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-aqua-400/30 bg-aqua-950/20 p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-aqua-300">The Anubias sap myth.</strong> A long-running hobby rumor claims
              Anubias sap (calcium oxalate) is toxic to shrimp. Experimental purée tests have shown no ill effects
              — the deaths historically blamed on Anubias sap are almost always caused by systemic pesticide
              residue from the same plant, or ammonia spikes from over-aggressive maintenance. Anubias is one of
              the safest plants you can put in a shrimp tank.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-400 mb-8">
            The questions we hear most from shrimp keepers setting up or troubleshooting their planted tanks.
          </p>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4 hover:bg-white/[0.05] transition-colors">
                  <span className="text-base font-semibold text-white pr-2">{f.q}</span>
                  <span className="text-emerald-300 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
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
      <section className="py-14 bg-gradient-to-b from-ocean-950 to-emerald-950/30 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Build Your Shrimp Tank With Our Catalog</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We carry every plant on this list, sourced from our licensed Florida aquaculture facility. Tissue-cultured
            cups, potted specimens, and bare-root portions — all shrimp-safe, pesticide-free, and shipped overnight.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <Link href="/shop?category=Plants" className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-all">
              <div className="text-2xl mb-2">🌿</div>
              <h3 className="text-sm font-bold text-white mb-1">Java Moss &amp; Mosses</h3>
              <p className="text-xs text-slate-400 mb-2">Christmas, Flame, Weeping</p>
              <p className="text-base font-bold text-emerald-300">From $11.25</p>
            </Link>
            <Link href="/shop?category=Plants" className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-all">
              <div className="text-2xl mb-2">🪴</div>
              <h3 className="text-sm font-bold text-white mb-1">Anubias Varieties</h3>
              <p className="text-xs text-slate-400 mb-2">Nana, Petite, Barteri</p>
              <p className="text-base font-bold text-emerald-300">From $9.25</p>
            </Link>
            <Link href="/shop?category=Plants" className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-all">
              <div className="text-2xl mb-2">🌱</div>
              <h3 className="text-sm font-bold text-white mb-1">Bucephalandra</h3>
              <p className="text-xs text-slate-400 mb-2">Borneo epiphyte cultivars</p>
              <p className="text-base font-bold text-emerald-300">From $12.25</p>
            </Link>
            <Link href="/shop?category=Plants" className="group rounded-xl border-2 border-emerald-400/40 bg-emerald-950/20 p-4 hover:border-emerald-400/60 transition-all">
              <div className="text-2xl mb-2">🟢</div>
              <h3 className="text-sm font-bold text-white mb-1">Marimo Moss Balls</h3>
              <p className="text-xs text-emerald-300 mb-2">Continuous feeding station</p>
              <p className="text-base font-bold text-emerald-300">From $7.00</p>
            </Link>
          </div>

          <Link
            href="/shop?category=Plants"
            className="inline-block rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-ocean-950 shadow-lg shadow-emerald-400/20 transition-all hover:bg-emerald-300"
          >
            Shop All Aquarium Plants →
          </Link>
        </div>
      </section>

      {/* ─── RELATED ARTICLES ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">More Aquarium Guides</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/best-aquarium-plants-for-beginners" className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition-all">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">15 Best Beginner Aquarium Plants</h3>
              <p className="text-xs text-slate-400">No-CO2 plants ranked by 5-dimension score. Many overlap with shrimp picks.</p>
            </Link>
            <Link href="/blog/best-plants-for-betta-fish" className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition-all">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Best Plants for Betta Fish</h3>
              <p className="text-xs text-slate-400">Species-specific plant guide for the most popular freshwater tank.</p>
            </Link>
            <Link href="/blog/aquarium-plants-melting" className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition-all">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Why Are My Plants Melting?</h3>
              <p className="text-xs text-slate-400">Transition melt vs rot — important for Crypt Wendtii in soft Caridina water.</p>
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="best-plants-for-shrimp-tanks" />
      <Footer />
    </main>
  );
}
