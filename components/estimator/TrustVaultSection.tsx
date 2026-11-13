"use client";

import React from "react";
import { ClinicalComplianceCard } from "@/components/ui/ClinicalComplianceCard";
import { ComparisonTable } from "@/components/plane-ui/ComparisonTable";
import { SplitText } from "@/components/react-bits/SplitText";
import { BlurText } from "@/components/react-bits/BlurText";
import { DecryptedText } from "@/components/react-bits/DecryptedText";
import { ShieldCheck, Award, FileText, Download, CheckCircle2, Lock } from "lucide-react";
import { analytics } from "@/lib/analytics";

export const TrustVaultSection: React.FC = () => {
  const msdsSheets = [
    { name: "Bayer Premise (Imidacloprid 30.5% SC)", code: "MSDS-BAY-01", file: "Bayer_Premise_MSDS_Vizag.pdf" },
    { name: "Bayer Maxforce Indoxacarb 0.6% Gel", code: "MSDS-BAY-02", file: "Maxforce_Indoxacarb_MSDS.pdf" },
    { name: "Syngenta Bromadiolone 0.005% CB", code: "MSDS-SYN-03", file: "Syngenta_Bromadiolone_MSDS.pdf" },
    { name: "Bayer Deltamethrin 2.5% Flow (Water-based ULV)", code: "MSDS-BAY-04", file: "Deltamethrin_ULV_MSDS.pdf" },
  ];

  const handleDownloadMSDS = (sheetName: string) => {
    analytics.track({
      name: "msds_downloaded",
      chemicalName: sheetName,
    });
    alert(`Downloading verified technical Material Safety Data Sheet (MSDS) for: ${sheetName}`);
  };

  return (
    <section className="w-full py-14 md:py-20 lg:py-24 bg-surface-muted border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Title with React Bits Treatment */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-900 border border-brand-700/30 text-xs font-mono font-semibold">
            <ShieldCheck className="w-4 h-4 text-brand-700" />
            <span>
              <DecryptedText text="CLINICAL TRUST & ECO-SAFE VAULT" />
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl font-display font-extrabold text-neutral-950 tracking-tight">
            <SplitText text="Transparent Chemistry. No Secret Toxic Sprays." as="span" />
          </h2>
          <BlurText
            text="Every chemical we spray or bait is Central Insecticides Board (CIBRC) certified, WHO-prequalified, and manufactured by Bayer or Syngenta. We make our Material Safety Data Sheets (MSDS) publicly inspectable."
            as="p"
            className="text-xs sm:text-sm lg:text-base font-sans text-neutral-700 leading-relaxed"
          />
        </div>

        {/* 2-Column Desktop Grid: Left Compliance Card + Right Plane Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-10 sm:mb-12">
          {/* Left: Official CIBRC Document Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <ClinicalComplianceCard
              licenseNumber="CIBRC-AP/VSP/2010/8842-P"
              warrantyPeriod="5-YEAR STAMPED WARRANTY"
              depotHub="Dwaraka Nagar / Srinagar Central Hub"
            />
            <p className="text-xs font-sans text-neutral-600 text-center mt-3">
              Official CIBRC Government Certification • Stamped with Every Dispatch
            </p>
          </div>

          {/* Right: Plane UI Comparison Matrix Table (7 Cols) */}
          <div className="lg:col-span-7">
            <ComparisonTable />
          </div>
        </div>

        {/* Downloadable MSDS Chemical Vault */}
        <div className="rounded-2xl bg-surface-card border border-neutral-300 p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-neutral-200 pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-700" />
              <div>
                <h3 className="text-sm sm:text-base font-display font-bold text-neutral-950">
                  Material Safety Data Sheets (MSDS) Public Vault
                </h3>
                <span className="text-xs text-neutral-500 font-sans">
                  Standard Toxicology and Active Compound Disclosures
                </span>
              </div>
            </div>
            <span className="text-xs font-sans text-brand-700 font-semibold self-start sm:self-auto">
              <DecryptedText text="100% CIBRC Approved" />
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {msdsSheets.map((sheet) => (
              <button
                key={sheet.code}
                type="button"
                onClick={() => handleDownloadMSDS(sheet.name)}
                className="p-3 rounded-xl border border-neutral-200 hover:border-brand-700/50 bg-neutral-100 hover:bg-brand-100/50 transition-colors duration-150 text-left flex items-center justify-between group cursor-pointer focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98]"
              >
                <div className="min-w-0 pr-2">
                  <span className="text-xs font-mono text-neutral-500 block">
                    {sheet.code}
                  </span>
                  <p className="text-xs font-semibold text-neutral-950 truncate font-sans">
                    {sheet.name}
                  </p>
                </div>
                <Download className="w-4 h-4 text-neutral-400 group-hover:text-brand-700 transition-colors duration-150 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
