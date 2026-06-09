// Care guide enrichment helpers.
// Generates per-plant unique content from the structured PlantDetail fields so
// every care guide renders ~600-900 words of genuinely distinct, useful content
// without requiring hand-written copy for each entry.

import type { PlantDetail } from "./plantDetails";

// ───────────────────────── Genus / Family knowledge ─────────────────────────

// Genus → fallback family. Used when PlantDetail.family is empty.
const GENUS_FAMILY: Record<string, string> = {
  acorus: "Acoraceae",
  acrostichum: "Pteridaceae",
  alternanthera: "Amaranthaceae",
  alternanther: "Amaranthaceae",
  ammania: "Lythraceae",
  ammannia: "Lythraceae",
  anubias: "Araceae",
  aponogeton: "Aponogetonaceae",
  arundo: "Poaceae",
  bacopa: "Plantaginaceae",
  baumea: "Cyperaceae",
  blyxa: "Hydrocharitaceae",
  bolbitis: "Lomariopsidaceae",
  butomus: "Butomaceae",
  cabomba: "Cabombaceae",
  caltha: "Ranunculaceae",
  canna: "Cannaceae",
  ceratopteris: "Pteridaceae",
  ceratophyllum: "Ceratophyllaceae",
  cladophora: "Cladophoraceae",
  cryptocoryne: "Araceae",
  cyperus: "Cyperaceae",
  echinodorus: "Alismataceae",
  egeria: "Hydrocharitaceae",
  eichhornia: "Pontederiaceae",
  eleocharis: "Cyperaceae",
  glossostigma: "Scrophulariaceae",
  hemianthus: "Linderniaceae",
  heteranthera: "Pontederiaceae",
  hibiscus: "Malvaceae",
  hydrocotyle: "Araliaceae",
  hygrophila: "Acanthaceae",
  hymenocallis: "Amaryllidaceae",
  iris: "Iridaceae",
  isoetes: "Isoetaceae",
  juncus: "Juncaceae",
  lilaeopsis: "Apiaceae",
  limnobium: "Hydrocharitaceae",
  limnophila: "Plantaginaceae",
  ludwigia: "Onagraceae",
  lysimachia: "Primulaceae",
  marsilea: "Marsileaceae",
  mayaca: "Mayacaceae",
  microsorum: "Polypodiaceae",
  mimulus: "Phrymaceae",
  myriophyllum: "Haloragaceae",
  nelumbo: "Nelumbonaceae",
  nesaea: "Lythraceae",
  nuphar: "Nymphaeaceae",
  nymphaea: "Nymphaeaceae",
  ophiopogon: "Asparagaceae",
  pennywort: "Araliaceae",
  phalaris: "Poaceae",
  phragmites: "Poaceae",
  physostegia: "Lamiaceae",
  pistia: "Araceae",
  pogostemon: "Lamiaceae",
  pontederia: "Pontederiaceae",
  riccia: "Ricciaceae",
  rotala: "Lythraceae",
  sagittaria: "Alismataceae",
  salvinia: "Salviniaceae",
  schoenoplectus: "Cyperaceae",
  staurogyne: "Acanthaceae",
  taxiphyllum: "Hypnaceae",
  typha: "Typhaceae",
  vallisneria: "Hydrocharitaceae",
  vesicularia: "Hypnaceae",
  zephyranthes: "Amaryllidaceae",
};

