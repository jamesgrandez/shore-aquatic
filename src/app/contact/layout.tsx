import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us – Shore Aquatic | 954-253-9275",
  description: "Contact Shore Aquatic in Fort Lauderdale, FL. Call us at 954-253-9275. Questions about orders, availability, or care? We're here to help.",
  alternates: { canonical: "https://shoreaquatic.com/contact" },
  openGraph: {
    title: "Contact Shore Aquatic",
    description: "Reach Shore Aquatic in Fort Lauderdale, FL. Call 954-253-9275 or send us a message.",
    url: "https://shoreaquatic.com/contact",
  },
};
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
