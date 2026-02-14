import type { Metadata } from "next";
import Link from "next/link";

const OFFICIAL_DOMAIN = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

export const metadata: Metadata = {
  title: "RROTA Roadmap",
  description:
    "RROTA roadmap: staged releases with transparent execution — utilities ship when tested. Verify authenticity only at rrota.xyz.",
  alternates: { canonical: `${OFFICIAL_DOMAIN}/roadmap` },
};

export default function RoadmapPage() {
  return (
    <main className="relative w-full text-white pt-[110px] pb-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Roadmap
          </h1>

          <p className="mt-4 text-white/75 leading-7 max-w-[80ch]">
            This is a build-first roadmap: clear milestones, on-chain
            verification, and releases only when stable.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h2 className="text-xl font-semibold text-white">
                Phase 1 — Foundation
              </h2>
              <ul className="mt-3 space-y-2 text-white/75">
                <li>• Official site + verification signals (domain, contract)</li>
                <li>• Indexing + sitemap + structured data</li>
                <li>• Anti-phishing visibility + reporting</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h2 className="text-xl font-semibold text-white">
                Phase 2 — Utility delivery
              </h2>
              <ul className="mt-3 space-y-2 text-white/75">
                <li>• Spin-to-Win reward logic + anti-farm rules</li>
                <li>• Telegram WebApp integration</li>
                <li>• Shooter prototype / gameplay loop</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h2 className="text-xl font-semibold text-white">
                Phase 3 — Ecosystem expansion
              </h2>
              <ul className="mt-3 space-y-2 text-white/75">
                <li>• Transit utility research → pilot</li>
                <li>• Documentation + long-form blog updates</li>
                <li>• Community growth with verifiable metrics</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
            <p className="text-amber-50/90 text-sm leading-6">
              Verify you are on the real site:{" "}
              <strong>{OFFICIAL_DOMAIN}</strong> — and confirm the contract{" "}
              <span className="font-mono break-all">{TOKEN_ADDRESS}</span>.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
              href="/"
            >
              Back to Home
            </Link>
            <a
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition"
              href={`${OFFICIAL_DOMAIN}/blog`}
            >
              Read updates in Blog →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
