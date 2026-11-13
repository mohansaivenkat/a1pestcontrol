"use client";

import React, { useState, useRef, useEffect } from "react";

export interface LineSidebarItem {
  id: string;
  index: string;
  label: string;
  badge?: string;
}

interface LineSidebarProps {
  items: LineSidebarItem[];
  activeId: string;
  onSelectItem: (id: string) => void;
  className?: string;
}

export const LineSidebar: React.FC<LineSidebarProps> = ({
  items,
  activeId,
  onSelectItem,
  className = "",
}) => {
  const [mouseY, setMouseY] = useState<number | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sidebarRef.current) return;
    const rect = sidebarRef.current.getBoundingClientRect();
    setMouseY(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setMouseY(null);
  };

  return (
    <aside
      ref={sidebarRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`sticky top-28 flex flex-col gap-2 select-none ${className}`}
    >
      <div className="text-xs font-sans text-timber-700/60 pb-2 border-b border-surface-hairline mb-1">
        Index • Protocols
      </div>

      {items.map((item, index) => {
        const isActive = item.id === activeId;
        const itemY = index * 42 + 20;
        let shift = 0;

        if (mouseY !== null) {
          const dist = Math.abs(mouseY - itemY);
          const radius = 90;
          if (dist < radius) {
            // Gaussian proximity curve
            shift = Math.round(18 * (1 - dist / radius));
          }
        }

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectItem(item.id)}
            className={`group flex items-center gap-3 text-left py-1.5 transition-colors duration-150 cursor-pointer focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98] ${
              isActive ? "text-crimson-700 font-semibold" : "text-timber-700 hover:text-timber-950"
            }`}
            style={{
              transform: `translateX(${isActive ? Math.max(12, shift) : shift}px)`,
            }}
          >
            {/* Tick Mark / Monoline Indicator */}
            <span
              className={`h-[1.5px] transition-colors duration-150 ${
                isActive
                  ? "w-8 bg-crimson-700"
                  : "w-4 bg-timber-700/40 group-hover:w-6 group-hover:bg-timber-700"
              }`}
            />

            <span className="font-mono text-xs tabular-nums text-timber-700/60 group-hover:text-timber-900">
              {item.index}
            </span>

            <span className="text-xs font-sans tracking-tight truncate max-w-[130px]">
              {item.label}
            </span>

            {item.badge && (
              <span
                className={`text-[10px] font-sans px-1.5 py-0.5 rounded font-medium ${
                  isActive
                    ? "bg-crimson-100 text-crimson-800"
                    : "bg-surface-travertine text-timber-700/70"
                }`}
              >
                {item.badge}
              </span>
            )}
          </button>
        );
      })}
    </aside>
  );
};

