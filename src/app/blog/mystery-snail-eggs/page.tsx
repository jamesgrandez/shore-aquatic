import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import RelatedGuides from "@/components/RelatedGuides";

export const metadata: Metadata = {
  title: "Mystery Snail Eggs: Identify, Hatch, or Remove (Complete Guide) | Shore Aquatic",
  description:
    "Found pink eggs above your tank waterline? Complete guide to mystery snail eggs — identification, hatching timeline, decision matrix, removal protocol, color genetics, and 10-question FAQ.",
  alternates: { canonical: "https://shoreaquatic.com/blog/mystery-snail-eggs" },
  openGraph: {
    title: "Mystery Snail Eggs: Identify, Hatch, or Remove (Complete Guide)",
    description:
      "The definitive guide to mystery snail eggs. ID by color stage, decide to hatch or remove, hatch in 2-4 weeks, color genetics, and US legality.",
    type: "article",
    url: "https://shoreaquatic.com/blog/mystery-snail-eggs",
  },
};

// ─── Types ──────────────────────────────────────────────────────────────
interface EggStage { phase: string; timing: string; appearance: string; texture: string; colorClass: string; borderClass: string; }
interface SnailComparison { type: string; location: "Above" | "Submerged"; appearance: string; count: string; differentiator: string; }
interface HatchTier { temp: string; time: string; humidity: string; rate: string; note: string; tierColor: string; }
interface DecisionFactor { factor: string; consider: string; redFlag: string; greenLight: string; }
interface RemovalStep { n: number; title: string; detail: string; warning?: string; }
interface IncubatorStep { n: number; title: string; detail: string; }
interface FaqItem { q: string; a: string; }
interface GeneticsLocus { locus: string; dominant: string; recessive: string; effect: string; }
interface RarityTier { rank: string; color: string; market: string; note: string; gradientClass: string; }
interface BannedState { state: string; ban: string; severity: "Strict" | "Family-level" | "Total"; }

// ─── Data ───────────────────────────────────────────────────────────────
const EGG_STAGES: EggStage[] = [
  {
    phase: "Fresh",
    timing: "0–24 hours",
    appearance: "Pale pink to off-white, jelly-bubble look, soft and sticky",
    texture: "Gelatinous, will smear if touched",
    colorClass: "bg-pink-200/10 text-pink-300",
    borderClass: "border-pink-300/30",
  },
  {
    phase: "Cured",
    timing: "1–14 days",
    appearance: "Bright pink to coral, calcified, holds shape like a small berry cluster",
    texture: "Hard, bumpy, brittle if pressed",
    colorClass: "bg-rose-400/10 text-rose-300",
    borderClass: "border-rose-400/40",
  },
  {
    phase: "Pre-hatch",
    timing: "3–5 days before hatching",
    appearance: "Gray, tan, or bruised — looks moldy but isn't (it's developing shells showing through)",
    texture: "Very brittle, may show tiny dots inside",
    colorClass: "bg-stone-500/10 text-stone-400",
    borderClass: "border-stone-500/40",
  },
];

const SNAIL_COMPARISON: SnailComparison[] = [
  { type: "Mystery Snail (P. diffusa)", location: "Above", appearance: "Calcified pink/coral cluster on glass or lid", count: "50–300+", differentiator: "Always above waterline; pink-to-tan color shift" },
  { type: "Apple Snail (P. maculata)", location: "Above", appearance: "Bright fluorescent pink/red mass, larger than mystery", count: "1,500–4,500", differentiator: "Massive clutch size; FEDERALLY BANNED — report to USDA APHIS" },
  { type: "Florida Apple Snail", location: "Above", appearance: "Large opaque white-pink eggs, larger individual eggs", count: "<100", differentiator: "Native to FL; eggs much larger than mystery" },
  { type: "Nerite Snail", location: "Submerged", appearance: "Tiny flat white/cream sesame-seed capsules", count: "Isolated capsules", differentiator: "Won't hatch in freshwater; harmless aesthetic dots" },
  { type: "Ramshorn Snail", location: "Submerged", appearance: "Flat clear gelatinous discs on plants/glass", count: "10–20 per blob", differentiator: "Multiplies fast in freshwater; usually 'pest' snail" },
  { type: "Bladder/Pond Snail", location: "Submerged", appearance: "Tiny clear blobs in jelly mass", count: "5–20", differentiator: "Hitchhiker on plants; multiplies rapidly" },
];

const HATCH_TIERS: HatchTier[] = [
  { temp: "64–70°F", time: "4–5 weeks", humidity: "80–90%", rate: "30–60%", note: "Too cold for ideal development", tierColor: "from-blue-900/40 to-cyan-900/40" },
  { temp: "70–74°F", time: "2–3 weeks", humidity: "80–90%", rate: "60–80%", note: "Acceptable but slow", tierColor: "from-teal-900/40 to-emerald-900/40" },
  { temp: "74–80°F", time: "10–14 days", humidity: "80–90%", rate: "70–90%", note: "Sweet spot — standard tropical", tierColor: "from-emerald-900/50 to-green-900/50" },
  { temp: "80–84°F", time: "7–10 days", humidity: "80–90%", rate: "70–85%", note: "Fastest, but watch for desiccation", tierColor: "from-amber-900/40 to-orange-900/40" },
];

