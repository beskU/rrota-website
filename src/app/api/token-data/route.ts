import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  const apiKey = process.env.SOLANATRACKER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing SOLANATRACKER_API_KEY" },
      { status: 500 }
    );
  }

  const apiUrl = `https://data.solanatracker.io/tokens/${token}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Upstream failed: ${response.status}` },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch token data" },
      { status: 500 }
    );
  }
}

