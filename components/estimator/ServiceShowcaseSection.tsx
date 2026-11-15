"use client";

import React, { useState, useEffect } from "react";
import { LineSidebar } from "@/components/react-bits/LineSidebar";
import { MagicBentoCard } from "@/components/react-bits/MagicBento";
import { TechnicalSchematic, SchematicType } from "@/components/ui/TechnicalSchematic";
import { PriorityBadge } from "@/components/plane-ui/PriorityBadge";
import { PEST_CATALOG } from "@/components/estimator/pricingData";
import { SplitText } from "@/components/react-bits/SplitText";
import { BlurText } from "@/components/react-bits/BlurText";
import { DecryptedText } from "@/components/react-bits/DecryptedText";
import { ShieldCheck, ArrowRight, CheckCircle2, Calendar, MessageSquare } from "lucide-react";

interface ServiceShowcaseSectionProps {
  onSelectPestForEstimator: (pestId: string) => void;
  onOpenBooking: () => void;
}

const SERVICE_IMAGES: Record<string, string> = {
  termites: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
  cockroaches: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  bedbugs: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  rodents: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  mosquitoes: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
  woodborers: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
};

const SIDEBAR_ITEMS = [
  { id: "termites", index: "01", label: "Termites", badge: "5-Yr War" },
  { id: "cockroaches", index: "02", label: "Cockroach Gel", badge: "Odorless" },
  { id: "rodents", index: "03", label: "Rodents & Rats", badge: "Locked" },
  { id: "mosquitoes", index: "04", label: "Mosquitoes", badge: "Cold ULV" },
  { id: "bedbugs", index: "05", label: "Bed Bugs", badge: "180°F Heat" },
  { id: "woodborers", index: "06", label: "Wood Borers", badge: "Syringe" },
  { id: "annual-amc", index: "07", label: "Whole Home AMC", badge: "365-Day" },
];

