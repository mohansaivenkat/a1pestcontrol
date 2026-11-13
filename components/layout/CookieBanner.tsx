"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("a1_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore localStorage exceptions in private browsing
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("a1_cookie_consent", "all");
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("a1_cookie_consent", "essential");
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-5 motion-reduce:animate-none duration-150"
    >
      <div className="bg-surface-card border border-neutral-300 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
              <Cookie className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-display font-bold text-neutral-950">
                Privacy &amp; Cookie Preferences
              </h3>
              <p className="text-xs font-sans text-neutral-500">
                DPDP Act 2023 Compliant
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleDecline}
            className="text-neutral-400 hover:text-neutral-700 p-1 rounded-md transition-colors duration-150 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98]"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-xs text-neutral-600 leading-relaxed font-sans">
          We use strictly essential technical cookies and anonymized local telemetry to optimize technician dispatch across Visakhapatnam. We never sell personal information.
        </p>

        <div className="flex items-center justify-between gap-3 pt-1">
          <Link
            href="/privacy-policy"
            className="text-xs font-semibold text-brand-700 hover:text-brand-900 underline underline-offset-2 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 rounded"
          >
            Privacy Policy
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors duration-150 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98]"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-3 py-1.5 rounded-lg bg-brand-700 hover:bg-brand-900 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors duration-150 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98]"
            >
              <Check className="h-3.5 w-3.5" />
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

