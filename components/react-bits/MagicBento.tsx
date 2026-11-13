"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagicBentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  isUrgent?: boolean;
}

export const MagicBentoCard: React.FC<MagicBentoCardProps> = ({
  children,
  className,
  glowColor = "#2D6A4F",
  isUrgent = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  const activeColor = isUrgent ? "#B91C1C" : glowColor;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setCoords(null);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-xl bg-white border border-surface-hairline p-5 transition-shadow duration-300 hover:shadow-lg overflow-hidden flex flex-col justify-between group",
        className
      )}
    >
      {/* Cursor-tracked radial border highlight illumination */}
      {coords && (
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, ${activeColor}33, transparent 70%)`,
          }}
        />
      )}

      {/* Internal Content Container */}
      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  );
};

export const MagicBentoGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5",
        className
      )}
    >
      {children}
    </div>
  );
};

