"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  details: string[];
  color: string;
  accentBg: string;
  borderAccent: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Instant Diagnostic & Exact Price Lock",
    subtitle: "No surprise add-ons. 100% transparent pricing before technician dispatch.",
    badge: "STEP 01 • ESTIMATOR",
    description:
      "Select your pest problem and property configuration. Our Plane-style engine calculates your exact formulation needs, treatment duration, and price range. Pick an arrival slot in 30 seconds.",
    details: [
      "Select pest type (termites, German roaches, bed bugs, etc.)",
      "Exact transparent quote generated instantly (₹1,199 – ₹1,499)",
      "Zero phone spam — receive your confirmation via WhatsApp instantly",
    ],
    color: "#FAF7F2",
    accentBg: "bg-surface-travertine",
    borderAccent: "border-timber-700/30",
  },
  {
    step: "02",
    title: "45-Min Odorless Clinical Treatment",
    subtitle: "No kitchen emptying required. Certified, police-verified technicians.",
    badge: "STEP 02 • DISPATCH",
    description:
      "Our uniformed technician arrives from the nearest Vizag zonal hub (MVP, Gajuwaka, or Dwaraka Nagar) equipped with calibrated Bayer/Syngenta micro-applicators. Clean, methodical, zero pungent fumes.",
    details: [
      "Precision baiting along kitchen cabinet hinges and appliance motors",
      "6mm drill-fill-seal subterranean barriers for structural termite protection",
      "Child and pet safe formulations (WHO-prequalified & CIBRC registered)",
    ],
    color: "#FFFFFF",
    accentBg: "bg-botanical-100",
    borderAccent: "border-botanical-700/40",
  },
  {
    step: "03",
    title: "Digital PDF Warranty & Day-14 Follow-up",
    subtitle: "Legal warranty certificate stamped on completion with free callback guarantee.",
    badge: "STEP 03 • ASSURANCE",
    description:
      "Once treatment completes, receive your official digital warranty directly on WhatsApp and email. For bed bugs, our automated lifecycle tracker schedules your mandatory Day-14 nymph check.",
    details: [
      "Up to 5-year written warranty for subterranean termite barriers",
      "Automated Day-14 reminder to eliminate newly hatched bed bug nymphs",
      "Free 24/7 priority re-treatment if pests persist within warranty window",
    ],
    color: "#FFFFFF",
    accentBg: "bg-crimson-100/60",
    borderAccent: "border-crimson-700/40",
  },
];

export const ScrollStack: React.FC = () => {
  return (
    <div className="relative w-full space-y-6">
      {PROCESS_STEPS.map((step, index) => {
        return (
          <div
            key={step.step}
            className={`sticky rounded-2xl border ${step.borderAccent} shadow-md p-6 md:p-8 transition-colors duration-150 bg-white`}
            style={{
              top: `${96 + index * 24}px`, // Progressive sticky stack cascade offset
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-2xl md:text-3xl font-extrabold text-timber-700/50">
                    {step.step}
                  </span>
                  <span
                    className={`text-xs font-sans px-2.5 py-0.5 rounded-full font-semibold ${
                      index === 0
                        ? "bg-surface-travertine text-timber-900 border border-timber-700/20"
                        : index === 1
                        ? "bg-botanical-100 text-botanical-900 border border-botanical-700/30"
                        : "bg-crimson-100 text-crimson-900 border border-crimson-700/30"
                    }`}
                  >
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-xl font-display font-bold text-timber-950 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base font-sans text-timber-700/80 mt-1 mb-4">
                  {step.subtitle}
                </p>

                <p className="text-xs md:text-sm lg:text-base text-timber-900 leading-relaxed max-w-2xl mb-6">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-surface-hairline/60">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs lg:text-sm text-timber-950 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-botanical-700 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

