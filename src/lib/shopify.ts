/**
 * shopify.ts — Storefront API client + typed helpers
 *
 * Set these two env vars (Vercel + .env.local):
 *   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN   e.g. shore-aquatic.myshopify.com
 *   NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN  (public Storefront API token)
 */
import { createStorefrontApiClient } from "@shopify/storefront-api-client";

// ── Client ────────────────────────────────────────────────────────────────────
export const shopifyClient = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? "",
  apiVersion:  "2025-01",
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ?? "",
});

// ── Types ─────────────────────────────────────────────────────────────────────
export interface ShopifyProduct {
  id:          string;
  handle:      string;
  title:       string;
  description: string;
  productType: string;
  tags:        string[];
  status:      string;
  images: {
    edges: { node: { url: string; altText: string | null } }[];
  };
  variants: {
    edges: {
      node: {
        id:             string;
        title:          string;
        price:          { amount: string; currencyCode: string };
        availableForSale: boolean;
        currentlyNotInStock: boolean;
        sku:            string;
        quantityAvailable: number | null;
      };
    }[];
  };
}

export interface ShopifyCart {
  id:              string;
  checkoutUrl:     string;
  totalQuantity:   number;
  cost: {
    totalAmount:   { amount: string; currencyCode: string };
    subtotalAmount:{ amount: string; currencyCode: string };
  };
  lines: {
    edges: {
      node: {
        id:       string;
        quantity: number;
        merchandise: {
          id:    string;
          title: string;
          product: { title: string; handle: string };
          image: { url: string; altText: string | null } | null;
        };
        cost: {
          totalAmount: { amount: string; currencyCode: string };
        };
      };
    }[];
  };
}

// ── Fragments ─────────────────────────────────────────────────────────────────
const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    productType
    tags
    images(first: 1) {
      edges { node { url altText } }
    }
    variants(first: 5) {
      edges {
        node {
          id title sku
          availableForSale currentlyNotInStock
          quantityAvailable
          price { amount currencyCode }
        }
      }
    }
  }
`;

const CART_FRAGMENT = `
  fragment CartFields on Cart {
    id checkoutUrl totalQuantity
    cost {
      totalAmount   { amount currencyCode }
      subtotalAmount{ amount currencyCode }
    }
    lines(first: 50) {
      edges {
        node {
          id quantity
          merchandise {
            ... on ProductVariant {
              id title
              product { title handle }
              image { url altText }
            }
          }
          cost { totalAmount { amount currencyCode } }
        }
      }
    }
  }
`;

// ── Product queries ───────────────────────────────────────────────────────────

/** Fetch a page of products (for shop listing). */
export async function getProducts(opts: {
  first?:  number;
  after?:  string;
  query?:  string; // Shopify search syntax e.g. 'tag:"Plants"'
} = {}): Promise<{ products: ShopifyProduct[]; pageInfo: { hasNextPage: boolean; endCursor: string } }> {
  const { first = 24, after, query } = opts;

  const gql = `
    ${PRODUCT_FRAGMENT}
    query Products($first: Int!, $after: String, $query: String) {
      products(first: $first, after: $after, query: $query, sortKey: TITLE) {
        pageInfo { hasNextPage endCursor }
        edges { node { ...ProductFields } }
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(gql, {
    variables: { first, after: after ?? null, query: query ?? null },
  });

  if (errors) throw new Error(JSON.stringify(errors));

  return {
    products: data.products.edges.map((e: any) => e.node),
    pageInfo: data.products.pageInfo,
  };
}

/** Fetch a single product by handle (URL slug). */
export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  const gql = `
    ${PRODUCT_FRAGMENT}
    query Product($handle: String!) {
      product(handle: $handle) { ...ProductFields }
    }
  `;

  const { data, errors } = await shopifyClient.request(gql, {
    variables: { handle },
  });

  if (errors) throw new Error(JSON.stringify(errors));
  return data.product ?? null;
}

