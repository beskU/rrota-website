import Image from "next/image";
import Link from "next/link";
import RrotaImage2 from "../../../public/rrota-image-2.jpg";

const currentStatus = [
  {
    label: "Live now",
    title: "$RTA on Solana",
    text: "The official RROTA token, public contract verification, market access, audits, and community channels are active.",
    tone: "cyan",
  },
  {
    label: "Live product",
    title: "Spin-to-Win",
    text: "The first public RROTA utility, with wallet-linked play, weekly, monthly, and yearly leaderboards, and recurring rewards.",
    tone: "emerald",
  },
  {
    label: "Ecosystem access",
    title: "RROTA AI",
    text: "A dedicated assistant that helps visitors understand the project, official resources, products, and ecosystem direction.",
    tone: "fuchsia",
  },
];

const developmentPath = [
  {
    step: "01",
    title: "Build working utility",
    text: "Release usable products first, improve them in public, and connect each product to a clear role inside the RROTA ecosystem.",
  },
  {
    step: "02",
    title: "Prove activity openly",
    text: "Publish official links, product status, race results, reward proofs, audits, and development updates that visitors can verify.",
  },
  {
    step: "03",
    title: "Expand in layers",
    text: "Grow from the token and first live game into additional gaming, holder, community, AI, and practical utility products.",
  },
];

const roadmapLayers = [
  {
    status: "Improving now",
    title: "Utility and holder experience",
    items: [
      "Stronger links between holding, playing, and ecosystem access",
      "Clearer winner history, reward proof, and campaign visibility",
      "Continued anti-abuse, leaderboard, and gameplay improvements",
    ],
    tone: "cyan",
  },
  {
    status: "Next expansion",
    title: "Games and community tools",
    items: [
      "Crypto Shooter and additional playable experiences",
      "Community reward systems, referrals, dashboards, and player tools",
      "More ways for $RTA to connect products across the ecosystem",
    ],
    tone: "fuchsia",
  },
  {
    status: "Long-term direction",
    title: "Practical and transport utility",
    items: [
      "Public-transport-focused tools and user-facing features",
      "Practical integrations developed only when technically ready",
      "A broader ecosystem that extends beyond one token or one game",
    ],
    tone: "amber",
  },
];

const toneClasses: Record<string, string> = {
  cyan: "border-cyan-400/18 bg-cyan-400/[0.065] text-cyan-200",
  emerald: "border-emerald-400/18 bg-emerald-400/[0.065] text-emerald-200",
  fuchsia: "border-fuchsia-400/18 bg-fuchsia-400/[0.065] text-fuchsia-200",
  amber: "border-amber-400/18 bg-amber-400/[0.065] text-amber-200",
};

function ArrowIcon() {
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
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function AboutUs() {
  return (
    <section
      id="About"
      className="relative w-full scroll-mt-28 px-4 text-white sm:px-6 lg:px-8"
      aria-labelledby="about-rrota-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/18 bg-cyan-400/8 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              About RROTA
            </div>

            <h2
              id="about-rrota-title"
              className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            >
              Built as an ecosystem.
              <span className="rrota-safe-title-accent block">
                Delivered product by product.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-white/68 sm:text-base lg:justify-self-end">
            RROTA ($RTA) is a Solana utility ecosystem connecting a live token,
            gaming, digital rewards, AI-assisted access, community products, and
            a longer-term practical utility direction. The goal is not to make
            every promise at once—it is to ship, verify, improve, and expand in
            clear stages.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-[38px] border border-white/10 bg-[#070A12] shadow-[0_0_70px_rgba(34,211,238,0.08)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[610px]">
              <Image
                src={RrotaImage2}
                alt="RROTA Solana utility ecosystem"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,17,0.08),rgba(5,7,17,0.82))] lg:bg-[linear-gradient(90deg,rgba(5,7,17,0.02),rgba(5,7,17,0.7))]" />

              <div className="absolute inset-x-5 bottom-5 rounded-[28px] border border-white/12 bg-[#050711]/78 p-5 backdrop-blur-xl sm:inset-x-7 sm:bottom-7">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200/75">
                  The RROTA approach
                </div>
                <p className="mt-2 text-sm leading-6 text-white/76">
                  Start with a transparent token foundation, connect it to real
                  products, and let completed work—not unsupported hype—define
                  the project’s progress.
                </p>
              </div>
            </div>

            <div className="relative p-5 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.09),transparent_38%)]" />

              <div className="relative">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-white/42">
                  What RROTA is
                </div>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                  One ecosystem with multiple utility layers.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/64 sm:text-base">
                  $RTA is the common token layer. Spin-to-Win is the first live
                  product. RROTA AI helps users navigate the ecosystem. Future
                  gaming, holder, community, and practical tools are designed to
                  expand the same ecosystem rather than create disconnected ideas.
                </p>

                <div className="mt-6 grid gap-3">
                  {currentStatus.map((item) => (
                    <div
                      key={item.title}
                      className={`rounded-3xl border p-4 ${toneClasses[item.tone]}`}
                    >
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-75">
                        {item.label}
                      </div>
                      <div className="mt-1.5 text-base font-black text-white">
                        {item.title}
                      </div>
                      <p className="mt-2 text-xs leading-5 text-white/62 sm:text-sm sm:leading-6">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/roadmap"
                    className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-cyan-300/28 bg-cyan-400/10 px-5 text-sm font-black text-cyan-50 transition-all hover:border-cyan-200/45 hover:bg-cyan-400/15"
                  >
                    View Development Roadmap
                    <ArrowIcon />
                  </Link>

                  <Link
                    href="/whitepaper"
                    className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.045] px-5 text-sm font-black text-white/82 transition-all hover:border-white/24 hover:bg-white/[0.075] hover:text-white"
                  >
                    Read Whitepaper
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {developmentPath.map((item) => (
            <article
              key={item.step}
              className="rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200/70">
                  Building principle
                </div>
                <div className="font-mono text-sm font-black text-white/24">
                  {item.step}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-black text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/58">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[36px] border border-white/10 bg-white/[0.03] p-5 sm:p-7">
          <div className="max-w-3xl">
            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-fuchsia-200/70">
              From today to the long-term vision
            </div>
            <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
              Clear status matters more than pretending everything is finished.
            </h3>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {roadmapLayers.map((layer) => (
              <div
                key={layer.title}
                className={`rounded-[28px] border p-5 ${toneClasses[layer.tone]}`}
              >
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-75">
                  {layer.status}
                </div>
                <h4 className="mt-2 text-lg font-black text-white">{layer.title}</h4>
                <ul className="mt-4 space-y-3">
                  {layer.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-white/62">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-white/42">
            Product and roadmap labels should be updated whenever features move
            from concept to development, beta, or live release.
          </p>
        </div>
      </div>
    </section>
  );
}
