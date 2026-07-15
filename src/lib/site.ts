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
