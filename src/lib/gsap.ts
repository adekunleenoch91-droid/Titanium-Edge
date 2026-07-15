"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Central GSAP registration. Import { gsap, ScrollTrigger } from here so
 * plugins are only ever registered once, on the client.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // Never smooth over frame lag — keeps Lenis + GSAP perfectly in sync.
  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger };
