"use client";

import React, { useState, useEffect, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
  characters?: string;
}

const DEFAULT_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_•-";

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 35,
  className = "",
  characters = DEFAULT_CHARS,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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

    const timer = setTimeout(() => setInView(true), 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let iteration = 0;
    const interval: NodeJS.Timeout = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((letter, index) => {
            if (letter === " " || letter === "•" || letter === "-") return letter;
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        setIsDecrypted(true);
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, speed);

    return () => clearInterval(interval);
  }, [inView, text, speed, characters]);

  return (
    <span
      ref={ref}
      className={`font-mono tabular-nums tracking-wide ${className} ${
        isDecrypted ? "text-brand-700 font-semibold" : "text-neutral-500"
      }`}
    >
      {displayText}
    </span>
  );
};
