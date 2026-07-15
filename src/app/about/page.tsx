import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutStory } from "@/components/sections/about/about-story";
import { AboutPillars } from "@/components/sections/about/about-pillars";
import { AboutMilestones } from "@/components/sections/about/about-milestones";
import { AboutLeadership } from "@/components/sections/about/about-leadership";
import { Awards } from "@/components/sections/awards";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "For nearly three decades, Titanium Edge has turned the world's most ambitious visions into enduring landmarks — uniting master craftsmanship with advanced engineering.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutPillars />
      <AboutMilestones />
      <AboutLeadership />
      <Awards />
      <FinalCta />
    </>
  );
}
