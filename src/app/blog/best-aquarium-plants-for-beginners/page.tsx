import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "15 Best Aquarium Plants for Beginners (No CO₂ Required)",
  description:
    "15 easy aquarium plants ranked by a 5-dimension score — with each plant's #1 failure mode, a pro tip, and picks for nano, shrimp, and algae-prone tanks. No CO₂ needed.",
  alternates: {
    canonical: "https://shoreaquatic.com/blog/best-aquarium-plants-for-beginners",
  },
};

// ─── JSON-LD ────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "15 Best Aquarium Plants for Beginners (Low-Tech, No CO₂ Required)",
  description:
    "Ranked by a 5-dimension beginner score with failure modes, pro tips, and scenario-based recommendations for nano, shrimp, and algae-plagued tanks.",
  author: { "@type": "Organization", name: "Shore Aquatic" },
  publisher: {
    "@type": "Organization",
    name: "Shore Aquatic",
    logo: { "@type": "ImageObject", url: "https://shoreaquatic.com/logo.jpg" },
  },
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  url: "https://shoreaquatic.com/blog/best-aquarium-plants-for-beginners",
  mainEntityOfPage:
    "https://shoreaquatic.com/blog/best-aquarium-plants-for-beginners",
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "15 Best Aquarium Plants for Beginners (No CO₂)",
  numberOfItems: 15,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anubias" },
    { "@type": "ListItem", position: 2, name: "Java Fern" },
    { "@type": "ListItem", position: 3, name: "Java Moss" },
    { "@type": "ListItem", position: 4, name: "Cryptocoryne wendtii" },
    { "@type": "ListItem", position: 5, name: "Amazon Sword" },
    { "@type": "ListItem", position: 6, name: "Vallisneria" },
    { "@type": "ListItem", position: 7, name: "Dwarf Sagittaria" },
    { "@type": "ListItem", position: 8, name: "Hygrophila polysperma" },
    { "@type": "ListItem", position: 9, name: "Water Wisteria" },
    { "@type": "ListItem", position: 10, name: "Hornwort" },
    { "@type": "ListItem", position: 11, name: "Water Sprite" },
    { "@type": "ListItem", position: 12, name: "Amazon Frogbit" },
    { "@type": "ListItem", position: 13, name: "Salvinia minima" },
    { "@type": "ListItem", position: 14, name: "Elodea / Anacharis" },
    { "@type": "ListItem", position: 15, name: "Marsilea hirsuta" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the easiest aquarium plant that is impossible to kill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Java Moss, Anubias, and Hornwort are nearly indestructible. They require no CO₂, tolerate extreme water chemistry fluctuations, and survive in very dim lighting.",
      },
    },
    {
      "@type": "Question",
      name: "How many hours of light do low-tech aquarium plants need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aim for 6 to 8 hours of moderate light daily (approx 30–50 PAR). Using an automatic timer ensures consistency and prevents algae blooms from over-illumination.",
      },
    },
    {
      "@type": "Question",
      name: "Do aquarium plants need fertilizer if I have fish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but sparingly. Fish waste provides nitrogen, but plants will starve of potassium and iron without a weekly all-in-one liquid fertilizer or root tabs near root feeders.",
      },
    },
    {
      "@type": "Question",
      name: "Is tap water safe for aquarium plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, provided it is dechlorinated first. Many plants like Vallisneria actually thrive in hard tap water, using the calcium and carbonates as a carbon source.",
      },
    },
    {
      "@type": "Question",
      name: "Why did my new aquarium plant turn to mush?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is called melt. Emersed (land-grown) plants shed terrestrial leaves when submerged and regrow aquatic ones. Do not discard the plant — the roots are alive.",
      },
    },
    {
      "@type": "Question",
      name: "How densely should I plant a new aquarium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cover 70% of the substrate on day one. Dense initial planting outcompetes algae for nutrients during the critical first 4–8 weeks of a new tank.",
      },
    },
    {
      "@type": "Question",
      name: "Do aquarium plants take oxygen away from fish at night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plants consume small oxygen amounts at night but produce a large surplus during the day. Nighttime consumption is harmless with decent surface agitation from the filter.",
      },
    },
    {
      "@type": "Question",
      name: "How do I stop pest snails from hitchhiking on new plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a bleach dip (1 part bleach to 19 parts water for 90 seconds, then rinse and dechlorinate) or an Alum soak (1 tbsp per gallon for 24 hours) before adding plants.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need expensive aqua soil for beginner plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Plain inert gravel or sand works for most beginner plants. Epiphytes and floaters need no substrate at all. Root feeders just need root tabs placed every 4–6 inches.",
      },
    },
    {
      "@type": "Question",
      name: "What is the hardiest aquarium plant for a beginner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anubias nana scores 5/5 on both ease of care and forgiveness. It grows on any surface, requires no substrate, tolerates low light, and lives for decades with minimal attention.",
      },
    },
  ],
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
      name: "15 Best Aquarium Plants for Beginners",
      item: "https://shoreaquatic.com/blog/best-aquarium-plants-for-beginners",
    },
  ],
};

// ─── DATA ───────────────────────────────────────────────────────────────────

type FeedType = "Epiphyte" | "Root Feeder" | "Water Column" | "Floater";

interface Score {
  care: number;
  forgiveness: number;
  availability: number;
  impact: number;
  value: number;
}

interface PlantEntry {
  n: number;
  name: string;
  sci: string;
  origin: string;
  type: FeedType;
  position: string;
  light: string;
  lightPar: string;
  co2: string;
  growth: string;
  maxSize: string;
  temp: string;
  ph: string;
  price: string;
  desc: string;
  failureTitle: string;
  failureDetail: string;
  proTip: string;
  score: Score;
  warning?: string; // optional extra caution (e.g., Val + Excel)
}

