import { blogOgImage, ogSize, BLOG_OG_TITLES } from "@/lib/blogOgImage";

export const alt = BLOG_OG_TITLES["aquarium-plants-turning-brown-yellow-black"]?.title ?? "Shore Aquatic Blog";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return blogOgImage("aquarium-plants-turning-brown-yellow-black");
}
