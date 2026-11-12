import { ImageResponse } from "next/og";

/** Share-card headline per blog post (kept short so it fits two lines). */
export const BLOG_OG_TITLES: Record<string, { title: string; kicker: string }> = {
  "aquarium-plants-melting": { title: "Aquarium Plants Melting? 5 Types Diagnosed + the Fix", kicker: "Plant care" },
  "aquarium-plants-turning-brown-yellow-black": { title: "Plants Turning Brown, Yellow or Black? 24 Causes", kicker: "Plant care" },
  "aquarium-plants-without-substrate": { title: "Aquarium Plants Without Substrate: 29 Species Ranked", kicker: "Plant guide" },
  "best-aquarium-plants-for-beginners": { title: "The Best Aquarium Plants for Beginners", kicker: "Beginner guide" },
  "best-plants-for-betta-fish": { title: "15 Best Plants for Betta Fish, Fin-Safe Ranked", kicker: "Betta tanks" },
  "best-plants-for-shrimp-tanks": { title: "Best Plants for Shrimp Tanks: 10 Species Ranked", kicker: "Shrimp tanks" },
  "how-to-set-up-a-reef-tank": { title: "How to Set Up Your First Reef Tank", kicker: "Reef guide" },
  "mystery-snail-eggs": { title: "Mystery Snail Eggs: Identify, Hatch or Remove", kicker: "Snail care" },
};

export const ogSize = { width: 1200, height: 630 };

/** Branded 1200×630 share image in the site's navy / teal / orange palette. */
export function blogOgImage(slug: string): ImageResponse {
  const { title, kicker } = BLOG_OG_TITLES[slug] ?? { title: "Shore Aquatic Blog", kicker: "Aquarium guides" };
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #010A14 0%, #062a3a 55%, #0b3d2e 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#22D3EE" }} />
          <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#67E8F9" }}>
            {kicker}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.12, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 34, fontWeight: 700 }}>Shore Aquatic</div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              padding: "12px 28px",
              borderRadius: 999,
              background: "#F97316",
              fontWeight: 700,
            }}
          >
            shoreaquatic.com
          </div>
        </div>
      </div>
    ),
    ogSize
  );
}
