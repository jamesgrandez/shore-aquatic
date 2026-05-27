"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/mockData";
import { waterGardenProducts } from "@/lib/waterGardenData";
import { saltwaterProducts } from "@/lib/saltwaterData";
import { livestockProducts } from "@/lib/livestockData";

const categories = [
  {
    name: "Plants",
    subtitle: "Freshwater & Saltwater Aquatic Flora",
    gradient: "from-emerald-950 via-teal-900 to-emerald-900",
    link: "/shop?category=Plants",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden>
        <path
          d="M24 44 C24 44, 24 20, 24 12 C24 4, 16 2, 10 8 C4 14, 8 24, 24 20"
          stroke="#34D399"
          strokeWidth="2"
          fill="#059669"
          opacity="0.7"
        />
        <path
          d="M24 44 C24 44, 24 24, 24 16 C24 8, 32 4, 38 10 C44 16, 38 28, 24 24"
          stroke="#6EE7B7"
          strokeWidth="2"
          fill="#10B981"
          opacity="0.6"
        />
        <line x1="24" y1="44" x2="24" y2="12" stroke="#22D3EE" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Livestock",
    subtitle: "Hand-Selected Fish, Shrimp & More",
    gradient: "from-blue-950 via-indigo-900 to-blue-900",
    link: "/shop?category=Livestock",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden>
        <ellipse cx="22" cy="24" rx="14" ry="9" fill="#3B82F6" opacity="0.7" />
        <path
          d="M36 24 C40 18, 44 16, 44 24 C44 32, 40 30, 36 24"
          fill="#60A5FA"
          opacity="0.6"
        />
        <circle cx="14" cy="22" r="2" fill="white" opacity="0.8" />
        <path
          d="M22 18 C24 14, 28 14, 28 18"
          stroke="#93C5FD"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Water Garden",
    subtitle: "Pond Lilies, Lotus & Marginal Plants",
    gradient: "from-cyan-950 via-teal-900 to-blue-950",
    link: "/shop?category=Water Garden",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden>
        {/* Water surface */}
        <ellipse cx="24" cy="32" rx="18" ry="6" fill="#0E7490" opacity="0.4" />
        {/* Lily pad */}
        <ellipse cx="20" cy="30" rx="8" ry="5" fill="#059669" opacity="0.8" />
        <path d="M20 30 L20 25" stroke="#34D399" strokeWidth="1.5" fill="none" opacity="0.7" />
        {/* Flower */}
        <circle cx="20" cy="23" r="3" fill="#F472B6" opacity="0.9" />
        <ellipse cx="20" cy="20" rx="2" ry="3.5" fill="#FBCFE8" opacity="0.7" transform="rotate(-30 20 20)" />
        <ellipse cx="20" cy="20" rx="2" ry="3.5" fill="#FBCFE8" opacity="0.7" transform="rotate(30 20 20)" />
        <ellipse cx="20" cy="19" rx="2" ry="3.5" fill="#FBCFE8" opacity="0.7" />
        {/* Second lily pad */}
        <ellipse cx="32" cy="33" rx="6" ry="4" fill="#047857" opacity="0.6" />
        {/* Ripples */}
        <ellipse cx="24" cy="34" rx="16" ry="4" stroke="#22D3EE" strokeWidth="0.8" fill="none" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Saltwater",
    subtitle: "Macroalgae, Corals & Marine Plants",
    gradient: "from-rose-950 via-red-900 to-orange-900",
    link: "/shop?category=Saltwater",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden>
        {/* Coral/macroalgae fronds */}
        <path
          d="M12 42 C12 42, 10 28, 14 22 C18 16, 14 10, 18 6"
          stroke="#FB7185"
          strokeWidth="2.5"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M24 42 C24 42, 22 26, 26 18 C30 10, 24 6, 28 4"
          stroke="#F43F5E"
          strokeWidth="2.5"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M36 42 C36 42, 34 30, 38 24 C42 18, 36 14, 40 10"
          stroke="#FDA4AF"
          strokeWidth="2.5"
          fill="none"
          opacity="0.8"
        />
        {/* Pom-pom dots along fronds */}
        <circle cx="14" cy="22" r="2.2" fill="#FB7185" opacity="0.9" />
        <circle cx="26" cy="18" r="2.4" fill="#F43F5E" opacity="0.9" />
        <circle cx="38" cy="24" r="2.2" fill="#FDA4AF" opacity="0.9" />
        <circle cx="18" cy="6" r="1.8" fill="#FB7185" opacity="0.8" />
        <circle cx="28" cy="4" r="1.8" fill="#F43F5E" opacity="0.8" />
        <circle cx="40" cy="10" r="1.8" fill="#FDA4AF" opacity="0.8" />
        {/* Substrate */}
        <ellipse cx="24" cy="42" rx="20" ry="2" fill="#9CA3AF" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Dry Goods",
    subtitle: "Equipment, Filtration & Supplements",
    gradient: "from-slate-900 via-zinc-900 to-slate-800",
    link: "/shop?category=Dry Goods",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden>
        <rect x="8" y="14" width="32" height="24" rx="3" stroke="#94A3B8" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M14 14 L14 8 L34 8 L34 14" stroke="#94A3B8" strokeWidth="2" fill="none" opacity="0.4" />
        <circle cx="24" cy="26" r="5" stroke="#67E8F9" strokeWidth="1.5" fill="none" opacity="0.7" />
        <line x1="24" y1="23" x2="24" y2="26" stroke="#67E8F9" strokeWidth="1.5" opacity="0.7" />
        <line x1="24" y1="26" x2="27" y2="27" stroke="#67E8F9" strokeWidth="1.5" opacity="0.7" />
      </svg>
    ),
  },
];

export default function CategoryCards() {
  return (
    <section className="py-20 sm:py-28 bg-ocean-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Shop by Category
          </h2>
          <p className="mt-3 text-slate-400">
            Explore our carefully curated collection
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat, i) => {
            const count =
              cat.name === "Water Garden"
                ? waterGardenProducts.length
                : cat.name === "Saltwater"
                  ? saltwaterProducts.length
                  : cat.name === "Livestock"
                    ? livestockProducts.length
                    : products.filter((p) => p.category === cat.name).length;

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <Link href={cat.link} className="group block cursor-pointer">
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${cat.gradient} min-h-[400px] p-8 flex flex-col justify-between transition-all duration-300 group-hover:scale-[1.02] group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-aqua-400/5`}
                  >
                    {/* Shimmer overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                    {/* Watermark icon */}
                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity scale-150">
                      {cat.icon}
                    </div>

                    <div>
                      <div className="mb-4">{cat.icon}</div>
                      <h3 className="text-2xl font-bold text-white">
                        {cat.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300/80">
                        {cat.subtitle}
                      </p>
                    </div>

                    <div className="flex items-end justify-between">
                      <span className="text-sm text-slate-400">
                        {count} products
                      </span>
                      <span className="text-sm font-medium text-aqua-400 group-hover:translate-x-1 transition-transform">
                        Shop {cat.name} &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
