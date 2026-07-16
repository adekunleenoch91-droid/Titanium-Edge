import type { Metadata } from "next";
import { ProjectsHero } from "@/components/sections/projects/projects-hero";
import { ProjectsFeatured } from "@/components/sections/projects/projects-featured";
import { ProjectsPortfolio } from "@/components/sections/projects/projects-portfolio";
import { ProjectsCaseStudy } from "@/components/sections/projects/projects-case-study";
import { ProjectsGallery } from "@/components/sections/projects/projects-gallery";
import { ProjectsAchievements } from "@/components/sections/projects/projects-achievements";
import { ProjectsSuccess } from "@/components/sections/projects/projects-success";
import { FinalCta } from "@/components/sections/final-cta";

const description =
  "Explore Titanium Edge's portfolio of landmark commercial, residential, industrial, and infrastructure projects — each an engineered success story.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title: "Projects — Titanium Edge", description, url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsFeatured />
      <ProjectsPortfolio />
      <ProjectsCaseStudy />
      <ProjectsGallery />
      <ProjectsAchievements />
      <ProjectsSuccess />
      <FinalCta />
    </>
  );
}
