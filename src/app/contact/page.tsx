import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  email: "mailto:info@rrota.xyz",
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
  links: `${BASE_URL}/links`,
  whitepaper: `${BASE_URL}/whitepaper`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
};

export const metadata: Metadata = {
  title: "Contact RROTA | Official $RTA Contact",
  description:
    "Official RROTA contact page for listing reviews, partnerships, security reports, verification requests, and community communication.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

function ExternalIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5" />
    </svg>
  );
}

export default function ContactPage() {
  const contactItems = [
    {
      label: "Official Email",
      href: LINKS.email,
      detail: "info@rrota.xyz",
      type: "email",
    },
    {
      label: "Official Telegram",
      href: LINKS.telegram,
      detail: "Community and announcements",
      type: "external",
    },
    {
      label: "Official X / Twitter",
      href: LINKS.x,
      detail: "Public updates and verification posts",
      type: "external",
    },
    {
      label: "Official Links Page",
      href: LINKS.links,
      detail: "Verified RROTA resources",
      type: "external",
    },
    {
      label: "Whitepaper",
      href: LINKS.whitepaper,
      detail: "Official RROTA whitepaper page",
      type: "external",
    },
    {
      label: "Solscan Verification",
      href: LINKS.solscan,
      detail: "Official $RTA token contract",
      type: "external",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050711] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(217,70,239,0.14),transparent_30%),linear-gradient(180deg,#050711_0%,#07101d_45%,#050711_100%)]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-2xl border border-cyan-400/16 bg-cyan-400/8 px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/12"
        >
          ← Back to RROTA
        </Link>

        <section className="mt-6 rounded-[40px] border border-cyan-400/16 bg-white/[0.035] p-6 shadow-[0_0_70px_rgba(34,211,238,0.10),0_0_120px_rgba(217,70,239,0.06)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300">
            Official Contact
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl">
            Contact RROTA
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            Use this page for official RROTA communication, listing reviews,
            exchange verification, partnership requests, security reports,
            and project-related inquiries.
          </p>

          <div className="mt-6 rounded-3xl border border-amber-400/18 bg-amber-400/8 p-5">
            <h2 className="text-lg font-black text-white">Important Safety Notice</h2>
            <p className="mt-2 text-sm leading-7 text-white/66">
              RROTA team members will never ask for your seed phrase, private key,
              wallet recovery phrase, or direct wallet access. Always verify official
              links through rrota.xyz before interacting with any RROTA-related page.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.type === "email" ? undefined : "_blank"}
                rel={item.type === "email" ? undefined : "noopener noreferrer"}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/25 hover:bg-cyan-400/8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-base font-black text-white">{item.label}</h2>
                    <p className="mt-2 text-sm leading-6 text-white/58">
                      {item.detail}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/14 bg-cyan-400/8 text-cyan-200 transition group-hover:scale-105">
                    <ExternalIcon />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-5">
            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/70">
              Official $RTA Contract
            </div>
            <p className="mt-3 break-all font-mono text-sm leading-6 text-white/75">
              {TOKEN_ADDRESS}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
