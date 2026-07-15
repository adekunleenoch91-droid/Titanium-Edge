"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Stagger index — multiplies the base delay. */
  index?: number;
  as?: "div" | "section" | "li" | "span";
};

/**
 * House content reveal: fade + rise, triggered once on scroll into view.
 * Use `index` to cascade siblings.
 */
export function Reveal({ index = 0, className, children, as = "div", ...props }: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
