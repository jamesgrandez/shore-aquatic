import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "15 Best Plants for Betta Fish — Fin-Safe Ranked Guide",
  description:
    "15 plants ranked for Betta tanks — scored for fin safety, bubble nest support, and tank size. Surface coverage rules, blackwater tips, 2.5–20 gallon guides.",
  alternates: {
    canonical: "https://shoreaquatic.com/blog/best-plants-for-betta-fish",
  },
  openGraph: {
    title: "15 Best Plants for Betta Fish — Fin-Safe Ranked Guide",
    description:
      "15 plants ranked for Betta tanks — scored for fin safety, bubble nest support, and tank size. Surface coverage rules, blackwater tips, 2.5–20 gallon guides.",
    type: "article",
    url: "https://shoreaquatic.com/blog/best-plants-for-betta-fish",
  },
};

// ─── JSON-LD ────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Aquarium Plants for Betta Fish (15 That Actually Help)",
  description:
    "Plants ranked for Betta-specific benefits — leaf hammocks, bubble nests, fin safety, and blackwater setups — with tank size guides for 2.5 through 20-gallon tanks.",
  author: { "@type": "Organization", name: "Shore Aquatic" },
  publisher: {
    "@type": "Organization",
    name: "Shore Aquatic",
    logo: { "@type": "ImageObject", url: "https://shoreaquatic.com/logo.jpg" },
  },
  datePublished: "2026-04-26",
  dateModified: "2026-07-05",
  url: "https://shoreaquatic.com/blog/best-plants-for-betta-fish",
  mainEntityOfPage: "https://shoreaquatic.com/blog/best-plants-for-betta-fish",
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up a Planted 5-Gallon Betta Tank",
  step: [
    { "@type": "HowToStep", "name": "Hardscape Placement", "text": "Place spider wood or driftwood as a centerpiece and secure it to the substrate." },
    { "@type": "HowToStep", "name": "Attach Epiphytes", "text": "Use aquarium-safe super glue gel to attach Anubias nana and Java Fern to the driftwood branches, keeping rhizomes fully exposed above the substrate." },
    { "@type": "HowToStep", "name": "Plant Background", "text": "Plant Cryptocoryne wendtii in the rear corners and push a root tab near each plant's base for nutrition." },
    { "@type": "HowToStep", "name": "Add Surface Plants", "text": "Float a small portion of Salvinia minima or Amazon Frogbit, leaving at least 30% of the surface open for the Betta to breathe." },
    { "@type": "HowToStep", "name": "Cycle Before Adding Betta", "text": "Dechlorinate tap water, start the filter, and allow the nitrogen cycle to establish for 2–4 weeks before introducing the Betta." },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Aquarium Plants for Betta Fish",
  numberOfItems: 15,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anubias nana" },
    { "@type": "ListItem", position: 2, name: "Java Fern" },
    { "@type": "ListItem", position: 3, name: "Amazon Frogbit" },
    { "@type": "ListItem", position: 4, name: "Java Moss" },
    { "@type": "ListItem", position: 5, name: "Cryptocoryne wendtii" },
    { "@type": "ListItem", position: 6, name: "Water Sprite" },
    { "@type": "ListItem", position: 7, name: "Amazon Sword" },
    { "@type": "ListItem", position: 8, name: "Salvinia minima" },
    { "@type": "ListItem", position: 9, name: "Bucephalandra" },
    { "@type": "ListItem", position: 10, name: "Red Root Floater" },
    { "@type": "ListItem", position: 11, name: "Marimo Moss Ball" },
    { "@type": "ListItem", position: 12, name: "Hornwort" },
    { "@type": "ListItem", position: 13, name: "Ludwigia repens" },
    { "@type": "ListItem", position: 14, name: "Hygrophila polysperma" },
    { "@type": "ListItem", position: 15, name: "Dwarf Sagittaria" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the best plants for a Betta fish?", "acceptedAnswer": { "@type": "Answer", text: "Anubias, Java Fern, and Amazon Frogbit are top choices. They thrive in low-light, low-flow environments. Anubias and Java Fern provide broad leaves for resting, while Frogbit offers shade and roots for bubble nests." } },
    { "@type": "Question", name: "Do Betta fish need live plants?", "acceptedAnswer": { "@type": "Answer", text: "Not strictly required, but highly recommended for health and enrichment. Live plants recreate natural habitats, absorb ammonia and nitrates, and provide soft surfaces that won't tear Betta fins." } },
    { "@type": "Question", name: "Can I keep a Marimo moss ball with a Betta?", "acceptedAnswer": { "@type": "Answer", text: "Yes, they are safe and provide great enrichment. However, since Marimos prefer cooler water than Bettas, keep them out of intense light and give them occasional cool-water breaks to prevent browning." } },
    { "@type": "Question", name: "Why do Bettas sleep on plant leaves?", "acceptedAnswer": { "@type": "Answer", text: "Long-finned Bettas experience hydrodynamic drag and get physically exhausted. Broad leaves near the surface act as hammocks, allowing rest while keeping mouths close to atmospheric oxygen." } },
    { "@type": "Question", name: "Will plastic plants hurt my Betta?", "acceptedAnswer": { "@type": "Answer", text: "Yes. Rigid plastic plants tear Betta fins. Use the pantyhose test — if a plant snags nylon stockings, it will shred fins. Choose live plants or ultra-soft silk alternatives." } },
    { "@type": "Question", name: "Are floating plants good for Bettas?", "acceptedAnswer": { "@type": "Answer", text: "Yes, they provide shade and support bubble nests. Never let them cover more than 70–80% of the surface — Bettas must reach atmospheric air via their labyrinth organ or they suffocate." } },
    { "@type": "Question", name: "Why is my new Betta tank plant melting?", "acceptedAnswer": { "@type": "Answer", text: "It is adapting to new water chemistry. Plants like Cryptocoryne shed terrestrial leaves when moved. Leave the roots in place — the plant regrows new aquatic leaves within 3–6 weeks." } },
    { "@type": "Question", name: "Can I use lucky bamboo in a Betta tank?", "acceptedAnswer": { "@type": "Answer", text: "Only with leaves kept fully above water. Lucky bamboo is not truly aquatic. Submerged leaves rot and release ammonia, poisoning the water and harming your Betta." } },
    { "@type": "Question", name: "Do I need fertilizers or CO2 for Betta tank plants?", "acceptedAnswer": { "@type": "Answer", text: "Not for easy beginner plants. Java Fern, Anubias, and Hornwort survive on fish waste alone. Root tabs are only needed near heavy root feeders like Amazon Swords or Crypts." } },
    { "@type": "Question", name: "Why is my Betta building bubbles at the surface?", "acceptedAnswer": { "@type": "Answer", text: "He is building a bubble nest — an instinctual breeding behavior and a sign of contentment. Floating plants provide the anchor structures that help males maintain these nests." } },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shoreaquatic.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://shoreaquatic.com/blog" },
    { "@type": "ListItem", position: 3, name: "Best Plants for Betta Fish", item: "https://shoreaquatic.com/blog/best-plants-for-betta-fish" },
  ],
};

