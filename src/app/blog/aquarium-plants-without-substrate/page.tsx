import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Can Aquarium Plants Grow in Gravel or Sand? | Shore Aquatic",
  description:
    "Complete guide to planted tanks without expensive substrate — which plants thrive in gravel, sand, or bare-bottom, plus root tabs, epiphyte attachment, the Walstad method, and a 29-species compatibility table.",
  alternates: {
    canonical: "https://shoreaquatic.com/blog/aquarium-plants-without-substrate",
  },
};

// ─── JSON-LD ────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Can Aquarium Plants Grow in Gravel or Sand?",
  description:
    "Complete guide to planted tanks without expensive substrate — which plants thrive in gravel, sand, or bare-bottom, plus root tabs, epiphyte attachment, and the Walstad method.",
  author: { "@type": "Organization", name: "Shore Aquatic" },
  publisher: {
    "@type": "Organization",
    name: "Shore Aquatic",
    logo: { "@type": "ImageObject", url: "https://shoreaquatic.com/logo.jpg" },
  },
  datePublished: "2026-04-25",
  dateModified: "2026-04-25",
  url: "https://shoreaquatic.com/blog/aquarium-plants-without-substrate",
  mainEntityOfPage:
    "https://shoreaquatic.com/blog/aquarium-plants-without-substrate",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can aquarium plants grow in gravel without CO2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Epiphytes, floaters, and stem plants grow fine in gravel without CO2. For root feeders like Crypts and Amazon Swords, push root tabs deep into the gravel every 4–6 inches. Growth is slower without CO2, but plants survive comfortably.",
      },
    },
    {
      "@type": "Question",
      name: "Do root tabs work in sand substrates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sand is optimal for root tabs. Tight compaction limits water flow through the bed, trapping dissolving nutrients in the root zone instead of leaching them into the water column where they would fuel algae.",
      },
    },
    {
      "@type": "Question",
      name: "Is regular potting soil safe for a fish tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only with precautions. The soil must be organic, fertilizer-free, sifted to remove wood chunks, and capped with at least 1 inch of gravel or sand. Uncapped potting soil causes lethal ammonia spikes and permanent cloudy water.",
      },
    },
    {
      "@type": "Question",
      name: "How do I stop aquarium plants from floating out of gravel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use lead-free magnesium-zinc plant weights on stem plants, or super glue the plant base to a small lava rock and bury the rock in the substrate as a heavy anchor until roots establish.",
      },
    },
    {
      "@type": "Question",
      name: "Why did my Anubias rot and die after I planted it in gravel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anubias has a horizontal stem called a rhizome that must never be buried. Covering the rhizome blocks oxygen, allowing anaerobic bacteria to rot the tissue. Attach Anubias to driftwood or rock — only the roots touch the substrate.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change my aquarium substrate without tearing down the tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is risky. Substrate holds enormous beneficial bacteria colonies. Swapping it entirely can crash your nitrogen cycle. Preserve all filter media in tank water, house fish temporarily, and dose bottled bacteria after switching.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cheapest planted aquarium setup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bare-bottom or thin inert sand with epiphytes glued to cheap rocks and floating plants. Floaters access free atmospheric CO2 and export nitrates rapidly. Add liquid fertilizer for column feeders.",
      },
    },
    {
      "@type": "Question",
      name: "How often do root tabs need to be replaced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every 3–4 months for most tanks. In heavily planted tanks with large root feeders, check every 8–10 weeks. Signs of depletion include yellowing new growth, stunted leaves, and reduced root mass.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shoreaquatic.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://shoreaquatic.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Can Aquarium Plants Grow in Gravel or Sand?",
      item: "https://shoreaquatic.com/blog/aquarium-plants-without-substrate",
    },
  ],
};

// ─── DATA ───────────────────────────────────────────────────────────────────

type FeedType = "Epiphyte" | "Root Feeder" | "Water Column" | "Floater";
type Compat = "Yes" | "Yes (w/ Tabs)" | "Conditional" | "No" | "N/A";

interface PlantRow {
  name: string;
  type: FeedType;
  gravel: Compat;
  sand: Compat;
  bare: Compat;
  tabs: boolean;
  beginner: boolean;
  notes: string;
}

