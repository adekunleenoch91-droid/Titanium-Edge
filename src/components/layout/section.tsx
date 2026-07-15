import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

/** Vertical rhythm wrapper with the shared section spacing scale. */
export function Section({
  className,
  containerClassName,
  id,
  children,
  contained = true,
}: {
  className?: string;
  containerClassName?: string;
  id?: string;
  children: React.ReactNode;
  contained?: boolean;
}) {
  return (
    <section id={id} className={cn("relative py-section", className)}>
      {contained ? <Container className={containerClassName}>{children}</Container> : children}
    </section>
  );
}
