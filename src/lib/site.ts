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
  address: "1 Titanium Plaza, 48th Floor, New York, NY 10018",
  locale: "en_US",
} as const;

export type SocialKey = "linkedin" | "instagram" | "youtube" | "x";
export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { key: "instagram", label: "Instagram", href: "https://instagram.com" },
  { key: "youtube", label: "YouTube", href: "https://youtube.com" },
  { key: "x", label: "X", href: "https://x.com" },
];

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

/* ------------------------------------------------------------------ *
 * Home — Featured Projects
 * ------------------------------------------------------------------ */
export type Project = {
  name: string;
  location: string;
  category: string;
  description: string;
  image: { src: string; alt: string };
};

export const featuredProjects: Project[] = [
  {
    name: "Aurelia Financial Tower",
    location: "New York, USA",
    category: "Commercial",
    description:
      "A 62-storey headquarters clad in fluted bronze glass, engineered for LEED Platinum performance and a column-free trading floor.",
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      alt: "Aurelia Financial Tower — commercial high-rise",
    },
  },
  {
    name: "The Meridian Residences",
    location: "Dubai, UAE",
    category: "Residential",
    description:
      "Two sculpted residential towers with sky gardens, private elevators, and a suspended infinity pool bridging both crowns.",
    image: {
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
      alt: "The Meridian Residences — luxury residential towers",
    },
  },
  {
    name: "Northgate Logistics Park",
    location: "Rotterdam, NL",
    category: "Industrial",
    description:
      "A 340,000 m² automated logistics campus with robotic fulfilment, solar canopies, and rail-served distribution.",
    image: {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
      alt: "Northgate Logistics Park — industrial facility",
    },
  },
  {
    name: "Vantage Cable Bridge",
    location: "Lisbon, PT",
    category: "Infrastructure",
    description:
      "A 1.2 km cable-stayed crossing with twin diamond pylons, designed for seismic resilience and record clear spans.",
    image: {
      src: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1600&q=80",
      alt: "Vantage Cable Bridge — infrastructure landmark",
    },
  },
];

/* ------------------------------------------------------------------ *
 * Home — Construction Process
 * ------------------------------------------------------------------ */
export type ProcessIconKey =
  | "consultation"
  | "planning"
  | "design"
  | "engineering"
  | "construction"
  | "quality"
  | "delivery";

export type ProcessStage = {
  icon: ProcessIconKey;
  title: string;
  description: string;
};

export const processStages: ProcessStage[] = [
  {
    icon: "consultation",
    title: "Consultation",
    description: "We listen first — aligning on vision, budget, and ambition before a single line is drawn.",
  },
  {
    icon: "planning",
    title: "Planning",
    description: "Feasibility, programming, and risk modelling establish a clear, deliverable roadmap.",
  },
  {
    icon: "design",
    title: "Design",
    description: "Architecture and interiors are shaped into a cohesive, buildable expression of the brief.",
  },
  {
    icon: "engineering",
    title: "Engineering",
    description: "Structural, MEP, and digital-twin engineering resolve every system with precision.",
  },
  {
    icon: "construction",
    title: "Construction",
    description: "Master trades execute on site under disciplined program and quality control.",
  },
  {
    icon: "quality",
    title: "Quality Assurance",
    description: "Independent inspection and commissioning verify every element against exacting standards.",
  },
  {
    icon: "delivery",
    title: "Project Delivery",
    description: "A seamless handover — documented, warrantied, and supported for the life of the asset.",
  },
];

/* ------------------------------------------------------------------ *
 * Home — Testimonials
 * ------------------------------------------------------------------ */
export type Testimonial = {
  name: string;
  position: string;
  company: string;
  rating: number;
  review: string;
  photo?: { src: string; alt: string };
};

export const testimonials: Testimonial[] = [
  {
    name: "Eleanor Whitfield",
    position: "Chief Development Officer",
    company: "Harborline Group",
    rating: 5,
    review:
      "Titanium Edge delivered our flagship tower ahead of schedule and beyond specification. Their engineering discipline and finish quality are simply in a class of their own.",
  },
  {
    name: "Marcus Delacroix",
    position: "Managing Partner",
    company: "Delacroix Capital",
    rating: 5,
    review:
      "Every phase felt effortless because their planning was flawless. The transparency and communication gave our investors complete confidence throughout.",
  },
  {
    name: "Aisha Rahman",
    position: "Director of Infrastructure",
    company: "Meridian Authority",
    rating: 5,
    review:
      "A complex, high-risk civil project handled with remarkable calm and precision. Safety and quality were never compromised for speed.",
  },
  {
    name: "Johan Berg",
    position: "CEO",
    company: "Northgate Industries",
    rating: 5,
    review:
      "The most technically capable contractor we have worked with. Their digital-twin approach saved months and eliminated costly surprises.",
  },
  {
    name: "Sofia Marchetti",
    position: "Principal Architect",
    company: "Studio Marchetti",
    rating: 5,
    review:
      "They protected the integrity of our design at every turn. Craftsmanship of this calibre is exceptionally rare in construction today.",
  },
];

/* ------------------------------------------------------------------ *
 * Home — Awards & Certifications
 * ------------------------------------------------------------------ */
export type AwardIconKey = "trophy" | "safety" | "quality" | "engineering" | "sustainability";

