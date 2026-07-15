"use client";

import * as React from "react";
import { useInView, useMotionValue, animate } from "framer-motion";
import { cn } from "@/lib/utils";
import { DURATION } from "@/lib/motion";

type CounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

/** Counts up from 0 to `value` when scrolled into view. */
export function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = DURATION.cinematic + 0.4,
  className,
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, duration, decimals, mv]);

  return (
    <span ref={ref} className={cn("font-numeric tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
