import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import RelatedGuides from "@/components/RelatedGuides";

export const metadata: Metadata = {
  title: "Aquarium Plants Brown, Yellow or Black? 24 Causes Diagnosed",
  description:
    "24 causes of brown, yellow, and black aquarium plants — diagnosed by color, pattern, and species. Water parameter chart and step-by-step fix protocol.",
  alternates: {
    canonical:
      "https://shoreaquatic.com/blog/aquarium-plants-turning-brown-yellow-black",
  },
  openGraph: {
    title: "Aquarium Plants Brown, Yellow or Black? 24 Causes Diagnosed",
    description:
      "24 causes of brown, yellow, and black aquarium plants — diagnosed by color, pattern, and species. Water parameter chart and step-by-step fix protocol.",
    type: "article",
    url: "https://shoreaquatic.com/blog/aquarium-plants-turning-brown-yellow-black",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why Are My Aquarium Plants Turning Brown, Yellow, or Black? (Complete Troubleshooting Guide)",
  description:
    "24 causes of aquarium plant discoloration diagnosed by color and pattern, with water parameter chart, species-specific melt guide, and step-by-step fixes.",
  author: { "@type": "Organization", name: "Shore Aquatic" },
  publisher: {
    "@type": "Organization",
    name: "Shore Aquatic",
    url: "https://shoreaquatic.com",
  },
  datePublished: "2026-04-24",
  dateModified: "2026-07-05",
  url: "https://shoreaquatic.com/blog/aquarium-plants-turning-brown-yellow-black",
  mainEntityOfPage:
    "https://shoreaquatic.com/blog/aquarium-plants-turning-brown-yellow-black",
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
      name: "Why Are My Aquarium Plants Turning Brown, Yellow, or Black?",
      item: "https://shoreaquatic.com/blog/aquarium-plants-turning-brown-yellow-black",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why are my aquarium plants turning yellow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yellowing (chlorosis) is most commonly caused by a nitrogen deficiency — the plant scavenges nitrogen from older leaves to feed new growth. Other common causes include iron deficiency (interveinal yellowing on new leaves), low light, magnesium deficiency, or CO2 deficiency in high-light tanks.",
      },
    },
    {
      "@type": "Question",
      name: "Why are my aquarium plants turning brown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brown leaves are most often caused by transitional melt — a normal process where emersed-grown leaves die off to make way for submersed-adapted foliage. Other causes include phosphate deficiency, shipping damage, diatom algae in new tanks, or natural leaf senescence.",
      },
    },
    {
      "@type": "Question",
      name: "Why are my aquarium plants turning black?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blackening is typically caused by Black Beard Algae (BBA) colonizing leaf edges, anaerobic root rot from compacted substrate, or untreated potassium deficiency where pinholes coalesce into large necrotic patches.",
      },
    },
    {
      "@type": "Question",
      name: "Are brown aquarium plants dead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. If the stem and rhizome remain firm and pale, the plant is likely in the melt phase and will recover. True death is indicated by a mushy, foul-smelling stem or rhizome where leaves detach easily at the base.",
      },
    },
    {
      "@type": "Question",
      name: "Should I remove brown leaves from aquarium plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dying leaves no longer photosynthesize but continue consuming oxygen and releasing organic waste that fuels algae. Prune them at the base to allow the plant to redirect energy to healthy new growth.",
      },
    },
    {
      "@type": "Question",
      name: "Will aquarium plants grow back after melting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — in most cases. As long as the rhizome or root crown is firm and unburied, the plant will push new submersed-adapted leaves within 3–5 weeks. Crypts, swords, and bucephalandra are the most reliable melters-and-recoverers.",
      },
    },
    {
      "@type": "Question",
      name: "Do aquarium plants turn yellow without CO2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They can, especially in high-light tanks where the demand for carbon exceeds what naturally dissolves in the water. Low-light low-tech setups usually do fine without CO2, but adding it dramatically improves color and growth rate in any tank.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my aquarium plant is dying or just adjusting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adjustment: outer/older leaves die while the center produces new growth. Dying: the collapse moves top-down — new buds are mushy or blackened and the rhizome/stem is soft and foul-smelling. When in doubt, trim dead tissue, stabilize water parameters, and wait 3 weeks.",
      },
    },
  ],
};

// ── Diagnostic data ────────────────────────────────────────────────────────────

