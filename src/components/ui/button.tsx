"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Titanium Edge button system.
 * Variants share one shape language; the primary carries the gold sheen.
 */
export const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-numeric font-medium tracking-tight transition-all duration-500 ease-luxe-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gold-sheen text-primary shadow-soft hover:shadow-gold-glow-lg hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "glass text-ink hover:border-line-gold hover:shadow-gold-glow hover:-translate-y-0.5",
        outline:
          "border border-line-strong text-ink hover:border-gold hover:text-gold hover:shadow-gold-glow",
        ghost: "text-ink-muted hover:text-gold",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-[0.95rem]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Renders an animated sheen sweep on hover (primary/secondary). */
  sheen?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, sheen = true, children, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>
        {sheen && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-luxe-out group-hover/btn:translate-x-[150%]"
          />
        )}
        <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
