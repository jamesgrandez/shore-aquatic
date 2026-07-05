import Link from "next/link";

interface Guide {
  slug: string;
  title: string;
  blurb: string;
  emoji: string;
}

// Registry of blog guides used for internal linking.
const GUIDES: Record<string, Guide> = {
  "best-plants-for-betta-fish": {
    slug: "best-plants-for-betta-fish",
    title: "Best Plants for Betta Fish",
    blurb: "15 fin-safe plants ranked, with leaf hammocks and blackwater picks.",
    emoji: "🐠",
  },
  "aquarium-plants-without-substrate": {
    slug: "aquarium-plants-without-substrate",
    title: "Plants for Gravel, Sand or Bare-Bottom",
    blurb: "Which plants thrive without aquasoil — a 29-species compatibility table.",
    emoji: "🪨",
  },
  "aquarium-plants-melting": {
    slug: "aquarium-plants-melting",
    title: "Why Are My Plants Melting?",
    blurb: "5 types of melt diagnosed and a 6-step recovery protocol.",
    emoji: "🫠",
  },
  "aquarium-plants-turning-brown-yellow-black": {
    slug: "aquarium-plants-turning-brown-yellow-black",
    title: "Plants Turning Brown, Yellow or Black?",
    blurb: "24 causes diagnosed by color, pattern, and species — with fixes.",
    emoji: "🍂",
  },
  "best-aquarium-plants-for-beginners": {
    slug: "best-aquarium-plants-for-beginners",
    title: "15 Best Beginner Plants (No CO₂)",
    blurb: "Every plant scored across 5 dimensions with care data and scenario picks.",
    emoji: "🏆",
  },
  "best-plants-for-shrimp-tanks": {
    slug: "best-plants-for-shrimp-tanks",
    title: "Best Plants for Shrimp Tanks",
    blurb: "10 shrimp-safe plants plus the pesticide/copper safety protocol.",
    emoji: "🦐",
  },
  "mystery-snail-eggs": {
    slug: "mystery-snail-eggs",
    title: "Mystery Snail Eggs: Hatch or Remove",
    blurb: "Identify the pink egg clutch, hatch timeline, and removal steps.",
    emoji: "🐌",
  },
  "how-to-set-up-a-reef-tank": {
    slug: "how-to-set-up-a-reef-tank",
    title: "How to Set Up Your First Reef Tank",
    blurb: "Equipment tiers, cycling, parameters, and the livestock order that works.",
    emoji: "🪸",
  },
  // NOTE: "how-to-get-rid-of-aiptasia" is staged on its own branch; add it back
  // here (and to reef's RELATED list) once that blog is merged to production.
};

// Topically-relevant related guides per post (keeps freshwater ↔ freshwater,
// saltwater ↔ saltwater so internal links reinforce the right topic clusters).
const RELATED: Record<string, string[]> = {
  "best-plants-for-betta-fish": ["best-aquarium-plants-for-beginners", "aquarium-plants-melting", "aquarium-plants-without-substrate"],
  "aquarium-plants-without-substrate": ["best-aquarium-plants-for-beginners", "best-plants-for-betta-fish", "aquarium-plants-turning-brown-yellow-black"],
  "aquarium-plants-melting": ["aquarium-plants-turning-brown-yellow-black", "best-plants-for-betta-fish", "best-aquarium-plants-for-beginners"],
  "aquarium-plants-turning-brown-yellow-black": ["aquarium-plants-melting", "aquarium-plants-without-substrate", "best-aquarium-plants-for-beginners"],
  "best-aquarium-plants-for-beginners": ["best-plants-for-betta-fish", "aquarium-plants-without-substrate", "aquarium-plants-melting"],
  "best-plants-for-shrimp-tanks": ["best-aquarium-plants-for-beginners", "aquarium-plants-without-substrate", "best-plants-for-betta-fish"],
  "mystery-snail-eggs": ["best-aquarium-plants-for-beginners", "aquarium-plants-melting", "best-plants-for-shrimp-tanks"],
  "how-to-set-up-a-reef-tank": ["best-plants-for-shrimp-tanks", "best-aquarium-plants-for-beginners", "mystery-snail-eggs"],
};

export default function RelatedGuides({ current }: { current: string }) {
  const slugs = RELATED[current] ?? [];
  const guides = slugs.map((s) => GUIDES[s]).filter(Boolean);
  if (guides.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 border-t border-white/5">
      <h2 className="text-xl font-bold text-white mb-4">Keep Reading</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/blog/${g.slug}`}
            className="group flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 hover:bg-white/5 transition-all"
          >
            <span className="text-xl flex-shrink-0">{g.emoji}</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-aqua-300 transition-colors">{g.title}</p>
              <p className="text-xs text-slate-500 mt-1">{g.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
