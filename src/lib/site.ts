/**
 * Titanium Edge — Brand & Site Configuration
 * Single source of truth for navigation, brand voice, and imagery.
 */

export const site = {
  name: "Titanium Edge",
  shortName: "Titanium Edge",
  tagline: "Engineering the Extraordinary",
  description:
    "Titanium Edge is a luxury construction and engineering company delivering world-class commercial, residential, and industrial landmarks with precision, innovation, and uncompromising craftsmanship.",
  url: "https://titaniumedge.com",
  email: "projects@titaniumedge.com",
  phone: "+1 (212) 555-0184",
  locale: "en_US",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = { label: "Start Your Project", href: "/contact" };
export const secondaryCta = { label: "Explore Our Projects", href: "/projects" };

/**
 * Curated real construction photography (approved remote hosts only).
 * Centralised so imagery stays consistent and is trivial to swap.
 */
export const media = {
  hero: {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80",
    alt: "Luxury commercial tower under construction against a dramatic sky",
  },
  heroAlt: {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80",
    alt: "Tower cranes rising over a modern skyscraper development at dusk",
  },
} as const;

/** Hero trust indicators shown beneath the primary statistics. */
export const trustIndicators: string[] = [
  "ISO 9001 Certified",
  "LEED Accredited",
  "40+ Countries Delivered",
  "Zero-Harm Safety Standard",
];

/* ------------------------------------------------------------------ *
 * Home — About Preview
 * ------------------------------------------------------------------ */
export const aboutPreview = {
  eyebrow: "Who We Are",
  heading: "A legacy engineered into every structure we raise",
  intro:
    "For nearly three decades, Titanium Edge has partnered with visionaries to transform ambitious ideas into landmarks — uniting precision engineering with the artistry of luxury construction.",
  description:
    "From structural steel to the final fit-out, every project is delivered with obsessive attention to safety, innovation, and craftsmanship. We don't just meet standards; we set them — and we build partnerships designed to endure as long as the structures themselves.",
  pillars: [
    "Engineering Excellence",
    "Luxury Construction",
    "Innovation",
    "Precision",
    "Safety First",
    "Lasting Partnerships",
  ],
  image: {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
    alt: "Architect reviewing structural plans on a high-rise construction site",
  },
  stat: { value: 28, suffix: "+", label: "Years of engineering leadership" },
};

/* ------------------------------------------------------------------ *
 * Home — Why Choose Titanium Edge
 * ------------------------------------------------------------------ */
export type IconKey =
  | "precision"
  | "award"
  | "sustainable"
  | "technology"
  | "delivery"
  | "safety";

export type Feature = {
  icon: IconKey;
  title: string;
  description: string;
};

export const whyChoose: Feature[] = [
  {
    icon: "precision",
    title: "Engineering Precision",
    description:
      "Millimetre-accurate execution backed by advanced modelling and rigorous structural analysis on every build.",
  },
  {
    icon: "award",
    title: "Award-Level Craftsmanship",
    description:
      "Master trades and finishing specialists deliver detailing worthy of the world's most demanding clients.",
  },
  {
    icon: "sustainable",
    title: "Sustainable Construction",
    description:
      "LEED-accredited methods and responsibly sourced materials reduce impact without compromising luxury.",
  },
  {
    icon: "technology",
    title: "Innovative Technology",
    description:
      "BIM, digital twins, and on-site automation keep complex projects coordinated, transparent, and on plan.",
  },
  {
    icon: "delivery",
    title: "On-Time Delivery",
    description:
      "Disciplined program management and proven supply chains bring landmark projects in on schedule.",
  },
  {
    icon: "safety",
    title: "Safety Excellence",
    description:
      "A zero-harm culture and industry-leading protocols protect our people and every stakeholder on site.",
  },
];

/* ------------------------------------------------------------------ *
 * Home — Services Preview
 * ------------------------------------------------------------------ */
export type Service = {
  title: string;
  summary: string;
  image: { src: string; alt: string };
};

export const services: Service[] = [
  {
    title: "Commercial Construction",
    summary: "Headquarters, towers, and mixed-use developments built to define skylines.",
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern commercial glass tower",
    },
  },
  {
    title: "Residential Construction",
    summary: "Private estates and luxury residences crafted for uncompromising living.",
    image: {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury contemporary residence",
    },
  },
  {
    title: "Industrial Construction",
    summary: "Plants, logistics hubs, and facilities engineered for performance at scale.",
    image: {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      alt: "Engineer inside a large industrial facility",
    },
  },
  {
    title: "Architecture",
    summary: "Concept-to-detail design that fuses bold form with structural intelligence.",
    image: {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      alt: "Tower cranes over an architectural development",
    },
  },
  {
    title: "Infrastructure",
    summary: "Bridges, transit, and civil works that connect and elevate communities.",
    image: {
      src: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80",
      alt: "Large bridge infrastructure under construction",
    },
  },
  {
    title: "Construction Management",
    summary: "End-to-end program delivery, procurement, and quality assurance under one roof.",
    image: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      alt: "Project team reviewing construction plans",
    },
  },
];

/* ------------------------------------------------------------------ *
 * Home — Animated Statistics
 * ------------------------------------------------------------------ */
export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const homeStats: Stat[] = [
  { value: 28, suffix: "+", label: "Years of Experience" },
  { value: 240, suffix: "+", label: "Projects Completed" },
  { value: 850, suffix: "+", label: "Construction Professionals" },
  { value: 40, suffix: "+", label: "Cities Served" },
  { value: 32, label: "Industry Awards" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];
