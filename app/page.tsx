"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopographyCanvas } from "@/components/react-bits/TopographyCanvas";
import { SplitText } from "@/components/react-bits/SplitText";
import { BlurText } from "@/components/react-bits/BlurText";
import { DecryptedText } from "@/components/react-bits/DecryptedText";
import { TextLoop } from "@/components/react-bits/TextLoop";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import { ScrollStack } from "@/components/react-bits/ScrollStack";
import { SpecularButton } from "@/components/react-bits/SpecularButton";
import { CostEstimator } from "@/components/estimator/CostEstimator";
import { ServiceShowcaseSection } from "@/components/estimator/ServiceShowcaseSection";
import { TrustVaultSection } from "@/components/estimator/TrustVaultSection";
import { ReviewsAndFaqSection } from "@/components/estimator/ReviewsAndFaqSection";
import { EmergencySOSModal } from "@/components/emergency/EmergencySOSModal";
import { SlotBookingModal } from "@/components/estimator/SlotBookingModal";
import { calculateQuote } from "@/components/estimator/pricingData";
import { VIZAG_LOCALITIES } from "@/lib/sitemap-data";
import {
  ShieldCheck,
  Star,
  Clock,
  Sparkles,
  Phone,
  MapPin,
  Award,
  ArrowRight,
  AlertTriangle,
  Play,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const [selectedLocality, setSelectedLocality] = useState("MVP Colony");
  const [isSOSOpen, setIsSOSOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activePestForEstimator, setActivePestForEstimator] = useState("cockroaches");

  // Rotating telemetry items for TextLoop
  const tickerItems = Object.values(VIZAG_LOCALITIES).map((loc) => ({
    name: loc.name,
    eta: loc.eta,
    techs: loc.activeTechs,
    zone: loc.zone,
  }));

  const defaultQuote = calculateQuote("cockroaches", "2bhk", "mild");

  return (
    <div className="min-h-screen flex flex-col bg-surface-main text-neutral-900 font-body relative overflow-x-hidden">
      {/* Hero Section: 55/45 Split Desktop Grid with 60fps Pest Control Video */}
      <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Mathematical Topography Background Contour Lines */}
        <TopographyCanvas lineColor="#8C7365" opacity={0.06} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 Cols): Clinical Value Proposition */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 pt-2">
              {/* CIBRC Accreditation Badge with DecryptedText */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 border border-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-700">
                <ShieldCheck className="h-4 w-4 text-brand-700 shrink-0" />
                <span>
                  <DecryptedText text="CIBRC LICENSED: AP/VSP/2010/8842-P" />
                </span>
              </div>

              {/* H1 Headline with Masked SplitText Reveal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.25rem] xl:text-[2.5rem] font-display font-extrabold text-neutral-950 tracking-tight leading-[1.14] lg:leading-[1.18]">
                <SplitText
                  text="Clinical-Grade, Odorless Pest Control for Vizag Homes—Dispatched in 60 Minutes."
                  as="span"
                  highlightWords={["Clinical-Grade,", "Odorless", "60", "Minutes."]}
                />
              </h1>

              {/* Subheadline with BlurText Reveal */}
              <div className="max-w-2xl">
                <BlurText
                  text="Zero generic chemical fogging. Safe for infants, asthmatic elders, and indoor pets. Powered by genuine WHO-prequalified Bayer & Syngenta chemistry with up to 5-year stamped written warranties across Visakhapatnam."
                  as="p"
                  className="text-sm md:text-base lg:text-lg text-neutral-700 leading-relaxed font-sans"
                />
              </div>

              {/* 2x2 Responsive Trust Metrics Grid with DecryptedText */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 pt-1 max-w-2xl">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-surface-card border border-neutral-300 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-brand-700 font-bold uppercase tracking-wider">
                    <Star className="w-3.5 h-3.5 fill-brand-700 text-brand-700" />
                    <span>RATING</span>
                  </div>
                  <p className="font-mono text-xl sm:text-2xl font-extrabold text-neutral-950 mt-1 tabular-nums">
                    <DecryptedText text="4.9 / 5.0" />
                  </p>
                  <span className="text-[11px] lg:text-xs text-neutral-600 font-sans block mt-0.5">
                    1,840+ Local Reviews
                  </span>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-surface-card border border-neutral-300 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-brand-700 font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-brand-700" />
                    <span>ODORLESS</span>
                  </div>
                  <p className="font-mono text-xl sm:text-2xl font-extrabold text-neutral-950 mt-1 tabular-nums">
                    <DecryptedText text="100% GEL" />
                  </p>
                  <span className="text-[11px] lg:text-xs text-neutral-600 font-sans block mt-0.5">
                    Kitchen Intact
                  </span>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-surface-card border border-neutral-300 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-accent-700 font-bold uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-accent-700" />
                    <span>WARRANTY</span>
                  </div>
                  <p className="font-mono text-xl sm:text-2xl font-extrabold text-neutral-950 mt-1 tabular-nums">
                    <DecryptedText text="5-YEAR" />
                  </p>
                  <span className="text-[11px] lg:text-xs text-neutral-600 font-sans block mt-0.5">
                    Written Stamped Card
                  </span>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-surface-card border border-neutral-300 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-brand-700 font-bold uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-brand-700" />
                    <span>DISPATCH</span>
                  </div>
                  <p className="font-mono text-xl sm:text-2xl font-extrabold text-neutral-950 mt-1 tabular-nums">
                    <DecryptedText text="60 MIN" />
                  </p>
                  <span className="text-[11px] lg:text-xs text-neutral-600 font-sans block mt-0.5">
                    Direct Zonal Team
                  </span>
                </div>
              </div>

              {/* Live Locality Dispatch Ticker with React Bits TextLoop */}
              <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-neutral-100 border border-neutral-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-700 shrink-0" />
                  <span className="text-xs font-mono text-neutral-700 uppercase font-semibold">
                    Live Zonal Dispatch:
                  </span>
                </div>
                <TextLoop
                  items={tickerItems}
                  onSelectLocality={(loc) => setSelectedLocality(loc)}
                />
              </div>

              {/* Action Buttons with SpecularButton */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                <SpecularButton
                  variant="botanical"
                  size="md"
                  onClick={() => {
                    const estimatorEl = document.getElementById("estimate-calculator");
                    if (estimatorEl) {
                      estimatorEl.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span>Launch Estimate Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </SpecularButton>

                <a
                  href="tel:+919494281100"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 hover:border-brand-700 bg-white text-xs md:text-sm font-semibold text-neutral-800 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brand-700" />
                  <span>Call Hotline: +91 94942 81100</span>
                </a>
              </div>
            </div>

            {/* Right Column (5 Cols): 60fps High-Frame-Rate Video Container */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-neutral-300 shadow-2xl bg-neutral-950 group">
                {/* 60fps HTML5 Loop Video */}
                <video
                  src="/videos/pest-control-hero.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
                />

                {/* Video Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-transparent to-neutral-950/20 pointer-events-none" />

                {/* Bottom Video Legend with DecryptedText */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white pointer-events-none space-y-1">
                  <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                    <DecryptedText text="MOTORIZED COLD ULV FOGGING • 60 FPS" />
                  </p>
                  <p className="text-sm font-display font-bold leading-tight drop-shadow-sm">
                    Water-Based Aerosol Barrier · Zero Diesel Oil Residue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Manifesto Headline with React Bits ScrollReveal */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-surface-card border-y border-neutral-200">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
            <DecryptedText text="THE A1 CLINICAL DIFFERENCE" />
          </span>
          <ScrollReveal
            text="We replaced diesel mixtures, vague ₹499 directory pricing, and unvetted daily labor with scientific pest eradication calibrated for Visakhapatnam's coastal architecture."
            highlightColor="#2D5A27"
            className="text-xl md:text-3xl lg:text-2xl xl:text-[1.75rem] font-bold tracking-tight text-neutral-950"
          />
        </div>
      </section>

      {/* Interactive Service Showcase (Line Sidebar + 2x2 Bento Grid with Warm Animated Gradient) */}
      <ServiceShowcaseSection
        onSelectPestForEstimator={(pestId) => {
          setActivePestForEstimator(pestId);
          const estimatorEl = document.getElementById("estimate-calculator");
          if (estimatorEl) {
            estimatorEl.scrollIntoView({ behavior: "smooth" });
          }
        }}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* DEDICATED SECTION: Estimate Calculator */}
      <section className="w-full py-12 md:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 bg-surface-main">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
              <DecryptedText text="TRANSPARENT PRICING ENGINE" />
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl font-display font-extrabold text-neutral-950 tracking-tight">
              <SplitText text="Instant Treatment Estimate Calculator" as="span" />
            </h2>
            <BlurText
              text="Select your pest, property size, and severity to view transparent, all-inclusive pricing before booking."
              as="p"
              className="text-xs sm:text-sm lg:text-base text-neutral-600 lg:text-neutral-700 lg:leading-normal"
            />
          </div>

          <CostEstimator
            currentLocality={selectedLocality}
            defaultPestId={activePestForEstimator}
            onOpenSOS={() => setIsSOSOpen(true)}
          />
        </div>
      </section>

      {/* Clinical Trust Vault (Official Document Card + ComparisonTable + MSDS) */}
      <TrustVaultSection />

      {/* 3-Step "Zero-Hassle" Clinical Process (Scroll Stack) */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-surface-main">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 sm:mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
              <DecryptedText text="CLINICAL PROTOCOL WORKFLOW" />
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-2xl xl:text-3xl font-display font-bold text-neutral-950">
              <SplitText text="Three Frictionless Steps to a Pest-Free Home" as="span" />
            </h2>
            <BlurText
              text="No endless phone calls with middlemen. Instant transparent pricing and guaranteed technician arrival."
              as="p"
              className="text-xs md:text-sm lg:text-base text-neutral-600 lg:text-neutral-700 max-w-xl lg:max-w-2xl mx-auto"
            />
          </div>

          <ScrollStack />
        </div>
      </section>

      {/* Real Customer Reviews & FAQ Accordion */}
      <ReviewsAndFaqSection />

      {/* Emergency SOS Modal */}
      <EmergencySOSModal
        isOpen={isSOSOpen}
        onClose={() => setIsSOSOpen(false)}
        defaultLocality={selectedLocality}
      />

      {/* Slot Booking Modal */}
      <SlotBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        calc={defaultQuote}
        currentLocality={selectedLocality}
      />
    </div>
  );
}
