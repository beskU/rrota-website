import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background: "linear-gradient(135deg, #0B1220 0%, #111827 55%, #0B1220 100%)",
          color: "white",
          fontSize: 52,
          fontWeight: 800,
        }}
      >
        <div style={{ color: "#7dd9ff", fontSize: 20, fontWeight: 700 }}>
          rrota.xyz • Official Verification
        </div>
        <div style={{ marginTop: 18 }}>Verify RROTA Coin (RTA)</div>
        <div style={{ marginTop: 18, fontSize: 28, fontWeight: 600, opacity: 0.85 }}>
          Avoid rr0ta.xyz and fake “claim/airdrop” pages
        </div>
        <div style={{ marginTop: 28, fontSize: 20, opacity: 0.75 }}>
          Official contract: 3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a
        </div>
      </div>
    ),
    size
  );
}
