"use client";

import React from "react";
import { ShieldCheck, Award, FileCheck, CheckCircle2, Lock } from "lucide-react";

interface ClinicalComplianceCardProps {
  className?: string;
  licenseNumber?: string;
  warrantyPeriod?: string;
  depotHub?: string;
}

export const ClinicalComplianceCard: React.FC<ClinicalComplianceCardProps> = ({
  className = "",
  licenseNumber = "CIBRC-AP/VSP/2010/8842-P",
  warrantyPeriod = "5-YEAR OFFICIAL WARRANTY",
  depotHub = "Dwaraka Nagar / Srinagar Central Hub",
}) => {
  return (
    <div
      className={`w-full max-w-md rounded-2xl bg-surface-card border-2 border-neutral-300 p-6 sm:p-7 shadow-xl space-y-5 relative overflow-hidden text-neutral-900 ${className}`}
    >
      {/* Subtle Guilloche Watermark Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 10px)`,
        }}
        aria-hidden="true"
      />

      {/* Official Header */}
      <div className="relative z-10 border-b border-neutral-200 pb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-brand-100 border border-brand-500/30 text-brand-700 flex items-center justify-center shrink-0">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-700 font-bold block">
              Govt. Central Insecticides Board
            </span>
            <h3 className="text-sm font-display font-bold text-neutral-950">
              CIBRC Compliance Certificate
            </h3>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200 shrink-0 font-semibold">
          OFFICIAL DOC
        </span>
      </div>

      {/* Document Specification Rows */}
      <div className="relative z-10 space-y-3 text-xs">
        <div className="flex items-center justify-between border-b border-neutral-200/60 pb-2">
          <span className="text-neutral-500 font-mono">REGISTRATION CODE:</span>
          <span className="font-mono font-bold text-neutral-950">{licenseNumber}</span>
        </div>

        <div className="flex items-center justify-between border-b border-neutral-200/60 pb-2">
          <span className="text-neutral-500 font-mono">AUTHORIZED FORMULATIONS:</span>
          <span className="font-semibold text-brand-900">Bayer Premise &amp; Maxforce</span>
        </div>

        <div className="flex items-center justify-between border-b border-neutral-200/60 pb-2">
          <span className="text-neutral-500 font-mono">WARRANTY STANDARD:</span>
          <span className="font-mono font-bold text-accent-700">{warrantyPeriod}</span>
        </div>

        <div className="flex items-center justify-between border-b border-neutral-200/60 pb-2">
          <span className="text-neutral-500 font-mono">DISPATCH HEADQUARTERS:</span>
          <span className="font-medium text-neutral-950">{depotHub}</span>
        </div>
      </div>

      {/* Quality Assurance Guarantees */}
      <div className="relative z-10 p-3 rounded-xl bg-neutral-100 border border-neutral-200 space-y-1.5 text-xs text-neutral-700">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-brand-700 shrink-0" />
          <span className="font-medium text-neutral-900">Zero Toxic Agricultural Fogging</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-brand-700 shrink-0" />
          <span className="font-medium text-neutral-900">WHO-Prequalified Odorless Active Ingredients</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-brand-700 shrink-0" />
          <span className="font-medium text-neutral-900">Free Callbacks within Stamped Warranty Window</span>
        </div>
      </div>

      {/* Official Stamp & Signatory Footer */}
      <div className="relative z-10 pt-2 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-600 block">
            VISAKHAPATNAM METROPOLITAN
          </span>
          <span className="text-xs font-bold text-neutral-950">
            A1 Pest Control Services
          </span>
        </div>

        {/* Realistic Verification Stamp */}
        <div className="h-14 w-14 rounded-full border-2 border-brand-700 border-dashed flex flex-col items-center justify-center text-center p-1 text-brand-700 bg-brand-100/30 rotate-[-4deg]">
          <span className="text-[8px] font-mono font-bold tracking-tight uppercase leading-none">VERIFIED</span>
          <span className="text-[7px] font-mono uppercase leading-tight font-extrabold text-neutral-900">CIBRC</span>
          <span className="text-[6px] font-mono text-brand-700">2026-AP</span>
        </div>
      </div>
    </div>
  );
};

