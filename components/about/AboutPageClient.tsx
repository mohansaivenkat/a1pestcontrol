"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SplitText } from "@/components/react-bits/SplitText";
import { BlurText } from "@/components/react-bits/BlurText";
import { DecryptedText } from "@/components/react-bits/DecryptedText";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import { SpecularButton } from "@/components/react-bits/SpecularButton";
import { ClinicalComplianceCard } from "@/components/ui/ClinicalComplianceCard";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  MapPin,
  FileText,
  Clock,
  Sparkles,
  Phone,
  AlertTriangle,
  Beaker,
  Compass,
  Building,
  Microscope,
  Layers,
  ChevronRight,
  ShieldAlert,
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

interface PillarStandard {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
  specs: { label: string; value: string }[];
}

const PILLARS: PillarStandard[] = [
  {
    id: "chemistry",
    title: "Formulation Purity",
    subtitle: "Zero Unlabeled Agricultural Repacks",
    summary:
      "We strictly ban organophosphates, kerosene distillates, and unbranded mystery chemicals commonly used by unorganized local sprayers in Visakhapatnam. Every chemical batch is factory-sealed from Bayer Environmental Science or Syngenta India with verified batch certificates.",
    details: [
      "Exclusive use of Bayer Premise (Imidacloprid 30.5% SC) for non-repellent structural termite barriers",
      "Bayer Maxforce Indoxacarb 0.6% odorless cockroach gel matrices for kitchen cabinet treatments",
      "Syngenta Talon & Bromadiolone 0.005% rodenticide baits housed inside keyed tamper-resistant stations",
      "Water-based Deltamethrin 2.5% Flow for cold ULV mosquito fogging—zero oily petroleum residues on walls",
    ],
    specs: [
      { label: "Mammalian Safety", value: "WHO Class-U / Class-III" },
      { label: "VOC Emissions", value: "0% Indoor Hydrocarbons" },
      { label: "Regulatory Gate", value: "100% CIBRC Registered" },
    ],
  },
  {
    id: "hardware",
    title: "Calibrated Hardware",
    subtitle: "Hospital-Grade Injection & Atomization",
    summary:
      "A pesticide is only as effective as the pressure and droplet spectrum used to deliver it. We retired leaky brass hand pumps in favor of precision German-engineered injection and motorized cold atomization equipment.",
    details: [
      "Bosch Professional rotary hammer drills with integrated depth-stop limiters to protect structural rebar",
      "B&G stainless-steel commercial sprayers with Dripless Extenda-Bans for exact milliliter dosage control",
      "Curtis Dyna-Fog electric cold ULV atomizers producing 15–30 micron droplets that stay suspended to intercept flying vectors",
      "High-pressure hydraulic termite injectors delivering 150 PSI saturation deep beneath foundation slabs",
    ],
    specs: [
      { label: "Droplet Micron Spectrum", value: "15 to 30 Microns" },
      { label: "Drill Precision", value: "6mm Micro-Perforations" },
      { label: "Pump Pressure Calibration", value: "Bi-Monthly Testing" },
    ],
  },
  {
    id: "entomology",
    title: "Entomological Vetting",
    subtitle: "Biologist-Trained Technical Staff",
    summary:
      "Every A1 applicator undergoes 120 hours of mandatory training in structural entomology, pest behavior, and chemical toxicology before visiting a client property. No daily-wage casual laborers are ever dispatched to your home.",
    details: [
      "Certified handlers licensed under the Insecticides Act, 1968 and CIBRC standards",
      "Comprehensive background verification and bi-annual biometric health and toxicology checkups",
      "Mandatory PPE: Nitrile gloves, 3M organic vapor respirators, and splash goggles for commercial treatments",
      "Direct oversight by graduate entomologists who formulate custom treatment dossiers for complex sites",
    ],
    specs: [
      { label: "Initial Training", value: "120 Classroom + Field Hours" },
      { label: "Re-Certification", value: "Bi-Annual Exam" },
      { label: "Background Audit", value: "100% Police Verified" },
    ],
  },
  {
    id: "warranty",
    title: "Legal Warranty",
    subtitle: "Stamped Stored Physical Certificates",
    summary:
      "Local directory vendors disappear when pests return after a week. Our warranties are legal contracts with physical stamped certificates, unique serialized job numbers, and guaranteed callback appointments within 24 hours.",
    details: [
      "Up to 5-Year Stamped Written Warranty for Subterranean Termite barrier treatments",
      "180-Day Comprehensive Retreatment Guarantee for Bed Bug thermal and chemical eradications",
      "Zero-argument callback policy: if target pests survive beyond the protocol window, we retreat at zero cost",
      "Digital service record backed up on our server with complete chemical dosage and technician logs",
    ],
    specs: [
      { label: "Termite Warranty", value: "Up to 5 Years Stamped" },
      { label: "Bed Bug Warranty", value: "180 Days Written" },
      { label: "Callback SLA", value: "Within 24 Hours Guaranteed" },
    ],
  },
];

