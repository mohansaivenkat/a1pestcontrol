"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronDown,
  Check,
  MessageSquare,
  Award,
} from "lucide-react";

interface ServiceItem {
  id: string;
  filterGroup: "structural" | "indoor" | "vector";
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
    filterGroup: "structural",
    name: "Termite Control (Drill-Fill-Seal)",
    category: "STRUCTURAL TIMBER",
    tagline: "Subterranean termite chemical barrier with 5-year written stamped guarantee.",
    startingPrice: "₹2,499",
    warranty: "5-Year Stamped Certificate",
    chemistry: "Imidacloprid 30.5% SC (Bayer Premise)",
    cibrcCode: "CIR-38,201/2002-Imidacloprid(SC)-244",
    safetyProfile: "Odorless Micro-Encapsulated",
    prepAdvice: "Clear 1-ft perimeter along skirting boards; kitchen cabinets stay untouched.",
    image: "/images/pests/termites.jpg",
    features: [
      "12mm diamond-tip masonry drilling at 30cm intervals",
      "High-pressure emulsion saturation deep into concrete slab",
      "Color-matched non-shrink polymer hole capping",
      "Free annual barrier inspection included",
    ],
  },
  {
    id: "cockroaches",
    filterGroup: "indoor",
    name: "Odorless Cockroach Gel Treatment",
    category: "KITCHEN HYGIENE",
    tagline: "Dominant domino-effect baiting with zero kitchen emptying required.",
    startingPrice: "₹899",
    warranty: "90-Day Single / 365-Day AMC",
    chemistry: "Indoxacarb 0.6% Gel + Fipronil (Bayer Maxforce)",
    cibrcCode: "CIR-44,912/2004-Fipronil(Gel)-188",
    safetyProfile: "Zero-Odor / Leave-In-Place",
    prepAdvice: "No need to empty utensils, food jars, or grocery cabinets.",
    image: "/images/pests/cockroaches.jpg",
    features: [
      "Micro-dot baiting behind hinges, drawer tracks, and appliances",
      "Bio-drain enzyme barrier to eliminate drainpipe flyouts",
      "Transfer effect destroys the entire unseen nesting colony",
      "100% infant, elder, and pet safe with zero fumes",
    ],
  },
  {
    id: "bedbugs",
    filterGroup: "indoor",
    name: "2-Stage Thermal & Residual Bed Bug Treatment",
    category: "BEDROOM THERMAL",
    tagline: "High-heat steam combined with nymph-eradicating micro-encapsulated spray.",
    startingPrice: "₹1,499",
    warranty: "180-Day Comprehensive Warranty",
    chemistry: "Chlorfenapyr 10% SC + Micro-Pyrethroid (BASF)",
    cibrcCode: "CIR-51,330/2006-Chlorfenapyr-309",
    safetyProfile: "2-Hour Room Ventilation Required",
    prepAdvice: "Wash bed linens in warm water; keep mattress seams accessible.",
    image: "/images/pests/bedbugs.jpg",
    features: [
      "180°F superheated steam penetrating mattress seams & tufts",
      "Deep crack-and-crevice chemical injection behind headboards",
      "Mandatory Day-14 follow-up to break the nymph hatching cycle",
      "Safe for high-end fabrics and hardwood furniture",
    ],
  },
  {
    id: "rodents",
    filterGroup: "vector",
    name: "Tamper-Proof Rodent Control & Proofing",
    category: "DUAL PROOFING",
    tagline: "Industrial-grade keyed bait stations and entry duct seal-off.",
    startingPrice: "₹1,299",
    warranty: "Colony Depletion Guarantee",
    chemistry: "Bromadiolone 0.005% CB + Elastomer Trays (Syngenta)",
    cibrcCode: "CIR-29,104/1998-Bromadiolone-112",
    safetyProfile: "Locked Tamper-Proof Stations",
    prepAdvice: "Keep pet water bowls away from floor skirting during setup.",
    image: "/images/pests/rodents.jpg",
    features: [
      "Heavy-duty lockable exterior bait boxes safe from children/pets",
      "Identification and steel-mesh sealing of pipe entry penetrations",
      "Moisture-resistant anticoagulant wax blocks with single-feed lethality",
      "Carcass inspection and sanitary removal service included",
    ],
  },
  {
    id: "mosquitoes",
    filterGroup: "vector",
    name: "Cold ULV Mosquito Barrier",
    category: "BALCONY & GARDEN",
    tagline: "Water-based ultra-low volume fogging and residual foliage coating.",
    startingPrice: "₹999",
    warranty: "30-Day Residual Protection",
    chemistry: "Deltamethrin 2.5% Flow (Water-Based, No Diesel)",
    cibrcCode: "CIR-22,810/1996-Deltamethrin(Flow)-84",
    safetyProfile: "30-Minute Outdoor Clearance",
    prepAdvice: "Close perimeter windows during external perimeter treatment.",
    image: "/images/pests/mosquitoes.jpg",
    features: [
      "Zero diesel smell — 100% water-based micronized cold fog",
      "Balcony, drain, and garden resting site surface treatment",
      "Micro-larvicide biological tablets for water stagnation spots",
      "Formulated for coastal humidity and heavy monsoon conditions",
    ],
  },
  {
    id: "woodborers",
    filterGroup: "structural",
    name: "Deep Timber Wood Borer Treatment",
    category: "ANTIQUE FURNITURE",
    tagline: "Precision syringe injection into powder-falling pinholes.",
    startingPrice: "₹1,799",
    warranty: "2-Year Structural Warranty",
    chemistry: "Petroleum-Resin Systemic Infusion (Syngenta)",
    cibrcCode: "CIR-31,402/2000-WoodPreserve-142",
    safetyProfile: "Targeted Interior Spot Injection",
    prepAdvice: "Wipe down affected furniture surface to expose pinhole frass.",
    image: "/images/pests/woodborers.jpg",
    features: [
      "Needle-point pressure injection into every active larval flight hole",
      "Residual timber impregnation preventing re-infestation",
      "Preserves antique woodwork, teak, and engineered plywood",
      "Includes non-staining surface polish touch-up",
    ],
  },
];