const diagnosticRows = [
  {
    cause: "Nitrogen Deficiency",
    color: "yellow",
    visual: "Uniform yellowing of older leaves; translucent tips; stunted growth",
    test: "Test NO₃ < 5 ppm",
    fix: "Dose liquid N fertilizer or all-in-one; target 10–25 ppm nitrate",
    recovery: "14–21 days (new growth)",
    plants: "Ludwigia, Bacopa, Hygrophila",
  },
  {
    cause: "Iron Deficiency",
    color: "yellow",
    visual: "Interveinal chlorosis on NEW leaves — veins stay green, tissue between turns pale yellow",
    test: "Test Fe < 0.1 ppm; check if pH > 7.5",
    fix: "Dose chelated iron; lower pH slightly to improve bioavailability",
    recovery: "7–14 days (new leaves)",
    plants: "Rotala, Alternanthera, red stem plants",
  },
  {
    cause: "Potassium Deficiency",
    color: "yellow/brown",
    visual: "Small pinholes with yellow/brown scorched margins on older leaves; edges curl inward",
    test: "Visual audit for 'pinhole' patterns on mature foliage",
    fix: "Dose Potassium Sulfate (K₂SO₄) or all-in-one fertilizer",
    recovery: "14–21 days",
    plants: "Java Fern, Anubias, Hygrophila",
  },
  {
    cause: "Magnesium Deficiency",
    color: "yellow",
    visual: "Interveinal chlorosis on OLDER leaves (unlike iron, affects old not new); leaf edges droop",
    test: "Test GH and Mg levels",
    fix: "Add Epsom salt (MgSO₄) 1 tsp/10 gal, or GH booster",
    recovery: "14–21 days",
    plants: "Vallisneria, Hygrophila",
  },
  {
    cause: "Calcium Deficiency",
    color: "pale yellow/white",
    visual: "Twisted, deformed new growth; necrotic terminal buds; withered tips (hooking)",
    test: "Check GH (low hardness) or extreme pH acidity",
    fix: "Add crushed coral, liquid calcium, or GH booster",
    recovery: "21–30 days",
    plants: "Large-leafed species, Amazon Sword",
  },
  {
    cause: "Phosphate Deficiency",
    color: "dark green/purple/brown",
    visual: "Abnormally dark or purple-tinged leaves; soggy brown patches on older growth",
    test: "Test PO₄ < 0.1 ppm; check for Green Spot Algae on slow-growing leaves",
    fix: "Dose phosphate; aim for N:P ratio of 10:1",
    recovery: "21–28 days",
    plants: "Amazon Sword, Crypts",
  },
  {
    cause: "Low Light",
    color: "yellow/brown",
    visual: "Leggy elongated stems; bottom leaves yellow and drop; slow internode spacing",
    test: "Check PAR at substrate (should be ≥ 20–30); observe internode length",
    fix: "Increase intensity or extend photoperiod to 8–10 hrs",
    recovery: "14–21 days",
    plants: "Carpeting plants, Monte Carlo, HC Cuba",
  },
  {
    cause: "Excessive Light",
    color: "pale/bleached",
    visual: "Pale, washed-out leaves; algae blooming on foliage; no improvement with ferts",
    test: "Observe algae growth vs. plant health; test CO2 levels",
    fix: "Reduce photoperiod; increase CO2 and nutrient dosing simultaneously",
    recovery: "7–14 days",
    plants: "Mosses, Anubias, shade-tolerant species",
  },
  {
    cause: "Incorrect Spectrum",
    color: "dull green/yellow",
    visual: "Poor vertical growth; leaves elongate unnaturally; red plants lose color",
    test: "Check LED spectrum — look for red (660nm) and blue (450nm) peaks",
    fix: "Upgrade to full-spectrum WRGB LED",
    recovery: "14–28 days",
    plants: "Red stem plants (Rotala, Ludwigia)",
  },
  {
    cause: "CO₂ Deficiency",
    color: "yellow/pale",
    visual: "Stunted growth; chalky white calcification on leaves; general paling across all growth",
    test: "Drop checker (blue = low); pH swing test (>0.5 pH shift over a day indicates demand)",
    fix: "Add pressurized CO2 or liquid carbon; stabilize at 20–30 ppm in high-tech",
    recovery: "7–21 days",
    plants: "HC Cuba, Monte Carlo, Rotala",
  },
  {
    cause: "Plant Melt (Acclimation)",
    color: "translucent/brown",
    visual: "Leaves turn translucent and mushy shortly after planting; outer leaves collapse",
    test: "Verify emersed vs. submersed origin; check for firm center crown/new growth",
    fix: "Prune melting leaves; add root tabs; stabilize water chemistry and resist changing anything",
    recovery: "21–30 days",
    plants: "Crypts, Swords, Bucephalandra, TC plants",
  },
  {
    cause: "Temperature Shock",
    color: "brown/black",
    visual: "Sudden wilting and darkening; rapid, widespread leaf collapse",
    test: "Measure temp vs. species tolerance (optimal 72–78°F); check heater calibration",
    fix: "Calibrate heater; match temperature during water changes",
    recovery: "14–28 days",
    plants: "Anubias, Crypts, cold-intolerant tropicals",
  },
  {
    cause: "Chlorine/Chloramine",
    color: "brown/bleached",
    visual: "Bleached spots; immediate browning of leaf tissue after water change",
    test: "Total chlorine test; note 'swimming pool' smell in tap water",
    fix: "Use dechlorinator that specifically treats chloramine (not just chlorine)",
    recovery: "14–21 days",
    plants: "Sensitive mosses, Vallisneria",
  },
  {
    cause: "Improper pH",
    color: "yellow",
    visual: "Pale, stunted growth; iron chlorosis even when iron is dosed (locked out above pH 7.5)",
    test: "Liquid pH test kit",
    fix: "Buffer with crushed coral (raise) or peat/driftwood (lower)",
    recovery: "14–28 days",
    plants: "Soft-water species, demanding stem plants",
  },
  {
    cause: "Hard Water / Mineral Buildup",
    color: "pale yellow",
    visual: "Calcification crust on leaves; yellowing edges; poor uptake despite fertilizing",
    test: "GH and KH test — compare to species requirements",
    fix: "Blend tap water with RO/DI to hit target GH",
    recovery: "21–30 days",
    plants: "Tonina, Syngonanthus, soft-water species",
  },
  {
    cause: "Poor Circulation",
    color: "brown/black",
    visual: "Decay in lower stems; browning in dense clumps; waste accumulates on leaves",
    test: "Visual check — leaves should sway gently; check for debris buildup in dense areas",
    fix: "Upgrade filtration; add wavemaker or air pump to increase flow",
    recovery: "14–21 days",
    plants: "Dense stem plant carpets",
  },
  {
    cause: "Root Rot",
    color: "yellow/black",
    visual: "Mushy black roots; foul odor from substrate; sudden foliage yellowing despite good water",
    test: "Gently pull plant — sniff roots for sulfur/rotten smell; inspect for black mush",
    fix: "Trim rotten roots; aerate substrate with a skewer; improve circulation",
    recovery: "30–45 days",
    plants: "Amazon Sword, Crypts, heavy root feeders",
  },
  {
    cause: "Black Beard Algae (BBA)",
    color: "black (algae growth)",
    visual: "Dark, hair-like tufts on leaf edges and hardscape; doesn't wipe off",
    test: "Visual — does it look like tiny black hairs on edges? Linked to CO2 fluctuation",
    fix: "Spot treat with H₂O₂ or Seachem Excel; stabilize CO2 with a solenoid",
    recovery: "14–21 days",
    plants: "Anubias, Java Fern (slow-growers most affected)",
  },
  {
    cause: "Green Spot Algae (GSA)",
    color: "green spots",
    visual: "Hard, emerald-green circles on slow-growing leaves; won't wipe off easily",
    test: "Test PO₄ < 0.1 ppm; GSA is a classic sign of phosphate deficiency",
    fix: "Manually scrub; dose phosphate to target 0.5–1.5 ppm",
    recovery: "14–28 days",
    plants: "Anubias, Bucephalandra",
  },
  {
    cause: "Cyanobacteria",
    color: "blue-green/black",
    visual: "Slimy, dark blue-green sheet smothering leaves and substrate; strong swampy odor",
    test: "Slimy texture + foul smell = cyanobacteria (not true algae)",
    fix: "Physical removal; increase flow; optimize nitrates above 10 ppm; 3-day blackout",
    recovery: "7–14 days",
    plants: "Carpet plants most vulnerable",
  },
  {
    cause: "Natural Senescence",
    color: "yellow/brown",
    visual: "ONLY the absolute lowest/oldest leaves yellowing; new growth at top is healthy",
    test: "Is it only the oldest outer leaves? New growth healthy? Normal aging.",
    fix: "Prune dying leaves; no other action needed",
    recovery: "N/A — normal process",
    plants: "All stem plants; Swords",
  },
  {
    cause: "Shipping Damage",
    color: "brown",
    visual: "Localized brown patches, creased or kinked stems at specific points",
    test: "Note location of damage immediately on arrival — mechanical trauma pattern",
    fix: "Trim damaged leaves and stems; give time to recover",
    recovery: "14–21 days",
    plants: "Fragile stem plants most affected",
  },
  {
    cause: "Allelopathy",
    color: "brown/yellow",
    visual: "Stunting or melting of one species immediately adjacent to an aggressive neighbor",
    test: "Is the damage localized to plants touching or near one specific species?",
    fix: "Increase water changes; add activated carbon; physically separate problem plants",
    recovery: "Variable",
    plants: "Hornwort vs. Rotala; aggressive growers near delicate species",
  },
  {
    cause: "Snail / Pest Damage",
    color: "holes/ragged edges",
    visual: "Ragged edges; irregular holes with uneven margins; silver slime trails visible",
    test: "Nighttime check with flashlight for snails; examine leaf underside",
    fix: "Manual removal; introduce Loaches or Assassin Snails as predators",
    recovery: "14–21 days",
    plants: "Swords, Hygrophila, thin-leafed species",
  },
];

