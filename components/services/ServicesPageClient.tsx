"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowRight,
  Phone,
  Layers,
  Sparkles,
} from "lucide-react";
import { TechnicalSchematic, SchematicType } from "@/components/ui/TechnicalSchematic";
import { SplitText } from "@/components/react-bits/SplitText";
import { BlurText } from "@/components/react-bits/BlurText";
import { DecryptedText } from "@/components/react-bits/DecryptedText";

interface ServiceItem {
  id: string;
  schematic: SchematicType;
  name: string;
  category: string;
  tagline: string;
  startingPrice: string;
  warranty: string;
  chemistry: string;
  cibrcCode: string;
  safetyProfile: string;
  prepAdvice: string;
  image: string;
  features: string[];
}

const serviceCatalog: ServiceItem[] = [
  {
    id: "termites",
    schematic: "termites",
    name: "Drill-Fill-Seal Termite Protection",
    category: "STRUCTURAL TIMBER",
    tagline: "Subterranean termite chemical barrier with 5-year written guarantee.",
    startingPrice: "₹2,499",
    warranty: "5-Year Stamped Certificate",
    chemistry: "Imidacloprid 30.5% SC (Bayer Premise)",
    cibrcCode: "CIR-38,201/2002-Imidacloprid(SC)-244",
    safetyProfile: "Odorless Micro-Encapsulated",
    prepAdvice: "Clear 1-ft perimeter along skirting boards; kitchen cabinets stay untouched.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    features: [
      "12mm diamond-tip masonry drilling at 30cm intervals",
      "High-pressure emulsion saturation deep into concrete slab",
      "Color-matched non-shrink polymer hole capping",
      "Free annual barrier inspection included",
    ],
  },
  {
    id: "cockroaches",
    schematic: "cockroaches",
    name: "Odorless Cockroach Gel Treatment",
    category: "KITCHEN HYGIENE",
    tagline: "Dominant domino-effect baiting with zero kitchen emptying required.",
    startingPrice: "₹899",
    warranty: "90-Day Single / 365-Day AMC",
    chemistry: "Indoxacarb 0.6% Gel + Fipronil (Bayer Maxforce)",
    cibrcCode: "CIR-44,912/2004-Fipronil(Gel)-188",
    safetyProfile: "Zero-Odor / Leave-In-Place",
    prepAdvice: "No need to empty utensils, food jars, or grocery cabinets.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    features: [
      "Micro-dot baiting behind hinges, drawer tracks, and appliances",
      "Bio-drain enzyme barrier to eliminate drainpipe flyouts",
      "Transfer effect destroys the entire unseen nesting colony",
      "100% infant, elder, and pet safe with zero fumes",
    ],
  },
  {
    id: "bedbugs",
    schematic: "bedbugs",
    name: "2-Stage Thermal & Residual Bed Bug Eradication",
    category: "BEDROOM THERMAL",
    tagline: "High-heat steam combined with nymph-eradicating micro-encapsulated spray.",
    startingPrice: "₹1,499",
    warranty: "180-Day Comprehensive Warranty",
    chemistry: "Chlorfenapyr 10% SC + Micro-Pyrethroid (BASF)",
    cibrcCode: "CIR-51,330/2006-Chlorfenapyr-309",
    safetyProfile: "2-Hour Room Ventilation Required",
    prepAdvice: "Wash bed linens in warm water; keep mattress seams accessible.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    features: [
      "180°F superheated steam penetrating mattress seams & tufts",
      "Deep crack-and-crevice chemical injection behind headboards",
      "Mandatory Day-14 follow-up to break the nymph hatching cycle",
      "Safe for high-end fabrics and hardwood furniture",
    ],
  },
  {
    id: "rodents",
    schematic: "rodents",
    name: "Tamper-Proof Rodent Control & Proofing",
    category: "DUAL PROOFING",
    tagline: "Industrial-grade keyed bait stations and entry duct seal-off.",
    startingPrice: "₹1,299",
    warranty: "Colony Depletion Guarantee",
    chemistry: "Bromadiolone 0.005% CB + Elastomer Trays (Syngenta)",
    cibrcCode: "CIR-29,104/1998-Bromadiolone-112",
    safetyProfile: "Locked Tamper-Proof Stations",
    prepAdvice: "Keep pet water bowls away from floor skirting during setup.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    features: [
      "Heavy-duty lockable exterior bait boxes safe from children/pets",
      "Identification and steel-mesh sealing of pipe entry penetrations",
      "Moisture-resistant anticoagulant wax blocks with single-feed lethality",
      "Carcass inspection and sanitary removal service included",
    ],
  },
  {
    id: "mosquitoes",
    schematic: "mosquitoes",
    name: "Cold ULV Mosquito Barrier",
    category: "BALCONY & GARDEN",
    tagline: "Water-based ultra-low volume fogging and residual foliage coating.",
    startingPrice: "₹999",
    warranty: "30-Day Residual Protection",
    chemistry: "Deltamethrin 2.5% Flow (Water-Based, No Diesel)",
    cibrcCode: "CIR-22,810/1996-Deltamethrin(Flow)-84",
    safetyProfile: "30-Minute Outdoor Clearance",
    prepAdvice: "Close perimeter windows during external perimeter treatment.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    features: [
      "Zero diesel smell — 100% water-based micronized cold fog",
      "Balcony, drain, and garden resting site surface treatment",
      "Micro-larvicide biological tablets for water stagnation spots",
      "Formulated for coastal humidity and heavy monsoon conditions",
    ],
  },
  {
    id: "woodborers",
    schematic: "woodborers",
    name: "Deep Timber Wood Borer Treatment",
    category: "ANTIQUE FURNITURE",
    tagline: "Precision syringe injection into powder-falling pinholes.",
    startingPrice: "₹1,799",
    warranty: "2-Year Structural Warranty",
    chemistry: "Petroleum-Resin Systemic Infusion (Syngenta)",
    cibrcCode: "CIR-31,402/2000-WoodPreserve-142",
    safetyProfile: "Targeted Interior Spot Injection",
    prepAdvice: "Wipe down affected furniture surface to expose pinhole frass.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    features: [
      "Needle-point pressure injection into every active larval flight hole",
      "Residual timber impregnation preventing re-infestation",
      "Preserves antique woodwork, teak, and engineered plywood",
      "Includes non-staining surface polish touch-up",
    ],
  },
];

