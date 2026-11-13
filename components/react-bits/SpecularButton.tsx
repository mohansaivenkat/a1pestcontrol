"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpecularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "emergency" | "botanical" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => setMousePosition(null);

  const variantStyles = {
    primary:
      "bg-accent-700 hover:bg-accent-800 text-white border-accent-800/80 shadow-md active:scale-[0.98]",
    emergency:
      "bg-accent-800 hover:bg-accent-900 text-white border-accent-900 shadow-md active:scale-[0.98]",
    botanical:
      "bg-brand-700 hover:bg-brand-900 text-white border-brand-700 shadow-md active:scale-[0.98]",
    ghost:
      "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border-neutral-300 active:scale-[0.98]",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-semibold rounded-md",
    md: "px-4 py-2.5 text-xs md:text-sm font-semibold rounded-lg",
    lg: "px-6 py-3.5 text-sm md:text-base font-bold rounded-xl",
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden inline-flex items-center justify-center gap-2 font-display transition-all duration-200 cursor-pointer border select-none focus:outline-none focus:ring-2 focus:ring-botanical-700/50",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {/* Specular directional highlight light sweep */}
      {mousePosition && (
        <span
          className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(120px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.6), transparent 70%)`,
          }}
        />
      )}

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

