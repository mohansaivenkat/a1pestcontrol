"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  PEST_CATALOG,
  PROPERTY_OPTIONS,
  SEVERITY_OPTIONS,
  calculateQuote,
  serializeWhatsAppQuote,
} from "./pricingData";
import { SlotBookingModal } from "./SlotBookingModal";
import { PriceSkeleton } from "@/components/ui/SkeletonLoader";
import { analytics } from "@/lib/analytics";
import { BlurText } from "@/components/react-bits/BlurText";
import {
  ShieldCheck,
  Calendar,
  AlertTriangle,
  Award,
  Flame,
  Wind,
  Drill,
  BoxSelect,
  Syringe,
  CheckCircle2,
  FileCheck,
  MessageSquare,
} from "lucide-react";

interface CostEstimatorProps {
  currentLocality?: string;
  defaultPestId?: string;
  onOpenSOS?: () => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  currentLocality = "MVP Colony",
  defaultPestId = "cockroaches",
  onOpenSOS,
}) => {
  const [selectedPest, setSelectedPest] = useState(defaultPestId);
  const [prevDefaultPestId, setPrevDefaultPestId] = useState(defaultPestId);
  if (defaultPestId !== prevDefaultPestId) {
    setPrevDefaultPestId(defaultPestId);
    setSelectedPest(defaultPestId);
  }
  const [selectedProperty, setSelectedProperty] = useState("2bhk");
  const [selectedSeverity, setSelectedSeverity] = useState("mild");
  const [isCalculating, setIsCalculating] = useState(false);
  const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);

  const quote = useMemo(() => {
    return calculateQuote(selectedPest, selectedProperty, selectedSeverity);
  }, [selectedPest, selectedProperty, selectedSeverity]);

  useEffect(() => {
    analytics.track({
      name: "estimator_calculate",
      pest: quote.pest.name,
      property: quote.property.name,
      severity: quote.severity.level,
      priceMin: quote.minPrice,
      priceMax: quote.maxPrice,
    });
  }, [quote]);

  const handlePestChange = (pestId: string) => {
    setIsCalculating(true);
    setSelectedPest(pestId);
    setTimeout(() => setIsCalculating(false), 80);
  };

  const handlePropertyChange = (propertyId: string) => {
    setIsCalculating(true);
    setSelectedProperty(propertyId);
    setTimeout(() => setIsCalculating(false), 80);
  };

  const handleSeverityChange = (severityId: string) => {
    setIsCalculating(true);
    setSelectedSeverity(severityId);
    setTimeout(() => setIsCalculating(false), 80);
  };

  const getPestIcon = (id: string) => {
    switch (id) {
      case "termites":
        return <Drill className="w-4 h-4 sm:w-5 sm:h-5 text-brand-700" aria-hidden="true" />;
      case "cockroaches":
        return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brand-700" aria-hidden="true" />;
      case "bedbugs":
        return <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-accent-700" aria-hidden="true" />;
      case "rodents":
        return <BoxSelect className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800" aria-hidden="true" />;
      case "mosquitoes":
        return <Wind className="w-4 h-4 sm:w-5 sm:h-5 text-brand-700" aria-hidden="true" />;
      case "woodborers":
        return <Syringe className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800" aria-hidden="true" />;
      case "annual-amc":
      default:
        return <Award className="w-4 h-4 sm:w-5 sm:h-5 text-brand-700" aria-hidden="true" />;
    }
  };

  return (
    <div id="estimate-calculator" className="relative w-full scroll-mt-24 space-y-6">
      {/* Top Locality & SOS Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-neutral-300 text-xs font-sans text-neutral-700">
          <span className="h-2 w-2 rounded-full bg-brand-700 motion-safe:animate-pulse motion-reduce:animate-none" />
          <span>Active Locality: <strong className="text-neutral-950">{currentLocality}</strong></span>
        </div>
        {onOpenSOS && (
          <button
            type="button"
            onClick={onOpenSOS}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent-700 hover:bg-accent-800 active:scale-[0.98] disabled:opacity-50 text-white text-xs font-semibold transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 whitespace-nowrap"
          >
            <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>SOS Emergency Dispatch</span>
          </button>
        )}
      </div>

      {/* Main Interactive Configuration Flow */}
      <div className="space-y-6 sm:space-y-8">
        {/* Step 1: Pest Target */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200 pb-2.5">
            <div>
              <span className="text-xs font-semibold text-brand-700 block">
                Step 1: Target Protocol
              </span>
              <BlurText
                text="Select Your Target Pest Problem"
                as="h3"
                className="text-sm sm:text-lg font-display font-bold text-neutral-950"
              />
            </div>
            <span className="text-xs text-neutral-600 font-sans">
              7 clinical protocols available
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3.5">
            {PEST_CATALOG.map((p) => {
              const isSelected = selectedPest === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handlePestChange(p.id)}
                  className={`p-3 sm:p-4 rounded-xl border text-left transition-colors duration-150 flex flex-col justify-between gap-2 cursor-pointer min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 active:scale-[0.98] disabled:opacity-50 ${
                    isSelected
                      ? "bg-brand-100/70 border-brand-700 ring-2 ring-brand-700"
                      : "bg-surface-card hover:bg-neutral-100/80 border-neutral-300 text-neutral-900"
                  }`}
                >
                  <div className="flex items-start justify-between gap-1.5 min-w-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`p-1.5 sm:p-2 rounded-lg shrink-0 ${isSelected ? "bg-white" : "bg-neutral-100"}`}>
                        {getPestIcon(p.id)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-display font-bold text-neutral-950 leading-snug truncate">
                          {p.name.split(" (")[0]}
                        </h4>
                        <span className="text-xs font-mono text-neutral-600 block">
                          {p.code}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-700 leading-tight line-clamp-1 sm:line-clamp-2">
                    {p.subtitle}
                  </p>

                  <div className="flex flex-col xs:flex-row xs:items-center justify-between text-xs pt-1 border-t border-neutral-200/80 gap-0.5">
                    <span className="text-xs font-sans font-bold text-neutral-950">
                      Starts <span className="font-mono">₹{p.basePrice.toLocaleString("en-IN")}</span>
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium self-start xs:self-auto ${
                      p.id === "bedbugs" ? "bg-accent-100 text-accent-700" : "bg-brand-100 text-brand-900"
                    }`}>
                      {p.safetyProfile.split(" / ")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Property Type & Size */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200 pb-2.5">
            <div>
              <span className="text-xs font-semibold text-brand-700 block">
                Step 2: Property Architecture
              </span>
              <BlurText
                text="Property Architecture & Square Footage"
                as="h3"
                className="text-sm sm:text-lg font-display font-bold text-neutral-950"
              />
            </div>
            <span className="text-xs text-neutral-600 font-sans">
              Calibrated for Vizag layouts
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
            {PROPERTY_OPTIONS.map((prop) => {
              const isSelected = selectedProperty === prop.id;
              return (
                <button
                  key={prop.id}
                  type="button"
                  onClick={() => handlePropertyChange(prop.id)}
                  className={`p-3 sm:p-4 rounded-xl border text-left transition-colors duration-150 cursor-pointer min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 active:scale-[0.98] disabled:opacity-50 ${
                    isSelected
                      ? "bg-brand-100/70 border-brand-700 ring-2 ring-brand-700"
                      : "bg-surface-card hover:bg-neutral-100/80 border-neutral-300 text-neutral-900"
                  }`}
                >
                  <p className="text-xs sm:text-sm font-display font-bold text-neutral-950 leading-snug truncate">
                    {prop.name}
                  </p>
                  <p className="text-xs font-sans text-neutral-600 mt-0.5">
                    ~{prop.sqftEstimate} sq ft
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Infestation Severity */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200 pb-2.5">
            <div>
              <span className="text-xs font-semibold text-brand-700 block">
                Step 3: Infestation Severity Level
              </span>
              <BlurText
                text="Infestation Severity Level"
                as="h3"
                className="text-sm sm:text-lg lg:text-base font-display font-bold text-neutral-950"
              />
            </div>
            <span className="text-xs text-neutral-600 font-sans">
              Sets chemical dosage and visit depth
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
            {SEVERITY_OPTIONS.map((sev) => {
              const isSelected = selectedSeverity === sev.id;
              const isSevere = sev.id === "severe";
              return (
                <button
                  key={sev.id}
                  type="button"
                  onClick={() => handleSeverityChange(sev.id)}
                  className={`p-4 rounded-xl border text-left transition-colors duration-150 cursor-pointer min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 active:scale-[0.98] disabled:opacity-50 ${
                    isSelected
                      ? isSevere
                        ? "bg-accent-100 border-accent-700 ring-2 ring-accent-700"
                        : "bg-brand-100 border-brand-700 ring-2 ring-brand-700"
                      : "bg-surface-card hover:bg-neutral-100/80 border-neutral-300 text-neutral-900"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs sm:text-base font-display font-bold text-neutral-950">
                      {sev.level} Severity
                    </span>
                    {sev.pulseAlert && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent-700 bg-accent-100 px-2 py-0.5 rounded">
                        <AlertTriangle className="w-3 h-3 text-accent-700" aria-hidden="true" />
                        SOS SLA
                      </span>
                    )}
                  </div>
                  <p className="text-xs lg:text-sm text-neutral-700 leading-relaxed font-sans">
                    {sev.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* High-Contrast Interactive Output Box */}
        <div className="rounded-2xl bg-neutral-950 text-white p-4 sm:p-8 border border-neutral-800">
          {isCalculating ? (
            <PriceSkeleton />
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {/* Top Summary Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3 sm:pb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs px-2.5 py-0.5 rounded bg-brand-700 text-white font-medium">
                    Official Fixed Estimate
                  </span>
                  <span className="text-xs text-neutral-300 font-sans">
                    Duration: <strong className="text-white">{quote.durationMinutes} mins</strong>
                  </span>
                  <span className="text-xs text-neutral-300 font-sans">
                    Visits: <strong className="text-white">{quote.visitsIncluded} service</strong>
                  </span>
                </div>
                <span className="text-xs text-brand-400 font-medium">
                  {quote.pest.warrantyStandard}
                </span>
              </div>

              {/* Price & Spec Highlight Split */}
              <div className="grid lg:grid-cols-12 gap-5 sm:gap-8 items-center">
                {/* Left: Prominent Price & Chemical Spec (7 Cols) */}
                <div className="lg:col-span-7 space-y-3 min-w-0">
                  <div>
                    <span className="text-xs text-neutral-400 font-medium block mb-1">
                      Calculated price range (all-inclusive GST)
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-2xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-extrabold text-white tabular-nums tracking-tight break-words">
                        ₹{quote.minPrice.toLocaleString("en-IN")} to ₹{quote.maxPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <p className="text-xs lg:text-sm text-neutral-400 mt-1 font-sans">
                      Zero surprise add-ons. Price locked prior to dispatch with stamped certificate.
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1.5 text-xs lg:text-sm font-sans">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-neutral-200">
                        <strong className="text-white">Chemical Formula:</strong> {quote.pest.chemicalFormula} ({quote.pest.formulationMaker})
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-neutral-200">
                        <strong className="text-white">Safety Profile:</strong> {quote.pest.safetyProfile}, {quote.pest.preparationAdvice}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 text-brand-300 text-xs lg:text-sm pt-0.5">
                      <FileCheck className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="truncate">{quote.pest.protocolNotice}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Primary Conversion Actions (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3 w-full">
                  <button
                    type="button"
                    onClick={() => setIsSlotModalOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-4 sm:px-6 rounded-[30px] bg-gold-500 hover:bg-gold-600 active:scale-[0.98] disabled:opacity-50 text-navy-950 font-display text-xs sm:text-sm font-bold transition-colors shadow-xs cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-950"
                  >
                    <Calendar className="w-4 h-4 text-navy-950" aria-hidden="true" />
                    <span>Lock price and pick slot</span>
                  </button>

                  <a
                    href={serializeWhatsAppQuote(quote, currentLocality)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 sm:px-6 rounded-[30px] bg-whatsapp hover:bg-whatsapp-hover active:scale-[0.98] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp"
                  >
                    <MessageSquare className="w-4 h-4" aria-hidden="true" />
                    <span>Send quote to WhatsApp</span>
                  </a>

                  <p className="text-xs text-neutral-400 text-center font-sans pt-0.5">
                    Direct dispatch from {currentLocality} depot • Guaranteed 60-min SLA
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slot Booking Modal */}
      <SlotBookingModal
        isOpen={isSlotModalOpen}
        onClose={() => setIsSlotModalOpen(false)}
        calc={quote}
        currentLocality={currentLocality}
      />
    </div>
  );
};
