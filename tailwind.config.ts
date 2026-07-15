import type { Config } from "tailwindcss";

/**
 * Titanium Edge — Global Design System
 * Dark architectural luxury. Gold precision. Editorial scale.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    // Breakpoints engineered from small phones -> 4K / ultrawide.
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
      "4xl": "2400px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.75rem",
        lg: "2.5rem",
        xl: "3.5rem",
        "2xl": "4.5rem",
      },
      screens: {
        "2xl": "1360px",
        "3xl": "1520px",
      },
    },
    extend: {
      colors: {
        background: "#050505",
        surface: "#111827",
        card: "#151B26",
        secondary: "#1E293B",
        primary: {
          DEFAULT: "#0F172A",
          50: "#f3f5f8",
          900: "#0F172A",
          950: "#080d1a",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#fbf7e8",
          100: "#f6ecc4",
          200: "#eeda8e",
          300: "#e5c65a",
          400: "#d4af37",
          500: "#bd9526",
          600: "#9a751d",
          700: "#79591a",
          800: "#65491c",
          900: "#573e1c",
        },
        ink: {
          DEFAULT: "#FFFFFF",
          muted: "#C9CDD3",
          dim: "#8A909B",
          faint: "#5B616C",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)",
          gold: "rgba(212,175,55,0.32)",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        numeric: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // Fluid, architectural type scale (clamped for every breakpoint).
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 1.5rem + 9vw, 11rem)", { lineHeight: "0.94", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.75rem, 1.4rem + 6.5vw, 7.5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.25rem, 1.3rem + 4.6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.9rem, 1.2rem + 3vw, 3.5rem)", { lineHeight: "1.06", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.55rem, 1.1rem + 2vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "body-xl": ["clamp(1.125rem, 1rem + 0.6vw, 1.5rem)", { lineHeight: "1.55" }],
        "body-lg": ["clamp(1.05rem, 1rem + 0.3vw, 1.25rem)", { lineHeight: "1.6" }],
        eyebrow: ["0.78rem", { lineHeight: "1", letterSpacing: "0.28em" }],
      },
      spacing: {
        section: "clamp(5rem, 3rem + 9vw, 11rem)",
        "section-sm": "clamp(3.5rem, 2.5rem + 5vw, 7rem)",
        gutter: "clamp(1.25rem, 0.5rem + 3vw, 4.5rem)",
      },
      maxWidth: {
        content: "1520px",
        prose: "68ch",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        // Soft, realistic, layered luxury shadows.
        soft: "0 2px 8px rgba(0,0,0,0.24), 0 12px 32px rgba(0,0,0,0.28)",
        elevated: "0 8px 24px rgba(0,0,0,0.36), 0 30px 70px rgba(0,0,0,0.44)",
        float: "0 24px 60px rgba(0,0,0,0.5), 0 60px 140px rgba(0,0,0,0.55)",
        "gold-glow": "0 0 0 1px rgba(212,175,55,0.35), 0 8px 30px rgba(212,175,55,0.18), 0 0 60px rgba(212,175,55,0.12)",
        "gold-glow-lg": "0 0 0 1px rgba(212,175,55,0.45), 0 14px 50px rgba(212,175,55,0.28), 0 0 90px rgba(212,175,55,0.16)",
        "inner-line": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "gold-sheen": "linear-gradient(135deg, #f6ecc4 0%, #d4af37 42%, #9a751d 100%)",
        "hero-vignette":
          "radial-gradient(120% 90% at 50% 0%, rgba(5,5,5,0) 30%, rgba(5,5,5,0.65) 80%, rgba(5,5,5,0.95) 100%)",
        "grid-line":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "radial-fade": "radial-gradient(60% 60% at 50% 40%, rgba(212,175,55,0.12) 0%, rgba(5,5,5,0) 70%)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.65, 0, 0.35, 1)",
        "luxe-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "luxe-in": "cubic-bezier(0.7, 0, 0.84, 0)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },
      keyframes: {
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "64px 64px" },
        },
        "beam-sweep": {
          "0%": { transform: "translateX(-120%) skewX(-12deg)", opacity: "0" },
          "50%": { opacity: "0.6" },
          "100%": { transform: "translateX(220%) skewX(-12deg)", opacity: "0" },
        },
        "blueprint-draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-hint": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "60%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "grid-pan": "grid-pan 8s linear infinite",
        "beam-sweep": "beam-sweep 6s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 3.4s ease-in-out infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "scroll-hint": "scroll-hint 2.2s ease-in-out infinite",
        shimmer: "shimmer 2.6s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
