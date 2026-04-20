import Link from "next/link";
import { plantDetails } from "@/lib/plantDetails";
import Footer from "@/components/Footer";

const lightingColor: Record<string, string> = {
  Low: "text-emerald-400",
  Medium: "text-yellow-400",
  High: "text-orange-400",
  Intense: "text-red-400",
};

function getLightingColor(lighting: string): string {
  for (const [key, cls] of Object.entries(lightingColor)) {
    if (lighting.toLowerCase().includes(key.toLowerCase())) return cls;
  }
  return "text-aqua-400";
}

const growthRateDot: Record<string, string> = {
  slow: "bg-blue-400",
  moderate: "bg-yellow-400",
  fast: "bg-green-400",
  extreme: "bg-red-400",
};

function getGrowthDot(rate: string): string {
  const lower = rate.toLowerCase();
  if (lower.includes("fast") || lower.includes("rapid")) return growthRateDot.fast;
  if (lower.includes("slow")) return growthRateDot.slow;
  if (lower.includes("moderate")) return growthRateDot.moderate;
  return "bg-aqua-400";
}

const entries = Object.values(plantDetails);

export default function CareGuidesIndexPage() {
  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      {/* Hero */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-ocean-800 to-ocean-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-aqua-400 mb-3">
            Knowledge Base
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Aquatic Plant Care Guides
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed">
            Expert care guides for {entries.length} aquatic plant species — covering lighting,
            growth rate, placement, and everything you need to grow a thriving planted aquarium.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xs text-slate-500 mb-6">
          {entries.length} guides available
        </p>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {entries.map((plant) => (
            <Link
              key={plant.slug}
              href={`/care-guides/${plant.slug}`}
              className="group block bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-aqua-400/30 transition-all duration-200"
            >
              {/* Common name */}
              <h2 className="text-sm font-semibold text-white group-hover:text-aqua-400 transition-colors leading-snug">
                {plant.commonName}
              </h2>

              {/* Scientific name from slug */}
              <p className="mt-0.5 text-xs italic text-slate-500 leading-snug truncate">
                {plant.slug.replace(/-/g, " ")}
              </p>

              {/* Care stats */}
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Lighting</span>
                  <span className={`text-xs font-medium ${getLightingColor(plant.lighting)}`}>
                    {plant.lighting}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Growth Rate</span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${getGrowthDot(plant.growthRate)}`} />
                    <span className="text-xs text-slate-400 truncate max-w-[100px]">{plant.growthRate}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Placement</span>
                  <span className="text-xs text-slate-400 truncate max-w-[110px]">{plant.placement}</span>
                </div>
              </div>

              {/* Family badge */}
              {plant.family && (
                <div className="mt-3 pt-3 border-t border-white/5">
                  <span className="text-[10px] text-slate-600">{plant.family}</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
