"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

/**
 * Titanium Edge smooth-scroll spine.
 *
 * Lenis provides momentum scrolling; GSAP's ticker drives Lenis's RAF so
 * ScrollTrigger and Lenis stay perfectly frame-synced (no jitter, no double
 * RAF loops). Reduced-motion users get native scrolling.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        // Signature luxe glide — long, weighty, never sluggish.
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: !reduced,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
        // Native RAF disabled; GSAP ticker drives it (see LenisGsapBridge).
        autoRaf: false,
      }}
    >
      <LenisGsapBridge reduced={reduced} />
      {children}
    </ReactLenis>
  );
}

function LenisGsapBridge({ reduced }: { reduced: boolean }) {
  const lenis = useLenis();
  const rafHandler = useRef<((time: number) => void) | null>(null);

  useEffect(() => {
    if (!lenis) return;

    // Keep ScrollTrigger updated on every Lenis scroll.
    lenis.on("scroll", ScrollTrigger.update);

    const handler = (time: number) => lenis.raf(time * 1000);
    rafHandler.current = handler;
    gsap.ticker.add(handler);
    gsap.ticker.lagSmoothing(0);

    // A settle-in refresh once fonts/images shift layout.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      if (rafHandler.current) gsap.ticker.remove(rafHandler.current);
      window.removeEventListener("load", refresh);
    };
  }, [lenis]);

  // Stop momentum entirely for reduced-motion users.
  useEffect(() => {
    if (!lenis) return;
    if (reduced) lenis.stop();
    else lenis.start();
  }, [lenis, reduced]);

  return null;
}
