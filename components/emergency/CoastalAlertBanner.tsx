import React from "react";
import { AlertCircle, Droplets, Waves, ShieldCheck } from "lucide-react";

export const CoastalAlertBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-surface-travertine via-surface-parchment to-surface-travertine border-y border-surface-hairline py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <Waves className="w-4 h-4 text-amber-700" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-amber-900 bg-amber-200/50 px-2 py-0.5 rounded mr-2">
              Bay of Bengal Coastal Advisory
            </span>
            <span className="font-semibold text-timber-950">
              High Coastal Humidity (78–86%) & Saline Mist Surge
            </span>
          </div>
        </div>

        <p className="text-[11px] text-timber-700 md:max-w-xl leading-relaxed">
          Vizag&apos;s tropical coastal climate accelerates subterranean dampwood termite swarms in teak baseboards and promotes rapid Aedes mosquito breeding in apartment drainage sumps. Our micro-encapsulated formulations are engineered to resist salt-air wash-off for up to 6 months.
        </p>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-mono text-botanical-900 font-bold bg-botanical-100 px-2.5 py-1 rounded border border-botanical-700/20">
            Salt-Resistant Shield Active
          </span>
        </div>
      </div>
    </div>
  );
};

