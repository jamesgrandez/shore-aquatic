"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShoppingCart, Check } from "lucide-react";
import type { Product } from "@/lib/mockData";
import { CartUtils } from "@/lib/cart";

/**
 * Homepage "New: Bundle Packs & Combo Deals" carousel.
 * Native horizontal scroll-snap (swipe on touch), prev/next arrows on desktop,
 * no autoplay. Card heights are fixed so nothing shifts while images load.
 */
export type CarouselBundle = Product & { cardImage: string | null };

export default function BundleCarousel({ bundles }: { bundles: CarouselBundle[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [added, setAdded] = useState<string | null>(null);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const page = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const addToCart = (p: Product) => {
    CartUtils.add(p);
    setAdded(p.id);
    window.setTimeout(() => setAdded((cur) => (cur === p.id ? null : cur)), 1600);
  };

  if (!bundles.length) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-labelledby="bundle-carousel-heading"
      className="relative bg-ocean-950 pt-4 pb-12 sm:pt-6 sm:pb-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 id="bundle-carousel-heading" className="text-2xl sm:text-3xl font-bold text-white">
              New: Bundle Packs &amp; Combo Deals
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">
              Fill your tank in one box. Variety packs, tank-size bundles and buy-more-save deals,
              priced below buying plants one at a time.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={() => page(-1)}
                disabled={atStart}
                aria-label="Previous bundles"
                aria-controls="bundle-carousel-track"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => page(1)}
                disabled={atEnd}
                aria-label="Next bundles"
                aria-controls="bundle-carousel-track"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <Link
              href="/shop/bundles"
              className="rounded-full bg-coral px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-coral/25 transition-all hover:bg-orange-500 hover:shadow-coral/40 whitespace-nowrap"
            >
              Shop all bundles
            </Link>
          </div>
        </div>

        <ul
          id="bundle-carousel-track"
          ref={trackRef}
          onScroll={updateEdges}
          tabIndex={0}
          aria-label="Bundle products — scroll horizontally"
          className="mt-6 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:mx-0 sm:px-0 [scrollbar-width:thin] focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua-400/60 rounded-xl"
        >
          {bundles.map((p, i) => {
            const img = p.cardImage;
            const unavailable = p.availability === "OUT OF SEASON";
            return (
              <li
                key={p.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${bundles.length}: ${p.name}`}
                className="snap-start shrink-0 basis-[76%] sm:basis-[calc((100%-1rem)/2)] md:basis-[calc((100%-2rem)/3)] lg:basis-[calc((100%-3rem)/4)]"
              >
                <article className="glass flex h-full flex-col overflow-hidden rounded-2xl">
                  <Link href={`/shop/${p.id}`} className="relative block aspect-square bg-white" tabIndex={-1}>
                    {img && (
                      <Image
                        src={img}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 76vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
                        className={p.images?.length ? "object-contain" : "object-cover"}
                        priority={i < 2}
                        loading={i < 2 ? "eager" : "lazy"}
                      />
                    )}
                    {p.badge && (
                      <span className="absolute left-3 top-3 rounded-full bg-coral px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                        {p.badge}
                      </span>
                    )}
                  </Link>
                  <div className="flex flex-1 flex-col p-4">
                    <Link href={`/shop/${p.id}`} className="hover:text-aqua-400 transition-colors">
                      <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-bold leading-5 text-white">
                        {p.name}
                      </h3>
                    </Link>
                    <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                      <span className="text-lg font-bold text-aqua-400">${p.price.toFixed(2)}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(p)}
                        disabled={unavailable}
                        aria-label={`Add ${p.name} to cart`}
                        className="flex items-center gap-1.5 rounded-full bg-coral px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-coral/20 transition-all hover:bg-orange-500 disabled:bg-slate-700/50 disabled:text-slate-500 disabled:shadow-none disabled:cursor-not-allowed cursor-pointer"
                      >
                        {added === p.id ? <Check size={14} /> : <ShoppingCart size={14} />}
                        {unavailable ? "Unavailable" : added === p.id ? "Added" : "Add"}
                      </button>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
