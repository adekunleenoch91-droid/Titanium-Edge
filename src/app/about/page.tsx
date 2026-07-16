import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutStory } from "@/components/sections/about/about-story";
import { AboutMissionVision } from "@/components/sections/about/about-mission-vision";
import { AboutValues } from "@/components/sections/about/about-values";
import { AboutLeadership } from "@/components/sections/about/about-leadership";
import { AboutMilestones } from "@/components/sections/about/about-milestones";
import { AboutInnovation } from "@/components/sections/about/about-innovation";
import { AboutSafety } from "@/components/sections/about/about-safety";
import { FinalCta } from "@/components/sections/final-cta";

const description =
  "For nearly three decades, Titanium Edge has turned the world's most ambitious visions into enduring landmarks — uniting master craftsmanship with advanced engineering, safety, and sustainability.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About — Titanium Edge", description, url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutValues />
      <AboutLeadership />
      <AboutMilestones />
      <AboutInnovation />
      <AboutSafety />
      <FinalCta />
    </>
  );
}
