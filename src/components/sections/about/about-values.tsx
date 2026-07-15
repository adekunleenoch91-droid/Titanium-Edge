"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Scale, Lightbulb, Gem, ShieldCheck, Users, Leaf, type LucideIcon } from "lucide-react";
import { coreValueCards, type ValueIconKey } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";

const ICONS: Record<ValueIconKey, LucideIcon> = {
  integrity: Scale,
  innovation: Lightbulb,
  excellence: Gem,
  safety: ShieldCheck,
  collaboration: Users,
  sustainability: Leaf,
};

export function AboutValues() {
  return (
    <section id="values" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/25 via-transparent to-transparent" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Core Values"
          title="The principles we"
          goldTitle="refuse to compromise"
          align="center"
          className="mx-auto items-center text-center"
        />

        <div className="perspective mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {coreValueCards.map((v, i) => {
            const Icon = ICONS[v.icon];
            return (
              <motion.div
                key={v.title}
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
                    <h3 className="mt-7 font-display text-xl font-medium text-ink">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-dim">{v.description}</p>
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