// ─── DATA ───────────────────────────────────────────────────────────────────

type FeedType = "Epiphyte" | "Root Feeder" | "Water Column" | "Floater" | "Algae";
type FinSafety = "Excellent" | "High" | "Moderate";
type BubbleRating = "High" | "Moderate" | "Low" | "None";

interface BettaPlant {
  n: number;
  name: string;
  sci: string;
  type: FeedType;
  position: string;
  compat: number; // 1–5
  benefit: string; // short label
  benefitDetail: string;
  finSafety: FinSafety;
  finNote: string;
  minTank: string;
  light: string;
  bubbleNest: BubbleRating;
  desc: string;
  failureTitle: string;
  failureDetail: string;
  proTip: string;
  warning?: string;
}

const plants: BettaPlant[] = [
  {
    n: 1, name: "Anubias nana", sci: "Anubias barteri var. nana", type: "Epiphyte",
    position: "Midground / Near Surface", compat: 5,
    benefit: "Leaf Hammock", benefitDetail: "Broad, sturdy leaves within 2 inches of the surface give long-finned Bettas a resting platform without the exhausting swim to breathe.",
    finSafety: "Excellent", finNote: "Smooth, leathery leaves — zero snagging risk. The safest plant surface in the hobby.",
    minTank: "2.5 gal", light: "Low–Medium",
    bubbleNest: "Low",
    desc: "No plant on this list benefits a Betta more directly. Modern long-finned varieties — Halfmoons, Rosetails, Crowntails — carry so much fin tissue that reaching the surface repeatedly exhausts them. An Anubias leaf positioned an inch or two below the surface gives them a sleeping platform where they can rest with their mouth at the breathing window. One plant, properly placed, visibly improves a Betta's quality of life.",
    failureTitle: "Burying the Rhizome",
    failureDetail: "The horizontal stem (rhizome) must remain fully exposed. Burying it triggers anaerobic rot that kills the plant within days — and releases ammonia into a tank that already has a sensitive fish in it.",
    proTip: "Super glue a piece of Anubias nana to driftwood just below the surface, with the largest leaf angled horizontally. Watch your Betta discover it within 24 hours and return to that spot nightly.",
  },
  {
    n: 2, name: "Java Fern", sci: "Microsorum pteropus", type: "Epiphyte",
    position: "Midground / Background", compat: 5,
    benefit: "Hiding & Security", benefitDetail: "Dense, sculptural fronds break sightlines and give Bettas a sense of cover — reducing chronic low-level stress from feeling exposed.",
    finSafety: "High", finNote: "Leathery fronds are smooth and gentle on long fins. Safe for all Betta fin types.",
    minTank: "5 gal", light: "Low–Medium",
    bubbleNest: "Low",
    desc: "Silica-reinforced leaves make Java Fern nearly indestructible and the best choice for tanks with fin-nipping tank mates (Danios, Tiger Barbs) occasionally kept with Bettas — nothing eats it. Its vertical, textured growth creates a natural-looking jungle that Bettas instinctively navigate and shelter within. The 'Windelov' variety, with its forked, intricate frond tips, is particularly popular in Betta tanks for its ornamental density.",
    failureTitle: "Burying the Rhizome",
    failureDetail: "Identical to Anubias — the rhizome must never touch substrate. Remove any rockwool from the nursery pot before attaching to hardscape.",
    proTip: "Use the 'Windelov' or 'Trident' Java Fern variety in a Betta tank — the more complex frond structure creates denser hiding geometry than the standard variety and looks genuinely stunning in photos.",
  },
  {
    n: 3, name: "Amazon Frogbit", sci: "Limnobium laevigatum", type: "Floater",
    position: "Surface", compat: 5,
    benefit: "Bubble Nest Anchor", benefitDetail: "Trailing roots up to 12 inches long provide exactly the kind of flexible, anchoring structure male Bettas use to stabilize bubble nests against surface movement.",
    finSafety: "Excellent", finNote: "Roots are perfectly soft and flexible — no snagging possible.",
    minTank: "2.5 gal", light: "Medium–High (at surface)",
    bubbleNest: "High",
    desc: "Male Bettas instinctively build bubble nests under floating plant clusters — it is a hard-wired reproductive behavior that, even in a solo tank, signals contentment and hormonal health. Frogbit's dense root curtain provides the ideal anchor structure. As a bonus, the roots shade the water column and absorb ammonia directly. The key management rule: never let it cover more than 70–80% of the surface.",
    failureTitle: "Condensation Rot + Surface Suffocation",
    failureDetail: "Two risks specific to Betta tanks: (1) Water dripping from a glass lid onto the spongy leaf tops causes rot from the top down. (2) If Frogbit blankets the entire surface, the Betta cannot reach air via its labyrinth organ and can suffocate in hours. Always leave at least 20–30% of the surface clear.",
    proTip: "Float a loop of airline tubing as a containment ring. This keeps Frogbit corralled in the back half of the tank while leaving the front half clear — perfect surface access for the Betta, perfect nesting zone for the male.",
    warning: "⚠ Never allow surface coverage to exceed 70–80%. Bettas require open air access at all times.",
  },
  {
    n: 4, name: "Java Moss", sci: "Taxiphyllum barbieri", type: "Epiphyte",
    position: "Foreground / Any Surface", compat: 4,
    benefit: "Enrichment & Biofilm", benefitDetail: "Dense moss clumps generate the biofilm microorganisms — bacteria, protozoa, micro-algae — that serve as a constant grazing source for Bettas, shrimp, and fry.",
    finSafety: "High", finNote: "Impossibly soft — the only concern is excess detritus trapped in dense clumps.",
    minTank: "2.5 gal", light: "Low–High",
    bubbleNest: "Moderate",
    desc: "Java Moss provides more biological value per square inch than almost any other plant in this list. Bettas are documented to nuzzle and gently swim through clumps — an enrichment behavior associated with an engaged, unstressed fish. For breeding setups, a large Java Moss clump floating at the surface acts as a secondary bubble nest anchoring point and fry refuge after hatching.",
    failureTitle: "Algae Infestation from Trapped Detritus",
    failureDetail: "Dense moss traps uneaten food, fish waste, and shed fins. In a Betta tank with minimal flow, this builds up quickly, causing localized ammonia pockets and triggering hair algae that is nearly impossible to separate from the moss without discarding the clump. Thin and rinse regularly.",
    proTip: "Attach Java Moss to a vertical piece of mesh or driftwood as a 'moss wall' background. The flat presentation maximizes biofilm exposure and prevents the detritus-trapping problem of loose floating clumps.",
  },
  {
    n: 5, name: "Cryptocoryne wendtii", sci: "Cryptocoryne wendtii", type: "Root Feeder",
    position: "Midground", compat: 5,
    benefit: "Territory Barrier", benefitDetail: "Dense, ruffled-leaf rosettes effectively break visual sightlines at the substrate level — critical for reducing aggression in sorority tanks and giving Bettas a sense of territorial boundary.",
    finSafety: "High", finNote: "Soft, ruffled leaves. Smooth edges throughout growth stages.",
    minTank: "5 gal", light: "Low–Medium",
    bubbleNest: "Low",
    desc: "Southeast Asian origin makes Crypt wendtii a natural Betta companion — they evolved in the same slow-stream, tannin-rich habitats. The brown and bronze color varieties create high visual contrast against blue and red Bettas, making the fish look dramatically more vivid. Once established with root tabs in inert substrate, it runners freely and fills midground space with virtually no intervention — the ideal 'plant and ignore' species for busy aquarists.",
    failureTitle: "Panicking During Crypt Melt",
    failureDetail: "Crypt wendtii often drops all its leaves within 1–2 weeks of being moved to a new tank — a stress response called Crypt Melt. Beginners assume the plant is dead. The root system is fully alive. Leave it alone, maintain water quality, and new leaves emerge within 3–6 weeks. Do not uproot it.",
    proTip: "Choose the 'Brown' or 'Bronze' variety for a Betta tank with a red or royal blue fish — the dark, earthy leaf tones create a vivid natural contrast that makes Betta photography look professional with zero effort.",
  },
  {
    n: 6, name: "Water Sprite", sci: "Ceratopteris thalictroides", type: "Water Column",
    position: "Surface Float / Background", compat: 5,
    benefit: "Enrichment + Filtration", benefitDetail: "When floated, trailing roots reach 6–12 inches — Bettas actively swim through them as enrichment and shelter behavior. Simultaneously absorbs ammonia at a high rate.",
    finSafety: "High", finNote: "Extremely delicate, soft fronds. No fin damage risk whatsoever.",
    minTank: "5 gal (rooted) / Any (floating)", light: "Low–Medium",
    bubbleNest: "High",
    desc: "Water Sprite floated at the surface is arguably the single best plant combination for Betta enrichment: the root curtain creates a natural 'curtain zone' that Bettas hover in, investigate, and shelter beneath; the dense canopy dims surface light to comfortable levels; and the rapid growth strips the water column of ammonia faster than most filters can process it. Male Bettas regularly build bubble nests in the shelter of floating Water Sprite.",
    failureTitle: "Iron Deficiency Causing Leaf Melt",
    failureDetail: "Transparent, mushy new leaves signal iron deficiency. In a Betta tank with minimal water column fertilization, Water Sprite is often the first plant to show deficiency. Add an all-in-one liquid fertilizer weekly to prevent this.",
    proTip: "For Betta breeding setups, position a large floating cluster of Water Sprite in one back corner. The male will almost always choose this as his bubble nest site — the fronds provide shelter, the roots provide structure, and the corner position protects the nest from surface disturbance.",
  },
  {
    n: 7, name: "Amazon Sword", sci: "Echinodorus grisebachii", type: "Root Feeder",
    position: "Background / Centerpiece", compat: 4,
    benefit: "Resting Platform", benefitDetail: "Large, broad leaves angled upward create natural resting chairs for Bettas — especially Crowntail and Halfmoon varieties that need broad horizontal support.",
    finSafety: "High", finNote: "Smooth, firm leaf surfaces. No structural issues. Safe for all Betta fin types.",
    minTank: "10 gal", light: "Medium",
    bubbleNest: "Low",
    desc: "The Amazon Sword is the most visually dramatic plant on this list — one healthy specimen with 15+ large leaves transforms the background of any tank and gives it instant depth. Its broad leaves serve as natural platforms that Bettas actively rest on when the largest leaves arch to within 2–3 inches of the surface. The 10-gallon minimum is firm: in a 5-gallon, one Amazon Sword fills the tank, leaving no swimming space.",
    failureTitle: "Potassium or Iron Deficiency — Holes in Leaves",
    failureDetail: "Small pinholes with yellow edges in older leaves signal potassium deficiency. Pale yellow new leaves with dark veins signal iron deficiency. Both are common in Betta tanks where fertilization is minimal. Root tabs every 3–4 months prevent both.",
    proTip: "Trim the outer 3–4 oldest leaves monthly to manage size and prevent them from shading the entire tank. Each trimmed leaf redirects the plant's energy to producing fresher, larger inner leaves.",
  },
  {
    n: 8, name: "Salvinia minima", sci: "Salvinia minima", type: "Floater",
    position: "Surface", compat: 5,
    benefit: "Shade + Bubble Nest", benefitDetail: "The velvety 'cat's tongue' texture on Salvinia's upper surface physically traps and holds Betta bubble clusters — many males prefer it over any other floating plant for nest construction.",
    finSafety: "High", finNote: "Very short roots, smooth pads. No snagging risk.",
    minTank: "2.5 gal", light: "Low–High",
    bubbleNest: "High",
    desc: "Superior to Duckweed in nearly every way for a Betta tank: the leaves are visible and manageable, they do not clog filter intakes, and they tolerate the gentle lid condensation that kills Frogbit. Salvinia's textured surface is genuinely preferred by many male Bettas for bubble nests — the microscopic hair-like structures trap bubbles more effectively than smooth-surfaced floaters. Works in tanks as small as 2.5 gallons when carefully thinned.",
    failureTitle: "Invasive Overgrowth Blocking Surface Access",
    failureDetail: "Salvinia reproduces extremely rapidly and can blanket the entire surface within 1–2 weeks. A Betta with no clear breathing lane will suffocate. Check coverage every 2–3 days in small tanks and remove excess into a separate container.",
    proTip: "Use Salvinia instead of Duckweed for every Betta application. It provides all the same benefits — shade, nitrate export, bubble nest support — with zero of Duckweed's infestation problems. Once Duckweed enters a system, it never fully leaves.",
  },
  {
    n: 9, name: "Bucephalandra", sci: "Bucephalandra spp.", type: "Epiphyte",
    position: "Foreground / Hardscape", compat: 4,
    benefit: "Enrichment", benefitDetail: "Bettas actively investigate Bucephalandra's textured, iridescent leaves — a documented enrichment behavior associated with environmental complexity and reduced stress.",
    finSafety: "High", finNote: "Small, smooth leaves. No structural fin risks at any growth stage.",
    minTank: "2.5 gal", light: "Low",
    bubbleNest: "None",
    desc: "The underutilized premium option for Betta tanks. Bucephalandra's iridescent blue and purple leaf shimmer complements metallic Betta colorations in a way no other plant does — these two organisms look extraordinary together. Slow-growing and undemanding in low-light, low-flow Betta conditions, it attaches to lava rock or driftwood and essentially requires no maintenance once established. Best suited for tanks where aesthetics are a priority.",
    failureTitle: "Melt from Sudden Parameter Shifts",
    failureDetail: "Bucephalandra is sensitive to abrupt changes in pH, temperature, or water hardness — the same parameter stability that Bettas need. Large water changes with noticeably different pH or temperature can trigger complete leaf drop. Match water change temperature carefully and change no more than 25–30% at a time.",
    proTip: "Super glue a Bucephalandra specimen to a small piece of lava rock and position it at the front of the tank. The volcanic rock's dark coloration creates a focal point, and the iridescent Buce shimmer under the light above looks genuinely breathtaking against a colored substrate.",
  },
  {
    n: 10, name: "Red Root Floater", sci: "Phyllanthus fluitans", type: "Floater",
    position: "Surface", compat: 5,
    benefit: "Bubble Nest + Contrast", benefitDetail: "Deep crimson trailing roots provide the most visually striking root curtain available — and dramatically contract against a blue or purple Betta in photography.",
    finSafety: "Excellent", finNote: "Roots are soft, highly flexible, and completely harmless. One of the safest floaters available.",
    minTank: "5 gal", light: "Medium–High (at surface)",
    bubbleNest: "High",
    desc: "The aesthetically superior choice for the Betta keeper who cares about photography and aquascape beauty alongside fish health. Red Root Floater's crimson undersides and roots echo the coloration of red and orange Bettas, while contrasting dramatically against blue and purple fish. Male Bettas actively nest in its root system. The red coloration is nitrogen-triggered: when nitrogen levels are low (healthy water), the pigment intensifies. When nitrogen spikes (dirty water), the plant tells you by turning green.",
    failureTitle: "Root Drop from Zero Nitrogen",
    failureDetail: "If nitrogen levels drop to near zero — common in lightly stocked, heavily planted Betta tanks — Red Root Floater sheds its roots entirely. The plant survives but loses its signature feature. Add a small nitrogen-containing liquid fertilizer or reduce water change frequency slightly.",
    proTip: "Red Root Floater's coloration is a live water quality indicator: rich red = healthy, low-nitrogen water; fading to green = nitrates rising. It functions as a free, always-on parameter signal for your Betta's environment.",
    warning: "⚠ Extremely sensitive to lid condensation dripping on leaves — ensure lid airflow or use a half-open top.",
  },
  {
    n: 11, name: "Marimo Moss Ball", sci: "Aegagropila linnaei", type: "Algae",
    position: "Substrate / Anywhere", compat: 5,
    benefit: "Enrichment", benefitDetail: "Bettas push, nuzzle, and rest on Marimo balls — active enrichment behavior associated with a healthy, engaged fish. The soft, velvety texture is completely safe for flowing fins.",
    finSafety: "Excellent", finNote: "Perfectly soft, velvety surface. The safest substrate-level 'decoration' available.",
    minTank: "2.5 gal", light: "Low (avoid direct sun)",
    bubbleNest: "None",
    desc: "The Marimo is not a plant — it is a rare spherical colony of filamentous green algae (*Aegagropila linnaei*) from cold lakes in Japan and Iceland. In a Betta tank it serves purely as enrichment: Bettas interact with it the way cats interact with toys, pushing it around the substrate and resting on its surface. The critical care note: Marimo prefer 50–72°F; Betta tanks run 78–82°F. This creates a slow, long-term decline. Management strategies are detailed in the Pro Tip.",
    failureTitle: "Temperature Mismatch Causing Brown Rot",
    failureDetail: "Betta tank temperatures (78–82°F) are above Marimo's thermal comfort zone (50–72°F). Over weeks to months, the ball will begin turning brown from the inside out as the algae cells die. This is not visible until the ball is squeezed. A brown Marimo is releasing decomposing material into your Betta's tank.",
    proTip: "Every 2–4 weeks, remove the Marimo and place it in a small container of cold dechlorinated water in the refrigerator for 24–48 hours. This 'cold reset' prevents heat stress, restores the green coloration, and extends the Marimo's lifespan in a tropical tank from months to years.",
    warning: "⚠ Betta tank temps (78–82°F) exceed Marimo's comfort zone. Requires periodic cold-water resets — see Pro Tip.",
  },
  {
    n: 12, name: "Hornwort", sci: "Ceratophyllum demersum", type: "Water Column",
    position: "Floater / Loose Background", compat: 4,
    benefit: "Filtration", benefitDetail: "The fastest ammonia and nitrate absorber on this list — a large floating mass of Hornwort measurably improves water quality within 48 hours, protecting a Betta's sensitive immune system.",
    finSafety: "Moderate", finNote: "Needles are slightly stiff — generally safe but can occasionally snag extremely long-finned varieties (Rosetails). Avoid in tanks with heavily over-bred fin types.",
    minTank: "Any", light: "Low–Moderate",
    bubbleNest: "High",
    desc: "The biological workhorse of Betta tanks. A floating mass of Hornwort in the corner of a new tank can prevent the ammonia spikes that are responsible for a huge percentage of Betta deaths in the first weeks. Male Bettas readily build bubble nests in and around floating Hornwort clusters, attracted to its dense structure and the surface calm it creates. Its mild allelopathic properties also reduce algae competition.",
    failureTitle: "Needle Drop from Sudden Parameter Changes",
    failureDetail: "Hornwort responds to abrupt parameter shifts — temperature swings, large water changes, new tank syndrome — by shedding all its needles simultaneously. This creates a significant mess and, in a small Betta tank, can cause a temporary ammonia spike from the decomposing needles. Stabilize parameters before introducing it.",
    proTip: "Never bury Hornwort — anchor it to a suction cup with a small rubber band instead. Buried stems rot and release ammonia directly at substrate level where Bettas rest. Floating or surface-anchored Hornwort is safe, buried Hornwort is a slow ammonia bomb.",
  },
  {
    n: 13, name: "Ludwigia repens", sci: "Ludwigia repens", type: "Water Column",
    position: "Background", compat: 4,
    benefit: "Color Contrast", benefitDetail: "Red and orange leaf undersides create a vivid natural color palette that makes Betta photography dramatically more striking — and mimics the leaf-litter coloration of wild Betta habitats.",
    finSafety: "High", finNote: "Soft stems and leaves throughout the growth cycle. Safe for all fin types.",
    minTank: "10 gal", light: "Medium",
    bubbleNest: "Moderate",
    desc: "The color plant for Betta tanks. Ludwigia repens' gradient from green tops to red-orange undersides creates a dynamic, layered background that naturally complements the coloration of any Betta variety — warm-toned against cool-toned Bettas, or harmonizing with red and orange fish. Bettas actively explore and weave through Ludwigia stems, treating them as an environmental enrichment feature. Best in tanks 10 gallons and above where it has room to form a proper column.",
    failureTitle: "Lower Leaf Drop from Canopy Shading",
    failureDetail: "When the top growth becomes dense, light stops reaching lower stems and the leaves fall off, leaving bare stalks that rot and spike ammonia. Trim the top 30% every 2 weeks and replant cuttings to maintain full, bushy coverage from base to surface.",
    proTip: "Propagate effortlessly: clip a 4-inch top cutting and push it into the substrate next to the parent plant. Within 2 weeks it roots independently. One stem purchased becomes a full background within 6–8 weeks.",
  },
  {
    n: 14, name: "Hygrophila polysperma", sci: "Hygrophila polysperma", type: "Water Column",
    position: "Background", compat: 5,
    benefit: "Stress Reduction + Filtration", benefitDetail: "Rapid, dense growth creates an enclosed, security-inducing environment within weeks — shifting a Betta's behavior from cautious and glass-surfing to actively exploring and foraging.",
    finSafety: "High", finNote: "Broad, soft leaves. No structural concerns at any stage.",
    minTank: "5 gal", light: "Low–High",
    bubbleNest: "Moderate",
    desc: "For a new Betta owner who wants the tank to look lush and established within weeks rather than months, Hygrophila polysperma is the answer. It grows so fast that a sparse new tank becomes a dense jungle in under a month — and that transformation visibly affects Betta behavior. Fish that pace and glass-surf in bare tanks spend less time doing so when surrounded by plant cover that mimics their dense natural habitat. Doubles as a nitrate export engine in small, lightly filtered tanks.",
    failureTitle: "Canopy Shading Causing Lower Stem Rot",
    failureDetail: "In the low-flow conditions of a Betta tank, the dense upper canopy cuts off light to lower stems completely. The leafless lower stems rot silently and can cause ammonia spikes. Prune the top 30% weekly once the plant reaches mid-height.",
    proTip: "Plant in clusters of 3–5 stems rather than individual stalks. Clustered planting creates the dense, thicket-like growth pattern that breaks Betta sightlines in sorority tanks — critical for managing female aggression.",
  },
  {
    n: 15, name: "Dwarf Sagittaria", sci: "Sagittaria subulata", type: "Root Feeder",
    position: "Foreground / Carpet", compat: 5,
    benefit: "Natural Meadow", benefitDetail: "A lush grass carpet mimics the flooded rice paddies and shallow-water meadows of Betta's wild habitat — creating a foraging ground that supports natural bottom-searching behavior.",
    finSafety: "High", finNote: "Soft, flexible grass blades. No rigid structures that could catch fins.",
    minTank: "Any", light: "Medium",
    bubbleNest: "None",
    desc: "Bettas in the wild spend significant time foraging over shallow, grassy substrate beds — hovering low and scanning for insects and microcrustaceans. Dwarf Sagittaria recreates this foraging environment in any tank size. Under medium light it stays compact at 2–3 inches; in low light it stretches taller and serves as a midground grass. A tank with Dwarf Sagittaria in the foreground and taller plants in the back gives a Betta the layered, grassy-to-dense habitat it evolved in.",
    failureTitle: "Melt in Very Soft, Acidic Water",
    failureDetail: "Dwarf Sagittaria can melt when first planted in very soft water (GH below 3) or highly acidic conditions (pH below 6.0). It recovers once roots establish, but the initial melting can alarm beginners. Ensure moderate water hardness when first introducing it.",
    proTip: "Keep Dwarf Sagittaria separated from Vallisneria in the same tank. Their runners interweave in the substrate and become nearly impossible to separate — creating a mixed, tangled foreground that looks messy and is difficult to maintain.",
  },
];