const DECISION_FACTORS: DecisionFactor[] = [
  {
    factor: "Tank Size",
    consider: "Each adult snail needs 2.5–5 gallons of stable water. A clutch of 200 hatchlings can crash a 20-gallon's bioload within 6 weeks.",
    redFlag: "<20 gallon tank or already stocked at capacity",
    greenLight: "55+ gallons with light current stock",
  },
  {
    factor: "Existing Population",
    consider: "Do you already have 3+ adult mystery snails? Adding 50+ juveniles will create ammonia spikes faster than your filter can compensate.",
    redFlag: "Tank is at adult-snail capacity",
    greenLight: "Solo or pair, plenty of headroom",
  },
  {
    factor: "Tankmates",
    consider: "Loaches, dwarf puffers, goldfish, larger cichlids, and assassin snails will hunt and crush hatchlings within hours.",
    redFlag: "Any predatory snail-eaters in the tank",
    greenLight: "Tetras, livebearers, peaceful community fish, shrimp",
  },
  {
    factor: "Rehoming Plan",
    consider: "Once they reach dime-size (month 2–3), where will they go? Local fish stores rarely buy bulk juveniles without prior arrangement.",
    redFlag: "No plan; can't legally release; LFS won't take them",
    greenLight: "Confirmed buyer, dedicated grow-out tank, hobby network",
  },
  {
    factor: "State Legality",
    consider: "Mystery snails are PROHIBITED in Georgia, Hawaii, Arizona, and a few others. Possession alone is illegal in some — let alone breeding.",
    redFlag: "You live in GA, HI, AZ, or a state with Pomacea restrictions",
    greenLight: "You live in a state with no Pomacea bans and don't ship to banned states",
  },
];

const REMOVAL_STEPS: RemovalStep[] = [
  { n: 1, title: "Wait 24–48 hours for the clutch to harden", detail: "Fresh eggs are a gelatinous mess — squishing them in-tank releases proteins that spike ammonia and fungus risk. Wait until the clutch is firm and pink/coral colored before you touch it." },
  { n: 2, title: "Scrape from the base with a plastic card", detail: "Use an old credit card, plastic spatula, or razor blade. Slide flat against the glass at the bottom of the clutch and pop it off in one piece. Try not to crush it." , warning: "If the clutch falls into the tank during removal, scoop it out IMMEDIATELY with a net before the embryos drown — even if you're disposing of it, you don't want decomposing eggs polluting your water." },
  { n: 3, title: "Freeze at 0°F (-18°C) for 24–72 hours", detail: "Place the intact clutch in a sealed freezer bag and freeze for at least 24 hours. This is the most humane method — embryos lose consciousness within minutes and development halts entirely. Cold is painless and biosecure." },
  { n: 4, title: "Crush frozen, dispose in household trash", detail: "Once fully frozen solid, crush the clutch through the bag and discard in normal trash. Never flush down the toilet (eggs can survive sewage transit), never put in compost or yard waste (could re-establish in local watershed)." , warning: "Releasing mystery snails or their eggs into outdoor waterways is illegal in every US state and ecologically destructive — they outcompete native snails and damage agricultural systems." },
];

const INCUBATOR_STEPS: IncubatorStep[] = [
  { n: 1, title: "Punch 6–8 air holes in a clear Tupperware lid", detail: "Use a 1/8-inch drill bit or push-pin. Air exchange is critical — the embryos breathe atmospheric oxygen, not dissolved oxygen." },
  { n: 2, title: "Saturate paper towel, wring damp", detail: "Soak a paper towel in tank water (matches tank chemistry, no chlorine), then wring it out until it's only damp to the touch. Line the bottom of the Tupperware." },
  { n: 3, title: "Add a dry barrier layer", detail: "Place a dry paper towel, a small piece of styrofoam, or a square of plastic craft mesh on top of the damp layer. This is the platform — clutch must NEVER touch standing water or saturated material." },
  { n: 4, title: "Place the cured clutch on the dry layer", detail: "Use the scraping technique from the removal protocol (Step 2 above) to transfer the clutch intact onto the dry barrier. Position it where you can see it through the lid." },
  { n: 5, title: "Float in the heated aquarium", detail: "Set the container floating in your heated tank — typically the tank's surface area is 76–80°F, ideal for hatching. The water below keeps temperature and humidity stable." },
  { n: 6, title: "Open the lid daily for fresh air", detail: "Every 24 hours, lift the lid for 30–60 seconds to refresh air and wipe any condensation that's pooled on the underside (drips onto the clutch = drowning). Mist the paper towel back to damp if it dries out." },
];

