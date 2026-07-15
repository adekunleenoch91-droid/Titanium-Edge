"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, MoveDown } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { EASE } from "@/lib/motion";
import { media, primaryCta, secondaryCta, trustIndicators } from "@/lib/site";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { TextReveal } from "@/components/animation/text-reveal";
import { Counter } from "@/components/animation/counter";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

// 3D is client-only and lazy — never blocks first paint.
const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
  loading: () => null,
});

const heroStats = [
  { value: 240, suffix: "+", label: "Projects Delivered" },
  { value: 28, suffix: " yrs", label: "Engineering Legacy" },
  { value: 40, suffix: "+", label: "Countries Served" },
  { value: 99, suffix: "%", label: "Client Retention" },
];

export function Hero() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const bgRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

  const { x, y } = useMouseParallax();

  // Layered mouse-parallax depth.
  const bgX = useTransform(x, [-0.5, 0.5], [18, -18]);
  const bgY = useTransform(y, [-0.5, 0.5], [12, -12]);
  const midX = useTransform(x, [-0.5, 0.5], [-28, 28]);
  const midY = useTransform(y, [-0.5, 0.5], [-18, 18]);

  // Cinematic scroll-exit: content lifts + fades, background scales, grid dissolves.
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      tl.to(contentRef.current, { yPercent: -22, opacity: 0, ease: "none" }, 0)
        .to(bgRef.current, { scale: 1.14, ease: "none" }, 0)
        .to(gridRef.current, { opacity: 0, yPercent: 12, ease: "none" }, 0);
    }, root);

    return () => ctx.revert();
  }, []);

  React.useEffect(() => {
    // Ensure triggers measure correctly after the hero mounts.
    ScrollTrigger.refresh();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-background"
    >
      {/* Background photograph */}
      <motion.div
        ref={bgRef}
        style={{ x: bgX, y: bgY }}
        className="absolute inset-[-6%] z-0 will-transform"
      >
        <Image
          src={media.hero.src}
          alt={media.hero.alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
      </motion.div>

      {/* Tonal gradients for readability + depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-hero-vignette" />

      {/* Animated blueprint grid */}
      <div ref={gridRef} className="absolute inset-0 z-[2] blueprint-grid animate-grid-pan opacity-70" />

      {/* 3D layer */}
      <motion.div
        style={{ x: midX, y: midY }}
        className="pointer-events-none absolute inset-0 z-[3] will-transform"
      >
        <React.Suspense fallback={null}>
          <HeroScene />
        </React.Suspense>
      </motion.div>

      {/* Sweeping light beam */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-1/3 overflow-hidden">
        <div className="absolute -inset-y-10 left-0 w-40 rotate-12 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 blur-2xl animate-beam-sweep" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-content px-gutter pt-32 pb-16 sm:pt-36 lg:pt-40"
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE.out, delay: 0.35 }}
            className="eyebrow mb-7"
          >
            Luxury Construction &amp; Engineering
          </motion.p>

          <h1 className="font-display text-display-xl font-semibold text-ink">
            <span className="block">
              <TextReveal text="We Build the" animateOnMount delay={0.45} />
            </span>
            <span className="block">
              <TextReveal
                text="Landmarks of Tomorrow"
                wordClassName="text-gold-sheen"
                animateOnMount
                delay={0.62}
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE.out, delay: 1 }}
            className="mt-8 max-w-xl text-body-lg text-ink-muted"
          >
            Titanium Edge unites precision engineering, advanced technology, and
            master craftsmanship to deliver commercial, residential, and industrial
            projects built to define skylines and endure for generations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE.out, delay: 1.15 }}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
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
                <span className="relative z-10">{primaryCta.label}</span>
                <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </Magnetic>

            <Magnetic strength={0.25}>
              <Link
                href={secondaryCta.href}
                className="group/btn2 relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full glass px-9 font-numeric text-base font-medium text-ink transition-all duration-500 ease-luxe-out hover:-translate-y-0.5 hover:border-line-gold hover:shadow-gold-glow"
              >
                <span className="relative z-10">{secondaryCta.label}</span>
                <ArrowRight className="h-5 w-5 text-gold transition-transform duration-500 group-hover/btn2:translate-x-1" />
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE.out, delay: 1.4 }}
          className="mt-16 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:mt-20 lg:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-numeric text-4xl font-semibold text-ink sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-2 font-numeric text-xs uppercase tracking-[0.18em] text-ink-dim">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE.out, delay: 1.7 }}
        className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-line bg-background/40 backdrop-blur-md md:block"
      >
        <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-gutter py-4">
          <span className="flex items-center gap-2 font-numeric text-xs text-ink-dim">
            <MoveDown className="h-4 w-4 animate-scroll-hint text-gold" />
            Scroll to explore
          </span>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 font-numeric text-xs uppercase tracking-[0.16em] text-ink-muted">
            {trustIndicators.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Mobile scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 md:hidden">
        <MoveDown className="h-5 w-5 animate-scroll-hint text-gold" />
      </div>
    </section>
  );
}