interface FaqItem { q: string; a: string }

const faqItems: FaqItem[] = [
  { q: "What are the best plants for a Betta fish?", a: "Anubias nana, Amazon Frogbit, and Salvinia minima are the top three. Anubias provides a leaf hammock for resting; Frogbit and Salvinia give surface shade and bubble nest anchors — all three address Betta-specific biological needs rather than just general plant compatibility." },
  { q: "Do Betta fish need live plants?", a: "Not strictly required, but highly recommended. Live plants recreate the dense, shaded, low-flow environment Bettas evolved in, absorb ammonia and nitrates, provide soft resting surfaces that won't tear fins, and give males anchor points for bubble nests. Bettas in planted tanks show measurably more exploratory and foraging behavior." },
  { q: "Can I keep a Marimo moss ball with a Betta?", a: "Yes — Bettas interact with them as toys, pushing and resting on them. The one important caveat: Marimo prefer 50–72°F and Betta tanks run 78–82°F. Remove the Marimo every 3–4 weeks and give it a 24-hour cold-water rest in the refrigerator to prevent heat-related browning and decline." },
  { q: "Why do Bettas sleep on plant leaves?", a: "Long-finned Bettas — Halfmoons, Rosetails, Crowntails — experience significant drag from their fins and tire quickly. Broad leaves positioned 1–2 inches below the surface act as hammocks where they can rest with their mouth close to the surface for easy air access. This is normal, healthy behavior, not a sign of illness." },
  { q: "Will plastic plants hurt my Betta?", a: "Very likely, yes. Rigid plastic plants have hard edges that shred Betta fins over time. Live plants are always preferable. To test any decoration: press it against a pair of nylon pantyhose. If it snags the fabric, it will snag your Betta's fins. Soft silk artificial plants are acceptable when live plants aren't possible." },
  { q: "Are floating plants good for Bettas?", a: "Excellent for Bettas — they provide surface shade to reduce light stress, root structures that male Bettas use as bubble nest anchors, and hiding cover that makes Bettas feel secure. The one critical rule: never cover more than 70–80% of the surface. Bettas breathe atmospheric air through their labyrinth organ and will suffocate if the surface is completely blocked." },
  { q: "Why is my new Betta tank plant melting?", a: "It's almost certainly normal emersed-to-submersed transition melt. Plants grown above water at nurseries must shed their terrestrial leaves and rebuild new aquatic ones. Cryptocoryne is especially prone to complete leaf drop. Do not remove the plant — leave the roots in place and new leaves emerge within 3–6 weeks." },
  { q: "Can I use lucky bamboo in a Betta tank?", a: "Only with the leaves and upper stem kept completely above the waterline. Lucky bamboo is not an aquatic plant — submerged leaves rot within days, releasing ammonia into a small tank and spiking parameters that harm your Betta. The bare stem can be submerged, but the leafy portion must stay in air." },
  { q: "Do I need fertilizers or CO₂ for Betta tank plants?", a: "No CO₂ required for any plant on this list. For fertilizer: epiphytes (Anubias, Java Fern, Bucephalandra) and floaters need none at all. Root feeders (Crypt wendtii, Amazon Sword, Dwarf Sag) benefit from root tabs placed every 4–6 inches near their roots every 3–4 months. A weekly liquid all-in-one fertilizer covers everything else." },
  { q: "Why is my male Betta building bubbles at the surface?", a: "He's building a bubble nest — a saliva-coated floating raft that males construct instinctively to house future eggs. It's a strong signal of contentment, hormonal health, and good water quality. Floating plants greatly encourage this behavior by providing shelter and anchor structure. A bubble-nesting Betta is typically a healthy, happy one." },
];

