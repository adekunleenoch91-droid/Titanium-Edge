"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Handshake, type LucideIcon } from "lucide-react";
import { pillars, coreValues, type PillarKey } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";

const ICONS: Record<PillarKey, LucideIcon> = {
  mission: Target,
  vision: Eye,
  values: Handshake,
};

export function AboutPillars() {
  return (
    <section id="mission" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />

      <Container className="relative">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Purpose engineered into"
          goldTitle="everything we build"
          align="center"
          className="mx-auto items-center text-center"
        />

        <div className="perspective mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = ICONS[p.key];
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: EASE.out, delay: i * 0.1 }}
              >
                <TiltCard className="h-full p-8 lg:p-9">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line-gold bg-gold/5 text-gold transition-transform duration-500 group-hover/tilt:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <p className="mt-7 font-numeric text-xs uppercase tracking-[0.2em] text-gold">
                    {p.label}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-dim">{p.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Core values rail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE.out }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-line pt-10 lg:mt-16"
        >
          {coreValues.map((v) => (
            <span key={v} className="flex items-center gap-3 font-display text-lg font-medium text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {v}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
