import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/cart", "/checkout", "/order-confirmation"] },
    sitemap: "https://shoreaquatic.com/sitemap.xml",
  };
}
