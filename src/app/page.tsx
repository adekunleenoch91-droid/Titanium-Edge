import { Hero } from "@/components/sections/hero";
import { IntroTransition } from "@/components/sections/intro-transition";
import { AboutPreview } from "@/components/sections/about-preview";
import { WhyChoose } from "@/components/sections/why-choose";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Stats } from "@/components/sections/stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroTransition />
      <AboutPreview />
      <WhyChoose />
      <ServicesPreview />
      <Stats />
    </>
  );
}
