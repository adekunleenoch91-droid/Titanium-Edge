"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { homeStats } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { Counter } from "@/components/animation/counter";

export function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden py-section">
      {/* Layered band background + subtle motion */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/40 to-background" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid animate-grid-pan opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade opacity-70" />
      {/* Gold seams top & bottom */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE.out }}
            className="eyebrow justify-center"
          >
            By the Numbers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE.out, delay: 0.05 }}
            className="mt-5 font-display text-display-sm font-medium text-ink"
          >
            A track record measured in landmarks
          </motion.h2>
        </div>

        {/* Hairline-grid stat matrix */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-4xl border border-line bg-line md:grid-cols-3 lg:mt-16 lg:grid-cols-6">
          {homeStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: EASE.out, delay: (i % 6) * 0.07 }}
              className="group/stat relative flex flex-col items-center justify-center bg-background/95 px-4 py-10 text-center transition-colors duration-500 hover:bg-card/60"
            >
              <span className="mb-4 h-px w-8 bg-gold/60 transition-all duration-500 group-hover/stat:w-12" />
              <span className="font-numeric text-4xl font-semibold text-ink sm:text-5xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="mt-3 max-w-[9rem] font-numeric text-[0.7rem] uppercase leading-tight tracking-[0.16em] text-ink-dim">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
