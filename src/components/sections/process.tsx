"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  MessagesSquare,
  ClipboardList,
  PenTool,
  Cog,
  HardHat,
  BadgeCheck,
  KeyRound,
  type LucideIcon,
} from "lucide-react";
import { processStages, type ProcessIconKey } from "@/lib/site";
import { gsap } from "@/lib/gsap";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";

const ICONS: Record<ProcessIconKey, LucideIcon> = {
  consultation: MessagesSquare,
  planning: ClipboardList,
  design: PenTool,
  engineering: Cog,
  construction: HardHat,
  quality: BadgeCheck,
  delivery: KeyRound,
};

export function Process() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const progressRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!track || !progress) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      progress.style.transform = "scaleY(1)";
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        progress,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top 65%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }, track);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="How We Work" title="From first idea" goldTitle="to final handover" />
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.7, ease: EASE.out, delay: 0.1 }}
                className="mt-6 max-w-md text-body-lg text-ink-muted"
              >
                A disciplined, transparent process refined over hundreds of landmark
                projects — so every stage moves with intention.
              </motion.p>
            </div>
          </div>

          {/* Timeline */}
          <div ref={trackRef} className="relative lg:col-span-8">
            {/* Track + drawn progress */}
            <div className="absolute bottom-2 left-6 top-2 w-px -translate-x-1/2 bg-line sm:left-7">
              <div
                ref={progressRef}
                className="absolute inset-0 origin-top scale-y-0 bg-gradient-to-b from-gold via-gold/70 to-gold/0"
              />
            </div>

            <ul className="space-y-10 sm:space-y-12">
              {processStages.map((stage, i) => {
                const Icon = ICONS[stage.icon];
                return (
                  <motion.li
                    key={stage.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: EASE.out }}
                    className="group/step relative flex items-start gap-6 pl-16 sm:pl-20"
                  >
                    {/* Node */}
                    <span className="absolute left-6 top-0 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-line-gold bg-background text-gold shadow-soft transition-all duration-500 group-hover/step:bg-gold/10 group-hover/step:shadow-gold-glow sm:left-7">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>

                    <div className="pt-1">
                      <div className="flex items-center gap-3">
                        <span className="font-numeric text-xs tabular-nums text-ink-faint">
                          0{i + 1}
                        </span>
                        <h3 className="font-display text-xl font-medium text-ink transition-colors duration-500 group-hover/step:text-gold">
                          {stage.title}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-dim">
                        {stage.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
