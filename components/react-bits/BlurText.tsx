"use client";

import React, { useEffect, useState, useRef } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  as?: "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  className = "",
  as: Component = "span",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const timer = setTimeout(() => setInView(true), 350);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const words = text.split(" ");

  return (
    <Component ref={ref} className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-700 ease-out mr-[0.25em]"
          style={{
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(8px)",
            transitionDelay: `${index * delay}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
};
