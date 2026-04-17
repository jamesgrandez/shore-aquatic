"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Truck, Leaf, Droplets, Star } from "lucide-react";

const plantPhotos = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543343223453-TS8OLXHLFCRBWF1YJLMZ/Rotala+rmacrandra+tank+%281+of+1%29.jpg?format=600w",
    alt: "Rotala Macrandra",
    label: "Rotala Macrandra",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1542305666937-6LNZUZ5ZGNXO0VD2IOMO/Nyphaea+lotus+%27Red%27+%281+of+1%29.jpg?format=600w",
    alt: "Red Lotus",
    label: "Red Lotus",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522708871014-46MZ443FUF50NLIJNWIN/Barclaya_longifolia_red_form.jpg?format=600w",
    alt: "Barclaya Longifolia",
    label: "Barclaya Longifolia",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522870696527-1UP3FJ166VXGSQ24EJ8P/Bucephalandra+%27Green+Wavy%27+5+%281+of+1%29.jpg?format=600w",
    alt: "Bucephalandra",
    label: "Bucephalandra",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1542663706721-HMJN27J5CUDUB2EYP3Z3/Pogostemon+helferi+tank+%281+of+1%29-3.jpg?format=600w",
    alt: "Pogostemon Helferi",
    label: "Pogostemon Helferi",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543347880851-WZ3OEVV2SYE1OIM7G50K/Rotala+wallichii.jpg?format=600w",
    alt: "Rotala Wallichii",
    label: "Rotala Wallichii",
  },
];

const perks = [
  { icon: Truck,    text: "Free 2-day shipping" },
  { icon: Leaf,     text: "Live plant guarantee" },
  { icon: Droplets, text: "Florida-grown quality" },
  { icon: Star,     text: "Expert-curated selection" },
];

export default function ShippingBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-950 py-20 sm:py-28">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-aqua-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-900/50 border border-emerald-500/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">
              <Truck size={12} />
              Shipping Offer
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              Free{" "}
              <span className="text-aqua-400">2-Day</span>
              <br />
              Shipping
            </h2>

            <p className="mt-4 text-2xl font-semibold text-slate-300">
              on orders over{" "}
              <span className="text-emerald-400 font-extrabold">$100</span>
            </p>

            <p className="mt-5 text-base text-slate-400 leading-relaxed max-w-md">
              Every plant is packed with care in insulated, water-retaining packaging and shipped direct from our South Florida greenhouse. Your plants arrive alive — guaranteed.
            </p>

            {/* Perks list */}
            <ul className="mt-8 space-y-3">
              {perks.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua-500/15 ring-1 ring-aqua-400/20">
                    <Icon size={13} className="text-aqua-400" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-coral/25 transition-all hover:bg-orange-500 hover:scale-105"
              >
                Shop Now &rarr;
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-white"
              >
                Browse 1,043 Species
              </Link>
            </div>
          </motion.div>

          {/* ── Right: Plant photo mosaic ────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* 2-column asymmetric grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Column 1 — tall first card, then short */}
              <div className="flex flex-col gap-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl h-64 ring-1 ring-white/10 shadow-xl"
                >
                  <Image
                    src={plantPhotos[0].src}
                    alt={plantPhotos[0].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 45vw, 20vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-medium text-white/80 italic">
                    {plantPhotos[0].label}
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl h-44 ring-1 ring-white/10 shadow-xl"
                >
                  <Image
                    src={plantPhotos[1].src}
                    alt={plantPhotos[1].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 45vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-medium text-white/80 italic">
                    {plantPhotos[1].label}
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl h-44 ring-1 ring-white/10 shadow-xl"
                >
                  <Image
                    src={plantPhotos[2].src}
                    alt={plantPhotos[2].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 45vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-medium text-white/80 italic">
                    {plantPhotos[2].label}
                  </span>
                </motion.div>
              </div>

              {/* Column 2 — offset downward */}
              <div className="flex flex-col gap-3 mt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl h-44 ring-1 ring-white/10 shadow-xl"
                >
                  <Image
                    src={plantPhotos[3].src}
                    alt={plantPhotos[3].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 45vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-medium text-white/80 italic">
                    {plantPhotos[3].label}
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl h-64 ring-1 ring-white/10 shadow-xl"
                >
                  <Image
                    src={plantPhotos[4].src}
                    alt={plantPhotos[4].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 45vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-medium text-white/80 italic">
                    {plantPhotos[4].label}
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl h-36 ring-1 ring-white/10 shadow-xl"
                >
                  <Image
                    src={plantPhotos[5].src}
                    alt={plantPhotos[5].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 45vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-medium text-white/80 italic">
                    {plantPhotos[5].label}
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Floating pill badge on the mosaic */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-ocean-900 border border-white/15 shadow-2xl px-5 py-2.5 backdrop-blur-sm whitespace-nowrap"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-white">
                1,043 species · Ships in 24 hrs
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
