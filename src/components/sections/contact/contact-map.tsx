"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Navigation, ExternalLink, MapPin } from "lucide-react";
import { mapInfo } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";

/** Stylised, branded dark map — no third-party embed, always on-brand and fast. */
function MapCanvas() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0a0f1a] to-[#070b12]" />
      {/* Street network */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 480" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="10">
          <line x1="-20" y1="120" x2="820" y2="90" />
          <line x1="-20" y1="250" x2="820" y2="270" />
          <line x1="-20" y1="380" x2="820" y2="410" />
          <line x1="140" y1="-20" x2="120" y2="500" />
          <line x1="330" y1="-20" x2="350" y2="500" />
          <line x1="540" y1="-20" x2="520" y2="500" />
          <line x1="690" y1="-20" x2="710" y2="500" />
        </g>
        <g stroke="rgba(212,175,55,0.14)" strokeWidth="2">
          <line x1="-20" y1="250" x2="820" y2="270" />
          <line x1="330" y1="-20" x2="350" y2="500" />
        </g>
        {/* City blocks */}
        <g fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)">
          <rect x="170" y="140" width="140" height="90" rx="4" />
          <rect x="380" y="140" width="120" height="90" rx="4" />
          <rect x="170" y="300" width="140" height="80" rx="4" />
          <rect x="380" y="300" width="120" height="80" rx="4" />
          <rect x="560" y="140" width="110" height="90" rx="4" />
          <rect x="560" y="300" width="110" height="80" rx="4" />
        </g>
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(5,5,5,0.7)]" />
    </div>
  );
}

function Marker() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Pulse rings */}
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40"
          animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
          transition={{ duration: 3, delay: i * 1.5, ease: "easeOut", repeat: Infinity }}
        />
      ))}
      <div className="relative grid h-12 w-12 -translate-y-2 place-items-center rounded-full rounded-bl-none rotate-45 bg-gold-sheen shadow-gold-glow-lg">
        <MapPin className="h-5 w-5 -rotate-45 text-primary" strokeWidth={2} />
      </div>
    </div>
  );
}

export function ContactMap() {
  return (
    <section id="map" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE.out }}
          className="relative overflow-hidden rounded-4xl border border-line shadow-float"
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
            <MapCanvas />
            <Marker />

            {/* Address overlay */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <div className="glass-strong flex flex-col gap-5 rounded-3xl p-6 shadow-elevated sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div>
                  <p className="font-numeric text-xs uppercase tracking-[0.18em] text-gold">{mapInfo.label}</p>
                  <p className="mt-2 max-w-sm font-display text-lg font-medium text-ink">{mapInfo.address}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={mapInfo.directionsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group/dir inline-flex items-center gap-2 rounded-full bg-gold-sheen px-6 py-3 font-numeric text-sm font-semibold text-primary shadow-soft transition-all duration-500 hover:shadow-gold-glow-lg"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                  <a
                    href={mapInfo.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-numeric text-sm font-medium text-ink transition-all duration-500 hover:border-line-gold hover:text-gold"
                  >
                    <ExternalLink className="h-4 w-4 text-gold" />
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