/** Search products. */
export async function searchProducts(query: string, first = 24): Promise<ShopifyProduct[]> {
  const { products } = await getProducts({ query, first });
  return products;
}

// ── Cart mutations ────────────────────────────────────────────────────────────

export async function cartCreate(): Promise<ShopifyCart> {
  const gql = `
    ${CART_FRAGMENT}
    mutation CartCreate {
      cartCreate { cart { ...CartFields } }
    }
  `;
  const { data, errors } = await shopifyClient.request(gql);
  if (errors) throw new Error(JSON.stringify(errors));
  return data.cartCreate.cart;
}

export async function cartGet(cartId: string): Promise<ShopifyCart | null> {
  const gql = `
    ${CART_FRAGMENT}
    query CartGet($id: ID!) {
      cart(id: $id) { ...CartFields }
    }
  `;
  const { data, errors } = await shopifyClient.request(gql, { variables: { id: cartId } });
  if (errors) throw new Error(JSON.stringify(errors));
  return data.cart ?? null;
}

export async function cartLinesAdd(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<ShopifyCart> {
  const gql = `
    ${CART_FRAGMENT}
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { ...CartFields }
        userErrors { field message }
      }
    }
  `;
  const { data, errors } = await shopifyClient.request(gql, {
    variables: { cartId, lines },
  });
  if (errors) throw new Error(JSON.stringify(errors));
  return data.cartLinesAdd.cart;
}

export async function cartLinesUpdate(
  cartId: string,
  lines: { id: string; quantity: number }[]
): Promise<ShopifyCart> {
  const gql = `
    ${CART_FRAGMENT}
    mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart { ...CartFields }
        userErrors { field message }
      }
    }
  `;
  const { data, errors } = await shopifyClient.request(gql, {
    variables: { cartId, lines },
  });
  if (errors) throw new Error(JSON.stringify(errors));
  return data.cartLinesUpdate.cart;
}

export async function cartLinesRemove(
  cartId: string,
  lineIds: string[]
): Promise<ShopifyCart> {
  const gql = `
    ${CART_FRAGMENT}
    mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart { ...CartFields }
        userErrors { field message }
      }
    }
  `;
  const { data, errors } = await shopifyClient.request(gql, {
    variables: { cartId, lineIds },
  });
  if (errors) throw new Error(JSON.stringify(errors));
  return data.cartLinesRemove.cart;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Format a Shopify money object. */
export function formatMoney(amount: string, currencyCode = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

/** Get the first variant of a product. */
export function firstVariant(product: ShopifyProduct) {
  return product.variants.edges[0]?.node ?? null;
}

/** Get the first image URL of a product. */
export function firstImage(product: ShopifyProduct): string | null {
  return product.images.edges[0]?.node?.url ?? null;
}

/** Map a Shopify product to a shape compatible with our existing ProductCard. */
export function toProductCardShape(p: ShopifyProduct) {
  const variant = firstVariant(p);
  const avail = !variant
    ? "OUT OF SEASON"
    : variant.availableForSale
    ? "AVAILABLE"
    : variant.currentlyNotInStock
    ? "BACKORDER"
    : "OUT OF SEASON";

  return {
    id: p.handle,
    name: p.title,
    description: p.description,
    category: p.productType || "Plants",
    subCategory: p.tags.find(t => !["Plants","Water Garden","Freshwater","Saltwater","Backorder","Out of Season"].includes(t)) ?? "",
    waterType: p.tags.includes("Saltwater") ? "Saltwater" : p.tags.includes("Freshwater") ? "Freshwater" : "Both",
    availability: avail,
    price: parseFloat(variant?.price.amount ?? "0"),
    size: variant?.title ?? "Standard",
    imageGradient: "from-ocean-800 to-ocean-950",
    tags: p.tags,
    scientificName: "",
    wholesalePrice: 0,
  };
}
