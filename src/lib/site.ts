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

/* ------------------------------------------------------------------ *
 * About — Core Values
 * ------------------------------------------------------------------ */
export type ValueIconKey =
  | "integrity"
  | "innovation"
  | "excellence"
  | "safety"
  | "collaboration"
  | "sustainability";

export type ValueCard = { icon: ValueIconKey; title: string; description: string };

export const coreValueCards: ValueCard[] = [
  {
    icon: "integrity",
    title: "Integrity",
    description: "We do what we say — transparent in every estimate, honest in every update, accountable for every outcome.",
  },
  {
    icon: "innovation",
    title: "Innovation",
    description: "We challenge convention with digital engineering and new methods that push what construction can achieve.",
  },
  {
    icon: "excellence",
    title: "Excellence",
    description: "Nothing leaves our hands until it exceeds the standard — in detail, durability, and finish.",
  },
  {
    icon: "safety",
    title: "Safety",
    description: "Every decision protects the people on our sites. A zero-harm culture is non-negotiable.",
  },
  {
    icon: "collaboration",
    title: "Collaboration",
    description: "We build alongside clients, architects, and communities as one aligned, trusted team.",
  },
  {
    icon: "sustainability",
    title: "Sustainability",
    description: "We build responsibly today for the world of tomorrow — efficient, certified, and future-ready.",
  },
];

/* ------------------------------------------------------------------ *
 * About — Innovation & Technology
 * ------------------------------------------------------------------ */
export type TechIconKey = "bim" | "digital" | "smart" | "materials" | "management";
export type Innovation = { icon: TechIconKey; title: string; description: string };

export const innovations: Innovation[] = [
  {
    icon: "bim",
    title: "BIM & Digital Twins",
    description: "Every project is modelled end-to-end, so clashes are solved on screen before they cost time on site.",
  },
  {
    icon: "digital",
    title: "Digital Engineering",
    description: "Advanced structural and MEP simulation resolves the most complex systems with precision.",
  },
  {
    icon: "smart",
    title: "Smart Construction",
    description: "On-site automation, robotics, and IoT sensing keep quality, safety, and schedule in lockstep.",
  },
  {
    icon: "materials",
    title: "Sustainable Materials",
    description: "Low-carbon concrete, responsibly sourced steel, and high-performance envelopes as standard.",
  },
  {
    icon: "management",
    title: "Advanced Project Management",
    description: "Real-time dashboards give every stakeholder a single, transparent source of truth.",
  },
];

/* ------------------------------------------------------------------ *
 * About — Safety & Sustainability
 * ------------------------------------------------------------------ */
export type SafetyIconKey = "worker" | "environment" | "green" | "quality" | "compliance";
export type SafetyItem = { icon: SafetyIconKey; title: string; description: string };

export const safetyItems: SafetyItem[] = [
  {
    icon: "worker",
    title: "Worker Safety",
    description: "A zero-harm culture backed by rigorous training, protocols, and daily on-site accountability.",
  },
  {
    icon: "environment",
    title: "Environmental Responsibility",
    description: "We measure and minimise impact across every phase, from procurement to handover.",
  },
  {
    icon: "green",
    title: "Green Building Practices",
    description: "LEED-accredited methods, energy modelling, and circular material strategies as default.",
  },
  {
    icon: "quality",
    title: "Quality Assurance",
    description: "Independent inspection and commissioning verify every element against exacting standards.",
  },
  {
    icon: "compliance",
    title: "Compliance Standards",
    description: "ISO-certified systems ensure full regulatory alignment in every market we operate.",
  },
];

export const safetyStats: Stat[] = [
  { value: 0, label: "Lost-Time Incident Target" },
  { value: 50, suffix: "+", label: "LEED-Certified Projects" },
  { value: 100, suffix: "%", label: "ISO-Compliant Delivery" },
];

/* ================================================================== *
 * SERVICES PAGE
 * ================================================================== */