// Genus → 2-3 sentence background paragraph (used in Genus Background section).
const GENUS_NOTES: Record<string, string> = {
  anubias:
    "Anubias is a genus of slow-growing rhizome plants prized in the planted-tank hobby for being nearly indestructible. They attach to driftwood and rock rather than rooting in substrate, tolerate low light, and rarely need CO2, which makes them a staple for low-tech tanks, cichlid setups, and beginner aquascapes.",
  cryptocoryne:
    "Cryptocoryne (\"Crypts\") are rosette-forming Araceae from Southeast Asian streams and flooded forests. They are famous for \"melting\" — shedding submerged leaves and regrowing — when conditions change, then settling in as low-maintenance midground anchors that thrive in soft, acidic water with modest light.",
  echinodorus:
    "Echinodorus (\"Amazon swords\") are large rosette plants from South American river basins, used as background or specimen plants in larger aquariums. They are heavy root feeders, so a nutrient-rich substrate or root tabs make a noticeable difference in leaf size and color.",
  aponogeton:
    "Aponogeton are bulb plants that produce long, flowing leaves and benefit from a seasonal rest period — many varieties will die back, then resprout from the bulb after a few months of dormancy. They are dramatic background plants for medium-light tanks.",
  vallisneria:
    "Vallisneria (\"vals\") are tape-leaf rosette plants that spread by runners, quickly forming dense background curtains. They prefer harder water and don't tolerate aggressive trimming of the leaf tips, which can cause die-back from the cut.",
  ludwigia:
    "Ludwigia are red-to-orange stem plants in the Onagraceae family. Strong light and CO2 deepen their color, but most species also do well as bushy green stems in moderate-light tanks. They propagate easily from cuttings.",
  rotala:
    "Rotala are slender stem plants in the Lythraceae family, used as background fillers and color accents. Most species respond dramatically to light intensity, expressing yellow, orange, pink, or red tones under high light and CO2 enrichment.",
  bacopa:
    "Bacopa is a versatile genus of stem plants that adapts to low or high light and grows both submerged and emersed. Pinching the growing tip encourages side shoots and a bushier form.",
  hygrophila:
    "Hygrophila are fast-growing, undemanding stem plants — good background \"workhorse\" species that quickly take up excess nutrients and help suppress nuisance algae in newly cycled tanks.",
  microsorum:
    "Microsorum (Java fern) is an epiphyte attached to wood or stone — never bury the rhizome or it rots. It is among the most beginner-friendly aquarium plants, tolerating low light and a wide pH/temperature range.",
  taxiphyllum:
    "Taxiphyllum (Java moss and related species) attaches to almost any hardscape and forms dense mats that shrimp, fry, and biofilm grazers depend on for cover and food. It tolerates low light and a wide temperature range.",
  vesicularia:
    "Vesicularia (Christmas moss, weeping moss, Singapore moss) is a group of true aquarium mosses that form decorative drapes over hardscape. They prefer slightly cooler water and benefit from gentle current that keeps debris off the fronds.",
  cabomba:
    "Cabomba are fan-leaved stem plants with finely divided foliage. They need bright light to keep lower leaves; in dim tanks they get leggy and bald at the base.",
  ceratophyllum:
    "Ceratophyllum (Hornwort) is a rootless floating or anchored stem that absorbs nutrients directly from the water column. It is often used in shrimp tanks and as a fast nitrate sponge in newly cycled aquariums.",
  pogostemon:
    "Pogostemon are stem plants in the Lamiaceae family with distinctive whorled leaves. Several species are demanding — strong light and CO2 produce their best color and form, while low light leads to thin, stretched stems.",
  cabombaceae:
    "Cabombaceae plants are fan-leaved stem species best in well-lit tanks with stable parameters.",
  cladophora:
    "Cladophora aegagropila — \"Marimo\" — is a non-invasive freshwater algae that slowly forms green spheres in cold lakes. They are pet-like, long-lived, and useful for shrimp and snail tanks as biofilm anchors.",
  marsilea:
    "Marsilea is a small clover-like fern that forms a low carpet in moderate light. It is much less demanding than other carpeting plants and is a good first foreground choice for low-tech tanks.",
  lilaeopsis:
    "Lilaeopsis forms a grass-like carpet by spreading rhizomes. It needs moderate-to-high light and patience — establishment is slow but the result is a durable, dense lawn.",
  glossostigma:
    "Glossostigma elatinoides is a classic foreground carpeting plant that requires strong light and CO2. Without those, it grows tall and leggy reaching for the light instead of carpeting.",
  hemianthus:
    "Hemianthus callitrichoides (\"dwarf baby tears\") is the smallest commonly available carpeting plant and one of the most demanding — high light, CO2, and a nutrient-rich substrate are needed for a tight, low carpet.",
  staurogyne:
    "Staurogyne repens is a small bushy foreground plant — easier than Glossostigma or HC, but still benefits from CO2 for a compact form. It is often used in shrimp aquascapes.",
  riccia:
    "Riccia fluitans is a floating liverwort traditionally tied to stones or mesh to create a bright green \"meadow.\" High light keeps it pearling oxygen visibly.",
  pontederia:
    "Pontederia (pickerelweed) is a pond/bog perennial with blue or violet flower spikes, used at pond edges and in bog filtration.",
  cyperus:
    "Cyperus (umbrella sedge family) thrives at the edges of ponds and water gardens, with grass-like clumps and small flower heads.",
  iris:
    "Water-tolerant iris species (Louisiana, Japanese, yellow flag) are mainstays of bog gardens and pond edges, offering vivid blooms in late spring and structural foliage all season.",
  juncus:
    "Juncus (rushes) are stiff, upright clumping plants used at pond edges for vertical accent and for filtration in constructed wetlands.",
  typha:
    "Typha (cattails) are aggressive wetland spreaders best used in large ponds and bog filters — small or contained ponds need their rhizomes restricted with planting baskets.",
  nelumbo:
    "Nelumbo (lotus) are large emergent perennials grown for spectacular summer blooms. They need still water, full sun, and a deep, nutrient-rich planter.",
  nymphaea:
    "Nymphaea (water lilies) cover the water surface with floating pads and produce iconic open-faced blooms. Most cultivars are hardy in temperate ponds; tropical varieties need warm water year-round.",
  acorus:
    "Acorus (sweet flag) is a grass-like marginal plant. Despite being sold in the aquarium trade, it is not a true aquatic — submerged leaves slowly decline over a few months and the plant must spend most of its time emergent to thrive.",
};

