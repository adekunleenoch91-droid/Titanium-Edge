"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { milestones } from "@/lib/site";
import { gsap } from "@/lib/gsap";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

export function AboutMilestones() {
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
          scrollTrigger: { trigger: track, start: "top 70%", end: "bottom 75%", scrub: true },
        }
      );
    }, track);
    return () => ctx.revert();
  }, []);

  return (
    <section id="milestones" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Our Journey"
          title="Nearly three decades"
          goldTitle="of building forward"
          align="center"
          className="mx-auto items-center text-center"
        />

        <div ref={trackRef} className="relative mt-16 lg:mt-20">
          {/* Center/left track + drawn progress */}
          <div className="absolute bottom-2 left-5 top-2 w-px -translate-x-1/2 bg-line lg:left-1/2">
            <div
              ref={progressRef}
              className="absolute inset-0 origin-top scale-y-0 bg-gradient-to-b from-gold via-gold/70 to-gold/0"
            />
          </div>

          <ul className="space-y-10 lg:space-y-0">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <li key={m.year} className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:py-8">
                  {/* Node */}
                  <span className="absolute left-5 top-1 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full border border-gold bg-background lg:left-1/2 lg:top-9">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: EASE.out }}
                    className={cn(
                      "pl-12 lg:pl-0",
                      left ? "lg:col-start-1 lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12 lg:text-left"
                    )}
                  >
                    <span className="font-numeric text-4xl font-semibold text-gold-sheen sm:text-5xl">
                      {m.year}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium text-ink">{m.title}</h3>
                    <p
                      className={cn(
                        "mt-2 max-w-md text-sm leading-relaxed text-ink-dim",
                        left ? "lg:ml-auto" : ""
                      )}
                    >
                      {m.description}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
