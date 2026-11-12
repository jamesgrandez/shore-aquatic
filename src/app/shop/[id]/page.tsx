import { getProductImage } from "@/lib/imageMap";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";
import ProductEnrichment from "@/components/ProductEnrichment";
import { findProduct, isBundle } from "@/lib/catalog";
import { SHOPIFY_HANDLE_OVERRIDES } from "@/lib/shopifyHandleOverrides";
import type { Product } from "@/lib/mockData";

// Old Shopify handles that are a different id on this site (e.g. wg-hposifa →
// wg-hysifa). Google still has some of them; send them to the real product.
const LEGACY_ID_REDIRECTS: Record<string, string> = Object.fromEntries(
  Object.entries(SHOPIFY_HANDLE_OVERRIDES)
    .filter(([siteId, handle]) => !findProduct(handle) && findProduct(siteId))
    .map(([siteId, handle]) => [handle, siteId])
);

/**
 * Look up a product or end the request properly: a legacy id 308-redirects to
 * its product, anything else is a real 404 (not a 200 "not found" page).
 */
function resolveProduct(id: string): Product {
  const product = findProduct(id);
  if (product) return product;
  const target = LEGACY_ID_REDIRECTS[id];
  if (target) permanentRedirect(`/shop/${target}`);
  notFound();
}

const SALTWATER_TYPE: Record<string, string> = {
  "Marine Fish": "Fish",
  "Corals & Frags": "Coral",
  Anemones: "Anemone",
  "Saltwater Invertebrates": "Invertebrate",
  Snails: "Snail",
  Clams: "Clam",
  Macroalgae: "Macroalgae",
};

/** "Live Aquarium Plant", "Pond Plant", "Live Saltwater Fish"… ("" for dry goods). */
function productType(p: Product): string {
  if (isBundle(p)) return p.waterType === "Saltwater" ? "Live Macroalgae Bundle" : "Live Plant Bundle";
  switch (p.category) {
    case "Plants":
      return "Live Aquarium Plant";
    case "Water Garden":
      return "Pond Plant";
    case "Dry Goods":
      return "";
    default: {
      if (p.subCategory === "Live Food") return "Live Marine Food";
      const kind = SALTWATER_TYPE[p.subCategory] ?? "Livestock";
      return p.waterType === "Saltwater" ? `Live Saltwater ${kind}` : `Live Freshwater ${kind}`;
    }
  }
}

// The root layout appends " | Shore Aquatic" (16 chars); keep the whole
// title within ~60 characters, dropping the scientific name first.
const TITLE_BUDGET = 60 - " | Shore Aquatic".length;

/** Long marketplace-style names → the part before the first " - ", " — " or ", ". */
function shortName(p: Product): string {
  return p.name.length > 40 ? p.name.split(/ [-–—] |, /)[0] : p.name;
}

function productTitle(p: Product): string {
  const type = productType(p);
  const name = shortName(p);
  const sci = p.scientificName && !isBundle(p) ? ` (${p.scientificName})` : "";
  const candidates = type
    ? [`${name}${sci} – ${type}`, `${name} – ${type}`, `${name}${sci}`, name]
    : [name];
  return candidates.find((c) => c.length <= TITLE_BUDGET) ?? name;
}

function productDescription(p: Product): string {
  const sci = p.scientificName && !isBundle(p) ? ` (${p.scientificName})` : "";
  const origin = p.category === "Plants" || p.category === "Water Garden" ? "Grown in Florida" : "Ships from Florida";
  const tail = ` ${origin}, free 2-day shipping over $100.`;
  const lead = `${shortName(p)}${sci}, $${p.price.toFixed(2)}. `;
  const firstSentence = p.description.split(/(?<=\.)\s/)[0] ?? "";
  const room = 158 - lead.length - tail.length;
  const benefit =
    firstSentence.length <= room ? firstSentence : `${firstSentence.slice(0, Math.max(0, room - 1)).trim()}…`;
  return `${lead}${benefit}${tail}`.replace(/\s+/g, " ").trim();
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const product = resolveProduct(id);

  const imageUrl = getProductImage(product.id);
  const title = productTitle(product);
  const description = productDescription(product);
  const absImage = imageUrl?.startsWith("/") ? `https://shoreaquatic.com${imageUrl}` : imageUrl;

  return {
    // absolute: /shop/layout.tsx sets a plain title, which drops the root
    // "%s | Shore Aquatic" template for everything under /shop.
    title: { absolute: `${title} | Shore Aquatic` },
    description,
    openGraph: {
      title: `${title} | Shore Aquatic`,
      description,
      url: `https://shoreaquatic.com/shop/${id}`,
      images: absImage ? [{ url: absImage, alt: product.name }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Shore Aquatic`,
      description,
      images: absImage ? [absImage] : [],
    },
    alternates: { canonical: `https://shoreaquatic.com/shop/${id}` },
  };
}

// One year from today for priceValidUntil
function priceValidUntil() {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().split("T")[0];
}

function buildProductJsonLd(product: Product, imageUrl: string | null) {
  // Google requires description ≥ 50 chars for merchant listings
  const description =
    product.description.length >= 50
      ? product.description
      : `${product.description} A quality aquatic plant from Shore Aquatic, South Florida's premier aquatic nursery.`;

  // SKU: uppercase, no hyphens (Google validator prefers alphanumeric)
  const sku = product.shopify?.sku ?? product.id.toUpperCase().replace(/-/g, "");

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": description,
    "image": (product.images?.length ? product.images : imageUrl ? [imageUrl] : []).map((u) =>
      u.startsWith("/") ? `https://shoreaquatic.com${u}` : u
    ),
    "sku": sku,
    "mpn": product.id,          // keep our internal ID as MPN
    // brand as plain org — Google Merchant Center validates this correctly
    "brand": {
      "@type": "Organization",
      "name": "Shore Aquatic"
    },
    ...(product.scientificName ? { "alternateName": product.scientificName } : {}),
    "offers": {
      "@type": "Offer",
      "url": `https://shoreaquatic.com/shop/${product.id}`,
      "priceCurrency": "USD",
      "price": product.price.toFixed(2),
      "priceValidUntil": priceValidUntil(),
      "availability":
        product.availability === "AVAILABLE"
          ? "https://schema.org/InStock"
          : product.availability === "BACKORDER"
          ? "https://schema.org/BackOrder"
          : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Shore Aquatic",
        "url": "https://shoreaquatic.com"
      },
      // Merchant listing: return policy (live plants — 3-day DOA/damage window)
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 3,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      },
      // Merchant listing: shipping details
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0.00",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          }
        }
      }
    },
    "category": product.category,
  };
}

export default async function ProductDetailPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = resolveProduct(id);
  const imageUrl = getProductImage(product.id);
  const jsonLd = buildProductJsonLd(product, imageUrl);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shoreaquatic.com" },
      { "@type": "ListItem", "position": 2, "name": "Shop", "item": "https://shoreaquatic.com/shop" },
      { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://shoreaquatic.com/shop/${product.id}` },
    ]
  };

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      <ProductDetailClient />
      <ProductEnrichment product={product} />
    </>
  );
}
