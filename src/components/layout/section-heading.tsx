"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { EASE, VIEWPORT } from "@/lib/motion";
import { TextReveal } from "@/components/animation/text-reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Words at the end of the title to render in gold gradient. */
  goldTitle?: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
};

/** Consistent eyebrow + display heading used across home sections. */
export function SectionHeading({
  eyebrow,
  title,
  goldTitle,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE.out }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.p>

      <h2 className="mt-6 max-w-3xl font-display text-display-md font-medium leading-[1.06] text-ink">
        <TextReveal text={title} />
        {goldTitle ? (
          <>
            {" "}
            <TextReveal text={goldTitle} wordClassName="text-gold-sheen" />
          </>
        ) : null}
      </h2>

      {children}
    </div>
  );
}
