"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Phone,
  ShieldCheck,
  Clock,
  Sparkles,
  Building2,
  Check,
} from "lucide-react";

interface OperatingZone {
  hub: string;
  address: string;
  coverage: string[];
  techs: string;
  response: string;
}

const ZONAL_HUBS: OperatingZone[] = [
  {
    hub: "Central Headquarters & Diagnostic Depot",
    address: "47-11-26/A, 1st Floor, Dwaraka Nagar, Visakhapatnam 530016",
    coverage: ["Dwaraka Nagar", "Srinagar", "RTC Complex", "Ram Nagar", "Daba Gardens", "Asilmetta"],
    techs: "6 Certified Technicians",
    response: "15–25 Minutes",
  },
  {
    hub: "Coastal & Residential North Depot",
    address: "Sector 3, Opposite Sivajipalem Park, MVP Colony, Visakhapatnam 530017",
    coverage: ["MVP Colony", "Seethammadhara", "Lawsons Bay", "Pedda Waltair", "Ushodaya Junction"],
    techs: "4 Certified Technicians",
    response: "20–35 Minutes",
  },
  {
    hub: "IT Corridor & Hill Corridor Depot",
    address: "Midhilapuri Vuda Colony, Main Road, Madhurawada, Visakhapatnam 530048",
    coverage: ["Madhurawada", "Yendada", "Rushikonda", "IT SEZ", "Kommadi", "PM Palem"],
    techs: "4 Certified Technicians",
    response: "30–45 Minutes",
  },
  {
    hub: "Industrial Logistics & Marine Depot",
    address: "Old Gajuwaka Main Road, Near Auto Nagar Gate, Visakhapatnam 530026",
    coverage: ["Gajuwaka", "Kurmannapalem", "Auto Nagar", "Steel Plant Township", "Sheela Nagar"],
    techs: "5 Certified Technicians",
    response: "35–50 Minutes",
  },
];

const CORE_STANDARDS = [
  {
    title: "1. Formulation Purity",
    subtitle: "Zero Unlabeled Agricultural Repacks",
    desc: "We strictly ban organophosphates, kerosene distillates, and unbranded mystery chemicals commonly used by unorganized sprayers in Vizag. Every chemical batch is factory-sealed from Bayer Environmental Science or Syngenta India with verified batch certificates.",
    points: [
      "Bayer Premise (Imidacloprid 30.5% SC) for 5-year termite barriers",
      "Bayer Maxforce Indoxacarb odorless gel for kitchen cabinets",
      "Syngenta Talon & Bromadiolone inside keyed tamper-resistant stations",
      "Water-based Deltamethrin 2.5% Flow for cold ULV mosquito fogging",
    ],
  },
  {
    title: "2. Calibrated Equipment",
    subtitle: "Hospital-Grade Injection & Atomization",
    desc: "A pesticide is only as effective as the equipment delivering it. We retired manual brass pumps in favor of precision German-engineered injection and motorized cold atomization equipment.",
    points: [
      "Bosch Professional rotary hammer drills with depth-stop limiters",
      "High-pressure hydraulic termite injectors delivering 150 PSI saturation",
      "Curtis Dyna-Fog electric cold ULV atomizers for 15–30 micron droplets",
      "Color-matched non-shrink polymer hole capping for invisible floor finish",
    ],
  },
  {
    title: "3. Certified Entomological Staff",
    subtitle: "Biologist-Trained Technical Staff",
    desc: "Every A1 applicator undergoes 120 hours of mandatory training in structural entomology, pest behavior, and chemical toxicology before visiting a client property. No daily-wage casual laborers are ever dispatched to your home.",
    points: [
      "Certified handlers licensed under the Insecticides Act, 1968",
      "100% police background verification and health checkups",
      "Full PPE: Nitrile gloves, 3M organic vapor respirators, and eye protection",
      "Direct oversight by graduate entomologists for complex sites",
    ],
  },
];

