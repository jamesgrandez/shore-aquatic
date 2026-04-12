"use client";

import Image from "next/image";

interface MarqueePhoto {
  name: string;
  url: string;
}

const row1Photos: MarqueePhoto[] = [
  { name: "Rotala Macrandra", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543343223453-TS8OLXHLFCRBWF1YJLMZ/Rotala+rmacrandra+tank+%281+of+1%29.jpg?format=400w" },
  { name: "Barclaya Longifolia", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522708871014-46MZ443FUF50NLIJNWIN/Barclaya_longifolia_red_form.jpg?format=400w" },
  { name: "Pogostemon Helferi", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1542663706721-HMJN27J5CUDUB2EYP3Z3/Pogostemon+helferi+tank+%281+of+1%29-3.jpg?format=400w" },
  { name: "Red Lotus", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1542305666937-6LNZUZ5ZGNXO0VD2IOMO/Nyphaea+lotus+%27Red%27+%281+of+1%29.jpg?format=400w" },
  { name: "Bucephalandra", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522870696527-1UP3FJ166VXGSQ24EJ8P/Bucephalandra+%27Green+Wavy%27+5+%281+of+1%29.jpg?format=400w" },
  { name: "Red Cabomba", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1523834252203-DB2PP17T1B5B5WMKLAFE/Red+Cabomba+%281+of+1%29-2.jpg?format=400w" },
  { name: "Myriophyllum Red", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1541609294399-PJQD1O1XW6NSCI8W5U9R/Myriophyllum+tuberculatum+%27Red%27+%281+of+1%29.jpg?format=400w" },
  { name: "Bolbitis", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522794171419-X7JKY14B4TY83O3IU8HD/Bolbitis+heudelotii+5+%281+of+1%29.jpg?format=400w" },
  { name: "Rotala Wallichii", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543347880851-WZ3OEVV2SYE1OIM7G50K/Rotala+wallichii.jpg?format=400w" },
];

const row2Photos: MarqueePhoto[] = [
  { name: "Staurogyne Repens", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1543596911254-OUCC5SFE3A9GG2Z5EK0U/Staurogyne+repens+2+%281+of+1%29.jpg?format=400w" },
  { name: "Alternanthera", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1520547118382-GSO2QKNCKZWDYWRJCBCQ/2007_10_28_Ottawa+Valley+AS_0010.jpg?format=400w" },
  { name: "Echinodorus Osiris", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1526592861682-91OAAHNCIFKSLZX09XOJ/Echinodorus_osiris.jpg?format=400w" },
  { name: "Blyxa Japonica", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1522775992027-CISHZ8H0DFQEZN51D3TG/Blyxa+Japonica+%281+of+1%29.jpg?format=400w" },
  { name: "Anubias Nana", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1521500135075-J0B3C33SVDY1W6L0RPR2/Anubias+barteri+%27nana%27+2+%281+of+1%29.jpg?format=400w" },
  { name: "Green Lotus", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1542306721369-PE4CACKTLVXZO46SOG7S/Nymphaea+%27green%27++%281+of+1%29.jpg?format=400w" },
  { name: "Ammannia", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1541618227031-UN9KOWG70H0QZ9TRIU7N/Nesaea+crassicaulis+%281+of+1%29.jpg?format=400w" },
  { name: "Limnophila", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1537212777050-WEIRBJMWMQLAO3AN1OCV/Limnophila_hippuroides_%21.jpg?format=400w" },
  { name: "Glossostigma", url: "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1534094511978-KHRH9OVFVFUCWBJEAOAY/Glossostigma_elatinoides.jpg?format=400w" },
];

function MarqueeCard({ photo }: { photo: MarqueePhoto }) {
  return (
    <div className="relative w-48 h-36 rounded-xl overflow-hidden border border-white/10 shrink-0 mx-2 group">
      <Image
        src={photo.url}
        alt={photo.name}
        width={400}
        height={300}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      {/* Hover name overlay */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end px-3 pb-2">
        <span className="text-white text-xs font-medium truncate">{photo.name}</span>
      </div>
    </div>
  );
}

function MarqueeRow({ photos, direction }: { photos: MarqueePhoto[]; direction: "left" | "right" }) {
  // Duplicate for seamless loop
  const doubled = [...photos, ...photos];
  const animStyle = direction === "left"
    ? { animation: "marquee-left 40s linear infinite" }
    : { animation: "marquee-right 40s linear infinite" };

  return (
    <div className="flex overflow-hidden">
      <div className="flex" style={animStyle}>
        {doubled.map((photo, i) => (
          <MarqueeCard key={`${photo.name}-${i}`} photo={photo} />
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
        <MarqueeRow photos={row1Photos} direction="left" />
        <MarqueeRow photos={row2Photos} direction="right" />
      </div>
    </section>
  );
}