const plants: PlantRow[] = [
  // ── Epiphytes ──────────────────────────────────────────────────────────
  {
    name: "Anubias (all spp.)",
    type: "Epiphyte",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Rhizome must never be buried. Attach to hardscape with glue or thread.",
  },
  {
    name: "Java Fern (Microsorum pteropus)",
    type: "Epiphyte",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Attaches to driftwood or rock. Thrives in low light.",
  },
  {
    name: "Bucephalandra (all spp.)",
    type: "Epiphyte",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Slow grower. Prone to melt on sudden water changes.",
  },
  {
    name: "Java Moss",
    type: "Epiphyte",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Ties to any surface. Excellent cover for shrimp fry.",
  },
  {
    name: "Christmas / Flame Moss",
    type: "Epiphyte",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Slower than Java Moss. Rich vertical texture.",
  },
  // ── Root Feeders ───────────────────────────────────────────────────────
  {
    name: "Cryptocoryne (all spp.)",
    type: "Root Feeder",
    gravel: "Yes (w/ Tabs)",
    sand: "Yes (w/ Tabs)",
    bare: "No",
    tabs: true,
    beginner: true,
    notes: "Will melt on relocation. Root tabs essential in inert media.",
  },
  {
    name: "Amazon Sword (E. bleheri)",
    type: "Root Feeder",
    gravel: "Yes (w/ Tabs)",
    sand: "Yes (w/ Tabs)",
    bare: "No",
    tabs: true,
    beginner: true,
    notes: "Needs 2–3 tabs in a ring around the crown. High iron demand.",
  },
  {
    name: "Vallisneria (spiralis / americana)",
    type: "Root Feeder",
    gravel: "Yes (w/ Tabs)",
    sand: "Yes (w/ Tabs)",
    bare: "No",
    tabs: true,
    beginner: true,
    notes: "Spreads via runners. Sensitive to CO₂ overdose.",
  },
  {
    name: "Sagittaria subulata",
    type: "Root Feeder",
    gravel: "Yes (w/ Tabs)",
    sand: "Yes (w/ Tabs)",
    bare: "No",
    tabs: true,
    beginner: true,
    notes: "Spreads via runners. Low-light tolerant.",
  },
  {
    name: "Dwarf Sagittaria",
    type: "Root Feeder",
    gravel: "Yes (w/ Tabs)",
    sand: "Yes (w/ Tabs)",
    bare: "No",
    tabs: true,
    beginner: true,
    notes: "Low-tech carpet alternative. Slower without tabs.",
  },
  {
    name: "Dwarf Hairgrass (E. parvula)",
    type: "Root Feeder",
    gravel: "Conditional",
    sand: "Yes (w/ Tabs)",
    bare: "No",
    tabs: true,
    beginner: false,
    notes: "Needs fine substrate (<1mm). Struggles to anchor in coarse gravel.",
  },
  {
    name: "Monte Carlo (M. tweediei)",
    type: "Root Feeder",
    gravel: "Conditional",
    sand: "Yes (w/ Tabs)",
    bare: "No",
    tabs: true,
    beginner: false,
    notes: "Needs fine grain to carpet. Stalls fast without tabs.",
  },
  {
    name: "HC Cuba (H. callitrichoides)",
    type: "Root Feeder",
    gravel: "No",
    sand: "Conditional",
    bare: "No",
    tabs: true,
    beginner: false,
    notes: "Requires CO₂, fine substrate, and high light. Advanced only.",
  },
  {
    name: "Marsilea hirsuta",
    type: "Root Feeder",
    gravel: "Yes (w/ Tabs)",
    sand: "Yes (w/ Tabs)",
    bare: "No",
    tabs: true,
    beginner: true,
    notes: "Excellent low-tech carpet alternative to HC Cuba.",
  },
  // ── Water Column / Stem ────────────────────────────────────────────────
  {
    name: "Bacopa caroliniana / monnieri",
    type: "Water Column",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Liquid ferts preferred. Can float freely in bare-bottom tanks.",
  },
  {
    name: "Rotala rotundifolia",
    type: "Water Column",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Color intensifies with high light and low nitrate.",
  },
  {
    name: "Ludwigia repens",
    type: "Water Column",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Red coloration requires high light. Pure column feeder.",
  },
  {
    name: "Water Wisteria (H. difformis)",
    type: "Water Column",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Extremely fast grower. Can float or be planted.",
  },
  {
    name: "Hygrophila polysperma",
    type: "Water Column",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "One of the most forgiving stem plants in any setup.",
  },
  {
    name: "Elodea / Anacharis (E. densa)",
    type: "Water Column",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Can float or be planted. Rapid nitrate exporter.",
  },
  {
    name: "Hornwort (C. demersum)",
    type: "Water Column",
    gravel: "N/A",
    sand: "N/A",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Best left to float. Allelopathic to certain algae.",
  },
  {
    name: "Cabomba caroliniana",
    type: "Water Column",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: false,
    notes: "Fragile stems. Needs moderate-high light and stable water.",
  },
  {
    name: "Pogostemon stellatus",
    type: "Water Column",
    gravel: "Yes",
    sand: "Yes",
    bare: "No",
    tabs: false,
    beginner: false,
    notes: "Best color with CO₂ and high light.",
  },
  {
    name: "Pogostemon erectus",
    type: "Water Column",
    gravel: "Yes",
    sand: "Yes",
    bare: "No",
    tabs: false,
    beginner: false,
    notes: "CO₂ required for compact, bushy growth.",
  },
  {
    name: "Water Sprite (C. thalictroides)",
    type: "Water Column",
    gravel: "Yes",
    sand: "Yes",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Dual-mode: floats or plants. Rapid nutrient uptake.",
  },
  // ── Floaters ──────────────────────────────────────────────────────────
  {
    name: "Amazon Frogbit",
    type: "Floater",
    gravel: "N/A",
    sand: "N/A",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Sensitive to surface splash. Use a floating ring to protect leaves.",
  },
  {
    name: "Salvinia minima",
    type: "Floater",
    gravel: "N/A",
    sand: "N/A",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Fast grower. Outcompetes algae by starving it of nutrients.",
  },
  {
    name: "Red Root Floater (P. fluitans)",
    type: "Floater",
    gravel: "N/A",
    sand: "N/A",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Red color triggered by high light + low nitrogen.",
  },
  {
    name: "Duckweed",
    type: "Floater",
    gravel: "N/A",
    sand: "N/A",
    bare: "Yes",
    tabs: false,
    beginner: true,
    notes: "Fastest nitrate exporter available. Nearly impossible to eradicate.",
  },
];

interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  colorClass: string;
  borderClass: string;
  badgeClass: string;
  pros: string[];
  cons: string[];
  verdict: string;
}

