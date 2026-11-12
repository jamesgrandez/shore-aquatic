/**
 * bundleData.ts — bundle packs & combo deals.
 *
 * Mirrors the Shopify smart collection "Bundle Packs & Combo Deals"
 * (tag = bundle-pack). Every product here carries BUNDLE_TAG, so it shows on
 * /shop/bundles and in the homepage carousel automatically, newest first.
 *
 * Kept out of mockData.ts on purpose: these are retail combos, not supplier
 * line items, so they must not appear in the wholesale catalog. wholesalePrice
 * is 0 here and is never shown to customers.
 *
 * Copy rules: no "pest-free", "snail-free", "guarantee" or "100% safe" claims.
 */
import { BUNDLE_TAG, type Product } from "./mockData";

const CDN = "https://cdn.shopify.com/s/files/1/0266/9799/0330";

const plantCare = (light = "Low to medium", co2 = "Not needed", difficulty = "Easy") => [
  { label: "Light", value: light },
  { label: "CO2", value: co2 },
  { label: "Temperature", value: "72–82 °F" },
  { label: "Difficulty", value: difficulty },
];

// ── 1a. Live Aquarium Plants Variety Pack — 9 Bundles ──────────────────────
const VARIETY_PACK_HTML = `<p><strong>Nine bundles of hardy, beginner-friendly aquarium plants in one box.</strong> Our best-selling variety pack: the fastest way to fill out a new planted tank without guessing which plants will make it.</p>
<h3>What you get</h3>
<ul>
<li>9 live plant bundles, a mixed assortment picked by our growers from what the nursery is cutting that week.</li>
<li>Typical picks are easy stem and rosette plants such as Bacopa, Ludwigia and Rotala. No two packs are exactly the same.</li>
<li>Each bundle is several stems or cuttings, so you get far more than nine plants once they are separated.</li>
</ul>
<h3>How they ship</h3>
<p>Bare-root bundles and cuttings, the way the aquarium trade moves plants. No pots, no rock wool. That is why nine bundles cost about what one potted plant does.</p>
<h3>On arrival</h3>
<ol>
<li>Open the box the day it arrives. Live plants are packed damp and soften the longer they stay sealed.</li>
<li>Cut the band off every bundle and separate the stems. A banded bundle holds water in the middle and rots from the inside if planted as one clump.</li>
<li>Rinse the plants. Nursery stock can carry a little duckweed or a tiny snail.</li>
<li>Strip the leaves from the bottom inch of each stem and push that inch into the gravel, an inch or two apart.</li>
<li>A soft stem is not a dead plant. Trim back to firm green tissue and plant the healthy top. Stem plants root from the cut.</li>
</ol>
<p>Some older leaves may yellow and drop while the plants settle in. That is normal, and new growth follows.</p>`;

// ── 1b. Planted Tank Bundle by Tank Size (hidden until Shopify draft is live) ──
const TANK_SIZES = [
  { gal: 10, bundles: 12, plants: "21+", price: 41.99, sku: "SA-BUNDLE-10GAL" },
  { gal: 20, bundles: 20, plants: "35+", price: 59.99, sku: "SA-BUNDLE-20GAL" },
  { gal: 55, bundles: 34, plants: "61+", price: 92.99, sku: "SA-BUNDLE-55GAL" },
  { gal: 75, bundles: 45, plants: "81+", price: 112.99, sku: "SA-BUNDLE-75GAL" },
];

const tankHtml = (gal: number, bundles: number, plants: string) => `<p><strong>Everything a ${gal} gallon tank needs, in one box.</strong> ${bundles} named bundles (${plants} plants and stems) chosen so the front, middle and back of the tank are all covered. No mystery mix: you know what is coming and where it goes.</p>
<h3>What is in the pack</h3>
<ul>
<li><strong>About three quarters rooted plants:</strong> Cryptocoryne wendtii (green and bronze), Amazon sword, narrow chain sword, Sagittaria subulata, micro sword, Anubias nana and Java fern.</li>
<li><strong>The rest are stem bunches:</strong> Ludwigia repens, Bacopa caroliniana and Rotala indica for fast background growth.</li>
</ul>
<h3>Conditions</h3>
<p>Low to medium light, no CO2 and plain gravel at 72–82 °F. Every plant in the pack is a proven beginner species.</p>
<h3>On arrival</h3>
<ol>
<li>Open the box the day it arrives and rinse the plants.</li>
<li>Carpet and short plants (micro sword, Sagittaria, crypts) go in front; swords and Anubias in the middle; stem bunches at the back.</li>
<li>Tie Anubias and Java fern to rock or wood. Do not bury their rhizomes.</li>
<li>Cut the band off stem bunches and plant stems an inch or two apart.</li>
</ol>
<p>Crypts can shed leaves for a couple of weeks after a move. That is normal, and they regrow from the roots.</p>`;

