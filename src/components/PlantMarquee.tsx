"use client";

import Image from "next/image";
import Link from "next/link";

interface MarqueeItem {
  id: string;
  name: string;
  price: number;
  url: string;
}

const row1Items: MarqueeItem[] = [
  { id: "plant-bromacnl", name: "Rotala Macrandra", price: 19.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543343223453-TS8OLXHLFCRBWF1YJLMZ/Rotala+rmacrandra+tank+%281+of+1%29.jpg?format=400w" },
  { id: "plant-browanl", name: "Rotala Wallichii", price: 19.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543347880851-WZ3OEVV2SYE1OIM7G50K/Rotala+wallichii.jpg?format=400w" },
  { id: "plant-mbuar", name: "Bucephalandra", price: 23.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522870696527-1UP3FJ166VXGSQ24EJ8P/Bucephalandra+%27Green+Wavy%27+5+%281+of+1%29.jpg?format=400w" },
  { id: "plant-mtilor", name: "Red Tiger Lotus", price: 20.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1542305666937-6LNZUZ5ZGNXO0VD2IOMO/Nyphaea+lotus+%27Red%27+%281+of+1%29.jpg?format=400w" },
  { id: "plant-tcstrec", name: "Staurogyne Repens", price: 23.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543596911254-OUCC5SFE3A9GG2Z5EK0U/Staurogyne+repens+2+%281+of+1%29.jpg?format=400w" },
  { id: "plant-mblja", name: "Blyxa Japonica", price: 19.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522775992027-CISHZ8H0DFQEZN51D3TG/Blyxa+Japonica+%281+of+1%29.jpg?format=400w" },
  { id: "plant-annanm", name: "Anubias Nana", price: 21.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1521500135075-J0B3C33SVDY1W6L0RPR2/Anubias+barteri+%27nana%27+2+%281+of+1%29.jpg?format=400w" },
  { id: "plant-bammnl", name: "Ammannia", price: 19.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1541618227031-UN9KOWG70H0QZ9TRIU7N/Nesaea+crassicaulis+%281+of+1%29.jpg?format=400w" },
];

const row2Items: MarqueeItem[] = [
  { id: "plant-mglom", name: "Glossostigma", price: 22.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1534094511978-KHRH9OVFVFUCWBJEAOAY/Glossostigma_elatinoides.jpg?format=400w" },
  { id: "plant-btelnl", name: "Telanthera", price: 19.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1520547118382-GSO2QKNCKZWDYWRJCBCQ/2007_10_28_Ottawa+Valley+AS_0010.jpg?format=400w" },
  { id: "plant-bcapunl", name: "Purple Cabomba", price: 19.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1523054944318-6N4RGJKZW2XD53MAZ538/Purple+cabomba+bunch.jpg?format=400w" },
  { id: "plant-mpohep", name: "Pogostemon Helferi", price: 20.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1542663706721-HMJN27J5CUDUB2EYP3Z3/Pogostemon+helferi+tank+%281+of+1%29-3.jpg?format=400w" },
  { id: "plant-mjafe", name: "Java Fern", price: 19.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1541100144465-X6ATNHL043IO7NODSD4O/Microsorum_pteropus.jpg?format=400w" },
  { id: "plant-mchmom", name: "Christmas Moss Mat", price: 23.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1541539523843-HW3JC14LIGCYH7W5F8SJ/Monosolenium+tenerum+%281+of+1%29.jpg?format=400w" },
  { id: "plant-bluatnl", name: "Ludwigia Atlantis", price: 19.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1537814827749-6HLSH4CICX8630333CFO/Ludwigia_repens.jpg?format=400w" },
  { id: "plant-bromacnl", name: "Rotala Macrandra", price: 19.99, url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543343223453-TS8OLXHLFCRBWF1YJLMZ/Rotala+rmacrandra+tank+%281+of+1%29.jpg?format=400w" },
];

function MarqueeCard({ item }: { item: MarqueeItem }) {
  return (
    <Link
      href={`/shop/${item.id}`}
      className="group relative w-48 h-36 rounded-xl overflow-hidden border border-white/10 shrink-0 mx-2 block"
    >
      <Image
        src={item.url}
        alt={item.name}
        width={400}
        height={300}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      {/* Always-visible name + price */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-7 pb-2.5 px-3">
        <p className="text-white text-[13px] font-semibold leading-tight truncate">{item.name}</p>
        <div className="mt-0.5 flex items-center justify-between">
          <span className="text-aqua-400 text-[13px] font-bold">${item.price.toFixed(2)}</span>
          <span className="text-[10px] text-coral font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}

function MarqueeRow({ items, direction }: { items: MarqueeItem[]; direction: "left" | "right" }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  const animStyle =
    direction === "left"
      ? { animation: "marquee-left 40s linear infinite" }
      : { animation: "marquee-right 40s linear infinite" };

  return (
    <div className="flex overflow-hidden">
      <div className="flex hover:[animation-play-state:paused]" style={animStyle}>
        {doubled.map((item, i) => (
          <MarqueeCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function PlantMarquee() {
  return (
    <section
      className="py-8 overflow-hidden bg-ocean-950"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1Items} direction="left" />
        <MarqueeRow items={row2Items} direction="right" />
      </div>
    </section>
  );
}
