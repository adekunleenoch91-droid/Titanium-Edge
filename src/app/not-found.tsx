import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[78svh] items-center justify-center overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade opacity-70" />

      <div className="relative mx-auto max-w-xl px-gutter pt-24 text-center">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="mt-6 font-display text-display-lg font-semibold leading-[1.02] text-ink">
          This page <span className="text-gold-sheen">isn&rsquo;t built yet</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-body-lg text-ink-muted">
          The page you&rsquo;re looking for has moved or no longer exists. Let&rsquo;s
          get you back on solid ground.
        </p>
        <div className="mt-9 flex justify-center">
          <Link
            href="/"
            className="group/btn relative inline-flex h-14 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gold-sheen px-9 font-numeric text-base font-semibold text-primary shadow-soft transition-all duration-500 ease-luxe-out hover:-translate-y-0.5 hover:shadow-gold-glow-lg"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-500 group-hover/btn:-translate-x-0.5" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
