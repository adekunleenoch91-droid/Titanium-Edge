"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { TextReveal } from "@/components/animation/text-reveal";

const marqueeWords = [
  "Precision",
  "Engineering",
  "Craftsmanship",
  "Innovation",
  "Integrity",
  "Legacy",
  "Excellence",
];

/**
 * The cinematic hand-off out of the hero. The hero fades and scales while this
 * band rises to meet it — a continuous gold seam bridges the two so there is
 * no hard cut. A slow marquee and an editorial statement set the tone for the
 * story to come.
 */
export function IntroTransition() {
  return (
    <section className="relative overflow-hidden bg-background py-section-sm">
      {/* Continuing gold seam from the hero — the visual bridge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />

      {/* Slow keyword marquee */}
      <div className="relative flex overflow-hidden border-y border-line py-6">
        <motion.div
          className="flex shrink-0 items-center gap-10 pr-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-2xl font-medium tracking-tight text-ink-dim sm:text-3xl">
                {w}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Editorial statement */}
      <Container className="relative pt-section-sm">
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE.out }}
            className="lg:col-span-4"
          >
            <p className="eyebrow">Our Philosophy</p>
          </motion.div>

          <div className="lg:col-span-8">
            <h2 className="font-display text-display-md font-medium leading-[1.08] text-ink">
              <TextReveal text="We don't simply construct buildings — we engineer" />{" "}
              <TextReveal text="landmarks that carry a legacy" wordClassName="text-gold-sheen" />{" "}
              <TextReveal text="of precision, trust, and enduring quality." />
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
