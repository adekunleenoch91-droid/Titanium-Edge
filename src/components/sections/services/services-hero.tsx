"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { servicesPage, primaryCta } from "@/lib/site";
import { EASE, DURATION } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { TextReveal } from "@/components/animation/text-reveal";
import { Parallax } from "@/components/animation/parallax";
import { Magnetic } from "@/components/ui/magnetic";

const PARTICLES = Array.from({ length: 14 }).map((_, i) => ({
  left: (i * 67) % 100,
  top: (i * 41) % 100,
  delay: (i % 5) * 0.8,
  duration: 5 + (i % 4),
}));

export function ServicesHero() {
  const { hero } = servicesPage;

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Parallax speed={9} className="absolute inset-[-8%]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-background to-background" />
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
        </Parallax>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-hero-vignette" />
      <div className="pointer-events-none absolute inset-0 z-[2] blueprint-grid animate-grid-pan opacity-60" />

      {/* Light beam */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-1/3 overflow-hidden">
        <div className="absolute -inset-y-10 left-0 w-40 rotate-12 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 blur-2xl animate-beam-sweep" />
      </div>

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/60"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.15, 0.65, 0.15] }}
            transition={{ duration: p.duration, delay: p.delay, ease: "easeInOut", repeat: Infinity }}
          />
        ))}
      </div>

      {/* Content */}
      <Container className="relative z-10 pt-32 sm:pt-36">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE.out, delay: 0.25 }}
            className="eyebrow"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-7 font-display text-display-xl font-semibold leading-[0.98] text-ink">
            <span className="block">
              <TextReveal text={hero.title} animateOnMount delay={0.4} />
            </span>
            <span className="block">
              <TextReveal text={hero.goldTitle} wordClassName="text-gold-sheen" animateOnMount delay={0.55} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out, delay: 0.95 }}
            className="mt-8 max-w-xl text-body-lg text-ink-muted"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.out, delay: 1.1 }}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Magnetic strength={0.3}>
              <Link
                href={primaryCta.href}
                className="group/btn relative inline-flex h-14 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gold-sheen px-9 font-numeric text-base font-semibold text-primary shadow-soft transition-all duration-500 ease-luxe-out hover:-translate-y-0.5 hover:shadow-gold-glow-lg"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-luxe-out group-hover/btn:translate-x-[150%]"
                />
                <span className="relative z-10">Start Your Project</span>
                <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </Magnetic>

            <Magnetic strength={0.25}>
              <Link
                href="#core-services"
                className="group/btn2 relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full glass px-9 font-numeric text-base font-medium text-ink transition-all duration-500 ease-luxe-out hover:-translate-y-0.5 hover:border-line-gold hover:shadow-gold-glow"
              >
                <span className="relative z-10">Explore Services</span>
                <ArrowRight className="h-5 w-5 text-gold transition-transform duration-500 group-hover/btn2:translate-x-1" />
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
