"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Droplets, Clock, Microscope, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Droplets, title: "Day-Zero Advantage", text: "Live, swimming rotifers ready to feed larval fish and corals the moment they arrive." },
  { icon: Microscope, title: "Sized for Any Larvae", text: "Small (S-type) Brachionus — the right mouth-size for clownfish, dottybacks, and more." },
  { icon: Clock, title: "Harvested Fresh", text: "Cultured and packed the day they ship, not pulled from old stock." },
  { icon: ShieldCheck, title: "Live Arrival Guarantee", text: "Insulated overnight shipping with a guaranteed-alive promise." },
];

export default function RotiferHero() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-ocean-950 to-[#04101f]">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-[-5%] w-[35vw] h-[35vw] rounded-full bg-emerald-600/10 blur-[130px]" />
        <div className="absolute bottom-0 left-[-5%] w-[28vw] h-[28vw] rounded-full bg-cyan-700/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-float">
              <Image
                src="/images/rotifers/hero-packshot.jpg"
                alt="Live Marine Rotifers — Shore Aquatic"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating size-lineup accent */}
            <div className="absolute -bottom-6 -right-4 w-40 sm:w-52 rounded-2xl overflow-hidden border border-white/15 shadow-xl hidden sm:block rotate-3">
              <Image
                src="/images/rotifers/sizes-lineup.jpg"
                alt="Rotifer culture sizes"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Copy side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Cultures
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Live Marine{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-aqua-400 bg-clip-text text-transparent">
                Rotifers
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              The foundation of any successful marine breeding project. Our
              dense, live <span className="italic">Brachionus</span> cultures
              give larval fish and filter-feeding corals the live first food
              they need — delivered overnight, swimming and ready.
            </p>

            {/* Benefit grid */}
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
                    <b.icon size={16} className="text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{b.title}</p>
                    <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price + CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Starting at</p>
                <p className="text-2xl font-bold text-white">
                  $19.99 <span className="text-sm font-normal text-slate-500">/ 4 oz culture</span>
                </p>
              </div>
              <Link
                href="/shop/live-marine-rotifers"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-coral/25 transition-all hover:bg-orange-500 hover:shadow-coral/40 hover:scale-105"
              >
                Shop Live Rotifers &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
