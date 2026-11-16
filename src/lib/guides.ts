/**
 * guides.ts — loads /guides content from src/content/guides/<slug>.md.
 *
 * Each file = YAML-ish frontmatter + Markdown body. At build time the body is:
 *  - cut at "## Image sources" / "## Sources used for facts" (never rendered)
 *  - stripped of "SHORE PHOTO NEEDED" placeholder images (slots stay in the .md)
 *  - split at <!-- COMPONENT: X --> markers into html / component segments
 *  - FAQ ("## FAQ" + **Question** / answer pairs) pulled out for an accordion
 *    and FAQPage JSON-LD
 * Wikimedia images are mapped to our local copies (public/guides/<slug>/).
 */
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { findProduct } from "./catalog";
import { guideImageCredits } from "./guideImageCredits";

const DIR = path.join(process.cwd(), "src", "content", "guides");
const SITE = "https://shoreaquatic.com";

/** Hero/OG fallback when a guide's image is still a "SHORE PHOTO NEEDED" placeholder. */
export const GUIDE_FALLBACK_IMAGE =
  "https://cdn.shopify.com/s/files/1/0266/9799/0330/files/71S6OBAZ85L._AC_SL1400.jpg?v=1794501622";

/** Tank-size bundle: published product to link to, or null while it is hidden. */
export const TANK_BUNDLE_PLACEHOLDER = "planted-tank-bundle-by-tank-size";
export function tankBundleProductId(): string | null {
  return findProduct("plant-tank-bundle-20gal") ? "plant-tank-bundle-20gal" : null;
}

export interface GuideMeta {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  author: string;
  authorRole: string;
  published: string;
  updated: string;
  ogImage: string;
  heroImage: string;
  heroAlt: string;
  products: string[];
  related: string[];
}

export type GuideSegment =
  | { type: "html"; html: string }
  | { type: "component"; name: string }
  | { type: "image"; src: string; alt: string; caption: string; width: number; height: number };

export interface Guide extends GuideMeta {
  h1: string;
  segments: GuideSegment[];
  faq: { q: string; a: string; aHtml: string }[];
}

// ── frontmatter (the subset these files use) ────────────────────────────────
function parseFrontmatter(src: string): { data: Record<string, string | string[]>; body: string } {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(src);
  if (!m) return { data: {}, body: src };
  const data: Record<string, string | string[]> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z0-9_]+):\s*(.*)$/.exec(line);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith("[") && v.endsWith("]")) {
      data[kv[1]] = v.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
      continue;
    }
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    data[kv[1]] = v;
  }
  return { data, body: src.slice(m[0].length) };
}

// ── images ──────────────────────────────────────────────────────────────────
const isPlaceholder = (s: string) => !s || s === "#" || /SHORE PHOTO NEEDED/i.test(s);

/** Commons Special:FilePath URL → our local copy (by file name). */
function localImage(src: string): string {
  const m = /Special:FilePath\/([^?]+)/.exec(src);
  if (!m) return src;
  const file = decodeURIComponent(m[1]).toLowerCase().replace(/_/g, "-");
  const hit = guideImageCredits.find((c) => c.image.endsWith(`/${file}`));
  return hit ? hit.image : ""; // unknown/unlicensed Commons file → dropped, never hotlinked
}

/** Width/height for layout reservation (local JPEG header, or known CDN sizes). */
const KNOWN_SIZES: Record<string, [number, number]> = {
  "71pIq7DDDwL._AC_SL1080.jpg": [1064, 1064],
  "71JhtzO1-zL._AC_SL1400.jpg": [1400, 1400],
  "71S6OBAZ85L._AC_SL1400.jpg": [1400, 1400],
};
function jpegSize(file: string): [number, number] | null {
  try {
    const b = readFileSync(file);
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xff) return null;
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      }
      i += 2 + len;
    }
  } catch {}
  return null;
}
export function imageSize(src: string): [number, number] {
  if (src.startsWith("/")) return jpegSize(path.join(process.cwd(), "public", src)) ?? [1200, 800];
  const name = src.split("/").pop()!.split("?")[0];
  return KNOWN_SIZES[name] ?? [1200, 1200];
}

/** Resolved hero/OG image (local, Shopify CDN, or the fallback for placeholders). */
export function resolveImage(src: string): string {
  if (isPlaceholder(src)) return GUIDE_FALLBACK_IMAGE;
  return localImage(src) || GUIDE_FALLBACK_IMAGE;
}
export const absolute = (src: string) => (src.startsWith("/") ? `${SITE}${src}` : src);

// ── markdown → html (subset: headings, paragraphs, lists, checklists, tables, hr) ──
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function fixHref(href: string): string {
  if (href === `/shop/${TANK_BUNDLE_PLACEHOLDER}`) {
    const id = tankBundleProductId();
    return id ? `/shop/${id}` : "/shop/bundles";
  }
  return /^(\/|https?:\/\/|mailto:|tel:|#)/.test(href) ? href : "#";
}

export function inlineMd(s: string): string {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*\w])\*(?!\s)([^*]+?)\*(?!\w)/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, text: string, href: string) => {
      const h = fixHref(href.replace(/&amp;/g, "&"));
      const ext = /^https?:\/\//.test(h);
      return `<a href="${esc(h)}"${ext ? ' rel="noopener noreferrer" target="_blank"' : ""}>${text}</a>`;
    });
}

