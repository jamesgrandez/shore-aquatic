import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { plantDetails } from "@/lib/plantDetails";
import { products } from "@/lib/mockData";
import { waterGardenProducts } from "@/lib/waterGardenData";
import {
  extractGenus,
  getFamilyOrFallback,
  getGenusBackground,
  getGenusProTips,
  getDifficulty,
  getCO2Recommendation,
  getTankSizeRecommendation,
  getAquascapingNotes,
  getTankMateCompatibility,
  getCommonIssues,
  getFAQs,
  relatedGuides,
} from "@/lib/careGuideContent";
import Footer from "@/components/Footer";

const BASE = "https://shoreaquatic.com";
const allProducts = [...products, ...waterGardenProducts];

// Convert a slug back to a display-ready scientific name
function slugToScientificName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Find a matching product using case-insensitive partial match on scientificName
function findMatchingProduct(slug: string) {
  const norm = slug.replace(/-/g, " ").toLowerCase();
  // Try exact match first
  let match = allProducts.find(
    (p) => p.scientificName?.toLowerCase() === norm
  );
  if (match) return match;

  // Partial: slug contains scientific name words
  match = allProducts.find((p) => {
    if (!p.scientificName) return false;
    const sci = p.scientificName.toLowerCase();
    return norm.startsWith(sci) || sci.startsWith(norm);
  });
  if (match) return match;

  // Genus + first species word overlap
  const slugWords = norm.split(" ");
  const genus = slugWords[0];
  const species = slugWords[1];
  return (
    allProducts.find((p) => {
      if (!p.scientificName) return false;
      const parts = p.scientificName.toLowerCase().split(" ");
      return (
        parts[0] === genus &&
        species !== undefined &&
        parts[1] !== undefined &&
        (parts[1].startsWith(species) || species.startsWith(parts[1]))
      );
    }) ?? null
  );
}

