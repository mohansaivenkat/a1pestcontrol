"use client";

import React, { useState, useEffect } from "react";

interface TextLoopProps {
  items: Array<{
    name: string;
    eta: string;
    techs: number;
    zone: string;
  }>;
  intervalMs?: number;
  className?: string;
  onSelectLocality?: (name: string) => void;
}

export const TextLoop: React.FC<TextLoopProps> = ({
  items,
  intervalMs = 3200,
  className = "",
  onSelectLocality,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsTransitioning(false);
      }, 300);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [items.length, intervalMs]);

  const active = items[currentIndex];

  return (
    <div
      className={`inline-flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 rounded active:scale-[0.98] ${className}`}
      onClick={() => onSelectLocality?.(active.name)}
      role="button"
      tabIndex={0}
      title="Click to view locality details"
    >
      <span className="relative flex h-2 w-2">
        <span className="motion-safe:animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-botanical-700 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-botanical-700" />
      </span>

      <div
        className={`transition-opacity transition-transform duration-150 motion-reduce:transition-none motion-reduce:transform-none font-sans text-xs flex items-center gap-2 ${
          isTransitioning ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
        }`}
      >
        <span className="font-semibold text-timber-950 underline decoration-dotted decoration-botanical-700 font-sans">
          {active.name}
        </span>
        <span className="text-botanical-900 bg-botanical-100 px-1.5 py-0.5 rounded text-xs font-bold border border-botanical-700/20 font-sans">
          ~{active.eta}
        </span>
        <span className="hidden sm:inline text-timber-700/70 text-xs font-sans">
          ({active.techs} Techs Active • {active.zone})
        </span>
      </div>
    </div>
  );
};