const speciesGuide = [
  {
    species: "Cryptocoryne (Crypt Melt)",
    normal: "Rapid melting of thick emersed leaves — entire above-ground portion may dissolve. The rhizome stays firm and anchored.",
    alarming: "Soft, mushy rhizome that detaches from roots with a foul smell.",
    timeline: "3–4 weeks",
    note:
      "Crypt melt is not death — it's evolution. The plant triggers cellular apoptosis in its waxy emersed leaves, recycling nutrients into the rhizome to fund new submersed-adapted foliage. As long as the rhizome is firm, recovery is nearly certain. Do NOT uproot to check. Do NOT change water chemistry.",
  },
  {
    species: "Amazon Sword (Echinodorus)",
    normal: "Outer round emersed leaves yellow and drop; new growth is long and narrow — this is correct submersed-form morphology.",
    alarming: "The center 'heart' (newest spear of growth) yellows or becomes mushy.",
    timeline: "2–4 weeks",
    note:
      "Swords are heavy root feeders. Plant root tabs within 4–6 inches of the root zone within the first week to fuel that new submersed growth.",
  },
  {
    species: "Anubias",
    normal: "Extremely slow growth; 1–2 old leaves may yellow and detach over several weeks.",
    alarming: "Rhizome turns soft or dark; leaves detach easily at the base with no resistance.",
    timeline: "4–8 weeks",
    note:
      "Never bury the Anubias rhizome — it will rot within days. Attach to driftwood or rock instead. BBA on leaves is common because Anubias grows so slowly; treat leaves individually with H₂O₂.",
  },
  {
    species: "Java Fern (Microsorum)",
    normal: "Tips may blacken slightly; brown fuzzy roots are normal and healthy; small 'baby' plantlets growing from leaf edges.",
    alarming: "Rhizome turns black; sudden loss of all leaves simultaneously.",
    timeline: "3–6 weeks",
    note: "Like Anubias, Java Fern must never have its rhizome buried. Black rhizome = rotting, which is fatal within days. Brown roots are always normal.",
  },
  {
    species: "Vallisneria",
    normal: "Tip dieback and slow growth for the first 14 days as it adjusts to your water chemistry.",
    alarming: "The base of the plant turns translucent and the runner system starts dissolving.",
    timeline: "2–3 weeks",
    note:
      "Vallisneria is highly sensitive to Excel/Glutaraldehyde-based liquid carbon — even a slight overdose causes rapid melt. If you use liquid carbon, skip Vallisneria or dose very conservatively.",
  },
  {
    species: "Tissue Culture Plants",
    normal: "Small portions may melt in the first 1–2 weeks as the plant transitions from sterile gel media to aquarium water.",
    alarming: "Total dissolution of all plantlets within 48 hours with no new growth anywhere.",
    timeline: "4–8 weeks",
    note:
      "TC plants are the most sterile and pest-free option but require the longest acclimation window. Keep water chemistry stable and resist the urge to move or rescape while they establish.",
  },
  {
    species: "Monte Carlo / HC Cuba (Carpeting Plants)",
    normal: "Minor surface melt; slow spread horizontally; may appear to do nothing for 2–3 weeks.",
    alarming: "Entire mat turning yellow underneath, signaling inadequate light reaching the substrate.",
    timeline: "3–5 weeks",
    note:
      "Carpeting plants demand the highest PAR at substrate level (50–100 PAR) and benefit enormously from CO2. Without both, they will creep upward toward light rather than carpet.",
  },
];

