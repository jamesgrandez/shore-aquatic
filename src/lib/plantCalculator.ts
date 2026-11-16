/**
 * PlantCalculator constants — must match the chart in
 * src/content/guides/how-many-plants-for-my-tank.md.
 *
 * plants = individual stems/plants after separating bundles
 * light  = max(4, round(gal * 0.5))
 * full   = round(l * d / 9)          (one plant every 3 in across the floor)
 * medium = round((light + full) / 2)
 */
export type Density = "light" | "medium" | "full";
export type PackKey = "9pack" | "10gal" | "20gal" | "55gal" | "75gal";

export const TANKS = [
  { id: "5",   label: "5 gal",          l: 16, d: 8,  light: 4,  medium: 9,  full: 14, pack: "9pack" },
  { id: "10",  label: "10 gal",         l: 20, d: 10, light: 5,  medium: 14, full: 22, pack: "10gal" },
  { id: "20L", label: "20 gal long",    l: 30, d: 12, light: 10, medium: 25, full: 40, pack: "20gal" },
  { id: "20H", label: "20 gal high",    l: 24, d: 12, light: 10, medium: 21, full: 32, pack: "20gal" },
  { id: "29",  label: "29 gal",         l: 30, d: 12, light: 14, medium: 27, full: 40, pack: "20gal" },
  { id: "40B", label: "40 gal breeder", l: 36, d: 18, light: 20, medium: 46, full: 72, pack: "55gal" },
  { id: "55",  label: "55 gal",         l: 48, d: 13, light: 28, medium: 48, full: 69, pack: "55gal" },
  { id: "75",  label: "75 gal",         l: 48, d: 18, light: 38, medium: 67, full: 96, pack: "75gal" },
] as const satisfies readonly { id: string; label: string; l: number; d: number; light: number; medium: number; full: number; pack: PackKey }[];

export const ZONE_SPLIT = { foreground: 0.2, midground: 0.3, background: 0.5 };

export const PACKS: Record<PackKey, { productId: string; variant?: string; sku: string }> = {
  "9pack": { productId: "plant-variety-pack-9-bundles", sku: "SA-SHOP-9BUNDLE" },
  "10gal": { productId: "plant-tank-bundle-10gal", variant: "10 Gallon", sku: "SA-BUNDLE-10GAL" },
  "20gal": { productId: "plant-tank-bundle-20gal", variant: "20 Gallon", sku: "SA-BUNDLE-20GAL" },
  "55gal": { productId: "plant-tank-bundle-55gal", variant: "55 Gallon", sku: "SA-BUNDLE-55GAL" },
  "75gal": { productId: "plant-tank-bundle-75gal", variant: "75 Gallon", sku: "SA-BUNDLE-75GAL" },
};

export const DEFAULT_TANK = "20L";
export const DEFAULT_DENSITY: Density = "medium";

/** Same formulas for a custom footprint; gallons estimated at 12 in tall. */
export function customCounts(l: number, d: number): Record<Density, number> {
  const gal = (l * d * 12) / 231;
  const light = Math.max(4, Math.round(gal * 0.5));
  const full = Math.round((l * d) / 9);
  return { light, full: Math.max(full, light), medium: Math.round((light + Math.max(full, light)) / 2) };
}

/** Back / middle / front counts that always add up to n. */
export function zoneSplit(n: number) {
  const back = Math.round(n * ZONE_SPLIT.background);
  const middle = Math.round(n * ZONE_SPLIT.midground);
  return { back, middle, front: Math.max(0, n - back - middle) };
}