const plants: PlantEntry[] = [
  {
    n: 1,
    name: "Anubias",
    sci: "Anubias barteri / A. nana",
    origin: "West Africa",
    type: "Epiphyte",
    position: "Midground / Hardscape",
    light: "Low–Medium",
    lightPar: "15–40 PAR",
    co2: "None",
    growth: "Very Slow",
    maxSize: "1–12 in (variety dependent)",
    temp: "72–82°F",
    ph: "6.0–7.5",
    price: "$8–$15",
    desc: "West Africa's gift to planted tanks. Thick, waxy leaves that resist herbivorous fish, attach to any hardscape surface, and thrive under the dim lighting typical of beginner setups. A. nana stays under 3 inches — ideal for nano tanks. One healthy plant, properly cared for, can last decades.",
    failureTitle: "Burying the Rhizome",
    failureDetail: "The horizontal stem (rhizome) must remain fully exposed above the substrate. Covering it blocks oxygen, triggering anaerobic rot that kills the plant within days. Only the roots touch the gravel or sand.",
    proTip: "Position Anubias near the filter outlet — the increased flow keeps its slow-growing leaves free of detritus and green spot algae without any manual cleaning.",
    score: { care: 5, forgiveness: 5, availability: 5, impact: 4, value: 5 },
  },
  {
    n: 2,
    name: "Java Fern",
    sci: "Microsorum pteropus",
    origin: "Southeast Asia",
    type: "Epiphyte",
    position: "Midground / Background",
    light: "Low–Medium",
    lightPar: "15–35 PAR",
    co2: "None",
    growth: "Slow–Moderate",
    maxSize: "8–13 in",
    temp: "68–82°F",
    ph: "6.0–8.0",
    price: "$6–$12",
    desc: "Southeast Asia's most adaptable fern — silica-reinforced leaves make it nearly inedible to Cichlids, Goldfish, and Silver Dollars, giving it a unique niche no other beginner plant fills. Produces daughter plantlets along leaf margins with zero effort, making it one of the most self-propagating plants in the hobby.",
    failureTitle: "Burying the Rhizome",
    failureDetail: "Identical to Anubias — the rhizome must never be buried. If purchased in a pot with rockwool, remove the rockwool entirely before attaching to hardscape. Any buried rhizome section will rot.",
    proTip: "Black spots on leaf undersides are reproductive spores, not disease. A leaf covered in spores can be left to produce dozens of daughter plants — do not discard it.",
    score: { care: 5, forgiveness: 5, availability: 5, impact: 4, value: 5 },
  },
  {
    n: 3,
    name: "Java Moss",
    sci: "Taxiphyllum barbieri",
    origin: "Southeast Asia",
    type: "Epiphyte",
    position: "Foreground / Any Surface",
    light: "Low–High",
    lightPar: "10–50+ PAR",
    co2: "None",
    growth: "Moderate",
    maxSize: "Indeterminate",
    temp: "60–86°F",
    ph: "5.0–8.0",
    price: "$5–$8",
    desc: "No plant in this guide provides more biological value per dollar. Java Moss creates vast surface area for biofilm — the invisible microbial food that shrimp fry and small fish depend on. Under high light it forms a dense, dark green bush; under low light, a loose, elegant curtain. Tolerates temperature swings that would kill most other plants.",
    failureTitle: "Algae Infestation",
    failureDetail: "Dense moss traps detritus and blocks light to its inner layers. Once hair algae takes hold inside a moss clump, it is nearly impossible to remove without discarding the entire portion. Thin regularly and keep nutrients in check.",
    proTip: "To grow a moss wall, sandwich a thin layer between two pieces of suction-cup plastic mesh. The moss grows through and hides the mesh within 4–6 weeks — no glue, no thread.",
    score: { care: 5, forgiveness: 5, availability: 5, impact: 3, value: 5 },
  },
  {
    n: 4,
    name: "Cryptocoryne wendtii",
    sci: "Cryptocoryne wendtii",
    origin: "Sri Lanka",
    type: "Root Feeder",
    position: "Midground",
    light: "Low–Medium",
    lightPar: "15–40 PAR",
    co2: "None / Optional",
    growth: "Slow–Moderate",
    maxSize: "6–8 in",
    temp: "72–82°F",
    ph: "6.0–8.0",
    price: "$7–$12",
    desc: "Sri Lanka's most beginner-forgiving Crypt. Forms attractive rosettes in shades of green, brown, and red — color intensity deepens with stronger light. Once its root system establishes in inert substrate with root tabs, it sends runners in every direction, filling midground space with virtually no intervention. The definition of 'plant it and forget it.'",
    failureTitle: "Misreading Crypt Melt",
    failureDetail: "After transplanting, Crypt wendtii often sheds all its leaves within 1–2 weeks. Beginners assume the plant is dead and discard it. The root system is fully alive and will regrow new, often better-adapted aquatic leaves within 3–6 weeks. Leave it alone.",
    proTip: "Never move an established Crypt. It rewards stability above all else. Pick the spot carefully before planting — relocation triggers another melt cycle.",
    score: { care: 4, forgiveness: 3, availability: 5, impact: 4, value: 5 },
  },
  {
    n: 5,
    name: "Amazon Sword",
    sci: "Echinodorus bleheri",
    origin: "Amazon Basin, South America",
    type: "Root Feeder",
    position: "Background / Centerpiece",
    light: "Medium",
    lightPar: "30–50 PAR",
    co2: "None / Optional",
    growth: "Fast (once settled)",
    maxSize: "16–20+ in",
    temp: "72–82°F",
    ph: "6.5–7.5",
    price: "$8–$15",
    desc: "The statement plant of the beginner world. A single healthy Amazon Sword can completely transform a mid-to-large aquarium — one plant can fill an entire corner with bold, broad leaves. Its size requires a minimum 29-gallon tank. Growth is primarily limited by substrate nutrients, not carbon, making root tabs far more important than CO₂ for this species.",
    failureTitle: "Nutrient Starvation",
    failureDetail: "Amazon Swords are heavy root feeders. Without root tabs in inert substrate, they develop chlorosis — leaves turn pale yellow, then transparent, then collapse. Place 2–3 tabs in a ring around the crown and replace every 3–4 months.",
    proTip: "When the Sword sends up a long flowering stalk, do not cut it. Wait — you can often harvest 3–5 fully formed baby plants from that single stalk, each ready to plant independently.",
    score: { care: 4, forgiveness: 4, availability: 5, impact: 5, value: 4 },
  },
  {
    n: 6,
    name: "Vallisneria",
    sci: "Vallisneria spiralis",
    origin: "Global distribution",
    type: "Root Feeder",
    position: "Background",
    light: "Low–High",
    lightPar: "15–60+ PAR",
    co2: "None",
    growth: "Fast",
    maxSize: "20–40 in",
    temp: "65–85°F",
    ph: "7.0–8.5",
    price: "$4–$8 per bunch",
    desc: "A true survivor — found on every inhabited continent. Provides lush background screening via long, grass-like leaves and spreads rapidly via runners. Uniquely capable of biogenic decalcification: when free CO₂ is scarce, it extracts carbon directly from carbonates dissolved in the water, which is why hard tap water suits it so well.",
    failureTitle: "Liquid Carbon Poisoning",
    failureDetail: "Products containing glutaraldehyde (Seachem Excel, TNC Carbon, Easycarbo) are acutely toxic to Vallisneria. Even standard doses cause complete leaf melt within 48–72 hours. If you dose liquid carbon, do not keep Val.",
    proTip: "If Val stalls with no runners and pale leaves, check GH and KH first — it struggles in soft, acidic water. Target GH 8+ and KH 6+ for vigorous growth.",
    warning: "⚠ Toxic to liquid carbon (glutaraldehyde) products — do not combine.",
    score: { care: 5, forgiveness: 4, availability: 5, impact: 5, value: 5 },
  },
  {
    n: 7,
    name: "Dwarf Sagittaria",
    sci: "Sagittaria subulata",
    origin: "North & South America — Atlantic Coast",
    type: "Root Feeder",
    position: "Foreground / Carpet",
    light: "Medium",
    lightPar: "30–60 PAR",
    co2: "None / Optional",
    growth: "Fast",
    maxSize: "2–12 in (light dependent)",
    temp: "68–82°F",
    ph: "6.0–8.0",
    price: "$6–$9 per pot",
    desc: "The accessible carpet. Unlike HC Cuba or Monte Carlo, Dwarf Sag carpets without CO₂, high light, or fine substrate. It morphs by light intensity: in low light it stretches to 10–12 inches as a grassy midground; under medium-high light it stays a compact 2–3 inch foreground carpet. One pot fills a 10-gallon foreground in 8–12 weeks via runners.",
    failureTitle: "Iron and Nutrient Deficiency",
    failureDetail: "Under medium-to-high light without adequate root nutrition, Dwarf Sag develops yellowing and leaf melt that mirrors other plant problems. Root tabs placed every 3 inches across the carpet area prevent this entirely.",
    proTip: "Accelerate carpeting by 'teasing' runners into open substrate gaps and placing a root tab near each new daughter plant. The carpet fills 2–3× faster than letting runners establish naturally.",
    score: { care: 5, forgiveness: 5, availability: 4, impact: 5, value: 5 },
  },
  {
    n: 8,
    name: "Hygrophila polysperma",
    sci: "Hygrophila polysperma",
    origin: "India, Malaysia",
    type: "Water Column",
    position: "Background",
    light: "Low–High",
    lightPar: "10–60+ PAR",
    co2: "None",
    growth: "Very Fast",
    maxSize: "18+ in",
    temp: "64–82°F",
    ph: "5.0–8.5",
    price: "$5–$7 per bunch",
    desc: "The fastest stem plant on this list and one of the most efficient nutrient exporters available. An entire bunch of Hygrophila polysperma can measurably reduce nitrates within 48 hours — making it invaluable for overstocked tanks and new setups battling ammonia. Under higher light intensity, leaf tips flush pink or orange.",
    failureTitle: "Canopy Shading",
    failureDetail: "If the top growth becomes too dense, lower stems are cut off from light, lose their leaves, and rot. This causes cloudiness and ammonia spikes. Trim the tops regularly and replant cuttings rather than leaving bare lower stems.",
    proTip: "In tanks chronically above 40ppm nitrate, plant a large background mass of Hygrophila polysperma. It will bring nitrates to near-zero within days — more reliably than any filter.",
    score: { care: 5, forgiveness: 5, availability: 3, impact: 5, value: 4 },
  },
  {
    n: 9,
    name: "Water Wisteria",
    sci: "Hygrophila difformis",
    origin: "Southeast Asia",
    type: "Water Column",
    position: "Midground / Background",
    light: "Medium",
    lightPar: "30–50 PAR",
    co2: "None",
    growth: "Fast",
    maxSize: "15–20 in",
    temp: "72–82°F",
    ph: "6.5–7.5",
    price: "$6–$10",
    desc: "Exhibits heterophylly — the same plant produces dramatically different leaf shapes based on available light. Simple, undivided leaves in low light transform into intricate, lace-like fronds under higher PAR. This visual flexibility makes it one of the most aesthetically versatile plants in the hobby. Wide growth habit provides excellent hiding cover for fry and shrimp.",
    failureTitle: "Lower Leaf Loss",
    failureDetail: "When the canopy grows dense and blocks light from reaching the lower stem, leaves fall off and the bare stem rots. Trim the top 30% every 2 weeks and replant the cuttings to maintain a bushy, full shape from base to surface.",
    proTip: "Pin Water Wisteria stems horizontally across the substrate and weight them down. Each node sprouts a vertical shoot — this creates a dense carpet effect without any CO₂ or fine substrate.",
    score: { care: 4, forgiveness: 4, availability: 5, impact: 5, value: 4 },
  },
  {
    n: 10,
    name: "Hornwort",
    sci: "Ceratophyllum demersum",
    origin: "Global (cosmopolitan)",
    type: "Water Column",
    position: "Floater / Background",
    light: "Low–Moderate",
    lightPar: "15–40 PAR",
    co2: "None",
    growth: "Very Fast",
    maxSize: "10+ ft (trimmed as needed)",
    temp: "59–86°F",
    ph: "6.0–9.0",
    price: "$4–$6 per bunch",
    desc: "No roots, no substrate, no problem. Hornwort floats freely or tucks against driftwood and grows at a genuinely alarming rate — up to 2 inches per day under good conditions. Its wide temperature and pH tolerance makes it one of the few plants viable across cold, tropical, and brackish setups. Mild allelopathic properties inhibit certain algae species.",
    failureTitle: "Needle Drop",
    failureDetail: "In response to sudden parameter shifts — temperature swings, pH crashes, large water changes — Hornwort sheds its needles en masse. The plant survives, but the clean-up is substantial and the needles can clog filters. Stabilize parameters before introducing it.",
    proTip: "Use a dense floating mass of Hornwort to cycle a new tank before adding fish. Its rapid ammonia absorption can bring a new tank's cycle from weeks to days when combined with seeded filter media.",
    score: { care: 5, forgiveness: 3, availability: 5, impact: 3, value: 5 },
  },
  {
    n: 11,
    name: "Water Sprite",
    sci: "Ceratopteris thalictroides",
    origin: "Tropical regions worldwide",
    type: "Water Column",
    position: "Background / Floater",
    light: "Medium",
    lightPar: "30–50 PAR",
    co2: "None / Optional",
    growth: "Fast",
    maxSize: "12–15 in",
    temp: "68–82°F",
    ph: "6.5–7.5",
    price: "$6–$9",
    desc: "A tropical aquatic fern that operates in two completely different modes. Planted in substrate, it becomes a structured, feathery midground or background plant. Floated at the surface, it grows 2–3× faster, providing dense surface coverage and the trailing root curtains that Betta fish, livebearers, and shrimp instinctively seek. Produces adventitious plantlets along leaf margins.",
    failureTitle: "Leaf Transparency",
    failureDetail: "Transparent, mushy new leaves signal iron deficiency or insufficient light. Unlike melt, this does not resolve on its own — add a liquid fertilizer with iron (or an all-in-one) and ensure minimum 30 PAR at the plant's location.",
    proTip: "When floated, Water Sprite's long, dangling roots reach 6–12 inches below the surface. Fish actively swim through them. For breeding setups, these root curtains are the single best spawning site you can provide without driftwood.",
    score: { care: 5, forgiveness: 4, availability: 5, impact: 4, value: 5 },
  },
  {
    n: 12,
    name: "Amazon Frogbit",
    sci: "Limnobium laevigatum",
    origin: "Central & South America",
    type: "Floater",
    position: "Surface",
    light: "Medium–High (at surface)",
    lightPar: "40–80+ PAR at surface",
    co2: "None",
    growth: "Fast",
    maxSize: "1–3 in rosettes; 12 in roots",
    temp: "64–82°F",
    ph: "6.0–7.5",
    price: "$6–$8 per portion",
    desc: "Oversized, buoyant rosettes with spongy air-pocket undersides and trailing roots up to 12 inches long — roots that fish and shrimp instinctively colonize as hiding and grazing territory. Spreads via horizontal stolons, doubling coverage every 7–10 days under good conditions. Provides powerful surface shade that naturally suppresses algae without chemicals.",
    failureTitle: "Condensation Rot",
    failureDetail: "Water droplets from the glass lid sitting on top of the spongy leaves cause them to rot and melt from the contact point outward. Ensure a small gap between the lid and water surface for airflow, or tilt the lid slightly to direct drips to the glass.",
    proTip: "Contain Frogbit with a floating ring made from airline tubing zip-tied into a circle. This keeps it in a calm, low-flow zone away from filter intakes while allowing you to leave the rest of the tank freely circulating.",
    score: { care: 4, forgiveness: 3, availability: 5, impact: 4, value: 5 },
  },
  {
    n: 13,
    name: "Salvinia minima",
    sci: "Salvinia minima",
    origin: "Central & South America",
    type: "Floater",
    position: "Surface",
    light: "Low–High",
    lightPar: "15–60+ PAR",
    co2: "None",
    growth: "Fast",
    maxSize: "0.5–1 cm leaves",
    temp: "60–85°F",
    ph: "6.0–8.0",
    price: "$5–$8 per portion",
    desc: "Superior to duckweed in nearly every way: more attractive, far less invasive, and controllable without hours of net work. Tiny velvety pads covered in superhydrophobic hairs repel water — the leaves never sink. Absorbs dissolved nutrients through submerged modified fronds at a rate that genuinely starves competing algae. Suitable for any tank size.",
    failureTitle: "Overgrowth",
    failureDetail: "Salvinia covering 100% of the surface chokes oxygen gas exchange between water and atmosphere, which can suffocate fish — especially in warm, heavily stocked tanks at night. Always leave 20–30% of the surface open.",
    proTip: "If Salvinia leaves turn white or pale, the liquid fertilizer is likely missing iron or magnesium. Add a complete micronutrient mix and the leaves green up within a week.",
    score: { care: 5, forgiveness: 5, availability: 4, impact: 4, value: 5 },
  },
  {
    n: 14,
    name: "Elodea / Anacharis",
    sci: "Egeria densa",
    origin: "South America",
    type: "Water Column",
    position: "Background / Floater",
    light: "Low–High",
    lightPar: "10–60+ PAR",
    co2: "None",
    growth: "Fast",
    maxSize: "24+ in",
    temp: "60–82°F",
    ph: "6.5–8.0",
    price: "$4–$6 per bunch",
    desc: "Introduced to nearly every temperate freshwater system on earth — Elodea is the definition of adaptable. Exceptional at oxygenating water and exporting nitrates. Particularly well-suited to Goldfish and Koi tanks where it grows fast enough to outpace the damage from grazing. Prefers cooler water and is one of the few plants that thrives in unheated setups.",
    failureTitle: "High Temperature Melt",
    failureDetail: "In tropical tanks held above 82°F (28°C), Elodea stems dissolve into clear, stringy mush within days. It is not a tropical plant. For warm-water setups above 78°F, substitute Water Wisteria or Hygrophila polysperma instead.",
    proTip: "If Elodea stems look pale or brittle, add crushed cuttlebone to the filter. The extra calcium carbonate it releases strengthens stem cell walls and restores the rich green color.",
    score: { care: 5, forgiveness: 4, availability: 5, impact: 3, value: 5 },
  },
  {
    n: 15,
    name: "Marsilea hirsuta",
    sci: "Marsilea hirsuta",
    origin: "Australia",
    type: "Root Feeder",
    position: "Foreground Carpet",
    light: "Low–Medium",
    lightPar: "15–40 PAR",
    co2: "None",
    growth: "Slow–Moderate",
    maxSize: "1–3 in",
    temp: "65–80°F",
    ph: "6.0–7.5",
    price: "$9–$14 per pot",
    desc: "The only genuine low-tech carpet option on this list. HC Cuba and Monte Carlo demand CO₂, high light, and fine substrate. Marsilea hirsuta demands none of these. It forms a clover-like mat of small, rounded leaves that is nearly maintenance-free once established — slow to start, then virtually self-sustaining. The best-kept secret in beginner planted tanks.",
    failureTitle: "Algae Smothering",
    failureDetail: "Because Marsilea grows slowly, it cannot outcompete algae for nutrients in an imbalanced tank the way fast-growers can. Introduce it only after the tank has cycled and parameters are stable. Fast-growing stem plants or floaters act as algae shields during the first 4–6 weeks.",
    proTip: "Separate individual rosettes 1–2 inches apart when planting rather than keeping the pot clump together. Individual spacing allows runners to fill gaps far faster than a single dense clump would spread.",
    score: { care: 4, forgiveness: 4, availability: 3, impact: 5, value: 4 },
  },
];

