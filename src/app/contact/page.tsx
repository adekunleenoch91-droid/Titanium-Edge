import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactIntro } from "@/components/sections/contact/contact-intro";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactOffices } from "@/components/sections/contact/contact-offices";
import { ContactMap } from "@/components/sections/contact/contact-map";
import { ContactFaq } from "@/components/sections/contact/contact-faq";
import { FinalCta } from "@/components/sections/final-cta";

const description =
  "Begin your next landmark with Titanium Edge. Book a consultation for commercial, residential, industrial, or infrastructure projects — our team responds within 24 hours.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — Titanium Edge", description, url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactIntro />
      <ContactForm />
      <ContactOffices />
      <ContactMap />
      <ContactFaq />
      <FinalCta />
    </>
  );
}