export const ServicesPageClient: React.FC = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      {/* Page Header with React Bits Animations */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
          <DecryptedText text="CLINICAL TREATMENT PORTFOLIO • CIBRC REGISTERED" />
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-neutral-950 tracking-tight">
          <SplitText text="Targeted Eradication. Zero Generic Sprays." as="span" />
        </h1>
        <div className="max-w-2xl mx-auto">
          <BlurText
            text="Every treatment is custom-engineered using authenticated CIBRC-registered chemistry from Bayer and Syngenta. Clear pricing, documented warranties, and respectful technicians."
            as="p"
            className="text-xs sm:text-base text-neutral-700 leading-relaxed font-sans"
          />
        </div>
      </section>

      {/* Services Grid with Architectural Schematics (Responsive 1/2/3 cols) */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {serviceCatalog.map((svc) => (
            <div
              key={svc.id}
              className="bg-surface-card border border-neutral-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={svc.image}
                    alt={svc.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-neutral-950/85 text-white text-xs font-sans font-semibold px-2.5 py-1 rounded-md border border-white/20">
                    Starts {svc.startingPrice}
                  </div>
                </div>

                {/* Technical Monoline Schematic Box */}
                <div className="p-3 bg-neutral-100 border-b border-neutral-200">
                  <div className="h-20 sm:h-24 w-full bg-white rounded-lg p-2 border border-neutral-200 flex items-center justify-center overflow-hidden">
                    <TechnicalSchematic
                      type={svc.schematic}
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-1.5 px-1 text-xs font-sans text-neutral-500">
                    <span>Clinical schematic</span>
                    <span className="font-mono">
                      <DecryptedText text={svc.cibrcCode.split("-")[0]} />
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-4 sm:p-6 space-y-3.5">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[10px] sm:text-[11px] text-brand-700 font-bold uppercase tracking-wider">
                        {svc.category}
                      </span>
                      <span className="bg-brand-100 text-brand-900 px-2 py-0.5 rounded font-mono text-[10px] sm:text-[11px]">
                        {svc.warranty}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-display font-bold text-neutral-950 leading-snug">
                      {svc.name}
                    </h3>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      {svc.tagline}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="border-t border-neutral-200 pt-3 space-y-2 text-xs">
                    <div className="flex items-start gap-1.5 text-neutral-700">
                      <span className="font-semibold text-neutral-950 shrink-0">Chemical:</span>
                      <span className="font-mono text-[11px] text-neutral-700 truncate">{svc.chemistry}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-neutral-700">
                      <span className="font-semibold text-neutral-950 shrink-0">Safety:</span>
                      <span className="truncate">{svc.safetyProfile}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-neutral-600 bg-neutral-100 p-2 rounded-lg">
                      <AlertCircle className="h-3.5 w-3.5 text-brand-700 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight">{svc.prepAdvice}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 sm:p-6 pt-0">
                <Link
                  href={`/contact?service=${svc.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-700 hover:bg-brand-900 text-white text-xs sm:text-sm font-semibold transition-colors duration-150 shadow-sm focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98]"
                >
                  <span>Book Inspection</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AMC Commercial & Residential Contracts */}
      <section className="bg-surface-card border-y border-neutral-200 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="bg-neutral-100 border border-neutral-300 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-sans text-accent-700 font-semibold block">
                  <DecryptedText text="Annual Maintenance Contracts (AMC)" />
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950">
                  <SplitText text="Year-Round Protection for Homes, Restaurants & Warehouses" as="span" />
                </h2>
                <BlurText
                  text="Avoid recurring infestations with our 3-visit or 4-visit annual service plans. Includes emergency callback visits at zero extra charge, free monsoon defense treatments, and priority scheduling."
                  as="p"
                  className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans"
                />
                <div className="space-y-2 pt-2 text-xs sm:text-sm text-neutral-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-700 shrink-0" />
                    <span>Quarterly preventative treatments with written compliance logs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-700 shrink-0" />
                    <span>Dedicated account technician with direct phone line</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-700 shrink-0" />
                    <span>FSSAI &amp; CIBRC audit documentation for food businesses</span>
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap gap-3">
                  <Link
                    href="/contact?type=amc"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-900 text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>Inquire About AMC Plans</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="tel:+919494281100"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-300 text-neutral-800 hover:border-brand-700 hover:text-brand-700 bg-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                  >
                    <Phone className="h-4 w-4 text-brand-700" />
                    <span>Speak with Senior Specialist</span>
                  </a>
                </div>
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-300">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="Commercial restaurant kitchen pest control compliance"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