const waterParams = [
  { param: "Temperature", optimal: "72–78°F (22–26°C)", tolerable: "65–82°F (18–28°C)", risk: "High: melting and rapid darkening. Low: severe stunting, cold-shock browning." },
  { param: "pH", optimal: "6.5–7.2", tolerable: "6.0–8.0", risk: "High pH: iron lockout → interveinal chlorosis. Low pH: tissue erosion." },
  { param: "GH (General Hardness)", optimal: "4–8 dGH", tolerable: "2–15 dGH", risk: "Low GH: Ca/Mg deficiency → twisted, yellowing new leaves." },
  { param: "KH (Carbonate Hardness)", optimal: "3–6 dKH", tolerable: "1–12 dKH", risk: "Low KH: pH instability → sudden, catastrophic melt during water changes." },
  { param: "Ammonia (NH₃)", optimal: "0.0 ppm", tolerable: "< 0.25 ppm", risk: "Toxicity: black tips, root burn, dramatically inhibited iron uptake." },
  { param: "Nitrate (NO₃)", optimal: "10–25 ppm", tolerable: "5–50 ppm", risk: "Low: bottom-up yellowing. High (> 50 ppm): algae outbreaks smothering leaves." },
  { param: "Phosphate (PO₄)", optimal: "0.5–1.5 ppm", tolerable: "0.1–3.0 ppm", risk: "Low: dark/purple leaves + Green Spot Algae. High: algae blooms." },
  { param: "Iron (Fe)", optimal: "0.1–0.5 ppm", tolerable: "0.05–1.0 ppm", risk: "Low: interveinal chlorosis on new leaves. Unavailable above pH 7.5." },
  { param: "CO₂ (Low-Tech)", optimal: "5–15 ppm", tolerable: "2–20 ppm", risk: "Low: general paling, calcification on leaves, BBA colonization." },
  { param: "CO₂ (High-Tech)", optimal: "20–30 ppm", tolerable: "15–35 ppm", risk: "Low: melt and BBA. High (> 35 ppm): fish gasping at surface." },
  { param: "Lighting (PAR)", optimal: "30–80 at substrate", tolerable: "15–150+", risk: "Low: lower leaf drop, yellowing. High without CO₂: algae and bleaching." },
];

