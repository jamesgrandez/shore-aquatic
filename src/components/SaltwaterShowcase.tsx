"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ShowcaseItem {
  id: string;
  name: string;
  price: number;
  img: string;
  tag: string;
}

// Curated saltwater showpieces (all have real photos). Linked to their listings.
const row1: ShowcaseItem[] = [
  { id: "swl-angel-flame", name: "Flame Angel", price: 155.99, img: "/images/marine/swl-angel-flame.jpg", tag: "Angelfish" },
  { id: "swl-blue-angel-medium-large", name: "Blue Angel", price: 166.99, img: "/images/marine/swl-blue-angel-medium-large.jpg", tag: "Angelfish" },
  { id: "swl-copperband-butterfly-small", name: "Copperband Butterfly", price: 108.99, img: "/images/marine/swl-copperband-butterfly-small.jpg", tag: "Butterflyfish" },
  { id: "swl-clown-tang-s-m", name: "Clown Tang", price: 109.99, img: "/images/marine/swl-clown-tang-s-m.jpg", tag: "Tang" },
  { id: "swl-dogface-puffer-medium-large", name: "Dogface Puffer", price: 154.99, img: "/images/marine/swl-dogface-puffer-medium-large.jpg", tag: "Puffer" },
  { id: "swl-coral-beauty-medium", name: "Coral Beauty", price: 106.99, img: "/images/marine/swl-coral-beauty-medium.jpg", tag: "Angelfish" },
  { id: "swl-cleaner-wrasse-large", name: "Cleaner Wrasse", price: 92.99, img: "/images/marine/swl-cleaner-wrasse-large.jpg", tag: "Wrasse" },
  { id: "swl-yellow-watchman-goby-s-m", name: "Yellow Watchman Goby", price: 82.99, img: "/images/marine/swl-yellow-watchman-goby-s-m.jpg", tag: "Goby" },
];

const row2: ShowcaseItem[] = [
  { id: "swl-candy-cane-coral", name: "Candy Cane Coral", price: 104.99, img: "/images/marine/swl-candy-cane-coral.jpg", tag: "Coral" },
  { id: "swl-st-plate-coral", name: "Plate Coral", price: 113.99, img: "/images/marine/swl-st-plate-coral.jpg", tag: "Coral" },
  { id: "swl-long-tentacle-anemone", name: "Long Tentacle Anemone", price: 148.99, img: "/images/marine/swl-long-tentacle-anemone.jpg", tag: "Anemone" },
  { id: "swl-condylactis-anemone-pink-tip-5pk", name: "Condylactis Anemone — 5 Pack", price: 109.99, img: "/images/marine/swl-condylactis-anemone-pink-tip-5pk.jpg", tag: "Anemone" },
  { id: "swl-coral-banded-shrimp-mated-pair", name: "Coral Banded Shrimp Pair", price: 86.99, img: "/images/marine/swl-coral-banded-shrimp-mated-pair.jpg", tag: "Invertebrate" },
  { id: "swl-engineer-goby-small", name: "Engineer Goby", price: 81.99, img: "/images/marine/swl-engineer-goby-small.jpg", tag: "Goby" },
  { id: "swl-bicolor-angel-medium", name: "Bicolor Angel", price: 106.99, img: "/images/marine/swl-bicolor-angel-medium.jpg", tag: "Angelfish" },
  { id: "swl-berghia-nudibranch-5pk", name: "Berghia Nudibranch — 5 Pack", price: 145.99, img: "/images/marine/swl-berghia-nudibranch-5pk.webp", tag: "Aiptasia Control" },
];

function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  return (
    <Link
      href={`/shop/${item.id}`}
      className="group relative w-56 h-44 rounded-2xl overflow-hidden border border-white/10 shrink-0 mx-2 block"
    >
      <Image
        src={item.img}
        alt={item.name}
        width={448}
        height={352}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      {/* Tag chip */}
      <span className="absolute top-2.5 left-2.5 rounded-full bg-black/55 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-aqua-300 border border-aqua-400/20">
        {item.tag}
      </span>
      {/* Always-visible bottom gradient with name + price */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-8 pb-3 px-3">
        <p className="text-white text-sm font-semibold leading-tight truncate">{item.name}</p>
        <div className="mt-0.5 flex items-center justify-between">
          <span className="text-aqua-400 text-sm font-bold">${item.price.toFixed(2)}</span>
          <span className="text-[11px] text-coral font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}

function Row({ items, direction }: { items: ShowcaseItem[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  const animStyle =
    direction === "left"
      ? { animation: "marquee-left 50s linear infinite" }
      : { animation: "marquee-right 50s linear infinite" };
  return (
    <div className="flex overflow-hidden">
      <div className="flex hover:[animation-play-state:paused]" style={animStyle}>
        {doubled.map((item, i) => (
          <ShowcaseCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function SaltwaterShowcase() {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden bg-gradient-to-b from-ocean-950 via-[#04101f] to-ocean-950">
      {/* Reef glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-[30vw] h-[30vw] rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-[8%] w-[26vw] h-[26vw] rounded-full bg-orange-600/10 blur-[110px]" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-coral"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            Now Stocking — Saltwater
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Reef-Ready{" "}
            <span className="bg-gradient-to-r from-aqua-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Saltwater Livestock
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400"
          >
            Marine fish, hand-picked corals, anemones, and reef invertebrates —
            shipped overnight with a live arrival guarantee.
          </motion.p>
        </div>

        {/* Two scrolling rows */}
        <div
          className="flex flex-col gap-4"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <Row items={row1} direction="left" />
          <Row items={row2} direction="right" />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 text-center"
        >
          <Link
            href="/shop?category=Livestock&sub=Marine%20Fish"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-coral/25 transition-all hover:bg-orange-500 hover:shadow-coral/40 hover:scale-105"
          >
            Shop Saltwater Livestock &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
