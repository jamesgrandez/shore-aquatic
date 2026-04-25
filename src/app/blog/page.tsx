import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Aquarium Plant Guides & Tips | Shore Aquatic",
  description:
    "Expert guides on aquarium plant care, troubleshooting, substrate, CO2, and water parameters. Written by Shore Aquatic — South Florida's aquatic plant specialists.",
  alternates: { canonical: "https://shoreaquatic.com/blog" },
};

const posts = [
  {
    slug: "aquarium-plants-without-substrate",
    title: "Can Aquarium Plants Grow in Gravel or Sand?",
    description:
      "Complete guide — which plants thrive in gravel, sand, or bare-bottom tanks. Root tabs, epiphyte attachment, the Walstad method, and a 29-species compatibility table.",
    category: "Setup Guide",
    readTime: 16,
    date: "April 25, 2026",
    gradient: "from-amber-950 to-stone-900",
    icon: "🪨",
  },
  {
    slug: "aquarium-plants-melting",
    title: "Why Are My Aquarium Plants Melting? (And How to Save Them)",
    description:
      "Science-backed guide to plant melt — 5 types diagnosed, 19-species likelihood table, and a 6-step recovery protocol. Learn why melting is normal and when it's not.",
    category: "Troubleshooting",
    readTime: 14,
    date: "April 23, 2026",
    gradient: "from-cyan-950 to-teal-950",
    icon: "🪴",
  },
  {
    slug: "aquarium-plants-turning-brown-yellow-black",
    title: "Why Are My Aquarium Plants Turning Brown, Yellow, or Black?",
    description:
      "Complete troubleshooting guide — 24 causes diagnosed by color, pattern, and species. Includes water parameter chart, species melt guide, and step-by-step fixes.",
    category: "Troubleshooting",
    readTime: 15,
    date: "April 24, 2026",
    gradient: "from-emerald-900 to-teal-900",
    icon: "🌿",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      {/* Hero */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-ocean-800 to-ocean-950 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Shore Aquatic Blog
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Expert guides on aquarium plant care, troubleshooting, and the science behind a thriving planted tank.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              {/* Gradient banner */}
              <div
                className={`h-32 bg-gradient-to-br ${post.gradient} flex items-center justify-center text-4xl`}
              >
                {post.icon}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                    {post.category}
                  </span>
                  <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] text-slate-500">
                    {post.readTime} min read
                  </span>
                </div>

                <h2 className="text-base font-bold text-white leading-snug mb-2 group-hover:text-aqua-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-600">{post.date}</span>
                  <span className="text-xs font-medium text-aqua-400 group-hover:translate-x-1 transition-transform">
                    Read guide →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