// Genus-specific quirks and care tips (shown in Pro Tips block).
const GENUS_PRO_TIPS: Record<string, string[]> = {
  anubias: [
    "Never bury the green rhizome — only the white roots should touch substrate, or the rhizome rots.",
    "Attach to driftwood or stone with cotton thread, super glue gel, or a rubber band until the roots grip.",
    "Wipe leaves gently to remove dust algae — Anubias leaves are tough enough to handle physical cleaning.",
  ],
  cryptocoryne: [
    "Expect \"Crypt melt\" when first added — leaves dissolve, then new submerged-form leaves regrow over 4-6 weeks.",
    "Plant once and leave alone — Crypts hate being disturbed and will melt again if uprooted.",
    "Use root tabs near the base; Crypts feed primarily from substrate, not the water column.",
  ],
  echinodorus: [
    "Add root tabs every 3-4 months under the rosette — sword plants are heavy substrate feeders.",
    "Trim outer leaves at the base, not partway up the leaf — partial cuts brown back and look ragged.",
    "Daughter plantlets that grow on the flower stalks can be cut off and replanted as new specimens.",
  ],
  vallisneria: [
    "Don't cut the leaf tips — Vals brown back from cuts. If a leaf is too long, remove the whole blade at the base.",
    "Avoid Excel/glutaraldehyde-based algaecides; Vallisneria is famously sensitive to them.",
    "Plant only the white root crown above the substrate, not the leaf base.",
  ],
  microsorum: [
    "Never bury the rhizome — tie it to wood or stone until roots grip.",
    "Java fern reproduces by black plantlets on leaf tips; remove and reattach them or let the colony self-spread.",
    "Brown spots are usually normal sporing, not disease.",
  ],
  taxiphyllum: [
    "Tie fresh moss thinly across hardscape — thick mats trap detritus and the inner layer browns out.",
    "Trim moss with sharp scissors every 4-6 weeks to keep it tight and bright.",
    "Most moss species prefer water under 78°F (25°C) — tropical tanks above that can stunt growth.",
  ],
  rotala: [
    "Top-prune (cut and replant tops) to maintain color — the new growth tips hold the strongest color.",
    "More light + CO2 = more red. Without those, expect a green or peach-pink color expression.",
    "Plant stems individually with ~1 cm spacing; clumped stems shade each other and the inner stems die back.",
  ],
  ludwigia: [
    "Cut and replant the tops every few weeks — the new growth holds the best red tones.",
    "Iron-rich liquid ferts and lean nitrate intensify red coloration in Ludwigia.",
  ],
  bacopa: [
    "Pinch the growing tip to encourage side branching and a bushier shape.",
    "Bacopa is highly adaptable — it grows submerged, emersed, and in paludariums.",
  ],
  hygrophila: [
    "Trim frequently — Hygrophila grows fast and will shade out neighboring plants if left.",
    "Replant cut tops; old stems get leggy at the base and look thin over time.",
  ],
  cabomba: [
    "Cabomba needs strong light — in dim tanks it gets leggy and bald at the base.",
    "Replant the tops every few weeks rather than trimming; lower stems brown out.",
  ],
  pogostemon: [
    "Pogostemon helferi (downoi) needs strong light and CO2 to stay compact — without them it stretches upward.",
    "Don't bury the leaves when planting; only the roots go into the substrate.",
  ],
  cladophora: [
    "Roll the moss ball gently every few days to keep its spherical shape.",
    "Marimo prefers cool water under 75°F (24°C); above that they brown out.",
    "Periodically swap their water position so all sides get light, preventing brown spots.",
  ],
  marsilea: [
    "Plant in small clumps spaced 2-3 cm apart and let runners fill in the gaps.",
    "Under low light Marsilea grows tall with four-leaf clover tops; under high light it stays low and produces single-leaf carpets.",
  ],
  hemianthus: [
    "Plant tiny portions (3-5 stems) on 1 cm centers — dense initial planting is the only way to get a tight carpet.",
    "CO2 is essentially mandatory for true low-carpet form.",
  ],
  glossostigma: [
    "Cut and replant any stems that stretch upward — Glosso must be pushed back down to stay flat.",
    "Without CO2, Glosso almost always grows leggy. Choose Marsilea or Staurogyne for low-tech tanks instead.",
  ],
  staurogyne: [
    "Plant small portions on 2-3 cm centers and let it bush out laterally.",
    "Trim the tops to encourage side shoots and a fuller midground bush.",
  ],
  ceratophyllum: [
    "Hornwort is rootless — it can float freely or be wedged into substrate; either works.",
    "It sheds its needles when adjusting to new water; expect a mess for the first week.",
    "Excellent nitrate sponge — useful in shrimp tanks, fry tanks, and newly cycled aquariums.",
  ],
  acorus: [
    "Not a true aquatic — limit submerged stays to a few months, then move emersed to rejuvenate.",
    "Best used as a pond margin or terrarium plant rather than a submerged aquarium plant.",
  ],
};

