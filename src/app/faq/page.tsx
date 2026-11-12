import Link from "next/link";
import Footer from "@/components/Footer";
import { faqSections as sections } from "@/lib/faqContent";


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
