"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { featuredProjects, type Project } from "@/lib/site";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { TextReveal } from "@/components/animation/text-reveal";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 140, damping: 18, mass: 0.5 });
  const sry = useSpring(ry, { stiffness: 140, damping: 18, mass: 0.5 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 8);
    rx.set((0.5 - py) * 8);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: DURATION.slow, ease: EASE.out }}
      className={cn("perspective", index % 2 === 1 && "lg:mt-24")}
    >
      <motion.a
        ref={ref}
        href="/projects"
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
        className="group/proj relative block overflow-hidden rounded-4xl border border-line shadow-float transition-all duration-500 ease-luxe-out will-transform [transform-style:preserve-3d] hover:border-line-gold hover:shadow-gold-glow-lg"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-background" />
          <motion.div
            initial={{ scale: 1.18 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: EASE.out }}
            className="absolute inset-0"
          >
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-luxe-out group-hover/proj:scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

          {/* Category badge */}
          <span className="absolute left-5 top-5 rounded-full glass px-4 py-1.5 font-numeric text-xs uppercase tracking-[0.16em] text-gold">
            {project.category}
          </span>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-x-0 bottom-0 p-7 [transform:translateZ(50px)] sm:p-9">
          <div className="flex items-center gap-2 font-numeric text-xs uppercase tracking-[0.18em] text-ink-muted">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            {project.location}
          </div>

          <h3 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
            <TextReveal text={project.name} />
          </h3>

          {/* Description: always visible on touch/small screens; hover-expands on lg+ */}
          <div className="mt-4 grid grid-rows-[1fr] opacity-100 transition-all duration-500 ease-luxe-out lg:mt-0 lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover/proj:mt-4 lg:group-hover/proj:grid-rows-[1fr] lg:group-hover/proj:opacity-100">
            <p className="overflow-hidden max-w-md text-sm leading-relaxed text-ink-dim">
              {project.description}
            </p>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 font-numeric text-sm text-ink transition-colors group-hover/proj:text-gold">
            View Project
            <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-gold transition-all duration-500 group-hover/proj:border-line-gold group-hover/proj:bg-gold/10">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/proj:translate-x-0.5 group-hover/proj:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="featured-projects" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-radial-fade opacity-60" />

      <Container className="relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Landmarks that carry"
            goldTitle="our signature"
            className="max-w-2xl"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE.out, delay: 0.1 }}
          >
            <Link
              href="/projects"
              className="group/all inline-flex items-center gap-2 font-numeric text-sm text-ink-muted transition-colors hover:text-gold"
            >
              All Projects
              <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-500 group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
