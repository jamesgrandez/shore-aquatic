/**
 * shopifyCart.ts
 * Manages a real Shopify cart via the Storefront API.
 * Cart ID is persisted in localStorage so it survives page refreshes.
 *
 * Flow:
 *   1. Customer adds items → stored locally (instant UI)
 *   2. "Proceed to Checkout" → we look up each item's Shopify variant ID by SKU,
 *      create a Shopify cart, and redirect to cart.checkoutUrl
 */

const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const TOKEN  = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
const API    = `https://${DOMAIN}/api/2025-01/graphql.json`;
const CART_KEY = "shore_shopify_cart_id";

async function storefrontFetch(query: string, variables: Record<string, unknown> = {}) {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Shopify API ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

// ── Variant lookup by handle ──────────────────────────────────────────────────

/**
 * Returns the Shopify GID for the first variant of a product.
 * Our product IDs map directly to Shopify handles (underscores → hyphens, lowercase).
 * e.g. "wg-hccom" → handle "wg-hccom", "plant-bamb" → handle "plant-bamb"
 */
async function getVariantIdByHandle(productId: string): Promise<string | null> {
  const handle = productId.replace(/_/g, "-").toLowerCase();
  const data = await storefrontFetch(`
    query GetVariantByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        variants(first: 1) {
          edges {
            node { id sku availableForSale }
          }
        }
      }
    }
  `, { handle });

  const variant = data?.productByHandle?.variants?.edges?.[0]?.node;
  return variant?.id ?? null;
}

// ── Cart mutations ────────────────────────────────────────────────────────────

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount { amount currencyCode }
    totalAmount    { amount currencyCode }
  }
`;

async function cartCreate(lines: { merchandiseId: string; quantity: number }[]) {
  const data = await storefrontFetch(`
    mutation CartCreate($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) {
        cart { ${CART_FIELDS} }
        userErrors { field message }
      }
    }
  `, { lines });
  return data.cartCreate.cart;
}

// ── Public API ────────────────────────────────────────────────────────────────

export interface CartLineRequest {
  productId:  string; // our internal ID e.g. "plant-bamb" or "wg-hcchr"
  quantity:   number;
}

/**
 * Given an array of cart items (using our product IDs as SKUs),
 * creates a real Shopify cart and returns the checkout URL.
 * Throws if any product can't be found in Shopify.
 */
export async function createShopifyCheckout(
  items: CartLineRequest[]
): Promise<string> {
  // Look up Shopify variant IDs for all items in parallel
  const resolved = await Promise.all(
    items.map(async (item) => {
      const variantId = await getVariantIdByHandle(item.productId);
      return { variantId, quantity: item.quantity, productId: item.productId };
    })
  );

  const missing = resolved.filter((r) => !r.variantId);
  if (missing.length > 0) {
    const names = missing.map((m) => m.productId).join(", ");
    throw new Error(
      `Some products haven't been imported to Shopify yet: ${names}`
    );
  }

  const lines = resolved.map((r) => ({
    merchandiseId: r.variantId as string,
    quantity: r.quantity,
  }));

  const cart = await cartCreate(lines);

  // Shopify may return a checkoutUrl using the custom domain (www.shoreaquatic.com)
  // which now points to our Next.js site rather than Shopify checkout.
  // Force the URL to use the .myshopify.com domain so checkout works correctly.
  const checkoutUrl = (cart.checkoutUrl as string).replace(
    /^https?:\/\/[^/]+/,
    `https://${DOMAIN}`
  );

  return checkoutUrl;
}

/** Direct checkout URL without Storefront API — works as a fallback using cart permalinks. */
export function buildCartPermalinkUrl(
  variantPermalinks: { variantId: string; quantity: number }[]
): string {
  const parts = variantPermalinks
    .map((v) => `${v.variantId}:${v.quantity}`)
    .join(",");
  return `https://${DOMAIN}/cart/${parts}`;
}
