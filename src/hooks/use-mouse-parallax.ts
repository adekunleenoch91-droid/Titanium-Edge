"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

type Parallax = {
  /** Normalised pointer position, -0.5 .. 0.5, smoothed. */
  x: MotionValue<number>;
  y: MotionValue<number>;
};

/**
 * Smoothed, normalised pointer position for luxury mouse-parallax.
 * Disabled on touch / coarse pointers to avoid jitter and save battery.
 */
export function useMouseParallax(enabled = true): Parallax {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, rawX, rawY]);

  return { x, y };
}
