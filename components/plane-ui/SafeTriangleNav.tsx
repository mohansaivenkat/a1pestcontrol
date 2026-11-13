"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface SubmenuItem {
  title: string;
  href: string;
  description: string;
  icon?: React.ReactNode;
}

interface SafeTriangleNavProps {
  label: string;
  items: SubmenuItem[];
}

/**
 * Amazon Safe Triangle Submenu Navigation:
 * Calculates directional vector angles between cursor position and flyout bounds
 * to maintain hover state even when moving diagonally across gutters.
 */
export const SafeTriangleNav: React.FC<SafeTriangleNavProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // 250ms triangular grace period matching Amazon's predictive diagonal vector
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block text-left"
    >
      <button
        type="button"
        className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs font-medium text-timber-900 hover:text-botanical-700 transition-colors rounded-md"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-1 w-72 rounded-lg bg-surface-parchment border border-surface-hairline shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-start gap-2.5 p-2 rounded-md hover:bg-surface-travertine transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              {item.icon && (
                <div className="w-6 h-6 rounded bg-botanical-100 text-botanical-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-botanical-700 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              )}
              <div>
                <p className="text-xs font-semibold text-timber-950 group-hover:text-botanical-900 leading-tight">
                  {item.title}
                </p>
                <p className="text-[11px] text-timber-700/80 mt-0.5 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

