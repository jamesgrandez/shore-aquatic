"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Products curated" },
  { value: "6", label: "Years in South Florida" },
  { value: "Weekly", label: "New arrivals" },
  { value: "100%", label: "Satisfaction guarantee" },
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function AboutSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-ocean-950 to-ocean-900 overflow-hidden">
      {/* Decorative coral SVGs */}
      <svg
        className="absolute left-0 top-1/4 w-24 h-32 opacity-10 text-coral"
        viewBox="0 0 80 120"
        fill="currentColor"
        aria-hidden
      >
        <path d="M20 120 C20 80, 5 60, 15 30 C20 15, 30 10, 30 0 M30 120 C30 90, 25 70, 35 40 C40 20, 50 15, 45 5 M40 120 C40 85, 55 65, 50 35 C48 20, 60 10, 55 0" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>
      <svg
        className="absolute right-0 bottom-1/4 w-20 h-28 opacity-10 text-aqua-500"
        viewBox="0 0 80 120"
        fill="currentColor"
        aria-hidden
      >
        <path d="M60 120 C60 80, 75 60, 65 30 C60 15, 50 10, 50 0 M50 120 C50 90, 55 70, 45 40 C40 20, 30 15, 35 5 M40 120 C40 85, 25 65, 30 35 C32 20, 20 10, 25 0" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Passion-Driven.
              <br />
              <span className="bg-gradient-to-r from-aqua-300 to-aqua-500 bg-clip-text text-transparent">
                Quality-Obsessed.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-slate-400 leading-relaxed">
              <p>
                Shore Aquatic is a South Florida specialty retailer dedicated to
                providing the highest quality aquatic plants, livestock, and
                equipment. We are not a warehouse — every product we carry has
                been hand-selected and vetted by our team of hobbyists and
                professionals.
              </p>
              <p>
                Our inventory spans freshwater and saltwater worlds, from
                tissue-culture carpeting plants to rare Bucephalandra, from
                captive-bred clownfish to wild-caught cardinal tetras. We work
                directly with farms and breeders to ensure exceptional quality
                and healthy arrivals.
              </p>
              <p>
                We operate on a review-first ordering model. When you place an
                order, our team verifies live availability and health before
                processing your payment — because you deserve exactly what you
                ordered, in the best condition possible.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <div className="glass-strong p-8 sm:p-10 rounded-2xl">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-aqua-400">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-coral" />
                <span className="text-xs font-semibold uppercase tracking-wider text-coral">
                  Est. South Florida
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
