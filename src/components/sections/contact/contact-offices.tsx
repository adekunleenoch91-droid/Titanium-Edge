"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, LifeBuoy, type LucideIcon } from "lucide-react";
import { officeCards, type OfficeIconKey } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";

const ICONS: Record<OfficeIconKey, LucideIcon> = {
  hq: MapPin,
  phone: Phone,
  email: Mail,
  hours: Clock,
  emergency: LifeBuoy,
};

export function ContactOffices() {
  return (
    <section id="offices" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/25 via-transparent to-transparent" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Office Information"
          title="Reach us"
          goldTitle="directly"
          className="max-w-2xl"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {officeCards.map((card, i) => {
            const Icon = ICONS[card.icon];
            const Wrapper: React.ElementType = card.href ? "a" : "div";
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: EASE.out, delay: (i % 5) * 0.08 }}
              >
                <Wrapper
                  {...(card.href ? { href: card.href } : {})}
                  className="group/oc flex h-full flex-col rounded-4xl border border-line bg-card/50 p-7 shadow-soft backdrop-blur-xl transition-all duration-500 ease-luxe-out hover:-translate-y-1 hover:border-line-gold hover:shadow-gold-glow"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line-gold bg-gold/5 text-gold transition-transform duration-500 group-hover/oc:scale-110">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-medium text-ink">{card.title}</h3>
                  <div className="mt-3 space-y-1">
                    {card.lines.map((line, j) => (
                      <p
                        key={line}
                        className={cnLine(j)}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function cnLine(index: number) {
  return index === 0
    ? "font-numeric text-sm text-ink transition-colors duration-500 group-hover/oc:text-gold"
    : "font-numeric text-xs text-ink-dim";
}