const tankBundles: Product[] = TANK_SIZES.map(({ gal, bundles, plants, price, sku }) => ({
  id: `plant-tank-bundle-${gal}gal`,
  name: `Planted Tank Bundle — ${gal} Gallon (${bundles} Bundles, ${plants} Plants)`,
  description: `${bundles} named plant bundles sized for a ${gal} gallon aquarium: crypts, swords, Sagittaria, micro sword, Anubias nana and Java fern plus Ludwigia, Bacopa and Rotala stem bunches. Low to medium light, no CO2 needed.`,
  descriptionHtml: tankHtml(gal, bundles, plants),
  category: "Plants",
  subCategory: "Bundles & Variety Packs",
  waterType: "Freshwater",
  availability: "AVAILABLE",
  price,
  wholesalePrice: 0,
  imageGradient: "from-emerald-900 to-teal-900",
  tags: ["freshwater", BUNDLE_TAG, "bundle", "tank bundle", "starter kit", "beginner"],
  images: [1, 2, 3, 4, 5].map((n) => `/images/bundles/tank-${gal}gal-${n}.jpg`),
  care: plantCare(),
  addedAt: "2026-11-12",
  badge: "Pick your tank size",
  // Shopify product 10429527261370 is still a DRAFT, so checkout would fail.
  // Flip to false once it is active in Shopify (and confirm the handle).
  hidden: true,
  shopify: { handle: "planted-tank-bundle-by-tank-size-10-20-55-or-75-gallon-live-aquarium-plant-pack", sku },
  variantGroup: { key: "planted-tank-bundle", label: "Tank Size", option: `${gal} Gallon` },
}));

