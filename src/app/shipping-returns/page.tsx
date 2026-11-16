import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { faqSections } from "@/lib/faqContent";

const URL = "https://shoreaquatic.com/shipping-returns";

export const metadata: Metadata = {
  title: "Shipping & Returns Policy",
  description:
    "How Shore Aquatic ships live aquatic plants and livestock from Fort Lauderdale, FL: ship days, packing, free 2-day shipping over $100, and our live arrival guarantee and returns policy.",
  alternates: { canonical: URL },
  openGraph: { title: "Shipping & Returns Policy | Shore Aquatic", url: URL },
};

// Same wording as the FAQ, so the policy never drifts from what we answer there.
const POLICY_SECTIONS = ["Shipping & Delivery", "Live Arrival Guarantee & Returns"];

export default function ShippingReturnsPage() {
  const sections = faqSections.filter((s) => POLICY_SECTIONS.includes(s.title));

  return (
    <main className="pt-16">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Shipping &amp; Returns Policy</h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            We ship live aquatic plants and livestock nationwide from Fort Lauderdale, Florida. Here is
            how shipping works and what happens if something arrives damaged.
          </p>

          {sections.map((section) => (
            <div key={section.title} className="mt-12">
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
              <dl className="mt-5 space-y-6">
                {section.items.map((item) => (
                  <div key={item.q} className="glass rounded-2xl p-6">
                    <dt className="font-semibold text-white">{item.q}</dt>
                    <dd className="mt-2 text-sm text-slate-400 leading-relaxed">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          <p className="mt-12 text-sm text-slate-400">
            Ordering in very cold or hot weather? See{" "}
            <Link href="/guides/shipping-live-plants-winter-summer" className="text-aqua-400 hover:underline">
              how we ship live plants in winter and summer
            </Link>
            .
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Questions about an order?{" "}
            <Link href="/contact" className="text-aqua-400 hover:underline">
              Contact us
            </Link>{" "}
            or see the full{" "}
            <Link href="/faq" className="text-aqua-400 hover:underline">
              FAQ
            </Link>
            .
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
