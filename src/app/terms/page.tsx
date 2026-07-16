import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/legal/legal-document";
import { termsOfUse } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of the Titanium Edge website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <LegalDocument doc={termsOfUse} />;
}