const scenarios: Scenario[] = [
  {
    id: "A",
    title: "Plain Gravel",
    subtitle: "Inert — zero initial nutrients",
    colorClass: "text-slate-300",
    borderClass: "border-slate-500/20",
    badgeClass: "bg-slate-500/10 text-slate-300 border border-slate-500/20",
    pros: [
      "Excellent water flow — virtually no anaerobic risk",
      "Good root anchorage at 2–3mm grain size",
      "Easy to vacuum and maintain long-term",
    ],
    cons: [
      "Zero nutrients without mulm or root tabs",
      "Coarse gravel (>5mm) traps detritus and starves fine roots",
    ],
    verdict:
      "Works well for epiphytes, column feeders, and root feeders with root tabs. Choose 2–3mm grain size.",
  },
  {
    id: "B",
    title: "Plain Sand",
    subtitle: "Inert — zero initial nutrients",
    colorClass: "text-amber-300",
    borderClass: "border-amber-500/20",
    badgeClass: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
    pros: [
      "Natural aesthetic; preferred by bottom-dwelling fish",
      "Dense compaction keeps root tabs locked in the root zone",
      "Fine grain anchors small carpeting plants effectively",
    ],
    cons: [
      "Creates anaerobic pockets at depths greater than 2 inches",
      "Requires Malaysian Trumpet Snails or weekly manual stirring",
    ],
    verdict:
      "Ideal for root tabs. Keep depth under 2 inches and add MTS to aerate.",
  },
  {
    id: "C",
    title: "Bare Bottom",
    subtitle: "No substrate at all",
    colorClass: "text-sky-300",
    borderClass: "border-sky-500/20",
    badgeClass: "bg-sky-500/10 text-sky-300 border border-sky-500/20",
    pros: [
      "Maximum hygiene — ideal for breeding and quarantine",
      "Zero detritus trapping, no hidden ammonia spikes",
      "Visible debris; easiest water changes",
    ],
    cons: [
      "Only epiphytes, floaters, and floating stems are viable",
      "Less natural appearance",
    ],
    verdict:
      "Fully viable with epiphytes on hardscape + floaters. Add liquid fertilizer for water-column feeders.",
  },
  {
    id: "D",
    title: "Capped Substrate",
    subtitle: "Organic soil + gravel or sand cap",
    colorClass: "text-emerald-300",
    borderClass: "border-emerald-500/20",
    badgeClass:
      "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
    pros: [
      "Nutrients last 5–10 years without root tabs",
      "Microbial CO₂ generation up to 10 ppm at no cost",
      "Supports the widest plant variety with lowest maintenance",
    ],
    cons: [
      "Severe ammonia spike during initial cycling — dangerous for fish",
      "Uprooting plants risks breaching the cap and clouding the tank",
    ],
    verdict:
      "The Walstad method. Highest performance, highest setup complexity. Best for experienced aquarists.",
  },
];

interface RootTabBrand {
  name: string;
  npk: string;
  dissolveRate: string;
  leachRisk: string;
  leachColor: string;
  bestFor: string;
  note: string;
}

const rootTabBrands: RootTabBrand[] = [
  {
    name: "Seachem Flourish Tabs",
    npk: "Very low N/P — high trace minerals",
    dissolveRate: "Slow (enzymatic)",
    leachRisk: "Low",
    leachColor: "text-emerald-400",
    bestFor:
      "Tanks where algae is a concern or macros are already dosed via liquid fertilizer",
    note: "Focused on trace elements and amino acids rather than macronutrients.",
  },
  {
    name: "API Root Tabs",
    npk: "High N, P, and 5% iron",
    dissolveRate: "Fast (antacid-style burst)",
    leachRisk: "High if placed shallowly",
    leachColor: "text-red-400",
    bestFor: "Heavy root feeders needing rapid macronutrient delivery",
    note: "Must be buried to the substrate bottom to prevent water-column leaching and algae.",
  },
  {
    name: "Easy Root Tabs (Aquarium Co-Op)",
    npk: "2.49–1.59–9.98 N-P-K",
    dissolveRate: "Moderate",
    leachRisk: "Low–Moderate",
    leachColor: "text-yellow-400",
    bestFor:
      "Balanced macro and micronutrient delivery for most root feeders",
    note: "Gelatin capsule can float if not pressed firmly to the substrate bottom.",
  },
];

interface Mistake {
  n: number;
  title: string;
  detail: string;
}