interface Scenario {
  label: string;
  icon: string;
  colorClass: string;
  borderClass: string;
  picks: string[];
  why: string;
}

const scenarios: Scenario[] = [
  {
    label: "Nano Tank (5–10 gal)",
    icon: "🔬",
    colorClass: "text-violet-300",
    borderClass: "border-violet-400/20",
    picks: ["Anubias nana", "Java Moss", "Marsilea hirsuta"],
    why: "Slow growth, small leaf size, and proportional scale. None of these will overrun a small tank or require constant trimming.",
  },
  {
    label: "Algae-Plagued Tank",
    icon: "🌊",
    colorClass: "text-emerald-300",
    borderClass: "border-emerald-400/20",
    picks: ["Hornwort", "Salvinia minima", "Hygrophila polysperma"],
    why: "High-biomass fast-growers that strip the water column of excess nutrients faster than algae can consume them. Add all three at once for best effect.",
  },
  {
    label: "Shrimp Tank",
    icon: "🦐",
    colorClass: "text-pink-300",
    borderClass: "border-pink-400/20",
    picks: ["Java Moss", "Amazon Frogbit", "Water Sprite"],
    why: "Java Moss provides biofilm grazing essential for fry. Frogbit and Water Sprite create root curtains for molting cover and rapidly absorb ammonia — lethal to delicate shrimp.",
  },
  {
    label: "Coldwater / Unheated",
    icon: "❄️",
    colorClass: "text-sky-300",
    borderClass: "border-sky-400/20",
    picks: ["Elodea / Anacharis", "Hornwort", "Java Moss"],
    why: "These three tolerate 60–65°F without slowing significantly. Elodea actively thrives in cool water. Most tropical species stall or rot below 68°F.",
  },
  {
    label: "Gravel or Sand Only",
    icon: "🪨",
    colorClass: "text-amber-300",
    borderClass: "border-amber-400/20",
    picks: ["Anubias", "Java Fern", "Vallisneria"],
    why: "Anubias and Java Fern are epiphytes that need no substrate nutrients. Vallisneria pulls carbon from water carbonates and thrives with basic root tabs in inert gravel or sand.",
  },
  {
    label: "First Tank Ever",
    icon: "🏆",
    colorClass: "text-aqua-300",
    borderClass: "border-aqua-400/20",
    picks: ["Amazon Sword", "Java Fern", "Hornwort"],
    why: "Covers all ecological roles: a dramatic centerpiece root feeder, an indestructible epiphyte, and a rapid-growth biological filter that protects fish from ammonia spikes during cycling.",
  },
];

