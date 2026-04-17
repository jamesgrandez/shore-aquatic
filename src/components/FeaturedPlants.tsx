"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface FeaturedPlant {
  id: string;
  name: string;
  sci: string;
  price: number;
  availability: string;
  imageUrl: string;
}

const featured: FeaturedPlant[] = [
  {
    id: "plant-protnl",
    name: "Rotala Macrandra",
    sci: "Rotala macrandra",
    price: 15.99,
    availability: "AVAILABLE",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543343223453-TS8OLXHLFCRBWF1YJLMZ/Rotala+rmacrandra+tank+%281+of+1%29.jpg?format=600w",
  },
  {
    id: "plant-pbarlnl",
    name: "Barclaya Longifolia",
    sci: "Barclaya longifolia",
    price: 24.99,
    availability: "AVAILABLE",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522708871014-46MZ443FUF50NLIJNWIN/Barclaya_longifolia_red_form.jpg?format=600w",
  },
  {
    id: "plant-phelnl",
    name: "Pogostemon Helferi",
    sci: "Pogostemon helferi",
    price: 19.99,
    availability: "AVAILABLE",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1542663706721-HMJN27J5CUDUB2EYP3Z3/Pogostemon+helferi+tank+%281+of+1%29-3.jpg?format=600w",
  },
  {
    id: "plant-pnymlnl",
    name: "Red Lotus",
    sci: "Nymphaea lotus 'Red'",
    price: 22.99,
    availability: "AVAILABLE",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1542305666937-6LNZUZ5ZGNXO0VD2IOMO/Nyphaea+lotus+%27Red%27+%281+of+1%29.jpg?format=600w",
  },
  {
    id: "plant-pbucnl",
    name: "Bucephalandra",
    sci: "Bucephalandra 'Green Wavy'",
    price: 29.99,
    availability: "AVAILABLE",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522870696527-1UP3FJ166VXGSQ24EJ8P/Bucephalandra+%27Green+Wavy%27+5+%281+of+1%29.jpg?format=600w",
  },
  {
    id: "plant-prolnl",
    name: "Rotala Wallichii",
    sci: "Rotala wallichii",
    price: 14.99,
    availability: "AVAILABLE",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543347880851-WZ3OEVV2SYE1OIM7G50K/Rotala+wallichii.jpg?format=600w",
  },
];

export default function FeaturedPlants() {
  return (
    <section className="py-20 sm:py-28 bg-ocean-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Featured Species
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-slate-400"
          >
            Hand-selected gems from our collection
          </motion.p>
        </div>

        {/* 3-column grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((plant, i) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group glass overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-aqua-400/5"
            >
              {/* Image area */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={plant.imageUrl}
                  alt={plant.name}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i === 0 ? "eager" : "lazy"}
                  priority={i === 0}
                />
                {/* Availability badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {plant.availability}
                  </span>
                </div>
              </div>

              {/* Info panel */}
              <div className="p-5">
                <h3 className="font-bold text-white text-lg leading-snug">{plant.name}</h3>
                <p className="mt-0.5 text-sm italic text-slate-400">{plant.sci}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-aqua-400">
                    ${plant.price.toFixed(2)}
                  </span>
                  <Link
                    href={`/shop/${plant.id}`}
                    className="text-sm font-medium text-coral hover:text-orange-400 transition-colors group-hover:translate-x-0.5 inline-block transition-transform"
                  >
                    View Plant &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Browse all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-coral/25 transition-all hover:bg-orange-500 hover:shadow-coral/40 hover:scale-105"
          >
            Browse All 1,043 Plants &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