const faqItems = [
  {
    q: "Should I remove brown or yellow leaves?",
    a: "Yes — remove them promptly. Dying leaves no longer photosynthesize but still consume oxygen and decompose into organic waste that feeds algae. Prune at the base of the stem or rhizome. The plant will redirect energy to healthy new growth.",
  },
  {
    q: "Can aquarium plants recover from yellowing?",
    a: "Yes, but existing yellow leaves rarely turn green again. Measure success by healthy new green growth at the terminal bud. Once you correct the underlying deficiency or condition, new leaves emerge normal within 1–3 weeks.",
  },
  {
    q: "What causes black spots on aquarium plant leaves?",
    a: "Black spots are typically the late stage of untreated potassium deficiency (small pinholes merge into large necrotic patches) or Black Beard Algae colonizing stressed tissue. BBA feels like tiny wiry hair and won't wipe off; K-deficiency spots are sunken into the leaf itself.",
  },
  {
    q: "Why are my plants yellowing in a new tank?",
    a: "In new setups, yellowing usually means an immature nitrogen cycle (nitrates haven't built up yet), diatom algae coating the leaves (a normal phase that resolves in 4–8 weeks), or melt from recently planted specimens. Test your water first before dosing anything.",
  },
  {
    q: "Can aquarium plants carry ich or disease?",
    a: "Live plants from reputable sources are generally safe, but they can harbor snails, snail eggs, or algae spores. Ich (Ichthyophthirius) is a fish parasite that does not survive on plants alone — you need fish hosts for it to persist. Tissue culture plants are the most sterile option available.",
  },
];

