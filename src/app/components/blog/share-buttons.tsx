"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ShareButtonsProps = {
  title: string;
};

type ShareStatus =
  | "idle"
  | "copied"
  | "shared"
  | "error";

const STATUS_RESET_DELAY = 2200;

function XIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.48 22H3.36l7.24-8.27L2.96 2H9.36l4.42 5.84L18.9 2Zm-1.1 17.84h1.73L8.42 4.05H6.57L17.8 19.84Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.94 4.66c.31-1.45-.53-2.02-1.77-1.55L2.84 9.79c-1.18.46-1.16 1.12-.2 1.42l4.45 1.39 1.7 5.18c.21.59.11.83.73.83.48 0 .69-.22.96-.48l2.14-2.08 4.45 3.29c.82.45 1.41.22 1.61-.76l3.26-13.92ZM8.07 12.28l10.34-6.52c.51-.31.97-.14.59.2l-8.53 7.7-.33 3.51-2.07-4.89Z" />
    </svg>
  );
}

function CopyIcon() {
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
      <rect
        width="14"
        height="14"
        x="8"
        y="8"
        rx="2"
      />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function ShareIcon() {
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
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.83 3.98" />
      <path d="m15.41 6.51-6.82 3.98" />
    </svg>
  );
}

async function copyText(value: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";

  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);

  if (!copied) {
    throw new Error("Copy command failed.");
  }
}

export default function ShareButtons({
  title,
}: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [status, setStatus] =
    useState<ShareStatus>("idle");
  const [supportsNativeShare, setSupportsNativeShare] =
    useState(false);

  const resetTimeoutRef =
    useRef<number | null>(null);

  useEffect(() => {
    setCurrentUrl(window.location.href);
    setSupportsNativeShare(
      typeof navigator.share === "function"
    );

    return () => {
      if (resetTimeoutRef.current) {
        window.clearTimeout(
          resetTimeoutRef.current
        );
      }
    };
  }, []);

  const setTemporaryStatus = useCallback(
    (nextStatus: ShareStatus) => {
      setStatus(nextStatus);

      if (resetTimeoutRef.current) {
        window.clearTimeout(
          resetTimeoutRef.current
        );
      }

      resetTimeoutRef.current =
        window.setTimeout(() => {
          setStatus("idle");
        }, STATUS_RESET_DELAY);
    },
    []
  );

  const xHref = useMemo(() => {
    if (!currentUrl) return "#";

    const params = new URLSearchParams({
      text: title,
      url: currentUrl,
    });

    return `https://twitter.com/intent/tweet?${params.toString()}`;
  }, [currentUrl, title]);

  const telegramHref = useMemo(() => {
    if (!currentUrl) return "#";

    const params = new URLSearchParams({
      url: currentUrl,
      text: title,
    });

    return `https://t.me/share/url?${params.toString()}`;
  }, [currentUrl, title]);

  const handleCopy = useCallback(async () => {
    if (!currentUrl) return;

    try {
      await copyText(currentUrl);
      setTemporaryStatus("copied");
    } catch {
      setTemporaryStatus("error");
    }
  }, [currentUrl, setTemporaryStatus]);

  const handleNativeShare =
    useCallback(async () => {
      if (
        !currentUrl ||
        typeof navigator.share !== "function"
      ) {
        return;
      }

      try {
        await navigator.share({
          title,
          text: title,
          url: currentUrl,
        });

        setTemporaryStatus("shared");
      } catch (error) {
        if (
          error instanceof DOMException &&
          error.name === "AbortError"
        ) {
          return;
        }

        setTemporaryStatus("error");
      }
    }, [currentUrl, setTemporaryStatus, title]);

  const disabled = !currentUrl;

  const buttonClass =
    "inline-flex h-10 items-center justify-center gap-2 rounded-xl border px-3 text-xs font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07101d]";

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        aria-label="Share this article"
      >
        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
          onClick={(event) => {
            if (disabled) {
              event.preventDefault();
            }
          }}
          className={`${buttonClass} border-white/10 bg-white/[0.045] text-white/72 hover:border-white/20 hover:bg-white/[0.08] hover:text-white ${
            disabled
              ? "pointer-events-none opacity-50"
              : ""
          }`}
        >
          <XIcon />
          Share on X
        </a>

        <a
          href={telegramHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
          onClick={(event) => {
            if (disabled) {
              event.preventDefault();
            }
          }}
          className={`${buttonClass} border-sky-400/16 bg-sky-400/[0.055] text-sky-100 hover:border-sky-300/28 hover:bg-sky-400/[0.10] hover:text-white ${
            disabled
              ? "pointer-events-none opacity-50"
              : ""
          }`}
        >
          <TelegramIcon />
          Telegram
        </a>

        {supportsNativeShare ? (
          <button
            type="button"
            onClick={handleNativeShare}
            disabled={disabled}
            className={`${buttonClass} border-cyan-400/16 bg-cyan-400/[0.055] text-cyan-100 hover:border-cyan-300/28 hover:bg-cyan-400/[0.10] hover:text-white disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <ShareIcon />
            Share
          </button>
        ) : null}

        <button
          type="button"
          onClick={handleCopy}
          disabled={disabled}
          className={`${buttonClass} border-fuchsia-400/16 bg-fuchsia-400/[0.05] text-fuchsia-100 hover:border-fuchsia-300/28 hover:bg-fuchsia-400/[0.09] hover:text-white disabled:cursor-not-allowed disabled:opacity-50`}
        >
          <CopyIcon />
          {status === "copied"
            ? "Copied"
            : "Copy link"}
        </button>
      </div>

      <p
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {status === "copied"
          ? "Article link copied to clipboard."
          : status === "shared"
            ? "Article shared."
            : status === "error"
              ? "The share action could not be completed."
              : ""}
      </p>
    </div>
  );
}
