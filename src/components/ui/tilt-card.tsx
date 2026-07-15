"use client";

import * as React from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  tilt?: number;
};

/**
 * Glass card that tilts gently toward the cursor in 3D and carries a soft gold
 * glow that tracks the pointer. Disabled on coarse pointers (touch).
 */
export function TiltCard({ children, className, tilt = 7 }: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const srx = useSpring(rx, { stiffness: 150, damping: 18, mass: 0.4 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18, mass: 0.4 });

  const glow = useMotionTemplate`radial-gradient(220px 220px at ${gx}% ${gy}%, rgba(212,175,55,0.16), transparent 70%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * tilt * 2);
    rx.set((0.5 - py) * tilt * 2);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(50);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className={cn(
        "group/tilt relative rounded-3xl border border-line bg-card/60 backdrop-blur-xl transition-shadow duration-500 will-transform [transform-style:preserve-3d] hover:border-line-gold hover:shadow-gold-glow",
        className
      )}
    >
      {/* Pointer-tracking gold glow */}
      <motion.span
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
      />
      {/* Top inner highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-3xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
      />
      <div className="relative [transform:translateZ(40px)]">{children}</div>
    </motion.div>
  );
}