export const ServiceShowcaseSection: React.FC<ServiceShowcaseSectionProps> = ({
  onSelectPestForEstimator,
  onOpenBooking,
}) => {
  const [activeSidebarId, setActiveSidebarId] = useState("termites");

  useEffect(() => {
    const cardIds = SIDEBAR_ITEMS.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("service-card-", "");
            if (id) {
              setActiveSidebarId(id);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    cardIds.forEach((id) => {
      const el = document.getElementById(`service-card-${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectService = (id: string) => {
    setActiveSidebarId(id);
    onSelectPestForEstimator(id);
    const cardEl = document.getElementById(`service-card-${id}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-warm-animated-gradient border-y border-neutral-300/80 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Intro with React Bits Text Animations */}
        <div className="mb-8 md:mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-brand-700" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold">
              <DecryptedText text="CLINICAL ERADICATION CATALOG • VIZAG" />
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl font-display font-extrabold text-neutral-950 tracking-tight">
            <SplitText text="Six Specialized Protocols. Zero Generic AI Emptiness." as="span" />
          </h2>
          <div className="max-w-2xl">
            <BlurText
              text="Unlike local unorganized sprayers who use the same smelly agricultural pesticide for every pest, each A1 protocol deploys precision CIBRC-registered chemistry calibrated for Visakhapatnam's humid coastal climate."
              as="p"
              className="text-xs sm:text-sm lg:text-base font-sans text-neutral-700 leading-relaxed"
            />
          </div>
        </div>

        {/* Asymmetric Desktop Layout: Sticky Line Sidebar Rail + Bento Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative">
          {/* Left Rail: Line Sidebar following full scroll (Desktop Only) */}
          <div className="hidden lg:block w-1/4 shrink-0 sticky top-24 z-20 self-start">
            <div className="space-y-4">
              <LineSidebar
                items={SIDEBAR_ITEMS}
                activeId={activeSidebarId}
                onSelectItem={handleSelectService}
              />

              {/* Quick Clinical Assurance & Action Module */}
              <div className="p-3.5 rounded-2xl bg-surface-card border border-neutral-300 shadow-sm space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-sans font-bold text-brand-700 uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>Protocol Standards</span>
                </div>
                <ul className="text-xs text-neutral-600 space-y-1.5 font-sans">
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-700 font-bold">•</span>
                    <span>100% CIBRC registered Bayer &amp; Syngenta actives</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-700 font-bold">•</span>
                    <span>Safe for infants, asthmatic elders &amp; pets</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-700 font-bold">•</span>
                    <span>Stamped written warranty card on completion</span>
                  </li>
                </ul>
                <div className="pt-2 border-t border-neutral-200">
                  <a
                    href="https://wa.me/919494281100?text=Hello%20A1%20Pest%20Control.%20I%20would%20like%20to%20send%20a%20photo%20for%20pest%20identification."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-brand-100 hover:bg-brand-200 text-brand-700 text-xs font-semibold transition-colors duration-150"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send Photo for ID</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Canvas: Mobile 2-Col (2x2) / Tablet 2-Col / Desktop 3-Col Bento Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
              {PEST_CATALOG.slice(0, 6).map((pest) => {
                const isUrgent = pest.id === "bedbugs" || pest.id === "termites";
                const stockImage = SERVICE_IMAGES[pest.id] || SERVICE_IMAGES.termites;

                return (
                  <div id={`service-card-${pest.id}`} key={pest.id} className="h-full min-w-0">
                    <MagicBentoCard
                      isUrgent={isUrgent}
                      glowColor="#2D5A27"
                      className="h-full rounded-xl sm:rounded-2xl bg-white border border-neutral-300 shadow-sm hover:shadow-xl transition-colors duration-150 flex flex-col justify-between overflow-hidden p-0"
                    >
                      {/* Integrated Stock Photo & Priority Header */}
                      <div className="relative aspect-[16/11] w-full overflow-hidden shrink-0 bg-neutral-950">
                        <img
                          src={stockImage}
                          alt={pest.name}
                          className="h-full w-full object-cover opacity-90"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/25 to-transparent" />
                        
                        <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 right-1.5 sm:right-2.5 flex items-center justify-between gap-1">
                          <PriorityBadge
                            level={pest.id === "bedbugs" ? "urgent" : pest.id === "termites" ? "moderate" : "mild"}
                            className="scale-90 sm:scale-100 origin-left"
                          />
                          <span className="text-[10px] sm:text-xs font-mono px-1.5 sm:px-2 py-0.5 rounded bg-neutral-900 text-white border border-white/20 shrink-0">
                            {pest.code}
                          </span>
                        </div>

                        <div className="absolute bottom-1.5 sm:bottom-2.5 left-1.5 sm:left-2.5 right-1.5 sm:right-2.5 text-white">
                          <h3 className="text-xs sm:text-base font-display font-bold leading-tight drop-shadow-sm truncate">
                            {pest.name.split(" (")[0]}
                          </h3>
                        </div>
                      </div>

                      {/* Technical Monoline Schematic Box & Details */}
                      <div className="p-2.5 sm:p-4 space-y-2.5 sm:space-y-3.5 flex-1 flex flex-col justify-between min-w-0">
                        <div className="h-14 sm:h-20 w-full bg-neutral-100/90 rounded-lg p-1 sm:p-1.5 border border-neutral-200 flex items-center justify-center overflow-hidden shrink-0">
                          <TechnicalSchematic
                            type={pest.id as SchematicType}
                            width="100%"
                            height="100%"
                          />
                        </div>

                        {/* Subtitle & Chemical Active */}
                        <div className="space-y-0.5 sm:space-y-1 min-w-0">
                          <p className="text-[11px] sm:text-xs font-semibold text-neutral-800 truncate">
                            {pest.subtitle}
                          </p>
                          <p className="text-[10px] sm:text-[11px] font-mono text-brand-700 font-medium truncate">
                            {pest.chemicalFormula}
                          </p>
                        </div>

                        {/* Child/Pet Safety Profile */}
                        <div className="p-1.5 sm:p-2 rounded-lg bg-neutral-100 text-[10px] sm:text-[11px] border border-neutral-200 min-w-0">
                          <div className="flex items-center gap-1 sm:gap-1.5 font-semibold text-neutral-900 min-w-0">
                            <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-700 shrink-0" />
                            <span className="truncate">{pest.safetyProfile}</span>
                          </div>
                        </div>

                        {/* Starting Price & Action */}
                        <div className="pt-2 sm:pt-3 border-t border-neutral-200 flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 sm:gap-2 shrink-0">
                          <div>
                            <span className="text-[11px] font-sans text-neutral-500 block leading-tight">
                              Starting from
                            </span>
                            <span className="font-mono text-xs sm:text-base font-extrabold text-neutral-950 tabular-nums">
                              ₹{pest.basePrice.toLocaleString("en-IN")}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              onSelectPestForEstimator(pest.id);
                              const estimatorEl = document.getElementById("estimate-calculator");
                              if (estimatorEl) {
                                estimatorEl.scrollIntoView({ behavior: "smooth" });
                              }
                            }}
                            className="w-full xs:w-auto inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3.5 py-1.5 rounded-[30px] bg-navy-950 hover:bg-navy-900 text-white font-sans text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-navy-950 active:scale-[0.98]"
                          >
                            <span>Estimate</span>
                            <ArrowRight className="w-3 h-3 text-gold-500" />
                          </button>
                        </div>
                      </div>
                    </MagicBentoCard>
                  </div>
                );
              })}
            </div>

            {/* Commercial AMC Banner with Stock Image */}
            <div id="service-card-annual-amc" className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-12 gap-4 sm:gap-6 items-center">
                <div className="p-4 sm:p-6 md:p-8 md:col-span-8 space-y-2.5 sm:space-y-3">
                  <span className="text-xs font-sans text-accent-100 font-semibold bg-accent-800/90 px-2.5 py-1 rounded-full border border-accent-500/30 inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    <span>FSSAI &amp; Factory Audit Compliance</span>
                  </span>
                  <h3 className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-display font-bold text-white">
                    Commercial AMC for Vizag Restaurants, Pharma &amp; Gajuwaka Warehouses
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-neutral-300 leading-relaxed font-sans">
                    Monthly scheduled audits, automated tamper-station telemetry logs, and instant FSSAI inspection certificates. Trusted by 140+ commercial establishments across Visakhapatnam.
                  </p>
                  <div className="pt-1 sm:pt-2">
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-[30px] bg-gold-500 hover:bg-gold-600 text-navy-950 font-sans font-bold text-xs whitespace-nowrap transition-colors duration-150 shadow-xs cursor-pointer inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-navy-950 active:scale-[0.98]"
                    >
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-navy-950" />
                      <span>Schedule commercial audit</span>
                    </button>
                  </div>
                </div>

                <div className="md:col-span-4 h-full min-h-[160px] sm:min-h-[220px] relative hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                    alt="Commercial kitchen inspection"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
