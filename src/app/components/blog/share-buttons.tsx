"use client";

import { useMemo } from "react";

export default function ShareButtons({
  title,
}: {
  title: string;
}) {
  const url = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  const xHref = useMemo(() => {
    const text = encodeURIComponent(title);
    const u = encodeURIComponent(url);
    return `https://twitter.com/intent/tweet?text=${text}&url=${u}`;
  }, [title, url]);

  const tgHref = useMemo(() => {
    const text = encodeURIComponent(title);
    const u = encodeURIComponent(url);
    return `https://t.me/share/url?url=${u}&text=${text}`;
  }, [title, url]);

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={xHref}
        target="_blank"
        rel="noreferrer"
        className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm"
      >
        Share on X
      </a>
      <a
        href={tgHref}
        target="_blank"
        rel="noreferrer"
        className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm"
      >
        Share on Telegram
      </a>
    </div>
  );
}
