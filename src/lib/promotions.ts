// Current on-site promotions. Update this each sale cycle.
//
// IMPORTANT — how the "free" plant is applied:
// This file only powers the on-SITE collection + badges (marketing). The actual
// buy-one-get-one discount is an AUTOMATIC Shopify discount (no code): in Shopify
// Admin → Discounts → Create → "Buy X Get Y", set it to *Automatic* (not a code),
// "Customer buys 1 from [BOGO collection], gets 1 from [BOGO collection] free".
// It then applies at checkout for anyone buying these — no code to enter.

export const BOGO_SALE = {
  active: true,
  title: "Buy One, Get One FREE",
  // Shown on the banner + collection page. Keep the "no code" promise accurate
  // by leaving the Shopify automatic discount ON while this is active.
  blurb:
    "Add any two plants from this collection to your cart — the second is on us, applied automatically at checkout. No code needed.",
  href: "/shop/bogo-sale",
  productIds: [
    "plant-mjafela", // Java Fern 'Windelov' (Lace)
    "plant-ssub", // Sagittaria Subulata (Narrowleaf)
    "plant-phadw", // Dwarf Hairgrass
    "plant-mwasp", // Water Sprite (Lace XL)
    "plant-aboib", // Aponogeton Boivinianus Bulb — LIMITED
    "plant-alonb", // Aponogeton Longiplumulosus Bulb — LIMITED
    "plant-aulvb", // Aponogeton Ulvaceus Bulb — LIMITED
    "plant-pamamo", // Amazon Sword (Grisebachii) — LIMITED
  ] as const,
  // Items with limited supply — surfaced with an urgency badge.
  limitedIds: ["plant-aboib", "plant-alonb", "plant-aulvb", "plant-pamamo"] as const,
};

const bogoIdSet = new Set<string>(BOGO_SALE.productIds);
const limitedIdSet = new Set<string>(BOGO_SALE.limitedIds);

export function isBogo(id: string): boolean {
  return BOGO_SALE.active && bogoIdSet.has(id);
}

export function isBogoLimited(id: string): boolean {
  return BOGO_SALE.active && limitedIdSet.has(id);
}
