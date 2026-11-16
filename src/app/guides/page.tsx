import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { getAllGuides, imageSize } from "@/lib/guides";

const URL = "https://shoreaquatic.com/guides";

export const metadata: Metadata = {
  title: { absolute: "Aquarium Plant Guides | Shore Aquatic" },
  description:
    "Practical guides from a Florida aquatic plant grower: how many plants your tank needs, bare-root vs potted vs tissue culture, what to do when plants arrive, and shipping in winter and summer.",
  alternates: { canonical: URL },
  openGraph: { title: "Aquarium Plant Guides | Shore Aquatic", url: URL },
};

export default function GuidesIndex() {
  const guides = getAllGuides();
  return (
    <main className="pt-16 bg-ocean-950 min-h-screen">
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#062a3a] to-ocean-950 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Aquarium Plant Guides</h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Straight answers from the people who grow and ship the plants: how many to buy, which kind,
            and how to get them settled in.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {guides.map((g, i) => {
            const [w, h] = imageSize(g.heroImage);
            return (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group glass flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-white">
                  <Image
                    src={g.heroImage}
                    alt={g.heroAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={i < 2}
                    className={`transition-transform duration-500 group-hover:scale-105 ${w === h ? "object-contain" : "object-cover"}`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-bold text-white group-hover:text-aqua-300">{g.h1}</h2>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{g.metaDescription}</p>
                  <span className="mt-auto pt-4 text-sm font-semibold text-aqua-400">Read the guide →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
