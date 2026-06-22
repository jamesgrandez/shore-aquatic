import Link from "next/link";
import Footer from "@/components/Footer";
import { imageCredits } from "@/lib/imageCredits";

export default function ImageCreditsPage() {
  const sorted = [...imageCredits].sort((a, b) => a.species.localeCompare(b.species));

  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      <section className="py-12 sm:py-16 bg-gradient-to-b from-ocean-800 to-ocean-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-aqua-400 mb-3">
            Attribution
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Photo Credits &amp; Licenses</h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl">
            Many of our marine livestock listings use species reference photographs shared
            under open licenses by photographers on{" "}
            <a href="https://www.inaturalist.org" className="text-aqua-400 hover:underline" rel="noopener noreferrer" target="_blank">
              iNaturalist
            </a>{" "}
            and{" "}
            <a href="https://commons.wikimedia.org" className="text-aqua-400 hover:underline" rel="noopener noreferrer" target="_blank">
              Wikimedia Commons
            </a>
            . These are representative images of each species — the individual animal you
            receive will vary in size, color, and pattern. We are grateful to the
            photographers below and list each work with its creator, license, and source.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Listings without a credit here use our own photography or photographs supplied by
            our wholesale partners.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-4 text-xs text-slate-500">
          {sorted.length} credited photographs
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left text-[11px] uppercase tracking-wider text-slate-400">
                <th className="px-4 py-3 font-semibold">Species</th>
                <th className="px-4 py-3 font-semibold">Photographer</th>
                <th className="px-4 py-3 font-semibold">License</th>
                <th className="px-4 py-3 font-semibold">Source</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((c, i) => (
                <tr
                  key={`${c.id}-${i}`}
                  className="border-t border-white/5 hover:bg-white/[0.03] transition-colors"
                >
                  <td className="px-4 py-2.5 text-slate-200">{c.species}</td>
                  <td className="px-4 py-2.5 text-slate-400">{c.author}</td>
                  <td className="px-4 py-2.5">
                    <span className="inline-block rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-slate-300">
                      {c.license}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    {c.sourceUrl ? (
                      <a
                        href={c.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-aqua-400 hover:underline"
                      >
                        {c.source}
                      </a>
                    ) : (
                      <span className="text-slate-400">{c.source}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-xs text-slate-500 leading-relaxed">
          <p>
            License abbreviations: <strong className="text-slate-400">CC0</strong> (public
            domain dedication), <strong className="text-slate-400">CC-BY</strong> (attribution),{" "}
            <strong className="text-slate-400">CC-BY-SA</strong> (attribution, share-alike),{" "}
            <strong className="text-slate-400">Public Domain</strong>. Full license texts at{" "}
            <a href="https://creativecommons.org/licenses/" className="text-aqua-400 hover:underline" rel="noopener noreferrer" target="_blank">
              creativecommons.org
            </a>
            . If you are a photographer and would like a credit corrected or an image removed,
            please <Link href="/contact" className="text-aqua-400 hover:underline">contact us</Link>.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
