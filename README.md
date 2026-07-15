# Titanium Edge

Ultra-premium, cinematic website for **Titanium Edge** — a luxury construction &
engineering brand. Dark architectural luxury, gold precision, editorial scale,
immersive 3D, and choreographed motion. Built to feel like an Awwwards-calibre
digital experience.

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** — full design-token system (color, fluid type, spacing, shadows, motion)
- **GSAP + ScrollTrigger** — scroll-linked, pinned, and parallax choreography
- **Framer Motion** — component-level reveals & micro-interactions
- **Three.js + React Three Fiber v9 + Drei v10** — the hero 3D scene
- **Lenis** — momentum smooth scrolling (frame-synced to GSAP)
- **Lucide** icons · **Shadcn**-style UI conventions

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

> **Note:** `build` / `start` force `NODE_ENV=production` via `cross-env`. Some
> managed environments export `NODE_ENV=development` globally, which corrupts
> Next's production error-page prerender — this guarantees correct builds
> everywhere.

## Project Architecture

```
src/
├── app/
│   ├── layout.tsx          # Fonts, SEO metadata, providers, navbar
│   ├── page.tsx            # Home (Hero + first scroll sequence)
│   └── globals.css         # Base layer, glass/gold utilities, a11y fallbacks
├── components/
│   ├── providers/          # SmoothScrollProvider (Lenis ↔ GSAP bridge)
│   ├── layout/             # Navbar, MobileMenu, Logo, Container, Section
│   ├── ui/                 # Button, Magnetic
│   ├── animation/          # Reveal, TextReveal, Parallax, Counter
│   ├── three/              # HeroScene (steel beams, blueprint wireframe, particles)
│   └── sections/           # Hero, IntroTransition
├── hooks/                  # useMediaQuery, useMouseParallax, useScrollLock
└── lib/                    # utils (cn), motion (easings), gsap, site config
```

## Design System

- **Palette** — background `#050505`, primary `#0F172A`, secondary `#1E293B`,
  surface `#111827`, cards `#151B26`, accent gold `#D4AF37`, text
  `#FFFFFF` / `#C9CDD3`, hairline borders `rgba(255,255,255,0.08)`.
- **Type** — Space Grotesk (display), Inter (body), Manrope (numbers); fluid
  `clamp()` scale from small phones to 4K.
- **Motion** — one shared easing/timing language (`src/lib/motion.ts`) so every
  animation feels choreographed by the same hand. Respects
  `prefers-reduced-motion` throughout.

## Imagery

Real, cinematic construction photography only (no AI imagery). Approved remote
hosts are configured in `next.config.mjs`; URLs are centralised in
`src/lib/site.ts` for easy swapping.

## Status

Foundation + **Header/Navigation**, **Hero**, and the **first cinematic scroll
sequence** are complete. Remaining home-page sections (About, Services, Why
Choose, Process, Projects, Testimonials, CTA, Footer) and inner pages are built
in subsequent phases on the same design system.
