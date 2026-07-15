import { Hero } from "@/components/sections/hero";
import { IntroTransition } from "@/components/sections/intro-transition";
import { AboutPreview } from "@/components/sections/about-preview";
import { WhyChoose } from "@/components/sections/why-choose";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Stats } from "@/components/sections/stats";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Awards } from "@/components/sections/awards";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroTransition />
      <AboutPreview />
      <WhyChoose />
      <ServicesPreview />
      <Stats />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <Awards />
      <FinalCta />
    </>
  );
}
