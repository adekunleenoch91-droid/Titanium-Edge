"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { leadership, type Leader } from "@/lib/site";
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

function LeaderCard({ leader, index }: { leader: Leader; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE.out, delay: (index % 4) * 0.08 }}
      className="group/leader relative overflow-hidden rounded-4xl border border-line bg-card/50 transition-all duration-500 ease-luxe-out hover:-translate-y-1.5 hover:border-line-gold hover:shadow-gold-glow"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-secondary via-primary to-background">
          <span className="font-display text-5xl font-semibold text-ink/15">{initials(leader.name)}</span>
        </div>
        <Image
          src={leader.photo.src}
          alt={leader.photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-luxe-out group-hover/leader:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <a
          href="#"
          aria-label={`${leader.name} on LinkedIn`}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass text-ink-muted opacity-0 transition-all duration-500 hover:text-gold group-hover/leader:opacity-100"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-medium text-ink">{leader.name}</h3>
        <p className="mt-1 font-numeric text-xs uppercase tracking-[0.16em] text-gold">{leader.role}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-dim">{leader.bio}</p>
      </div>
    </motion.div>
  );
}

export function AboutLeadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-radial-fade opacity-60" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Leadership"
          title="The people behind"
          goldTitle="the precision"
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {leadership.map((l, i) => (
            <LeaderCard key={l.name} leader={l} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
