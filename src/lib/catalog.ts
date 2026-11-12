/**
 * catalog.ts — single place to get the full retail catalog.
 *
 * Several data files repeat ids (quantity-tier rows share one id), so the list
 * is de-duplicated by id, first row wins. `hidden` products (built but not yet
 * published) are only reachable through `allCatalogProducts`.
 */
import { BUNDLE_TAG, products, type Product } from "./mockData";
import { waterGardenProducts } from "./waterGardenData";
import { saltwaterProducts } from "./saltwaterData";
import { livestockProducts } from "./livestockData";
import { dryGoodsProducts } from "./dryGoodsData";
import { marineLivestockProducts } from "./marineLivestockData";
import { bundleProducts } from "./bundleData";

function dedupe(list: Product[]): Product[] {
  const seen = new Set<string>();
  return list.filter((p) => (seen.has(p.id) ? false : (seen.add(p.id), true)));
}

/** Everything, including hidden products. */
export const allCatalogProducts: Product[] = dedupe([
  ...products,
  ...waterGardenProducts,
  ...saltwaterProducts,
  ...livestockProducts,
  ...dryGoodsProducts,
  ...marineLivestockProducts,
  ...bundleProducts,
]);

/** Everything a customer can see and buy. */
export const catalogProducts: Product[] = allCatalogProducts.filter((p) => !p.hidden);

const byId = new Map(catalogProducts.map((p) => [p.id, p]));

/** Published product by id (hidden products return undefined). */
export function findProduct(id: string): Product | undefined {
  return byId.get(id);
}

export const isBundle = (p: Product) => p.tags.includes(BUNDLE_TAG);

/** Published bundles: newest first, anything not orderable last. */
export function getBundles(): Product[] {
  return catalogProducts
    .filter(isBundle)
    .sort((a, b) => {
      const oos = Number(a.availability === "OUT OF SEASON") - Number(b.availability === "OUT OF SEASON");
      return oos || (b.addedAt ?? "").localeCompare(a.addedAt ?? "");
    });
}

/** Published products that are options of the same item (e.g. tank sizes). */
export function getVariantSiblings(p: Product): Product[] {
  if (!p.variantGroup) return [];
  return catalogProducts.filter((x) => x.variantGroup?.key === p.variantGroup!.key);
}
