"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navLinks, primaryCta } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Magnetic } from "@/components/ui/magnetic";
import { MobileMenu } from "./mobile-menu";

/** Animated hamburger that morphs to a close (X). */
function MenuToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="relative z-50 grid h-11 w-11 place-items-center rounded-full glass lg:hidden"
    >
      <span className="relative block h-4 w-6">
        <motion.span
          className="absolute left-0 block h-[2px] w-6 rounded-full bg-ink"
          animate={open ? { top: 7, rotate: 45 } : { top: 2, rotate: 0 }}
          transition={{ duration: 0.35, ease: EASE.out }}
        />
        <motion.span
          className="absolute left-0 top-[7px] block h-[2px] w-6 rounded-full bg-ink"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute left-0 block h-[2px] w-6 rounded-full bg-ink"
          animate={open ? { top: 7, rotate: -45 } : { top: 12, rotate: 0 }}
          transition={{ duration: 0.35, ease: EASE.out }}
        />
      </span>
    </button>
  );
}

/** Desktop nav item with gold underline sweep + active indicator. */
function NavItem({ label, href, active }: { label: string; href: string; active: boolean }) {
  return (
    <Link
      href={href}
      className="group relative px-1 py-2 font-numeric text-sm tracking-tight text-ink-muted transition-colors duration-400 hover:text-ink"
      aria-current={active ? "page" : undefined}
    >
      <span className={cn(active && "text-ink")}>{label}</span>
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-luxe-out group-hover:scale-x-100",
          active && "scale-x-100"
        )}
      />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE.out, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-5"
      >
        <div
          className={cn(
            "flex w-full max-w-content items-center justify-between rounded-full px-4 py-2.5 transition-all duration-600 ease-luxe sm:px-5",
            scrolled
              ? "glass-strong shadow-elevated"
              : "border border-transparent bg-transparent"
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                label={link.label}
                href={link.href}
                active={pathname === link.href}
              />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic strength={0.25} className="hidden lg:inline-flex">
              <Link
                href={primaryCta.href}
                className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold-sheen px-6 py-3 font-numeric text-sm font-semibold text-primary shadow-soft transition-all duration-500 hover:shadow-gold-glow-lg"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-luxe-out group-hover/cta:translate-x-[150%]"
                />
                <span className="relative z-10">{primaryCta.label}</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </Link>
            </Magnetic>

            <MenuToggle open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
