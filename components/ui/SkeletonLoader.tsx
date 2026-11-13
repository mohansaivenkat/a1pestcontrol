import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "card" | "pill" | "circle";
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({
  className,
  variant = "text",
}) => {
  const baseClasses = "animate-pulse bg-surface-travertine/80 border border-surface-hairline/40";

  const variantMap = {
    text: "h-4 w-full rounded-sm",
    card: "h-32 w-full rounded-md",
    pill: "h-8 w-24 rounded-full",
    circle: "h-10 w-10 rounded-full",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(baseClasses, variantMap[variant], className)}
    />
  );
};

export const PriceSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-botanical-100/50 rounded-md border border-botanical-700/20">
      <div className="flex justify-between items-center">
        <SkeletonLoader variant="text" className="w-28 h-3" />
        <SkeletonLoader variant="text" className="w-16 h-3" />
      </div>
      <SkeletonLoader variant="text" className="w-48 h-8" />
      <SkeletonLoader variant="text" className="w-36 h-3" />
    </div>
  );
};

