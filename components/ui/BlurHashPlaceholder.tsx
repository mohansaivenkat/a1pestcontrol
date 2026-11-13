import React from "react";
import { cn } from "@/lib/utils";

interface BlurHashPlaceholderProps {
  colorScheme?: "timber" | "botanical" | "parchment";
  className?: string;
  label?: string;
  children?: React.ReactNode;
}

/**
 * BlurHash CSS/SVG simulation placeholder:
 * Generates an ultra-lightweight harmonic low-frequency gradient mesh
 * that resembles a decoded BlurHash for instant image & card loading without layout shift.
 */
export const BlurHashPlaceholder: React.FC<BlurHashPlaceholderProps> = ({
  colorScheme = "parchment",
  className,
  label,
  children,
}) => {
  const gradients = {
    parchment: "from-[#F2ECE1] via-[#FAF7F2] to-[#E8E1D5]",
    botanical: "from-[#1B4332]/10 via-[#EAF4EC] to-[#2D6A4F]/15",
    timber: "from-[#261811]/10 via-[#F2ECE1] to-[#5C3D2E]/15",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br transition-opacity duration-300",
        gradients[colorScheme],
        className
      )}
    >
      {/* Subtle harmonic high-frequency grain / technical noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(var(--color-timber-950) 1px, transparent 1px)`,
          backgroundSize: "8px 8px",
        }}
      />
      {label && (
        <span className="absolute bottom-2 right-2 text-xs font-sans text-timber-700/60">
          {label}
        </span>
      )}
      {children}
    </div>
  );
};

