"use client";

import React, { useEffect, useState, useRef } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClass?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 35,
  highlightWords = [],
  highlightClass = "text-brand-700 border-b-2 border-brand-500/40 pb-0.5",
  as: Component = "span",
}) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Safety timeout in case element is already visible
    const timer = setTimeout(() => setInView(true), 250);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const words = text.split(" ");

  return (
    <Component ref={elementRef} className={`inline-block text-balance ${className}`}>
      {words.map((word, idx) => {
        const isHighlight = highlightWords.includes(word);
        return (
          <span
            key={idx}
            className="inline-block overflow-hidden mr-[0.26em] align-top"
          >
            <span
              className={`inline-block motion-safe:transition-transform motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              } ${isHighlight ? highlightClass : ""}`}
              style={{
                transitionDelay: `${idx * delay}ms`,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
};
