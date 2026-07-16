"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Slim gold scroll-progress rail pinned to the very top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[85] h-[2px] origin-left bg-gradient-to-r from-gold/40 via-gold to-gold/40"
    />
  );
}
