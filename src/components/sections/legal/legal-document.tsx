"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { LegalDoc } from "@/lib/legal";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { TextReveal } from "@/components/animation/text-reveal";

/** Quiet, readable legal page on the Titanium Edge design system. */
export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <section className="relative overflow-hidden bg-background pb-section pt-36 sm:pt-40 lg:pt-48">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-radial-fade opacity-60" />

      <Container className="relative">
        <header className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE.out, delay: 0.2 }}
            className="eyebrow"
          >
            Legal · Updated {doc.updated}
          </motion.p>
          <h1 className="mt-6 font-display text-display-lg font-semibold leading-[1.02] text-ink">
            <TextReveal text={doc.title} animateOnMount delay={0.35} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE.out, delay: 0.6 }}
            className="mt-7 max-w-prose text-body-lg text-ink-muted"
          >
            {doc.intro}
          </motion.p>
        </header>

        <div className="mt-14 max-w-prose space-y-12 lg:mt-16">
          {doc.sections.map((section, i) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, ease: EASE.out, delay: (i % 3) * 0.05 }}
            >
              <div className="flex items-baseline gap-4 border-t border-line pt-6">
                <span className="font-numeric text-xs tabular-nums text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
                  {section.heading}
                </h2>
              </div>
              <div className="mt-4 space-y-4 pl-8">
                {section.body.map((p, j) => (
                  <p key={j} className="leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </Container>
    </section>
  );
}
