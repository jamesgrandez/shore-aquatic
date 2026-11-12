import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

const URL = "https://shoreaquatic.com/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for using shoreaquatic.com and buying live aquatic plants and animals from Shore Aquatic LLC: orders, shipping, the Live Arrival Guarantee and more.",
  alternates: { canonical: URL },
  openGraph: { title: "Terms of Service | Shore Aquatic", url: URL },
};

export default function TermsOfServicePage() {
  return <LegalPage file="terms-of-service" />;
}
