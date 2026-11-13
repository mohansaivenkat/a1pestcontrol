import React from "react";
import { Check, X, ShieldAlert, Award, AlertCircle } from "lucide-react";

interface ComparisonRow {
  parameter: string;
  unorganizedSprayer: string;
  a1Clinical: string;
  advantage: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    parameter: "Chemical Formulation & Safety",
    unorganizedSprayer: "Agricultural-grade organophosphates diluted with kerosene/diesel (toxic pungent odor)",
    a1Clinical: "WHO-prequalified & CIBRC-registered Bayer / Syngenta odorless micro-encapsulated formulations",
    advantage: "Zero headache, safe for infants & elderly",
  },
  {
    parameter: "Kitchen Preparation Required",
    unorganizedSprayer: "Mandatory emptying of all utensils, spices, crockery, and 4-hour home vacancy",
    a1Clinical: "Zero utensil removal. Targeted pheromone gel bait applied directly to cabinet hinges",
    advantage: "Zero kitchen disruption",
  },
  {
    parameter: "Warranty & Digital Paperwork",
    unorganizedSprayer: "Verbal assurance or scribbled paper slip with untraceable phone numbers",
    a1Clinical: "Stamped digital warranty certificate (up to 5 years for termites) with GST invoice",
    advantage: "Legal warranty & free callbacks",
  },
  {
    parameter: "Subterranean Termite Treatment",
    unorganizedSprayer: "Superficial surface spray on skirting; termites retreat deeper into structural slab",
    a1Clinical: "6mm Drill-Fill-Seal at 1-foot intervals creating an uninterrupted chemical soil barrier",
    advantage: "Complete colony eradication",
  },
  {
    parameter: "Technician Verification",
    unorganizedSprayer: "Unvetted daily wage laborers with no safety masks or specialized applicators",
    a1Clinical: "Full-time certified clinical technicians with police verification & calibrated sprayers",
    advantage: "Safe for gated communities",
  },
  {
    parameter: "Visakhapatnam Dispatch SLA",
    unorganizedSprayer: "Unpredictable 24–48 hour delay; calls frequently routed to middleman directories",
    a1Clinical: "Live zonal telemetry: 20-30 min express dispatch from Dwaraka Nagar, MVP, or Gajuwaka",
    advantage: "Guaranteed arrival timer",
  },
];

export const ComparisonTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto border border-surface-hairline rounded-lg bg-white shadow-sm">
      <table className="w-full text-left border-collapse text-xs md:text-sm">
        <thead>
          <tr className="border-b border-surface-hairline bg-surface-travertine/80">
            <th className="py-3.5 px-4 font-mono uppercase text-[11px] tracking-wider text-timber-700 w-1/4">
              Diagnostic Parameter
            </th>
            <th className="py-3.5 px-4 font-mono uppercase text-[11px] tracking-wider text-crimson-800 bg-crimson-100/40 w-1/3">
              Unorganized Vizag Sprayers
            </th>
            <th className="py-3.5 px-4 font-mono uppercase text-[11px] tracking-wider text-botanical-900 bg-botanical-100/60 w-5/12">
              A1 Clinical Protocol (Bayer Certified)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-hairline">
          {COMPARISON_DATA.map((row, index) => (
            <tr key={index} className="hover:bg-surface-parchment/60 transition-colors">
              <td className="py-3.5 px-4 font-semibold text-timber-950 align-top">
                {row.parameter}
                <div className="mt-1 text-[11px] font-mono text-brand-700 font-normal flex items-center gap-1">
                  <Check className="w-3 h-3 text-brand-700 shrink-0" />
                  <span>{row.advantage}</span>
                </div>
              </td>
              <td className="py-3.5 px-4 text-timber-700/90 bg-crimson-100/10 align-top">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-crimson-700 shrink-0 mt-0.5" />
                  <span>{row.unorganizedSprayer}</span>
                </div>
              </td>
              <td className="py-3.5 px-4 text-timber-950 bg-botanical-100/20 font-medium align-top">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-botanical-700 shrink-0 mt-0.5" />
                  <span>{row.a1Clinical}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