export const servicesPage = {
  hero: {
    eyebrow: "Our Services",
    title: "Every discipline of",
    goldTitle: "construction, mastered",
    intro:
      "From the first blueprint to the final handover, Titanium Edge delivers the full spectrum of construction and engineering — each project treated as a landmark in the making.",
    image: {
      src: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=2400&q=80",
      alt: "Cinematic view of a commercial skyscraper under construction",
    },
  },
  intro: {
    eyebrow: "Our Philosophy",
    title: "One standard applied to every project we touch",
    lead:
      "Whatever the scale or sector, our approach never changes: disciplined engineering, relentless attention to detail, and a partnership built on trust.",
    pillars: [
      { title: "Engineering Precision", description: "Millimetre-accurate execution, modelled and verified before we build." },
      { title: "Innovation", description: "Digital tools and new methods that raise what's possible." },
      { title: "Planning", description: "Rigorous programming that protects budget and schedule." },
      { title: "Collaboration", description: "One aligned team across client, architect, and trades." },
      { title: "Safety", description: "A zero-harm culture on every site, every day." },
      { title: "Quality", description: "Detailing and finish worthy of the most demanding clients." },
    ],
  },
};

export type CoreService = {
  title: string;
  description: string;
  benefits: string[];
  image: { src: string; alt: string };
};

export const coreServices: CoreService[] = [
  {
    title: "Commercial Construction",
    description:
      "Headquarters, towers, and mixed-use developments engineered to define skylines and perform for decades.",
    benefits: ["Column-free floor plates", "Fast-track delivery", "LEED-rated performance"],
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      alt: "Modern commercial glass tower",
    },
  },
  {
    title: "Residential Construction",
    description:
      "Private estates and luxury residences crafted for uncompromising living, comfort, and privacy.",
    benefits: ["Bespoke finishes", "Private amenities", "Acoustic & thermal comfort"],
    image: {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      alt: "Luxury contemporary residence",
    },
  },
  {
    title: "Industrial Construction",
    description:
      "Plants, logistics hubs, and advanced facilities engineered for performance, safety, and scale.",
    benefits: ["High-bay structures", "Automation-ready", "Heavy MEP integration"],
    image: {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
      alt: "Engineer inside a large industrial facility",
    },
  },
  {
    title: "Architecture & Design",
    description:
      "Concept-to-detail design that fuses bold form with structural intelligence and buildability.",
    benefits: ["Concept to detail", "Structural artistry", "Regulatory mastery"],
    image: {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
      alt: "Striking modern architectural facade",
    },
  },
  {
    title: "Infrastructure Development",
    description:
      "Bridges, transit, and civil works that connect communities and endure the toughest conditions.",
    benefits: ["Bridges & transit", "Seismic resilience", "Public realm delivery"],
    image: {
      src: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1600&q=80",
      alt: "Large bridge infrastructure under construction",
    },
  },
  {
    title: "Renovation & Interior Fit-Out",
    description:
      "Heritage-sensitive renovation and turnkey interiors delivered with minimal disruption.",
    benefits: ["Heritage-sensitive", "Turnkey interiors", "Minimal disruption"],
    image: {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      alt: "Refined luxury interior fit-out",
    },
  },
  {
    title: "Construction Management",
    description:
      "End-to-end program delivery, procurement, and quality assurance under a single point of accountability.",
    benefits: ["Single accountability", "Cost & schedule control", "Proactive risk management"],
    image: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
      alt: "Project team reviewing construction plans",
    },
  },
  {
    title: "Design-Build Solutions",
    description:
      "A single contract uniting design and construction for faster delivery and aligned incentives.",
    benefits: ["One contract", "Faster delivery", "Aligned incentives"],
    image: {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      alt: "Cranes over an integrated design-build development",
    },
  },
];

export type IndustryIconKey =
  | "commercial"
  | "residential"
  | "industrial"
  | "healthcare"
  | "education"
  | "government"
  | "hospitality"
  | "infrastructure";

export type Industry = { icon: IndustryIconKey; title: string; description: string };

