"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { contactPage } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { TextReveal } from "@/components/animation/text-reveal";

export function ContactIntro() {
  const { intro } = contactPage;

  return (
    <section className="relative overflow-hidden bg-background py-section">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-radial-fade opacity-60" />

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

            <div className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {intro.points.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.55, ease: EASE.out, delay: (i % 2) * 0.08 }}
                  className="flex items-center gap-3 border-t border-line pt-4 font-numeric text-sm text-ink-muted"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line-gold text-gold">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
