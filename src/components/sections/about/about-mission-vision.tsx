"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { pillars } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";

const CARD_ICONS = [Target, Eye];

export function AboutMissionVision() {
  const items = pillars.slice(0, 2); // Mission, Vision

  return (
    <section id="mission" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-25" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Purpose"
          title="The mission we serve,"
          goldTitle="the future we see"
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {items.map((item, i) => {
            const Icon = CARD_ICONS[i];
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: EASE.out, delay: i * 0.12 }}
                className="group/mv relative overflow-hidden rounded-4xl border border-line bg-card/50 p-9 backdrop-blur-xl transition-all duration-500 ease-luxe-out hover:-translate-y-1.5 hover:border-line-gold hover:shadow-gold-glow lg:p-12"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-radial-fade opacity-0 transition-opacity duration-500 group-hover/mv:opacity-100" />
                <span className="grid h-16 w-16 place-items-center rounded-2xl border border-line-gold bg-gold/5 text-gold transition-transform duration-500 group-hover/mv:scale-110">
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <p className="relative mt-8 font-numeric text-xs uppercase tracking-[0.22em] text-gold">
                  {item.label}
                </p>
                <h3 className="relative mt-4 max-w-md font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                  {item.title}
                </h3>
                <p className="relative mt-5 max-w-lg text-body-lg leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
