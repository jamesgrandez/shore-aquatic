import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import PlantCalculator, { type CalcPack } from "./PlantCalculator";
import { findProduct } from "@/lib/catalog";
import { getProductImage } from "@/lib/imageMap";
import { PACKS, type PackKey } from "@/lib/plantCalculator";
import { TANK_BUNDLE_PLACEHOLDER, tankBundleProductId, type Guide, type GuideSegment } from "@/lib/guides";

/** Frontmatter product slugs → published products (missing/hidden ones skipped). */
function stripProducts(slugs: string[]) {
  return slugs
    .map((s) => (s === TANK_BUNDLE_PLACEHOLDER ? tankBundleProductId() : s))
    .filter((s): s is string => Boolean(s))
    .map((s) => findProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
}

export function ProductStrip({ slugs }: { slugs: string[] }) {
  const products = stripProducts(slugs);
  if (!products.length) return null;
  return (
    <section aria-labelledby="guide-products" className="not-prose my-12">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 id="guide-products" className="text-xl font-bold text-white">
          Shop the plants in this guide
        </h2>
        <Link href="/shop/bundles" className="text-sm text-aqua-400 hover:underline shrink-0">
          All bundles →
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export function GuideFaq({ faq }: { faq: Guide["faq"] }) {
  if (!faq.length) return null;
  return (
    <section aria-labelledby="faq" className="not-prose my-12">
      <h2 id="faq" className="text-2xl font-bold text-white mb-5">
        FAQ
      </h2>
      <div className="space-y-3">
        {faq.map(({ q, aHtml }) => (
          <details key={q} className="group rounded-xl border border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none hover:bg-white/5 transition-colors">
              <span className="text-sm sm:text-base font-medium text-white">{q}</span>
              <span className="text-slate-500 group-open:rotate-180 transition-transform shrink-0 text-lg leading-none">↓</span>
            </summary>
            <div
              className="guide-copy px-5 pb-4 pt-3 border-t border-white/5 text-sm"
              dangerouslySetInnerHTML={{ __html: aHtml }}
            />
          </details>
        ))}
      </div>
    </section>
  );
}

function calculatorPacks() {
  const toPack = (id: string, variant?: string): CalcPack | null => {
    const product = findProduct(id);
    return product ? { product, image: getProductImage(product.id), variant } : null;
  };
  const packs = Object.fromEntries(
    (Object.keys(PACKS) as PackKey[]).map((k) => [k, toPack(PACKS[k].productId, PACKS[k].variant)])
  ) as Record<PackKey, CalcPack | null>;
  return { packs, fallback: packs["9pack"] };
}

function Segment({ seg, guide }: { seg: GuideSegment; guide: Guide }) {
  if (seg.type === "html") return <div className="guide-copy" dangerouslySetInnerHTML={{ __html: seg.html }} />;
  if (seg.type === "image") {
    return (
      <figure className="my-8">
        <Image
          src={seg.src}
          alt={seg.alt}
          width={seg.width}
          height={seg.height}
          sizes="(max-width: 768px) 100vw, 768px"
          className="w-full h-auto rounded-2xl border border-white/10"
        />
        {seg.caption && <figcaption className="mt-2 text-sm text-slate-400 italic">{seg.caption}</figcaption>}
      </figure>
    );
  }
  switch (seg.name) {
    case "PlantCalculator": {
      const { packs, fallback } = calculatorPacks();
      return <PlantCalculator packs={packs} fallback={fallback} />;
    }
    case "ProductStrip":
      return <ProductStrip slugs={guide.products} />;
    case "FAQ":
      return <GuideFaq faq={guide.faq} />;
    default:
      return null; // unknown component marker: render nothing rather than break the page
  }
}

export function GuideBody({ guide }: { guide: Guide }) {
  return (
    <>
      {guide.segments.map((seg, i) => (
        <Segment key={i} seg={seg} guide={guide} />
      ))}
    </>
  );
}