const FAQS: FaqItem[] = [
  {
    q: "I only have ONE mystery snail. How can there be eggs?",
    a: "Female mystery snails store viable sperm for up to a year after a single mating. If your snail was housed with a male at any point in the previous 6–12 months — at the breeder, in the pet store tank, or in a previous tank — she can produce fully fertile clutches months later from that stored sperm. This isn't asexual reproduction; it's delayed fertilization.",
  },
  {
    q: "How do I tell male from female mystery snails?",
    a: "Mystery snails have separate sexes (unlike most aquarium snails which are hermaphrodites). Gently lift the snail out of the water and look at the right side behind the head (your left when facing the snail) — males have a visible penial sheath (a folded white flap), females have a simple opening. This is the only 100% reliable method short of waiting to see who lays eggs.",
  },
  {
    q: "How often will my snail lay eggs?",
    a: "A well-fed female in warm water (76–82°F) can produce a clutch every 7–10 days for several months. Each clutch contains 50–300+ eggs. Reduce egg production by lowering temperature to 70–72°F, reducing protein in the diet, or removing male snails from the tank.",
  },
  {
    q: "Do mystery snail eggs need to be in water to hatch?",
    a: "No — the opposite. Mystery snail embryos are TERRESTRIAL respirers that breathe atmospheric oxygen. They need high humidity (80–90%) but must stay out of liquid water. If a clutch falls into the tank, the embryos will drown within minutes.",
  },
  {
    q: "What if my eggs fell into the water?",
    a: "Scoop them out immediately with a net or fingers. If recovered within 2–3 minutes, the clutch may still be viable — pat dry gently with paper towel and re-attach to the glass above the waterline using a dab of aquarium-safe silicone (or set up a floating incubator). If submerged longer than 5 minutes, the clutch is almost certainly dead and should be removed and discarded.",
  },
  {
    q: "Can mystery snails crossbreed with apple snails or nerites?",
    a: "No to nerites (completely different genus, sexually incompatible). Technically possible with other Pomacea species like P. canaliculata in laboratory settings, but in the home hobby this essentially never happens because P. canaliculata is federally banned in the US and not legally sold. If you have eggs and only one species in your tank, they're that species.",
  },
  {
    q: "How can I get my mystery snail to lay eggs?",
    a: "If you're breeding intentionally: raise temperature to 78–82°F, feed high-protein foods (blanched zucchini, calcium-rich algae wafers, sinking shrimp pellets), perform a 25% water change to simulate a rainy-season trigger, and ensure you have at least one confirmed male and one confirmed female. A receptive pair typically lays the first clutch within 1–3 weeks.",
  },
  {
    q: "Why aren't my eggs hatching after 4 weeks?",
    a: "Three common causes: (1) infertile clutch — common when a female has exhausted her stored sperm; infertile eggs stain a damp paper towel pink/red and smell foul after 2 weeks. (2) Too dry — clutch has desiccated; you'll see severely shrunken eggs. (3) Too cold — at 68°F or below, hatching can take 5+ weeks. If the clutch still looks pink/coral and intact at week 4, give it another 10 days at 76–80°F before discarding.",
  },
  {
    q: "Will mystery snails take over my tank?",
    a: "Only if you let them. Unlike pest snails (bladder, ramshorn, pond) that lay submerged eggs in dozens of hidden locations, mystery snails lay above the waterline in obvious visible clutches. Removing a clutch every 7–10 days completely controls population — there's no hidden reservoir. This is one of the easiest snail species to keep at a stable population.",
  },
  {
    q: "Can I legally sell or ship mystery snail babies in the US?",
    a: "Pomacea diffusa (the common mystery snail) is the only Pomacea species exempt from the federal Lacey Act for interstate movement — meaning federally, you can ship them across most state lines without a permit. HOWEVER, state-level bans override this: Georgia, Hawaii, and Arizona PROHIBIT all Pomacea species including mystery snails. You cannot legally ship to those states, and possession alone may be illegal there. Always check the recipient's state laws before shipping.",
  },
];

const GENETICS_LOCI: GeneticsLocus[] = [
  { locus: "A (Body Pigment)", dominant: "A — Dark body", recessive: "aa — Light/albino body", effect: "Controls the foot and tentacle color you see at the snail's mantle" },
  { locus: "Y (Shell Color)", dominant: "Y — Yellow shell", recessive: "yy — Clear/white shell", effect: "Determines whether the shell itself is pigmented or translucent" },
  { locus: "S (Shell Striping)", dominant: "S — Brown-purple stripes", recessive: "ss — Solid shell", effect: "Controls whether shell shows the classic spiral banding" },
];

const RARITY_TIERS: RarityTier[] = [
  { rank: "Common", color: "Gold (yellow shell, dark body)", market: "$5–8 wholesale", note: "The hobby's iconic mystery snail — gold shell over dark body", gradientClass: "from-yellow-700/40 to-amber-700/40" },
  { rank: "Common", color: "Wild-type Brown/Striped", market: "$4–7 wholesale", note: "The natural form before selective breeding — brown striped shell, dark body", gradientClass: "from-stone-800/40 to-amber-900/40" },
  { rank: "Popular", color: "Ivory (white shell, light body)", market: "$7–10 wholesale", note: "Pure cream shells against bright foot — recessive at both A and Y loci", gradientClass: "from-stone-300/30 to-amber-100/20" },
  { rank: "Popular", color: "Blue (light shell, dark body)", market: "$8–12 wholesale", note: "Silvery-blue shell illusion — recessive Y with dark body", gradientClass: "from-blue-700/40 to-cyan-700/40" },
  { rank: "Premium", color: "Black", market: "$8–14 wholesale", note: "Deep ebony shell — heavy melanin expression at the Y locus", gradientClass: "from-slate-800/40 to-zinc-900/40" },
  { rank: "Rare", color: "Magenta / Purple", market: "$12–25 wholesale", note: "Deep burgundy with spiral banding — the prize of selective breeding programs", gradientClass: "from-purple-800/40 to-fuchsia-800/40" },
  { rank: "Rare", color: "Jade", market: "$15–30 wholesale", note: "Optical illusion: dark body seen through translucent yellow shell creates blue-green sheen", gradientClass: "from-emerald-800/40 to-teal-800/40" },
];

