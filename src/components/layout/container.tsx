import * as React from "react";
import { cn } from "@/lib/utils";

/** Centered max-width content column with fluid gutters. */
export function Container({
  className,
  as: Tag = "div",
  children,
}: {
  className?: string;
  as?: React.ElementType;
  children: React.ReactNode;
}) {
  return React.createElement(
    Tag,
    { className: cn("mx-auto w-full max-w-content px-gutter", className) },
    children
  );
}
