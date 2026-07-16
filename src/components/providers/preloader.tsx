"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

/**
 * Premium first-load preloader: the Titanium Edge mark draws itself, a gold
 * progress line fills to 100%, then the curtain lifts to reveal the site.
 * Renders once (layout persists across route changes). Skipped for
 * reduced-motion users.
 */
export function Preloader() {
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (reduced) {
      setDone(true);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const DURATION = 1400;
    const loop = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(loop);
      else raf = requestAnimationFrame(() => setTimeout(() => setDone(true), 280));
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE.in }}
        >
          <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade opacity-70" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE.out }}
            className="relative flex flex-col items-center"
          >
            <svg viewBox="0 0 32 32" className="h-14 w-14" fill="none" aria-hidden>
              <motion.path
                d="M4 24L16 4l12 20"
                stroke="url(#pl-gold)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, ease: EASE.out }}
              />
              <motion.path
                d="M9 24h14"
                stroke="url(#pl-gold)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: EASE.out, delay: 0.4 }}
              />
              <defs>
                <linearGradient id="pl-gold" x1="4" y1="4" x2="28" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F6ECC4" />
                  <stop offset="0.5" stopColor="#D4AF37" />
                  <stop offset="1" stopColor="#9A751D" />
                </linearGradient>
              </defs>
            </svg>
            <div className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
              TITANIUM <span className="text-gold">EDGE</span>
            </div>
          </motion.div>

          <div className="relative mt-10 flex w-52 flex-col items-center gap-3">
            <div className="h-px w-full overflow-hidden bg-line">
              <div className="h-full bg-gold-sheen transition-[width] duration-100 ease-linear" style={{ width: `${progress}%` }} />
            </div>
            <span className="font-numeric text-xs tabular-nums text-ink-dim">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