// ──────────────────────────── Helpers ────────────────────────────

export function extractGenus(slug: string): string {
  return slug.split("-")[0];
}

export function getFamilyOrFallback(detail: PlantDetail): string {
  if (detail.family) return detail.family;
  const genus = extractGenus(detail.slug);
  return GENUS_FAMILY[genus] || "";
}

export function getGenusBackground(detail: PlantDetail): string | null {
  const genus = extractGenus(detail.slug);
  return GENUS_NOTES[genus] || null;
}

export function getGenusProTips(detail: PlantDetail): string[] {
  const genus = extractGenus(detail.slug);
  return GENUS_PRO_TIPS[genus] || [];
}

// Normalize lighting strings to a coarse bucket.
type LightLevel = "low" | "medium" | "high" | "unknown";
export function getLightLevel(lighting: string): LightLevel {
  const l = (lighting || "").toLowerCase();
  if (!l) return "unknown";
  // Heuristics — many entries use ranges like "Low - Medium" or "Medium to high"
  const hasLow = /low/.test(l);
  const hasMed = /medium|moderate|med-|mod-/.test(l);
  const hasHigh = /high|intense/.test(l);
  if (hasHigh && !hasLow && !hasMed) return "high";
  if (hasLow && !hasHigh) return "low";
  if (hasMed) return "medium";
  if (hasHigh) return "high";
  return "unknown";
}

type RateLevel = "slow" | "moderate" | "fast" | "unknown";
export function getRateLevel(rate: string): RateLevel {
  const r = (rate || "").toLowerCase();
  if (!r) return "unknown";
  if (/extremely slow|very slow/.test(r)) return "slow";
  if (/slow/.test(r) && !/fast/.test(r)) return "slow";
  if (/fast|very fast/.test(r)) return "fast";
  if (/medium|moderate/.test(r)) return "moderate";
  return "unknown";
}

