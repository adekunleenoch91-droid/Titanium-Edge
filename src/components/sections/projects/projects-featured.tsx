"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { featuredLandmarks, type FeaturedProject } from "@/lib/site";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { TextReveal } from "@/components/animation/text-reveal";
import { Parallax } from "@/components/animation/parallax";
import { cn } from "@/lib/utils";

function TiltImage({ project }: { project: FeaturedProject }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 140, damping: 18, mass: 0.5 });
  const sry = useSpring(ry, { stiffness: 140, damping: 18, mass: 0.5 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 7);
    rx.set((0.5 - (e.clientY - r.top) / r.height) * 7);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <Parallax speed={6} className="perspective">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        data-cursor="View"
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: DURATION.cinematic, ease: EASE.out }}
        className="group/pimg relative aspect-[4/3] w-full overflow-hidden rounded-4xl border border-line shadow-float will-transform [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-background" />
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-luxe-out group-hover/pimg:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full glass px-4 py-1.5 font-numeric text-xs uppercase tracking-[0.16em] text-gold">
          {project.category}
        </span>
        <span className="absolute right-5 top-5 rounded-full glass px-4 py-1.5 font-numeric text-xs tabular-nums text-ink-muted">
          {project.year}
        </span>
      </motion.div>
    </Parallax>
  );
}

function FeaturedRow({ project, index }: { project: FeaturedProject; index: number }) {
  const imageRight = index % 2 === 1;
  return (
    <div className="grid items-center gap-x-14 gap-y-8 lg:grid-cols-2 lg:gap-x-20">
      <div className={cn(imageRight && "lg:order-2")}>
        <TiltImage project={project} />
      </div>

      <div className={cn(imageRight && "lg:order-1")}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE.out }}
          className="flex items-center gap-3 font-numeric text-xs uppercase tracking-[0.18em] text-ink-muted"
        >
          <MapPin className="h-3.5 w-3.5 text-gold" />
          {project.location}
        </motion.div>

        <h3 className="mt-4 font-display text-display-sm font-medium leading-tight text-ink">
          <TextReveal text={project.title} />
        </h3>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.1 }}
          className="mt-5 max-w-xl text-body-lg text-ink-muted"
        >
          {project.overview}
        </motion.p>

        {/* Metrics */}
        <div className="mt-8 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-3xl border border-line bg-line">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex flex-col bg-background/95 px-4 py-5">
              <span className="font-numeric text-xl font-semibold text-ink sm:text-2xl">{m.value}</span>
              <span className="mt-1 font-numeric text-[0.65rem] uppercase tracking-[0.14em] text-ink-dim">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE.out, delay: 0.2 }}
          className="mt-9"
        >
          <Link
            href="/contact"
            className="group/ep inline-flex items-center gap-3 font-numeric text-sm text-ink transition-colors hover:text-gold"
          >
            Explore Project
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-gold transition-all duration-500 group-hover/ep:border-line-gold group-hover/ep:bg-gold/10">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/ep:translate-x-0.5 group-hover/ep:-translate-y-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export function ProjectsFeatured() {
  return (
    <section id="featured" className="relative overflow-hidden bg-background py-section">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Featured Landmarks"
          title="Flagship projects that"
          goldTitle="reshaped skylines"
          className="max-w-2xl"
        />

        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-32">
          {featuredLandmarks.map((p, i) => (
            <FeaturedRow key={p.title} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
