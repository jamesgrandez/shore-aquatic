import { readFileSync } from "node:fs";
import path from "node:path";
import Footer from "@/components/Footer";
import { markdownToHtml } from "@/lib/simpleMarkdown";

/** Reads src/content/legal/<file>.md at build time. */
export function loadLegal(file: string) {
  const md = readFileSync(path.join(process.cwd(), "src", "content", "legal", `${file}.md`), "utf-8");
  return markdownToHtml(md);
}

export default function LegalPage({ file }: { file: string }) {
  const { title, html } = loadLegal(file);
  return (
    <main className="pt-16">
      <section className="py-16 sm:py-24">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{title}</h1>
          <div className="legal-copy mt-8" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </section>
      <Footer />
    </main>
  );
}
