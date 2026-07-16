"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type AccordionEntry = { question: string; answer: string };

/** Premium single-open accordion with smooth grid-rows expand + icon rotation. */
export function Accordion({ items, defaultOpen = 0 }: { items: AccordionEntry[]; defaultOpen?: number | null }) {
  const [open, setOpen] = React.useState<number | null>(defaultOpen);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `acc-panel-${i}`;
        const buttonId = `acc-button-${i}`;
        return (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE.out, delay: (i % 6) * 0.05 }}
            className={cn(
              "overflow-hidden rounded-3xl border transition-colors duration-500",
              isOpen ? "border-line-gold bg-card/60" : "border-line bg-card/30 hover:border-line-strong"
            )}
          >
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
            >
              <span className="font-display text-lg font-medium text-ink sm:text-xl">{item.question}</span>
              <span
                className={cn(
                  "grid h-9 w-9 shrink-0 place-items-center rounded-full border text-gold transition-all duration-500 ease-luxe-out",
                  isOpen ? "rotate-45 border-line-gold bg-gold/10" : "border-line"
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-500 ease-luxe-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl px-6 pb-7 text-body-lg leading-relaxed text-ink-muted sm:px-8">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
