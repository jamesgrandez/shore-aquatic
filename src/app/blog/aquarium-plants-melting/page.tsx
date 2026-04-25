import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why Are My Aquarium Plants Melting? (And How to Save Them) | Shore Aquatic",
  description:
    "The complete guide to aquarium plant melt — what causes it, 5 types of melt, species-by-species profiles, how to tell melt from death, and a step-by-step recovery protocol.",
  alternates: { canonical: "https://shoreaquatic.com/blog/aquarium-plants-melting" },
  openGraph: {
    title: "Why Are My Aquarium Plants Melting? (And How to Save Them)",
    description:
      "Understand the biology behind plant melt, diagnose which of 5 melt types you have, check 19 species profiles, and follow the proven recovery protocol.",
    url: "https://shoreaquatic.com/blog/aquarium-plants-melting",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Are My Aquarium Plants Melting? (And How to Save Them)",
  description:
    "Complete guide to aquarium plant melt — biology, 5 melt types, 19 species profiles, melt vs. death diagnostics, and a step-by-step recovery protocol.",
  author: { "@type": "Organization", name: "Shore Aquatic" },
  publisher: { "@type": "Organization", name: "Shore Aquatic", url: "https://shoreaquatic.com" },
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
  url: "https://shoreaquatic.com/blog/aquarium-plants-melting",
  mainEntityOfPage: "https://shoreaquatic.com/blog/aquarium-plants-melting",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shoreaquatic.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://shoreaquatic.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Why Are My Aquarium Plants Melting?",
      item: "https://shoreaquatic.com/blog/aquarium-plants-melting",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why are my aquarium plants melting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plant melt is a biologically programmed process called heterophylly. Most aquarium plants are grown emersed (in air) by nurseries, where they develop thick, waxy leaves optimized for atmospheric CO2. When submerged, those leaves become incompatible with underwater life, so the plant breaks them down to recycle their nutrients and build new submersed-adapted foliage. It is not death — it is a physiological reset.",
      },
    },
    {
      "@type": "Question",
      name: "Will aquarium plants grow back after melting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — in the vast majority of cases. As long as the rhizome or root crown is firm, white or tan in color, and smells earthy (not sulfurous), the plant is alive. New submersed growth typically appears within 14–21 days of the melt completing. The key is to leave the plant undisturbed and keep water parameters stable.",
      },
    },
    {
      "@type": "Question",
      name: "How long does aquarium plant melt last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Active melt typically begins 3–7 days after planting and runs for 1–3 weeks. New growth then emerges over the following 2–4 weeks. Total time from planting to a plant with a full canopy of submersed leaves is usually 4–8 weeks depending on species and water conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Is Crypt melt normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Cryptocoryne melt is completely normal and extremely common. Crypts are particularly prone because they are almost always sold as emersed-grown plants. The entire above-ground portion may dissolve, leaving only the rhizome and roots. This is not a problem — as long as the rhizome is firm, the plant will fully recover within 4–8 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Should I remove melting aquarium plant leaves?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Decaying leaves release ammonia and organic waste that feed algae and can spread rot to healthy tissue. Prune them cleanly at the base of the stem using sterilized scissors. Do not pull the leaves — this can damage the crown or uproot the plant and reset its acclimation clock entirely.",
      },
    },
    {
      "@type": "Question",
      name: "Why are my aquarium plants melting after a water change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is Environmental Stress Melt (Type B), triggered by osmotic shock when replacement water has significantly different pH, hardness, or temperature from the tank water. A pH swing of more than 1.0 unit within 24 hours is enough to trigger systemic melt. Always match your replacement water parameters carefully.",
      },
    },
    {
      "@type": "Question",
      name: "Why are my plants melting after adding Excel or liquid carbon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seachem Excel and similar liquid carbon products contain glutaraldehyde, which is phytotoxic to sensitive species. Vallisneria and Anacharis are particularly vulnerable. Even standard doses can cause rapid dissolution. If you want to use liquid carbon, start at 1/4 the recommended dose and increase very gradually — or avoid it entirely with Val in the tank.",
      },
    },
    {
      "@type": "Question",
      name: "How do I tell if my aquarium plant is melting or dying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check the rhizome or root crown. A living plant has a firm rhizome that is white, tan, or pale green, with an earthy smell and roots that resist gentle pulling. A dead plant has a soft, mushy rhizome that is black or translucent, emits a foul sulfurous odor, and falls apart when touched. If no new growth appears within 30 days of stable conditions, the plant has not survived.",
      },
    },
  ],
};

