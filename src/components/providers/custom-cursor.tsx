"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Tasteful custom cursor for desktop / fine-pointer devices only.
 * A precise dot plus a lagging ring that grows over interactive elements and
 * can surface a hint label via `data-cursor="…"`. Disabled on touch and for
 * reduced-motion users; the native caret still shows for text entry.
 */
const INTERACTIVE = "a, button, input, textarea, select, label, [role='button'], [data-cursor]";

export function CustomCursor() {
  const [enabled, setEnabled] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const [label, setLabel] = React.useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 1000, damping: 40 });
  const dotY = useSpring(y, { stiffness: 1000, damping: 40 });

  React.useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("te-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement | null)?.closest(INTERACTIVE) as HTMLElement | null;
      if (el) {
        setHovering(true);
        const dc = el.getAttribute("data-cursor");
        setLabel(dc && dc.length ? dc : null);
      } else {
        setHovering(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("te-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[95] hidden lg:block" aria-hidden>
      {/* Ring */}
      <motion.div style={{ x: ringX, y: ringY }} className="absolute left-0 top-0">
        <motion.div
          animate={{
            scale: hovering ? (label ? 3 : 2.3) : 1,
            backgroundColor: hovering ? "rgba(212,175,55,0.08)" : "rgba(212,175,55,0)",
            borderColor: hovering ? "rgba(212,175,55,0.7)" : "rgba(212,175,55,0.45)",
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="-ml-4 -mt-4 h-8 w-8 rounded-full border"
        />
      </motion.div>

      {/* Dot */}
      <motion.div style={{ x: dotX, y: dotY }} className="absolute left-0 top-0">
        <motion.div
          animate={{ scale: hovering ? 0 : 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="-ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-gold"
        />
      </motion.div>

      {/* Hint label */}
      <motion.div style={{ x: ringX, y: ringY }} className="absolute left-0 top-0">
        <motion.span
          animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="-ml-6 -mt-2.5 block font-numeric text-[0.6rem] uppercase tracking-[0.14em] text-gold"
        >
          {label}
        </motion.span>
      </motion.div>
    </div>
  );
}