const BANNED_STATES: BannedState[] = [
  { state: "Georgia", ban: "Sweeping ban on all Pomacea including P. diffusa — possession, sale, transport prohibited", severity: "Total" },
  { state: "Hawaii", ban: "All freshwater snails prohibited — strict invasive species enforcement", severity: "Total" },
  { state: "Arizona", ban: "Family-level Ampullariidae ban technically outlaws all mystery and apple snails", severity: "Family-level" },
  { state: "Florida (some counties)", ban: "Possession allowed but release into any waterway is a third-degree misdemeanor", severity: "Strict" },
  { state: "Texas", ban: "Restricted import; sale typically requires permit", severity: "Strict" },
];

// ─── Helper components ──────────────────────────────────────────────────
function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider ${className}`}>{children}</span>;
}

function severityColor(sev: BannedState["severity"]) {
  if (sev === "Total") return "bg-red-500/20 text-red-300 border-red-500/40";
  if (sev === "Family-level") return "bg-orange-500/20 text-orange-300 border-orange-500/40";
  return "bg-amber-500/20 text-amber-300 border-amber-500/40";
}

function rankColor(rank: RarityTier["rank"]) {
  if (rank === "Rare") return "bg-fuchsia-400/15 text-fuchsia-300 border-fuchsia-400/30";
  if (rank === "Premium") return "bg-violet-400/15 text-violet-300 border-violet-400/30";
  if (rank === "Popular") return "bg-aqua-400/15 text-aqua-300 border-aqua-400/30";
  return "bg-white/10 text-slate-300 border-white/20";
}

// ─── JSON-LD ────────────────────────────────────────────────────────────
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mystery Snail Eggs: Identify, Hatch, or Remove (Complete Guide)",
  description:
    "Complete guide to mystery snail eggs — identification by color stage, hatching timeline by temperature, decision matrix, removal protocol, color genetics, and FAQ.",
  author: { "@type": "Organization", name: "Shore Aquatic" },
  publisher: {
    "@type": "Organization",
    name: "Shore Aquatic",
    logo: { "@type": "ImageObject", url: "https://shoreaquatic.com/logo.png" },
  },
  datePublished: "2026-05-19",
  dateModified: "2026-05-19",
  mainEntityOfPage: "https://shoreaquatic.com/blog/mystery-snail-eggs",
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
  name: "How to Remove Mystery Snail Eggs Safely and Humanely",
  description:
    "4-step protocol for removing unwanted mystery snail egg clutches from your aquarium without polluting water or risking invasive release.",
  totalTime: "P3D",
  step: REMOVAL_STEPS.map((s) => ({
    "@type": "HowToStep",
    position: s.n,
    name: s.title,
    text: s.detail,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shoreaquatic.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://shoreaquatic.com/blog" },
    { "@type": "ListItem", position: 3, name: "Mystery Snail Eggs Guide", item: "https://shoreaquatic.com/blog/mystery-snail-eggs" },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════
export default function MysterySnailEggsPage() {
  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ─── HERO ─── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-pink-950 via-rose-950 to-ocean-950 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-aqua-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-aqua-400">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Mystery Snail Eggs</span>
          </nav>

          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-rose-400/15 text-rose-300 border border-rose-400/30">Care Guide</Badge>
            <Badge className="bg-pink-400/15 text-pink-300 border border-pink-400/30">Reproduction</Badge>
            <Badge className="bg-aqua-400/15 text-aqua-300 border border-aqua-400/30">17 min read</Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Mystery Snail Eggs: Identify, Hatch, or Remove
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            You just lifted the tank lid and found a firm pink cluster stuck to the glass above the waterline. Here&rsquo;s the complete guide to mystery snail eggs (<em>Pomacea diffusa</em>) — how to identify them at every color stage, decide whether to hatch or remove, the 4-step humane removal protocol, hatching timelines by temperature, color genetics, and US legality.
          </p>
        </div>
      </section>

      {/* ─── QUICK ANSWER + HERO PHOTO ─── */}
      <section className="py-10 bg-ocean-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-5 items-start">
            {/* Real clutch photo */}
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/snail-eggs/clutch-pink-fresh.jpg"
                  alt="Pink mystery snail egg clutch laid on the side of a plastic breeder box above the waterline — classic cured pink coloration with visible jelly-bubble texture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <p className="px-4 py-3 text-xs text-slate-500 italic border-t border-white/5">
                A typical cured mystery snail clutch — pink coloration, jelly-bubble texture, laid above the waterline. This stage is 1–14 days old.
              </p>
            </div>

            {/* Quick Answer card */}
            <div className="lg:col-span-3 rounded-2xl border-2 border-rose-400/40 bg-rose-950/30 p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🐌</div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">Quick Answer</h2>
                  <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                    <li><strong className="text-rose-300">What they are:</strong> Mystery snail (<em>Pomacea diffusa</em>) eggs — calcified pink clusters laid above the waterline. Each clutch holds 50–300+ eggs.</li>
                    <li><strong className="text-rose-300">Hatching window:</strong> 10 days to 4 weeks depending on temperature. At 76–80°F: ~12 days.</li>
                    <li><strong className="text-rose-300">Single snail laying eggs?</strong> Normal. Females store viable sperm for up to a year after one mating.</li>
                    <li><strong className="text-rose-300">Should you hatch or remove?</strong> Remove unless you have a stocked-down tank (55+ gallons, no predators) AND a rehoming plan. A 200-snail hatch can crash a small aquarium.</li>
                    <li><strong className="text-rose-300">Removal protocol:</strong> Wait 24–48 hrs for hardening, scrape with a plastic card, freeze 24–72 hrs at 0°F, dispose in trash. Never flush or release outdoors.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: IDENTIFICATION ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">1. What Mystery Snail Eggs Look Like</h2>
          <p className="text-slate-400 mb-8">
            Mystery snail eggs go through three visible stages over their 2–4 week development. Knowing which stage you&rsquo;re looking at tells you whether the clutch is fresh, viable, or about to hatch.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {EGG_STAGES.map((stage) => (
              <div key={stage.phase} className={`rounded-2xl border ${stage.borderClass} bg-white/[0.03] p-5`}>
                <div className="mb-3 flex items-center justify-between">
                  <Badge className={`border ${stage.colorClass}`}>{stage.phase}</Badge>
                  <span className="text-xs text-slate-500">{stage.timing}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Appearance</h3>
                <p className="text-sm text-slate-400 mb-3 leading-relaxed">{stage.appearance}</p>
                <h3 className="text-base font-bold text-white mb-2">Texture</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{stage.texture}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-950/20 p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-amber-300">⚠ The &quot;dirty gray&quot; stage looks like mold but isn&rsquo;t.</strong> When eggs hit the pre-hatch stage 3–5 days before emergence, the developing baby snail shells inside become visible through the thinning egg walls. This dark, bruised appearance is a sign of imminent hatching — not fungus or rot. Don&rsquo;t discard a clutch at this stage thinking it&rsquo;s spoiled.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: COMPARISON TABLE ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">2. Is It Really a Mystery Snail Egg?</h2>
          <p className="text-slate-400 mb-8">
            Several aquarium snail species lay eggs in tanks — but only two lay above the waterline, and one of those is a federally regulated invasive. Cross-reference what you see against this table.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr className="text-left">
                  <th className="px-4 py-3 text-slate-300 font-semibold">Species</th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Location</th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Appearance</th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Count</th>
                  <th className="px-4 py-3 text-slate-300 font-semibold">Key Tell</th>
                </tr>
              </thead>
              <tbody>
                {SNAIL_COMPARISON.map((row) => (
                  <tr key={row.type} className="border-t border-white/5">
                    <td className="px-4 py-3 text-white font-medium">{row.type}</td>
                    <td className="px-4 py-3">
                      <Badge className={row.location === "Above" ? "bg-rose-400/15 text-rose-300 border border-rose-400/30" : "bg-aqua-400/15 text-aqua-300 border border-aqua-400/30"}>
                        {row.location}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-slate-400">{row.appearance}</td>
                    <td className="px-4 py-3 text-slate-400">{row.count}</td>
                    <td className="px-4 py-3 text-slate-400">{row.differentiator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl border-2 border-red-500/40 bg-red-950/20 p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-red-300">🚨 If your clutch has 1,500+ bright pink eggs, that&rsquo;s NOT a mystery snail.</strong> <em>Pomacea maculata</em> (Channeled Apple Snail / Island Apple Snail) is federally banned under USDA APHIS regulations and one of the most destructive invasive species in the southeastern US. Report it to your state agriculture department immediately. Do not move, sell, or release.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: BIOLOGY ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">3. Why Above the Waterline? The Biology</h2>
          <p className="text-slate-400 mb-8">
            Mystery snail egg behavior is one of the strangest in the aquarium hobby — adults breathe water AND air, but their embryos can only breathe air. Here&rsquo;s why that matters.
          </p>

          <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <Image
              src="/images/snail-eggs/biology-infographic.jpg"
              alt="Mystery snail egg biology infographic showing why eggs are laid above the waterline — embryos are terrestrial respirers that die from oxygen starvation underwater, predator avoidance evolutionary pressure, temperature-dependent enzyme-driven development, and native range in Amazon and Plata basins"
              width={1400}
              height={764}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold text-white mb-2">🫁 Embryos are terrestrial respirers</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Adult mystery snails have both a gill and a lung-like structure and can submerge for hours. Their developing embryos, however, only respire atmospheric oxygen through gas exchange across the egg membrane. Submerging a clutch kills the embryos within minutes by suffocation — not drowning in the traditional sense, but oxygen starvation.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold text-white mb-2">🌊 Predator avoidance evolutionary pressure</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                In the wild South American floodplains of the Amazon and Paraná basins, submerged eggs are eaten by fish, crustaceans, and predatory insects within hours. Mystery snails evolved aerial egg-laying as an escape — once a clutch is fixed above the waterline, only terrestrial predators (birds, ants) pose a threat.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold text-white mb-2">🌡️ Why warmer water = faster hatching</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Embryonic development is enzyme-driven and temperature-dependent. At 80°F embryos develop roughly twice as fast as at 70°F. The tradeoff: warmer also means faster moisture evaporation, so high temperature + low humidity is the worst combination — desiccation kills clutches before they hatch.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold text-white mb-2">📍 Native habitat: Amazon &amp; Plata basins</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Native to Brazil, Paraguay, and Bolivia — slow-moving rivers, swamps, and ponds. The aquarium hobby&rsquo;s <em>Pomacea diffusa</em> (formerly <em>P. bridgesii</em>) is a different species from the larger, invasive <em>P. canaliculata</em> and <em>P. maculata</em>, despite all three being marketed as &quot;mystery snails&quot; historically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: HATCHING TIMELINE ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">4. Hatching Timeline by Temperature</h2>
          <p className="text-slate-400 mb-8">
            The single biggest factor controlling when your eggs hatch is the temperature of the air around the clutch (which closely tracks your tank water temperature if the clutch is on the glass).
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {HATCH_TIERS.map((t) => (
              <div key={t.temp} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${t.tierColor} p-5`}>
                <div className="text-3xl font-bold text-white mb-2">{t.temp}</div>
                <div className="text-sm text-aqua-300 font-semibold mb-3">{t.time}</div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div><strong className="text-white">Humidity:</strong> {t.humidity}</div>
                  <div><strong className="text-white">Hatch rate:</strong> {t.rate}</div>
                </div>
                <p className="mt-3 text-xs text-slate-400 italic leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5">
              <h3 className="text-base font-bold text-emerald-300 mb-2">✓ Signs of imminent hatching</h3>
              <ul className="text-sm text-slate-300 space-y-1.5 leading-relaxed">
                <li>• Clutch turns dark gray, tan, or &quot;bruised&quot;</li>
                <li>• Tiny dots visible inside individual eggs (baby shells)</li>
                <li>• Surface looks brittle, almost crumbly</li>
                <li>• In the last 24 hours, you may see faint movement inside the cluster</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-5">
              <h3 className="text-base font-bold text-red-300 mb-2">✗ Common failure modes</h3>
              <ul className="text-sm text-slate-300 space-y-1.5 leading-relaxed">
                <li>• <strong>Clutch fell in water</strong> — embryos drowned</li>
                <li>• <strong>Heat lamp too close</strong> — desiccated/dried out</li>
                <li>• <strong>Tank lid removed too often</strong> — humidity crashed</li>
                <li>• <strong>Infertile clutch</strong> — stains paper towel red after 2 weeks, smells foul</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: DECISION MATRIX ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">5. Should You Hatch or Remove?</h2>
          <p className="text-slate-400 mb-8">
            One clutch can produce 200 hatchlings. Before deciding to incubate, run through these 5 factors honestly — if any single one is a red flag, removal is almost always the right call.
          </p>

          <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <Image
              src="/images/snail-eggs/decision-matrix-infographic.jpg"
              alt="Should you hatch or remove mystery snail eggs decision matrix — 5 factors compared with red flag versus green light: tank size, existing population, tankmates, rehoming plan, and state legality"
              width={1400}
              height={764}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          <div className="space-y-4">
            {DECISION_FACTORS.map((f) => (
              <div key={f.factor} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-bold text-white mb-3">{f.factor}</h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{f.consider}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-red-950/30 border border-red-500/30 p-3">
                    <div className="text-[11px] font-bold text-red-300 uppercase tracking-wider mb-1">Red Flag</div>
                    <p className="text-sm text-slate-300 leading-snug">{f.redFlag}</p>
                  </div>
                  <div className="rounded-lg bg-emerald-950/30 border border-emerald-500/30 p-3">
                    <div className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider mb-1">Green Light</div>
                    <p className="text-sm text-slate-300 leading-snug">{f.greenLight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: REMOVAL PROTOCOL (HowTo) ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">6. How to Remove Eggs (4-Step Humane Protocol)</h2>
          <p className="text-slate-400 mb-8">
            If you&rsquo;ve decided not to hatch the clutch, this is the biosecure way to handle removal — humane to the embryos and safe for your local ecosystem.
          </p>

          <ol className="space-y-4">
            {REMOVAL_STEPS.map((s) => (
              <li key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-400/20 text-rose-300 font-bold border border-rose-400/40">
                    {s.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.detail}</p>
                    {s.warning && (
                      <div className="mt-3 rounded-lg bg-amber-950/30 border border-amber-500/30 p-3">
                        <p className="text-xs text-amber-200 leading-relaxed"><strong>⚠ Note:</strong> {s.warning}</p>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── SECTION 7: INCUBATION ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">7. How to Incubate Eggs (For Hatching)</h2>
          <p className="text-slate-400 mb-8">
            If you decided to hatch the clutch, you have two methods — leave in place or move to a floating incubator. The incubator approach gives much higher and more reliable hatch rates.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-10">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Badge className="bg-aqua-400/15 text-aqua-300 border border-aqua-400/30 mb-3">Method A</Badge>
              <h3 className="text-xl font-bold text-white mb-2">Leave In Place</h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                Easiest method: leave the clutch where it&rsquo;s laid, with a tight lid for humidity. Hatchlings drop into the tank when ready.
              </p>
              <div className="space-y-2 text-sm">
                <div className="text-emerald-300"><strong>✓ Pros:</strong> Zero work; natural conditions</div>
                <div className="text-red-300"><strong>✗ Cons:</strong> Tankmates eat hatchlings within hours; lower survival; less control over humidity</div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-rose-400/40 bg-rose-950/20 p-6">
              <Badge className="bg-rose-400/15 text-rose-300 border border-rose-400/30 mb-3">Method B (Recommended)</Badge>
              <h3 className="text-xl font-bold text-white mb-2">Floating Incubator</h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                Remove the clutch and move it to a controlled humidity chamber that floats in the tank. Highest survival, easy to monitor.
              </p>
              <div className="space-y-2 text-sm">
                <div className="text-emerald-300"><strong>✓ Pros:</strong> 70–90% hatch rates; precise control; transfer hatchlings to dedicated grow-out</div>
                <div className="text-red-300"><strong>✗ Cons:</strong> 5 minutes of daily care; risk of dropping clutch during transfer</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">Method B: 6-Step Incubator Setup</h3>
          <ol className="space-y-3">
            {INCUBATOR_STEPS.map((s) => (
              <li key={s.n} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-aqua-400/20 text-aqua-300 font-bold text-sm border border-aqua-400/40">
                    {s.n}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{s.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── SECTION 8: HATCHLING CARE ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">8. Caring for 100+ Baby Snails</h2>
          <p className="text-slate-400 mb-8">
            Hatchlings drop into the water as miniature copies of adults. They&rsquo;re fragile, vulnerable, and surprisingly hungry. Here&rsquo;s the first 90 days.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <h3 className="text-lg font-bold text-emerald-300 mb-3">🍽️ First-Week Diet</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Hatchlings survive primarily on <strong>biofilm</strong> in the first 3–5 days — don&rsquo;t scrub your tank or do major water changes during this window. Supplement with:
              </p>
              <ul className="text-sm text-slate-400 space-y-1.5">
                <li>• Powdered or crushed algae wafers</li>
                <li>• Blanched zucchini, cucumber slices</li>
                <li>• Spirulina powder</li>
                <li>• Crushed high-protein fish flakes</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6">
              <h3 className="text-lg font-bold text-amber-300 mb-3">🦴 Calcium Sources (Critical)</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Rapid shell growth requires calcium. Without enough, hatchling shells stay soft and they die within weeks. Add at least one of:
              </p>
              <ul className="text-sm text-slate-400 space-y-1.5">
                <li>• Cuttlebone (cheap, lasts months)</li>
                <li>• Crushed coral substrate</li>
                <li>• Wonder Shell or Snello blocks</li>
                <li>• Eggshell powder (rinsed, dried, ground)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-aqua-400/30 bg-aqua-950/20 p-6">
              <h3 className="text-lg font-bold text-aqua-300 mb-3">🏠 Nursery Tank Setup</h3>
              <ul className="text-sm text-slate-300 space-y-1.5 leading-relaxed">
                <li>• <strong>Bare-bottom tank</strong> — easier to see and feed hatchlings; no substrate to get lost in</li>
                <li>• <strong>Sponge filter only</strong> — HOB and canister filters suck up baby snails</li>
                <li>• <strong>Same temp as parent tank</strong> — 76–80°F</li>
                <li>• <strong>Stable pH 7.0–8.4</strong> with calcium-rich water</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-violet-500/30 bg-violet-950/20 p-6">
              <h3 className="text-lg font-bold text-violet-300 mb-3">📅 Growth Timeline</h3>
              <ul className="text-sm text-slate-300 space-y-1.5 leading-relaxed">
                <li>• <strong>Week 1:</strong> Visible only against dark backgrounds (~2mm)</li>
                <li>• <strong>Week 3–4:</strong> Pea-size, eating visible amounts</li>
                <li>• <strong>Month 2–3:</strong> Dime-size — ready to sell or rehome</li>
                <li>• <strong>Month 3–6:</strong> Sexually mature, can start their own clutches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: FAQS ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">9. Mystery Snail Reproduction FAQ</h2>
          <p className="text-slate-400 mb-8">
            The most common questions we get about mystery snail eggs and reproduction — answered.
          </p>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4 hover:bg-white/[0.05] transition-colors">
                  <span className="text-base font-semibold text-white pr-2">{f.q}</span>
                  <span className="text-rose-300 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: COLOR GENETICS ─── */}
      <section className="py-14 bg-ocean-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">10. Color Genetics Primer</h2>
          <p className="text-slate-400 mb-8">
            Two gold parents can produce a wild-type brown offspring. Wonder why? Mystery snail shell color is controlled by three genetic loci that combine to produce every color in the hobby.
          </p>

          <div className="grid gap-4 md:grid-cols-3 mb-10">
            {GENETICS_LOCI.map((g) => (
              <div key={g.locus} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-base font-bold text-white mb-3">Locus {g.locus}</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="text-emerald-300 font-medium">Dominant:</span> <span className="text-slate-300">{g.dominant}</span></div>
                  <div><span className="text-aqua-300 font-medium">Recessive:</span> <span className="text-slate-300">{g.recessive}</span></div>
                </div>
                <p className="mt-3 text-xs text-slate-500 italic leading-relaxed">{g.effect}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">Rarity Tiers</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {RARITY_TIERS.map((r) => (
              <div key={r.color} className={`rounded-xl border border-white/10 bg-gradient-to-br ${r.gradientClass} p-4`}>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-base font-bold text-white">{r.color}</h4>
                  <Badge className={`border ${rankColor(r.rank)}`}>{r.rank}</Badge>
                </div>
                <p className="text-xs text-slate-400 mb-2 leading-relaxed">{r.note}</p>
                <p className="text-xs text-slate-500 italic">{r.market}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-emerald-300">💎 The &quot;Jade&quot; mystery snail isn&rsquo;t actually green-pigmented.</strong> It&rsquo;s an optical illusion — a dark melanin body viewed through a translucent yellow shell creates a blue-green sheen via light scattering. True jade-colored shell pigment doesn&rsquo;t exist in <em>Pomacea diffusa</em>; the appearance is genuinely an optical effect of two specific recessive combinations.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: LEGALITY & REGULATORY DUMPING ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-2">11. US Legality &amp; the &quot;Regulatory Dumping&quot; Problem</h2>
          <p className="text-slate-400 mb-8">
            Mystery snails are federally exempt from the Lacey Act for interstate movement — but several US states have their own bans. Knowing where you can legally keep, breed, and ship is critical.
          </p>

          <div className="space-y-3 mb-8">
            {BANNED_STATES.map((s) => (
              <div key={s.state} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-white">{s.state}</h3>
                  <Badge className={`border ${severityColor(s.severity)}`}>{s.severity}</Badge>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{s.ban}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border-2 border-amber-500/40 bg-amber-950/30 p-6">
            <h3 className="text-xl font-bold text-amber-300 mb-3">The Regulatory Dumping Problem</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              When states pass sudden, sweeping mystery snail bans (Georgia&rsquo;s 2024 ruling is the most recent example), hobbyists often find themselves overnight with snails they can&rsquo;t legally sell, ship, or rehome. Local fish stores can&rsquo;t accept them. Interstate shipping becomes legally risky.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              The unfortunate result: <strong className="text-amber-300">panicked owners release unwanted snails into local waterways</strong> — exactly the environmental risk the law was written to prevent. Released <em>Pomacea</em> outcompete native gastropods, damage rice and water taro crops, and have no effective natural predators outside their home range.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-emerald-300">The responsible alternative is freezing.</strong> 24–72 hours in a household freezer halts all biological activity humanely and biosecurely. If you&rsquo;re in a state that&rsquo;s newly banning Pomacea, freeze any unwanted clutches and adult snails rather than releasing them — it&rsquo;s the only outcome that doesn&rsquo;t accelerate the environmental damage.
            </p>
          </div>
        </div>
      </section>

      {/* ─── COMMERCIAL BRIDGE ─── */}
      <section className="py-14 bg-gradient-to-b from-ocean-950 to-rose-950/30 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Looking for Mystery Snails?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We ship tank-raised <em>Pomacea diffusa</em> mystery snails to compatible US states with live arrival guarantee on overnight orders. Juvenile size (1/2 to 1 inch) — they color up and mature over the first few months in your tank.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <Link href="/shop/ls-snail-assorted-3" className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-rose-400/40 hover:bg-rose-950/20 transition-all">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="text-sm font-bold text-white mb-1">3-Pack Assorted</h3>
              <p className="text-xs text-slate-400 mb-2">Surprise color mix</p>
              <p className="text-base font-bold text-rose-300">$24.99</p>
            </Link>
            <Link href="/shop/ls-snail-assorted-10" className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-rose-400/40 hover:bg-rose-950/20 transition-all">
              <div className="text-2xl mb-2">📦</div>
              <h3 className="text-sm font-bold text-white mb-1">10-Pack Assorted</h3>
              <p className="text-xs text-slate-400 mb-2">Best per-snail price</p>
              <p className="text-base font-bold text-rose-300">$59.99</p>
            </Link>
            <Link href="/shop/ls-snail-blue-3" className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-rose-400/40 hover:bg-rose-950/20 transition-all">
              <div className="text-2xl mb-2">💙</div>
              <h3 className="text-sm font-bold text-white mb-1">3-Pack Blue</h3>
              <p className="text-xs text-slate-400 mb-2">Silvery-blue shells</p>
              <p className="text-base font-bold text-rose-300">$29.99</p>
            </Link>
            <Link href="/shop/ls-snail-purple-3" className="group rounded-xl border-2 border-fuchsia-400/40 bg-fuchsia-950/20 p-4 hover:border-fuchsia-400/60 transition-all">
              <div className="text-2xl mb-2">💜</div>
              <h3 className="text-sm font-bold text-white mb-1">3-Pack Purple</h3>
              <p className="text-xs text-fuchsia-300 mb-2">Premium rare color</p>
              <p className="text-base font-bold text-fuchsia-300">$32.99</p>
            </Link>
          </div>

          <Link
            href="/shop?category=Livestock"
            className="inline-block rounded-full bg-rose-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-ocean-950 shadow-lg shadow-rose-400/20 transition-all hover:bg-rose-300"
          >
            Shop All Mystery Snails →
          </Link>
        </div>
      </section>

      {/* ─── RELATED ARTICLES ─── */}
      <section className="py-14 bg-ocean-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">More Aquarium Guides</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/best-aquarium-plants-for-beginners" className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition-all">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-aqua-300 transition-colors">15 Best Beginner Aquarium Plants</h3>
              <p className="text-xs text-slate-400">No-CO2 plants safe with mystery snails and other livestock.</p>
            </Link>
            <Link href="/blog/best-plants-for-betta-fish" className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition-all">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-aqua-300 transition-colors">Best Plants for Betta Fish</h3>
              <p className="text-xs text-slate-400">Mystery snails are excellent betta tankmates — pair with these plants.</p>
            </Link>
            <Link href="/blog/aquarium-plants-melting" className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition-all">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-aqua-300 transition-colors">Why Are My Plants Melting?</h3>
              <p className="text-xs text-slate-400">Distinguish normal transition melt from rot — and what mystery snails will eat.</p>
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="mystery-snail-eggs" />
      <Footer />
    </main>
  );
}
