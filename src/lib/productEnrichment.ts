// Server-side helpers that generate unique, useful content for every product
// page — so the ~1,300 pages without hand-written care data stop reading as
// "thin" to Google (the 784 "Crawled – currently not indexed"). Also drives an
// internal-link mesh (Related Products), the strongest lever for getting more
// pages indexed.

import type { Product } from "./mockData";

export interface Fact {
  label: string;
  value: string;
}

// ── Related products: same sub-category first, then category, then water type.
// A dense internal-link graph is what pulls "discovered/crawled – not indexed"
// pages into the index.
export function getRelatedProducts(product: Product, all: Product[], n = 6): Product[] {
  const pool = all.filter((p) => p.id !== product.id && p.availability !== "OUT OF SEASON");
  const sameSub = pool.filter((p) => p.subCategory === product.subCategory);
  const sameCat = pool.filter((p) => p.category === product.category && p.subCategory !== product.subCategory);
  const sameWater = pool.filter((p) => p.category !== product.category && p.waterType === product.waterType);
  const seen = new Set<string>();
  const out: Product[] = [];
  for (const p of [...sameSub, ...sameCat, ...sameWater]) {
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    out.push(p);
    if (out.length >= n) break;
  }
  return out;
}

// ── Quick-facts table built from the product's own structured fields, so every
// page carries a unique spec block even without hand-written care data.
export function getQuickFacts(product: Product): Fact[] {
  const facts: Fact[] = [];
  if (product.scientificName) facts.push({ label: "Scientific Name", value: product.scientificName });
  facts.push({ label: "Category", value: product.category });
  if (product.subCategory) facts.push({ label: "Type", value: product.subCategory });
  facts.push({ label: "Water Type", value: product.waterType });
  if (product.size) facts.push({ label: "Size / Portion", value: product.size });
  facts.push({
    label: "Availability",
    value:
      product.availability === "AVAILABLE"
        ? "In stock — ships now"
        : product.availability === "BACKORDER"
        ? "Backorder — we confirm stock before charging"
        : "Out of season",
  });
  facts.push({ label: "Shipping", value: "Fast, insulated shipping · Free 2-day over $100" });
  return facts;
}

// ── Concise, category-aware "About" context (2–4 informative sentences) so no
// page is just a one-line description. Specific, not filler.
export function getAboutContext(product: Product): string {
  const n = product.name;
  const sub = (product.subCategory || "").toLowerCase();
  const tags = product.tags.map((t) => t.toLowerCase());
  const has = (k: string) => tags.some((t) => t.includes(k)) || sub.includes(k) || n.toLowerCase().includes(k);

  const parts: string[] = [];

  switch (product.category) {
    case "Plants": {
      parts.push(`${n} is a live freshwater aquarium plant, grown and hand-selected by Shore Aquatic in South Florida.`);
      if (has("moss")) parts.push("Mosses attach to driftwood and rock, tolerate low light, and give shrimp and fry a biofilm-rich place to graze and hide.");
      else if (has("anubias") || has("rhizome") || has("bucephalandra")) parts.push("As a rhizome plant, it should be tied or glued to hardscape rather than buried — keep the rhizome above the substrate so it doesn't rot.");
      else if (has("stem") || has("bunch")) parts.push("As a stem plant, trim and replant the tops every few weeks to keep it bushy and full; the growing tips hold the best color.");
      else if (has("carpet") || has("foreground")) parts.push("Used as a foreground carpet, it spreads by runners to form a low lawn — brighter light and CO₂ produce the tightest growth.");
      else parts.push("It settles in best in an established tank with stable parameters and a nutrient source at the roots.");
      parts.push("Every plant ships as a healthy specimen with a live arrival guarantee.");
      break;
    }
    case "Water Garden": {
      if (has("lily") || has("lotus")) parts.push(`${n} is a live water lily/lotus for ponds and water gardens, prized for its floating pads and seasonal blooms.`);
      else if (has("marginal") || has("bog")) parts.push(`${n} is a marginal pond plant, grown at the water's edge or in shallow shelves to soften pond borders and support natural filtration.`);
      else parts.push(`${n} is a live pond plant for water gardens and container ponds.`);
      parts.push("Pond plants are seasonal — availability follows the growing season, and orders ship at the right time for safe transit.");
      break;
    }
    case "Saltwater": {
      if (has("macroalgae") || has("chaeto") || has("ogo") || has("caulerpa")) parts.push(`${n} is a live marine macroalgae for reef refugiums, where it exports excess nitrate and phosphate to keep your display algae-free.`);
      else parts.push(`${n} is a live saltwater item cultured for reef and marine aquariums.`);
      parts.push("Ships in insulated packaging to arrive alive and ready to acclimate.");
      break;
    }
    case "Livestock": {
      if (sub.includes("marine fish")) parts.push(`${n} is a saltwater aquarium fish for reef or fish-only marine tanks. Quarantine on arrival is recommended before adding it to a display.`);
      else if (sub.includes("coral")) parts.push(`${n} is a live coral for established reef aquariums. Photos are representative — coloration shifts under different lighting and flow.`);
      else if (sub.includes("anemone")) parts.push(`${n} is a live anemone for mature reef systems with stable parameters and strong lighting.`);
      else if (sub.includes("clam")) parts.push(`${n} is a live Tridacna clam for established reef tanks with strong light and stable calcium and alkalinity.`);
      else if (sub.includes("snail")) parts.push(`${n} is a peaceful, algae-grazing snail — a hard-working member of any freshwater cleanup crew.`);
      else parts.push(`${n} is a reef-safe saltwater invertebrate that earns its keep as part of a marine cleanup crew.`);
      parts.push("All livestock ships overnight with a live arrival guarantee.");
      break;
    }
    case "Dry Goods": {
      parts.push(`${n} is aquarium equipment stocked by Shore Aquatic for freshwater and saltwater hobbyists.`);
      parts.push("Backed by fast shipping and the same hands-on support we give our livestock customers.");
      break;
    }
    default:
      parts.push(`${n} is available from Shore Aquatic with fast, careful shipping.`);
  }
  return parts.join(" ");
}