export function isTrueAquatic(t: string): boolean {
  const s = (t || "").toLowerCase();
  if (!s) return true; // assume yes if unspecified
  if (/^no\b|terrarium|terrestrial/.test(s)) return false;
  return true;
}

// ───────────── Difficulty + Tank-context recommendations ─────────────

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export function getDifficulty(detail: PlantDetail): {
  level: Difficulty;
  rationale: string;
} {
  const reqs = (detail.requirements || "").toLowerCase();
  const light = getLightLevel(detail.lighting);
  if (/easy|beginner/.test(reqs)) {
    return {
      level: "Beginner",
      rationale: `Tolerates a wide range of conditions and forgives setup mistakes. ${
        light === "low" ? "Thrives even in low-light tanks." : "Adapts to most lighting setups."
      }`,
    };
  }
  if (/demanding|difficult|moderately demanding/.test(reqs) || light === "high") {
    return {
      level: "Advanced",
      rationale:
        "Performs best with strong lighting, CO2 supplementation, and stable water parameters. Not recommended as a first plant.",
    };
  }
  if (/co2|fertilization|good light|strong light/.test(reqs) || light === "medium") {
    return {
      level: "Intermediate",
      rationale:
        "Grows reliably in moderate-tech tanks. Benefits from steady fertilization and adequate light, but does not require CO2 to survive.",
    };
  }
  return {
    level: "Intermediate",
    rationale:
      "Forgiving enough for hobbyists with one tank of experience. Watch lighting and nutrient levels for best growth.",
  };
}

export function getCO2Recommendation(detail: PlantDetail): string {
  const reqs = (detail.requirements || "").toLowerCase();
  const light = getLightLevel(detail.lighting);
  if (/co2/.test(reqs)) {
    return "CO2 supplementation is recommended for best growth and color. Liquid carbon (Easy Carbon, Excel) is a workable substitute, though pressurized CO2 produces the strongest results.";
  }
  if (light === "high") {
    return "Pressurized CO2 is strongly recommended at this light level — without it, algae will outcompete the plant.";
  }
  if (light === "low") {
    return "CO2 is not required. This plant performs well in low-tech tanks with only basic liquid fertilization.";
  }
  return "CO2 is optional. Growth improves with supplementation, but the plant survives and stays presentable without it.";
}

export function getTankSizeRecommendation(detail: PlantDetail): string {
  const placement = (detail.placement || "").toLowerCase();
  const form = (detail.growthForm || "").toLowerCase();
  if (/foreground/.test(placement) || /carpet|creeping|mat/.test(form)) {
    return "Suits tanks of any size. Foreground carpeting plants work especially well in 10-40 gallon planted setups where the viewer is close to the substrate.";
  }
  if (/background/.test(placement) || form.includes("stem") || /tall|upright/.test(form)) {
    return "Best in tanks 20 gallons or larger so background stems have room to grow up and be trimmed without overtaking the foreground.";
  }
  if (form.includes("bulb") || /sword|rosette/.test(form)) {
    return "Plan for at least 20 gallons. Rosette plants spread a foot or wider once established and need vertical room.";
  }
  return "Works in tanks 10 gallons and up. Match the plant size to your tank depth for the cleanest aquascape.";
}

// ───────────── Aquascaping + Tank-mate guidance ─────────────