interface FaqItem { q: string; a: string }

const faqItems: FaqItem[] = [
  { q: "What is the easiest aquarium plant that is impossible to kill?", a: "Java Moss, Anubias, and Hornwort are nearly indestructible. They require no CO₂, tolerate extreme water chemistry fluctuations, and survive in very dim lighting. Anubias nana specifically scores 5/5 on both ease of care and forgiveness — it can live for decades with minimal attention." },
  { q: "How many hours of light do low-tech plants need?", a: "6–8 hours of moderate light daily (approximately 30–50 PAR) covers most of the plants on this list. Use an automatic timer — inconsistent light schedules stress plants and trigger algae blooms far more than consistent moderate light does." },
  { q: "Do aquarium plants need fertilizer if I have fish?", a: "Yes, but sparingly. Fish waste provides nitrogen and phosphorus but leaves plants deficient in potassium and iron over time. A weekly all-in-one liquid fertilizer covers water-column feeders and epiphytes. Root tabs near Crypts, Swords, and Dwarf Sag handle the root feeders." },
  { q: "Is tap water safe for aquarium plants?", a: "Yes, once dechlorinated with a water conditioner. Many plants on this list — especially Vallisneria — actively prefer hard tap water. The calcium and carbonates in hard tap water provide an alternative carbon source for plants when CO₂ levels are low." },
  { q: "Why did my new aquarium plant turn to mush?", a: "Almost certainly emersed-to-submersed melt. Plants grown out of water at farms must rebuild all their leaf tissue for underwater conditions. They shed terrestrial leaves first — often completely — then regrow aquatic ones from the roots. Do not discard the plant. Leave the roots in the substrate and wait 3–6 weeks." },
  { q: "How densely should I plant a new aquarium?", a: "Aim to cover 70% of the substrate on day one. Dense initial planting creates biological competition — plants outcompete algae for the same nutrients during the critical first 4–8 weeks before the nitrogen cycle fully stabilizes. Sparse planting hands algae an uncontested environment." },
  { q: "Do aquarium plants take oxygen away from fish at night?", a: "Yes, but not at a dangerous level in well-oxygenated tanks. Plants respire at night (consuming O₂) but produce a far larger surplus during their light period. As long as the filter creates some surface agitation for gas exchange, nighttime plant respiration poses no risk to fish." },
  { q: "How do I stop pest snails from hitchhiking on new plants?", a: "A bleach dip (1 part bleach to 19 parts water, 90 seconds, then a thorough rinse and dechlorinator soak) kills snails and eggs reliably. An Alum soak (1 tablespoon per gallon, 24 hours) is gentler on delicate plants and effective against most hitchhikers including hydra and planaria." },
  { q: "Do I need expensive aqua soil for beginner plants?", a: "No. Plain inert gravel or sand works for most of these 15 plants. Epiphytes (Anubias, Java Fern, mosses) and floaters need no substrate nutrients at all. Root feeders (Crypts, Swords, Dwarf Sag) just need root tabs placed every 4–6 inches — a fraction of the cost of active soil." },
  { q: "What is the hardiest aquarium plant for a beginner?", a: "Anubias nana. It scores 5/5 on care and forgiveness, grows on any surface, requires no substrate, thrives in low light, survives temperature swings from 68–82°F, and is left alone by nearly every species of fish. One plant purchased in 2026 could still be thriving in 2040." },
];

