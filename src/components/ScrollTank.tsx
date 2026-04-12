"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Inline SVG plant shapes ── */
function TallStemPlant({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 80" className={className} aria-hidden>
      <line x1="20" y1="80" x2="20" y2="10" stroke="#22D3EE" strokeWidth="2" />
      <ellipse cx="20" cy="15" rx="12" ry="8" fill="#10B981" opacity="0.8" />
      <ellipse cx="12" cy="35" rx="10" ry="6" fill="#059669" opacity="0.7" />
      <ellipse cx="28" cy="50" rx="9" ry="5" fill="#10B981" opacity="0.6" />
    </svg>
  );
}

function RosettePlant({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 50" className={className} aria-hidden>
      <ellipse cx="30" cy="40" rx="28" ry="12" fill="#065F46" opacity="0.5" />
      <ellipse cx="30" cy="30" rx="20" ry="15" fill="#059669" opacity="0.8" />
      <ellipse cx="20" cy="20" rx="14" ry="10" fill="#10B981" />
      <ellipse cx="40" cy="22" rx="12" ry="9" fill="#34D399" />
      <ellipse cx="30" cy="12" rx="10" ry="8" fill="#6EE7B7" />
    </svg>
  );
}

function CarpetPlant({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 30" className={className} aria-hidden>
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 10}, 0)`}>
          <path d="M5 30 Q3 15 5 5 Q7 15 5 30" fill="#34D399" opacity="0.9" />
        </g>
      ))}
    </svg>
  );
}

function FernPlant({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 70" className={className} aria-hidden>
      <line x1="25" y1="70" x2="25" y2="15" stroke="#059669" strokeWidth="2" />
      <ellipse cx="15" cy="25" rx="12" ry="7" fill="#10B981" opacity="0.9" />
      <ellipse cx="35" cy="35" rx="11" ry="6" fill="#059669" opacity="0.8" />
      <ellipse cx="15" cy="48" rx="10" ry="5" fill="#34D399" opacity="0.7" />
      <ellipse cx="30" cy="55" rx="8" ry="4" fill="#10B981" opacity="0.6" />
    </svg>
  );
}

function BroadLeafPlant({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 60" className={className} aria-hidden>
      <line x1="25" y1="60" x2="25" y2="20" stroke="#0891B2" strokeWidth="2" />
      <ellipse cx="25" cy="18" rx="18" ry="14" fill="#059669" opacity="0.85" />
      <ellipse cx="25" cy="12" rx="12" ry="10" fill="#10B981" opacity="0.7" />
    </svg>
  );
}

/* ── Plant config: start positions (scattered) and end positions (in tank) ── */
const plants = [
  {
    id: 0,
    Component: TallStemPlant,
    startX: -30, startY: -35, endX: -28, endY: 0, size: "w-12 h-20",
  },
  {
    id: 1,
    Component: TallStemPlant,
    startX: 35, startY: -30, endX: -20, endY: 2, size: "w-10 h-18",
  },
  {
    id: 2,
    Component: FernPlant,
    startX: -35, startY: 25, endX: -15, endY: 5, size: "w-14 h-18",
  },
  {
    id: 3,
    Component: RosettePlant,
    startX: 30, startY: 30, endX: -5, endY: 10, size: "w-16 h-14",
  },
  {
    id: 4,
    Component: BroadLeafPlant,
    startX: -25, startY: -20, endX: 5, endY: 5, size: "w-12 h-16",
  },
  {
    id: 5,
    Component: CarpetPlant,
    startX: 25, startY: -25, endX: 0, endY: 18, size: "w-20 h-8",
  },
  {
    id: 6,
    Component: FernPlant,
    startX: 38, startY: 10, endX: 18, endY: 3, size: "w-12 h-16",
  },
  {
    id: 7,
    Component: TallStemPlant,
    startX: -38, startY: 5, endX: 22, endY: 0, size: "w-10 h-18",
  },
];

export default function ScrollTank() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Tank outline opacity
  const tankOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.15, 0.5, 1]);
  const tankBorder = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(34,211,238,0.1)", "rgba(34,211,238,0.3)", "rgba(34,211,238,0.5)"]
  );

  // Water fill height
  const waterHeight = useTransform(scrollYProgress, [0.3, 0.8], ["0%", "85%"]);
  const waterOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  // Text reveal
  const textOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.85, 1], [30, 0]);

  // Light rays
  const rayOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 0.7]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "250vh" }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Section label */}
        <motion.p
          style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
          className="absolute top-24 text-sm uppercase tracking-[0.3em] text-aqua-400/60 font-medium"
        >
          Scroll to Build Your Tank
        </motion.p>

        {/* Tank container */}
        <div className="relative w-[320px] h-[220px] sm:w-[480px] sm:h-[320px] md:w-[600px] md:h-[400px]">
          {/* Tank frame */}
          <motion.div
            style={{
              opacity: tankOpacity,
              borderColor: tankBorder,
            }}
            className="absolute inset-0 rounded-b-3xl rounded-t-lg border-2 bg-white/[0.02]"
          />

          {/* Water fill */}
          <motion.div
            style={{
              height: waterHeight,
              opacity: waterOpacity,
            }}
            className="absolute bottom-0 left-0 right-0 rounded-b-3xl bg-gradient-to-t from-cyan-900/30 via-cyan-800/15 to-transparent"
          />

          {/* Light rays */}
          <motion.div style={{ opacity: rayOpacity }} className="absolute inset-0 overflow-hidden rounded-b-3xl rounded-t-lg">
            <div className="absolute top-0 left-[20%] w-[60px] h-full bg-gradient-to-b from-cyan-400/[0.06] to-transparent rotate-[15deg] origin-top animate-wave" />
            <div className="absolute top-0 left-[45%] w-[40px] h-full bg-gradient-to-b from-cyan-400/[0.04] to-transparent rotate-[-10deg] origin-top animate-wave [animation-delay:3s]" />
            <div className="absolute top-0 left-[70%] w-[50px] h-full bg-gradient-to-b from-cyan-400/[0.05] to-transparent rotate-[8deg] origin-top animate-wave [animation-delay:6s]" />
          </motion.div>

          {/* Animated plants */}
          {plants.map((plant) => {
            const { Component, startX, startY, endX, endY, size, id } = plant;
            return (
              <AnimatedPlant
                key={id}
                scrollYProgress={scrollYProgress}
                startX={startX}
                startY={startY}
                endX={endX}
                endY={endY}
                size={size}
                Component={Component}
              />
            );
          })}

          {/* Tank bubbles (appear late) */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]) }}
            className="absolute inset-0 pointer-events-none"
          >
            {[
              { left: "25%", delay: 0, size: 6 },
              { left: "55%", delay: 1.5, size: 4 },
              { left: "40%", delay: 3, size: 5 },
              { left: "70%", delay: 2, size: 3 },
            ].map((b, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-aqua-400/30"
                style={{
                  width: b.size,
                  height: b.size,
                  left: b.left,
                  bottom: "15%",
                  animation: `bubble 4s ease-in ${b.delay}s infinite`,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Final text */}
        <motion.p
          style={{ opacity: textOpacity, y: textY }}
          className="mt-10 text-center text-lg sm:text-xl md:text-2xl font-light text-slate-300 max-w-md px-4"
        >
          <span className="text-aqua-300 font-medium">Carefully curated.</span>{" "}
          <span className="text-emerald-300 font-medium">Lovingly maintained.</span>{" "}
          <span className="text-blue-300 font-medium">Beautifully alive.</span>
        </motion.p>
      </div>
    </section>
  );
}

/* ── Animated plant wrapper ── */
import type { MotionValue } from "framer-motion";

function AnimatedPlant({
  scrollYProgress,
  startX,
  startY,
  endX,
  endY,
  size,
  Component,
}: {
  scrollYProgress: MotionValue<number>;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: string;
  Component: React.ComponentType<{ className?: string }>;
}) {
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [`${startX}vw`, `${(startX + endX) / 2}%`, `${endX}%`]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [`${startY}vh`, `${(startY + endY) / 2}%`, `${endY}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.5], [0.3, 0.6, 1]);

  return (
    <motion.div
      style={{ x, y, scale, opacity }}
      className={`absolute top-1/2 left-1/2 ${size}`}
    >
      <Component className="w-full h-full" />
    </motion.div>
  );
}
