import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Photo Credits & Licenses – Shore Aquatic",
  description:
    "Attribution for openly-licensed marine livestock photographs used on Shore Aquatic, sourced from iNaturalist and Wikimedia Commons under Creative Commons and public-domain licenses.",
  alternates: { canonical: "https://shoreaquatic.com/image-credits" },
  robots: { index: false, follow: true },
};
export default function ImageCreditsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
