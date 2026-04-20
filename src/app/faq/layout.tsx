import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – Frequently Asked Questions | Shore Aquatic",
  description:
    "Answers about shipping live aquatic plants, our live arrival guarantee, water lilies, tissue culture, plant care, payment methods, and more. Fort Lauderdale, FL.",
  alternates: { canonical: "https://shoreaquatic.com/faq" },
  openGraph: {
    title: "Shore Aquatic FAQ",
    description:
      "Everything you need to know about ordering live aquatic plants, shipping, our live arrival guarantee, and plant care.",
    url: "https://shoreaquatic.com/faq",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