export async function generateStaticParams() {
  return Object.keys(plantDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = plantDetails[slug];
  if (!detail) return { title: "Care Guide Not Found" };

  const scientificName = slugToScientificName(slug);
  const diff = getDifficulty(detail);
  const title = `${detail.commonName} (${scientificName}) Care Guide`;
  // Build a fresh, unique description from data + difficulty.
  const rawDesc = `${detail.commonName} (${scientificName}) ${diff.level.toLowerCase()}-level care guide. ${
    detail.lighting ? `Lighting: ${detail.lighting}. ` : ""
  }${detail.growthRate ? `Growth rate: ${detail.growthRate}. ` : ""}${
    detail.placement ? `Position: ${detail.placement}.` : ""
  }`.trim();
  const description = rawDesc.length > 158 ? rawDesc.slice(0, 155) + "..." : rawDesc;

  return {
    title,
    description,
    alternates: { canonical: `${BASE}/care-guides/${slug}` },
    openGraph: {
      title: `${title} – Shore Aquatic`,
      description,
      url: `${BASE}/care-guides/${slug}`,
      type: "article",
    },
  };
}

type StatCard = { label: string; value: string };

export default async function CareGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = plantDetails[slug];
  if (!detail) notFound();

  const scientificName = slugToScientificName(slug);
  const genus = extractGenus(slug);
  const matchedProduct = findMatchingProduct(slug);
  const resolvedFamily = getFamilyOrFallback(detail);
  const difficulty = getDifficulty(detail);
  const genusBackground = getGenusBackground(detail);
  const proTips = getGenusProTips(detail);
  const co2 = getCO2Recommendation(detail);
  const tankSize = getTankSizeRecommendation(detail);
  const aquascaping = getAquascapingNotes(detail);
  const tankMates = getTankMateCompatibility(detail);
  const commonIssues = getCommonIssues(detail);
  const faqs = getFAQs(detail, scientificName);

  // Related guides: prefer genus-level matches, fall back to family
  const allPlants = Object.values(plantDetails);
  const related = relatedGuides(
    {
      slug,
      family: resolvedFamily,
      commonName: detail.commonName,
      lighting: detail.lighting,
    },
    allPlants.map((p) => ({
      slug: p.slug,
      family: getFamilyOrFallback(p),
      commonName: p.commonName,
      lighting: p.lighting,
    })),
    6
  );

  const stats: StatCard[] = [
    { label: "Lighting", value: detail.lighting || "Adaptable" },
    { label: "Growth Rate", value: detail.growthRate || "Moderate" },
    { label: "Growth Form", value: detail.growthForm || "Varies" },
    { label: "Placement", value: detail.placement || "Versatile" },
    { label: "True Aquatic", value: detail.trueAquatic || "Yes" },
    { label: "Available As", value: detail.availableAs || "Varies" },
  ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${detail.commonName} (${scientificName}) Care Guide`,
    description: `Complete ${difficulty.level.toLowerCase()}-level care guide for ${detail.commonName} covering lighting, CO2, aquascaping placement, tank-mate compatibility, common issues, and propagation.`,
    author: { "@type": "Organization", name: "Shore Aquatic" },
    publisher: {
      "@type": "Organization",
      name: "Shore Aquatic",
      logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
    },
    datePublished: "2025-01-01",
    dateModified: "2026-06-09",
    url: `${BASE}/care-guides/${slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Care Guides", item: `${BASE}/care-guides` },
      {
        "@type": "ListItem",
        position: 3,
        name: detail.commonName,
        item: `${BASE}/care-guides/${slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="pt-16 min-h-screen bg-ocean-950">
        {/* Breadcrumb */}
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <ol className="flex items-center gap-1.5 text-xs text-slate-500 flex-wrap">
            <li>
              <Link href="/" className="hover:text-aqua-400 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-slate-700">/</li>
            <li>
              <Link href="/care-guides" className="hover:text-aqua-400 transition-colors">
                Care Guides
              </Link>
            </li>
            <li className="text-slate-700">/</li>
            <li className="text-slate-300">{detail.commonName}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-ocean-800 to-ocean-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-aqua-400 mb-3">
              Care Guide
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {detail.commonName}
            </h1>
            <p className="mt-2 text-lg italic text-slate-400">{scientificName}</p>

            {/* Difficulty + availability badges */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border ${
                  difficulty.level === "Beginner"
                    ? "bg-emerald-400/15 text-emerald-300 border-emerald-400/30"
                    : difficulty.level === "Intermediate"
                    ? "bg-aqua-400/15 text-aqua-300 border-aqua-400/30"
                    : "bg-orange-400/15 text-orange-300 border-orange-400/30"
                }`}
              >
                {difficulty.level} difficulty
              </span>
              {matchedProduct && (
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border ${
                    matchedProduct.availability === "AVAILABLE"
                      ? "bg-emerald-400/15 text-emerald-300 border-emerald-400/30"
                      : matchedProduct.availability === "BACKORDER"
                      ? "bg-yellow-400/15 text-yellow-300 border-yellow-400/30"
                      : "bg-slate-400/10 text-slate-400 border-slate-400/20"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      matchedProduct.availability === "AVAILABLE"
                        ? "bg-emerald-400"
                        : matchedProduct.availability === "BACKORDER"
                        ? "bg-yellow-400"
                        : "bg-slate-500"
                    }`}
                  />
                  {matchedProduct.availability === "AVAILABLE"
                    ? "In Stock"
                    : matchedProduct.availability === "BACKORDER"
                    ? "Backorder"
                    : "Out of Season"}
                </span>
              )}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
          {/* Care stats grid */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Care at a Glance
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
                >
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1.5">
                    {stat.label}
                  </p>
                  <p className="text-sm font-medium text-white leading-snug">{stat.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Description */}
          {detail.description && (
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white mb-4">About This Plant</h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {detail.description}
              </p>
            </section>
          )}

          {/* Genus background — adds unique, family-specific context */}
          {genusBackground && (
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white mb-2">
                About the {genus.charAt(0).toUpperCase() + genus.slice(1)} Genus
              </h2>
              {resolvedFamily && (
                <p className="text-[11px] uppercase tracking-wider text-aqua-400 mb-3">
                  Family — {resolvedFamily}
                </p>
              )}
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {genusBackground}
              </p>
            </section>
          )}

          {/* Quick-reference detail table — unique per plant */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white mb-4">Quick-Reference Details</h2>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <dt className="text-slate-500">Common name</dt>
                <dd className="text-slate-200 font-medium text-right">{detail.commonName}</dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <dt className="text-slate-500">Scientific name</dt>
                <dd className="text-slate-200 font-medium italic text-right">{scientificName}</dd>
              </div>
              {resolvedFamily && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-500">Family</dt>
                  <dd className="text-slate-200 font-medium text-right">{resolvedFamily}</dd>
                </div>
              )}
              {detail.nativeTo && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-500">Native to</dt>
                  <dd className="text-slate-200 font-medium text-right">{detail.nativeTo}</dd>
                </div>
              )}
              <div className="flex justify-between border-b border-white/5 pb-2">
                <dt className="text-slate-500">Difficulty</dt>
                <dd className="text-slate-200 font-medium text-right">{difficulty.level}</dd>
              </div>
              {detail.requirements && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-500">Requirements</dt>
                  <dd className="text-slate-200 font-medium text-right">{detail.requirements}</dd>
                </div>
              )}
              {detail.lighting && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-500">Lighting</dt>
                  <dd className="text-slate-200 font-medium text-right">{detail.lighting}</dd>
                </div>
              )}
              {detail.growthRate && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-500">Growth rate</dt>
                  <dd className="text-slate-200 font-medium text-right">{detail.growthRate}</dd>
                </div>
              )}
              {detail.growthForm && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-500">Growth form</dt>
                  <dd className="text-slate-200 font-medium text-right">{detail.growthForm}</dd>
                </div>
              )}
              {detail.placement && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-500">Placement</dt>
                  <dd className="text-slate-200 font-medium text-right">{detail.placement}</dd>
                </div>
              )}
              {detail.trueAquatic && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-500">True aquatic</dt>
                  <dd className="text-slate-200 font-medium text-right">{detail.trueAquatic}</dd>
                </div>
              )}
              {detail.availableAs && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-500">Available as</dt>
                  <dd className="text-slate-200 font-medium text-right">{detail.availableAs}</dd>
                </div>
              )}
            </dl>
          </section>

          {/* Difficulty rationale */}
          <section className="bg-aqua-400/8 border border-aqua-400/20 rounded-2xl p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-aqua-400 uppercase tracking-wide mb-2">
              Difficulty — {difficulty.level}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">{difficulty.rationale}</p>
          </section>

          {/* CO2 + tank-size recommendations */}
          <section className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white mb-3">CO2 &amp; Fertilization</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{co2}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white mb-3">Tank Size &amp; Setup</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{tankSize}</p>
            </div>
          </section>

          {/* Aquascaping placement */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white mb-4">Aquascaping &amp; Placement</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{aquascaping}</p>
          </section>

          {/* Tank mate compatibility */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white mb-4">Tank-Mate Compatibility</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{tankMates}</p>
          </section>

          {/* Pro tips (genus-specific) */}
          {proTips.length > 0 && (
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white mb-4">
                Pro Tips for Growing {detail.commonName}
              </h2>
              <ul className="space-y-3 text-slate-300 text-sm">
                {proTips.map((tip, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-aqua-400/20 text-aqua-300 text-[10px] font-bold">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Common care issues */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white mb-4">Common Care Issues</h2>
            <div className="space-y-4">
              {commonIssues.map((issue, i) => (
                <div key={i} className="border-l-2 border-coral/40 pl-4">
                  <h3 className="text-sm font-semibold text-coral mb-1">{issue.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{issue.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white mb-5">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((f, i) => (
                <div key={i} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <h3 className="text-sm font-semibold text-white mb-2">{f.q}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Buy CTA */}
          {matchedProduct && (
            <section className="bg-gradient-to-r from-ocean-800 to-ocean-900 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-aqua-400 mb-1">Available to Purchase</p>
                <p className="text-lg font-bold text-white">
                  {detail.commonName} — ${matchedProduct.price.toFixed(2)}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Free 2-day shipping on orders over $100
                </p>
              </div>
              <Link
                href={`/shop/${matchedProduct.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Buy {detail.commonName}
              </Link>
            </section>
          )}

          {/* Related guides */}
          {related.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
                Related Care Guides
                {resolvedFamily && (
                  <span className="ml-2 text-slate-600 normal-case font-normal">
                    — {resolvedFamily}
                  </span>
                )}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/care-guides/${r.slug}`}
                    className="group block bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-aqua-400/30 transition-all duration-200"
                  >
                    <p className="text-sm font-medium text-white group-hover:text-aqua-400 transition-colors">
                      {r.commonName}
                    </p>
                    <p className="mt-0.5 text-xs italic text-slate-500 truncate">
                      {r.slug.replace(/-/g, " ")}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-slate-600">Lighting</span>
                      <span className="text-xs text-slate-400">{r.lighting || "Adaptable"}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}
