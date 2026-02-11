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

  try {
    const res = await fetch(
      `https://data.solanatracker.io/tokens/${token}`,
      {
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Upstream API failed" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error fetching token data" },
      { status: 500 }
    );
  }
}
