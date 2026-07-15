"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navLinks, primaryCta, site } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { cn } from "@/lib/utils";

/** Fullscreen premium mobile menu with staggered link reveal. */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  useScrollLock(open);

  // Close on Escape.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE.out }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Backdrop panel */}
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE.out }}
            className="glass-strong absolute inset-0 bg-background/80 backdrop-blur-2xl"
          />

          <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-28">
            <nav className="flex flex-col">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, ease: EASE.out, delay: 0.15 + i * 0.07 }}
                    className="border-b border-line"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-baseline justify-between py-5 font-display text-4xl font-medium tracking-tight transition-colors",
                        active ? "text-gold" : "text-ink hover:text-gold"
                      )}
                    >
                      <span>{link.label}</span>
                      <span className="font-numeric text-sm text-ink-dim">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE.out, delay: 0.5 }}
              className="space-y-6"
            >
              <Link
                href={primaryCta.href}
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-sheen px-8 py-4 font-numeric text-base font-semibold text-primary shadow-gold-glow"
              >
                {primaryCta.label}
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <div className="flex flex-col gap-1 text-center font-numeric text-sm text-ink-dim">
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {site.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
