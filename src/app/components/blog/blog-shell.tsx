"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import logo from "../../../../public/rrota-logo2.png";

type Crumb = { label: string; href?: string };

export default function BlogShell({
  crumbs,
  title,
  subtitle,
  children,
}: {
  crumbs: Crumb[];
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("rrota_blog_theme");
      if (saved === "light" || saved === "dark") setMode(saved);
    } catch {
      // ignore
    }
  }, []);

  const isDark = mode === "dark";

  const theme = useMemo(() => {
    return isDark
      ? {
          page: "min-h-screen bg-[#0c0f14] text-white",
          topbar: "border-b border-white/10 bg-[#0c0f14]/95 backdrop-blur-md",
          card: "border border-white/10 bg-white/5",
          cardHover: "hover:bg-white/10",
          muted: "text-white/60",
          muted2: "text-white/70",
          chip: "bg-white/10 text-white/70 border border-white/10",
          divider: "border-white/10",
          link: "text-white/80 hover:text-white",
          prose: "prose prose-invert max-w-none",
          button:
            "px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm",
        }
      : {
          page: "min-h-screen bg-[#f7f7fb] text-slate-900",
          topbar:
            "border-b border-slate-200 bg-white/80 backdrop-blur-md",
          card: "border border-slate-200 bg-white",
          cardHover: "hover:bg-slate-50",
          muted: "text-slate-500",
          muted2: "text-slate-600",
          chip: "bg-slate-100 text-slate-700 border border-slate-200",
          divider: "border-slate-200",
          link: "text-slate-700 hover:text-slate-900",
          prose: "prose prose-slate max-w-none",
          button:
            "px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition text-sm",
        };
  }, [isDark]);

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    setMode(next);
    try {
      localStorage.setItem("rrota_blog_theme", next);
    } catch {
      // ignore
    }
  };

  return (
    <main className={`${theme.page} font-inter`}>
      {/* Top bar */}
      <div className={theme.topbar}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="RROTA" width={36} height={36} />
            <span className="text-xl font-semibold tracking-wide">RROTA</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link href="/" className={`${theme.button} ${theme.link}`}>
              ← Home
            </Link>
            <Link href="/blog" className={`${theme.button} ${theme.link}`}>
              Blog
            </Link>

            <button
              onClick={toggle}
              className={theme.button}
              aria-label="Toggle light/dark mode"
              title="Toggle light/dark mode"
              type="button"
            >
              {isDark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className={`max-w-6xl mx-auto px-6 pt-6`}>
        <nav className={`text-sm ${theme.muted}`}>
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className={theme.link}>
                    {c.label}
                  </Link>
                ) : (
                  <span className={theme.muted}>{c.label}</span>
                )}
                {i < crumbs.length - 1 ? <span>›</span> : null}
              </li>
            ))}
          </ol>
        </nav>

        {(title || subtitle) && (
          <header className="mt-6">
            {title ? (
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                {title}
              </h1>
            ) : null}
            {subtitle ? (
              <p className={`mt-3 text-lg ${theme.muted2}`}>{subtitle}</p>
            ) : null}
          </header>
        )}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">{children}</div>
    </main>
  );
}
