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

/** Shared viewport config so reveals trigger consistently. */
export const VIEWPORT = { once: true, amount: 0.35 } as const;
