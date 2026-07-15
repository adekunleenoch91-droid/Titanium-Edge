"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutPage } from "@/lib/site";
import { EASE, DURATION } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { TextReveal } from "@/components/animation/text-reveal";
import { Counter } from "@/components/animation/counter";
import { Parallax } from "@/components/animation/parallax";

export function AboutHero() {
  const { hero } = aboutPage;

  return (
    <section className="relative overflow-hidden bg-background pb-section-sm pt-36 sm:pt-40 lg:pt-48">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-radial-fade opacity-70" />

      <Container className="relative">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE.out, delay: 0.2 }}
            className="eyebrow"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-7 font-display text-display-xl font-semibold leading-[0.98] text-ink">
            <span className="block">
              <TextReveal text={hero.title} animateOnMount delay={0.35} />
            </span>
            <span className="block">
              <TextReveal text={hero.goldTitle} wordClassName="text-gold-sheen" animateOnMount delay={0.5} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out, delay: 0.9 }}
            className="mt-8 max-w-2xl text-body-lg text-ink-muted"
          >
            {hero.intro}
          </motion.p>
        </div>
      </Container>

      {/* Full image band with parallax + overlapping stats */}
      <Container className="relative mt-14 lg:mt-20">
        <div className="relative">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: DURATION.cinematic, ease: EASE.out, delay: 0.6 }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-4xl border border-line shadow-float sm:aspect-[21/9]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-background" />
            <Parallax speed={6} className="absolute inset-[-6%]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-80"
              />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.out, delay: 1.1 }}
            className="glass-strong mx-auto -mt-12 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-elevated sm:-mt-16"
          >
            {hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center bg-card/80 px-3 py-7 text-center sm:py-8">
                <span className="font-numeric text-3xl font-semibold text-ink sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-2 font-numeric text-[0.65rem] uppercase tracking-[0.16em] text-ink-dim sm:text-xs">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
