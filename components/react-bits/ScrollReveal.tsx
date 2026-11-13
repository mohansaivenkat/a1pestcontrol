"use client";

import React, { useRef, useState, useEffect } from "react";

interface ScrollRevealProps {
  text: string;
  className?: string;
  highlightColor?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  text,
  className = "",
  highlightColor = "#2D5A27",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility progress: 0 when entering bottom, 1 when reaching center
      const start = windowHeight * 0.95;
      const end = windowHeight * 0.35;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");
  const totalWords = words.length;

  return (
    <div ref={containerRef} className={`text-balance leading-relaxed font-display ${className}`}>
      {words.map((word, index) => {
        const wordThreshold = index / totalWords;
        const isActive = scrollProgress > wordThreshold;
        const isHighlight = scrollProgress > wordThreshold && scrollProgress < wordThreshold + 0.25;

        return (
          <span
            key={index}
            className="inline-block transition-colors duration-300 mr-[0.25em]"
            style={{
              color: isHighlight ? highlightColor : isActive ? "#261811" : "#574B424D",
              transform: isActive ? "translateY(0)" : "translateY(2px)",
              transition: "color 0.25s ease, opacity 0.25s ease, transform 0.25s ease",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

