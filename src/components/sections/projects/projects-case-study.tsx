"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Quote } from "lucide-react";
import { caseStudy } from "@/lib/site";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { TextReveal } from "@/components/animation/text-reveal";
import { Counter } from "@/components/animation/counter";
import { Parallax } from "@/components/animation/parallax";
import { cn } from "@/lib/utils";

function Phase({ phase, index }: { phase: (typeof caseStudy.phases)[number]; index: number }) {
  const imageRight = index % 2 === 1;
  return (
    <div className="grid items-center gap-x-14 gap-y-8 lg:grid-cols-2 lg:gap-x-20">
      <div className={cn(imageRight && "lg:order-2")}>
        <Parallax speed={5}>
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: DURATION.cinematic, ease: EASE.out }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-4xl border border-line shadow-float"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-background" />
            <Image src={phase.image.src} alt={phase.image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>
        </Parallax>
      </div>

      <div className={cn(imageRight && "lg:order-1")}>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE.out }}
          className="font-numeric text-xs uppercase tracking-[0.22em] text-gold"
        >
          {phase.label}
        </motion.p>
        <h3 className="mt-4 font-display text-display-sm font-medium leading-tight text-ink">
          <TextReveal text={phase.title} />
        </h3>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.1 }}
          className="mt-5 max-w-xl text-body-lg text-ink-muted"
        >
          {phase.description}
        </motion.p>
      </div>
    </div>
  );
}

export function ProjectsCaseStudy() {
  return (
    <section id="case-study" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />

      <Container className="relative">
        {/* Header */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE.out }}
            className="eyebrow"
          >
            {caseStudy.eyebrow}
          </motion.p>
          <h2 className="mt-6 font-display text-display-md font-medium leading-[1.05] text-ink">
            <TextReveal text={caseStudy.title} wordClassName="text-gold-sheen" />
          </h2>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-numeric text-sm text-ink-dim">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              {caseStudy.location}
            </span>
            <span>{caseStudy.category}</span>
            <span>Completed {caseStudy.year}</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.1 }}
            className="mt-7 text-body-lg text-ink-muted"
          >
            {caseStudy.intro}
          </motion.p>
        </div>

        {/* Phases */}
        <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-24">
          {caseStudy.phases.map((phase, i) => (
            <Phase key={phase.label} phase={phase} index={i} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-4xl border border-line bg-line lg:mt-20 lg:grid-cols-4">
          {caseStudy.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center bg-background/95 px-4 py-9 text-center">
              <span className="mb-3 h-px w-8 bg-gold/60" />
              <span className="font-numeric text-4xl font-semibold text-ink sm:text-5xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="mt-2 font-numeric text-[0.7rem] uppercase tracking-[0.14em] text-ink-dim">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Outcome */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE.out }}
          className="glass-strong relative mx-auto mt-8 max-w-4xl rounded-4xl p-9 text-center shadow-elevated lg:p-12"
        >
          <Quote className="mx-auto h-10 w-10 text-gold/30" />
          <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            {caseStudy.outcome}
          </blockquote>
          <figcaption className="mt-6 font-numeric text-sm text-ink-dim">{caseStudy.outcomeBy}</figcaption>
        </motion.figure>
      </Container>
    </section>
  );
}