// ── Data ─────────────────────────────────────────────────────────────────────

const meltTypes = [
  {
    id: "A",
    label: "Acclimation Melt",
    subtitle: "Emersed → Submersed Transition",
    color: "emerald",
    icon: "🌱",
    description:
      "The most common type. Nearly all commercial aquarium plants are farm-grown in open air with their roots in water. Their thick, waxy emersed leaves are physically incompatible with life underwater — the waxy cuticle blocks dissolved nutrient absorption. The plant breaks them down intentionally, recycling nutrients to build new submersed-adapted foliage.",
    visual: "Translucent, mushy leaves; may lose entire above-ground structure. Rhizome and roots remain firm.",
    timeline: "Begins 3–7 days after planting. New growth in 14–21 days.",
    recovery: "Near 100% if water parameters are stable and plant is not disturbed.",
    trigger: "Normal consequence of planting emersed-grown stock.",
  },
  {
    id: "B",
    label: "Environmental Stress Melt",
    subtitle: "pH, Temperature, or Hardness Shock",
    color: "amber",
    icon: "⚡",
    description:
      "Occurs in already-established plants when water parameters shift suddenly. A pH swing exceeding 1.0 unit in 24 hours disrupts osmotic balance. Temperatures above 28°C (82°F) push the plant's metabolic rate beyond its photosynthetic capacity. KH below 2° dKH removes all pH buffering, making tanks vulnerable to crashes, especially with CO2 injection.",
    visual: "Rapid collapse within 24–48 hours of the triggering event. May affect entire plant, not just outer leaves.",
    timeline: "Onset within 1–2 days of the stressor.",
    recovery: "High if stressor is corrected quickly. Prolonged exposure damages the rhizome.",
    trigger: "Large, unmatched water changes. Heater failure. Sudden CO2 spike dropping pH.",
  },
  {
    id: "C",
    label: "Chemical Melt",
    subtitle: "Glutaraldehyde, Copper & Algaecides",
    color: "red",
    icon: "⚗️",
    description:
      "Glutaraldehyde (Seachem Excel, Easy Carbon, liquid carbon) is phytotoxic to sensitive species at standard doses. It attacks cell membranes directly, causing tissue liquefaction. Vallisneria and Anacharis are the most vulnerable. Copper-based medications and certain algaecides cause similar chemical melt in sensitive species.",
    visual: "Gradual yellowing over several days followed by sudden tissue collapse. Often begins at leaf tips.",
    timeline: "Days to weeks depending on dose and species sensitivity.",
    recovery: "Moderate — depends on how quickly the chemical is removed via water changes and activated carbon.",
    trigger: "Standard or overdose of glutaraldehyde-based liquid carbon. Copper treatments. Aquarium salt in sensitive species.",
  },
  {
    id: "D",
    label: "Tissue Culture Melt",
    subtitle: "Sterile Gel → Aquarium Transition",
    color: "purple",
    icon: "🔬",
    description:
      "TC plants grow in 100% humidity inside sterile, nutrient-rich agar gel — a completely alien environment from any aquarium. Transitioning them into non-sterile water with lower nutrients, ambient bacteria, and varying chemistry triggers severe shock. The agar gel must be completely washed off before planting, as leftover gel promotes bacterial rot.",
    visual: "Portions of the culture may melt while others survive. Highly variable between individual plantlets.",
    timeline: "Onset 7–14 days post-planting. Recovery over 4–8 weeks.",
    recovery: "Moderate to high with sufficient CO2, light, and stable parameters. Divide cultures into small plugs for best results.",
    trigger: "Transition from sterile agar environment. Ammonia spikes in new tanks are particularly lethal to TC plants.",
  },
  {
    id: "E",
    label: "Shipping Stress Melt",
    subtitle: "Transit Damage & Temperature Extremes",
    color: "slate",
    icon: "📦",
    description:
      "Plants spend days in dark, warm, oxygen-depleted bags during shipping. Physical bruising, ethylene gas buildup in sealed bags, temperature fluctuations, and oxygen depletion all cause cellular damage. This type often compounds with Type A — the plant is already stressed before it even hits your water.",
    visual: "Damage visible immediately on arrival or within 48 hours. Localized bruising, kinked stems, immediate leaf loss.",
    timeline: "Visible within 24–48 hours of planting.",
    recovery: "High if damaged tissue is pruned immediately before rot spreads to the crown.",
    trigger: "Long transit times. Summer heat or winter cold. Rough handling. Bag leaks during shipping.",
  },
];

