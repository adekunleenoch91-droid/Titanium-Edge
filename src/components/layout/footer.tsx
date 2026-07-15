"use client";

import * as React from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import {
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { navLinks, services, site, socials, type SocialKey } from "@/lib/site";
import { Logo } from "./logo";
import { Container } from "./container";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS: Record<SocialKey, LucideIcon> = {
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  x: Twitter,
};

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group/fl relative inline-flex w-fit items-center py-1 font-numeric text-sm text-ink-dim transition-colors duration-400 hover:text-ink"
    >
      {children}
      <span className="absolute -bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-luxe-out group-hover/fl:scale-x-100" />
    </Link>
  );
}

function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    window.setTimeout(() => setDone(false), 3500);
  };

  return (
    <form onSubmit={submit} className="mt-6">
      <div className="group/nl flex items-center gap-2 rounded-full border border-line bg-surface/60 p-1.5 pl-5 transition-all duration-400 focus-within:border-line-gold focus-within:shadow-gold-glow">
        <Mail className="h-4 w-4 shrink-0 text-ink-dim transition-colors group-focus-within/nl:text-gold" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address for newsletter"
          className="w-full bg-transparent py-2 font-numeric text-sm text-ink placeholder:text-ink-faint focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-sheen text-primary transition-transform duration-500 hover:scale-105"
        >
          {done ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
        </button>
      </div>
      <p
        className={cn(
          "mt-3 h-4 font-numeric text-xs transition-opacity duration-400",
          done ? "text-gold opacity-100" : "opacity-0"
        )}
      >
        Thank you — you&rsquo;re on the list.
      </p>
    </form>
  );
}

export function Footer() {
  const lenis = useLenis();
  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.3 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-line bg-background">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-radial-fade opacity-50" />

      <Container className="relative">
        {/* Top */}
        <div className="grid gap-12 py-section-sm lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-body-lg leading-relaxed text-ink-muted">
              Engineering the extraordinary — luxury construction and precision
              engineering for the landmarks of tomorrow.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.key];
                return (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-dim transition-all duration-500 ease-luxe-out hover:-translate-y-0.5 hover:border-line-gold hover:text-gold hover:shadow-gold-glow"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-numeric text-xs uppercase tracking-[0.2em] text-ink-faint">Company</h3>
            <ul className="mt-5 flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-numeric text-xs uppercase tracking-[0.2em] text-ink-faint">Services</h3>
            <ul className="mt-5 flex flex-col gap-1">
              {services.map((s) => (
                <li key={s.title}>
                  <FooterLink href="/services">{s.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-numeric text-xs uppercase tracking-[0.2em] text-ink-faint">Get in Touch</h3>
            <ul className="mt-5 flex flex-col gap-4 font-numeric text-sm text-ink-dim">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-gold">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 hover:text-gold">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="max-w-[16rem]">{site.address}</span>
              </li>
            </ul>
            <Newsletter />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-line py-8 sm:flex-row">
          <p className="font-numeric text-xs text-ink-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
            <button
              onClick={toTop}
              className="group/top inline-flex items-center gap-2 font-numeric text-xs uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-gold"
              aria-label="Back to top"
            >
              Back to Top
              <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-gold transition-all duration-500 group-hover/top:border-line-gold group-hover/top:-translate-y-0.5 group-hover/top:shadow-gold-glow">
                <ArrowUp className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