export default function AquariumPlantColorGuidePage() {
  return (
    <>
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

      <main className="pt-16 min-h-screen bg-ocean-950">
        {/* ── Hero ── */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-ocean-800 to-ocean-950 border-b border-white/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-aqua-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-aqua-400 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-slate-400">Plant Troubleshooting</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-300">Troubleshooting</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-400">Aquarium Plants</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-400">April 2026</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-400">~15 min read</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Why Are My Aquarium Plants Turning Brown, Yellow, or Black?
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              The complete troubleshooting guide — 24 causes diagnosed by color, pattern, and species, with water parameter charts and step-by-step fixes.
            </p>
          </div>
        </section>

        {/* ── Article body ── */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          {/* Intro */}
          <div className="prose-section mb-14">
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              You added beautiful new plants to your tank last week. Now they&apos;re turning yellow at the bottom, brown at the edges, or developing mysterious black patches — and you&apos;re not sure whether to intervene or wait. This is one of the most common and frustrating experiences in the hobby, and it&apos;s responsible for thousands of perfectly viable plants being thrown away every year.
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              The good news: in the vast majority of cases, a discoloring plant is <strong className="text-white">not dead</strong>. It&apos;s communicating. Each color tells you something specific about what your tank is — or isn&apos;t — providing. Once you learn to read those signals, diagnosis becomes straightforward and recovery is usually a matter of weeks.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              This guide covers all 24 documented causes of aquarium plant discoloration, organized by color and pattern, with water parameter targets, species-specific acclimation notes, and a step-by-step diagnosis process you can run right now.
            </p>
          </div>

          {/* ── COLOR QUICK REFERENCE ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Quick Diagnosis by Color
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Yellow */}
              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
                <div className="text-2xl mb-3">🟡</div>
                <h3 className="text-lg font-bold text-yellow-300 mb-3">Yellowing (Chlorosis)</h3>
                <p className="text-xs text-slate-400 mb-3">Chlorophyll is breaking down. The plant can&apos;t make food.</p>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li>1. Nitrogen deficiency</li>
                  <li>2. Iron deficiency</li>
                  <li>3. Magnesium deficiency</li>
                  <li>4. Low light</li>
                  <li>5. CO₂ deficiency</li>
                </ul>
              </div>
              {/* Brown */}
              <div className="rounded-2xl border border-amber-600/20 bg-amber-600/5 p-6">
                <div className="text-2xl mb-3">🟤</div>
                <h3 className="text-lg font-bold text-amber-300 mb-3">Browning (Necrosis)</h3>
                <p className="text-xs text-slate-400 mb-3">Tissue is dying or being replaced. Often transitional.</p>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li>1. Plant melt (acclimation)</li>
                  <li>2. Phosphate deficiency</li>
                  <li>3. Shipping damage</li>
                  <li>4. Diatom algae (new tanks)</li>
                  <li>5. Natural senescence</li>
                </ul>
              </div>
              {/* Black */}
              <div className="rounded-2xl border border-slate-500/20 bg-slate-500/5 p-6">
                <div className="text-2xl mb-3">⚫</div>
                <h3 className="text-lg font-bold text-slate-300 mb-3">Blackening</h3>
                <p className="text-xs text-slate-400 mb-3">Usually algae colonization or advanced necrosis.</p>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li>1. Black Beard Algae (BBA)</li>
                  <li>2. Root rot (anaerobic)</li>
                  <li>3. Potassium deficiency (late)</li>
                  <li>4. Temperature shock</li>
                  <li>5. Cyanobacteria</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── PATTERN GUIDE ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Where It Starts Matters as Much as the Color
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Aquatic plant nutrients fall into two categories: <strong className="text-white">mobile</strong> (can be relocated within the plant) and <strong className="text-white">immobile</strong> (cannot). This distinction tells you immediately whether to look at old leaves or new ones.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                <h3 className="font-bold text-emerald-300 mb-2">⬇️ Bottom-Up Yellowing</h3>
                <p className="text-sm text-slate-300 mb-3">Older/lower leaves yellow first while new growth looks fine.</p>
                <p className="text-xs text-slate-400 mb-1 font-medium">Cause: <span className="text-white">Mobile nutrient deficiency</span></p>
                <p className="text-xs text-slate-400">The plant is pulling N, P, K, or Mg from old tissue to feed new growth. Test your water for <strong className="text-slate-300">nitrate, potassium, and magnesium</strong>.</p>
              </div>
              <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
                <h3 className="font-bold text-red-300 mb-2">⬆️ Top-Down Yellowing</h3>
                <p className="text-sm text-slate-300 mb-3">New growth emerges pale or deformed while older leaves look acceptable.</p>
                <p className="text-xs text-slate-400 mb-1 font-medium">Cause: <span className="text-white">Immobile nutrient deficiency</span></p>
                <p className="text-xs text-slate-400">Iron and calcium cannot be relocated, so new tissue suffers first. Test for <strong className="text-slate-300">iron levels and pH</strong> (high pH locks out Fe).</p>
              </div>
              <div className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5">
                <h3 className="font-bold text-blue-300 mb-2">📍 Localized Spots or Holes</h3>
                <p className="text-sm text-slate-300 mb-3">Pinholes with yellow/brown margins; damage confined to patches.</p>
                <p className="text-xs text-slate-400">Classic <strong className="text-white">potassium deficiency</strong> pattern. In advanced stages, holes merge into large black necrotic areas. Snail damage creates more ragged, uneven holes.</p>
              </div>
              <div className="rounded-xl border border-purple-400/20 bg-purple-400/5 p-5">
                <h3 className="font-bold text-purple-300 mb-2">🌿 Uniform, Systemic Paling</h3>
                <p className="text-sm text-slate-300 mb-3">Every leaf fades proportionally; tank looks washed out overall.</p>
                <p className="text-xs text-slate-400">Points to <strong className="text-white">CO₂ deficiency or low light</strong> — the plant simply can&apos;t run photosynthesis at full capacity. Carbon is the building block, not just a supplement.</p>
              </div>
            </div>
          </section>

          {/* ── FULL DIAGNOSTIC TABLE ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              All 24 Causes — Complete Diagnostic Table
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Find your color, scan the visual symptoms column, then check the at-home test before treating.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-36">Cause</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Color</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Visual Symptoms</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">At-Home Test</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden lg:table-cell">Recovery</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnosticRows.map((row, i) => (
                    <tr key={row.cause} className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                      <td className="px-4 py-3 font-medium text-white align-top">{row.cause}</td>
                      <td className="px-4 py-3 align-top">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-medium ${
                          row.color.includes("yellow") ? "bg-yellow-400/15 text-yellow-300" :
                          row.color.includes("black") || row.color.includes("dark") ? "bg-slate-500/20 text-slate-300" :
                          row.color.includes("brown") || row.color.includes("translucent") ? "bg-amber-600/15 text-amber-300" :
                          row.color.includes("green") ? "bg-emerald-400/15 text-emerald-300" :
                          "bg-white/10 text-slate-300"
                        }`}>
                          {row.color}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-300 align-top">{row.visual}</td>
                      <td className="px-4 py-3 text-slate-400 align-top hidden md:table-cell">{row.test}</td>
                      <td className="px-4 py-3 text-slate-400 align-top hidden lg:table-cell whitespace-nowrap">{row.recovery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SPECIES ACCLIMATION GUIDE ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Species-Specific Guide: Normal Melt vs. Actually Dying
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Plant &quot;melt&quot; is one of the most misunderstood phenomena in the hobby. Most aquarium plants are grown <em className="text-slate-200">emersed</em> (partially out of water) by nurseries — including the Florida-grown plants we source here at Shore Aquatic. When placed in a fully submerged environment, they must rebuild their entire leaf structure for underwater gas exchange. The old leaves die. New ones grow. It looks terrifying. It&apos;s usually fine.
            </p>
            <div className="space-y-4">
              {speciesGuide.map((s) => (
                <details key={s.species} className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-white font-semibold">{s.species}</span>
                      <span className="text-xs text-slate-500">Acclimation: {s.timeline}</span>
                    </div>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform shrink-0 text-lg leading-none">↓</span>
                  </summary>
                  <div className="px-5 pb-5 pt-2 space-y-3 border-t border-white/5">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="rounded-lg bg-emerald-400/5 border border-emerald-400/15 p-3">
                        <p className="text-xs font-semibold text-emerald-400 mb-1">✓ Normal behavior</p>
                        <p className="text-sm text-slate-300">{s.normal}</p>
                      </div>
                      <div className="rounded-lg bg-red-400/5 border border-red-400/15 p-3">
                        <p className="text-xs font-semibold text-red-400 mb-1">✗ Alarming behavior</p>
                        <p className="text-sm text-slate-300">{s.alarming}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      <span className="text-aqua-400 font-medium">Expert note: </span>{s.note}
                    </p>
                  </div>
                </details>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-aqua-400/20 bg-aqua-400/5 p-5">
              <p className="text-sm text-slate-300">
                <strong className="text-aqua-300">Our Live Arrival Guarantee:</strong> If plants arrive severely damaged (not just melting), we cover replacements. Melt is a normal transition, not a defect — but if your plant arrives in genuinely unsalvageable condition, <Link href="/contact" className="text-aqua-400 hover:underline">contact us</Link> within 48 hours of delivery.
              </p>
            </div>
          </section>

          {/* ── WATER PARAMETER CHART ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Water Parameter Reference Chart
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Most discoloration issues trace back to one or more parameters being out of the optimal range. Test before you treat.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Parameter</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Optimal</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tolerable</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Out-of-Range Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {waterParams.map((p, i) => (
                    <tr key={p.param} className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                      <td className="px-4 py-3 font-medium text-white">{p.param}</td>
                      <td className="px-4 py-3 text-emerald-300">{p.optimal}</td>
                      <td className="px-4 py-3 text-slate-400">{p.tolerable}</td>
                      <td className="px-4 py-3 text-slate-500 hidden md:table-cell">{p.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── STEP-BY-STEP DIAGNOSIS ── */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              5-Step Diagnosis: Run This Right Now
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Identify the color and location",
                  detail: "Yellow on old leaves = mobile deficiency (N, K, Mg). Yellow on new leaves = immobile deficiency (Fe, Ca). Brown and mushy = melt or rot. Black tufts on edges = BBA. Uniform paling everywhere = CO₂ or light.",
                },
                {
                  step: 2,
                  title: "Test your water before doing anything else",
                  detail: "Grab a liquid test kit (not strips — they're notoriously inaccurate). Test: Ammonia, Nitrite, Nitrate, pH. If you have the kit, also test GH, KH, and Phosphate. Write down the numbers.",
                },
                {
                  step: 3,
                  title: "Check your light and CO₂",
                  detail: "Measure how many hours your light runs and at what intensity. Does your drop checker show blue (low CO₂)? In low-tech tanks, are you running a light rated for high-tech setups without the CO₂ to match? Mismatched light and CO₂ is the #1 cause of algae + discoloration in one tank.",
                },
                {
                  step: 4,
                  title: "Check the rhizome or root crown",
                  detail: "Gently pull the plant. Firm, white-tan roots = alive. Mushy, black, foul-smelling = root rot. For Crypts and Anubias, check the rhizome specifically — it should feel like a small green/brown finger, never soft or dark.",
                },
                {
                  step: 5,
                  title: "Make one change, then wait 2 weeks",
                  detail: "Resist the urge to change everything at once. Add a fertilizer, or adjust CO₂, or change the light — then wait 14 days. New growth at the terminal bud means you found the problem. No improvement means adjust one more variable.",
                },
              ].map(({ step, title, detail }) => (
                <div key={step} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-aqua-400/20 border border-aqua-400/30 flex items-center justify-center text-aqua-300 font-bold text-sm">
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
              More questions? Check our full <Link href="/faq" className="text-aqua-400 hover:underline">FAQ page</Link> or <Link href="/contact" className="text-aqua-400 hover:underline">contact us</Link> directly.
            </p>
          </section>

          {/* ── CTA ── */}
          <section className="rounded-2xl border border-aqua-400/20 bg-gradient-to-br from-ocean-800/60 to-ocean-900/60 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Start Fresh?</h2>
            <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
              Browse our full collection of aquarium plants — Florida-grown, beginner-friendly species that arrive ready to thrive. Every order ships with our Live Arrival Guarantee.
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

        <RelatedGuides current="aquarium-plants-turning-brown-yellow-black" />
        <Footer />
      </main>
    </>
  );
}