const FAQS = [
  {
    question: "Do we have to vacate our house or empty kitchen cabinets during treatment?",
    answer:
      "No. For our Odorless Cockroach Gel treatment, our Bayer Maxforce Indoxacarb gel is 100% odorless and applied as precise micro-dots inside hinges and crevices. You do not need to empty groceries, utensils, or leave your home. It is completely safe for infants, pregnant women, elders, and pets.",
  },
  {
    question: "How does the 5-year termite warranty work with Visakhapatnam's red loam soil?",
    answer:
      "Visakhapatnam's red loam soils retain deep moisture veins where subterranean termites thrive. We inject genuine Bayer Premise (Imidacloprid 30.5% SC) at 150 PSI along foundation perimeters to create an unbroken non-repellent chemical barrier. We provide a stamped, legal 5-year warranty certificate. If termites re-appear during this period, our dispatch team provides re-treatment at zero cost.",
  },
  {
    question: "Are your pest control chemicals approved by the Government of India?",
    answer:
      "Yes. Every chemical batch we use is 100% CIBRC (Central Insecticides Board & Registration Committee) registered and prequalified by the World Health Organization (WHO Class-U / Class-III). We strictly prohibit unbranded agricultural repacks, organophosphates, and diesel adulterations.",
  },
  {
    question: "How quickly can an emergency technician arrive in MVP Colony, Gajuwaka, or Madhurawada?",
    answer:
      "A1 operates 4 physical zonal dispatch depots across Greater Visakhapatnam (Dwaraka Nagar Central HQ, MVP Colony Coastal Depot, Madhurawada IT Corridor Depot, and Gajuwaka Industrial Depot). We guarantee a 60-minute emergency response SLA across all major residential and commercial sectors.",
  },
];

