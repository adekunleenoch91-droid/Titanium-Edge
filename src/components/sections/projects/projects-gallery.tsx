"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { galleryImages } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { cn } from "@/lib/utils";

const ASPECT: Record<string, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

function Lightbox({
  index,
  onClose,
  onNav,
}: {
  index: number;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
}) {
  useScrollLock(true);
  const img = galleryImages[index];

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE.out }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <button
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-full glass text-ink transition-colors hover:text-gold"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onNav(-1);
        }}
        className="absolute left-4 z-10 grid h-12 w-12 place-items-center rounded-full glass text-ink transition-colors hover:text-gold sm:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNav(1);
        }}
        className="absolute right-4 z-10 grid h-12 w-12 place-items-center rounded-full glass text-ink transition-colors hover:text-gold sm:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: EASE.out }}
        className="relative mx-4 aspect-[3/2] w-full max-w-5xl overflow-hidden rounded-3xl border border-line shadow-float"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-background" />
        <Image src={img.src} alt={img.alt} fill sizes="90vw" className="object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-6">
          <p className="font-numeric text-sm text-ink-muted">
            {img.alt} · {index + 1} / {galleryImages.length}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsGallery() {
  const [open, setOpen] = React.useState<number | null>(null);

  const nav = React.useCallback((dir: 1 | -1) => {
    setOpen((cur) => {
      if (cur === null) return cur;
      return (cur + dir + galleryImages.length) % galleryImages.length;
    });
  }, []);

  return (
    <section id="gallery" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Gallery"
          title="A closer look at"
          goldTitle="the craft"
          align="center"
          className="mx-auto items-center text-center"
        />

        <div className="mt-14 gap-5 [column-fill:_balance] sm:columns-2 lg:mt-16 lg:columns-3">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE.out, delay: (i % 3) * 0.08 }}
              onClick={() => setOpen(i)}
              className="group/g relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl border border-line shadow-soft transition-all duration-500 ease-luxe-out hover:border-line-gold hover:shadow-gold-glow"
            >
              <div className={cn("relative w-full", ASPECT[img.span])}>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-background" />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-luxe-out group-hover/g:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 transition-opacity duration-500 group-hover/g:opacity-100" />
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass text-gold opacity-0 transition-all duration-500 group-hover/g:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {open !== null && <Lightbox index={open} onClose={() => setOpen(null)} onNav={nav} />}
      </AnimatePresence>
    </section>
  );
}
