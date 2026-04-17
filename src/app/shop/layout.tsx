import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Aquatic Plants & Water Garden Species",
  description: "Browse 1,043 species of freshwater aquarium plants, tropical and hardy water lilies, lotus, marginal plants and more. Filter by availability, water type, and category. Free 2-day shipping on orders over $100.",
  openGraph: {
    title: "Shop Aquatic Plants – Shore Aquatic",
    description: "Browse 1,043 species of freshwater aquarium plants, water lilies, lotus, and marginals. In-stock, backorder, and seasonal availability. Ships from Fort Lauderdale, FL.",
    url: "https://shoreaquatic.com/shop",
  },
  alternates: { canonical: "https://shoreaquatic.com/shop" },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
