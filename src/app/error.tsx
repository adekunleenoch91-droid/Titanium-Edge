"use client";

import * as React from "react";
import Link from "next/link";
import { RotateCcw, ArrowLeft } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Surface the error for monitoring; no sensitive data is shown to the user.
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-[78svh] items-center justify-center overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade opacity-70" />

      <div className="relative mx-auto max-w-xl px-gutter pt-24 text-center">
        <p className="eyebrow justify-center">Something went wrong</p>
        <h1 className="mt-6 font-display text-display-lg font-semibold leading-[1.02] text-ink">
          A momentary <span className="text-gold-sheen">structural fault</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-body-lg text-ink-muted">
          We hit an unexpected error rendering this page. Please try again — if it
          persists, our team is one message away.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="group/btn relative inline-flex h-14 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gold-sheen px-9 font-numeric text-base font-semibold text-primary shadow-soft transition-all duration-500 ease-luxe-out hover:-translate-y-0.5 hover:shadow-gold-glow-lg"
          >
            <RotateCcw className="h-5 w-5 transition-transform duration-500 group-hover/btn:-rotate-45" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full glass px-9 font-numeric text-base font-medium text-ink transition-all duration-500 ease-luxe-out hover:-translate-y-0.5 hover:border-line-gold hover:shadow-gold-glow"
          >
            <ArrowLeft className="h-5 w-5 text-gold" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
