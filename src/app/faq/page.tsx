import Link from "next/link";
import Footer from "@/components/Footer";

type FaqItem = { q: string; a: string };
type FaqSection = { title: string; items: FaqItem[] };

const sections: FaqSection[] = [
  {
    title: "Shipping & Delivery",
    items: [
      {
        q: "Do you ship live aquatic plants?",
        a: "Yes — we ship live aquatic plants nationwide from Fort Lauderdale, Florida. Every order is hand-packed in insulated, moisture-retaining packaging so plants arrive healthy and hydrated.",
      },
      {
        q: "How fast is shipping?",
        a: "Orders placed by 12pm ET typically ship within 1 business day. We offer free 2-day shipping on orders over $100. Faster options are available at checkout.",
      },
      {
        q: "When do orders ship?",
        a: "We ship Monday through Wednesday to avoid plants sitting in warehouses over the weekend. Orders placed Thursday through Sunday ship the following Monday.",
      },
      {
        q: "How do you pack aquatic plants for shipping?",
        a: "Plants are wrapped in moisture-retaining media, sealed in poly bags, and placed in insulated boxes with heat packs (cold months) or cool packs (hot months) based on your destination's weather forecast at the time of shipping.",
      },
      {
        q: "Do you ship internationally?",
        a: "Not at this time. We currently ship within the continental United States only. Aquatic plants are tightly regulated at international borders and we focus on ensuring the best possible experience for domestic customers.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes — every order over $100 ships free via 2-day delivery within the continental US.",
      },
    ],
  },
  {
    title: "Live Arrival Guarantee & Returns",
    items: [
      {
        q: "What is your live arrival guarantee?",
        a: "Every plant order is covered by our Live Arrival Guarantee. If any plant arrives damaged or in poor condition, contact us within 24 hours of delivery with a photo and we'll issue a replacement or store credit — no questions asked.",
      },
      {
        q: "What counts as 'damaged on arrival'?",
        a: "Mushy, fully melted, or broken-apart plants are covered. Normal transit stress — slightly yellowed leaves, a few bruised stems, or a plant that looks travel-tired — is not considered damage. Most aquatic plants bounce back within 1–2 weeks once planted and acclimated.",
      },
      {
        q: "My plant is melting — is that normal?",
        a: "Yes, 'melting' is a common and temporary response when aquatic plants are moved between environments (emersed-to-submersed, different lighting, different water chemistry). Trim damaged leaves and leave the rhizome or crown intact — new growth usually appears within 2–3 weeks.",
      },
      {
        q: "Can I return plants if I change my mind?",
        a: "Because aquatic plants are perishable and livestock are living animals, we cannot accept returns for buyer's remorse. If something is wrong with your order, please reach out — we'll work with you to make it right.",
      },
    ],
  },
  {
    title: "Plants & Care",
    items: [
      {
        q: "What types of aquatic plants do you sell?",
        a: "Over 1,043 species across three categories: freshwater aquarium plants (Anubias, Cryptocoryne, Echinodorus, Vallisneria, bunch plants, tissue culture, and more), water garden plants (hardy and tropical water lilies, lotus, marginal pond plants), and specialty varieties sourced from Florida Aquatic Nurseries.",
      },
      {
        q: "Do you sell water lilies and pond plants?",
        a: "Yes — our water garden collection includes hardy water lilies, tropical water lilies (day-blooming and night-blooming), lotus in multiple colors, and a wide variety of marginal and bog plants. Many are available year-round, with seasonal varieties on backorder during their off-season.",
      },
      {
        q: "Are your plants grown here or imported?",
        a: "All plants are sourced directly from Florida Aquatic Nurseries, one of the largest and oldest aquatic plant growers in North America. Plants are grown in Florida — not imported — which means they acclimate quickly to home tanks and are free of the pests common to overseas shipments.",
      },
      {
        q: "Do you sell tissue culture plants?",
        a: "Yes. Tissue culture (TC) plants arrive in sterile sealed cups — pest-free, algae-free, and snail-free. They're ideal for quarantine tanks, shrimp tanks, and fresh scapes. Look for the TC label on product pages.",
      },
      {
        q: "How do I prepare new plants for my aquarium?",
        a: "Rinse plants under cool dechlorinated water to remove any shipping media. Trim any damaged leaves. For rhizome plants (Anubias, Java Fern, Bucephalandra), attach to hardscape rather than burying the rhizome. For stem plants, plant individually an inch apart. Full care guides for 162+ species are available on our Care Guides page.",
      },
      {
        q: "Can you help me choose plants for my setup?",
        a: "Absolutely — email us at shoreaquatic@gmail.com or call (954) 253-9275 with your tank size, lighting, CO2 availability, and fish/shrimp stocking, and we'll recommend a plant list suited to your setup.",
      },
    ],
  },
  {
    title: "Orders, Availability & Payment",
    items: [
      {
        q: "How often is availability updated?",
        a: "Inventory is updated weekly from our nursery supplier. 'Available' means in stock. 'Backorder' means the plant has an expected arrival date — usually within 2–4 weeks. 'Out of Season' plants will return during their next growing season.",
      },
      {
        q: "What does 'Backorder' mean?",
        a: "Backorder items are currently out of stock but confirmed to be restocked on a near-term schedule. You can place an order for backorder items — we'll hold the order and ship everything together once the backordered plant arrives, or ship in-stock items first if you prefer.",
      },
      {
        q: "What payment methods do you accept?",
        a: "All major credit and debit cards, Shop Pay, Apple Pay, and Google Pay — all processed securely through Shopify at checkout. We do not store card data on our site.",
      },
      {
        q: "Can I modify or cancel my order after placing it?",
        a: "If your order hasn't shipped, yes — contact us ASAP at shoreaquatic@gmail.com with your order number. Once a package is handed to the carrier, changes are no longer possible.",
      },
    ],
  },
  {
    title: "Location & Contact",
    items: [
      {
        q: "Where are you located and where do you ship from?",
        a: "Shore Aquatic is based in Fort Lauderdale, Florida. All plants ship from South Florida, which means fast transit times to the entire Eastern and Central US and consistently warm conditions for our tropical varieties.",
      },
      {
        q: "Do you have a physical store?",
        a: "We operate as an online-first retailer and do not currently have a walk-in storefront. All orders are placed through the website and shipped directly to you.",
      },
      {
        q: "How can I contact you?",
        a: "Email shoreaquatic@gmail.com or call (954) 253-9275. We respond to emails within one business day. For pre-order care questions, the quickest route is usually email with photos of your tank attached.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sections.flatMap((s) =>
    s.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shoreaquatic.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: "https://shoreaquatic.com/faq",
    },
  ],
};

export default function FaqPage() {
  const totalCount = sections.reduce((n, s) => n + s.items.length, 0);

  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-ocean-800 to-ocean-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-aqua-400 mb-3">
            Support
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {totalCount} answers covering shipping, our live arrival guarantee,
            plant care, and everything else you might want to know before
            ordering.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-8 text-xs text-slate-500"
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-aqua-400 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden className="text-slate-700">
            /
          </li>
          <li className="text-slate-400">FAQ</li>
        </ol>
      </nav>

      {/* Sections */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                {section.title}
              </h2>
              <div className="divide-y divide-white/5 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                {section.items.map((item) => (
                  <details
                    key={item.q}
                    className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                      <h3 className="text-sm sm:text-base font-medium text-white leading-snug">
                        {item.q}
                      </h3>
                      <span
                        aria-hidden
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-400 text-xs transition-transform group-open:rotate-45 group-open:border-aqua-400/50 group-open:text-aqua-400"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 rounded-2xl border border-aqua-400/20 bg-gradient-to-br from-aqua-400/[0.06] to-transparent p-8 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Still have questions?
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            We&apos;re happy to help — reach out and we&apos;ll get back to you
            within one business day.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:shoreaquatic@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-aqua-400 px-6 py-2.5 text-sm font-semibold text-ocean-950 hover:bg-aqua-300 transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+19542539275"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-slate-200 hover:border-aqua-400/50 hover:text-aqua-400 transition-colors"
            >
              (954) 253-9275
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-slate-200 hover:border-aqua-400/50 hover:text-aqua-400 transition-colors"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