const speciesProfiles = [
  { species: "Cryptocoryne (all spp.)", likelihood: "Very High", timeline: "2–5 days to melt; 14–21 days to new growth", keyFactor: "Leave completely undisturbed. Never uproot.", mistake: "Uprooting to 'check' — resets the clock entirely." },
  { species: "Amazon Sword (Echinodorus)", likelihood: "Moderate", timeline: "7–10 days; center heart stays healthy", keyFactor: "Root tabs within 4\" of crown within first week.", mistake: "Nutrient-poor substrate stalling rhizome recovery." },
  { species: "Anubias (all vars.)", likelihood: "Low", timeline: "10–14 days; only 1–2 old leaves drop", keyFactor: "Never bury rhizome. Attach to hardscape.", mistake: "Burying the rhizome = guaranteed rot within days." },
  { species: "Java Fern (Microsorum)", likelihood: "Low", timeline: "10–14 days; tip blackening only", keyFactor: "Attach to hardscape; brown roots are always normal.", mistake: "Planting in substrate buries and rots the rhizome." },
  { species: "Vallisneria", likelihood: "Moderate", timeline: "3–7 days tip dieback; runner system at risk", keyFactor: "Zero exposure to glutaraldehyde. Stable KH.", mistake: "Adding Excel — even standard dose causes dissolution." },
  { species: "Rotala rotundifolia", likelihood: "High", timeline: "3–5 days; lower leaves drop first", keyFactor: "High light and CO2 from day one.", mistake: "Low light causing stem rot before roots establish." },
  { species: "Ludwigia repens / palustris", likelihood: "Moderate", timeline: "5–7 days shedding lower leaves", keyFactor: "Iron levels; water column fertilizers.", mistake: "Poor light penetration to lower canopy." },
  { species: "Bacopa caroliniana / monnieri", likelihood: "Low", timeline: "5–10 days gradual leaf loss", keyFactor: "Stable pH; moderate light.", mistake: "Drastic water hardness changes during acclimation." },
  { species: "Hygrophila polysperma / corymbosa", likelihood: "Moderate", timeline: "3–7 days; pinholes then melt", keyFactor: "Potassium; fast growth outpaces deficiency.", mistake: "Potassium deficiency pinholes mistaken for pest damage." },
  { species: "Dwarf Sagittaria", likelihood: "Moderate", timeline: "5–7 days; blades dissolve at tips", keyFactor: "Substrate nutrients; stable KH.", mistake: "Frequent replanting resets acclimation repeatedly." },
  { species: "Bucephalandra (all vars.)", likelihood: "High", timeline: "7–14 days; leaves white/mushy", keyFactor: "Clean water; low ammonia; avoid new tank spikes.", mistake: "Planting in an uncycled tank — ammonia kills TC Buce fast." },
  { species: "Monte Carlo", likelihood: "Moderate", timeline: "5–10 days; patchy browning", keyFactor: "CO2; plant in small clumps (not large mats).", mistake: "Large dense mats block light and gas exchange internally." },
  { species: "Dwarf Hairgrass (Eleocharis)", likelihood: "High", timeline: "5–10 days; yellowing blades", keyFactor: "Initial tip pruning after planting stimulates runners.", mistake: "Skipping the post-plant trim; no CO2." },
  { species: "Lobelia cardinalis", likelihood: "Moderate", timeline: "7–14 days; leaf disintegration", keyFactor: "Light quality; ammonia control.", mistake: "Shading by larger neighboring plants." },
  { species: "Staurogyne repens", likelihood: "Moderate", timeline: "5–10 days; dropping lower leaves", keyFactor: "Root tabs; CO2 from day one.", mistake: "Nutrient-poor inert substrate stalling recovery." },
  { species: "Pogostemon stellatus / erectus", likelihood: "Very High", timeline: "3–7 days; immediate systemic melt", keyFactor: "GH above 6; strong flow.",  mistake: "Growing in very soft water below GH 4." },
  { species: "Marsilea (all spp.)", likelihood: "Moderate", timeline: "7–14 days; yellowing clover heads", keyFactor: "Patience; stable roots; adequate CO2.", mistake: "Insufficient CO2 for carpeting growth form." },
  { species: "HC Cuba / Hemianthus", likelihood: "Very High", timeline: "2–5 days; rapid browning and rot", keyFactor: "Precision CO2 (20–30 ppm); high PAR at substrate.", mistake: "Any CO2 fluctuation — HC is the most demanding carpet plant." },
  { species: "Bolbitis (African Water Fern)", likelihood: "Moderate", timeline: "7–14 days; blackening fronds", keyFactor: "High water flow; CO2; rhizome on hardscape.", mistake: "Burying the rhizome in substrate." },
];

