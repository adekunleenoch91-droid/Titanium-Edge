"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { achievements } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { Counter } from "@/components/animation/counter";

export function ProjectsAchievements() {
  return (
    <section id="achievements" className="relative overflow-hidden py-section">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/40 to-background" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid animate-grid-pan opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade opacity-70" />
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
            Construction Achievements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE.out, delay: 0.05 }}
            className="mt-5 font-display text-display-sm font-medium text-ink"
          >
            A portfolio measured in landmarks
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-4xl border border-line bg-line sm:grid-cols-3 lg:mt-16 lg:grid-cols-7">
          {achievements.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: EASE.out, delay: (i % 7) * 0.06 }}
              className="group/ach flex flex-col items-center justify-center bg-background/95 px-3 py-9 text-center transition-colors duration-500 hover:bg-card/60"
            >
              <span className="mb-3 h-px w-8 bg-gold/60 transition-all duration-500 group-hover/ach:w-12" />
              <span className="font-numeric text-3xl font-semibold text-ink sm:text-4xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="mt-2 max-w-[8rem] font-numeric text-[0.62rem] uppercase leading-tight tracking-[0.14em] text-ink-dim">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
