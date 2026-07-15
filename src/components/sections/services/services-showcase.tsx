"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { coreServices, type CoreService } from "@/lib/site";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { TextReveal } from "@/components/animation/text-reveal";
import { Parallax } from "@/components/animation/parallax";
import { cn } from "@/lib/utils";

function ServiceImage({ service }: { service: CoreService }) {
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
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: DURATION.cinematic, ease: EASE.out }}
        className="group/simg relative aspect-[4/3] w-full overflow-hidden rounded-4xl border border-line shadow-float will-transform [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-background" />
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-luxe-out group-hover/simg:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-gold/0 to-gold/0 opacity-0 transition-opacity duration-500 group-hover/simg:from-gold/10 group-hover/simg:opacity-100" />
        {/* Blueprint corner */}
        <svg aria-hidden viewBox="0 0 100 100" className="absolute right-4 top-4 h-16 w-16 text-gold/40">
          <path d="M98 2 L98 46 M98 2 L54 2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>
    </Parallax>
  );
}

function ServiceRow({ service, index }: { service: CoreService; index: number }) {
  const imageRight = index % 2 === 1;
  return (
    <div className="grid items-center gap-x-14 gap-y-8 lg:grid-cols-2 lg:gap-x-20">
      <div className={cn(imageRight && "lg:order-2")}>
        <ServiceImage service={service} />
      </div>

      <div className={cn(imageRight && "lg:order-1")}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE.out }}
          className="flex items-center gap-3 font-numeric text-xs uppercase tracking-[0.2em] text-gold"
        >
          <span className="h-px w-8 bg-gold/60" />
          Service {String(index + 1).padStart(2, "0")}
        </motion.div>

        <h3 className="mt-5 font-display text-display-sm font-medium leading-tight text-ink">
          <TextReveal text={service.title} />
        </h3>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.1 }}
          className="mt-5 max-w-xl text-body-lg text-ink-muted"
        >
          {service.description}
        </motion.p>

        <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
          {service.benefits.map((b, i) => (
            <motion.li
              key={b}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: EASE.out, delay: 0.15 + i * 0.08 }}
              className="flex items-center gap-2.5 font-numeric text-sm text-ink-muted"
            >
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line-gold text-gold">
                <Check className="h-3 w-3" />
              </span>
              {b}
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE.out, delay: 0.2 }}
          className="mt-9"
        >
          <Link
            href="/contact"
            className="group/lm inline-flex items-center gap-3 font-numeric text-sm text-ink transition-colors hover:text-gold"
          >
            Learn More
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-gold transition-all duration-500 group-hover/lm:border-line-gold group-hover/lm:bg-gold/10">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/lm:translate-x-0.5 group-hover/lm:-translate-y-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export function ServicesShowcase() {
  return (
    <section id="core-services" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Core Services"
          title="Eight disciplines,"
          goldTitle="one standard of excellence"
          className="max-w-2xl"
        />

        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-32">
          {coreServices.map((s, i) => (
            <ServiceRow key={s.title} service={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
