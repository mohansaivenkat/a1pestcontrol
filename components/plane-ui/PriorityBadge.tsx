import React from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, AlertCircle, AlertTriangle } from "lucide-react";

export type PriorityLevel = "low" | "mild" | "medium" | "moderate" | "urgent" | "severe";

interface PriorityBadgeProps {
  level: PriorityLevel;
  className?: string;
  showIcon?: boolean;
  label?: string;
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({
  level,
  className,
  showIcon = true,
  label,
}) => {
  const normalized = level.toLowerCase();

  const isLow = normalized === "low" || normalized === "mild";
  const isMed = normalized === "medium" || normalized === "moderate";
  const isUrgent = normalized === "urgent" || normalized === "severe";

  const displayText = label || (isLow ? "Mild Activity" : isMed ? "Active Nesting" : "Severe Outbreak");

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider font-semibold border transition-all duration-200",
        isLow && "bg-botanical-100 text-botanical-900 border-botanical-700/30",
        isMed && "bg-amber-50 text-amber-900 border-amber-600/30",
        isUrgent && "bg-crimson-100 text-crimson-900 border-crimson-700/40 animate-pulse",
        className
      )}
    >
      {showIcon && (
        <>
          {isLow && <ShieldCheck className="w-3.5 h-3.5 text-botanical-700" />}
          {isMed && <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />}
          {isUrgent && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-700 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-700" />
            </span>
          )}
        </>
      )}
      <span>{displayText}</span>
    </span>
  );
};

