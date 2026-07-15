"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Boxes, Cpu, Workflow, Leaf, LineChart, type LucideIcon } from "lucide-react";
import { innovations, type TechIconKey } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";

const TechScene = dynamic(() => import("@/components/three/tech-scene"), {
  ssr: false,
  loading: () => null,
});

const ICONS: Record<TechIconKey, LucideIcon> = {
  bim: Boxes,
  digital: Cpu,
  smart: Workflow,
  materials: Leaf,
  management: LineChart,
};

export function AboutInnovation() {
  return (
    <section id="innovation" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-25" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy + list */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Innovation & Technology"
              title="Built with tomorrow's"
              goldTitle="tools, today"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, ease: EASE.out, delay: 0.1 }}
              className="mt-6 max-w-xl text-body-lg text-ink-muted"
            >
              Technology is not an add-on at Titanium Edge — it is how we
              guarantee precision, transparency, and performance on every build.
            </motion.p>

            <ul className="mt-10 space-y-3">
              {innovations.map((t, i) => {
                const Icon = ICONS[t.icon];
                return (
                  <motion.li
                    key={t.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: EASE.out, delay: i * 0.08 }}
                    className="group/tech flex items-start gap-5 rounded-3xl border border-line bg-card/40 p-5 backdrop-blur-xl transition-all duration-500 ease-luxe-out hover:border-line-gold hover:bg-card/70"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line-gold bg-gold/5 text-gold transition-transform duration-500 group-hover/tech:scale-110">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium text-ink transition-colors duration-500 group-hover/tech:text-gold">
                        {t.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-dim">{t.description}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* 3D accent */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: EASE.out }}
              className="glass-strong relative aspect-square w-full overflow-hidden rounded-4xl border border-line shadow-float lg:sticky lg:top-28"
            >
              <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-40" />
              <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
              <div className="absolute inset-0">
                <React.Suspense fallback={null}>
                  <TechScene />
                </React.Suspense>
              </div>
              <span className="absolute bottom-6 left-6 font-numeric text-xs uppercase tracking-[0.2em] text-ink-dim">
                Digital Twin · Live Model
              </span>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