const recoverySteps = [
  {
    step: 1,
    title: "Prune all visibly melting tissue",
    detail: "Using sterilized scissors, cut melting leaves cleanly at the base of the petiole. Never pull — pulling risks tearing the crown or uprooting the plant, resetting its acclimation clock entirely. Remove all translucent, mushy, or browning material promptly to prevent organic waste from fouling the water and feeding algae.",
  },
  {
    step: 2,
    title: "Do not move or disturb the plant",
    detail: "This is the most violated rule in the hobby. Every time you uproot a plant, you destroy fine root hairs and force it to restart acclimation from zero. Find a good position before planting and commit to it. If the location is wrong, accept that and replant only after full recovery — not during melt.",
  },
  {
    step: 3,
    title: "Add root tabs for rhizome feeders",
    detail: "Crypts, Amazon Swords, Sagittaria, and other heavy root-feeders draw nutrients from the substrate during recovery. Place root tabs 4–6 inches from the crown within the first week. This gives the rhizome energy reserves to fuel new submersed growth without needing a fully functional root system yet.",
  },
  {
    step: 4,
    title: "Perform small, matched water changes twice weekly",
    detail: "20–25% twice a week removes decaying organics and ammonia from melting tissue. Crucially: temperature-match and parameter-match your replacement water. A large water change with mismatched pH or hardness can trigger Environmental Stress Melt (Type B) on top of your existing Type A melt.",
  },
  {
    step: 5,
    title: "Hold light steady — do NOT increase it",
    detail: "A defoliated plant cannot utilize high light — it has no leaves to photosynthesize. Excess light without plant coverage exclusively fuels nuisance algae. Keep photoperiod at 6–8 hours and maintain your existing intensity. You'll ramp it up once the plant has a full submersed canopy.",
  },
  {
    step: 6,
    title: "Wait and watch for the rhizome viability signals",
    detail: "New growth appears as tiny, bright green nubs or spear-shaped shoots at the crown. For Crypts this may take 2–3 weeks; for Swords it may be 1–2 weeks. The key is the rhizome: firm and earthy-smelling = alive. Soft, dark, and sulfurous = dead. Do your checks no more than once per week to minimize disturbance.",
  },
];

const faqItems = [
  {
    q: "Plants melting in a new tank — is this worse than an established tank?",
    a: "Yes, significantly. New tanks experience ammonia spikes as the nitrogen cycle establishes. Ammonia above 0.5 ppm is directly phytotoxic and dramatically accelerates melt — especially in tissue culture plants. Run a fishless cycle first, or use hardier species (Anubias, Java Fern, Hornwort) that tolerate ammonia better while the tank matures.",
  },
  {
    q: "Can I use alum to sterilize plants without causing melt?",
    a: "Yes. An alum (aluminum sulfate) dip — 1 tablespoon per gallon for 48–72 hours — kills pest snails, snail eggs, and most pathogens without damaging plant tissue the way bleach can. Rinse thoroughly afterward. This is our recommended sterilization protocol for newly arrived plants.",
  },
  {
    q: "My Crypt melted and only the bare rhizome is left. Is it recoverable?",
    a: "Very likely yes — this is the scenario most hobbyists prematurely give up on. A firm rhizome has enough stored energy carbohydrates to push new submersed growth even from complete defoliation. Do not bury it, do not move it, and wait up to 30 days under stable conditions before concluding it has not survived.",
  },
  {
    q: "Will aquarium plants melt multiple times if moved between tanks?",
    a: "They can, especially Crypts and Bucephalandra. Each time a plant is moved to significantly different water chemistry or lighting, it may undergo another partial melt cycle. The severity is usually less with each subsequent transition as the plant builds submersed-adapted tissue.",
  },
  {
    q: "Should I dose fertilizers during active melt?",
    a: "For root-feeding species (Crypts, Swords), install root tabs in the substrate near the crown — these provide nutrients locally without depending on a functional leaf canopy. For column feeders and epiphytes (Java Fern, Anubias), a basic liquid fertilizer maintains iron and potassium availability. Avoid overdosing anything during melt.",
  },
];

