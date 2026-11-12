import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
  async redirects() {
    return [
      // ═════════════════════════════════════════════════════════════════
      // SHOPIFY → NEXT.JS MIGRATION REDIRECTS
      // ═════════════════════════════════════════════════════════════════
      // Old /products/<handle> URLs are handled per product in proxy.ts
      // (exact product redirect, or 410 Gone) — no catch-all here, because a
      // mass redirect to /shop is treated by Google as a soft 404.
      //
      // These rules recover ~270 old Shopify URLs that GSC reported as
      // 404 (sourced from Coverage report 2026-06-08). Order matters —
      // specific rules first, then catch-all wildcards.
      //
      // All use absolute https://shoreaquatic.com destinations so www
      // requests collapse to one redirect hop instead of two.
      // ═════════════════════════════════════════════════════════════════

      // ─── Specific high-impression blog redirects ──────────────────────
      // (489 impressions, position 1.7) Propagation guide → beginner plants
      {
        source: "/blogs/the-ultimate-guide-to-propagating-freshwater-aquarium-plants",
        destination: "https://shoreaquatic.com/blog/best-aquarium-plants-for-beginners",
        permanent: true,
      },
      // Same URL with optional trailing wildcard (some Shopify themes append /)
      {
        source: "/blogs/the-ultimate-guide-to-propagating-freshwater-aquarium-plants/:rest*",
        destination: "https://shoreaquatic.com/blog/best-aquarium-plants-for-beginners",
        permanent: true,
      },
      // (360 impressions) Bucephalandra care → shrimp plants article (heavy Buce coverage)
      {
        source: "/blogs/news/bucephalandra-the-complete-care-guide-for-the-rare-aquatic-plant",
        destination: "https://shoreaquatic.com/blog/best-plants-for-shrimp-tanks",
        permanent: true,
      },
      // (178 impressions) Mystery snail diet → mystery snail eggs (only snail content we have)
      {
        source: "/blogs/news/what-do-mystery-snails-eat",
        destination: "https://shoreaquatic.com/blog/mystery-snail-eggs",
        permanent: true,
      },

      // ─── Specific page redirects ──────────────────────────────────────
      // (145 impressions) Old Shopify contact page
      {
        source: "/pages/contact-information",
        destination: "https://shoreaquatic.com/contact",
        permanent: true,
      },
      {
        source: "/pages/contact",
        destination: "https://shoreaquatic.com/contact",
        permanent: true,
      },
      {
        source: "/pages/about-us",
        destination: "https://shoreaquatic.com/about",
        permanent: true,
      },



      // ─── Bulk catch-all redirects (in priority order) ────────────────
      // /blogs/news/* → blog index (catch-all for ~6 lower-impression blog URLs)
      {
        source: "/blogs/news/:slug*",
        destination: "https://shoreaquatic.com/blog",
        permanent: true,
      },
      // /blogs/* → blog index
      {
        source: "/blogs/:slug*",
        destination: "https://shoreaquatic.com/blog",
        permanent: true,
      },
      // /collections/saltwater* → Saltwater filter
      {
        source: "/collections/saltwater-aquarium-plants",
        destination: "https://shoreaquatic.com/shop?category=Saltwater",
        permanent: true,
      },
      {
        source: "/collections/moss",
        destination: "https://shoreaquatic.com/shop?category=Plants",
        permanent: true,
      },
      {
        source: "/collections/bundle-packs-combo-deals",
        destination: "https://shoreaquatic.com/shop/bundles",
        permanent: true,
      },
      // /collections/* (all other Shopify category pages) → shop
      {
        source: "/collections/:slug*",
        destination: "https://shoreaquatic.com/shop",
        permanent: true,
      },
      // ─── Shopify policy pages → our policy page ──────────────────────
      {
        source: "/policies/:policy(shipping-policy|refund-policy)",
        destination: "https://shoreaquatic.com/shipping-returns",
        permanent: true,
      },
      {
        source: "/policies/privacy-policy",
        destination: "https://shoreaquatic.com/privacy-policy",
        permanent: true,
      },
      {
        source: "/policies/terms-of-service",
        destination: "https://shoreaquatic.com/terms-of-service",
        permanent: true,
      },
      // ─── Shopify /search → shop search (query string is passed through: ?q=) ──
      {
        source: "/search",
        destination: "https://shoreaquatic.com/shop",
        permanent: true,
      },
      // ─── Care guides that were removed (no matching product) ──────────
      {
        source: "/care-guides/:slug(pistia-stratiotes|aeschynomene-fluitans|neptunia-aquatica)",
        destination: "https://shoreaquatic.com/care-guides",
        permanent: true,
      },
      // /pages/* (all unmapped Shopify static pages) → homepage
      {
        source: "/pages/:slug*",
        destination: "https://shoreaquatic.com",
        permanent: true,
      },
      // /cdn/shop/* — Shopify asset URLs Google still has indexed
      {
        source: "/cdn/shop/:path*",
        destination: "https://shoreaquatic.com",
        permanent: true,
      },

      // ─── www → non-www canonical redirect (host normalization) ─────────
      // Keep last so path-specific rules apply first. Handles any path not
      // matched above when accessed via the www subdomain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.shoreaquatic.com" }],
        destination: "https://shoreaquatic.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
