import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getCurrentSession } from "@/lib/wholesale-session";

// Force Node runtime — file system access is not available in Edge runtime
export const runtime = "nodejs";

export async function GET() {
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const filePath = join(process.cwd(), "private", "downloads", "wholesale-price-list.xlsx");
    const buffer = await readFile(filePath);

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition":
          'attachment; filename="shore-aquatic-wholesale-price-list.xlsx"',
        "Content-Length": String(buffer.length),
        "Cache-Control": "private, no-store",
      },
    });
  } catch (err) {
    console.error("Wholesale download failed:", err);
    return NextResponse.json({ error: "Download unavailable" }, { status: 500 });
  }
}
