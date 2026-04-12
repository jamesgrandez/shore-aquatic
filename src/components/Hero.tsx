"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const bubbles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: 8 + Math.random() * 16,
  left: `${5 + Math.random() * 90}%`,
  delay: Math.random() * 6,
  duration: 6 + Math.random() * 6,
}));

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-900/30 blur-[120px] animate-float" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/20 blur-[100px] animate-float [animation-delay:2s]" />
        <div className="absolute top-[10%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-orange-900/20 blur-[80px] animate-float [animation-delay:4s]" />
      </div>

      {/* Animated bubbles */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full bg-aqua-400/20"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            bottom: "-5%",
            animation: `bubble ${b.duration}s ease-in ${b.delay}s infinite`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-aqua-300 shadow-lg shadow-aqua-400/5">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua-400 animate-pulse" />
            South Florida&apos;s Premium Aquatic Store
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight tracking-tight text-white"
        >
          Where Every Tank
          <br />
          <span className="font-bold bg-gradient-to-r from-aqua-300 to-blue-400 bg-clip-text text-transparent">
            Becomes a Living Masterpiece
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400"
        >
          Hand-curated freshwater and saltwater plants, livestock, and dry
          goods — available by weekly order. We grow it. We source it. You
          love it.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/shop"
            className="rounded-full bg-coral px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-coral/25 transition-all hover:bg-orange-500 hover:shadow-coral/40 hover:scale-105 cursor-pointer"
          >
            Browse the Catalog
          </Link>
          <Link
            href="/about"
            className="glass rounded-full border-aqua-400/30 px-8 py-3.5 text-sm font-medium text-aqua-300 transition-all hover:bg-white/10 hover:scale-105 cursor-pointer"
          >
            Learn About Us
          </Link>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-[80px] sm:h-[120px]"
        >
          <path
            d="M0 80 C360 20, 720 100, 1080 40 C1260 10, 1380 50, 1440 30 L1440 120 L0 120 Z"
            fill="#030B18"
          />
          <path
            d="M0 90 C300 40, 600 100, 900 50 C1100 20, 1300 60, 1440 40 L1440 120 L0 120 Z"
            fill="#010A14"
          />
        </svg>
      </div>
    </section>
  );
}
