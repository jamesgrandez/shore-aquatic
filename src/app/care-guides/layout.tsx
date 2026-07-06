import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aquatic Plant Care Guides",
  description: "Detailed aquarium plant care guides for 162 species. Learn lighting requirements, growth rates, placement, and expert tips for freshwater aquatic plants.",
  alternates: { canonical: "https://shoreaquatic.com/care-guides" },
  openGraph: {
    title: "Aquatic Plant Care Guides – Shore Aquatic",
    description: "Expert care guides for 162 aquatic plant species. Lighting, growth rate, placement tips and more.",
    url: "https://shoreaquatic.com/care-guides",
  },
};

export default function CareGuidesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
