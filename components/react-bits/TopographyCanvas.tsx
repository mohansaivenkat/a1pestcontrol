"use client";

import React, { useEffect, useRef } from "react";

interface TopographyCanvasProps {
  className?: string;
  lineColor?: string;
  opacity?: number;
}

export const TopographyCanvas: React.FC<TopographyCanvasProps> = ({
  className = "",
  lineColor = "#5C3D2E",
  opacity = 0.08,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | undefined;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
      draw();
    };

    window.addEventListener("resize", handleResize);

    // Draw mathematical architectural contour topographical curves
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.globalAlpha = opacity;

      const numLines = 26;
      const stepY = height / numLines;

      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        const baseY = i * stepY;

        for (let x = 0; x <= width; x += 30) {
          // Architectural harmonic sine contour wave
          const freq1 = 0.003;
          const freq2 = 0.008;
          const elevation =
            Math.sin(x * freq1 + i * 0.4) * 22 +
            Math.cos(x * freq2 + i * 0.2) * 14 +
            Math.sin((x + baseY) * 0.002) * 8;

          const y = baseY + elevation;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Elevation index ticks (Swiss architectural manual style)
      ctx.fillStyle = lineColor;
      ctx.font = "8px monospace";
      for (let i = 2; i < numLines; i += 4) {
        ctx.fillText(`+${(i * 12).toString().padStart(3, "0")}m VSP`, 20, i * stepY - 4);
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [lineColor, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
};
