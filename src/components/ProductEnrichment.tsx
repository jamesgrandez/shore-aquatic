import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/mockData";
import { products } from "@/lib/mockData";
import { waterGardenProducts } from "@/lib/waterGardenData";
import { saltwaterProducts } from "@/lib/saltwaterData";
import { livestockProducts } from "@/lib/livestockData";
import { dryGoodsProducts } from "@/lib/dryGoodsData";
import { marineLivestockProducts } from "@/lib/marineLivestockData";
import { getProductImage } from "@/lib/imageMap";
import { findPlantDetail } from "@/lib/plantDetails";
import { getRelatedProducts, getQuickFacts, getAboutContext } from "@/lib/productEnrichment";

const allProducts: Product[] = [
  ...products,
  ...waterGardenProducts,
  ...saltwaterProducts,
  ...livestockProducts,
  ...dryGoodsProducts,
  ...marineLivestockProducts,
];

export default function ProductEnrichment({ product }: { product: Product }) {
  // Skip the About/Quick-Facts block for products that already render a full
  // hand-written care guide (avoids duplication); always show Related Products.
  const hasCareData = !!(product.scientificName && findPlantDetail(product.scientificName));
  const related = getRelatedProducts(product, allProducts, 6);
  const facts = getQuickFacts(product);
  const about = getAboutContext(product);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12">
      {!hasCareData && (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* About */}
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-4">About {product.name}</h2>
            <p className="text-sm text-slate-300 leading-relaxed">{about}</p>
          </div>

          {/* Quick facts */}
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-4">Quick Facts</h2>
            <dl className="space-y-2.5">
              {facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                  <dt className="text-xs text-slate-500 uppercase tracking-wider font-medium shrink-0">{f.label}</dt>
                  <dd className="text-sm text-white text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}

      {/* Related products — internal-link mesh */}
      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-white mb-5">You Might Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {related.map((p) => {
              const img = getProductImage(p.id);
              return (
                <Link
                  key={p.id}
                  href={`/shop/${p.id}`}
                  className="group block rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-aqua-400/30 transition-colors"
                >
                  <div className="h-24 overflow-hidden">
                    {img ? (
                      <Image
                        src={img}
                        alt={p.name}
                        width={240}
                        height={180}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${p.imageGradient}`} />
                    )}
                  </div>
                  <div className="p-2.5">
                    <p className="text-[11px] font-medium text-white leading-tight line-clamp-2 group-hover:text-aqua-300 transition-colors">
                      {p.name}
                    </p>
                    <p className="mt-1 text-[11px] font-bold text-aqua-400">${p.price.toFixed(2)}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
