"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Trophy, ShieldCheck, BadgeCheck, DraftingCompass, Leaf, type LucideIcon } from "lucide-react";
import { awards, type AwardIconKey } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";

const ICONS: Record<AwardIconKey, LucideIcon> = {
  trophy: Trophy,
  safety: ShieldCheck,
  quality: BadgeCheck,
  engineering: DraftingCompass,
  sustainability: Leaf,
};

export function Awards() {
  return (
    <section id="awards" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/30 via-transparent to-transparent" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Recognition"
          title="Credentials that"
          goldTitle="speak for themselves"
          align="center"
          className="mx-auto items-center text-center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {awards.map((a, i) => {
            const Icon = ICONS[a.icon];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: EASE.out, delay: (i % 5) * 0.08 }}
              >
                {/* Gentle continuous float */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5 + i * 0.4, ease: "easeInOut", repeat: Infinity }}
                  className="group/award relative flex h-full flex-col items-center rounded-4xl border border-line bg-card/50 p-8 text-center backdrop-blur-xl transition-all duration-500 ease-luxe-out hover:-translate-y-1 hover:border-line-gold hover:shadow-gold-glow"
                >
                  {/* Metallic medallion */}
                  <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gold-sheen text-primary shadow-gold-glow transition-transform duration-500 group-hover/award:rotate-6 group-hover/award:scale-105">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-transparent opacity-60" />
                    <Icon className="relative h-7 w-7" strokeWidth={1.6} />
                  </span>

                  <h3 className="mt-6 font-display text-base font-medium leading-snug text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 font-numeric text-xs uppercase tracking-[0.14em] text-ink-dim">
                    {a.detail}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
