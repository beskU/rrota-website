import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ErrorWithMessage = { message?: string };

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 400 });
    }

    const apiKey = process.env.SOLANATRACKER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing SOLANATRACKER_API_KEY env var" },
        { status: 500 }
      );
    }

    const upstream = await fetch(
      `https://data.solanatracker.io/tokens/${encodeURIComponent(token)}`,
      {
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      return NextResponse.json(
        {
          error: "Upstream API failed",
          status: upstream.status,
          details: text.slice(0, 200),
        },
        { status: 500 }
      );
    }

    const data: unknown = await upstream.json();
    return NextResponse.json(data);
  } catch (err: unknown) {
    const message =
      typeof err === "object" && err !== null
        ? (err as ErrorWithMessage).message
        : undefined;

    return NextResponse.json(
      { error: "Server error", message: message ?? "unknown" },
      { status: 500 }
    );
  }
}
