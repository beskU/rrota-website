import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

function ShieldIcon() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#A5F3FC"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        width: "100%",
        padding: "16px 18px",
        borderRadius: 18,
        border: "1px solid rgba(103, 232, 249, 0.18)",
        background: "rgba(8, 15, 28, 0.62)",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(165, 243, 252, 0.66)",
        }}
      >
        {label}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 22,
          fontWeight: 800,
          color: "#F8FAFC",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #050711 0%, #071321 48%, #090713 100%)",
          color: "#FFFFFF",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -110,
            width: 500,
            height: 500,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.28) 0%, rgba(34,211,238,0) 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -130,
            top: -160,
            width: 500,
            height: 500,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(217,70,239,0.20) 0%, rgba(217,70,239,0) 72%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "54px 58px",
            gap: 44,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 690,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                alignSelf: "flex-start",
                padding: "10px 16px",
                borderRadius: 999,
                border: "1px solid rgba(103,232,249,0.24)",
                background: "rgba(34,211,238,0.09)",
                color: "#A5F3FC",
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 9,
                  height: 9,
                  borderRadius: 999,
                  background: "#67E8F9",
                  boxShadow: "0 0 20px rgba(103,232,249,0.9)",
                }}
              />
              Official RROTA verification
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 28,
                fontSize: 70,
                fontWeight: 900,
                lineHeight: 0.98,
                letterSpacing: "-0.055em",
              }}
            >
              <div style={{ display: "flex" }}>Verify RROTA</div>

              <div
                style={{
                  display: "flex",
                  marginTop: 8,
                  color: "#A5F3FC",
                }}
              >
                before connecting.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 24,
                maxWidth: 650,
                fontSize: 23,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.68)",
              }}
            >
              Confirm the exact domain, full $RTA mint, official game,
              Telegram bot, and wallet request.
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "auto",
                gap: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 13,
                  fontWeight: 900,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.42)",
                }}
              >
                Official $RTA mint
              </div>

              <div
                style={{
                  display: "flex",
                  maxWidth: 660,
                  padding: "14px 16px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(0,0,0,0.24)",
                  fontSize: 17,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  color: "rgba(255,255,255,0.82)",
                  wordBreak: "break-all",
                }}
              >
                {TOKEN_ADDRESS}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 350,
              padding: 28,
              borderRadius: 32,
              border: "1px solid rgba(103,232,249,0.18)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025))",
              boxShadow: "0 0 70px rgba(34,211,238,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 68,
                  height: 68,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  border: "1px solid rgba(103,232,249,0.20)",
                  background: "rgba(34,211,238,0.08)",
                }}
              >
                <ShieldIcon />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 13,
                    fontWeight: 900,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "rgba(165,243,252,0.62)",
                  }}
                >
                  Verify identity
                </div>

                <div
                  style={{
                    display: "flex",
                    marginTop: 4,
                    fontSize: 25,
                    fontWeight: 900,
                  }}
                >
                  Match every detail
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginTop: 24,
              }}
            >
              <CheckItem
                label="Primary domain"
                value="rrota.xyz"
              />

              <CheckItem
                label="Live game"
                value="spin.rrota.xyz"
              />

              <CheckItem
                label="Telegram bot"
                value="@RROTASpin_Bot"
              />
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "auto",
                padding: "16px 18px",
                borderRadius: 18,
                border: "1px solid rgba(251,113,133,0.20)",
                background: "rgba(244,63,94,0.07)",
                color: "#FFE4E6",
                fontSize: 16,
                fontWeight: 800,
                lineHeight: 1.4,
              }}
            >
              Never share a seed phrase, private key, recovery code,
              password, or login code.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