const mistakes: Mistake[] = [
  {
    n: 1,
    title: "Burying the Rhizome",
    detail:
      "Pushing Anubias or Java Fern rhizomes into substrate blocks oxygen, triggering anaerobic rot and plant death within days. Only roots touch the substrate.",
  },
  {
    n: 2,
    title: "Sand Deeper Than 2 Inches",
    detail:
      "Fine sand beds deeper than 2 inches restrict water movement, creating anaerobic zones where bacteria produce toxic hydrogen sulfide (H₂S) gas.",
  },
  {
    n: 3,
    title: "Uncapped Potting Soil",
    detail:
      "Bare potting soil causes catastrophic ammonia spikes and permanently murky water. It must be capped with at least 1 inch of gravel or sand.",
  },
  {
    n: 4,
    title: "No Root Tabs for Heavy Root Feeders",
    detail:
      "Amazon Swords, Crypts, and carpeting plants in plain gravel or sand will starve and melt without root tabs. Fish waste alone is never sufficient.",
  },
  {
    n: 5,
    title: "Using Coarse Gravel (>5mm)",
    detail:
      "Oversized gravel gaps prevent fine roots from anchoring and trap decaying food deep in the bed, causing localized ammonia spikes.",
  },
  {
    n: 6,
    title: "Placing Root Tabs Too Shallowly",
    detail:
      "Tabs placed near the surface allow nutrients to leach into the water column, feeding algae instead of plant roots.",
  },
  {
    n: 7,
    title: "Over-Vacuuming the Substrate",
    detail:
      "Deep gravel vacuuming removes beneficial mulm — the organic layer that acts as free, slow-release fertilizer for root feeders.",
  },
  {
    n: 8,
    title: "Swapping All Substrate at Once",
    detail:
      "Removing all substrate eliminates the bulk of nitrifying bacteria, instantly crashing your nitrogen cycle and potentially killing livestock.",
  },
  {
    n: 9,
    title: "Layering Sand Under Coarse Gravel",
    detail:
      "Fine sand naturally migrates below coarser gravel over time, disrupting root zones and creating uneven planting depth.",
  },
  {
    n: 10,
    title: "Liquid Ferts Only for Root Feeders",
    detail:
      "Water-column fertilizers cannot deliver enough concentrated macronutrients to sustain heavy root feeders in inert media. Root tabs are required.",
  },
];

interface FaqItem {
  q: string;
  a: string;
}

const faqItems: FaqItem[] = [
  {
    q: "Can aquarium plants grow in gravel without CO₂?",
    a: "Yes. Epiphytes, floaters, and stem plants all perform well in plain gravel without CO₂ injection. For root feeders like Crypts and Amazon Swords, push root tabs deep into the gravel every 4–6 inches. Growth is slower without supplemental CO₂, but a low-to-medium light schedule with root tabs sustains most plants comfortably in a low-tech setup.",
  },
  {
    q: "Do root tabs really work in sand?",
    a: "Sand is actually the best substrate for root tabs. Because sand compacts tightly, it severely limits water movement through the bed — this traps the dissolving nutrients directly in the root zone instead of allowing them to leach upward into the water column where they would fuel algae blooms.",
  },
  {
    q: "Is regular potting soil safe in a fish tank?",
    a: "Only with strict precautions (the Walstad Method). The soil must be organic with zero added chemical fertilizers, perlite, or slow-release pellets. It must be sifted to remove wood chunks, and covered with at least 1 inch of gravel or sand. Used uncapped, potting soil causes lethal ammonia spikes and months of turbid, murky water.",
  },
  {
    q: "How do I stop aquarium plants from floating out of gravel?",
    a: "Before root systems establish, use lead-free magnesium-zinc plant weights on stem plants. Alternatively, use cyanoacrylate super glue gel to attach the base of a small plant to a piece of lava rock and bury the rock — the rock's weight acts as a permanent anchor until the plant's own roots take hold.",
  },
  {
    q: "Can I switch from gravel to sand without a full tear-down?",
    a: "Possible but risky. Substrate houses enormous beneficial bacteria colonies that run your nitrogen cycle. Swapping it entirely can crash the cycle, spike ammonia, and kill livestock. If you must switch, preserve all filter media in tank water to re-seed the new substrate, house fish temporarily, and dose bottled bacteria immediately after.",
  },
  {
    q: "Why did my Anubias rot after I planted it in gravel?",
    a: "Anubias has a horizontal stem called a rhizome — its energy reserve and circulatory hub. Burying the rhizome blocks oxygen flow to the tissue, allowing anaerobic bacteria to rot it from the inside out. Only the thread-like roots should contact the substrate. The rhizome itself must remain fully exposed above the gravel surface, or attached to hardscape entirely.",
  },
  {
    q: "What is the cheapest planted tank setup?",
    a: "A bare-bottom or thin inert-sand tank stocked with epiphytes (Anubias, Java Fern) super glued to cheap rocks, plus floating plants like Frogbit or Salvinia. Floaters access atmospheric CO₂ for free and export nitrates at a remarkable rate. Add liquid fertilizer for any water-column stem plants. This approach eliminates the cost of active substrate and root tabs entirely.",
  },
  {
    q: "How often do root tabs need to be replaced?",
    a: "Every 3–4 months for a normally planted tank. In heavily planted setups with multiple large root feeders (several Amazon Swords or large Crypt colonies), check every 8–10 weeks. Key depletion signs: yellowing or pale new growth, stunted leaf size, reduced root mass, or stem plants showing deficiency symptoms despite regular water-column dosing.",
  },
];

// ─── HELPERS ────────────────────────────────────────────────────────────────

function typeColor(type: FeedType): string {
  switch (type) {
    case "Epiphyte":
      return "bg-violet-400/10 text-violet-300 border-violet-400/20";
    case "Root Feeder":
      return "bg-amber-400/10 text-amber-300 border-amber-400/20";
    case "Water Column":
      return "bg-cyan-400/10 text-cyan-300 border-cyan-400/20";
    case "Floater":
      return "bg-emerald-400/10 text-emerald-300 border-emerald-400/20";
    default:
      return "bg-white/5 text-slate-400 border-white/10";
  }
}

