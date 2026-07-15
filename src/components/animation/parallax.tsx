"use client";

import * as React from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: React.ReactNode;
  /** Positive drifts slower (moves up), negative moves down. In vh-ish units. */
  speed?: number;
  className?: string;
  as?: "div" | "span";
};

/**
 * GSAP scroll-linked parallax. Elements drift at a different rate than the
 * page, building cinematic depth. Scrubbed 1:1 to the smooth scroll.
 */
export function Parallax({ children, speed = 12, className, as = "div" }: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -speed },
        {
          yPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [speed]);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={cn("will-transform", className)}>
      {children}
    </Tag>
  );
}
