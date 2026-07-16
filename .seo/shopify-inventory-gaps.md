# Shopify ↔ Website Inventory Gap Report

**Match key:** the website builds a Shopify handle from each product id (`id.toLowerCase().replace('_','-')`) and looks the product up by that handle at checkout (`shopifyCart.ts`). If no Shopify product has that exact handle — or it's a Draft / unpublished — checkout fails with *"hasn't been imported to Shopify yet."*

- Website unique product ids: **1560**
- Shopify unique handles: **1204**

## Root cause
The website catalog was built from your **wholesale supplier codes** (e.g. `plant-phadw`, `wg-ohor`). Your Shopify store was built with **different handles** — retail SEO slugs (`eleocharis-pusilla-dwarf-hairgrass-...`) or a different short code (`wg-ohornl` = 'Hornwort No Weight'). So many plants that **do** exist in Shopify can't be matched by the website's id→handle rule.

## 🎯 BOGO 8 — status & exact fix

| Website id | Plant | Status | Fix |
|---|---|---|---|
| `plant-mjafela` | Java Fern Lace | ✅ OK | — |
| `plant-ssub` | Subulata | ✅ OK | — |
| `plant-phadw` | Hairgrass, Dwarf 6-24 | ❌ MISSING | No `plant-phadw` handle. Exists as **active** listing `eleocharis-pusilla-dwarf-hairgrass-potted-freshwater-aquarium-plant-buy-2-get-1-free` → add handle override in code, or rename Shopify handle to `plant-phadw`. |
| `plant-mwasp` | Water Sprite | ✅ OK | — |
| `plant-aboib` | Boivinianus Bulbs | ✅ OK | — |
| `plant-alonb` | Long. Bulbs | ❌ NOT_BUYABLE(draft, unpublished, 0 stock) | Handle `plant-alonb` exists but is **Draft / unpublished / 0 stock** → in Shopify set it Active, publish to Online Store, add inventory. (One-click admin fix, no code.) |
| `plant-aulvb` | Ulvaceus Bulbs | ✅ OK | — |
| `plant-pamamo` | Amazon Mother | ✅ OK | — |

## A1. RESOLVED — mapped in code (27) ✅
Verified Active+Published in Shopify and wired into `src/lib/shopifyHandleOverrides.ts`. Checkout now finds these.

| Website id | Website name |
|---|---|
| `plant-pcapl` | Cardinal Plant. 6-24 |
| `plant-pcrlu` | C. Lutea 6-24 |
| `plant-pcrpa` | C. Parva 6-24 |
| `plant-pcrweb` | C. Wendtii, Bronze 6-24 |
| `plant-pcrwer` | C. Wendtii, Red 6-24 |
| `plant-pfole` | Four Leaf Clover 6-24 |
| `plant-pglo` | Glossostigma. 6-24 |
| `plant-phadw` | Hairgrass, Dwarf 6-24 |
| `plant-pmisw` | Micro Sword. 6-24 |
| `plant-pori` | Oriental 6-24 |
| `plant-prad` | Radican 6-24 |
| `plant-prama` | Radican, Marble Q. 6-24 |
| `plant-psadw` | Sagittaria, Dwarf 6-24 |
| `plant-pwasp` | Water Sprite. 6-24 |
| `wg-hcsiopot` | Sioux Potted |
| `wg-hpocoba` | Coral Bay |
| `wg-hysifa` | Siam Fantasy |
| `wg-mhpiwh4` | Pickerel, White 4 |
| `wg-mhrugo4` | Rush 'Gold Strike' 4 |
| `wg-mhthde4` | Thalia Dealbata 4 |
| `wg-oanach` | Anacharis. |
| `wg-obale` | Bacopa, Lemon |
| `wg-ohor` | Hornwort. |
| `wg-olud` | Ludwigia |
| `wg-omon` | Moneywort.. |
| `wg-orot` | Rotala |
| `wg-tvicam` | Victoria Amazonica Lily |

## A2. Exists in Shopify but match UNCONFIRMED — 18 items (need your eyeball)
Title/scientific-name match wasn't confident enough to auto-map (different form, size, or variety). Confirm the right Shopify product, then I'll add it to the override map.

| Website id | Website name | sci | Best guess handle | Shopify title |
|---|---|---|---|---|
| `plant-pbate` | Baby Tears 6-24 | Micranthemum glomeratum | `dwarf-baby-tears-micranthemum-callitrichoides-hc-mat-3x5` | Dwarf Baby Tears, Micranthemum callitric [active] |
| `plant-pbated` | Baby Tears, Dwarf 6-24 | Micranthemum callitrichoides | `dwarf-baby-tears-micranthemum-callitrichoides-hc-mat-3x5` | Dwarf Baby Tears, Micranthemum callitric [active] |
| `plant-pcrun` | C. Undulata 6-24 | Cryptocoryne undulata | `cryptocoryne-undulata-potted-freshwater-aquarium-plant-buy-2-get-1-free` | Cryptocoryne Undulata potted freshwater  [active] |
| `plant-phagi` | Hairgrass, Giant 6-24 | Eleocharis montevidensis | `dwarf-hairgrass-eleocharis-parvula-plant-mat-3x5-aquarium-plant` | Dwarf Hairgrass (Eleocharis Parvula)  Pl [active] |
| `plant-phamdw` | Hairgrass, Mini 6-24 | Eleocharis acicularis 'mini' | `plant-tcelemc` | Eleocharis Acicularis Mini T/C Cup [active] |
| `plant-pmiswn` | Micro Sword Narrow 6-24 | Lilaeopsis mauritiana | `micro-sword-lilaeopsis-brasiliensis-potted-freshwater-aquarium-plant` | Micro Sword (Lilaeopsis Brasiliensis) po [active] |
| `plant-poze` | Ozelot 6-24 | Echinodorus 'Ozelot' | `plant-pozgrmo` | Ozelot Green Mother [active] |
| `plant-pozgr` | Ozelot, Green 6-24 | Echinodorus 'Ozelot green' | `plant-pozgrmo` | Ozelot Green Mother [active] |
| `plant-pren` | Reni 6-24 | Echinodorus 'Reni' | `plant-tcecma` | Echinodorus Major T/C Cup [active] |
| `wg-lflam` | Flamingo |  | `plant-pcrwefla` | C. Wendtii, Flamingo 6-24 [draft] |
| `wg-lgore` | Gold & Resplendence |  | `ls-snail-gold-3` | Gold Mystery Snails — 3 Pack [active] |
| `wg-lgrcl` | Green Clouds |  | `wg-mttagr` | Taro, Green [active] |
| `wg-lpipe` | Pink Peach |  | `wg-mhcapi4` | Cardinal Flower, Pink [draft] |
| `wg-lscla` | Scarlet Lady |  | `sw-hermit-scarlet-20` | Red Legged Scarlet Hermit Crabs — 20 Pac [active] |
| `wg-lshfi` | Shoot Fire |  | `wg-hppefi` | Perry'S Fire Opal [active] |
| `wg-mhswvad` | Sweetflag, Variegated Dwf |  | `wg-mhswva4` | Sweetflag, Variegated [active] |
| `wg-mtboli` | Bog Lily |  | `wg-mtbolir4` | Bog Lily, Red [active] |
| `wg-tnrass` | Assorted Red Night |  | `wg-mtwahirn4` | Water Hibiscus, Red Night [active] |

## B. Exists in Shopify but Draft/unpublished/0-stock — 7 items (fix in Shopify admin)

| Website id | Name | Problem |
|---|---|---|
| `plant-alonb` | Long. Bulbs | NOT_BUYABLE(draft, unpublished, 0 stock) |
| `wg-mhhoch4` | Houttuynia Chameleon | NOT_BUYABLE(0 stock) |
| `wg-mtwapo` | Water Poppy | NOT_BUYABLE(draft, unpublished) |
| `wg-mtwapo4` | Water Poppy | NOT_BUYABLE(draft, unpublished) |
| `wg-swahyd` | Water Hyacinth, Dwarf | NOT_BUYABLE(draft, unpublished) |
| `wg-swahyf` | Water Hyacinth, Florida | NOT_BUYABLE(draft, unpublished) |
| `wg-swapo` | Water Poppy | NOT_BUYABLE(draft, unpublished) |

## C. Likely NOT in Shopify at all — 6 items (create, or hide on site)
(Mostly water-garden lilies / a few swords. Confirm in admin; if you don't stock them, mark them unavailable on the site so customers never hit a checkout error.)

| Website id | Name | Category |
|---|---|---|
| `plant-pama` | Amazon 6-24 | Plants |
| `plant-pbra` | Brazil 6-24 | Plants |
| `wg-hpoass` | Assorted Peach/Orange | Water Garden |
| `wg-lbopr` | Bold Protector | Water Garden |
| `wg-mhisewi` | Iris, Sea Wisp | Water Garden |
| `wg-tytrbl` | Trail Blazer | Water Garden |

## D. Livestock not in Shopify — 512 (EXPECTED)
Marine livestock uses the backorder email-request flow, not Shopify checkout, so these are intentionally absent. No action.

## E. In Shopify but not shown on the website — 226 handles
Products you've built in Shopify the site never links to (many are `-mat`, `-nl`, tissue-culture, or SEO duplicates). Potential extra listings.
