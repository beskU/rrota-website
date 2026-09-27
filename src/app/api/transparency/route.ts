import { NextResponse } from "next/server";
import { getTransparencyData } from "../../lib/transparency-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getTransparencyData();

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=120, stale-while-revalidate=300",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
