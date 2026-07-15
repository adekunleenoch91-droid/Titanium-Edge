"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { aboutPreview } from "@/lib/site";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { TextReveal } from "@/components/animation/text-reveal";
import { Counter } from "@/components/animation/counter";
import { Parallax } from "@/components/animation/parallax";
import { Magnetic } from "@/components/ui/magnetic";

export function AboutPreview() {
  return (
    <section id="about-preview" className="relative overflow-hidden bg-background py-section">
      {/* Ambient depth lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-radial-fade opacity-70" />

      <Container>
        <div className="grid items-center gap-x-16 gap-y-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, ease: EASE.out }}
              className="eyebrow"
            >
              {aboutPreview.eyebrow}
            </motion.p>

            <h2 className="mt-6 font-display text-display-md font-medium leading-[1.07] text-ink">
              <TextReveal text={aboutPreview.heading} />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.1 }}
              className="mt-8 max-w-xl text-body-lg text-ink-muted"
            >
              {aboutPreview.intro}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.2 }}
              className="mt-5 max-w-xl text-ink-dim"
            >
              {aboutPreview.description}
            </motion.p>

            {/* Pillars */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } } }}
              className="mt-9 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
            >
              {aboutPreview.pillars.map((p) => (
                <motion.li
                  key={p}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE.out } },
                  }}
                  className="flex items-center gap-3 font-numeric text-sm text-ink-muted"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line-gold text-gold">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.35 }}
              className="mt-11"
            >
              <Magnetic strength={0.3}>
                <Link
                  href="/about"
                  className="group/btn relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full glass px-8 font-numeric text-base font-medium text-ink transition-all duration-500 ease-luxe-out hover:-translate-y-0.5 hover:border-line-gold hover:shadow-gold-glow"
                >
                  <span className="relative z-10">Learn More</span>
                  <ArrowRight className="h-5 w-5 text-gold transition-transform duration-500 group-hover/btn:translate-x-1" />
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative">
              <Parallax speed={7}>
                <motion.div
                  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: DURATION.cinematic, ease: EASE.out }}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-4xl border border-line shadow-float"
                >
                  {/* Fallback tone so the frame reads premium even before the photo loads */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-background" />
                  <motion.div
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.6, ease: EASE.out }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={aboutPreview.image.src}
                      alt={aboutPreview.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </motion.div>
                  {/* Glass tonal overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent" />
                </motion.div>
              </Parallax>

              {/* Floating glass stat card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.5 }}
                className="glass-strong absolute -bottom-8 left-6 w-52 rounded-3xl p-6 shadow-elevated sm:left-8"
              >
                <div className="font-numeric text-4xl font-semibold text-gold-sheen">
                  <Counter value={aboutPreview.stat.value} suffix={aboutPreview.stat.suffix} />
                </div>
                <p className="mt-2 font-numeric text-xs uppercase tracking-[0.16em] text-ink-dim">
                  {aboutPreview.stat.label}
                </p>
              </motion.div>

              {/* Blueprint corner accent */}
              <svg
                aria-hidden
                viewBox="0 0 120 120"
                className="pointer-events-none absolute -right-4 -top-6 hidden h-28 w-28 text-gold/40 sm:block"
              >
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: EASE.out, delay: 0.4 }}
                  d="M118 2 L118 62 M118 2 L58 2 M92 2 L92 28 L118 28"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
