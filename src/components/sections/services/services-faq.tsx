"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { faqs } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

function FaqItem({
  question,
  answer,
  open,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EASE.out, delay: (index % 6) * 0.05 }}
      className={cn(
        "overflow-hidden rounded-3xl border transition-colors duration-500",
        open ? "border-line-gold bg-card/60" : "border-line bg-card/30 hover:border-line-strong"
      )}
    >
      <button
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
      >
        <span className="font-display text-lg font-medium text-ink sm:text-xl">{question}</span>
        <span
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-full border text-gold transition-all duration-500 ease-luxe-out",
            open ? "rotate-45 border-line-gold bg-gold/10" : "border-line"
          )}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-all duration-500 ease-luxe-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl px-6 pb-7 text-body-lg leading-relaxed text-ink-muted sm:px-8">
            {answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesFaq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-radial-fade opacity-50" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="FAQ" title="Answers before" goldTitle="you ask" />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.7, ease: EASE.out, delay: 0.1 }}
                className="mt-6"
              >
                <p className="max-w-sm text-ink-muted">
                  Still have a question? Our team is ready to help you plan your next landmark.
                </p>
                <Link
                  href="/contact"
                  className="group/ct mt-6 inline-flex items-center gap-2 font-numeric text-sm text-gold"
                >
                  Contact our team
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/ct:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-4">
              {faqs.map((f, i) => (
                <FaqItem
                  key={f.question}
                  index={i}
                  question={f.question}
                  answer={f.answer}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
