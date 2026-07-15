"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ctaMedia, primaryCta } from "@/lib/site";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Parallax } from "@/components/animation/parallax";
import { TextReveal } from "@/components/animation/text-reveal";
import { Magnetic } from "@/components/ui/magnetic";

const PARTICLES = Array.from({ length: 16 }).map((_, i) => ({
  left: (i * 61) % 100,
  top: (i * 37) % 100,
  delay: (i % 6) * 0.7,
  duration: 5 + (i % 5),
}));

export function FinalCta() {
  return (
    <section id="start-project" className="relative flex min-h-[92svh] items-center overflow-hidden bg-background">
      {/* Background photograph with parallax */}
      <div className="absolute inset-0 z-0">
        <Parallax speed={10} className="absolute inset-[-8%]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-background to-background" />
          <Image
            src={ctaMedia.src}
            alt={ctaMedia.alt}
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
        </Parallax>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/80 to-background/60" />
      <div className="pointer-events-none absolute inset-0 z-[2] blueprint-grid opacity-40" />

      {/* Light rays */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 h-[150%] w-40 rotate-12 bg-gradient-to-b from-gold/12 to-transparent blur-3xl" />
        <div className="absolute -top-1/2 right-1/3 h-[150%] w-24 -rotate-12 bg-gradient-to-b from-white/8 to-transparent blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/60"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -22, 0], opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: p.duration, delay: p.delay, ease: "easeInOut", repeat: Infinity }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-content px-gutter text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE.out }}
          className="eyebrow justify-center"
        >
          Let&rsquo;s Build Together
        </motion.p>

        <h2 className="mx-auto mt-7 max-w-4xl font-display text-display-lg font-medium leading-[1.04] text-ink">
          <TextReveal text="Your next landmark" />{" "}
          <TextReveal text="begins here" wordClassName="text-gold-sheen" />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-body-lg text-ink-muted"
        >
          Partner with a team that treats your ambition as its own. Let&rsquo;s
          engineer something the world will remember.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.25 }}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
              href="/contact"
              className="group/btn2 relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full glass px-9 font-numeric text-base font-medium text-ink transition-all duration-500 ease-luxe-out hover:-translate-y-0.5 hover:border-line-gold hover:shadow-gold-glow"
            >
              <span className="relative z-10">Contact Our Team</span>
              <ArrowRight className="h-5 w-5 text-gold transition-transform duration-500 group-hover/btn2:translate-x-1" />
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
