"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Factory,
  HeartPulse,
  GraduationCap,
  Landmark,
  Hotel,
  Route,
  type LucideIcon,
} from "lucide-react";
import { industries, type IndustryIconKey } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";

const ICONS: Record<IndustryIconKey, LucideIcon> = {
  commercial: Building2,
  residential: Home,
  industrial: Factory,
  healthcare: HeartPulse,
  education: GraduationCap,
  government: Landmark,
  hospitality: Hotel,
  infrastructure: Route,
};

export function ServicesIndustries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/25 via-transparent to-transparent" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Deep expertise across"
          goldTitle="every sector we build"
          align="center"
          className="mx-auto items-center text-center"
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const Icon = ICONS[ind.icon];
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: EASE.out, delay: (i % 4) * 0.08 }}
                className="group/ind relative flex flex-col rounded-4xl border border-line bg-card/50 p-6 backdrop-blur-xl transition-all duration-500 ease-luxe-out hover:-translate-y-1 hover:border-line-gold hover:shadow-gold-glow lg:p-8"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line-gold bg-gold/5 text-gold transition-transform duration-500 group-hover/ind:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-lg font-medium text-ink">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{ind.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
