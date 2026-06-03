import type { Metadata } from "next";
import { products } from "@/lib/mockData";
import CatalogTable, { type CatalogRow } from "./CatalogTable";

export const metadata: Metadata = {
  title: "Wholesale Catalog | Shore Aquatic",
  description: "Interactive wholesale catalog with filterable plant inventory and net pricing.",
  robots: { index: false, follow: false },
};

// ─── Same pricing formula as the Excel build ───────────────────────────
const TRAY_OVERHEAD = 36.0;
const TRAY_SIZE = 15;
const PER_UNIT_OH = TRAY_OVERHEAD / TRAY_SIZE;          // $2.40
const FAIRE_RATE = 0.18;
const LOSS_RATE = 0.05;
const TARGET_MARGIN = 0.20;
const FLOOR = 5.0;
const MULT = 1.0 / (1 - FAIRE_RATE - LOSS_RATE - TARGET_MARGIN);

function ceilQuarter(x: number) { return Math.ceil(x * 4) / 4; }
function wholesale(cost: number) { return Math.max(FLOOR, ceilQuarter((cost + PER_UNIT_OH) * MULT)); }

const NON_PLANT_KEYWORDS = [
  "aquascaping", "tool", "scissors", "tweezers", "spatula",
  "book", "poster", "kasselmann", "driftwood", "spider wood",
  "malasian", "lucky bamboo", "assorted",
];

function isRealPlant(name: string) {
  const n = name.toLowerCase();
  return !NON_PLANT_KEYWORDS.some((k) => n.includes(k));
}

function detectFormat(id: string, size: string | undefined): CatalogRow["format"] {
  const suffix = id.replace(/^plant-/, "");
  const sizeLc = (size || "").toLowerCase();
  if (suffix.startsWith("port")) return "Portion";
  if (suffix.startsWith("tc")) return "Tissue Culture Cup";
  if (suffix.startsWith("b")) return "Leaded Bunch";
  if (sizeLc.includes("mat")) return "Mat";
  if (suffix.startsWith("p")) {
    if (sizeLc.includes("large") || sizeLc.includes("xl")) return "Large Potted";
    return "2-inch Potted";
  }
  if (/^[ecvsa]/.test(suffix)) return "Bare Root";
  return "Specimen";
}

function genusOf(sci: string | undefined, name: string) {
  if (!sci) return name.split(",")[0].split(" ")[0];
  const first = sci.split(" ")[0].replace(".", "");
  const aliases: Record<string, string> = { E: "Echinodorus", C: "Cryptocoryne" };
  return aliases[first] ?? first;
}

export default function WholesaleCatalogPage() {
  const realPlants = products.filter(
    (p) =>
      p.category === "Plants" &&
      p.availability === "AVAILABLE" &&
      isRealPlant(p.name)
  );

  const rows: CatalogRow[] = realPlants.map((p) => {
    const w = wholesale(p.wholesalePrice);
    return {
      sku: p.id.toUpperCase().replace(/^PLANT-/, "SA-"),
      name: p.name,
      sci: p.scientificName || "",
      genus: genusOf(p.scientificName, p.name),
      format: detectFormat(p.id, p.size),
      size: p.size || "—",
      wholesale: w,
      msrp: Math.round(w * 2 * 100) / 100,
      moq: 6,
    };
  });

  // Group + sort: format first, then genus, then name
  const formatOrder: Record<CatalogRow["format"], number> = {
    "Leaded Bunch": 1,
    "2-inch Potted": 2,
    "Large Potted": 3,
    "Bare Root": 4,
    "Tissue Culture Cup": 5,
    "Mat": 6,
    "Specimen": 7,
    "Portion": 8,
  };
  rows.sort((a, b) => {
    const f = formatOrder[a.format] - formatOrder[b.format];
    if (f !== 0) return f;
    const g = a.genus.localeCompare(b.genus);
    if (g !== 0) return g;
    return a.name.localeCompare(b.name);
  });

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-white">Wholesale Catalog</h1>
          <p className="mt-2 text-sm text-slate-400">
            {rows.length} SKUs in stock. Filter by format, genus, or search by name. Pricing shown
            is net wholesale per unit. Minimum order quantity is 6 units per SKU.
          </p>
        </header>

        <CatalogTable rows={rows} />
      </div>
    </section>
  );
}
