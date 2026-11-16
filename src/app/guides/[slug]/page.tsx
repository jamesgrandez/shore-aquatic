import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { GuideBody } from "@/components/guides/GuideParts";
import { absolute, getGuide, getGuideSlugs, imageSize } from "@/lib/guides";
import { BLOG_OG_TITLES } from "@/lib/blogOgImage";

const SITE = "https://shoreaquatic.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const url = `${SITE}/guides/${slug}`;
  const og = absolute(g.ogImage);
  return {
    title: { absolute: g.seoTitle },
    description: g.metaDescription,
    alternates: { canonical: url },
    authors: [{ name: "James Grandez" }],
    openGraph: {
      type: "article",
      title: g.seoTitle,
      description: g.metaDescription,
      url,
      publishedTime: g.published,
      modifiedTime: g.updated,
      images: [{ url: og, alt: g.heroAlt || g.title }],
    },
    twitter: { card: "summary_large_image", title: g.seoTitle, description: g.metaDescription, images: [og] },
  };
}

function relatedLink(ref: string): { href: string; label: string } | null {
  if (ref.startsWith("/blog/")) {
    const slug = ref.slice("/blog/".length);
    return { href: ref, label: BLOG_OG_TITLES[slug]?.title ?? slug.replace(/-/g, " ") };
  }
  if (ref.startsWith("/")) return { href: ref, label: ref };
  const g = getGuide(ref);
  return g ? { href: `/guides/${ref}`, label: g.h1 } : null;
}

const fmtDate = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const url = `${SITE}/guides/${slug}`;
  const [hw, hh] = imageSize(g.heroImage);
  const related = g.related.map(relatedLink).filter((r): r is NonNullable<typeof r> => Boolean(r));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.title,
      description: g.metaDescription,
      image: [absolute(g.heroImage), absolute(g.ogImage)].filter((v, i, a) => a.indexOf(v) === i),
      datePublished: g.published,
      dateModified: g.updated,
      author: { "@type": "Person", name: "James Grandez", jobTitle: g.authorRole || undefined, url: `${SITE}/about` },
      publisher: { "@type": "Organization", name: "Shore Aquatic", url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/icon.png` } },
      mainEntityOfPage: url,
    },
    ...(g.faq.length
      ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: g.faq.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
        }]
      : []),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/guides` },
        { "@type": "ListItem", position: 3, name: g.h1, item: url },
      ],
    },
  ];

  return (
    <main className="pt-16 bg-ocean-950">
      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
          <Link href="/" className="hover:text-aqua-400">Home</Link> <span aria-hidden>›</span>{" "}
          <Link href="/guides" className="hover:text-aqua-400">Guides</Link>
        </nav>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight text-white">{g.h1}</h1>
        <p className="mt-3 text-sm text-slate-400">
          By {g.author.replace(/, Shore Aquatic$/, "")}
          {g.authorRole ? `, ${g.authorRole}` : ""} · Updated {fmtDate(g.updated)}
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white">
          <Image
            src={g.heroImage}
            alt={g.heroAlt}
            width={hw}
            height={hh}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="w-full h-auto max-h-[28rem] object-cover"
          />
        </div>

        <div className="mt-8">
          <GuideBody guide={g} />
        </div>

        {related.length > 0 && (
          <aside className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-base font-bold text-white">Keep reading</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-aqua-400 hover:underline">{r.label} →</Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </article>
      <Footer />
    </main>
  );
}
