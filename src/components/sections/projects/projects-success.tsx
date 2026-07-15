"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Building2 } from "lucide-react";
import { successStories, type SuccessStory } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function StoryCard({ story }: { story: SuccessStory }) {
  return (
    <figure className="glass-strong flex w-[86vw] shrink-0 flex-col rounded-4xl p-8 shadow-elevated transition-all duration-500 ease-luxe-out hover:-translate-y-2 hover:border-line-gold hover:shadow-gold-glow sm:w-[27rem]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-gold" aria-label={`${story.rating} out of 5`}>
          {Array.from({ length: story.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold" />
          ))}
        </div>
        <span className="flex items-center gap-2 rounded-full border border-line-gold bg-gold/5 px-3 py-1.5 font-numeric text-[0.7rem] uppercase tracking-[0.12em] text-gold">
          <Building2 className="h-3.5 w-3.5" />
          {story.project}
        </span>
      </div>

      <blockquote className="mt-6 flex-1 text-body-lg leading-relaxed text-ink-muted">
        “{story.review}”
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line-gold bg-gold/10 font-numeric text-sm font-semibold text-gold">
          {initials(story.name)}
        </span>
        <div className="min-w-0">
          <div className="font-display text-base font-medium text-ink">{story.name}</div>
          <div className="truncate font-numeric text-xs text-ink-dim">{story.company}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function ProjectsSuccess() {
  const loop = [...successStories, ...successStories];

  return (
    <section id="success" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-radial-fade opacity-60" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Client Success Stories"
          title="Outcomes our clients"
          goldTitle="are proud to sign"
          align="center"
          className="mx-auto items-center text-center"
        />
      </Container>

      <div
        className="te-marquee-mask edge-fade-x relative mt-14 overflow-hidden lg:mt-16"
        style={{ ["--marquee-duration" as string]: "52s" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.02 }}
          transition={{ duration: 0.8, ease: EASE.out }}
          className="te-marquee-track flex gap-6 px-3"
        >
          {loop.map((s, i) => (
            <StoryCard key={`${s.name}-${i}`} story={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
