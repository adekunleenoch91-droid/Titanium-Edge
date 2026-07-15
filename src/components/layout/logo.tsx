import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** Titanium Edge wordmark with an angular titanium "edge" mark. */
export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Titanium Edge — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative grid h-9 w-9 place-items-center">
        <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" aria-hidden>
          <path
            d="M4 24L16 4l12 20"
            stroke="url(#te-gold)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
          />
          <path d="M9 24h14" stroke="url(#te-gold)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <defs>
            <linearGradient id="te-gold" x1="4" y1="4" x2="28" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F6ECC4" />
              <stop offset="0.5" stopColor="#D4AF37" />
              <stop offset="1" stopColor="#9A751D" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
          TITANIUM<span className="text-gold"> EDGE</span>
        </span>
        <span className="mt-1 font-numeric text-[0.58rem] uppercase tracking-[0.34em] text-ink-dim">
          Construction &amp; Engineering
        </span>
      </span>
    </Link>
  );
}
