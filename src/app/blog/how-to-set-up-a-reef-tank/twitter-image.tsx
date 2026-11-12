import { blogOgImage, ogSize, BLOG_OG_TITLES } from "@/lib/blogOgImage";

export const alt = BLOG_OG_TITLES["how-to-set-up-a-reef-tank"]?.title ?? "Shore Aquatic Blog";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return blogOgImage("how-to-set-up-a-reef-tank");
}
