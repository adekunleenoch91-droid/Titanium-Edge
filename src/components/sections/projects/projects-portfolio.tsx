"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { portfolioProjects, portfolioCategories, type PortfolioItem } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, ease: EASE.out }}
    >
      <Link
        href="/contact"
        className="group/pf relative block overflow-hidden rounded-4xl border border-line bg-card/50 transition-all duration-500 ease-luxe-out hover:-translate-y-1.5 hover:border-line-gold hover:shadow-gold-glow"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-background" />
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-luxe-out group-hover/pf:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          {/* Hover gold wash */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/pf:opacity-100 bg-gradient-to-t from-gold/15 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full glass px-3.5 py-1.5 font-numeric text-[0.7rem] uppercase tracking-[0.14em] text-gold">
            {item.category}
          </span>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
            <div>
              <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-1 flex items-center gap-1.5 font-numeric text-xs text-ink-dim">
                <MapPin className="h-3 w-3 text-gold" />
                {item.location}
              </p>
            </div>
            <span className="grid h-9 w-9 shrink-0 translate-y-2 place-items-center rounded-full border border-line-gold bg-gold/10 text-gold opacity-0 transition-all duration-500 group-hover/pf:translate-y-0 group-hover/pf:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectsPortfolio() {
  const [active, setActive] = React.useState<string>("All");
  const filtered =
    active === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/25 via-transparent to-transparent" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Full Portfolio"
          title="Explore the work by"
          goldTitle="the category you need"
          className="max-w-2xl"
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2.5 lg:mt-12">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-5 py-2.5 font-numeric text-sm transition-all duration-400 ease-luxe-out",
                active === cat
                  ? "border-line-gold bg-gold/10 text-gold shadow-gold-glow"
                  : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <PortfolioCard key={item.title} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
