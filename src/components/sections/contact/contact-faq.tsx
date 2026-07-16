"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { contactFaqs } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Accordion } from "@/components/ui/accordion";

export function ContactFaq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-radial-fade opacity-50" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="FAQ" title="Everything you" goldTitle="need to know" />
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: EASE.out, delay: 0.1 }}
                className="mt-6 max-w-sm text-ink-muted"
              >
                A few answers to help you begin. For anything else, our team is one
                message away.
              </motion.p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Accordion items={contactFaqs} defaultOpen={0} />
          </div>
        </div>
      </Container>
    </section>
  );
}
