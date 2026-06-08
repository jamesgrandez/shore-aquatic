import { MetadataRoute } from "next";
import { products } from "@/lib/mockData";
import { waterGardenProducts } from "@/lib/waterGardenData";
import { saltwaterProducts } from "@/lib/saltwaterData";
import { livestockProducts } from "@/lib/livestockData";
import { plantDetails } from "@/lib/plantDetails";

const BASE = "https://shoreaquatic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const allProducts = [...products, ...waterGardenProducts, ...saltwaterProducts, ...livestockProducts];

  const productUrls = allProducts
    .filter((p) => p.availability !== "OUT OF SEASON")
    .map((p) => ({
      url: `${BASE}/shop/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  const careGuideUrls = Object.keys(plantDetails).map((slug) => ({
    url: `${BASE}/care-guides/${slug}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE,                      lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/shop`,            lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/shop/live-marine-rotifers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/care-guides`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`,            lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/blog/how-to-set-up-a-reef-tank`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog/mystery-snail-eggs`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog/best-plants-for-betta-fish`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog/best-aquarium-plants-for-beginners`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog/aquarium-plants-without-substrate`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/aquarium-plants-melting`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/aquarium-plants-turning-brown-yellow-black`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...productUrls,
    ...careGuideUrls,
  ];
}