export const bundleProducts: Product[] = [
  {
    id: "plant-variety-pack-9-bundles",
    name: "Live Aquarium Plants Variety Pack - 9 Bundles, Easy Beginner Low-Light Starter Kit",
    description: "Nine bundles of hardy, beginner-friendly aquarium plants in one box — a mixed assortment of easy stem and rosette plants such as Bacopa, Ludwigia and Rotala, picked by our growers each week. Bare-root bundles, so you get far more than nine plants once separated.",
    descriptionHtml: VARIETY_PACK_HTML,
    category: "Plants",
    subCategory: "Bundles & Variety Packs",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 29.99,
    wholesalePrice: 0,
    imageGradient: "from-green-900 to-emerald-900",
    tags: ["freshwater", BUNDLE_TAG, "bundle", "variety pack", "starter kit", "beginner", "low light"],
    images: [
      `${CDN}/files/71pIq7DDDwL._AC_SL1080.jpg?v=1794501595`,
      `${CDN}/files/71JhtzO1-zL._AC_SL1400.jpg?v=1794501617`,
      `${CDN}/files/71S6OBAZ85L._AC_SL1400.jpg?v=1794501622`,
      `${CDN}/files/71fYdhb4GML._AC_SL1400.jpg?v=1794501640`,
      `${CDN}/files/71ufrE5Jo8L._AC_SL1400.jpg?v=1794501646`,
      `${CDN}/files/81PeScaNX6L._AC_SL1500.jpg?v=1794501652`,
    ],
    care: plantCare(),
    addedAt: "2026-11-12",
    badge: "NEW",
    shopify: { handle: "live-aquarium-plants-variety-pack-9-bundles-easy-beginner-low-light-starter-kit", sku: "SA-SHOP-9BUNDLE" },
  },
  ...tankBundles,
  {
    id: "plant-eriocaulon-vietnam-3-plus-1",
    name: "Eriocaulon sp. 'Vietnam' 3 Pack + 1 Bonus Plant",
    scientificName: "Eriocaulon sp. 'Vietnam'",
    description: "Four potted Eriocaulon 'Vietnam' for the price of three. Bright green, needle-thin leaves form a tidy star-shaped rosette — a striking foreground accent. Prefers medium light, soft slightly acidic water and a nutrient-rich substrate; CO2 helps it thrive.",
    category: "Plants",
    subCategory: "Bundles & Variety Packs",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 21.99,
    wholesalePrice: 0,
    imageGradient: "from-lime-900 to-green-900",
    tags: ["freshwater", BUNDLE_TAG, "bundle", "eriocaulon", "foreground", "rosette"],
    images: [
      `${CDN}/files/PrietoiPlant1_5.png?v=1758131269`,
      `${CDN}/files/PrietoiPlant1_4.png?v=1758131270`,
      `${CDN}/files/PrietoiPlant1_3.png?v=1758131271`,
      `${CDN}/files/PrietoiPlant1_2.png?v=1758131272`,
    ],
    care: plantCare("Medium", "Recommended", "Moderate"),
    addedAt: "2025-09-17",
    badge: "3 + 1 Bonus",
    shopify: { handle: "3x-eriocaulon-sp-vietnam-1-bonus-plant-tropical-live-aquarium-plants-2-day-arrival" },
  },
  {
    id: "plant-anacharis-buy-2-get-1",
    name: "Anacharis (Egeria densa) — Buy 2 Get 1 Free, 3 Bunches",
    scientificName: "Egeria densa",
    description: "Three bunches of Anacharis for the price of two, four stems per bunch. A classic, fast-growing oxygenating stem plant that soaks up excess nutrients and fills a tank or pond quickly. Low light, no CO2 needed.",
    category: "Plants",
    subCategory: "Bundles & Variety Packs",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 21.99,
    wholesalePrice: 0,
    imageGradient: "from-green-900 to-emerald-900",
    tags: ["freshwater", BUNDLE_TAG, "bundle", "anacharis", "stem plant", "beginner"],
    images: [
      `${CDN}/files/AmazonSword2_24.png?v=1729195788`,
      `${CDN}/files/il_fullxfull.5090792031_hqcg.webp?v=1692124152`,
    ],
    care: plantCare("Low to high"),
    addedAt: "2023-08-15",
    badge: "Buy 2 Get 1",
    shopify: { handle: "buy-2-get-1-free-anacharis-egeria-densa-1-bunch-4-stems-bulk-buying-discounts-your-aquatic-paradise-awaits-with-shore-aquatic", sku: "anacharis" },
  },
  {
    id: "plant-anubias-bundle-3",
    name: "Anubias Bundle — Barteri, Coffeefolia & Nana Petite",
    scientificName: "Anubias barteri varieties",
    description: "Three different Anubias in one bundle: broad-leaf Barteri, rippled bronze-new-growth Coffeefolia and compact Nana Petite. Hardy, slow-growing rhizome plants for low light — tie them to rock or driftwood and never bury the rhizome.",
    category: "Plants",
    subCategory: "Bundles & Variety Packs",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 39.99,
    wholesalePrice: 0,
    imageGradient: "from-green-900 to-teal-900",
    tags: ["freshwater", BUNDLE_TAG, "bundle", "anubias", "low light", "rhizome"],
    images: [
      `${CDN}/files/AmazonSword2_3.png?v=1727896758`,
      `${CDN}/products/AnubiasBarteri_f31a0b05-64ad-4f3f-a996-9906dc0d2aa5.png?v=1672340577`,
    ],
    care: plantCare("Low"),
    addedAt: "2022-12-29",
    badge: "3-Pack",
    shopify: { handle: "anubias-bundle-bartieri-coffee-nana-live-plants", sku: "ANUBIASBUNDLE" },
  },
  {
    id: "plant-anubias-congensis-frazeri-2-pack",
    name: "Anubias Congensis & Frazeri — 2 Plant Bundle",
    scientificName: "Anubias barteri var. congensis & Anubias frazeri",
    description: "Two tall-growing Anubias in one bundle: narrow-leaf Congensis and broad, heart-shaped Frazeri. Hardy low-light rhizome plants that work as mid-ground or background accents. Attach to rock or wood, or plant with the rhizome above the gravel.",
    category: "Plants",
    subCategory: "Bundles & Variety Packs",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 21.99,
    wholesalePrice: 0,
    imageGradient: "from-teal-900 to-green-900",
    tags: ["freshwater", BUNDLE_TAG, "bundle", "anubias", "low light", "rhizome"],
    images: [
      `${CDN}/files/AmazonSword2_4.png?v=1727897060`,
      `${CDN}/files/AmazonSword2_5.png?v=1727897086`,
    ],
    care: plantCare("Low"),
    addedAt: "2022-12-29",
    badge: "2-Pack",
    shopify: { handle: "anubias-congensis-frazeri-live-plant-2-pack", sku: "ACAF2PK" },
  },
  {
    id: "plant-green-plant-bundle",
    name: "Green Plant Bundle — Anubias Barteri & Java Fern",
    scientificName: "Anubias barteri & Microsorum pteropus",
    description: "The two easiest aquarium plants in one bundle: one Anubias barteri and one Java fern. Both grow on rock or driftwood, need only low light and no CO2, and give fish and shrimp natural cover.",
    category: "Plants",
    subCategory: "Bundles & Variety Packs",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 24.99,
    wholesalePrice: 0,
    imageGradient: "from-green-900 to-emerald-900",
    tags: ["freshwater", BUNDLE_TAG, "bundle", "anubias", "java fern", "low light", "beginner"],
    images: [
      `${CDN}/products/GreenPlantsBundle.jpg?v=1672258090`,
      `${CDN}/products/JavaFern2_986f0aca-c836-4cbd-b164-80981de5fe00.png?v=1672258091`,
    ],
    care: plantCare("Low"),
    addedAt: "2022-12-28",
    badge: "2-Pack",
    shopify: { handle: "green-plant-bundle-anubias-barteri-and-java-fern-live-plants", sku: "ABJFBUN" },
  },
  {
    id: "sw-macro-bundle-hayi-ogo",
    name: "Marine Macro Bundle — Red Gracilaria Hayi & Red OGO",
    scientificName: "Gracilaria hayi & Gracilaria parvispora",
    description: "One frag each of Red Gracilaria Hayi and Red OGO Gracilaria. Colorful red macroalgae that export nitrates and phosphates, house copepods, and double as a favorite food for tangs and rabbitfish. Great for refugiums and display tanks.",
    category: "Saltwater",
    subCategory: "Macroalgae",
    waterType: "Saltwater",
    availability: "AVAILABLE",
    price: 49.99,
    wholesalePrice: 0,
    imageGradient: "from-rose-900 to-red-900",
    tags: ["saltwater", BUNDLE_TAG, "bundle", "macroalgae", "refugium", "gracilaria"],
    images: [
      `${CDN}/files/REDMACROBUNDLE.jpg?v=1685890144`,
      `${CDN}/files/RedHayi_f3ea60e3-e6ed-4a3c-900d-c31d0c92bc47.jpg?v=1685890144`,
    ],
    addedAt: "2023-06-04",
    badge: "2-Pack",
    shopify: { handle: "marine-macro-bundle-1-frag-red-gracilaria-hayi-1-frag-red-ogo-gracilaria-ideal-for-marine-aquarium-setup", sku: "008500418693911" },
  },
  {
    id: "sw-macro-bundle-4-pack",
    name: "Macro Bundle 4 Pack — Gracilaria Hayi, Red OGO, Caulerpa Mexicana & Prolifera",
    scientificName: "Gracilaria & Caulerpa spp.",
    description: "Four top-selling macroalgae in one pack: 1 frag Gracilaria Hayi, 1 frag Red OGO, 5 blades Caulerpa mexicana and 5 blades Caulerpa prolifera. A ready-made refugium or aquascape mix for nutrient export and copepod habitat.",
    category: "Saltwater",
    subCategory: "Macroalgae",
    waterType: "Saltwater",
    availability: "AVAILABLE",
    price: 99.99,
    wholesalePrice: 0,
    imageGradient: "from-emerald-900 to-rose-900",
    tags: ["saltwater", BUNDLE_TAG, "bundle", "macroalgae", "refugium", "caulerpa", "gracilaria"],
    images: [
      `${CDN}/files/macro4pack.jpg?v=1685887921`,
      `${CDN}/files/CaulerpaTaxi_17283fb4-bb9e-41d2-93b4-a10745074461.jpg?v=1685887920`,
    ],
    addedAt: "2023-06-04",
    badge: "4-Pack",
    shopify: { handle: "macro-bundle-4-pack-gracilaria-hayi-red-ogo-gracilaria-caulerpa-mexicana-taxifolia-caulerpa-prolifera-ideal-for-marine-aquarium-setup", sku: "00850041869391" },
  },
];
