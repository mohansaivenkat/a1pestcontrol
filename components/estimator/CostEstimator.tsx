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
import { SplitText } from "@/components/react-bits/SplitText";
import { BlurText } from "@/components/react-bits/BlurText";
import { DecryptedText } from "@/components/react-bits/DecryptedText";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  Calendar,
  AlertTriangle,
  Award,
  ChevronRight,
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
  const [selectedProperty, setSelectedProperty] = useState("2bhk");
  const [selectedSeverity, setSelectedSeverity] = useState("mild");
  const [isCalculating, setIsCalculating] = useState(false);
  const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);

  useEffect(() => {
    if (defaultPestId) {
      setSelectedPest(defaultPestId);
    }
  }, [defaultPestId]);

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
        return <Drill className="w-4 h-4 sm:w-5 sm:h-5 text-brand-700" />;
      case "cockroaches":
        return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brand-700" />;
      case "bedbugs":
        return <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-accent-700" />;
      case "rodents":
        return <BoxSelect className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800" />;
      case "mosquitoes":
        return <Wind className="w-4 h-4 sm:w-5 sm:h-5 text-brand-700" />;
      case "woodborers":
        return <Syringe className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800" />;
      case "annual-amc":
      default:
        return <Award className="w-4 h-4 sm:w-5 sm:h-5 text-brand-700" />;
    }
  };

  return (
    <div
      id="estimate-calculator"
      className="relative w-full rounded-2xl sm:rounded-3xl bg-surface-card border border-neutral-300 shadow-2xl overflow-hidden scroll-mt-24"
    >
      {/* Top Architectural Header */}
      <div className="bg-neutral-950 text-white px-3.5 sm:px-8 md:px-10 py-4 sm:py-6 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-brand-500 font-bold block mb-1">
            <DecryptedText text="PLANE UI DIAGNOSTIC PANEL • VISAKHAPATNAM" />
          </span>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight">
            <SplitText text="Instant Treatment Estimate Calculator" as="span" />
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-[11px] sm:text-xs font-mono text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
            <span>Active Locality: <strong className="text-white">{currentLocality}</strong></span>
          </div>
          {onOpenSOS && (
            <button
              type="button"
              onClick={onOpenSOS}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-accent-700 hover:bg-accent-800 text-white text-[11px] sm:text-xs font-mono font-bold transition-colors cursor-pointer"
            >
              <AlertTriangle className="h-3.5 w-3.5" />
              <span>SOS Alert</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Interactive Configuration Flow */}
      <div className="p-3.5 sm:p-6 md:p-10 space-y-6 sm:space-y-10">
        {/* Step 1: Pest Target (2x2 on Mobile, 4-col on XL) */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200 pb-2 sm:pb-3">
            <div>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-brand-700 uppercase tracking-widest block">
                <DecryptedText text="STEP 01 • TARGET PROTOCOL" />
              </span>
              <BlurText
                text="Select Your Target Pest Problem"
                as="h3"
                className="text-sm sm:text-lg font-display font-bold text-neutral-950"
              />
            </div>
            <span className="text-[11px] sm:text-xs text-neutral-600 font-mono">
              7 Clinical Protocols
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3.5">
            {PEST_CATALOG.map((p) => {
              const isSelected = selectedPest === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handlePestChange(p.id)}
                  className={`p-2.5 sm:p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-2 cursor-pointer min-w-0 ${
                    isSelected
                      ? "bg-brand-100/70 border-brand-700 ring-2 ring-brand-700 shadow-md"
                      : "bg-surface-card hover:bg-neutral-100/80 border-neutral-300 text-neutral-900"
                  }`}
                >
                  <div className="flex items-start justify-between gap-1.5 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
                      <div className={`p-1.5 sm:p-2 rounded-lg shrink-0 ${isSelected ? "bg-white shadow-sm" : "bg-neutral-100"}`}>
                        {getPestIcon(p.id)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-display font-bold text-neutral-950 leading-snug truncate">
                          {p.name.split(" (")[0]}
                        </h4>
                        <span className="text-[10px] sm:text-xs font-mono text-neutral-600 block">
                          {p.code}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-xs text-neutral-700 leading-tight line-clamp-1 sm:line-clamp-2">
                    {p.subtitle}
                  </p>

                  <div className="flex flex-col xs:flex-row xs:items-center justify-between text-[11px] pt-1 border-t border-neutral-200/80 gap-0.5">
                    <span className="font-mono text-[11px] sm:text-xs font-bold text-neutral-950">
                      Starts ₹{p.basePrice.toLocaleString("en-IN")}
                    </span>
                    <span className={`text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded font-semibold self-start xs:self-auto ${
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

        {/* Step 2: Property Type & Size (2x2 on Mobile, 4-col on MD) */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200 pb-2 sm:pb-3">
            <div>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-brand-700 uppercase tracking-widest block">
                <DecryptedText text="STEP 02 • ARCHITECTURE" />
              </span>
              <BlurText
                text="Property Architecture & Square Footage"
                as="h3"
                className="text-sm sm:text-lg font-display font-bold text-neutral-950"
              />
            </div>
            <span className="text-[11px] sm:text-xs text-neutral-600 font-mono">
              Calibrated For Vizag Layouts
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3.5">
            {PROPERTY_OPTIONS.map((prop) => {
              const isSelected = selectedProperty === prop.id;
              return (
                <button
                  key={prop.id}
                  type="button"
                  onClick={() => handlePropertyChange(prop.id)}
                  className={`p-2.5 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer min-w-0 ${
                    isSelected
                      ? "bg-brand-100/70 border-brand-700 ring-2 ring-brand-700 shadow-md"
                      : "bg-surface-card hover:bg-neutral-100/80 border-neutral-300 text-neutral-900"
                  }`}
                >
                  <p className="text-xs sm:text-sm font-display font-bold text-neutral-950 leading-snug truncate">
                    {prop.name}
                  </p>
                  <p className="text-[10px] sm:text-xs font-mono text-neutral-600 mt-0.5">
                    ~{prop.sqftEstimate} Sq. Ft.
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Infestation Severity (3 columns on Tablet/Desktop, 1 on Mobile) */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200 pb-2 sm:pb-3">
            <div>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-brand-700 uppercase tracking-widest block">
                <DecryptedText text="STEP 03 • INFESTATION LEVEL" />
              </span>
              <BlurText
                text="Infestation Severity Level"
                as="h3"
                className="text-sm sm:text-lg font-display font-bold text-neutral-950"
              />
            </div>
            <span className="text-[11px] sm:text-xs text-neutral-600 font-mono">
              Sets Chemical Dosage & Depth
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5">
            {SEVERITY_OPTIONS.map((sev) => {
              const isSelected = selectedSeverity === sev.id;
              const isSevere = sev.id === "severe";
              return (
                <button
                  key={sev.id}
                  type="button"
                  onClick={() => handleSeverityChange(sev.id)}
                  className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer min-w-0 ${
                    isSelected
                      ? isSevere
                        ? "bg-accent-100 border-accent-700 ring-2 ring-accent-700 shadow-md"
                        : "bg-brand-100 border-brand-700 ring-2 ring-brand-700 shadow-md"
                      : "bg-surface-card hover:bg-neutral-100/80 border-neutral-300 text-neutral-900"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-xs sm:text-base font-display font-bold text-neutral-950">
                      {sev.level} Severity
                    </span>
                    {sev.pulseAlert && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-accent-700 bg-accent-100 px-1.5 py-0.5 rounded font-bold">
                        <AlertTriangle className="w-3 h-3 text-accent-700" />
                        SOS SLA
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-700 leading-relaxed">
                    {sev.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* High-Contrast Interactive Output Box */}
        <div className="rounded-xl sm:rounded-2xl bg-neutral-950 text-white p-3.5 sm:p-8 shadow-2xl border border-neutral-800 overflow-hidden">
          {isCalculating ? (
            <PriceSkeleton />
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {/* Top Summary Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3 sm:pb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded bg-brand-700 text-white font-bold">
                    Official Fixed Estimate
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-neutral-300">
                    Duration: <strong className="text-white">{quote.durationMinutes} Mins</strong>
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-neutral-300">
                    Visits: <strong className="text-white">{quote.visitsIncluded} Service</strong>
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-brand-400 font-semibold">
                  {quote.pest.warrantyStandard}
                </span>
              </div>

              {/* Price & Spec Highlight Split */}
              <div className="grid lg:grid-cols-12 gap-5 sm:gap-8 items-center">
                {/* Left: Prominent Price & Chemical Spec (7 Cols) */}
                <div className="lg:col-span-7 space-y-3 sm:space-y-4 min-w-0">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                      Calculated Price Range (All-Inclusive GST)
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tabular-nums tracking-tight break-words">
                        ₹{quote.minPrice.toLocaleString("en-IN")} – ₹{quote.maxPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-neutral-400 mt-1">
                      Zero surprise add-ons. Price locked prior to dispatch with stamped certificate.
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1.5 sm:space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-500 shrink-0 mt-0.5" />
                      <p className="text-neutral-200 text-[11px] sm:text-xs">
                        <strong className="text-white">Chemical Formula:</strong> {quote.pest.chemicalFormula} ({quote.pest.formulationMaker})
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-500 shrink-0 mt-0.5" />
                      <p className="text-neutral-200 text-[11px] sm:text-xs">
                        <strong className="text-white">Safety Profile:</strong> {quote.pest.safetyProfile} — {quote.pest.preparationAdvice}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 text-brand-300 font-mono text-[10px] sm:text-[11px] pt-0.5">
                      <FileCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-400 shrink-0 mt-0.5" />
                      <span className="truncate">{quote.pest.protocolNotice}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Primary Conversion Actions (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3 w-full">
                  <button
                    type="button"
                    onClick={() => setIsSlotModalOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-4 px-4 sm:px-6 rounded-xl bg-accent-700 hover:bg-accent-800 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Lock Price &amp; Pick Slot</span>
                  </button>

                  <a
                    href={serializeWhatsAppQuote(quote, currentLocality)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3.5 px-4 sm:px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Quote to WhatsApp</span>
                  </a>

                  <p className="text-[10px] sm:text-[11px] text-neutral-400 text-center font-mono pt-0.5">
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