function compatColor(c: Compat): string {
  switch (c) {
    case "Yes":
      return "text-emerald-400";
    case "Yes (w/ Tabs)":
      return "text-amber-400";
    case "Conditional":
      return "text-yellow-400";
    case "No":
      return "text-red-400";
    case "N/A":
      return "text-slate-600";
    default:
      return "text-slate-500";
  }
}

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function AquariumPlantsSubstratePage() {
  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-ocean-800 to-ocean-950 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-aqua-400 transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link
              href="/blog"
              className="hover:text-aqua-400 transition-colors"
            >
              Blog
            </Link>
            <span>›</span>
            <span className="text-slate-400">Substrate Guide</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="rounded-full bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 text-[11px] font-medium text-amber-300">
              Setup Guide
            </span>
            <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] text-slate-500">
              16 min read
            </span>
            <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] text-slate-500">
              April 25, 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Can Aquarium Plants Grow in{" "}
            <span className="text-aqua-400">Gravel or Sand?</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed max-w-3xl">
            The short answer is yes — but it depends entirely on the plant.
            This guide breaks down every substrate scenario, classifies 29
            species by feeding type, and covers root tabs, epiphyte attachment,
            floaters, and the Walstad method.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* ── Quick Answer ─────────────────────────────────────────────────── */}
        <div className="rounded-2xl border border-aqua-400/20 bg-aqua-400/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-aqua-400 mb-3">
            Quick Answer
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-violet-400 font-bold mt-0.5 flex-shrink-0">▸</span>
              <span>
                <strong className="text-white">Epiphytes</strong> (Anubias,
                Java Fern, Bucephalandra) — work in any substrate, including
                bare bottom. Never bury the rhizome.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400 font-bold mt-0.5 flex-shrink-0">▸</span>
              <span>
                <strong className="text-white">Root feeders</strong> (Crypts,
                Amazon Swords, Vallisneria) — grow in gravel or sand with root
                tabs inserted every 4–6 inches.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-bold mt-0.5 flex-shrink-0">▸</span>
              <span>
                <strong className="text-white">Stem plants</strong> (Bacopa,
                Rotala, Ludwigia) — feed through leaves and stems; any
                substrate works with liquid fertilizer.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold mt-0.5 flex-shrink-0">▸</span>
              <span>
                <strong className="text-white">Floaters</strong> (Frogbit,
                Salvinia, Duckweed) — no substrate required at all.
              </span>
            </li>
          </ul>
        </div>

        {/* ── Section 1: Biology ────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            How Aquarium Plants Actually Feed
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Most beginners assume all aquatic plants work the same way
            underground. They don&apos;t. The substrate you need — or
            don&apos;t need — is determined entirely by how a plant is
            biologically designed to absorb nutrients.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5">
              <div className="text-2xl mb-2">🌱</div>
              <h3 className="font-bold text-amber-300 mb-2">Root Feeders</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dense root networks evolved to extract macronutrients and
                micronutrients directly from the substrate. Examples:{" "}
                <em>Cryptocoryne</em>, Amazon Sword, Vallisneria, carpeting
                plants.
              </p>
              <p className="mt-3 text-xs text-amber-300/80 font-medium">
                Substrate: Required (with root tabs if inert)
              </p>
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <div className="text-2xl mb-2">💧</div>
              <h3 className="font-bold text-cyan-300 mb-2">
                Water Column Feeders
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Absorb dissolved nutrients — nitrate, phosphate, potassium,
                trace minerals — almost entirely through stems and leaves.
                Examples: Bacopa, Rotala, Ludwigia, Hygrophila.
              </p>
              <p className="mt-3 text-xs text-cyan-300/80 font-medium">
                Substrate: Optional (liquid ferts preferred)
              </p>
            </div>

            <div className="rounded-xl border border-violet-400/20 bg-violet-400/5 p-5">
              <div className="text-2xl mb-2">🪨</div>
              <h3 className="font-bold text-violet-300 mb-2">Epiphytes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Attach to hardscape via a horizontal stem called a rhizome.
                Absorb nutrients from the water column; roots are for anchorage
                only. Examples: Anubias, Java Fern, Bucephalandra, mosses.
              </p>
              <p className="mt-3 text-xs text-violet-300/80 font-medium">
                Substrate: Not required — attach to rock or wood
              </p>
            </div>
          </div>

          {/* CEC */}
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-semibold text-white mb-2">
              What Is CEC — and Why Does It Matter?
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cation Exchange Capacity (CEC) measures a substrate&apos;s
              ability to hold positively charged nutrient ions — potassium
              (K⁺), ammonium (NH₄⁺), calcium (Ca²⁺) — and release them to
              plant roots on demand. High-CEC materials like clay-based volcanic
              soils hold nutrients in the root zone for months. Standard silica
              sand and natural gravel have near-zero CEC, meaning liquid
              fertilizers added to the water column remain largely inaccessible
              to roots. Root tabs solve this by placing concentrated nutrients
              directly where the roots are.
            </p>
          </div>

          {/* Active substrate lifespan */}
          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-semibold text-white mb-2">
              Active Substrates: Not a Permanent Solution
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Active substrates like ADA Aqua Soil or Fluval Stratum provide
              high CEC and initial nutrients, but exhaust their reserves within{" "}
              <strong className="text-white">12–24 months</strong>. Once
              depleted, they become functionally identical to inert gravel and
              must be supplemented with root tabs anyway. This is why
              understanding plant feeding types matters more than substrate
              brand — no substrate lasts forever.
            </p>
          </div>
        </section>

        {/* ── Section 2: Substrate Scenarios ────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            The 4 Substrate Scenarios
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Here&apos;s how each real-world setup performs for planted tanks and
            which plants are viable in each.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {scenarios.map((s) => (
              <div
                key={s.id}
                className={`rounded-xl border ${s.borderClass} bg-white/[0.03] p-5`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.badgeClass}`}
                  >
                    {s.id}
                  </span>
                  <div>
                    <p className={`font-bold ${s.colorClass}`}>{s.title}</p>
                    <p className="text-xs text-slate-500">{s.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-3">
                  {s.pros.map((p) => (
                    <li key={p} className="text-xs text-slate-400 flex gap-1.5">
                      <span className="text-emerald-400 flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                  {s.cons.map((c) => (
                    <li key={c} className="text-xs text-slate-400 flex gap-1.5">
                      <span className="text-red-400 flex-shrink-0 mt-0.5">
                        ✗
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
                <p
                  className={`text-xs font-medium ${s.colorClass} border-t border-white/5 pt-3`}
                >
                  {s.verdict}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: Plant Compatibility Table ─────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            Plant Compatibility Table
          </h2>
          <p className="text-slate-400 text-sm mb-4">
            29 species and groups classified by feeding type with substrate
            compatibility ratings.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">■</span>
              <span className="text-slate-400">Works great</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">■</span>
              <span className="text-slate-400">Works with root tabs</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-400 font-bold">■</span>
              <span className="text-slate-400">Grain-size dependent</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-red-400 font-bold">■</span>
              <span className="text-slate-400">Does not work</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-slate-600 font-bold">■</span>
              <span className="text-slate-400">Not applicable</span>
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Plant
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Type
                  </th>
                  <th className="text-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Gravel
                  </th>
                  <th className="text-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Sand
                  </th>
                  <th className="text-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Bare
                  </th>
                  <th className="text-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Beginner
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {plants.map((p, i) => (
                  <tr
                    key={p.name}
                    className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.015]"}`}
                  >
                    <td className="px-4 py-3 text-white font-medium text-xs whitespace-nowrap">
                      {p.name}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[10px] font-medium border rounded-full px-2 py-0.5 whitespace-nowrap ${typeColor(p.type)}`}
                      >
                        {p.type}
                      </span>
                    </td>
                    <td
                      className={`px-4 py-3 text-center text-xs font-medium whitespace-nowrap ${compatColor(p.gravel)}`}
                    >
                      {p.gravel}
                    </td>
                    <td
                      className={`px-4 py-3 text-center text-xs font-medium whitespace-nowrap ${compatColor(p.sand)}`}
                    >
                      {p.sand}
                    </td>
                    <td
                      className={`px-4 py-3 text-center text-xs font-medium ${compatColor(p.bare)}`}
                    >
                      {p.bare}
                    </td>
                    <td
                      className={`px-4 py-3 text-center text-xs font-medium ${p.beginner ? "text-emerald-400" : "text-slate-500"}`}
                    >
                      {p.beginner ? "Yes" : "No"}
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500 max-w-[200px]">
                      {p.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 4: Root Tabs ─────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            Root Tabs: The Inert-Substrate Fix
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Root tabs are compressed fertilizer capsules inserted directly into
            the substrate to create a nutrient-rich zone around plant roots —
            solving the biggest problem with gravel and sand setups in a single
            step.
          </p>

          {/* Placement guide */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mb-6">
            <h3 className="font-semibold text-white mb-4">
              Placement Protocol
            </h3>
            <ol className="space-y-3">
              {[
                "Push each tab to the bottom glass — the deeper the tab, the lower the risk of nutrients leaching into the water column and fueling algae.",
                "Space tabs in a grid pattern every 4–6 inches (10–15 cm) across heavily planted areas.",
                "For specimen plants like Amazon Swords, place 2–3 tabs in a direct circle around the crown at the outer root perimeter.",
                "Replace every 3–4 months. In heavily planted tanks with large root feeders, check at 8–10 weeks.",
                "Combine root tabs with liquid fertilizer to feed epiphytes and stem plants simultaneously — the dual-zone approach covers every plant type in one routine.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-400">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-aqua-400/10 border border-aqua-400/20 text-aqua-400 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Algae risk */}
          <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4 mb-6">
            <p className="text-xs font-semibold text-red-400 mb-1">
              ⚠ Algae Risk
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Root tabs placed too shallowly allow concentrated nitrogen and
              phosphorus to leach directly into the water column, bypassing the
              root zone entirely. If you notice a sudden algae bloom after
              adding root tabs, they were not buried deep enough. Push them all
              the way to the substrate bottom.
            </p>
          </div>

          {/* Brand comparison */}
          <h3 className="font-semibold text-white mb-4">Brand Comparison</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {rootTabBrands.map((b) => (
              <div
                key={b.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="font-bold text-white text-sm mb-3">{b.name}</p>
                <dl className="space-y-2 text-xs">
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-500 flex-shrink-0">N-P-K</dt>
                    <dd className="text-slate-300 text-right">{b.npk}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-500 flex-shrink-0">
                      Dissolve Rate
                    </dt>
                    <dd className="text-slate-300 text-right">
                      {b.dissolveRate}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-500 flex-shrink-0">
                      Leach Risk
                    </dt>
                    <dd className={`text-right font-medium ${b.leachColor}`}>
                      {b.leachRisk}
                    </dd>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <dt className="text-slate-500 mb-1">Best For</dt>
                    <dd className="text-slate-400 leading-relaxed">
                      {b.bestFor}
                    </dd>
                  </div>
                </dl>
                <p className="mt-3 text-[10px] text-slate-600 italic">
                  {b.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 5: Rhizome Rule + Attachment ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Epiphyte Attachment: The Rhizome Rule
          </h2>

          {/* Warning */}
          <div className="rounded-xl border-2 border-red-500/40 bg-red-500/10 p-6 mb-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">⚠️</span>
              <div>
                <p className="font-bold text-red-300 text-lg mb-1">
                  Never Bury the Rhizome
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  The rhizome is the thick horizontal stem running across the
                  base of Anubias, Java Fern, and Bucephalandra. It stores
                  nutrients and distributes energy to leaves. Burying it in
                  substrate — even partially — blocks oxygen flow, allowing
                  anaerobic bacteria to rot the tissue from the inside. The
                  plant will die within days and the rot is irreversible.
                </p>
                <p className="mt-2 text-sm text-red-300 font-medium">
                  Only the thread-like roots touch the substrate. The rhizome
                  stays fully above — or attached to hardscape entirely.
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-semibold text-white mb-4">
            3 Methods to Attach Epiphytes to Hardscape
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                method: "Super Glue Gel",
                icon: "🔵",
                diff: "Easiest",
                diffColor: "text-emerald-400",
                steps: [
                  "Use gel, not liquid — liquid runs and won't hold position",
                  "Apply glue to the rock or wood, not to the plant",
                  "Press rhizome to glued surface for 30 seconds",
                  "Cures white underwater; cover wet adhesive with fine sand to blend",
                ],
                note: "Cyanoacrylate is completely inert and non-toxic to fish and invertebrates once cured.",
              },
              {
                method: "Thread / Fishing Line",
                icon: "🟢",
                diff: "Most Natural-Looking",
                diffColor: "text-amber-400",
                steps: [
                  "Use undyed cotton thread or clear monofilament fishing line",
                  "Wrap loosely — do not compress the rhizome",
                  "Cotton rots away naturally as the plant self-attaches (6–12 weeks)",
                  "Fishing line must be removed manually once the plant is anchored",
                ],
                note: "The most seamless aesthetic once the thread degrades and the plant holds on its own.",
              },
              {
                method: "Zip Ties",
                icon: "⚫",
                diff: "Strongest Hold",
                diffColor: "text-sky-400",
                steps: [
                  "Best for large, heavy specimens on thick driftwood",
                  "Trim the tail flush with the locking head to prevent fish injury",
                  "Do not over-tighten — the rhizome must breathe",
                  "Remove once the plant establishes its own root grip",
                ],
                note: "Less aesthetic but provides the most reliable mechanical grip for specimen plants.",
              },
            ].map((m) => (
              <div
                key={m.method}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span>{m.icon}</span>
                  <span className="font-bold text-white text-sm">
                    {m.method}
                  </span>
                </div>
                <span className={`text-xs font-medium ${m.diffColor}`}>
                  {m.diff}
                </span>
                <ol className="mt-3 space-y-1.5">
                  {m.steps.map((s, i) => (
                    <li key={i} className="text-xs text-slate-400 flex gap-1.5">
                      <span className="text-slate-600 flex-shrink-0">
                        {i + 1}.
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
                <p className="mt-3 text-[10px] text-slate-500 italic">
                  {m.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs text-slate-400">
              <strong className="text-white">Hardscape preference:</strong>{" "}
              Epiphytes grip best on porous, textured surfaces. Lava rock and
              Malaysian driftwood are ideal. Mosses attach in 7–10 days;
              Anubias and Bucephalandra take 3–6 weeks to establish a firm root
              anchor on their own.
            </p>
          </div>
        </section>

        {/* ── Section 6: Floaters ────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            Floaters: No Substrate Required
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Floating plants are the most underrated addition to a planted tank.
            They require zero substrate, access atmospheric CO₂ directly, and
            act as a biological engine for nitrate export and algae suppression.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                name: "Amazon Frogbit",
                note: "Delicate round pads with trailing roots. Sensitive to surface splash — use a floating ring made from airline tubing to protect leaves from filter output.",
              },
              {
                name: "Salvinia minima",
                note: "Velvety textured pads. Grows fast and outcompetes algae by starving it of nutrients. Handles moderate surface agitation better than Frogbit.",
              },
              {
                name: "Red Root Floater (P. fluitans)",
                note: "Produces stunning red undersides under high light with low nitrogen. The red pigmentation is triggered by nitrogen deficiency — a visual indicator the tank has been stripped clean.",
              },
              {
                name: "Duckweed",
                note: "The fastest nitrate exporter available — doubles in biomass every 24–48 hours. Nearly impossible to fully eradicate once introduced. Add deliberately and with intention.",
              },
              {
                name: "Water Sprite (floated)",
                note: "Can be planted or floated. In float mode it grows significantly faster, provides exceptional surface coverage, and offers fry protection for breeding setups.",
              },
              {
                name: "Hornwort (floated)",
                note: "Allelopathic — releases compounds that inhibit certain algae species and some competing plants. Best left floating rather than planted to maximize these effects.",
              },
            ].map((f) => (
              <div
                key={f.name}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="text-emerald-400 text-lg mt-0.5 flex-shrink-0">
                  🌿
                </span>
                <div>
                  <p className="font-semibold text-white text-sm">{f.name}</p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {f.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
            <p className="text-xs font-semibold text-amber-400 mb-1">
              Flow Rate Warning
            </p>
            <p className="text-xs text-slate-400">
              Most floaters are sensitive to strong surface agitation. Water
              splashing onto leaves causes rapid tissue rot on Frogbit and
              Salvinia. If you run a high-GPH filter or canister, create a
              protected zone using airline tubing bent into a ring and left
              floating freely on the surface — giving floaters a calm refuge
              while the rest of the tank enjoys strong circulation.
            </p>
          </div>
        </section>

        {/* ── Section 7: Walstad Method ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            The Walstad Method
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Pioneered by Diana Walstad in{" "}
            <em>Ecology of the Planted Aquarium</em>, this method uses a capped
            organic-soil layer to create a self-sustaining, low-maintenance
            planted ecosystem that requires no CO₂ injection or root tabs for
            years.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5">
              <h3 className="font-bold text-emerald-300 mb-3">
                Setup Layers
              </h3>
              <div className="space-y-3">
                {[
                  {
                    layer: "Bottom Layer",
                    depth: "1–2 inches",
                    material: "Organic potting soil",
                    note: "Must be organic, unfertilized, free of perlite and slow-release pellets. Sift to remove large wood chunks before adding.",
                  },
                  {
                    layer: "Cap Layer",
                    depth: "1–1.5 inches",
                    material: "Coarse sand or gravel (2–3mm)",
                    note: "Prevents the soil from clouding the water column and physically locks in the nutrient layer below.",
                  },
                ].map((l) => (
                  <div key={l.layer} className="rounded-lg bg-white/5 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-emerald-300">
                        {l.layer}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {l.depth}
                      </span>
                    </div>
                    <p className="text-xs text-white mb-1">{l.material}</p>
                    <p className="text-[10px] text-slate-500">{l.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-bold text-white mb-3">Why It Works</h3>
              <ul className="space-y-3">
                {[
                  {
                    point: "Free CO₂",
                    detail:
                      "Bacteria decomposing organic matter in the soil generate up to 10 ppm of CO₂ — rivaling entry-level CO₂ injection systems at zero ongoing cost.",
                  },
                  {
                    point: "Long-term nutrients",
                    detail:
                      "A properly set up Walstad tank remains nutritionally self-sustaining for 5–10 years, eliminating root tabs for the vast majority of the tank's life.",
                  },
                  {
                    point: "Balanced microbiology",
                    detail:
                      "The soil supports a diverse microbial community that processes fish waste, reducing the need for aggressive water changes once established.",
                  },
                ].map((w) => (
                  <li key={w.point} className="flex gap-2 text-xs text-slate-400">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">
                      ▸
                    </span>
                    <span>
                      <strong className="text-white">{w.point}:</strong>{" "}
                      {w.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ammonia spike warning */}
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5">
            <p className="text-xs font-semibold text-amber-400 mb-2">
              ⚠ Ammonia Spike Warning — Critical for Fish Safety
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              A Walstad tank generates a severe ammonia spike during its first
              2–4 weeks as the soil layer begins decomposing.{" "}
              <strong className="text-white">
                Do not add fish during this period.
              </strong>{" "}
              Manage the spike by:
            </p>
            <ul className="space-y-1.5">
              {[
                "Plant at 75%+ coverage with fast-growing stems and floaters to immediately consume ammonia",
                "Use ammonia-resistant plants initially — Hornwort, Water Sprite, Hygrophila",
                "Run the tank fishless for at least 3–4 weeks; test ammonia and nitrite daily",
                "Add fish only after ammonia reads 0 ppm and nitrite reads 0 ppm for 5+ consecutive days",
              ].map((tip, i) => (
                <li key={i} className="flex gap-2 text-xs text-slate-400">
                  <span className="text-amber-400 flex-shrink-0">→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Section 8: Common Mistakes ────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            10 Substrate Mistakes That Kill Plants
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            These are the errors we see most often — each one is fixable once
            you know what&apos;s happening.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {mistakes.map((m) => (
              <div
                key={m.n}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-400/10 border border-red-400/20 text-red-400 text-xs font-bold flex items-center justify-center">
                  {m.n}
                </span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">
                    {m.title}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 9: FAQ ────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                  <span className="font-medium text-white text-sm">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 text-aqua-400 text-lg leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── Related Guides ────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/aquarium-plants-melting"
              className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              <span className="text-2xl flex-shrink-0">🪴</span>
              <div>
                <p className="font-semibold text-white text-sm group-hover:text-aqua-300 transition-colors">
                  Why Are My Aquarium Plants Melting?
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Substrate changes are one of the top melt triggers —
                  especially for Crypts. 5 melt types diagnosed with a 6-step
                  recovery protocol.
                </p>
              </div>
            </Link>
            <Link
              href="/blog/aquarium-plants-turning-brown-yellow-black"
              className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              <span className="text-2xl flex-shrink-0">🌿</span>
              <div>
                <p className="font-semibold text-white text-sm group-hover:text-aqua-300 transition-colors">
                  Why Are My Plants Turning Brown, Yellow, or Black?
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Inert substrate with no root tabs is a leading cause of
                  nutrient-deficiency discoloration. 24 causes diagnosed by
                  color and pattern.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="rounded-2xl border border-aqua-400/20 bg-gradient-to-br from-ocean-800 to-ocean-950 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Shop Plants That Work in Any Setup
          </h2>
          <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
            Every plant we ship is suited for low-tech setups. Whether
            you&apos;re running plain gravel, sand, or a bare-bottom tank —
            we have epiphytes, floaters, and root feeders ready to go.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/shop?category=Plants"
              className="rounded-full bg-aqua-400 text-ocean-950 font-semibold px-6 py-2.5 text-sm hover:bg-aqua-300 transition-colors"
            >
              Shop Aquarium Plants
            </Link>
            <Link
              href="/care-guides"
              className="rounded-full border border-white/20 text-white font-medium px-6 py-2.5 text-sm hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              Browse Care Guides
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
