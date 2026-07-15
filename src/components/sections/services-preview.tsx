"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { services } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: EASE.out, delay: (index % 3) * 0.09 }}
    >
      <Link
        href="/services"
        className="group/svc relative flex h-full flex-col overflow-hidden rounded-4xl border border-line bg-card/50 backdrop-blur-xl transition-all duration-500 ease-luxe-out hover:-translate-y-1.5 hover:border-line-gold hover:shadow-gold-glow"
      >
        {/* Image */}
        <div className="relative aspect-[16/11] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-background" />
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-90 transition-transform duration-700 ease-luxe-out group-hover/svc:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          {/* Light shift on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 to-gold/0 opacity-0 transition-opacity duration-500 group-hover/svc:from-gold/10 group-hover/svc:opacity-100" />
          <span className="absolute left-5 top-5 font-numeric text-xs tabular-nums text-ink-muted">
            0{index + 1}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-display text-xl font-medium text-ink transition-colors duration-500 group-hover/svc:text-gold">
            {service.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-dim">{service.summary}</p>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
            <span className="font-numeric text-xs uppercase tracking-[0.16em] text-ink-muted">
              View Service
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-gold transition-all duration-500 group-hover/svc:border-line-gold group-hover/svc:bg-gold/10">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/svc:translate-x-0.5 group-hover/svc:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesPreview() {
  return (
    <section id="services-preview" className="relative overflow-hidden bg-background py-section">
      {/* Soft moving light gradient */}
      <div className="pointer-events-none absolute right-0 top-0 h-[40rem] w-[40rem] translate-x-1/3 rounded-full bg-radial-fade opacity-60" />

      <Container className="relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What We Build"
            title="Full-spectrum construction,"
            goldTitle="delivered end to end"
            className="max-w-2xl"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE.out, delay: 0.1 }}
          >
            <Link
              href="/services"
              className="group/all inline-flex items-center gap-2 font-numeric text-sm text-ink-muted transition-colors hover:text-gold"
            >
              All Services
              <ArrowRight className="h-4 w-4 text-gold transition-transform duration-500 group-hover/all:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
