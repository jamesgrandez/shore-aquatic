"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const bubbles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: 8 + (i * 7) % 16,
  left: `${5 + (i * 9) % 90}%`,
  delay: (i * 0.7) % 6,
  duration: 6 + (i * 0.5) % 6,
}));

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

interface PlantCard {
  name: string;
  url: string;
  position: string;
  rotate: string;
  animationDelay: string;
  hidden?: boolean;
}

const plantCards: PlantCard[] = [
  // Top-left cluster
  {
    name: "Rotala Macrandra",
    url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543343223453-TS8OLXHLFCRBWF1YJLMZ/Rotala+rmacrandra+tank+%281+of+1%29.jpg?format=300w",
    position: "top-8 left-4 lg:top-12 lg:left-8",
    rotate: "-rotate-[8deg]",
    animationDelay: "0s",
  },
  {
    name: "Barclaya Longifolia",
    url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522708871014-46MZ443FUF50NLIJNWIN/Barclaya_longifolia_red_form.jpg?format=300w",
    position: "top-16 left-20 lg:top-28 lg:left-36",
    rotate: "-rotate-[3deg]",
    animationDelay: "1s",
  },
  // Top-right cluster
  {
    name: "Pogostemon Helferi",
    url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1542663706721-HMJN27J5CUDUB2EYP3Z3/Pogostemon+helferi+tank+%281+of+1%29-3.jpg?format=300w",
    position: "top-8 right-4 lg:top-12 lg:right-8",
    rotate: "rotate-[5deg]",
    animationDelay: "0.3s",
  },
  {
    name: "Red Lotus",
    url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1542305666937-6LNZUZ5ZGNXO0VD2IOMO/Nyphaea+lotus+%27Red%27+%281+of+1%29.jpg?format=300w",
    position: "top-20 right-20 lg:top-32 lg:right-40",
    rotate: "rotate-[10deg]",
    animationDelay: "1.2s",
  },
  // Bottom-left cluster
  {
    name: "Bucephalandra",
    url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522870696527-1UP3FJ166VXGSQ24EJ8P/Bucephalandra+%27Green+Wavy%27+5+%281+of+1%29.jpg?format=300w",
    position: "bottom-24 left-4 lg:bottom-32 lg:left-8",
    rotate: "-rotate-[5deg]",
    animationDelay: "0.6s",
  },
  {
    name: "Red Cabomba",
    url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1523834252203-DB2PP17T1B5B5WMKLAFE/Red+Cabomba+%281+of+1%29-2.jpg?format=300w",
    position: "bottom-12 left-20 lg:bottom-16 lg:left-36",
    rotate: "rotate-[3deg]",
    animationDelay: "1.5s",
  },
  // Bottom-right cluster
  {
    name: "Myriophyllum Red",
    url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1541609294399-PJQD1O1XW6NSCI8W5U9R/Myriophyllum+tuberculatum+%27Red%27+%281+of+1%29.jpg?format=300w",
    position: "bottom-24 right-4 lg:bottom-32 lg:right-8",
    rotate: "rotate-[8deg]",
    animationDelay: "0.9s",
  },
  {
    name: "Bolbitis",
    url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522794171419-X7JKY14B4TY83O3IU8HD/Bolbitis+heudelotii+5+%281+of+1%29.jpg?format=300w",
    position: "bottom-12 right-20 lg:bottom-16 lg:right-40",
    rotate: "-rotate-[4deg]",
    animationDelay: "1.8s",
  },
  // Left-center
  {
    name: "Rotala Wallichii",
    url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543347880851-WZ3OEVV2SYE1OIM7G50K/Rotala+wallichii.jpg?format=300w",
    position: "top-1/2 -translate-y-1/2 left-4 lg:left-6",
    rotate: "-rotate-[12deg]",
    animationDelay: "0.4s",
    hidden: true,
  },
  // Right-center
  {
    name: "Staurogyne Repens",
    url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543596911254-OUCC5SFE3A9GG2Z5EK0U/Staurogyne+repens+2+%281+of+1%29.jpg?format=300w",
    position: "top-1/2 -translate-y-1/2 right-4 lg:right-6",
    rotate: "rotate-[6deg]",
    animationDelay: "1.1s",
    hidden: true,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs — toned down since photos provide visual interest */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/20 blur-[120px] animate-float" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-900/15 blur-[100px] animate-float [animation-delay:2s]" />
        <div className="absolute top-[10%] right-[5%] w-[20vw] h-[20vw] rounded-full bg-orange-900/15 blur-[80px] animate-float [animation-delay:4s]" />
      </div>

      {/* Floating plant photo cards — z-0, behind text */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {plantCards.map((card, i) => (
          <motion.div
            key={card.name}
            initial={{ opacity: 0, scale: 0.85, y: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: parseFloat(card.animationDelay) + 0.5,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`absolute ${card.position} ${card.hidden ? "hidden lg:block" : "hidden md:block"}`}
          >
            <div
              className={`w-32 h-40 sm:w-40 sm:h-52 ${card.rotate} rounded-xl overflow-hidden border border-white/20 shadow-2xl animate-float`}
              style={{ animationDelay: card.animationDelay }}
            >
              <Image
                src={card.url}
                alt={card.name}
                width={300}
                height={400}
                className="w-full h-full object-cover"
                loading="eager"
                priority={i === 0}
              />
            </div>
          </motion.div>
        ))}
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

      {/* Content — z-10 above photos */}
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
