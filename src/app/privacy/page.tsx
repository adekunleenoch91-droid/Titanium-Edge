import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/legal/legal-document";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Titanium Edge collects, uses, and protects the information you share through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <LegalDocument doc={privacyPolicy} />;
}
