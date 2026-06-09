import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
  async redirects() {
    return [
      // ═════════════════════════════════════════════════════════════════
      // SHOPIFY → NEXT.JS MIGRATION REDIRECTS
      // ═════════════════════════════════════════════════════════════════
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

      // ─── Specific high-impression product redirects (clear matches) ───
      // (101 impressions) Gracilaria hayi → Pom Pom Gracilaria listing
      {
        source: "/products/gracilaria-hayi-algae-red-bush-algae-for-reef-saltwater-refugium-tank",
        destination: "https://shoreaquatic.com/shop/sw-pompom",
        permanent: true,
      },
      // (79 impressions) Chaeto → Chaeto listing
      {
        source: "/products/chaeto-chaetomorpha-sp-macro-algae",
        destination: "https://shoreaquatic.com/shop/sw-chaeto",
        permanent: true,
      },
      // (77 impressions) Red grape caulerpa → all saltwater
      {
        source: "/products/red-grape-caulerpa-or-kelp-botryocladia-sp-macro-algae-refugium",
        destination: "https://shoreaquatic.com/shop?category=Saltwater",
        permanent: true,
      },
      // (81 impressions) Hornwort → Hornwort bunch listing
      {
        source: "/products/hornwort-coontail-or-ceratophyllum-demersum-aquarium-plant",
        destination: "https://shoreaquatic.com/shop/plant-bhornl",
        permanent: true,
      },

      // ─── Category-aware product fallbacks ─────────────────────────────
      // Cherry / Neocaridina shrimp → Livestock category
      {
        source: "/products/red-cherry-shrimp-live-shrimp-for-freshwater-aquariums-or-shrimp-tank",
        destination: "https://shoreaquatic.com/shop?category=Livestock",
        permanent: true,
      },
      {
        source: "/products/10-pack-neocaridina-freshwater-skittle-shrimp-by-shore-aquatic",
        destination: "https://shoreaquatic.com/shop?category=Livestock",
        permanent: true,
      },
      // Berghia / saltwater inverts → Saltwater (Livestock subcategory)
      {
        source: "/products/3-pack-berghia-nudibranch-for-saltwater-reef-fish-tank-aquarium",
        destination: "https://shoreaquatic.com/shop?category=Livestock",
        permanent: true,
      },
      // Water garden plants
      {
        source: "/products/blue-pickerel-pontederia-spp-live-pond-plant",
        destination: "https://shoreaquatic.com/shop?category=Water Garden",
        permanent: true,
      },
      {
        source: "/products/extra-large-portion-of-duckweed",
        destination: "https://shoreaquatic.com/shop?category=Water Garden",
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
      // /collections/* (all other Shopify category pages) → shop
      {
        source: "/collections/:slug*",
        destination: "https://shoreaquatic.com/shop",
        permanent: true,
      },
      // /products/* (all unmapped Shopify product URLs) → shop
      {
        source: "/products/:slug*",
        destination: "https://shoreaquatic.com/shop",
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