const lowMeltSpecies = [
  "Anubias barteri var. nana",
  "Java Fern (Microsorum pteropus)",
  "Hygrophila polysperma",
  "Hornwort (Ceratophyllum demersum)",
  "Marimo Moss Ball",
  "Guppy Grass (Najas guadalupensis)",
  "Anacharis / Egeria densa",
  "Bacopa monnieri",
  "Java Moss (Taxiphyllum barbieri)",
  "Aponogeton crispus",
];

const colorMap: Record<string, string> = {
  emerald: "border-emerald-400/25 bg-emerald-400/5",
  amber:   "border-amber-400/25 bg-amber-400/5",
  red:     "border-red-400/25 bg-red-400/5",
  purple:  "border-purple-400/25 bg-purple-400/5",
  slate:   "border-slate-400/25 bg-slate-400/5",
};
const labelColorMap: Record<string, string> = {
  emerald: "text-emerald-300",
  amber:   "text-amber-300",
  red:     "text-red-300",
  purple:  "text-purple-300",
  slate:   "text-slate-300",
};
const likelihoodColor: Record<string, string> = {
  "Very High": "bg-red-400/15 text-red-300",
  "High":      "bg-amber-400/15 text-amber-300",
  "Moderate":  "bg-yellow-400/15 text-yellow-300",
  "Low":       "bg-emerald-400/15 text-emerald-300",
};

