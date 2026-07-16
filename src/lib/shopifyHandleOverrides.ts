/**
 * shopifyHandleOverrides.ts
 *
 * The website's default rule maps a product id straight to a Shopify handle
 * (`id.toLowerCase().replace('_','-')` — see shopifyCart.ts). That works for
 * ~780 products, but our Shopify store was built with a DIFFERENT naming scheme
 * for some items (retail SEO slugs like
 * `eleocharis-pusilla-dwarf-hairgrass-...`, or a `-nl` "No Weight" suffix).
 * For those, the default rule can't find the product and checkout fails with
 * "hasn't been imported to Shopify yet."
 *
 * This map fixes that: website id → the ACTUAL Shopify handle. Every handle
 * below was verified against the Shopify product export as Active + Published
 * (2026-07-16). getVariantIdByHandle() consults this map before falling back
 * to the default rule.
 *
 * NOTE on the `-nl` / potted equivalents: where the site product isn't in
 * Shopify but the same plant is sold as a "No Weight" bunch or a potted retail
 * listing, we point at that sellable form. Same plant, may differ slightly in
 * packaging — confirm pricing parity if it matters for a given SKU.
 *
 * Items still needing a Shopify-side fix (draft/unpublished, or truly not
 * created yet) are NOT listed here — see .seo/shopify-inventory-gaps.md.
 */
export const SHOPIFY_HANDLE_OVERRIDES: Record<string, string> = {
  // ── Aquarium plants → retail potted listings ──────────────────────────────
  "plant-phadw": "eleocharis-pusilla-dwarf-hairgrass-potted-freshwater-aquarium-plant-buy-2-get-1-free", // Dwarf Hairgrass (BOGO)
  "plant-pcapl": "cardinal-lobelia-cardinalis-potted-freshwater-aquarium-plant",                          // Cardinal Plant
  "plant-pcrlu": "cryptocoryne-walkeri-lutea-freshwater-aquarium-potted-plant-buy-2-get-1-free",          // C. Lutea
  "plant-pcrpa": "cryptocoryne-parva-freshwater-aquarium-potted-plant",                                   // C. Parva
  "plant-pcrweb": "wendtii-bronze-or-tropica-cryptocoryne-buy-2-get-1-free-freshwater-aquarium-plant",    // C. Wendtii Bronze
  "plant-pcrwer": "wendtii-red-cryptocoryne-wendtil-mi-oya-buy-2-get-1-free-freshwater-aquarium-plant",   // C. Wendtii Red
  "plant-pfole": "marsilea-quadrifolia-four-leaf-clover-potted-freshwater-aquarium-plant-buy-2-get-1-free", // Four Leaf Clover
  "plant-pglo": "glossostigma-elatinoides-potted-freshwater-aquarium-plant-buy-2-get-1-free",             // Glossostigma
  "plant-pmisw": "micro-sword-lilaeopsis-brasiliensis-potted-freshwater-aquarium-plant",                  // Micro Sword
  "plant-pori": "echinodorus-oriental-sword-freshwater-aquarium-plant-buy-2-get-1-free",                  // Oriental Sword
  "plant-prad": "radican-sword-echinodorus-cordifolius-potted-freshwater-aquarium-plant-buy-2-get-1-free",// Radican Sword
  "plant-prama": "wg-mtrama",                                                                             // Radican, Marble Queen
  "plant-psadw": "sagittaria-subulata-dwarf-sag-freshwater-aquarium-plant-buy-2-get-1-free",             // Dwarf Sagittaria
  "plant-pwasp": "water-sprite-lace-leaf-live-aquarium-plant-planted-tank-buy-2-get-1-free",             // Water Sprite (potted)

  // ── Water garden → same plant under its Shopify handle ────────────────────
  "wg-hcsiopot": "wg-hcsio",     // Sioux (waterlily)
  "wg-hpocoba": "wg-hpocpba",    // Coral Bay
  "wg-hysifa": "wg-hposifa",     // Siam Fantasy
  "wg-mhpiwh4": "wg-mhpiwh",     // Pickerel, White
  "wg-mhrugo4": "wg-mhrugo",     // Rush 'Gold Strike'
  "wg-mhthde4": "wg-mhthde",     // Thalia Dealbata
  "wg-oanach": "wg-oanachnl",    // Anacharis (No Weight)
  "wg-obale": "wg-obalenl",      // Bacopa Lemon (No Weight)
  "wg-ohor": "wg-ohornl",        // Hornwort (No Weight)
  "wg-olud": "wg-oludnl",        // Ludwigia (No Weight)
  "wg-omon": "wg-omonnl",        // Moneywort (No Weight)
  "wg-orot": "wg-orotnl",        // Rotala (No Weight)
  "wg-tvicam": "wg-tvic",        // Victoria (Amazonica) Lily
};