export const AboutPageClient: React.FC = () => {
  return (
    <div className="w-full bg-surface-main text-neutral-900 font-body">
      {/* 1. Hero Section: Clean Background Photo with High-Contrast Text */}
      <section className="relative w-full min-h-[75vh] lg:min-h-[82vh] flex items-center py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 overflow-hidden border-b border-neutral-200">
        <picture className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <source media="(min-width: 768px)" srcSet="/images/About_us.png" />
          <img
            src="/images/Mobile-aboutus.png"
            alt="A1 Pest Control Visakhapatnam Team and Operations"
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
                Established 2010 • Visakhapatnam Headquarters
              </span>
            </div>

            {/* Clear Plain H1 Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-display font-bold text-[#001457] leading-[1.16] tracking-tight">
              About A1 Pest Control Services Visakhapatnam
            </h1>

            {/* Plain Text Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-[#36393D] leading-relaxed max-w-2xl font-sans">
              Founded in 2010. Over 14 years of certified, odorless pest eradication for 14,000+ homes, villas, restaurants, and industrial warehouses across Visakhapatnam.
            </p>

            {/* 4 Clean Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1 max-w-2xl">
              <div className="p-3 rounded-xl bg-white/95 border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs text-[#115439] font-bold">
                  <Clock className="w-4 h-4 text-[#115439]" />
                  <span>Founded</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-[#001457] mt-0.5">2010</p>
                <span className="text-xs text-[#86888B]">14+ Years in Vizag</span>
              </div>

              <div className="p-3 rounded-xl bg-white/95 border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs text-[#115439] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#115439]" />
                  <span>Licensing</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-[#115439] mt-0.5">CIBRC</p>
                <span className="text-xs text-[#86888B]">Govt of India</span>
              </div>

              <div className="p-3 rounded-xl bg-white/95 border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs text-[#115439] font-bold">
                  <Building2 className="w-4 h-4 text-[#115439]" />
                  <span>Properties</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-[#001457] mt-0.5">14,000+</p>
                <span className="text-xs text-[#86888B]">Protected Sites</span>
              </div>

              <div className="p-3 rounded-xl bg-white/95 border border-[#EAEBE5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs text-[#115439] font-bold">
                  <Sparkles className="w-4 h-4 text-[#1DAA4C]" />
                  <span>Odor</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-[#001457] mt-0.5">0% Smell</p>
                <span className="text-xs text-[#86888B]">100% Odorless Gel</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#zonal-hubs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#001457] hover:bg-[#002F47] text-white text-sm font-semibold transition-colors shadow-sm"
              >
                <span>View Our 4 Vizag Hubs</span>
                <ArrowRight className="w-4 h-4 text-[#F7BE00]" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#EAEBE5] hover:border-[#115439] bg-white text-sm font-semibold text-[#001457] transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#115439]" />
                <span>Contact Headquarters</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Founding Mission: Plain, Honest Story */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#115439] font-bold block">
            OUR FOUNDING STORY
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#001457]">
            Why We Started A1 Pest Control in 2010
          </h2>
          <div className="text-sm sm:text-base text-[#36393D] leading-relaxed space-y-3 font-sans">
            <p>
              In 2010, the majority of pest control in Visakhapatnam was handled by unorganized street sprayers who bought cheap, agricultural-grade pesticides and diluted them with kerosene or diesel. Families were forced to evacuate their homes for 6 to 8 hours, returning to toxic fumes that made children cough and gave elders headaches.
            </p>
            <p>
              Worse, these generic sprays only scattered cockroaches to neighboring flats without destroying the nesting colony. Pests returned within weeks, and the sprayers never answered warranty calls.
            </p>
            <p>
              We established <strong>A1 Pest Control Services</strong> to bring scientific, hospital-grade, odorless pest eradication to Visakhapatnam. We invest exclusively in factory-sealed chemistry from world leaders like Bayer and Syngenta. Our gel baiting requires zero kitchen emptying, has zero fumes, and is completely safe for infants, asthma patients, and domestic pets.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The 4 Physical Zonal Hubs in Visakhapatnam */}
      <section id="zonal-hubs" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-neutral-50/70 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#115439] font-bold block">
              PHYSICAL INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#001457]">
              Four Zonal Dispatch Depots in Visakhapatnam
            </h2>
            <p className="text-sm text-[#86888B] leading-relaxed">
              We operate 4 physical offices across Greater Vizag to ensure quick 60-minute dispatch to any neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {ZONAL_HUBS.map((hub, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-white border border-[#EAEBE5] shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-bold text-[#001457]">
                      {hub.hub}
                    </h3>
                    <p className="text-xs text-[#86888B] mt-0.5 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-[#115439] shrink-0" />
                      <span>{hub.address}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#A9EFC0]/70 text-[#115439] shrink-0">
                    {hub.response}
                  </span>
                </div>

                <div className="pt-2 border-t border-[#EAEBE5] space-y-2 text-xs">
                  <div className="text-[#36393D]">
                    <span className="font-semibold text-[#001457]">Areas Covered: </span>
                    <span>{hub.coverage.join(", ")}</span>
                  </div>
                  <div className="text-[#36393D]">
                    <span className="font-semibold text-[#001457]">Active Capacity: </span>
                    <span>{hub.techs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Standards */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#115439] font-bold block">
              OPERATING STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#001457]">
              Our Three Clinical Pillars
            </h2>
            <p className="text-sm text-[#86888B] leading-relaxed">
              Chemistry purity, calibrated hardware, and verified personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_STANDARDS.map((std, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#EAEBE5] bg-neutral-50/50 space-y-3">
                <h3 className="text-lg font-display font-bold text-[#001457]">{std.title}</h3>
                <p className="text-xs font-semibold text-[#115439]">{std.subtitle}</p>
                <p className="text-xs sm:text-sm text-[#36393D] leading-relaxed">{std.desc}</p>
                <ul className="space-y-1.5 pt-2 border-t border-[#EAEBE5]">
                  {std.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#36393D]">
                      <Check className="h-3.5 w-3.5 text-[#115439] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-10 sm:py-12 px-3 sm:px-6 lg:px-8 bg-[#001457] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Have Questions About Our Treatment Methods?
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Speak directly with our senior technical staff in Dwaraka Nagar or MVP Colony. We provide free property inspections and transparent written quotes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:+919494281100"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F7BE00] hover:bg-[#F5C518] text-[#001457] text-sm font-bold transition-colors shadow-sm"
            >
              <Phone className="h-4 w-4 text-[#001457]" />
              <span>Call: +91 94942 81100</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white text-sm font-semibold transition-colors"
            >
              <span>Schedule Inspection</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
