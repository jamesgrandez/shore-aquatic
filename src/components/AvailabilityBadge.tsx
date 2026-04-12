"use client";

type Status = "AVAILABLE" | "BACKORDER" | "OUT OF SEASON";

const badgeConfig: Record<
  Status,
  { icon: string; label: string; classes: string }
> = {
  AVAILABLE: {
    icon: "\u25CF",
    label: "AVAILABLE",
    classes:
      "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  BACKORDER: {
    icon: "\u25D0",
    label: "BACKORDER",
    classes:
      "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
  "OUT OF SEASON": {
    icon: "\u25CB",
    label: "OUT OF SEASON",
    classes:
      "bg-slate-500/20 text-slate-400 border-slate-500/30",
  },
};

export default function AvailabilityBadge({ status }: { status: Status }) {
  const config = badgeConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${config.classes}`}
    >
      <span className="text-[8px]">{config.icon}</span>
      {config.label}
    </span>
  );
}
