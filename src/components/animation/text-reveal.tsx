"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { EASE, DURATION, STAGGER, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  /** Class applied to each moving word — use for gradient/`text-gold-sheen` so
   *  background-clip:text clips to the glyphs rather than the mask box. */
  wordClassName?: string;
  /** Delay before the first word animates. */
  delay?: number;
  /** Animate immediately on mount instead of on scroll into view. */
  animateOnMount?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/**
 * Word-by-word mask reveal. Each word rides up from behind a clip, producing
 * the signature editorial "lines that build themselves" effect.
 */
export function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  animateOnMount = false,
  as = "span",
}: TextRevealProps) {
  const words = text.split(" ");
  const MotionTag = motion[as] as typeof motion.span;

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: STAGGER.tight, delayChildren: delay },
    },
  };

  const word = {
    hidden: { y: "115%" },
    visible: {
      y: "0%",
      transition: { duration: DURATION.slow, ease: EASE.out },
    },
  };

  const activation = animateOnMount
    ? { initial: "hidden" as const, animate: "visible" as const }
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: VIEWPORT };

  return (
    <MotionTag variants={container} {...activation} className={cn("inline-block", className)}>
      {words.map((w, i) => (
        <React.Fragment key={`${w}-${i}`}>
          <span className="clip-mask align-bottom">
            <motion.span variants={word} className={cn("inline-block will-transform", wordClassName)}>
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </MotionTag>
  );
}