export function getAquascapingNotes(detail: PlantDetail): string {
  const placement = (detail.placement || "").toLowerCase();
  const form = (detail.growthForm || "").toLowerCase();
  const parts: string[] = [];

  if (/foreground/.test(placement) || /carpet|creeping/.test(form)) {
    parts.push(
      "Use as a foreground carpeting plant. Plant small portions on 2-3 cm centers and let runners fill the gaps over 4-8 weeks."
    );
  } else if (/mid/.test(placement)) {
    parts.push(
      "Place in the midground between foreground carpets and tall background stems. The structure adds visual depth and shelters small fish and shrimp."
    );
  } else if (/background/.test(placement)) {
    parts.push(
      "Plant at the back of the tank as a vertical accent or full background curtain. Group stems in clusters of 5-10 for a fuller display."
    );
  } else {
    parts.push(
      "Position to suit your aquascape — most placements work as long as light reaches the leaves."
    );
  }

  if (form.includes("rhizome")) {
    parts.push(
      "The rhizome is the green horizontal stem. Attach it to driftwood, lava rock, or stone with cotton thread or super-glue gel — burying the rhizome causes rot."
    );
  } else if (form.includes("rosette")) {
    parts.push(
      "Plant the root crown just at the substrate surface. Burying the crown causes the plant to push itself back up over a few days."
    );
  } else if (form.includes("stem")) {
    parts.push(
      "Trim and replant the tops every 3-4 weeks. The new growth tips hold the best color and form, while lower stems eventually need replacing."
    );
  } else if (form.includes("bulb")) {
    parts.push(
      "Set the bulb on top of the substrate, not buried, until roots take hold. Expect a dormant period after flowering."
    );
  }

  return parts.join(" ");
}

export function getTankMateCompatibility(detail: PlantDetail): string {
  const parts: string[] = [];

  if (!isTrueAquatic(detail.trueAquatic)) {
    parts.push(
      "Best suited to paludariums, riparium displays, and pond margins rather than fully submerged community tanks."
    );
    return parts.join(" ");
  }

  parts.push(
    "Compatible with the full range of community-tank species — tetras, rasboras, livebearers, corydoras, and most other peaceful freshwater fish do not damage the foliage."
  );

  const reqs = (detail.requirements || "").toLowerCase();
  if (/easy|beginner|hardy/.test(reqs) || /anubias|microsorum|cryptocoryne/.test(detail.slug)) {
    parts.push(
      "Tough enough for cichlid tanks and goldfish setups where most other plants are uprooted or eaten — the leaves are too leathery for those fish to chew through."
    );
  }

  if (/shrimp|moss|riccia|taxiphyllum|vesicularia|cladophora|hemianthus|staurogyne/.test(detail.slug)) {
    parts.push(
      "Excellent in shrimp tanks. The fine leaf structure and biofilm surface make it a top pick for breeding Neocaridina and Caridina species."
    );
  }

  return parts.join(" ");
}

// ───────────── Common care issues ─────────────

export function getCommonIssues(detail: PlantDetail): { title: string; body: string }[] {
  const issues: { title: string; body: string }[] = [];
  const form = (detail.growthForm || "").toLowerCase();
  const light = getLightLevel(detail.lighting);
  const rate = getRateLevel(detail.growthRate);

  if (form.includes("rhizome")) {
    issues.push({
      title: "Rhizome rot",
      body: "The rhizome (the thick horizontal stem) must stay above the substrate. Buried rhizomes turn black and mushy within a few weeks. Tie the plant to hardscape or wedge it between rocks instead.",
    });
  }

  if (light === "high") {
    issues.push({
      title: "Algae outbreaks",
      body: "High-light plants without matched CO2 and nutrient dosing reliably trigger algae blooms. If you can't run pressurized CO2, choose a lower-light alternative or accept some algae management.",
    });
  } else if (light === "low") {
    issues.push({
      title: "Pale or stretched leaves",
      body: "If new growth comes in pale yellow or the stems stretch unusually long, the plant is reaching for more light. Either raise the fixture's intensity or add a richer fertilizer.",
    });
  }

  if (rate === "fast") {
    issues.push({
      title: "Outgrowing the tank",
      body: "Plan to trim every 1-2 weeks. Skipping trims lets the plant shade out neighbors and trap detritus that fouls water quality.",
    });
  } else if (rate === "slow") {
    issues.push({
      title: "Algae on old leaves",
      body: "Slow growers accumulate dust and spot algae on older leaves. Wipe affected leaves with your fingers during water changes, and consider adding a few Amano shrimp or Otocinclus as cleaners.",
    });
  }

  if (/melt|crypt/.test(detail.slug) || /cryptocoryne/.test(detail.slug)) {
    issues.push({
      title: "\"Crypt melt\" after transplant",
      body: "Expect leaves to dissolve in the first 1-2 weeks after planting or any major parameter change. The rhizome and roots stay alive and push out new, submerged-form leaves within 4-6 weeks. Don't dig it up.",
    });
  }

  if (!isTrueAquatic(detail.trueAquatic)) {
    issues.push({
      title: "Decline after a few months underwater",
      body: "This species is not a true aquatic and slowly declines when permanently submerged. Move it to a humid emersed setup (paludarium, terrarium, pond margin) for several months to rejuvenate.",
    });
  }

  // Guarantee at least 2 issues
  if (issues.length < 2) {
    issues.push({
      title: "Slow initial growth",
      body: "Most aquarium plants pause for 2-4 weeks after planting while they convert from their nursery-grown emersed form to fully submerged growth. New leaves that emerge underwater will look thinner and slightly different — this is the plant adapting, not a problem.",
    });
  }
  return issues;
}