const LOCAL_FACTORS = [
  {
    zone: "Bay of Bengal Coastal Strip",
    neighborhoods: "RK Beach, MVP Colony, Sagar Nagar, Rushikonda",
    challenge: "High marine salinity and 85%+ atmospheric moisture",
    impact:
      "Sea air corrodes superficial pesticide dusts rapidly. High coastal humidity speeds up dampwood termite fungal decomposition and encourages drain-fly nesting.",
    solution:
      "Micro-encapsulated polymers that resist salt oxidation and do not break down under continuous coastal salt-spray exposure.",
  },
  {
    zone: "Red Loam Foundation Corridor",
    neighborhoods: "Dwaraka Nagar, Seethammadhara, Maddilapalem, Resapuvanipalem",
    challenge: "Moisture-retaining iron-rich clay soils",
    impact:
      "Dense red loam creates deep underground moisture veins where subterranean termites (Odontotermes obesus) thrive and tunnel into concrete foundation cracks.",
    solution:
      "High-pressure 150 PSI subterranean soil drenching using non-repellent Imidacloprid to establish an invisible lethal zone around the structural perimeter.",
  },
  {
    zone: "High-Rise Apartment Shafts",
    neighborhoods: "Madhurawada, Yendada, Kommadi, IT SEZ",
    challenge: "Shared plumbing ducts and centralized utility shafts",
    impact:
      "German cockroaches migrate vertically between floors through ductwork and electrical conduits. Standard surface sprays only scatter them to neighbor flats.",
    solution:
      "Cascade domino-effect Indoxacarb gel baiting that cockroaches ingest and carry back to communal hidden nesting voids behind ductwork.",
  },
  {
    zone: "Industrial and Food Logistics Belt",
    neighborhoods: "Gajuwaka, Auto Nagar, Kurmannapalem, Industrial Estate",
    challenge: "Grain depots, pharma warehouses, and high rodent pressure",
    impact:
      "Rats gnaw electrical cables, causing industrial downtime and contaminating commercial grain and packaging lots under FSSAI scrutiny.",
    solution:
      "Heavy-duty keyed tamper-resistant rodent stations with weather-resistant anticoagulant blocks and automated tamper logs.",
  },
];

