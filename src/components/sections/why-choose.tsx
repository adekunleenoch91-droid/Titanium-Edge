"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Ruler,
  Award,
  Leaf,
  Cpu,
  Clock,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { whyChoose, type IconKey } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";

const ICONS: Record<IconKey, LucideIcon> = {
  precision: Ruler,
  award: Award,
  sustainable: Leaf,
  technology: Cpu,
  delivery: Clock,
  safety: ShieldCheck,
};

export function WhyChoose() {
  return (
    <section id="why-choose" className="relative overflow-hidden bg-background py-section">
      {/* Continuing gold seam */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      {/* Blueprint backdrop */}
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-40" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Titanium Edge"
          title="The standard the industry"
          goldTitle="measures itself against"
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE.out, delay: 0.1 }}
            className="mt-6 max-w-xl text-body-lg text-ink-muted"
          >
            Global developers, governments, and private clients trust Titanium Edge
            because excellence is engineered into everything we do.
          </motion.p>
        </SectionHeading>

        <div className="perspective mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {whyChoose.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: EASE.out, delay: (i % 3) * 0.1 }}
              >
                <TiltCard className="h-full p-7 lg:p-8">
                  <div className="flex h-full flex-col">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line-gold bg-gold/5 text-gold transition-transform duration-500 group-hover/tilt:scale-110">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-7 font-display text-xl font-medium text-ink">{f.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-dim">{f.description}</p>
                    <span className="mt-6 font-numeric text-xs tabular-nums text-ink-faint">
                      0{i + 1}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