export default function AquariumPlantsMeltingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="pt-16 min-h-screen bg-ocean-950">

        {/* ── Hero ── */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-ocean-800 to-ocean-950 border-b border-white/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-aqua-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-aqua-400 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-slate-400">Plant Melt Guide</span>
            </nav>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="rounded-full bg-teal-400/10 border border-teal-400/20 px-3 py-1 text-xs font-medium text-teal-300">Troubleshooting</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-400">Aquarium Plants</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-400">April 2026</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-400">~18 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Why Are My Aquarium Plants Melting?
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              The complete guide — 5 types of melt, 19 species profiles, a diagnostic test to tell melt from death, and a step-by-step recovery protocol.
            </p>
          </div>
        </section>

        {/* ── Body ── */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          {/* Intro */}
          <div className="mb-14">
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              You planted a Crypt last week. It looked healthy when it arrived. Now every leaf has turned to translucent mush and you&apos;re holding what looks like a stick in a pot. You&apos;re about to throw it away.
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              Don&apos;t. That plant is almost certainly alive.
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              Plant melt is the most misunderstood phenomenon in freshwater aquariums — and the single most common reason viable plants get discarded. What looks like death is almost always a biologically programmed physiological reset. The plant is not dying. It is rebuilding itself from scratch to survive underwater.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              This guide explains what&apos;s actually happening at the cellular level, covers all five types of melt, profiles 19 species with their specific melt patterns, and gives you a clear protocol for saving a melting plant — plus a definitive test for when a plant has actually crossed the line from melt to death.
            </p>
          </div>

          {/* ── BIOLOGY ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The Biology: Why Plants Melt in the First Place
            </h2>

            <h3 className="text-lg font-semibold text-aqua-300 mb-3">Heterophylly — Two Completely Different Plants, Same Roots</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Most aquarium plants are grown <em className="text-slate-200">emersed</em> by commercial nurseries — roots in water, leaves in open air. In that environment, they have unlimited access to atmospheric CO₂ and develop thick, waxy leaves with a heavy cuticle to prevent moisture loss. Those leaves are also reinforced with lignin for structural support in air and carry stomata on their surface for gas exchange.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              When you submerge these plants, those emersed leaves become a liability. The waxy cuticle physically blocks dissolved nutrient absorption from the water. The stomata are in the wrong position for aquatic gas exchange. The lignin-heavy structure is unnecessarily heavy underwater. The plant recognizes this incompatibility and triggers a biological process called <strong className="text-white">heterophylly</strong> — the ability to grow two entirely different leaf structures depending on environment.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The solution: break down the useless aerial leaves, recycle their mobile nutrients (nitrogen, phosphorus, potassium), and use that energy to grow new thin, translucent submersed leaves with better CO₂ absorption and buoyancy structures. This is melt. It is not failure. It is adaptation.
            </p>

            <h3 className="text-lg font-semibold text-aqua-300 mb-3">The Rhizome: Your Plant&apos;s Survival Battery</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              For species with rhizomes — Crypts, Anubias, Java Fern, Bucephalandra — the horizontal stem that connects roots to leaves is not just structural. It is an energy storage organ packed with carbohydrates. Even if a plant loses 100% of its leaves during melt, the rhizome retains enough stored energy to fuel an entirely new set of submersed leaves. This is why a bare Crypt rhizome sitting in gravel is not dead — it is waiting. A firm, earthy-smelling rhizome is a viable plant. Full stop.
            </p>

            <h3 className="text-lg font-semibold text-aqua-300 mb-3">What Actually Happens at the Cellular Level</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              The physical disintegration of melting leaves is governed by <strong className="text-white">Programmed Cell Death (PCD)</strong> — a controlled cellular self-destruction mechanism. Submersion stress triggers an oxidative burst within the plant, generating Reactive Oxygen Species (ROS). These ROS act as molecular signals that collapse the cell&apos;s central vacuole and instruct the plant to secrete hydrolytic enzymes — proteases and ribonucleases — that break down cellular proteins for nutrient recovery.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              The process is accelerated by <strong className="text-white">ethylene</strong>, a gaseous plant stress hormone that builds up in water-logged tissues. Ethylene signals the plant to abscise (shed) incompatible leaves so energy is not wasted repairing them. This is why melt happens so rapidly — it is the plant actively deconstructing its own tissue, not the tissue passively rotting.
            </p>

            {/* 5 Stages */}
            <h3 className="text-lg font-semibold text-aqua-300 mt-8 mb-4">The 5 Stages of Melt</h3>
            <div className="space-y-3">
              {[
                { stage: 1, name: "Induction", detail: "Environmental stress activates ROS signaling. The plant appears healthy to the naked eye, but cellular dismantling has begun." },
                { stage: 2, name: "Nutrient Translocation", detail: "Mobile nutrients (N, P, K) are pulled from old leaves toward growth centers. Visible yellowing or browning begins at leaf edges." },
                { stage: 3, name: "Defoliation", detail: "Ethylene triggers cell wall liquefaction via autolysis. Leaves turn glassy or translucent and disintegrate. This is peak melt — and often where hobbyists panic." },
                { stage: 4, name: "Regeneration", detail: "Rhizome or root reserves initiate new submersed growth. Tiny bright green nubs or spear-shaped shoots emerge at the crown. This is the sign you have been waiting for." },
                { stage: 5, name: "Stabilization", detail: "New aquatic leaves reach maturity, take over photosynthesis, and the plant fully acclimates. Growth rate accelerates as the root system strengthens." },
              ].map(({ stage, name, detail }) => (
                <div key={stage} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-teal-400/15 border border-teal-400/25 flex items-center justify-center text-teal-300 font-bold text-xs">
                    {stage}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{name}</p>
                    <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 5 MELT TYPES ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Not All Melt Is the Same — 5 Distinct Types
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Identifying which type you are dealing with determines both the treatment and the recovery odds.
            </p>
            <div className="space-y-4">
              {meltTypes.map((t) => (
                <details key={t.id} className="group rounded-xl border overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <summary className={`flex items-center gap-4 px-5 py-4 cursor-pointer list-none hover:bg-white/5 transition-colors rounded-xl border ${colorMap[t.color]}`}>
                    <span className="text-xl shrink-0">{t.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className={`font-bold ${labelColorMap[t.color]}`}>Type {t.id}: {t.label}</span>
                      <span className="text-slate-500 text-xs ml-2 hidden sm:inline">— {t.subtitle}</span>
                    </div>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform shrink-0 text-lg leading-none">↓</span>
                  </summary>
                  <div className="px-5 pb-5 pt-3 space-y-4 border-t border-white/5">
                    <p className="text-slate-300 text-sm leading-relaxed">{t.description}</p>
                    <div className="grid sm:grid-cols-3 gap-3 text-xs">
                      <div className="rounded-lg bg-white/5 p-3">
                        <p className="text-slate-500 mb-1 font-medium uppercase tracking-wider">Visual</p>
                        <p className="text-slate-300">{t.visual}</p>
                      </div>
                      <div className="rounded-lg bg-white/5 p-3">
                        <p className="text-slate-500 mb-1 font-medium uppercase tracking-wider">Timeline</p>
                        <p className="text-slate-300">{t.timeline}</p>
                      </div>
                      <div className="rounded-lg bg-white/5 p-3">
                        <p className="text-slate-500 mb-1 font-medium uppercase tracking-wider">Recovery</p>
                        <p className="text-slate-300">{t.recovery}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500"><span className="text-slate-400 font-medium">Triggered by: </span>{t.trigger}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* Excel warning */}
            <div className="mt-5 rounded-xl border border-amber-400/25 bg-amber-400/5 p-5">
              <p className="text-sm text-slate-300">
                <strong className="text-amber-300">⚠️ The Excel + Vallisneria Problem:</strong> Seachem Excel, Easy Carbon, and other liquid carbon products contain glutaraldehyde — an algaecide that is highly phytotoxic to <em>Vallisneria</em> and <em>Anacharis</em> at even standard doses. If you have Val in your tank and want to use liquid carbon, start at ¼ the recommended dose and increase very gradually over several weeks. When in doubt, use pressurized CO₂ instead.
              </p>
            </div>
          </section>

          {/* ── MELT VS DEATH ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Melt vs. Death: The Definitive Diagnostic Test
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              This is where thousands of viable plants get thrown away every year. Before you discard anything, run this check.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/5 p-6">
                <h3 className="font-bold text-emerald-300 text-lg mb-4">✓ Signs of Melt (Will Recover)</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">→</span><span><strong className="text-white">Rhizome is firm</strong> — feels like a small woody finger, resists gentle pressure</span></li>
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">→</span><span><strong className="text-white">Color is pale to green</strong> — white, tan, or light green internally when gently scratched</span></li>
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">→</span><span><strong className="text-white">Smells earthy</strong> — fresh soil or mild plant smell, not offensive</span></li>
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">→</span><span><strong className="text-white">Roots are white or tan</strong> — firm, resist gentle pulling without snapping</span></li>
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">→</span><span><strong className="text-white">New nubs visible within 3 weeks</strong> — tiny bright green shoots at the crown or rhizome tip</span></li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-400/25 bg-red-400/5 p-6">
                <h3 className="font-bold text-red-300 text-lg mb-4">✗ Signs of Death (Compost It)</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">→</span><span><strong className="text-white">Rhizome is mushy</strong> — collapses under gentle pressure, falls apart when touched</span></li>
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">→</span><span><strong className="text-white">Color is black or translucent</strong> — dark discoloration indicates anaerobic decomposition</span></li>
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">→</span><span><strong className="text-white">Smells sulfurous</strong> — a foul &quot;rotten egg&quot; or swampy odor means anaerobic rot has set in</span></li>
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">→</span><span><strong className="text-white">Roots are black and slimy</strong> — detach easily or disintegrate when touched</span></li>
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">→</span><span><strong className="text-white">No new growth after 30 days</strong> — under stable parameters, a viable plant shows signs by day 21</span></li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5">
              <p className="text-sm text-slate-300">
                <strong className="text-blue-300">Edge Case — The Bare Rhizome:</strong> A Crypt, Anubias, or Buce with zero leaves and only a rhizome remaining is not automatically dead. A firm, healthy-smelling rhizome can regenerate from complete defoliation. Leave it in place for up to 30 days under stable conditions. Many hobbyists report seeing the first new nub appear after 3–4 weeks of apparently &quot;nothing happening.&quot;
              </p>
            </div>
          </section>

          {/* ── SPECIES TABLE ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              19 Species Melt Profiles
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Find your plant, check the likelihood, and read the single most important recovery factor before doing anything.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Species</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Melt Risk</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Timeline</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden lg:table-cell">Key Recovery Factor</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden xl:table-cell">Common Mistake</th>
                  </tr>
                </thead>
                <tbody>
                  {speciesProfiles.map((s, i) => (
                    <tr key={s.species} className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                      <td className="px-4 py-3 font-medium text-white align-top">{s.species}</td>
                      <td className="px-4 py-3 align-top">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-medium ${likelihoodColor[s.likelihood] ?? "bg-white/10 text-slate-300"}`}>
                          {s.likelihood}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-400 align-top hidden md:table-cell text-xs">{s.timeline}</td>
                      <td className="px-4 py-3 text-slate-300 align-top hidden lg:table-cell text-xs">{s.keyFactor}</td>
                      <td className="px-4 py-3 text-slate-500 align-top hidden xl:table-cell text-xs">{s.mistake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Low melt species */}
            <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5">
              <p className="text-sm font-semibold text-emerald-300 mb-3">10 Low-Melt Species for Beginners (or Melt-Averse Hobbyists)</p>
              <div className="flex flex-wrap gap-2">
                {lowMeltSpecies.map((s) => (
                  <span key={s} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300">{s}</span>
                ))}
              </div>
            </div>
          </section>

          {/* ── RECOVERY PROTOCOL ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Recovery Protocol: What To Do Right Now
            </h2>
            <div className="space-y-4">
              {recoverySteps.map(({ step, title, detail }) => (
                <div key={step} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-teal-400/15 border border-teal-400/25 flex items-center justify-center text-teal-300 font-bold text-sm">
                    {step}
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">{title}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PREVENTION ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Prevention: Reduce Melt Before It Starts
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Soak new arrivals before planting", detail: "Rehydrate shipped plants in room-temperature, dechlorinated water for 1 hour. This rehydrates cells damaged during transit and allows ethylene gas trapped in sealed bags to dissipate, reducing the severity of Type E shipping melt." },
                { title: "Rinse TC plants thoroughly", detail: "Remove all agar gel completely before planting. Leftover gel promotes bacterial rot. Divide TC cultures into 10–15 smaller plugs so each plantlet has individual access to water flow and light, cutting localized rot risk dramatically." },
                { title: "Match your water parameters", detail: "Before ordering, know your pH, GH, and KH. When the plants arrive, your tank should already be running at those parameters. The smaller the gap between nursery water and your water, the less severe the Type B stress melt risk." },
                { title: "Never plant in a new uncycled tank", detail: "Ammonia spikes in the first 3 weeks of a new tank will almost certainly cause systemic melt in delicate species — especially TC plants and Bucephalandra. Run a fishless cycle first, or use ultra-hardy species (Java Fern, Hornwort, Anubias) during the cycling phase." },
                { title: "Use alum for sterilization, not bleach", detail: "A 48–72 hour alum dip (1 tbsp per gallon of dechlorinated water) eliminates pests and snail eggs without the cellular damage that bleach causes. Rinse thoroughly before planting." },
                { title: "Choose submersed-grown stock when possible", detail: "Plants grown submersed by the nursery skip Type A melt entirely. Ask your supplier whether their plants are emersed or submersed-grown. Tissue culture plants are always submersed-equivalent but require their own acclimation protocol." },
              ].map(({ title, detail }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-semibold text-white text-sm mb-2">{title}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqItems.map(({ q, a }) => (
                <details key={q} className="group rounded-xl border border-white/10 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none hover:bg-white/5 transition-colors">
                    <span className="text-sm font-medium text-white">{q}</span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform shrink-0 text-lg leading-none">↓</span>
                  </summary>
                  <div className="px-5 pb-4 pt-1 border-t border-white/5">
                    <p className="text-sm text-slate-300 leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              More questions? See our{" "}
              <Link href="/faq" className="text-aqua-400 hover:underline">full FAQ</Link>
              {" "}or{" "}
              <Link href="/contact" className="text-aqua-400 hover:underline">contact us</Link>. Also see:{" "}
              <Link href="/blog/aquarium-plants-turning-brown-yellow-black" className="text-aqua-400 hover:underline">
                Why Are My Aquarium Plants Turning Brown, Yellow, or Black?
              </Link>
            </p>
          </section>

          {/* ── CTA ── */}
          <section className="rounded-2xl border border-teal-400/20 bg-gradient-to-br from-ocean-800/60 to-ocean-900/60 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Plants That Arrive Ready to Thrive</h2>
            <p className="text-slate-300 text-sm mb-2 max-w-lg mx-auto leading-relaxed">
              All Shore Aquatic plants are carefully packed and shipped with our Live Arrival Guarantee. Melt is a normal part of the transition — but if your plants arrive in genuinely unsalvageable condition, we make it right.
            </p>
            <p className="text-slate-400 text-xs mb-6 max-w-md mx-auto">
              Contact us within 48 hours of delivery with a photo and we&apos;ll sort it out.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/shop?category=Plants"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-bold text-white shadow-lg shadow-coral/20 hover:bg-orange-500 transition-all"
              >
                Shop Aquarium Plants →
              </Link>
              <Link
                href="/care-guides"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all"
              >
                View Care Guides
              </Link>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
