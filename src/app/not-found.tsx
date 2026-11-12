import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="pt-16">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-aqua-400">404</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            The product may have sold out for the season or moved. Browse the shop or
            try one of our bundle packs instead.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-coral px-7 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-coral/20 hover:bg-orange-500"
            >
              Browse the shop
            </Link>
            <Link
              href="/shop/bundles"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5"
            >
              Shop bundles
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
