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
  Star,
  Clock,
  Sparkles,
  Phone,
  MapPin,
  Award,
  ArrowRight,
  ShieldCheck,
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
    <div className="min-h-screen flex flex-col bg-surface-main text-neutral-900 font-body relative">
      {/* Hero Section: Full Background Fit to Screen with Terminix High-Trust Layout */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 overflow-hidden">
        {/* Full-Screen Fit-to-Screen Responsive Background Photos */}
        <picture className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <source media="(min-width: 768px)" srcSet="/images/hero_desktop.png" />
          <img
            src="/images/hero_mobile.png"
            alt="A1 Pest Control Visakhapatnam Clinical Exterminator Services"
            className="w-full h-full object-cover object-right md:object-center"
          />
        </picture>

        {/* Terminix High-Legibility Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-50% to-white/20 lg:to-transparent z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/85 sm:hidden z-0 pointer-events-none" />

        {/* Subtle Mathematical Topography Background Contour Lines */}
        <TopographyCanvas lineColor="#8C7365" opacity={0.04} />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6 pt-2">
            

            {/* H1 Headline with Masked SplitText Reveal (Terminix 56.5px / 700 / #001457) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-display font-bold text-[#001457] tracking-[-0.96px] leading-[1.12] lg:leading-[1.14]">
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
                className="text-base sm:text-lg lg:text-xl text-[#36393D] font-medium leading-[26px] font-sans"
              />
            </div>

            {/* 2x2 Responsive Trust Metrics Grid with DecryptedText */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-4 pt-1 max-w-2xl">
              <div className="p-3 sm:p-4 lg:p-4.5 rounded-[20px] bg-white/95 backdrop-blur-sm border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#115439] font-bold uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-[#F7BE00] text-[#F7BE00]" />
                  <span>RATING</span>
                </div>
                <p className="font-mono text-xl sm:text-2xl lg:text-xl xl:text-2xl font-extrabold text-[#001457] mt-1 tabular-nums">
                  <DecryptedText text="4.9 / 5.0" />
                </p>
                <span className="text-[11px] sm:text-xs lg:text-sm text-neutral-700 font-sans block mt-0.5">
                  1,840+ Local Reviews
                </span>
              </div>

              <div className="p-3 sm:p-4 lg:p-4.5 rounded-[20px] bg-white/95 backdrop-blur-sm border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#1DAA4C] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#1DAA4C]" />
                  <span>ODORLESS</span>
                </div>
                <p className="font-mono text-xl sm:text-2xl lg:text-xl xl:text-2xl font-extrabold text-[#001457] mt-1 tabular-nums">
                  <DecryptedText text="100% GEL" />
                </p>
                <span className="text-[11px] sm:text-xs lg:text-sm text-neutral-700 font-sans block mt-0.5">
                  Kitchen Intact
                </span>
              </div>

              <div className="p-3 sm:p-4 lg:p-4.5 rounded-[20px] bg-white/95 backdrop-blur-sm border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#B8332A] font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#F7BE00]" />
                  <span>WARRANTY</span>
                </div>
                <p className="font-mono text-xl sm:text-2xl lg:text-xl xl:text-2xl font-extrabold text-[#001457] mt-1 tabular-nums">
                  <DecryptedText text="5-YEAR" />
                </p>
                <span className="text-[11px] sm:text-xs lg:text-sm text-neutral-700 font-sans block mt-0.5">
                  Written Stamped Card
                </span>
              </div>

              <div className="p-3 sm:p-4 lg:p-4.5 rounded-[20px] bg-white/95 backdrop-blur-sm border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#001457] font-bold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#001457]" />
                  <span>DISPATCH</span>
                </div>
                <p className="font-mono text-xl sm:text-2xl lg:text-xl xl:text-2xl font-extrabold text-[#001457] mt-1 tabular-nums">
                  <DecryptedText text="60 MIN" />
                </p>
                <span className="text-[11px] sm:text-xs lg:text-sm text-neutral-700 font-sans block mt-0.5">
                  Direct Zonal Team
                </span>
              </div>
            </div>

            {/* Live Locality Dispatch Ticker with React Bits TextLoop */}
            <div className="p-3 sm:p-3.5 lg:p-4 rounded-[30px] sm:rounded-2xl bg-white/90 backdrop-blur-sm border border-[#EAEBE5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 max-w-2xl shadow-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#115439] shrink-0" />
                <span className="text-xs lg:text-sm font-mono text-neutral-700 uppercase font-semibold">
                  Live Zonal Dispatch:
                </span>
              </div>
              <TextLoop
                items={tickerItems}
                onSelectLocality={(loc) => setSelectedLocality(loc)}
              />
            </div>

            {/* Action Buttons with Terminix 30px Pill Recipes */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <SpecularButton
                variant="botanical"
                size="md"
                onClick={() => {
                  const estimatorEl = document.getElementById("estimate-calculator");
                  if (estimatorEl) {
                    estimatorEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="!rounded-[30px] !px-6 !py-3.5"
              >
                <span>Launch Estimate Calculator</span>
                <ArrowRight className="w-4 h-4 text-[#F7BE00]" />
              </SpecularButton>

              <a
                href="tel:+919494281100"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[30px] border border-[#EAEBE5] hover:border-[#115439] bg-white hover:bg-neutral-50 text-xs md:text-sm font-semibold text-[#115439] transition-all shadow-xs active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#1DAA4C]" />
                <span>Call Hotline: +91 94942 81100</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-[30px] bg-[#F7BE00] hover:bg-[#F5C518] text-[#001457] text-xs md:text-sm font-bold transition-all shadow-xs active:scale-[0.98]"
              >
                <span>Get Free Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Manifesto Headline with React Bits ScrollReveal */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-surface-card border-y border-[#EAEBE5]">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#115439] font-bold block">
            <DecryptedText text="THE A1 CLINICAL DIFFERENCE" />
          </span>
          <ScrollReveal
            text="We replaced diesel mixtures, vague ₹499 directory pricing, and unvetted daily labor with scientific pest eradication calibrated for Visakhapatnam's coastal architecture."
            highlightColor="#1DAA4C"
            className="text-xl md:text-3xl lg:text-2xl xl:text-[1.75rem] font-bold tracking-tight text-[#001457]"
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
