import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

const URL = "https://shoreaquatic.com/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Shore Aquatic collects, uses and shares information when you visit shoreaquatic.com, place an order, sign up for emails or contact us.",
  alternates: { canonical: URL },
  openGraph: { title: "Privacy Policy | Shore Aquatic", url: URL },
};

export default function PrivacyPolicyPage() {
  return <LegalPage file="privacy-policy" />;
}
