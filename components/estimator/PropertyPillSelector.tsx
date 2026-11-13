"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PropertyPillOption<T extends string> {
  id: T;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
  badge?: string;
  badgeVariant?: "botanical" | "amber" | "crimson";
}

interface PropertyPillSelectorProps<T extends string> {
  label: string;
  options: PropertyPillOption<T>[];
  selectedValue: T;
  onSelect: (value: T) => void;
  className?: string;
  shortcutPrefix?: string;
}

export function PropertyPillSelector<T extends string>({
  label,
  options,
  selectedValue,
  onSelect,
  className,
  shortcutPrefix,
}: PropertyPillSelectorProps<T>) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-[11px] font-mono text-timber-700/80 uppercase tracking-wider">
        <span>{label}</span>
        {shortcutPrefix && (
          <span className="text-[10px] text-timber-700/50">Keys 1-{options.length}</span>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {options.map((option, idx) => {
          const isSelected = option.id === selectedValue;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={cn(
                "relative flex flex-col items-start p-2.5 rounded-lg border text-left transition-all duration-150 cursor-pointer select-none group",
                isSelected
                  ? "bg-botanical-100/90 border-botanical-700 text-botanical-950 shadow-sm ring-1 ring-botanical-700"
                  : "bg-white hover:bg-surface-travertine/60 border-surface-hairline text-timber-900"
              )}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <div className="flex items-center gap-1.5 min-w-0">
                  {option.icon && (
                    <span
                      className={cn(
                        "w-4 h-4 shrink-0 transition-colors",
                        isSelected ? "text-botanical-700" : "text-timber-700/70"
                      )}
                    >
                      {option.icon}
                    </span>
                  )}
                  <span className="text-xs font-semibold truncate leading-tight">
                    {option.label}
                  </span>
                </div>
                {shortcutPrefix && (
                  <kbd className="text-[9px] font-mono opacity-40 px-1 rounded bg-surface-travertine border border-surface-hairline shrink-0">
                    {idx + 1}
                  </kbd>
                )}
              </div>

              {option.sublabel && (
                <span className="text-[10px] text-timber-700/70 truncate w-full">
                  {option.sublabel}
                </span>
              )}

              {option.badge && (
                <span
                  className={cn(
                    "mt-1.5 text-[9px] font-mono uppercase px-1.5 py-0.2 rounded font-medium",
                    option.badgeVariant === "crimson"
                      ? "bg-crimson-100 text-crimson-800"
                      : option.badgeVariant === "amber"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-botanical-100 text-botanical-800"
                  )}
                >
                  {option.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