export const industries: Industry[] = [
  { icon: "commercial", title: "Commercial", description: "Offices, towers, and mixed-use landmarks." },
  { icon: "residential", title: "Residential", description: "Luxury homes and private developments." },
  { icon: "industrial", title: "Industrial", description: "Plants, logistics, and advanced facilities." },
  { icon: "healthcare", title: "Healthcare", description: "Hospitals and specialist medical facilities." },
  { icon: "education", title: "Education", description: "Campuses, research, and learning spaces." },
  { icon: "government", title: "Government", description: "Civic, defence, and public institutions." },
  { icon: "hospitality", title: "Hospitality", description: "Hotels, resorts, and leisure destinations." },
  { icon: "infrastructure", title: "Infrastructure", description: "Bridges, transit, and civil works." },
];

export type WhyIconKey =
  | "experience"
  | "innovation"
  | "safety"
  | "transparency"
  | "communication"
  | "quality"
  | "delivery"
  | "satisfaction";

export type WhyClient = { icon: WhyIconKey; title: string; description: string };

export const whyClients: WhyClient[] = [
  { icon: "experience", title: "Proven Experience", description: "Nearly three decades and 240+ delivered landmarks." },
  { icon: "innovation", title: "Innovation", description: "Digital-twin engineering and smart construction." },
  { icon: "safety", title: "Safety First", description: "A zero-harm culture protecting every site." },
  { icon: "transparency", title: "Transparency", description: "Open books, real-time reporting, no surprises." },
  { icon: "communication", title: "Communication", description: "One point of contact, always responsive." },
  { icon: "quality", title: "Uncompromising Quality", description: "Detailing and finish that endure for generations." },
  { icon: "delivery", title: "Timely Delivery", description: "Disciplined programs that land on schedule." },
  { icon: "satisfaction", title: "Client Satisfaction", description: "A 99% client-retention track record." },
];

export type Faq = { question: string; answer: string };

/* ================================================================== *
 * PROJECTS PAGE
 * ================================================================== */

export const projectsPage = {
  hero: {
    eyebrow: "Our Portfolio",
    title: "Landmarks that",
    goldTitle: "define skylines",
    intro:
      "A portfolio measured not in square metres, but in skylines reshaped and standards redefined. Explore the projects that carry the Titanium Edge signature.",
    image: {
      src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=2400&q=80",
      alt: "Cinematic skyline of modern towers at dusk",
    },
  },
};

export type Metric = { label: string; value: string };
export type FeaturedProject = {
  title: string;
  location: string;
  category: string;
  year: string;
  overview: string;
  metrics: Metric[];
  image: { src: string; alt: string };
};

