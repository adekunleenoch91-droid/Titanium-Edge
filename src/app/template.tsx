"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Per-route enter transition. Next remounts this template on every navigation,
 * giving each page a cohesive cinematic fade-in.
 *
 * Note: opacity ONLY — a transform/filter here would create a containing block
 * for `position: fixed` descendants and break the gallery lightbox.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: EASE.out }}
    >
      {children}
    </motion.div>
  );
}
