import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services/services-hero";
import { ServicesIntro } from "@/components/sections/services/services-intro";
import { ServicesShowcase } from "@/components/sections/services/services-showcase";
import { ServicesIndustries } from "@/components/sections/services/services-industries";
import { Process } from "@/components/sections/process";
import { ServicesWhy } from "@/components/sections/services/services-why";
import { ServicesFaq } from "@/components/sections/services/services-faq";
import { FinalCta } from "@/components/sections/final-cta";

const description =
  "From commercial and residential to industrial, infrastructure, architecture, and design-build — explore the full spectrum of Titanium Edge's construction and engineering services.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: "Services — Titanium Edge", description, url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <ServicesShowcase />
      <ServicesIndustries />
      <Process />
      <ServicesWhy />
      <ServicesFaq />
      <FinalCta />
    </>
  );
}
