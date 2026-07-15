"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutPage } from "@/lib/site";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { TextReveal } from "@/components/animation/text-reveal";
import { Parallax } from "@/components/animation/parallax";

export function AboutStory() {
  const { story } = aboutPage;

  return (
    <section id="our-story" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-radial-fade opacity-60" />

      <Container className="relative">
        <div className="grid items-center gap-x-16 gap-y-12 lg:grid-cols-12">
          {/* Image */}
          <div className="lg:col-span-6">
            <Parallax speed={7}>
              <motion.div
                initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: DURATION.cinematic, ease: EASE.out }}
                className="relative aspect-[5/4] w-full overflow-hidden rounded-4xl border border-line shadow-float"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-background" />
                <Image
                  src={story.image.src}
                  alt={story.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </motion.div>
            </Parallax>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, ease: EASE.out }}
              className="eyebrow"
            >
              {story.eyebrow}
            </motion.p>

            <h2 className="mt-6 font-display text-display-md font-medium leading-[1.07] text-ink">
              <TextReveal text={story.title} />
            </h2>

            <div className="mt-8 space-y-5">
              {story.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.1 + i * 0.1 }}
                  className="max-w-xl text-ink-muted"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
