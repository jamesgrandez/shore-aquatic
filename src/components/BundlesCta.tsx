import Link from "next/link";

/** End-of-article callout linking blog readers to the bundles page. */
export default function BundlesCta() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16">
      <div className="glass flex flex-col items-start gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="text-lg font-bold text-white">Fill your tank in one box</h2>
          <p className="mt-1 text-sm text-slate-400">
            Beginner variety packs, Anubias and macroalgae bundles, and buy-more-save deals.
          </p>
        </div>
        <Link
          href="/shop/bundles"
          className="shrink-0 rounded-full bg-coral px-6 py-3 text-sm font-bold text-white shadow-lg shadow-coral/25 hover:bg-orange-500"
        >
          Shop plant bundles
        </Link>
      </div>
    </section>
  );
}