export const ServicesPageClient: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "structural" | "indoor" | "vector">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredServices =
    activeFilter === "all"
      ? serviceCatalog
      : serviceCatalog.filter((s) => s.filterGroup === activeFilter);

  return (
    <div className="w-full bg-surface-main text-neutral-900 font-body">
      {/* 1. Hero Section: Clean Background Photo with High-Contrast Text */}
      <section className="relative w-full min-h-[75vh] lg:min-h-[82vh] flex items-center py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 overflow-hidden border-b border-neutral-200">
        <picture className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <source media="(min-width: 768px)" srcSet="/images/services_hero_desktop.png" />
          <img
            src="/images/services_hero_mobile.png"
            alt="A1 Pest Control Services Visakhapatnam"
            className="w-full h-full object-cover object-right md:object-center"
          />
        </picture>

        {/* High-Legibility Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-55% to-white/30 lg:to-transparent z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/90 sm:hidden z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-5">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9EFC0]/70 border border-[#115439]/30 text-[#115439] text-xs font-semibold shadow-xs">
              <ShieldCheck className="h-4 w-4 text-[#115439] shrink-0" />
              <span className="font-mono text-xs uppercase font-bold tracking-wide">
                CIBRC REGISTERED • FACTORY SEALED BAYER &amp; SYNGENTA
              </span>
            </div>

            {/* Clear Plain H1 Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-display font-bold text-[#001457] leading-[1.16] tracking-tight">
              Pest Control Services in Visakhapatnam
            </h1>

            {/* Plain Text Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-[#36393D] leading-relaxed max-w-2xl font-sans">
              Targeted eradication for termites, cockroaches, bed bugs, rodents, mosquitoes, and wood borers. Transparent upfront pricing, genuine Bayer chemistry, and stamped legal warranties.
            </p>

            {/* 4 Clean Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1 max-w-2xl">
              <div className="p-3 rounded-xl bg-white/95 border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs text-[#115439] font-bold">
                  <Clock className="w-4 h-4 text-[#115439]" />
                  <span>Response</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-[#001457] mt-0.5">60 Minutes</p>
                <span className="text-xs text-[#86888B]">Emergency SLA</span>
              </div>

              <div className="p-3 rounded-xl bg-white/95 border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs text-[#115439] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#115439]" />
                  <span>Warranty</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-[#001457] mt-0.5">Up to 5 Yrs</p>
                <span className="text-xs text-[#86888B]">Stamped Card</span>
              </div>

              <div className="p-3 rounded-xl bg-white/95 border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs text-[#115439] font-bold">
                  <Sparkles className="w-4 h-4 text-[#1DAA4C]" />
                  <span>Odor</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-[#001457] mt-0.5">100% Gel</p>
                <span className="text-xs text-[#86888B]">Zero Fumes</span>
              </div>

              <div className="p-3 rounded-xl bg-white/95 border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs text-[#115439] font-bold">
                  <Award className="w-4 h-4 text-[#F7BE00]" />
                  <span>Chemicals</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-[#115439] mt-0.5">CIBRC</p>
                <span className="text-xs text-[#86888B]">Govt Certified</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#001457] hover:bg-[#002F47] text-white text-sm font-semibold transition-colors shadow-sm"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 text-[#F7BE00]" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#EAEBE5] hover:border-[#115439] bg-white text-sm font-semibold text-[#001457] transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#115439]" />
                <span>Book Inspection</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Category Filter Bar */}
      <section id="catalog" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-12 sm:pt-16 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#115439] font-bold block">
            TREATMENT CATALOG
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#001457]">
            Select Your Pest Problem
          </h2>
          <p className="text-sm text-[#86888B] leading-relaxed">
            Filter by pest category to view active chemical formulations, warranties, and pre-treatment requirements.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeFilter === "all"
                ? "bg-[#001457] text-white"
                : "bg-white text-[#36393D] hover:bg-neutral-100 border border-[#EAEBE5]"
            }`}
          >
            All Protocols ({serviceCatalog.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("structural")}
            className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeFilter === "structural"
                ? "bg-[#001457] text-white"
                : "bg-white text-[#36393D] hover:bg-neutral-100 border border-[#EAEBE5]"
            }`}
          >
            Termites &amp; Wood Borers
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("indoor")}
            className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeFilter === "indoor"
                ? "bg-[#001457] text-white"
                : "bg-white text-[#36393D] hover:bg-neutral-100 border border-[#EAEBE5]"
            }`}
          >
            Cockroaches &amp; Bed Bugs
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("vector")}
            className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeFilter === "vector"
                ? "bg-[#001457] text-white"
                : "bg-white text-[#36393D] hover:bg-neutral-100 border border-[#EAEBE5]"
            }`}
          >
            Rodents &amp; Mosquitoes
          </button>
        </div>
      </section>

      {/* 3. Services Grid with Real Insect Photos */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-white border border-[#EAEBE5] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={svc.image}
                    alt={svc.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded">
                    Starts {svc.startingPrice}
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 bg-[#115439] text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                    {svc.warranty}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-mono text-[#115439] font-bold uppercase tracking-wider block">
                      {svc.category}
                    </span>
                    <h2 className="text-lg font-display font-bold text-[#001457] mt-0.5">
                      {svc.name}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#36393D] leading-relaxed">
                    {svc.tagline}
                  </p>

                  <div className="p-2.5 rounded-lg bg-neutral-50 border border-[#EAEBE5] text-xs space-y-1">
                    <p className="text-[#001457] font-semibold">Active: <span className="font-mono text-[#36393D] font-normal">{svc.chemistry}</span></p>
                    <p className="text-[#86888B]">{svc.prepAdvice}</p>
                  </div>

                  <ul className="space-y-1.5 pt-1 border-t border-[#EAEBE5]">
                    {svc.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#36393D]">
                        <Check className="h-3.5 w-3.5 text-[#115439] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0 flex gap-2">
                <Link
                  href={`/contact?service=${svc.id}`}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-[#001457] hover:bg-[#002F47] text-white text-xs sm:text-sm font-semibold text-center transition-colors"
                >
                  Book Inspection
                </Link>
                <a
                  href="tel:+919494281100"
                  className="py-2.5 px-3 rounded-lg border border-[#EAEBE5] hover:border-[#001457] text-[#001457] text-xs font-semibold text-center transition-colors"
                  title="Call Dispatch"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How It Works (Simple 4 Steps) */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-neutral-50/70 border-y border-neutral-200 mb-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#115439] font-bold block">
              OUR PROCEDURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#001457]">
              The 4-Step Eradication Process
            </h2>
            <p className="text-sm text-[#86888B] leading-relaxed">
              How our certified technicians safely inspect, treat, and protect your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-xl bg-white border border-[#EAEBE5] shadow-xs space-y-2">
              <span className="text-2xl font-bold font-mono text-[#115439] block">01</span>
              <h3 className="text-base font-display font-bold text-[#001457]">Free Diagnostic Inspection</h3>
              <p className="text-xs text-[#86888B] leading-relaxed">
                We identify the pest species, nesting locations, and moisture conduits across your property.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#EAEBE5] shadow-xs space-y-2">
              <span className="text-2xl font-bold font-mono text-[#115439] block">02</span>
              <h3 className="text-base font-display font-bold text-[#001457]">Odorless Micro-Treatment</h3>
              <p className="text-xs text-[#86888B] leading-relaxed">
                Targeted application of non-repellent Bayer or Syngenta chemistry directly to nesting zones without airborne fumes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#EAEBE5] shadow-xs space-y-2">
              <span className="text-2xl font-bold font-mono text-[#115439] block">03</span>
              <h3 className="text-base font-display font-bold text-[#001457]">Entry Proofing &amp; Sealing</h3>
              <p className="text-xs text-[#86888B] leading-relaxed">
                Sealing foundation cracks, pipe penetrations, and drain flyout points to prevent pest re-entry.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#EAEBE5] shadow-xs space-y-2">
              <span className="text-2xl font-bold font-mono text-[#115439] block">04</span>
              <h3 className="text-base font-display font-bold text-[#001457]">Written Warranty Card</h3>
              <p className="text-xs text-[#86888B] leading-relaxed">
                Official stamped CIBRC warranty documentation. If pests return during warranty, we re-treat for free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AMC Packages for Homes & Businesses */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#115439] font-bold block">
            CONTINUOUS YEAR-ROUND IMMUNITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#001457]">
            Annual Maintenance Contracts (AMC)
          </h2>
          <p className="text-sm text-[#86888B] leading-relaxed">
            Protect your property 365 days a year with scheduled preventative visits and free emergency callbacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#EAEBE5] bg-white shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#86888B] uppercase">Residential</span>
              <h3 className="text-lg font-bold text-[#001457]">Seasonal Defense</h3>
              <p className="text-xs text-[#86888B]">2 Scheduled visits per year for standard flats</p>
              <div className="pt-2 border-t border-[#EAEBE5]">
                <span className="text-2xl font-bold text-[#001457]">₹2,499</span>
                <span className="text-xs text-[#86888B]"> / year</span>
              </div>
              <ul className="space-y-2 text-xs text-[#36393D] pt-2">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#115439]" /><span>Odorless Cockroach Gel Treatment</span></li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#115439]" /><span>Drain Bio-Enzyme Barrier</span></li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#115439]" /><span>90-Day Guarantee per visit</span></li>
              </ul>
            </div>
            <Link
              href="/contact?plan=seasonal"
              className="w-full py-2.5 px-4 rounded-lg border border-[#001457] text-[#001457] hover:bg-[#001457] hover:text-white text-xs sm:text-sm font-semibold text-center transition-colors"
            >
              Choose Seasonal
            </Link>
          </div>

          <div className="p-6 rounded-xl border-2 border-[#115439] bg-white shadow-md space-y-4 flex flex-col justify-between relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#115439] text-white text-[10px] font-mono font-bold px-3 py-0.5 rounded-full uppercase">
              MOST POPULAR
            </span>
            <div className="space-y-3 pt-1">
              <span className="text-xs font-mono font-bold text-[#115439] uppercase">Whole-Home 365</span>
              <h3 className="text-lg font-bold text-[#001457]">Premium 365 Shield</h3>
              <p className="text-xs text-[#86888B]">4 Quarterly visits + free emergency callbacks</p>
              <div className="pt-2 border-t border-[#EAEBE5]">
                <span className="text-2xl font-bold text-[#001457]">₹4,499</span>
                <span className="text-xs text-[#86888B]"> / year</span>
              </div>
              <ul className="space-y-2 text-xs text-[#36393D] pt-2">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#115439]" /><span>Quarterly Cockroach &amp; Ant Eradication</span></li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#115439]" /><span>Bed Bug Thermal Scan &amp; Treatment</span></li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#115439]" /><span>Monsoon ULV Mosquito Larvicide Barrier</span></li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#115439]" /><span>Unlimited free emergency callbacks</span></li>
              </ul>
            </div>
            <Link
              href="/contact?plan=premium-365"
              className="w-full py-2.5 px-4 rounded-lg bg-[#115439] hover:bg-[#002F47] text-white text-xs sm:text-sm font-bold text-center transition-colors"
            >
              Get 365 Shield
            </Link>
          </div>

          <div className="p-6 rounded-xl border border-[#EAEBE5] bg-white shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#86888B] uppercase">Commercial &amp; FSSAI</span>
              <h3 className="text-lg font-bold text-[#001457]">Enterprise AMC</h3>
              <p className="text-xs text-[#86888B]">Restaurants, pharma &amp; Gajuwaka warehouses</p>
              <div className="pt-2 border-t border-[#EAEBE5]">
                <span className="text-2xl font-bold text-[#001457]">Custom</span>
                <span className="text-xs text-[#86888B]"> / schedule</span>
              </div>
              <ul className="space-y-2 text-xs text-[#36393D] pt-2">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#115439]" /><span>Monthly CIBRC clinical audit logbook</span></li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#115439]" /><span>Barcoded rodent bait station telemetry</span></li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#115439]" /><span>FSSAI food safety certificate compliance</span></li>
              </ul>
            </div>
            <Link
              href="/contact?type=commercial"
              className="w-full py-2.5 px-4 rounded-lg border border-[#001457] text-[#001457] hover:bg-[#001457] hover:text-white text-xs sm:text-sm font-semibold text-center transition-colors"
            >
              Inquire Enterprise
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Simple FAQs */}
      <section className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#115439] font-bold block">
            CLEAR ANSWERS
          </span>
          <h2 className="text-2xl font-display font-bold text-[#001457]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="border border-[#EAEBE5] rounded-xl overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left font-display font-semibold text-sm text-[#001457] hover:text-[#115439] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#86888B] shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#115439]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-[#36393D] leading-relaxed border-t border-[#EAEBE5]/60 bg-neutral-50/50">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Bottom Emergency Banner */}
      <section className="py-10 sm:py-12 px-3 sm:px-6 lg:px-8 bg-[#001457] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Need Same-Day Pest Control in Visakhapatnam?
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Our certified technicians are ready to dispatch from Dwaraka Nagar, MVP Colony, Madhurawada, and Gajuwaka.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:+919494281100"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F7BE00] hover:bg-[#F5C518] text-[#001457] text-sm font-bold transition-colors shadow-sm"
            >
              <Phone className="h-4 w-4 text-[#001457]" />
              <span>Call: +91 94942 81100</span>
            </a>
            <a
              href="https://wa.me/919494281100?text=Hello%20A1%20Pest%20Control%2C%20I%20need%20service%20in%20Visakhapatnam."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold transition-colors shadow-sm"
            >
              <MessageSquare className="h-4 w-4 text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