// ───────────── FAQ generation (used for FAQPage schema) ─────────────

export function getFAQs(
  detail: PlantDetail,
  scientificName: string
): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = [];
  const light = getLightLevel(detail.lighting);
  const rate = getRateLevel(detail.growthRate);
  const diff = getDifficulty(detail);

  // 1. Lighting
  faqs.push({
    q: `How much light does ${detail.commonName} need?`,
    a: detail.lighting
      ? `${detail.commonName} (${scientificName}) prefers ${detail.lighting.toLowerCase()} lighting. ${
          light === "high"
            ? "Plan on a high-output LED fixture combined with pressurized CO2 for the best color and form."
            : light === "low"
            ? "Standard tank lighting is sufficient — no specialty fixture is required."
            : "A standard planted-tank LED fixture run 7-9 hours a day is typical."
        }`
      : `${detail.commonName} adapts to most planted-tank lighting setups. A standard LED fixture run 7-9 hours a day produces good growth.`,
  });

  // 2. CO2
  faqs.push({
    q: `Does ${detail.commonName} need CO2?`,
    a: getCO2Recommendation(detail),
  });

  // 3. Beginner-friendly?
  faqs.push({
    q: `Is ${detail.commonName} good for beginners?`,
    a: `${detail.commonName} is rated ${diff.level.toLowerCase()}-level. ${diff.rationale}`,
  });

  // 4. Growth rate / propagation
  faqs.push({
    q: `How fast does ${detail.commonName} grow?`,
    a: detail.growthRate
      ? `Growth rate is ${detail.growthRate.toLowerCase()}. ${
          rate === "fast"
            ? "Expect to trim every 1-2 weeks once established."
            : rate === "slow"
            ? "Be patient — visible new growth may take 3-4 weeks, but the plant is famously low-maintenance once settled."
            : "Most aquarists trim every 3-4 weeks under standard conditions."
        }`
      : `Most planted-tank growers report moderate growth, with trims needed every few weeks under typical conditions.`,
  });

  // 5. Compatibility
  faqs.push({
    q: `What fish and invertebrates are compatible with ${detail.commonName}?`,
    a: getTankMateCompatibility(detail),
  });

  // 6. True aquatic clarification (only if non-trivial)
  if (!isTrueAquatic(detail.trueAquatic)) {
    faqs.push({
      q: `Can ${detail.commonName} live fully submerged long-term?`,
      a: `No. ${detail.commonName} is not a true aquatic plant and slowly declines after a few months underwater. Use it as a temporary display piece in an aquarium, or grow it permanently in a paludarium, riparium, or pond margin where the leaves can reach air.`,
    });
  }

  return faqs;
}

// Suggested family-level cross-link block (3-6 related guides).
export function relatedGuides<T extends { slug: string; family: string }>(
  current: T,
  all: T[],
  maxOut = 6
): T[] {
  const fam = current.family;
  const genus = extractGenus(current.slug);
  const sameFamily = all.filter(
    (p) => p.slug !== current.slug && p.family && p.family === fam
  );
  const sameGenus = all.filter(
    (p) => p.slug !== current.slug && extractGenus(p.slug) === genus
  );
  // De-dupe, preferring genus matches first, then family matches.
  const seen = new Set<string>();
  const out: T[] = [];
  for (const p of [...sameGenus, ...sameFamily]) {
    if (seen.has(p.slug)) continue;
    seen.add(p.slug);
    out.push(p);
    if (out.length >= maxOut) break;
  }
  return out;
}
