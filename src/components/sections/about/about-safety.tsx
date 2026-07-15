"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { HardHat, Globe, Recycle, BadgeCheck, ClipboardCheck, type LucideIcon } from "lucide-react";
import { safetyItems, safetyStats, type SafetyIconKey } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Counter } from "@/components/animation/counter";

const ICONS: Record<SafetyIconKey, LucideIcon> = {
  worker: HardHat,
  environment: Globe,
  green: Recycle,
  quality: BadgeCheck,
  compliance: ClipboardCheck,
};

export function AboutSafety() {
  return (
    <section id="safety" className="relative overflow-hidden py-section">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid animate-grid-pan opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Safety & Sustainability"
          title="We protect our people"
          goldTitle="and our planet"
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {safetyItems.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: EASE.out, delay: (i % 3) * 0.09 }}
                className="group/safe relative flex flex-col rounded-4xl border border-line bg-card/50 p-8 backdrop-blur-xl transition-all duration-500 ease-luxe-out hover:-translate-y-1 hover:border-line-gold hover:shadow-gold-glow"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line-gold bg-gold/5 text-gold transition-transform duration-500 group-hover/safe:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{s.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight stat band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE.out }}
          className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-4xl border border-line bg-line sm:grid-cols-3"
        >
          {safetyStats.map((s) => (
            <div key={s.label} className="flex flex-col items-center bg-background/95 px-6 py-9 text-center">
              <span className="mb-3 h-px w-8 bg-gold/60" />
              <span className="font-numeric text-4xl font-semibold text-ink sm:text-5xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="mt-2 font-numeric text-xs uppercase tracking-[0.16em] text-ink-dim">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