// ─── HELPERS ────────────────────────────────────────────────────────────────

function typeColor(type: FeedType): string {
  switch (type) {
    case "Epiphyte": return "bg-violet-400/10 text-violet-300 border-violet-400/20";
    case "Root Feeder": return "bg-amber-400/10 text-amber-300 border-amber-400/20";
    case "Water Column": return "bg-cyan-400/10 text-cyan-300 border-cyan-400/20";
    case "Floater": return "bg-emerald-400/10 text-emerald-300 border-emerald-400/20";
    default: return "bg-white/5 text-slate-400 border-white/10";
  }
}

function ScoreDots({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <span className="tracking-tight">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < value ? "text-aqua-400" : "text-slate-700"}>●</span>
      ))}
    </span>
  );
}

function growthColor(g: string): string {
  if (g.includes("Very Fast")) return "text-red-400";
  if (g.includes("Fast")) return "text-amber-400";
  if (g.includes("Moderate")) return "text-yellow-400";
  return "text-slate-400";
}

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function BestBeginnnerPlantsPage() {
  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-ocean-800 to-ocean-950 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-aqua-400 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-aqua-400 transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-slate-400">Beginner Plants</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">Buyer&apos;s Guide</span>
            <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] text-slate-500">18 min read</span>
            <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] text-slate-500">April 26, 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            15 Best Aquarium Plants for{" "}
            <span className="text-aqua-400">Beginners</span>
            <br className="hidden sm:block" /> (No CO₂ Required)
          </h1>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed max-w-3xl">
            Every plant ranked by a 5-dimension beginner score — with the #1 failure mode, a pro tip, and water parameters for each. Includes scenario picks for nano tanks, shrimp setups, algae problems, and coldwater tanks.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* ── What is Low-Tech ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What Does &ldquo;Low-Tech&rdquo; Actually Mean?</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "CO₂",
                icon: "💨",
                value: "2–5 ppm",
                note: "From fish respiration + surface exchange. Injected tanks run 20–30 ppm. Every plant on this list grows at ambient levels.",
              },
              {
                label: "Light",
                icon: "💡",
                value: "30–50 PAR",
                note: "Medium light. Low-tech tanks cap at medium to prevent plants from outstripping available carbon and triggering algae.",
              },
              {
                label: "Fertilization",
                icon: "🌿",
                value: "Lean Dosing",
                note: "Weekly all-in-one liquid ferts + root tabs near heavy root feeders. No massive weekly 50% water changes required.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{item.label}</p>
                <p className="text-lg font-bold text-white mb-2">{item.value}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Score Legend ─────────────────────────────────────────────────── */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">How Plants Are Scored (1–5 dots each)</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs text-slate-500">
            {["Ease of Care", "Forgives Mistakes", "Availability", "Visual Impact", "Value for Money"].map((label) => (
              <div key={label} className="text-center">
                <ScoreDots value={4} />
                <p className="mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── The 15 Plants ────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">The 15 Plants</h2>
          <div className="space-y-6">
            {plants.map((p) => (
              <div key={p.n} id={`plant-${p.n}`} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                {/* Card Header */}
                <div className="flex items-start gap-4 p-6 pb-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-aqua-400/10 border border-aqua-400/20 text-aqua-400 text-sm font-bold flex items-center justify-center">
                    {p.n}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white">{p.name}</h3>
                      <span className={`text-[10px] font-medium border rounded-full px-2 py-0.5 ${typeColor(p.type)}`}>{p.type}</span>
                    </div>
                    <p className="text-xs text-slate-500 italic mb-1">{p.sci}</p>
                    <p className="text-xs text-slate-600">Origin: {p.origin} &middot; {p.position}</p>
                  </div>
                  <div className="hidden sm:block text-right flex-shrink-0">
                    <p className="text-xs text-slate-600 mb-0.5">Price</p>
                    <p className="text-sm font-semibold text-white">{p.price}</p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-0 border-t border-white/5">
                  {[
                    { label: "Light", value: p.light, sub: p.lightPar },
                    { label: "CO₂", value: p.co2, sub: "" },
                    { label: "Growth", value: p.growth, sub: "", color: growthColor(p.growth) },
                    { label: "Max Size", value: p.maxSize, sub: "" },
                    { label: "Temp", value: p.temp, sub: `pH ${p.ph}` },
                  ].map((stat, i) => (
                    <div key={stat.label} className={`px-4 py-3 text-center ${i < 4 ? "border-r border-white/5" : ""} ${i === 0 || i === 2 ? "sm:border-l-0" : ""}`}>
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-600 mb-0.5">{stat.label}</p>
                      <p className={`text-xs font-medium ${stat.color ?? "text-white"}`}>{stat.value}</p>
                      {stat.sub && <p className="text-[9px] text-slate-600">{stat.sub}</p>}
                    </div>
                  ))}
                </div>

                <div className="p-6 pt-4 space-y-4">
                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>

                  {/* Warning (optional) */}
                  {p.warning && (
                    <div className="rounded-lg border border-orange-400/20 bg-orange-400/5 px-4 py-2.5">
                      <p className="text-xs text-orange-300">{p.warning}</p>
                    </div>
                  )}

                  {/* Failure mode + Pro tip */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-red-400/20 bg-red-400/5 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-red-400 mb-1.5">
                        ⚠ #1 Failure Mode: {p.failureTitle}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">{p.failureDetail}</p>
                    </div>
                    <div className="rounded-lg border border-aqua-400/20 bg-aqua-400/5 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-aqua-400 mb-1.5">
                        ✦ Pro Tip
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">{p.proTip}</p>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="border-t border-white/5 pt-3">
                    <div className="grid grid-cols-5 gap-1 text-center">
                      {[
                        { label: "Care", val: p.score.care },
                        { label: "Forgives", val: p.score.forgiveness },
                        { label: "Available", val: p.score.availability },
                        { label: "Impact", val: p.score.impact },
                        { label: "Value", val: p.score.value },
                      ].map((s) => (
                        <div key={s.label}>
                          <ScoreDots value={s.val} />
                          <p className="text-[9px] text-slate-600 mt-0.5">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Scenario Picks ───────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Best Plants by Situation</h2>
          <p className="text-slate-400 text-sm mb-6">Not all beginner tanks are the same. Here are the top 3 picks for six common real-world setups.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((s) => (
              <div key={s.label} className={`rounded-xl border ${s.borderClass} bg-white/[0.03] p-5`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{s.icon}</span>
                  <p className={`font-bold text-sm ${s.colorClass}`}>{s.label}</p>
                </div>
                <ol className="space-y-1 mb-3">
                  {s.picks.map((pick, i) => (
                    <li key={pick} className="flex gap-2 text-xs text-white">
                      <span className="text-slate-600 flex-shrink-0">{i + 1}.</span>
                      {pick}
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 leading-relaxed border-t border-white/5 pt-3">{s.why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Starter Stack ────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">The Beginner Starter Stack</h2>
          <p className="text-slate-400 text-sm mb-6">A planted tank works best as a system — not a random collection of plants. This combination covers all ecological roles and protects against algae from day one.</p>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden mb-4">
            {[
              { role: "Background", plant: "Vallisneria or Hygrophila polysperma", why: "Fast-growing column feeders that absorb ammonia during cycling and provide vertical structure. Plant 4–6 stems or a bunch in the rear corners." },
              { role: "Midground Epiphyte", plant: "Anubias nana", why: "The indestructible anchor plant. Attach 2–3 to driftwood or rock. Requires nothing from the substrate and lives indefinitely." },
              { role: "Foreground", plant: "Dwarf Sagittaria or Crypt wendtii", why: "Sagittaria carpets quickly via runners; Crypts fill gaps once established. Both do fine in inert substrate with root tabs." },
              { role: "Surface Floater", plant: "Salvinia minima", why: "Absorbs nutrients directly, reduces light to naturally suppress algae, and provides surface cover for shy species and fry." },
              { role: "Bonus: Hardscape", plant: "Java Moss on a piece of driftwood", why: "Instantly creates a natural, mature look and provides critical biofilm grazing surface for shrimp and small fry." },
            ].map((item, i) => (
              <div key={item.role} className={`flex gap-4 p-4 ${i < 4 ? "border-b border-white/5" : ""}`}>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 text-slate-500 text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <div className="flex flex-wrap gap-2 items-center mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.role}</span>
                    <span className="text-sm font-semibold text-white">{item.plant}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.why}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
            <p className="text-xs font-semibold text-emerald-400 mb-1">Why fast-growers protect slow-growers</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              During the first 4–8 weeks, a new tank is biologically unstable. Ammonia and nitrite fluctuate while beneficial bacteria colonies establish. Fast-growing plants like Vallisneria and Hygrophila absorb these compounds before algae can exploit them — acting as a biological shield for the slow-growing Anubias and Crypts beneath. Once the tank matures and parameters stabilize at 0 ammonia / 0 nitrite, thin the fast-growers back to give the accent plants room to grow.
            </p>
          </div>
        </section>

        {/* ── Buying Guide ─────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Buying Guide: What to Look For</h2>

          {/* Plant forms */}
          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            {[
              {
                form: "Tissue Culture (TC)",
                badge: "Pest-Free",
                badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
                pros: ["100% free of snails, algae, and pathogens", "Lab-sterile — no quarantine required"],
                cons: ["High melt risk during submersed transition", "Smaller initial size for the price"],
              },
              {
                form: "Emersed Grown",
                badge: "Common at LFS",
                badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
                pros: ["Larger plants, more visual impact at purchase", "Readily available at most local fish stores"],
                cons: ["Will undergo melt as it transitions to submersed growth", "May carry hitchhikers — quarantine recommended"],
              },
              {
                form: "Submersed Grown",
                badge: "Fastest Adapting",
                badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
                pros: ["Already adapted to underwater life — no melt phase", "Transplants with minimal stress"],
                cons: ["Highest risk of carrying pests and algae", "Quarantine strongly recommended before main tank"],
              },
            ].map((f) => (
              <div key={f.form} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-white text-sm">{f.form}</p>
                  <span className={`text-[10px] font-medium border rounded-full px-2 py-0.5 ${f.badgeColor}`}>{f.badge}</span>
                </div>
                <ul className="space-y-1.5">
                  {f.pros.map((p) => (
                    <li key={p} className="text-xs text-slate-400 flex gap-1.5"><span className="text-emerald-400 flex-shrink-0">✓</span>{p}</li>
                  ))}
                  {f.cons.map((c) => (
                    <li key={c} className="text-xs text-slate-400 flex gap-1.5"><span className="text-slate-600 flex-shrink-0">✗</span>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quarantine & Disinfection */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mb-4">
            <h3 className="font-semibold text-white mb-4">Quarantine & Disinfection</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold text-white mb-2">Bleach Dip (Most Effective)</p>
                <ol className="space-y-1.5">
                  {["Mix 1 part plain bleach to 19 parts water (approx. 5% solution)", "Submerge plant for 90–120 seconds — no longer", "Remove and rinse thoroughly under running water for 60 seconds", "Soak in dechlorinated water with 2× normal water conditioner dose for 10 minutes", "Safe for most hardy plants. Avoid on delicate mosses and Hornwort"].map((step, i) => (
                    <li key={i} className="text-xs text-slate-400 flex gap-2"><span className="text-slate-600 flex-shrink-0">{i + 1}.</span>{step}</li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="text-xs font-semibold text-white mb-2">Hydrogen Peroxide Dip (Gentler)</p>
                <ol className="space-y-1.5">
                  {["Mix 3% H₂O₂ with water at a 1:3 ratio", "Submerge plant for 5–20 minutes depending on sensitivity", "Rinse thoroughly and return to a holding container", "Effective against algae and soft-bodied pests. Less effective on snail eggs than bleach", "Safe for most plants including mosses and delicate stems"].map((step, i) => (
                    <li key={i} className="text-xs text-slate-400 flex gap-2"><span className="text-slate-600 flex-shrink-0">{i + 1}.</span>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Health indicators */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <p className="text-xs font-semibold text-emerald-400 mb-2">✓ Signs of a Healthy Plant</p>
              <ul className="space-y-1">
                {["Bright, saturated pigmentation (green, red, brown)", "Firm, rigid stems that hold their shape", "White or light tan roots with visible fine root hairs", "New growth visible at the tips or crown"].map((s) => (
                  <li key={s} className="text-xs text-slate-400 flex gap-1.5"><span className="text-emerald-400 flex-shrink-0">·</span>{s}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4">
              <p className="text-xs font-semibold text-red-400 mb-2">✗ Red Flags at Purchase</p>
              <ul className="space-y-1">
                {["Mushy, transparent, or collapsing stems or leaves", "Black, rotting crown or rhizome tissue", "Stringy green or brown algae coating the leaves", "Slime or sulfurous odor from the packaging"].map((s) => (
                  <li key={s} className="text-xs text-slate-400 flex gap-1.5"><span className="text-red-400 flex-shrink-0">·</span>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Fertilization Basics ─────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Fertilization in a Low-Tech Tank</h2>
          <p className="text-slate-400 text-sm mb-6">
            Plants are governed by Liebig&apos;s Law of the Minimum — growth is limited by the scarcest resource. In a low-tech tank, the limiting factor is almost always carbon. The second constraint is usually a micronutrient deficiency that fish waste cannot supply.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            {[
              {
                deficiency: "Nitrogen (N)",
                color: "amber",
                borderClass: "border-amber-400/20",
                bgClass: "bg-amber-400/5",
                textClass: "text-amber-300",
                symptom: "Old leaves turn yellow or pale, starting at the tips. The yellowing spreads from outer to inner leaves.",
                fix: "Increase fish stocking slightly, reduce water change frequency, or add a nitrogen-containing liquid fertilizer.",
              },
              {
                deficiency: "Iron (Fe)",
                color: "red",
                borderClass: "border-red-400/20",
                bgClass: "bg-red-400/5",
                textClass: "text-red-300",
                symptom: "New leaves emerge pale white or yellow while leaf veins remain visibly dark green. Interveinal chlorosis on young tissue.",
                fix: "Add a liquid fertilizer with chelated iron (Fe-EDTA or Fe-DTPA). Root tabs near iron-hungry plants like Amazon Swords.",
              },
              {
                deficiency: "Potassium (K)",
                color: "violet",
                borderClass: "border-violet-400/20",
                bgClass: "bg-violet-400/5",
                textClass: "text-violet-300",
                symptom: "Tiny pinholes develop in older leaves, often ringed with yellow or brown edges. Leaves look moth-eaten.",
                fix: "Fish waste does not supply potassium. A weekly all-in-one liquid fertilizer or a dedicated potassium supplement is required.",
              },
            ].map((d) => (
              <div key={d.deficiency} className={`rounded-xl border ${d.borderClass} ${d.bgClass} p-4`}>
                <p className={`text-xs font-semibold ${d.textClass} mb-1`}>Deficiency: {d.deficiency}</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-2"><strong className="text-white">Symptom:</strong> {d.symptom}</p>
                <p className="text-xs text-slate-400 leading-relaxed"><strong className="text-white">Fix:</strong> {d.fix}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-semibold text-white mb-3">Weekly Low-Tech Routine (20-gallon example)</h3>
            <div className="grid gap-3 sm:grid-cols-3 text-xs text-slate-400">
              <div>
                <p className="font-semibold text-white mb-1">Lighting</p>
                <p>6–8 hours via timer. Medium LED (30–50 PAR at substrate). Consistent schedule — plants hate irregular light cycles.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Fertilization</p>
                <p>Dose all-in-one liquid ferts once weekly. Check root tabs near Crypts and Swords every 3–4 months and replace when depleted.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Water Changes</p>
                <p>25–30% weekly is standard. If nitrates read 0 ppm, your plants are starving — reduce the water change frequency or add more fertilizer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Common Mistakes ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">6 Mistakes That Guarantee Failure</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { n: 1, title: "Buying CO₂-Demanding Plants", detail: "HC Cuba, Glossostigma, and Rotala indica appear in beginner articles but demand injected CO₂ and high light. Without them, they rot within 2 weeks. Always verify CO₂ requirements before purchasing." },
              { n: 2, title: "Underplanting a New Tank", detail: "Starting with 2–3 plants in a large tank leaves nutrients unclaimed in the water column, handing algae an uncontested environment. Cover 70% of the substrate on day one." },
              { n: 3, title: "Too Much Light Without CO₂", detail: "Running high-intensity LEDs for 12+ hours without CO₂ is the fastest route to uncontrollable hair algae. The algae can utilize excess light; the plants cannot without matching carbon levels." },
              { n: 4, title: "Discarding During Melt", detail: "Tissue culture and emersed plants shed all leaves during the submersed transition. The roots are alive. Melt is not death — it is metamorphosis. Leave the root system in place for 4–6 weeks." },
              { n: 5, title: "Overfeeding Fish in a Planted Tank", detail: "Uneaten food decomposes into heavy phosphate loads that fuel algae blooms. Slow-growing low-tech plants cannot absorb excess phosphate fast enough to compensate. Feed only what fish consume in 2 minutes." },
              { n: 6, title: "Zero-Nitrate Water Changes", detail: "If nitrates read 0 ppm, do not do a 50% water change — you are removing the nitrogen your plants need. Dial back the water change schedule and let nitrates accumulate to 10–20 ppm before changing water." },
            ].map((m) => (
              <div key={m.n} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-400/10 border border-red-400/20 text-red-400 text-xs font-bold flex items-center justify-center">{m.n}</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{m.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                  <span className="font-medium text-white text-sm">{item.q}</span>
                  <span className="flex-shrink-0 text-aqua-400 text-lg leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ── Related Guides ────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link href="/blog/aquarium-plants-without-substrate" className="group flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 hover:bg-white/5 transition-all">
              <span className="text-xl flex-shrink-0">🪨</span>
              <div>
                <p className="font-semibold text-white text-sm group-hover:text-aqua-300 transition-colors">Gravel or Sand Substrate Guide</p>
                <p className="text-xs text-slate-500 mt-1">29-species compatibility table with root tab placement and the Walstad method.</p>
              </div>
            </Link>
            <Link href="/blog/aquarium-plants-melting" className="group flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 hover:bg-white/5 transition-all">
              <span className="text-xl flex-shrink-0">🪴</span>
              <div>
                <p className="font-semibold text-white text-sm group-hover:text-aqua-300 transition-colors">Why Are My Plants Melting?</p>
                <p className="text-xs text-slate-500 mt-1">If a plant from this list just lost all its leaves, read this before you throw it away.</p>
              </div>
            </Link>
            <Link href="/blog/aquarium-plants-turning-brown-yellow-black" className="group flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 hover:bg-white/5 transition-all">
              <span className="text-xl flex-shrink-0">🌿</span>
              <div>
                <p className="font-semibold text-white text-sm group-hover:text-aqua-300 transition-colors">Plants Turning Brown or Yellow?</p>
                <p className="text-xs text-slate-500 mt-1">24 causes diagnosed by color, pattern, and species. Includes a water parameter chart.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="rounded-2xl border border-aqua-400/20 bg-gradient-to-br from-ocean-800 to-ocean-950 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Start Your Planted Tank?</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
            Every plant on this list is available from Shore Aquatic — properly labeled with feeding type, light requirements, and substrate compatibility so you know exactly what you&apos;re getting.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/shop?category=Plants" className="rounded-full bg-aqua-400 text-ocean-950 font-semibold px-6 py-2.5 text-sm hover:bg-aqua-300 transition-colors">
              Shop Aquarium Plants
            </Link>
            <Link href="/care-guides" className="rounded-full border border-white/20 text-white font-medium px-6 py-2.5 text-sm hover:border-white/40 hover:bg-white/5 transition-colors">
              Browse Care Guides
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
