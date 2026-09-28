import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 60;

const RROTA_MINT = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const RROTA_POOL = "8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";
const GECKO_POOL_ENDPOINT =
  `https://api.geckoterminal.com/api/v2/networks/solana/pools/${RROTA_POOL}`;
const GECKO_CHART = `https://www.geckoterminal.com/solana/pools/${RROTA_POOL}`;

function safeNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

type GeckoPoolPayload = {
  data?: {
    attributes?: {
      address?: string;
      base_token_price_usd?: string | number | null;
      fdv_usd?: string | number | null;
      market_cap_usd?: string | number | null;
      reserve_in_usd?: string | number | null;
      price_change_percentage?: {
        h24?: string | number | null;
      };
      volume_usd?: {
        h24?: string | number | null;
      };
      transactions?: {
        h24?: {
          buys?: number | string | null;
          sells?: number | string | null;
        };
      };
    };
  };
};

export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6500);

  try {
    const response = await fetch(GECKO_POOL_ENDPOINT, {
      headers: {
        Accept: "application/json;version=20230203",
        "User-Agent": "RROTA/1.0 (+https://rrota.xyz)",
      },
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`GeckoTerminal responded with ${response.status}`);
    }

    const payload = (await response.json()) as GeckoPoolPayload;
    const attributes = payload.data?.attributes;

    if (!attributes) {
      throw new Error("GeckoTerminal returned no pool data");
    }

    const buys24h = safeNumber(attributes.transactions?.h24?.buys);
    const sells24h = safeNumber(attributes.transactions?.h24?.sells);

    return NextResponse.json(
      {
        ok: true,
        source: "geckoterminal",
        mint: RROTA_MINT,
        pairAddress: attributes.address ?? RROTA_POOL,
        chartUrl: GECKO_CHART,
        priceUsd: safeNumber(attributes.base_token_price_usd),
        marketCap:
          safeNumber(attributes.market_cap_usd) ?? safeNumber(attributes.fdv_usd),
        liquidityUsd: safeNumber(attributes.reserve_in_usd),
        volume24h: safeNumber(attributes.volume_usd?.h24),
        priceChange24h: safeNumber(attributes.price_change_percentage?.h24),
        buys24h,
        sells24h,
        transactions24h:
          buys24h !== null && sells24h !== null ? buys24h + sells24h : null,
        updatedAt: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
        },
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        source: "geckoterminal",
        message:
          error instanceof Error
            ? error.message
            : "Market data temporarily unavailable.",
        chartUrl: GECKO_CHART,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=30, stale-while-revalidate=120",
        },
      },
    );
  } finally {
    clearTimeout(timeout);
  }
}
