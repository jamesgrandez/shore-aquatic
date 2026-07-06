import { products } from "@/lib/mockData";
import { waterGardenProducts } from "@/lib/waterGardenData";
import { saltwaterProducts } from "@/lib/saltwaterData";
import { livestockProducts } from "@/lib/livestockData";
import { dryGoodsProducts } from "@/lib/dryGoodsData";
import { marineLivestockProducts } from "@/lib/marineLivestockData";
import { getProductImage } from "@/lib/imageMap";
import type { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";
import ProductEnrichment from "@/components/ProductEnrichment";

const allProducts = [...products, ...waterGardenProducts, ...saltwaterProducts, ...livestockProducts, ...dryGoodsProducts, ...marineLivestockProducts];

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return { title: "Product Not Found" };
  }

  const imageUrl = getProductImage(product.id);
  // "for sale" is a proven high-CTR commercial modifier for our live-goods
  // queries (GSC shows "{species} for sale" converting far better than the
  // bare name). Dry goods keep the plain product name.
  const forSale = product.category === "Dry Goods" ? "" : " for Sale";
  const sci = product.scientificName ? ` (${product.scientificName})` : "";
  const title = `${product.name}${forSale}`;

  return {
    title,
    description: `Buy ${product.name}${sci} online — $${product.price.toFixed(2)}. ${product.description.slice(0, 65).trim()}… Free 2-day shipping over $100.`,
    openGraph: {
      title: `${product.name} – Shore Aquatic`,
      description: product.description.slice(0, 200),
      url: `https://shoreaquatic.com/shop/${id}`,
      images: imageUrl ? [{ url: imageUrl, alt: product.name }] : [],
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

function buildProductJsonLd(product: (typeof allProducts)[0], imageUrl: string | null) {
  // Google requires description ≥ 50 chars for merchant listings
  const description =
    product.description.length >= 50
      ? product.description
      : `${product.description} A quality aquatic plant from Shore Aquatic, South Florida's premier aquatic nursery.`;

  // SKU: uppercase, no hyphens (Google validator prefers alphanumeric)
  const sku = product.id.toUpperCase().replace(/-/g, "");

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": description,
    "image": imageUrl ? [imageUrl] : [],
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
  const product = allProducts.find((p) => p.id === id);
  const imageUrl = product ? getProductImage(product.id) : null;
  const jsonLd = product ? buildProductJsonLd(product, imageUrl) : null;

  const breadcrumbJsonLd = product ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shoreaquatic.com" },
      { "@type": "ListItem", "position": 2, "name": "Shop", "item": "https://shoreaquatic.com/shop" },
      { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://shoreaquatic.com/shop/${product.id}` },
    ]
  } : null;

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
      {product && <ProductEnrichment product={product} />}
    </>
  );
}
