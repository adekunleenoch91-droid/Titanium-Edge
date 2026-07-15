import type { Variants } from "framer-motion";

/**
 * Titanium Edge — Motion System
 * One shared language of easing + timing so every animation feels like
 * it was choreographed by the same hand. Slow-in / slow-out, never linear.
 */

// Signature easings (cubic-bezier arrays for Framer Motion & GSAP alike).
export const EASE = {
  luxe: [0.65, 0, 0.35, 1] as const,
  out: [0.16, 1, 0.3, 1] as const,
  in: [0.7, 0, 0.84, 0] as const,
  soft: [0.33, 1, 0.68, 1] as const,
};

// GSAP-string equivalents.
export const GSAP_EASE = {
  luxe: "power3.inOut",
  out: "expo.out",
  in: "expo.in",
  soft: "power2.out",
};

export const DURATION = {
  fast: 0.4,
  base: 0.7,
  slow: 1.1,
  cinematic: 1.4,
};

export const STAGGER = {
  tight: 0.06,
  base: 0.09,
  loose: 0.14,
};

/** Fade + rise. The house default for content reveal. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE.out, delay: i * STAGGER.base },
  }),
};

/** Container that staggers its children. */
export const stagger: Variants = {
  hidden: {},
  visible: (stagger: number = STAGGER.base) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

/** Line-mask reveal (used with an overflow-hidden wrapper). */
export const maskUp: Variants = {
  hidden: { y: "115%" },
  visible: (i: number = 0) => ({
    y: "0%",
    transition: { duration: DURATION.slow, ease: EASE.out, delay: i * STAGGER.base },
  }),
};

/** Gentle scale-in for imagery / cards. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.cinematic, ease: EASE.out },
  },
};

/** Shared viewport config so reveals trigger consistently. */
export const VIEWPORT = { once: true, amount: 0.35 } as const;
