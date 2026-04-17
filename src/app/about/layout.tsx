import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us – Shore Aquatic Fort Lauderdale",
  description: "Learn about Shore Aquatic, South Florida's premier aquatic plant and livestock provider based in Fort Lauderdale, FL. Family-run, expert-curated, Florida-grown.",
  alternates: { canonical: "https://shoreaquatic.com/about" },
  openGraph: {
    title: "About Shore Aquatic – Fort Lauderdale, FL",
    description: "South Florida's premier aquatic plant source. Hand-curated freshwater plants, water lilies, and livestock shipped nationwide.",
    url: "https://shoreaquatic.com/about",
  },
};
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