export const AboutPageClient: React.FC = () => {
  const [activePillar, setActivePillar] = useState("chemistry");
  const currentPillarData = PILLARS.find((p) => p.id === activePillar) || PILLARS[0];

  return (
    <div className="w-full bg-surface-main text-neutral-900 font-body py-8 sm:py-12 md:py-16">
      {/* 1. Hero Section: Prestige Botanical Narrative */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 border border-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-700">
              <ShieldCheck className="h-4 w-4 text-brand-700 shrink-0" aria-hidden="true" />
              <span>
                <DecryptedText text="ENTOMOLOGICAL & STRUCTURAL PEST MANAGEMENT • EST. 2010" />
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-neutral-950 tracking-tight leading-[1.14]">
              <SplitText text="Engineered for Visakhapatnam’s Coastal Micro-Climates." as="span" />
            </h1>

            <div className="max-w-2xl">
              <BlurText
                text="From Seethammadhara to Gajuwaka: Why coastal salinity, red loam soil, and monsoon humidity require scientific chemistry—not uncalibrated toxic spraying."
                as="p"
                className="text-sm sm:text-base text-neutral-700 leading-relaxed font-sans"
              />
            </div>

            {/* High-Density Telemetry Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
              <div className="p-3 rounded-xl bg-surface-card border border-neutral-300">
                <span className="text-xs font-sans text-neutral-500 block">Founded</span>
                <span className="font-mono text-base font-bold text-neutral-950">
                  <DecryptedText text="2010 VIZAG" />
                </span>
              </div>
              <div className="p-3 rounded-xl bg-surface-card border border-neutral-300">
                <span className="text-xs font-sans text-neutral-500 block">Licensing</span>
                <span className="font-mono text-base font-bold text-brand-700">
                  <DecryptedText text="CIBRC GOVT" />
                </span>
              </div>
              <div className="p-3 rounded-xl bg-surface-card border border-neutral-300">
                <span className="text-xs font-sans text-neutral-500 block">Properties</span>
                <span className="font-mono text-base font-bold text-neutral-950">
                  <DecryptedText text="14,000+ SITES" />
                </span>
              </div>
              <div className="p-3 rounded-xl bg-surface-card border border-neutral-300">
                <span className="text-xs font-sans text-neutral-500 block">Organophosphates</span>
                <span className="font-mono text-base font-bold text-accent-700">
                  <DecryptedText text="0% BANNED" />
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <SpecularButton
                variant="botanical"
                size="md"
                onClick={() => {
                  const dossierEl = document.getElementById("standards-dossier");
                  if (dossierEl) dossierEl.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Inspect Clinical Standards Dossier</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </SpecularButton>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 hover:border-brand-700 bg-white text-xs sm:text-sm font-semibold text-neutral-800 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-brand-700" aria-hidden="true" />
                <span>Contact Headquarters</span>
              </Link>
            </div>
          </div>

          {/* Right Hero Image Card with Authentic Technical Detail */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-300 bg-white relative">
              <div className="aspect-[4/3] w-full relative">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                  alt="Certified A1 pest control technician inspecting property"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-xs font-sans text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40 inline-block">
                    Director of Field Entomology
                  </span>
                  <h4 className="text-sm sm:text-base font-display font-bold leading-tight">
                    Calibrated Micro-Injection & Odorless Gel Protocol
                  </h4>
                  <p className="text-xs text-neutral-300 font-sans">
                    Zero aerosol dispersion in food preparation spaces
                  </p>
                </div>
              </div>

              {/* Sub-card with CIBRC License Info */}
              <div className="p-4 bg-surface-card border-t border-neutral-200 flex items-center justify-between text-xs font-sans">
                <div>
                  <span className="text-neutral-500 block text-xs">CIBRC License Code:</span>
                  <span className="font-mono font-bold text-neutral-950">AP/VSP/2010/8842-P</span>
                </div>
                <div className="text-right">
                  <span className="text-neutral-500 block text-xs">Central Depot:</span>
                  <span className="font-bold text-brand-700">Dwaraka Nagar, Vizag</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Manifesto Section with React Bits ScrollReveal */}
      <section className="bg-surface-card border-y border-neutral-200 py-12 sm:py-16 mb-14 sm:mb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-3">
          <span className="text-xs text-brand-700 font-semibold block">
            The Founding Clinical Mandate
          </span>
          <ScrollReveal
            text="We founded A1 Pest Control Services in 2010 with a singular mission: to eradicate pests from Visakhapatnam homes and commercial facilities using hospital-grade, odorless science—protecting families, infants, and pets from the dangerous toxic fogs of unorganized local sprayers."
            highlightColor="#2D5A27"
            className="text-lg sm:text-2xl md:text-3xl font-display font-bold text-neutral-950"
          />
        </div>
      </section>

      {/* 3. Visakhapatnam Coastal Geography & Entomological Realities */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="max-w-3xl mb-8 sm:mb-12 space-y-2">
          <span className="text-xs text-brand-700 font-semibold block">
            Local Geological &amp; Climatic Entomology
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-neutral-950 tracking-tight">
            <SplitText text="Why Generic Pest Spraying Fails in Visakhapatnam" as="span" />
          </h2>
          <BlurText
            text="Visakhapatnam’s narrow geography between the Eastern Ghats and the Bay of Bengal creates four micro-zones that render one-size-fits-all treatments completely useless."
            as="p"
            className="text-xs sm:text-sm text-neutral-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {LOCAL_FACTORS.map((factor, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-surface-card border border-neutral-300 p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-sans font-bold text-accent-700 bg-accent-100 px-2 py-0.5 rounded">
                    Zone 0{idx + 1}
                  </span>
                  <span className="text-xs font-sans text-neutral-500">{factor.neighborhoods}</span>
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-neutral-950">
                  {factor.zone}
                </h3>
                <div className="p-2.5 rounded-lg bg-neutral-100 border border-neutral-200">
                  <p className="text-xs font-sans text-neutral-800">
                    <strong className="text-accent-700">Environmental Stressor:</strong> {factor.challenge}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {factor.impact}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 bg-brand-100/50 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs text-neutral-900 leading-tight">
                    <strong className="text-brand-900">A1 Clinical Protocol:</strong> {factor.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Plane UI Component: "Our Four Pillar Operating Standards Dossier" */}
      <section id="standards-dossier" className="w-full py-14 sm:py-20 bg-surface-muted border-y border-neutral-200 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs text-brand-700 font-semibold block">
              Plane UI Technical Dossier
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-neutral-950 tracking-tight">
              <SplitText text="The Four Pillars of Clinical Pest Management" as="span" />
            </h2>
            <BlurText
              text="Examine the exact specifications, chemical purity requirements, and hardware calibrations behind every dispatch."
              as="p"
              className="text-xs sm:text-sm text-neutral-600"
            />
          </div>

          {/* Plane UI Tab Strip (Horizontal Scrollable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-neutral-300">
            {PILLARS.map((p) => {
              const isSelected = p.id === activePillar;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePillar(p.id)}
                  className={`px-4 py-2.5 rounded-t-xl font-display text-xs sm:text-sm font-bold transition-colors duration-150 whitespace-nowrap cursor-pointer border-t border-x focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 active:scale-[0.98] disabled:opacity-50 ${
                    isSelected
                      ? "bg-white text-brand-700 border-neutral-300 border-b-2 border-b-brand-700 -mb-[1px]"
                      : "bg-neutral-200/60 text-neutral-600 hover:text-neutral-950 border-transparent"
                  }`}
                >
                  {p.title}
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card with Plane UI Density */}
          <div className="rounded-2xl bg-white border border-neutral-300 p-5 sm:p-8 md:p-10 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-950">
                    {currentPillarData.title}
                  </h3>
                  <p className="text-xs font-semibold text-accent-700 mt-1">
                    {currentPillarData.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mt-2">
                    {currentPillarData.summary}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-sans text-neutral-600 font-semibold">
                    Technical Directives &amp; Protocols:
                  </h4>
                  <ul className="space-y-2">
                    {currentPillarData.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                        <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specs Rail (5 Cols) */}
              <div className="lg:col-span-5 bg-neutral-100 rounded-2xl p-4 sm:p-6 border border-neutral-200 space-y-4">
                <span className="text-xs text-brand-700 font-bold block border-b border-neutral-200 pb-2">
                  Specification Metrics
                </span>
                <div className="space-y-3">
                  {currentPillarData.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-neutral-200/60 last:border-b-0 font-sans">
                      <span className="text-neutral-600">{spec.label}:</span>
                      <span className="font-bold text-neutral-950">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Audited bi-annually under Government of India Central Insecticides Board &amp; Registration Committee (CIBRC) directives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Zonal Operating Grid (Visakhapatnam Physical Depots) */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mb-8 sm:mb-12 space-y-2">
          <span className="text-xs text-brand-700 font-semibold block">
            Physical Infrastructure &amp; Zonal Hubs
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-neutral-950 tracking-tight">
            <SplitText text="Four Physical Dispatch Depots Across Greater Visakhapatnam" as="span" />
          </h2>
          <BlurText
            text="We do not operate as an internet-only aggregator. Our technicians and motorized equipment are stationed permanently at four key geographic hubs for rapid response."
            as="p"
            className="text-xs sm:text-sm text-neutral-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {ZONAL_HUBS.map((hub, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-surface-card border border-neutral-300 p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-sans font-bold text-brand-700">
                    <MapPin className="w-4 h-4 text-brand-700" aria-hidden="true" />
                    <span>Depot 0{idx + 1}</span>
                  </div>
                  <span className="text-xs font-sans px-2 py-0.5 rounded bg-brand-100 text-brand-900 font-medium">
                    {hub.response} response
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-neutral-950">
                  {hub.hub}
                </h3>

                <p className="text-xs text-neutral-600 font-sans">
                  {hub.address}
                </p>

                <div className="pt-2">
                  <span className="text-xs text-neutral-500 font-sans block mb-1">
                    Coverage Localities:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hub.coverage.map((loc, lIdx) => (
                      <span
                        key={lIdx}
                        className="text-xs font-sans px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200 text-neutral-800"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-sans text-neutral-600">
                <span>Active Squad: <strong className="text-neutral-950">{hub.techs}</strong></span>
                <span className="text-brand-700 font-semibold">Ready for Dispatch</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Clinical Accreditations & Licensing Vault */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-surface-card border border-neutral-300 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs text-brand-700 font-semibold block">
                Government of India Accreditations
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950">
                <SplitText text="Formally Licensed & Regulatory Audited" as="span" />
              </h2>
              <BlurText
                text="Every technician on our squad carries verifiable hazardous chemical handling certification under the Insecticides Act. We carry comprehensive general liability coverage and issue stamped CIBRC documentation with every contract."
                as="p"
                className="text-xs sm:text-sm text-neutral-700 leading-relaxed"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans">
                <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-200">
                  <span className="text-neutral-500 block text-xs">CIBRC Central Registration:</span>
                  <span className="font-mono font-bold text-neutral-950">AP/VSP/2010/8842-P</span>
                </div>
                <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-200">
                  <span className="text-neutral-500 block text-xs">GSTIN Registration:</span>
                  <span className="font-mono font-bold text-neutral-950">37AAHFA1892B1Z8</span>
                </div>
                <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-200">
                  <span className="text-neutral-500 block text-xs">Commercial Insecticide License:</span>
                  <span className="font-mono font-bold text-neutral-950">DIS/VSP/PEST/2011/491</span>
                </div>
                <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-200">
                  <span className="text-neutral-500 block text-xs">Formulation Partner:</span>
                  <span className="font-bold text-brand-700">Bayer Environmental Science</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-700 hover:bg-brand-900 active:scale-[0.98] text-white text-xs sm:text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                >
                  <span>Book Technician Consultation at Your Site</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <ClinicalComplianceCard
                licenseNumber="CIBRC-AP/VSP/2010/8842-P"
                warrantyPeriod="5-YEAR STAMPED WARRANTY"
                depotHub="Dwaraka Nagar / Srinagar Central Hub"
              />
              <p className="text-xs text-neutral-500 text-center mt-3 font-sans">
                Official Stamped Certificate • Issued with Every Property Contract
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