// ─── HELPERS ────────────────────────────────────────────────────────────────

function typeColor(type: FeedType): string {
  switch (type) {
    case "Epiphyte": return "bg-violet-400/10 text-violet-300 border-violet-400/20";
    case "Root Feeder": return "bg-amber-400/10 text-amber-300 border-amber-400/20";
    case "Water Column": return "bg-cyan-400/10 text-cyan-300 border-cyan-400/20";
    case "Floater": return "bg-emerald-400/10 text-emerald-300 border-emerald-400/20";
    case "Algae": return "bg-green-400/10 text-green-300 border-green-400/20";
    default: return "bg-white/5 text-slate-400 border-white/10";
  }
}

function finSafetyColor(fs: FinSafety): string {
  switch (fs) {
    case "Excellent": return "text-emerald-400";
    case "High": return "text-emerald-400";
    case "Moderate": return "text-amber-400";
    default: return "text-red-400";
  }
}

function bubbleColor(b: BubbleRating): string {
  switch (b) {
    case "High": return "text-aqua-400";
    case "Moderate": return "text-cyan-400";
    case "Low": return "text-slate-500";
    case "None": return "text-slate-600";
    default: return "text-slate-600";
  }
}

function CompatDots({ value }: { value: number }) {
  return (
    <span className="tracking-tight">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < value ? "text-rose-400" : "text-slate-700"}>♥</span>
      ))}
    </span>
  );
}

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function BestPlantsForBettaPage() {
  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
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
            <span className="text-slate-400">Betta Plants</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="rounded-full bg-rose-400/10 border border-rose-400/20 px-2.5 py-0.5 text-[11px] font-medium text-rose-300">Buyer&apos;s Guide</span>
            <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] text-slate-500">20 min read</span>
            <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] text-slate-500">April 26, 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Aquarium Plants for{" "}
            <span className="text-rose-400">Betta Fish</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed max-w-3xl">
            15 plants ranked for Betta-specific benefits — leaf hammocks, bubble nests, fin safety, and blackwater setups. Every recommendation is grounded in how Bettas actually breathe, rest, and behave. Includes tank guides for 2.5, 5, 10, and 20-gallon setups.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* ── Critical Surface Warning ─────────────────────────────────────── */}
        <div className="rounded-2xl border-2 border-amber-500/40 bg-amber-500/10 p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">⚠️</span>
            <div>
              <p className="font-bold text-amber-300 text-lg mb-1">The Surface Coverage Rule — Read This First</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Bettas breathe atmospheric air through a vascularized organ called the labyrinth organ. They must reach the water surface regularly to inhale air, or they drown — even in oxygenated water. <strong className="text-white">Floating plants must never cover more than 70–80% of the surface.</strong> Always leave a clear breathing lane. A Betta with its surface blocked can suffocate within hours.
              </p>
            </div>
          </div>
        </div>

        {/* ── Betta Biology Foundation ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Why Bettas Need Plants More Than Any Other Fish</h2>
          <p className="text-slate-400 text-sm mb-6">
            Generic plant lists don&apos;t work for Bettas because Bettas have unique biological needs that most fish don&apos;t share. Every recommendation below is driven by these seven facts.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: "🫁", title: "Labyrinth Organ", body: "Bettas are obligate air-breathers. They extract oxygen from atmospheric air, not just dissolved water oxygen. Surface access is not optional — it is survival. This makes surface plant management the #1 priority in any Betta planted tank." },
              { icon: "🌿", title: "Natural Habitat", body: "Wild Bettas live in shallow, heavily vegetated, slow-moving rice paddies and flood plains in Thailand and Cambodia. Dense plant cover, dim tannin-stained water, and minimal flow are not preferences — they are the conditions Bettas evolved in." },
              { icon: "😴", title: "Resting Behavior", body: "Long-finned varieties (Halfmoon, Crowntail, Rosetail) experience significant hydrodynamic drag. Bettas need broad horizontal leaves within 2 inches of the surface where they can rest with minimal energy expenditure while keeping their mouth at the breathing window." },
              { icon: "🫧", title: "Bubble Nest Building", body: "Male Bettas build mucus-coated bubble rafts as a reproductive instinct — a behavior that also signals contentment and good water quality. Floating plants provide the shelter and root-anchoring structures that allow nests to remain intact." },
              { icon: "💨", title: "Flow Sensitivity", body: "Bettas evolved in lentic (still) water. Strong filter currents cause physical exhaustion, fin damage, and chronic immune suppression. The plants recommended here all thrive in the low-flow conditions Bettas require." },
              { icon: "🔆", title: "Light Sensitivity", body: "Tannin-stained blackwater filters light dramatically. Bettas are adapted to dim, shaded conditions — very bright light without overhead cover causes chronic stress. Floating plants solve this naturally." },
              { icon: "🧦", title: "The Pantyhose Test", body: "Betta fins are extraordinarily delicate and tear easily on rough surfaces. To test any plant or decoration: press it against nylon pantyhose. If it snags the fabric, it will shred your Betta's fins. Every plant on this list passes the test." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Rating Legend ────────────────────────────────────────────────── */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">How Plants Are Rated</p>
          <div className="grid gap-4 sm:grid-cols-3 text-xs text-slate-500">
            <div><span className="text-rose-400 font-bold">♥♥♥♥♥</span> — Betta Compatibility (1–5 hearts)</div>
            <div>
              <span className="text-emerald-400">Fin Safety: Excellent / High</span> — no risk<br />
              <span className="text-amber-400">Fin Safety: Moderate</span> — minor risk for very long-finned varieties
            </div>
            <div>
              <span className="text-aqua-400">Bubble Nest: High</span> — males actively build here<br />
              <span className="text-slate-600">Bubble Nest: None</span> — no interaction
            </div>
          </div>
        </div>

        {/* ── The 15 Plants ────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">The 15 Plants</h2>
          <div className="space-y-5">
            {plants.map((p) => (
              <div key={p.n} id={`plant-${p.n}`} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                {/* Header */}
                <div className="flex items-start gap-4 p-6 pb-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-400/10 border border-rose-400/20 text-rose-400 text-sm font-bold flex items-center justify-center">{p.n}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className="text-xl font-bold text-white">{p.name}</h3>
                      <span className={`text-[10px] font-medium border rounded-full px-2 py-0.5 ${typeColor(p.type)}`}>{p.type}</span>
                    </div>
                    <p className="text-xs text-slate-500 italic mb-1">{p.sci}</p>
                    <p className="text-xs text-slate-600">{p.position}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <CompatDots value={p.compat} />
                    <p className="text-[9px] text-slate-600 mt-0.5">Betta Rating</p>
                  </div>
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-white/5">
                  {[
                    { label: "Primary Benefit", value: p.benefit },
                    { label: "Fin Safety", value: p.finSafety, color: finSafetyColor(p.finSafety) },
                    { label: "Bubble Nest", value: p.bubbleNest, color: bubbleColor(p.bubbleNest) },
                    { label: "Min Tank Size", value: p.minTank },
                  ].map((stat, i) => (
                    <div key={stat.label} className={`px-4 py-3 text-center ${i < 3 ? "border-r border-white/5" : ""}`}>
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-600 mb-0.5">{stat.label}</p>
                      <p className={`text-xs font-medium ${stat.color ?? "text-white"}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 pt-4 space-y-4">
                  {/* Benefit + Description */}
                  <div>
                    <p className="text-xs font-semibold text-rose-400 mb-1">{p.benefitDetail}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>

                  {/* Warning */}
                  {p.warning && (
                    <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 px-4 py-2.5">
                      <p className="text-xs text-amber-300">{p.warning}</p>
                    </div>
                  )}

                  {/* Fin safety note */}
                  <p className="text-xs text-slate-600">
                    <span className={`font-medium ${finSafetyColor(p.finSafety)}`}>Fin Safety note:</span>{" "}{p.finNote}
                  </p>

                  {/* Failure + Pro tip */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-red-400/20 bg-red-400/5 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-red-400 mb-1.5">⚠ Betta-Specific Failure: {p.failureTitle}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{p.failureDetail}</p>
                    </div>
                    <div className="rounded-lg border border-aqua-400/20 bg-aqua-400/5 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-aqua-400 mb-1.5">✦ Betta Pro Tip</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{p.proTip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tank Size Guide ───────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Plant Picks by Tank Size</h2>
          <p className="text-slate-400 text-sm mb-6">Most Betta articles ignore the reality that the majority of Bettas live in small tanks. Here is what actually works at each volume.</p>

          <div className="space-y-4">
            {/* 2.5 Gallon */}
            <div className="rounded-xl border border-slate-500/20 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-500/10 text-slate-300 border border-slate-500/20">2.5 Gallon</span>
                <p className="text-slate-400 text-xs">Nano — the functional minimum. Strict plant selection required.</p>
              </div>
              <p className="text-sm text-white font-medium mb-2">Best picks: Anubias nana Petite, Marimo Moss Ball, Salvinia minima</p>
              <ul className="space-y-1 text-xs text-slate-500">
                <li><span className="text-amber-400">⚠</span> Fast-spreading floaters (Frogbit) fill a 2.5-gallon surface in days — thin every 2–3 days minimum</li>
                <li><span className="text-amber-400">⚠</span> One Anubias nana Petite attached to a small rock is sufficient — no additional rooted plants needed</li>
                <li><span className="text-amber-400">⚠</span> Weekly 30% water changes are mandatory to prevent parameter swings in this volume</li>
              </ul>
            </div>

            {/* 5 Gallon */}
            <div className="rounded-xl border border-aqua-400/20 bg-aqua-400/5 p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-aqua-400/10 text-aqua-400 border border-aqua-400/20">5 Gallon</span>
                <p className="text-slate-400 text-xs">The most common Betta tank — most detailed guidance.</p>
              </div>
              <p className="text-sm text-white font-medium mb-3">Starter setup (4 plants, complete ecosystem):</p>
              <ol className="space-y-2 mb-4">
                {[
                  { step: "Hardscape anchor", plant: "Anubias nana on driftwood", detail: "Attach 2–3 specimens to a centerpiece branch. The largest leaf should sit 1–2 inches below the surface as a hammock." },
                  { step: "Vertical structure", plant: "Java Fern on the driftwood", detail: "Attach 1–2 specimens behind the Anubias for height and density. Creates the jungle feel Bettas seek." },
                  { step: "Background root feeder", plant: "Cryptocoryne wendtii in rear corners", detail: "Plant 2–3 in the back. Push a root tab near each. They runner-fill the background within 2–3 months." },
                  { step: "Surface cover", plant: "Salvinia minima (30–50% coverage max)", detail: "Float a small portion in the back half of the tank. Leave the front half open as the breathing lane." },
                ].map((s, i) => (
                  <li key={i} className="flex gap-3 text-xs text-slate-400">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-aqua-400/10 text-aqua-400 text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
                    <span><strong className="text-white">{s.step} — {s.plant}:</strong> {s.detail}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* 10 Gallon */}
            <div className="rounded-xl border border-emerald-500/20 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">10 Gallon</span>
                <p className="text-slate-400 text-xs">Vertical layering becomes possible. Amazon Sword enters viability.</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">A 10-gallon unlocks background planting depth: one Amazon Sword in a rear corner (with 2 root tabs) provides dramatic visual impact and broad leaf hammocks. Add Ludwigia repens for red-orange color contrast. Java Fern and Anubias on driftwood in the midground, Dwarf Sagittaria in the foreground, and Salvinia or Frogbit at the surface. Keep the front third of the substrate open for Betta swimming space.</p>
            </div>

            {/* 20 Gallon */}
            <div className="rounded-xl border border-purple-500/20 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">20+ Gallon</span>
                <p className="text-slate-400 text-xs">Minimum volume for Betta sororities. Planting density becomes a survival factor.</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">Sorority tanks require 70%+ plant coverage to create enough visual barriers for female Bettas to establish a pecking order without constant injury. Use Hygrophila polysperma and Water Wisteria as fast-growing visual curtains in the background. Cluster Crypts and Java Fern into territory zones midground. The goal is &ldquo;visual chaos&rdquo; — a submissive fish should be able to escape any chase by turning a single corner into a plant cluster. Floating plants across the entire back half add overhead coverage that reduces stress for all fish.</p>
            </div>
          </div>
        </section>

        {/* ── Blackwater Setup ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">The Blackwater Betta Tank</h2>
          <p className="text-slate-400 text-sm mb-6">The most authentic Betta environment — and the most visually striking. Blackwater tanks dramatically improve Betta health and coloration.</p>

          <div className="grid gap-4 sm:grid-cols-2 mb-4">
            <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-5">
              <h3 className="font-bold text-amber-300 mb-3">What Is a Blackwater Tank?</h3>
              <ul className="space-y-2 text-xs text-slate-400">
                {[
                  "pH 5.0–6.5, very soft water (GH 1–4)",
                  "Tea-colored water from humic and fulvic acids (tannins)",
                  "Dim light filtered by tannin tint",
                  "Indian Almond Leaves decomposing on the substrate",
                  "Replicates Mekong Delta floodplains — Betta's actual home",
                ].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-amber-600 flex-shrink-0">▸</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-5">
              <h3 className="font-bold text-amber-300 mb-3">Health Benefits for Bettas</h3>
              <ul className="space-y-2 text-xs text-slate-400">
                {[
                  "Tannins are natural antibacterial and antifungal agents — reduces fin rot incidence",
                  "Softer, acidic water matches Betta's evolutionary baseline",
                  "Dim, tannin-filtered light eliminates overhead light stress",
                  "Bettas in blackwater show more vivid coloration and more active behavior",
                  "Allelopathic tannins suppress algae naturally — lower chemical intervention",
                ].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-amber-600 flex-shrink-0">▸</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 mb-4">
            <h3 className="font-semibold text-white mb-3">Top 5 Plants for Blackwater Betta Tanks</h3>
            <div className="space-y-2">
              {[
                { rank: 1, plant: "Java Fern", reason: "Leathery leaves are unaffected by low pH or dim tannin-filtered light. Thrives in the exact conditions that Bettas love." },
                { rank: 2, plant: "Cryptocoryne wendtii", reason: "Naturally originates in acidic, shaded Sri Lankan streams — blackwater conditions are its evolutionary home." },
                { rank: 3, plant: "Anubias nana", reason: "Its low metabolic rate is perfectly adapted to the reduced light penetration of tannin-stained water." },
                { rank: 4, plant: "Bucephalandra", reason: "Naturally grows in the shaded, slow-moving blackwaters of Borneo. Produces its most vivid iridescent colors in blackwater." },
                { rank: 5, plant: "Java Moss", reason: "Adapts readily to acidic conditions and adds to the authentic 'decayed natural substrate' aesthetic of a blackwater biotope." },
              ].map((item) => (
                <div key={item.rank} className="flex gap-3 text-xs text-slate-400">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold flex items-center justify-center">{item.rank}</span>
                  <span><strong className="text-white">{item.plant}:</strong> {item.reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
            <p className="text-xs font-semibold text-amber-400 mb-1">Indian Almond Leaves (Catappa)</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Add 1–2 dried Indian Almond leaves per 5 gallons. They slowly decompose to release tannins, humic acids, and fulvic acids — gently buffering pH downward and softening water over 2–4 weeks. They are entirely safe for all 15 plants on this list. Replace monthly as they break down. The brown, natural appearance is not aesthetic decay — it is the most faithful recreation of a wild Betta habitat you can create in glass.
            </p>
          </div>
        </section>

        {/* ── Plants to Avoid ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Plants to Avoid in Betta Tanks</h2>
          <div className="space-y-3">
            {[
              { title: "Surface-Blanket Floaters (Duckweed, Water Lettuce)", risk: "Critical", detail: "Duckweed doubles in biomass daily and will cover 100% of the surface within a week. Blocking the labyrinth organ is lethal. Water Lettuce grows massive rosettes that crowd other floaters. Neither belongs in a Betta tank." },
              { title: "Rigid Plastic Plants", risk: "High", detail: "Plastic plant edges shred Betta fins. Live plants are always preferable. If live plants aren't possible, use ultra-soft silk alternatives — not plastic. Always apply the pantyhose test before adding any decoration." },
              { title: "CO₂-Demanding Plants (HC Cuba, Glossostigma, Rotala macrandra)", risk: "High", detail: "These plants require injected CO₂, high light, and strong circulation — all incompatible with Betta tank conditions. They fail, produce algae, and the aquarist resorts to chemical treatments that further stress the fish." },
              { title: "High-Flow Stem Plants in Low-Flow Betta Tanks", risk: "Moderate", detail: "Some stem plants (Rotala wallichii, Didiplis diandra) perform poorly without good circulation and become vectors for bacterial growth in low-flow Betta setups. The plants that thrive in still water are the same plants that thrive with Bettas." },
              { title: "Vallisneria + Liquid Carbon (Seachem Excel, EasyCarbo)", risk: "Moderate", detail: "If you choose to keep Vallisneria in a Betta tank, never dose glutaraldehyde-based liquid carbon products. Even standard weekly doses cause complete Val melt within 48 hours — adding a rotting plant to your Betta's water." },
              { title: "Lucky Bamboo (submerged leaves)", risk: "Low–Moderate", detail: "Lucky bamboo is a popular Betta tank addition but is not aquatic. The bare stem can be submerged; the leafy portion must stay above water. Submerged leaves rot rapidly, spiking ammonia in small tanks." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <span className={`flex-shrink-0 text-xs font-bold px-2 py-1 rounded border h-fit mt-0.5 ${item.risk === "Critical" ? "text-red-400 bg-red-400/10 border-red-400/20" : item.risk === "High" ? "text-orange-400 bg-orange-400/10 border-orange-400/20" : "text-amber-400 bg-amber-400/10 border-amber-400/20"}`}>
                  {item.risk}
                </span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Common Mistakes ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">8 Betta Plant Mistakes That Cost Fish Lives</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { n: 1, title: "100% Surface Coverage", detail: "The most common and most dangerous mistake. Any floating plant left unmanaged will eventually block the labyrinth organ. Check surface coverage daily in tanks under 10 gallons." },
              { n: 2, title: "Plastic Plants with Long-Finned Bettas", detail: "Rigid plastic fins tear Halfmoon and Rosetail Betta fins within weeks. The damage accumulates gradually — by the time you notice fin rot, extensive tearing has already occurred." },
              { n: 3, title: "Choosing CO₂-Demanding Plants", detail: "HC Cuba, Glossostigma, and Rotala macrandra appear in beautiful tank photos but demand conditions incompatible with Betta health. They die, create algae, and the clean-up process stresses the fish." },
              { n: 4, title: "High-Flow Filtration for Plant Health", detail: "Running a high-GPH canister to keep stem plants healthy while the Betta constantly fights the current is a trade-off that always harms the fish more than it helps the plants. Choose low-flow plants instead." },
              { n: 5, title: "Bright 10–12 Hour Light Cycles", detail: "Bettas naturally live under dense canopy cover. Running high-intensity lights for long hours stresses the fish, triggers algae, and typically causes Bettas to hide rather than explore." },
              { n: 6, title: "Excel + Vallisneria", detail: "Dosing Seachem Excel (glutaraldehyde) in any tank containing Vallisneria causes complete melt of the Val within 48 hours. The decaying plant spikes ammonia directly in the fish's water." },
              { n: 7, title: "No Resting Plants Near the Surface", detail: "A Betta tank with no broad horizontal leaves near the surface forces long-finned varieties to exhaust themselves reaching the surface constantly. They will eventually glass-surf, clamp fins, or develop stress-induced illness." },
              { n: 8, title: "Marimo in Bright, Hot Water 24/7", detail: "Leaving a Marimo in 82°F water under a bright LED indefinitely causes slow internal browning and decomposition. A rotting Marimo releases ammonia into a small tank — harming the Betta it was bought to enrich." },
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
            <Link href="/blog/best-aquarium-plants-for-beginners" className="group flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 hover:bg-white/5 transition-all">
              <span className="text-xl flex-shrink-0">🏆</span>
              <div>
                <p className="font-semibold text-white text-sm group-hover:text-aqua-300 transition-colors">15 Best Beginner Plants</p>
                <p className="text-xs text-slate-500 mt-1">Full species guide with 5-dimension scoring, care data, and scenario picks.</p>
              </div>
            </Link>
            <Link href="/blog/aquarium-plants-melting" className="group flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 hover:bg-white/5 transition-all">
              <span className="text-xl flex-shrink-0">🪴</span>
              <div>
                <p className="font-semibold text-white text-sm group-hover:text-aqua-300 transition-colors">Why Are My Plants Melting?</p>
                <p className="text-xs text-slate-500 mt-1">If your Crypt wendtii just dropped all its leaves after you added it to your Betta tank, read this.</p>
              </div>
            </Link>
            <Link href="/blog/aquarium-plants-without-substrate" className="group flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 hover:bg-white/5 transition-all">
              <span className="text-xl flex-shrink-0">🪨</span>
              <div>
                <p className="font-semibold text-white text-sm group-hover:text-aqua-300 transition-colors">Gravel vs. Sand Substrate Guide</p>
                <p className="text-xs text-slate-500 mt-1">Which substrate works for each plant type — with root tab placement guide.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="rounded-2xl border border-rose-400/20 bg-gradient-to-br from-ocean-800 to-ocean-950 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Shop Plants for Your Betta Tank</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
            Every plant on this list is available from Shore Aquatic — properly labeled with fin safety ratings, light requirements, and Betta compatibility notes so you know exactly what you&apos;re getting for your fish.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/shop?category=Plants" className="rounded-full bg-rose-400 text-white font-semibold px-6 py-2.5 text-sm hover:bg-rose-300 transition-colors">
              Shop Plants for Bettas
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
