import React from "react";
import { Waves } from "lucide-react";

export const CoastalAlertBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-surface-travertine via-surface-parchment to-surface-travertine border-y border-surface-hairline py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <Waves className="w-4 h-4 text-amber-700" />
          </div>
          <div>
            <span className="font-sans text-xs font-semibold text-amber-900 bg-amber-200/50 px-2 py-0.5 rounded mr-2">
              Bay of Bengal Coastal Advisory
            </span>
            <span className="font-semibold text-timber-950 font-sans">
              High Coastal Humidity (78% to 86%) and Saline Mist Surge
            </span>
          </div>
        </div>

        <p className="text-xs text-timber-700 md:max-w-xl leading-relaxed font-sans">
          Vizag&apos;s tropical coastal climate accelerates subterranean dampwood termite swarms in teak baseboards and promotes rapid Aedes mosquito breeding in apartment drainage sumps. Our micro-encapsulated formulations are engineered to resist salt-air wash-off for up to 6 months.
        </p>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-sans text-botanical-900 font-semibold bg-botanical-100 px-2.5 py-1 rounded border border-botanical-700/20">
            Salt-Resistant Shield Active
          </span>
        </div>
      </div>
    </div>
  );
};

