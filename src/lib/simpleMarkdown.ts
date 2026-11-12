/**
 * Minimal Markdown → HTML for the legal pages (src/content/legal/*.md).
 * Supports exactly what those files use: # / ## / ### headings, paragraphs,
 * "- " and "1. " lists, **bold**, *italic* and [text](url) links. Line breaks
 * inside a paragraph are kept.
 * Text is HTML-escaped first, so the output is safe to inject.
 */
const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function inline(s: string): string {
  return escape(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, text: string, href: string) => {
      const safe = /^(\/|https?:\/\/|mailto:|tel:)/.test(href) ? href : "#";
      return `<a href="${safe}">${text}</a>`;
    });
}

export function markdownToHtml(md: string): { title: string; html: string } {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let title = "";
  let para: string[] = [];
  let list: { tag: "ul" | "ol"; items: string[] } | null = null;

  const flushPara = () => {
    // keep authored line breaks (e.g. the contact address block)
    if (para.length) out.push(`<p>${para.map(inline).join("<br>")}</p>`);
    para = [];
  };
  const flushList = () => {
    if (list) out.push(`<${list.tag}>${list.items.map((i) => `<li>${inline(i)}</li>`).join("")}</${list.tag}>`);
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    const h = /^(#{1,3})\s+(.*)$/.exec(line);
    const ul = /^[-*]\s+(.*)$/.exec(line);
    const ol = /^\d+\.\s+(.*)$/.exec(line);
    if (!line) {
      flushPara();
      flushList();
    } else if (h) {
      flushPara();
      flushList();
      if (h[1].length === 1 && !title) title = h[2];
      else out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`);
    } else if (ul || ol) {
      flushPara();
      const tag = ul ? "ul" : "ol";
      if (list && list.tag !== tag) flushList();
      if (!list) list = { tag, items: [] };
      list.items.push((ul ?? ol)![1]);
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return { title, html: out.join("\n") };
}