export const featuredLandmarks: FeaturedProject[] = [
  {
    title: "Aurelia Financial Tower",
    location: "New York, USA",
    category: "Commercial",
    year: "2023",
    overview:
      "A 62-storey headquarters clad in fluted bronze glass, engineered for LEED Platinum performance and a column-free trading floor.",
    metrics: [
      { label: "Height", value: "288 m" },
      { label: "Floors", value: "62" },
      { label: "Built Area", value: "140,000 m²" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      alt: "Aurelia Financial Tower — commercial high-rise",
    },
  },
  {
    title: "The Meridian Residences",
    location: "Dubai, UAE",
    category: "Residential",
    year: "2022",
    overview:
      "Two sculpted residential towers linked by a suspended sky bridge, with private elevators and an infinity pool crowning both structures.",
    metrics: [
      { label: "Towers", value: "2" },
      { label: "Residences", value: "320" },
      { label: "Sky Gardens", value: "4" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
      alt: "The Meridian Residences — luxury residential towers",
    },
  },
  {
    title: "Vantage Cable Bridge",
    location: "Lisbon, Portugal",
    category: "Infrastructure",
    year: "2021",
    overview:
      "A 1.2 km cable-stayed crossing with twin diamond pylons, engineered for seismic resilience and record clear spans.",
    metrics: [
      { label: "Span", value: "1.2 km" },
      { label: "Pylons", value: "2" },
      { label: "Capacity", value: "80k/day" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1600&q=80",
      alt: "Vantage Cable Bridge — infrastructure landmark",
    },
  },
  {
    title: "Northgate Logistics Park",
    location: "Rotterdam, NL",
    category: "Industrial",
    year: "2024",
    overview:
      "A fully automated 340,000 m² logistics campus with robotic fulfilment, rail-served distribution, and a 12 MW solar canopy.",
    metrics: [
      { label: "Area", value: "340,000 m²" },
      { label: "Solar", value: "12 MW" },
      { label: "Bays", value: "180" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
      alt: "Northgate Logistics Park — industrial facility",
    },
  },
];

export type PortfolioItem = {
  title: string;
  location: string;
  category: string;
  image: { src: string; alt: string };
};

export const portfolioCategories = [
  "All",
  "Commercial",
  "Residential",
  "Industrial",
  "Infrastructure",
  "Hospitality",
  "Healthcare",
  "Education",
] as const;

export const portfolioProjects: PortfolioItem[] = [
  { title: "Aurelia Financial Tower", location: "New York, USA", category: "Commercial", image: { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80", alt: "Aurelia Financial Tower" } },
  { title: "Skyline Corporate Center", location: "Chicago, USA", category: "Commercial", image: { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80", alt: "Skyline Corporate Center" } },
  { title: "The Meridian Residences", location: "Dubai, UAE", category: "Residential", image: { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80", alt: "The Meridian Residences" } },
  { title: "Cedar Grove Estates", location: "Aspen, USA", category: "Residential", image: { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80", alt: "Cedar Grove Estates" } },
  { title: "Northgate Logistics Park", location: "Rotterdam, NL", category: "Industrial", image: { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80", alt: "Northgate Logistics Park" } },
  { title: "Ironworks Manufacturing Hub", location: "Detroit, USA", category: "Industrial", image: { src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=80", alt: "Ironworks Manufacturing Hub" } },
  { title: "Vantage Cable Bridge", location: "Lisbon, PT", category: "Infrastructure", image: { src: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1000&q=80", alt: "Vantage Cable Bridge" } },
  { title: "Harbor Transit Line", location: "Singapore", category: "Infrastructure", image: { src: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1000&q=80", alt: "Harbor Transit Line" } },
  { title: "Aurora Grand Hotel", location: "Kyoto, JP", category: "Hospitality", image: { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80", alt: "Aurora Grand Hotel" } },
  { title: "St. Vincent Medical Center", location: "Toronto, CA", category: "Healthcare", image: { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80", alt: "St. Vincent Medical Center" } },
  { title: "Helix Science Campus", location: "Zurich, CH", category: "Education", image: { src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80", alt: "Helix Science Campus" } },
  { title: "Grand Meridian Resort", location: "Maldives", category: "Hospitality", image: { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80", alt: "Grand Meridian Resort" } },
];

export type CaseStudyPhase = { label: string; title: string; description: string; image: { src: string; alt: string } };

export const caseStudy = {
  eyebrow: "Case Study",
  title: "Aurelia Financial Tower",
  location: "New York, USA",
  year: "2023",
  category: "Commercial",
  intro:
    "How Titanium Edge delivered a record column-free trading floor inside one of Manhattan's most demanding sites — on time and to LEED Platinum.",
  phases: [
    {
      label: "01 — The Challenge",
      title: "A column-free floor on a constrained site",
      description:
        "The client demanded a 4,000 m² trading floor with no internal columns, above active transit tunnels and within a tight urban footprint — a structural and logistical puzzle.",
      image: { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80", alt: "Constrained urban construction site" },
    },
    {
      label: "02 — Planning & Engineering",
      title: "A digital twin resolved every clash",
      description:
        "A full BIM model and digital twin coordinated structure, MEP, and transit protection. Long-span steel trusses and tuned mass dampers were engineered to carry the floor and control sway.",
      image: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80", alt: "Engineers reviewing a digital model" },
    },
    {
      label: "03 — Construction",
      title: "Precision execution, zero harm",
      description:
        "Top-down construction and just-in-time steel delivery kept the dense site moving safely. The superstructure topped out two weeks ahead of a 34-month program.",
      image: { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80", alt: "Steel superstructure under construction" },
    },
    {
      label: "04 — The Result",
      title: "A new benchmark for the district",
      description:
        "A LEED Platinum landmark delivering the column-free floor the client envisioned — now the highest-performing commercial address in its district.",
      image: { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80", alt: "Completed commercial tower facade" },
    },
  ] as CaseStudyPhase[],
  stats: [
    { value: 288, suffix: " m", label: "Final Height" },
    { value: 34, suffix: " mo", label: "Delivery Program" },
    { value: 1800, suffix: "+", label: "Peak Workforce" },
    { value: 0, label: "Lost-Time Incidents" },
  ] as Stat[],
  outcome:
    "“Titanium Edge turned an impossible brief into our flagship address — delivered early, under budget, and beyond specification.”",
  outcomeBy: "Eleanor Whitfield · Chief Development Officer, Harborline Group",
};

export type GalleryImage = { src: string; alt: string; span: "tall" | "wide" | "square" };

export const galleryImages: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", alt: "Commercial tower detail", span: "tall" },
  { src: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80", alt: "Bridge infrastructure", span: "wide" },
  { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80", alt: "Residential towers", span: "square" },
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80", alt: "Industrial facility interior", span: "wide" },
  { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80", alt: "Architectural facade", span: "tall" },
  { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80", alt: "Tower cranes at dusk", span: "square" },
  { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80", alt: "Steel structure", span: "wide" },
  { src: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=1200&q=80", alt: "Skyscraper under construction", span: "tall" },
];

export const achievements: Stat[] = [
  { value: 240, suffix: "+", label: "Landmark Projects" },
  { value: 28, label: "Years of Experience" },
  { value: 40, suffix: "+", label: "Countries Served" },
  { value: 850, suffix: "+", label: "Professionals" },
  { value: 32, label: "Industry Awards" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "M+", label: "Square Meters Built" },
];

export type SuccessStory = {
  name: string;
  company: string;
  project: string;
  rating: number;
  review: string;
};

export const successStories: SuccessStory[] = [
  {
    name: "Eleanor Whitfield",
    company: "Harborline Group",
    project: "Aurelia Financial Tower",
    rating: 5,
    review:
      "They turned an impossible brief into our flagship address — delivered early, under budget, and beyond specification.",
  },
  {
    name: "Marcus Delacroix",
    company: "Delacroix Capital",
    project: "The Meridian Residences",
    rating: 5,
    review:
      "Every phase felt effortless because their planning was flawless. Our investors had complete confidence throughout.",
  },
  {
    name: "Aisha Rahman",
    company: "Meridian Authority",
    project: "Vantage Cable Bridge",
    rating: 5,
    review:
      "A complex, high-risk crossing handled with remarkable calm and precision. Safety and quality were never compromised.",
  },
  {
    name: "Johan Berg",
    company: "Northgate Industries",
    project: "Northgate Logistics Park",
    rating: 5,
    review:
      "The most technically capable contractor we have worked with. Their digital-twin approach eliminated costly surprises.",
  },
  {
    name: "Sofia Marchetti",
    company: "Studio Marchetti",
    project: "Aurora Grand Hotel",
    rating: 5,
    review:
      "They protected the integrity of our design at every turn. Craftsmanship of this calibre is exceptionally rare.",
  },
];

export const faqs: Faq[] = [
  {
    question: "What types of projects does Titanium Edge take on?",
    answer:
      "We deliver commercial, residential, industrial, and infrastructure projects — from luxury residences and corporate towers to bridges and advanced facilities — as well as architecture, fit-out, and full design-build solutions.",
  },
  {
    question: "How do you ensure projects stay on time and on budget?",
    answer:
      "Every project runs on rigorous program management, digital-twin modelling, and real-time dashboards. Clashes and risks are resolved before they reach site, and stakeholders share a single, transparent source of truth throughout.",
  },
  {
    question: "Do you offer design and construction under one contract?",
    answer:
      "Yes. Our design-build service unites architecture, engineering, and construction under a single point of accountability — accelerating delivery and aligning every incentive around your outcome.",
  },
  {
    question: "How does Titanium Edge approach sustainability?",
    answer:
      "Sustainability is standard, not an upgrade. We use LEED-accredited methods, energy modelling, low-carbon materials, and circular strategies, with more than 50 certified projects to date.",
  },
  {
    question: "Which regions do you operate in?",
    answer:
      "Titanium Edge delivers projects across more than 40 countries, with teams and supply chains established throughout the Americas, Europe, the Middle East, and Asia.",
  },
  {
    question: "How do we start a project with Titanium Edge?",
    answer:
      "Begin with a consultation. Share your vision, site, and ambitions, and our team will shape a tailored approach, program, and budget before a single line is drawn.",
  },
];

/* ================================================================== *
 * CONTACT PAGE
 * ================================================================== */

export const contactPage = {
  hero: {
    eyebrow: "Contact",
    title: "Let's build something",
    goldTitle: "worth remembering",
    intro:
      "Every landmark begins with a conversation. Tell us about your vision, and our team will help you shape it into a plan — and then into reality.",
    image: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
      alt: "Modern architectural office interior with warm lighting",
    },
  },
  intro: {
    eyebrow: "Start the Conversation",
    title: "We welcome ambitious projects of every scale",
    lead:
      "From commercial towers and luxury residences to industrial facilities and critical infrastructure, our team is ready to bring the same precision and care to your next landmark.",
    points: [
      "Commercial & mixed-use developments",
      "Luxury residential projects",
      "Industrial & logistics facilities",
      "Infrastructure & civil works",
    ],
  },
};

export const projectTypes = [
  "Commercial Construction",
  "Residential Construction",
  "Industrial Construction",
  "Infrastructure Development",
  "Architecture & Design",
  "Renovation & Fit-Out",
  "Other",
] as const;

export const budgetRanges = [
  "Under $5M",
  "$5M – $25M",
  "$25M – $100M",
  "$100M+",
  "To be discussed",
] as const;

export const timelines = [
  "As soon as possible",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "12+ months",
] as const;

export type OfficeIconKey = "hq" | "phone" | "email" | "hours" | "emergency";
export type OfficeCard = { icon: OfficeIconKey; title: string; lines: string[]; href?: string };

export const officeCards: OfficeCard[] = [
  { icon: "hq", title: "Headquarters", lines: ["1 Titanium Plaza, 48th Floor", "New York, NY 10018"] },
  { icon: "phone", title: "Phone", lines: [site.phone, "Mon – Fri, 9am – 6pm EST"], href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: "email", title: "Email", lines: [site.email, "We reply within 24 hours"], href: `mailto:${site.email}` },
  { icon: "hours", title: "Business Hours", lines: ["Mon – Fri: 9:00 – 18:00", "Saturday: 10:00 – 14:00"] },
  { icon: "emergency", title: "Emergency Contact", lines: ["+1 (212) 555-0199", "24/7 active-project support"], href: "tel:+12125550199" },
];

export const mapInfo = {
  label: "Titanium Edge — Headquarters",
  address: site.address,
  // Approximate Midtown Manhattan coordinates for the branded marker demo.
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Titanium+Plaza+New+York+NY+10018",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=1+Titanium+Plaza+New+York+NY+10018",
};

export const contactFaqs: Faq[] = [
  {
    question: "How do I start a project with Titanium Edge?",
    answer:
      "Send us an enquiry through the form or book a consultation. We'll arrange an introductory call to understand your vision, site, and objectives, then propose a tailored approach and program.",
  },
  {
    question: "What industries and project types do you serve?",
    answer:
      "We deliver commercial, residential, industrial, and infrastructure projects — spanning offices, luxury homes, healthcare, education, hospitality, government, and civil works — plus architecture, fit-out, and design-build.",
  },
  {
    question: "How long do projects typically take?",
    answer:
      "Timelines depend on scale and complexity, but every project runs on a disciplined program with clear milestones. We'll give you a realistic schedule during the consultation and protect it throughout delivery.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes. Titanium Edge delivers projects across more than 40 countries, with established teams and supply chains throughout the Americas, Europe, the Middle East, and Asia.",
  },
  {
    question: "How do consultations work?",
    answer:
      "Consultations are complimentary and confidential. You'll meet directly with senior members of our team who will explore feasibility, budget, and approach — with no obligation to proceed.",
  },
];