function renderBlocks(lines: string[]): string {
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (/^-{3,}$/.test(line)) { out.push("<hr>"); i++; continue; }
    const h = /^(#{2,4})\s+(.*)$/.exec(line);
    if (h) {
      const level = h[1].length;
      const id = h[2].toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      out.push(`<h${level} id="${id}">${inlineMd(h[2])}</h${level}>`);
      i++;
      continue;
    }
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = lines[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
        if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells);
        i++;
      }
      const [head, ...body] = rows;
      out.push(
        `<div class="guide-table"><table><thead><tr>${head.map((c) => `<th>${inlineMd(c)}</th>`).join("")}</tr></thead><tbody>` +
          body.map((r) => `<tr>${r.map((c) => `<td>${inlineMd(c)}</td>`).join("")}</tr>`).join("") +
          "</tbody></table></div>"
      );
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      let checklist = false;
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        let t = lines[i].trim().replace(/^[-*]\s+/, "");
        const cb = /^\[( |x)\]\s+(.*)$/i.exec(t);
        if (cb) {
          checklist = true;
          t = cb[2];
          items.push(`<li><span class="guide-check" aria-hidden="true"></span>${inlineMd(t)}</li>`);
        } else items.push(`<li>${inlineMd(t)}</li>`);
        i++;
      }
      out.push(`<ul${checklist ? ' class="guide-checklist"' : ""}>${items.join("")}</ul>`);
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(`<li>${inlineMd(lines[i].trim().replace(/^\d+\.\s+/, ""))}</li>`);
        i++;
      }
      out.push(`<ol>${items.join("")}</ol>`);
      continue;
    }
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{2,4}\s|\||[-*]\s|\d+\.\s|-{3,}$)/.test(lines[i].trim())
    ) {
      para.push(lines[i].trim());
      i++;
    }
    out.push(`<p>${para.map(inlineMd).join("<br>")}</p>`);
  }
  return out.join("\n");
}

// ── body → segments ─────────────────────────────────────────────────────────
function toSegments(body: string): GuideSegment[] {
  const segments: GuideSegment[] = [];
  let buf: string[] = [];
  const flush = () => {
    const html = renderBlocks(buf);
    if (html.trim()) segments.push({ type: "html", html });
    buf = [];
  };
  const lines = body.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    const comp = /^<!--\s*COMPONENT:\s*([A-Za-z]+)\s*-->$/.exec(t);
    if (comp) { flush(); segments.push({ type: "component", name: comp[1] }); continue; }
    const img = /^!\[([^\]]*)\]\(([^)\s]+)\)$/.exec(t);
    if (img) {
      // optional caption on the next line: *text*
      const next = (lines[i + 1] ?? "").trim();
      const cap = /^\*(.+)\*$/.exec(next);
      if (cap) i++;
      if (isPlaceholder(img[2]) || isPlaceholder(img[1])) continue; // slot kept in the .md, nothing rendered
      const src = localImage(img[2]);
      if (!src) continue;
      flush();
      const [width, height] = imageSize(src);
      segments.push({ type: "image", src, alt: img[1], caption: cap ? cap[1] : "", width, height });
      continue;
    }
    buf.push(lines[i]);
  }
  flush();
  return segments;
}

function extractFaq(body: string): { body: string; faq: Guide["faq"] } {
  const m = /^## FAQ\s*$([\s\S]*?)(?=^---\s*$|^## |(?![\s\S]))/m.exec(body);
  if (!m) return { body, faq: [] };
  const faq: Guide["faq"] = [];
  const blocks = m[1].split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  for (const b of blocks) {
    const qa = /^\*\*(.+?)\*\*\s*\n([\s\S]+)$/.exec(b);
    if (!qa) continue;
    const a = qa[2].replace(/\s*\n\s*/g, " ").trim();
    faq.push({
      q: qa[1].trim(),
      a: a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*?([^*]+)\*\*?/g, "$1"),
      aHtml: inlineMd(a),
    });
  }
  return { body: body.replace(m[0], "<!-- COMPONENT: FAQ -->\n\n"), faq };
}

// ── public API ──────────────────────────────────────────────────────────────
export function getGuideSlugs(): string[] {
  return readdirSync(DIR).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

export function getGuide(slug: string): Guide | null {
  if (!getGuideSlugs().includes(slug)) return null;
  const { data, body: raw } = parseFrontmatter(readFileSync(path.join(DIR, `${slug}.md`), "utf-8"));
  const str = (k: string) => (typeof data[k] === "string" ? (data[k] as string) : "");
  const arr = (k: string) => (Array.isArray(data[k]) ? (data[k] as string[]) : []);

  // never render the sources sections
  let body = raw.split(/^## (?:Image sources|Sources used for facts)\b/m)[0];
  const h1m = /^#\s+(.+)$/m.exec(body);
  const h1 = h1m ? h1m[1].trim() : str("title");
  if (h1m) body = body.replace(h1m[0], "");
  const { body: withoutFaq, faq } = extractFaq(body);

  return {
    slug,
    title: str("title"),
    seoTitle: str("seo_title") || str("title"),
    metaDescription: str("meta_description"),
    author: str("author"),
    authorRole: str("author_role"),
    published: str("published"),
    updated: str("updated") || str("published"),
    ogImage: resolveImage(str("og_image")),
    heroImage: resolveImage(str("hero_image")),
    heroAlt: str("hero_alt"),
    products: arr("products"),
    related: arr("related"),
    h1,
    segments: toSegments(withoutFaq),
    faq,
  };
}

export function getAllGuides(): Guide[] {
  return getGuideSlugs()
    .map((s) => getGuide(s)!)
    .sort((a, b) => b.published.localeCompare(a.published) || a.title.localeCompare(b.title));
}