export type Award = {
  icon: AwardIconKey;
  title: string;
  detail: string;
};

export const awards: Award[] = [
  { icon: "trophy", title: "Global Builder of the Year", detail: "International Construction Awards" },
  { icon: "safety", title: "Zero-Harm Safety Standard", detail: "OHSAS 45001 Certified" },
  { icon: "quality", title: "Quality Management", detail: "ISO 9001:2015 Certified" },
  { icon: "engineering", title: "Engineering Excellence", detail: "Institution of Structural Engineers" },
  { icon: "sustainability", title: "Sustainable Development", detail: "LEED Platinum Accreditation" },
];

/** Final call-to-action background imagery. */
export const ctaMedia = {
  src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80",
  alt: "Tower cranes over a skyline development at dusk",
};

/* ================================================================== *
 * ABOUT PAGE
 * ================================================================== */

export const aboutPage = {
  hero: {
    eyebrow: "About Titanium Edge",
    title: "We build what the",
    goldTitle: "future remembers",
    intro:
      "Founded on the belief that construction is a craft, not a commodity, Titanium Edge has spent nearly three decades turning the world's most ambitious visions into enduring landmarks.",
    image: {
      src: "https://images.unsplash.com/photo-1590644365607-1c5a0b8c0f0f?auto=format&fit=crop&w=2400&q=80",
      alt: "Steel framework of a skyscraper rising against the sky",
    },
    stats: [
      { value: 1997, label: "Founded" },
      { value: 240, suffix: "+", label: "Landmarks Delivered" },
      { value: 40, suffix: "+", label: "Countries" },
    ] as Stat[],
  },
  story: {
    eyebrow: "Our Story",
    title: "From a single blueprint to a global standard",
    paragraphs: [
      "Titanium Edge began in 1997 with a small team of engineers who refused to accept that speed and quality were opposing forces. That conviction became a company — and then an ethos.",
      "Today we deliver commercial, residential, industrial, and infrastructure projects across more than forty countries, uniting master craftsmanship with the most advanced engineering and construction technology in the industry.",
      "Through every era, one thing has never changed: we treat each project as a promise, and each structure as a legacy we sign with our name.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
      alt: "Engineers reviewing plans on an active construction site",
    },
  },
};

export type PillarKey = "mission" | "vision" | "values";
export type Pillar = {
  key: PillarKey;
  label: string;
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    key: "mission",
    label: "Our Mission",
    title: "Engineer landmarks that elevate how the world lives and works",
    description:
      "We exist to transform bold visions into structures of lasting value — delivered with precision, integrity, and uncompromising craftsmanship.",
  },
  {
    key: "vision",
    label: "Our Vision",
    title: "To be the most trusted name in luxury construction",
    description:
      "A global standard synonymous with engineering excellence, safety, and quality that endures for generations.",
  },
  {
    key: "values",
    label: "Our Approach",
    title: "Partnership over transaction, always",
    description:
      "We build relationships as carefully as we build structures — transparent, accountable, and invested in every outcome.",
  },
];

export const coreValues: string[] = [
  "Integrity",
  "Precision",
  "Innovation",
  "Safety",
  "Sustainability",
  "Craftsmanship",
];

export type Leader = {
  name: string;
  role: string;
  bio: string;
  photo: { src: string; alt: string };
};

export const leadership: Leader[] = [
  {
    name: "Julian Hart",
    role: "Founder & Chief Executive",
    bio: "Structural engineer turned builder, Julian has led Titanium Edge from a single studio to a global firm.",
    photo: {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      alt: "Portrait of Julian Hart, Founder & Chief Executive",
    },
  },
  {
    name: "Amara Okafor",
    role: "Chief Engineering Officer",
    bio: "Amara directs the engineering and digital-twin division behind our most complex projects.",
    photo: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      alt: "Portrait of Amara Okafor, Chief Engineering Officer",
    },
  },
  {
    name: "Viktor Reyes",
    role: "Chief Operating Officer",
    bio: "Viktor oversees delivery, safety, and program management across every active site worldwide.",
    photo: {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      alt: "Portrait of Viktor Reyes, Chief Operating Officer",
    },
  },
  {
    name: "Lena Fischer",
    role: "Head of Design & Architecture",
    bio: "Lena leads the studio shaping the form, materiality, and detail of every Titanium Edge landmark.",
    photo: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      alt: "Portrait of Lena Fischer, Head of Design & Architecture",
    },
  },
];

export type Milestone = { year: string; title: string; description: string };

export const milestones: Milestone[] = [
  { year: "1997", title: "The Foundation", description: "Titanium Edge is founded in New York by a team of six engineers." },
  { year: "2004", title: "First Supertall", description: "Delivery of our first 300m+ tower sets a new benchmark for the firm." },
  { year: "2011", title: "Global Expansion", description: "Operations extend across Europe, the Middle East, and Asia." },
  { year: "2016", title: "Sustainability Milestone", description: "Our portfolio surpasses 50 LEED-certified projects." },
  { year: "2020", title: "Digital Engineering", description: "Launch of our digital-twin and automation engineering division." },
  { year: "2024", title: "A Global Standard", description: "Our 240th landmark is delivered; named Global Builder of the Year." },
];
