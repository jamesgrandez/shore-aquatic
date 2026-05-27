// Livestock — freshwater invertebrates and fish
// Mystery snails (Pomacea bridgesii / Pomacea diffusa) are peaceful algae-grazing
// freshwater snails that breathe air via a siphon. Adults reach ~1.5–2 inches.
// All listings are juvenile/sub-adult sizes (~0.5–1 inch) for safe shipping.
import type { Product } from "./mockData";

const MYSTERY_SNAIL_BASE_DESC =
  "Mystery snails are peaceful, hardy algae grazers that won't harm plants or fry. They breathe air via a siphon so they need a tight-fitting lid and ~1 inch of headspace above the waterline. Keep in pH 7.0–8.4 with calcium-rich water (or a cuttlebone) to support strong shell growth. Compatible with community fish, shrimp, and other peaceful tankmates. Ships as juveniles roughly 1/2 to 1 inch in shell diameter — they grow fast and reach full size in a few months.";

export const livestockProducts: Product[] = [
  // ---- ASSORTED MULTI-PACKS ----
  {
    id: "ls-snail-assorted-3",
    name: "Mystery Snails — 3 Pack (Assorted Colors)",
    scientificName: "Pomacea bridgesii",
    description:
      "A surprise 3-pack of mystery snails — colors selected randomly from current stock and may include gold, blue, ivory, purple, black, magenta, or wild-type brown. Perfect for adding a pop of color and natural algae control to your tank. " +
      MYSTERY_SNAIL_BASE_DESC,
    category: "Livestock",
    subCategory: "Snails",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 24.99,
    size: "Juvenile, ~1/2–1 inch",
    wholesalePrice: 6.0,
    imageGradient: "from-amber-900 to-orange-900",
    tags: [
      "mystery snail",
      "snail",
      "livestock",
      "freshwater",
      "algae eater",
      "assorted",
      "peaceful",
      "beginner",
      "plant safe",
    ],
  },
  {
    id: "ls-snail-assorted-10",
    name: "Mystery Snails — 10 Pack (Assorted Colors)",
    scientificName: "Pomacea bridgesii",
    description:
      "A 10-pack of mystery snails for serious algae control or for stocking a larger tank — colors selected randomly from current stock and may include gold, blue, ivory, purple, black, magenta, or wild-type brown. Per-snail price drops significantly compared to the 3-pack. " +
      MYSTERY_SNAIL_BASE_DESC,
    category: "Livestock",
    subCategory: "Snails",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 59.99,
    size: "Juvenile, ~1/2–1 inch",
    wholesalePrice: 20.0,
    imageGradient: "from-amber-900 to-orange-900",
    tags: [
      "mystery snail",
      "snail",
      "livestock",
      "freshwater",
      "algae eater",
      "assorted",
      "bulk",
      "10 pack",
      "peaceful",
    ],
  },

  // ---- SINGLE-COLOR 3-PACKS ----
  {
    id: "ls-snail-gold-3",
    name: "Gold Mystery Snails — 3 Pack",
    scientificName: "Pomacea bridgesii",
    description:
      "Three bright gold/yellow mystery snails — the most iconic color in the hobby. The vivid golden shell pops against dark substrate and planted backgrounds, and the lemon-yellow foot is striking when extended. " +
      MYSTERY_SNAIL_BASE_DESC,
    category: "Livestock",
    subCategory: "Snails",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 24.99,
    size: "Juvenile, ~1/2–1 inch",
    wholesalePrice: 6.0,
    imageGradient: "from-yellow-700 to-amber-800",
    tags: [
      "mystery snail",
      "snail",
      "livestock",
      "freshwater",
      "algae eater",
      "gold",
      "yellow",
      "peaceful",
      "plant safe",
    ],
  },
  {
    id: "ls-snail-black-3",
    name: "Black Mystery Snails — 3 Pack",
    scientificName: "Pomacea bridgesii",
    description:
      "Three jet-black mystery snails — the darkest morph available and a striking contrast in planted tanks. The deep ebony shell and dark foot create a dramatic look against bright sand or green plants. " +
      MYSTERY_SNAIL_BASE_DESC,
    category: "Livestock",
    subCategory: "Snails",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 26.99,
    size: "Juvenile, ~1/2–1 inch",
    wholesalePrice: 7.0,
    imageGradient: "from-slate-900 to-zinc-950",
    tags: [
      "mystery snail",
      "snail",
      "livestock",
      "freshwater",
      "algae eater",
      "black",
      "peaceful",
      "plant safe",
    ],
  },
  {
    id: "ls-snail-blue-3",
    name: "Blue Mystery Snails — 3 Pack",
    scientificName: "Pomacea bridgesii",
    description:
      "Three blue mystery snails — silvery-blue shells with a pale, almost lavender foot. One of the most popular colors in the hobby and a striking centerpiece-quality invertebrate for any planted tank. " +
      MYSTERY_SNAIL_BASE_DESC,
    category: "Livestock",
    subCategory: "Snails",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 29.99,
    size: "Juvenile, ~1/2–1 inch",
    wholesalePrice: 8.0,
    imageGradient: "from-blue-900 to-cyan-900",
    tags: [
      "mystery snail",
      "snail",
      "livestock",
      "freshwater",
      "algae eater",
      "blue",
      "peaceful",
      "plant safe",
    ],
  },
  {
    id: "ls-snail-ivory-3",
    name: "Ivory Mystery Snails — 3 Pack",
    scientificName: "Pomacea bridgesii",
    description:
      "Three ivory white mystery snails — pure cream-white shells with a soft white foot. A clean, elegant look that pairs beautifully with dark substrate and vibrant red plants. " +
      MYSTERY_SNAIL_BASE_DESC,
    category: "Livestock",
    subCategory: "Snails",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 29.99,
    size: "Juvenile, ~1/2–1 inch",
    wholesalePrice: 8.0,
    imageGradient: "from-stone-300 to-amber-100",
    tags: [
      "mystery snail",
      "snail",
      "livestock",
      "freshwater",
      "algae eater",
      "ivory",
      "white",
      "peaceful",
      "plant safe",
    ],
  },
  {
    id: "ls-snail-purple-3",
    name: "Purple Mystery Snails — 3 Pack",
    scientificName: "Pomacea bridgesii",
    description:
      "Three premium purple mystery snails — deep magenta-burgundy shells with dramatic dark spiral banding. The most prized and rarest color in the hobby, with a striking pale yellow foot that contrasts vividly against the rich purple shell. " +
      MYSTERY_SNAIL_BASE_DESC,
    category: "Livestock",
    subCategory: "Snails",
    waterType: "Freshwater",
    availability: "AVAILABLE",
    price: 32.99,
    size: "Juvenile, ~1/2–1 inch",
    wholesalePrice: 9.5,
    imageGradient: "from-purple-900 to-fuchsia-900",
    tags: [
      "mystery snail",
      "snail",
      "livestock",
      "freshwater",
      "algae eater",
      "purple",
      "magenta",
      "premium",
      "peaceful",
      "plant safe",
    ],
  },
];
