"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { servicesPage } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { TextReveal } from "@/components/animation/text-reveal";

export function ServicesIntro() {
  const { intro } = servicesPage;

  return (
    <section className="relative overflow-hidden bg-background py-section">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-radial-fade opacity-60" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, ease: EASE.out }}
              className="eyebrow"
            >
              {intro.eyebrow}
            </motion.p>
            <h2 className="mt-6 font-display text-display-md font-medium leading-[1.07] text-ink">
              <TextReveal text={intro.title} />
            </h2>
          </div>

          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE.out }}
              className="max-w-2xl text-body-xl leading-relaxed text-ink-muted"
            >
              {intro.lead}
            </motion.p>

            <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {intro.pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: EASE.out, delay: (i % 2) * 0.08 }}
                  className="border-t border-line pt-5"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-numeric text-xs tabular-nums text-gold">0{i + 1}</span>
                    <h3 className="font-display text-lg font-medium text-ink">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
