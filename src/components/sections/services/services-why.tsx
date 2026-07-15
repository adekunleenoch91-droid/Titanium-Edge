"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Lightbulb,
  ShieldCheck,
  Eye,
  MessagesSquare,
  Gem,
  Clock,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { whyClients, type WhyIconKey } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";

const ICONS: Record<WhyIconKey, LucideIcon> = {
  experience: Award,
  innovation: Lightbulb,
  safety: ShieldCheck,
  transparency: Eye,
  communication: MessagesSquare,
  quality: Gem,
  delivery: Clock,
  satisfaction: Heart,
};

export function ServicesWhy() {
  return (
    <section id="why-clients" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-25" />

      <Container className="relative">
        <SectionHeading
          eyebrow="The Titanium Edge Difference"
          title="Why clients choose us"
          goldTitle="and stay with us"
          className="max-w-2xl"
        />

        <div className="perspective mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {whyClients.map((w, i) => {
            const Icon = ICONS[w.icon];
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: EASE.out, delay: (i % 4) * 0.08 }}
              >
                <TiltCard className="h-full p-6 lg:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line-gold bg-gold/5 text-gold transition-transform duration-500 group-hover/tilt:scale-110">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-medium text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{w.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
