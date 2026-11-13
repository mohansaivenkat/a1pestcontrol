"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { Globe, Check, X, Languages } from "lucide-react";

interface GoogleTranslateInstance {
  TranslateElement: new (
    options: {
      pageLanguage: string;
      includedLanguages: string;
      autoDisplay: boolean;
      layout?: unknown;
    },
    elementId: string
  ) => void;
  InlineLayout?: {
    SIMPLE: unknown;
  };
}

declare global {
  interface Window {
    google?: {
      translate?: GoogleTranslateInstance;
    };
    googleTranslateElementInit?: () => void;
  }
}

export function LanguageManager() {
  const [currentLang, setCurrentLang] = useState<"en" | "te">("en");
  const [showFirstLoadModal, setShowFirstLoadModal] = useState(false);
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const applyGoogleTranslation = React.useCallback((lang: "en" | "te", reloadIfNeeded = true) => {
    try {
      localStorage.setItem("a1_language_preference", lang);
    } catch {}
    setCurrentLang(lang);

    // Set standard Google Translate cookie
    const hostname = window.location.hostname;
    document.cookie = `googtrans=/en/${lang}; path=/;`;
    document.cookie = `googtrans=/en/${lang}; path=/; domain=${hostname};`;
    if (hostname.includes(".")) {
      const rootDomain = hostname.split(".").slice(-2).join(".");
      document.cookie = `googtrans=/en/${lang}; path=/; domain=.${rootDomain};`;
    }

    // Trigger select change if iframe widget exists
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    } else if (reloadIfNeeded) {
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    // 1. Check if user already set their preference
    try {
      const savedLang = localStorage.getItem("a1_language_preference") as "en" | "te" | null;
      if (!savedLang) {
        // Show first load selection modal after a brief delay
        const timer = setTimeout(() => setShowFirstLoadModal(true), 600);
        return () => clearTimeout(timer);
      } else {
        requestAnimationFrame(() => {
          setCurrentLang(savedLang);
          if (savedLang === "te") {
            applyGoogleTranslation("te", false);
          }
        });
      }
    } catch {
      // In private browsing mode
    }
  }, [applyGoogleTranslation]);

  const handleSelectLanguage = (lang: "en" | "te") => {
    setShowFirstLoadModal(false);
    setIsSwitcherOpen(false);
    applyGoogleTranslation(lang, true);
  };

  return (
    <>
      {/* Hidden Google Translate mount container */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Google Translate Script */}
      <Script
        id="google-translate-script"
        strategy="afterInteractive"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        onLoad={() => {
          window.googleTranslateElementInit = () => {
            if (window.google?.translate?.TranslateElement) {
              new window.google.translate.TranslateElement(
                {
                  pageLanguage: "en",
                  includedLanguages: "en,te",
                  autoDisplay: false,
                },
                "google_translate_element"
              );
            }
          };
          if (window.google?.translate?.TranslateElement) {
            window.googleTranslateElementInit();
          }
        }}
      />

      {/* Persistent Floating Language Switcher Widget (Positioned directly above WhatsApp widget) */}
      <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end">
        {/* Toggle Dropdown Menu */}
        {isSwitcherOpen && (
          <div className="mb-2 bg-surface-card border border-neutral-300 rounded-xl shadow-xl p-2 w-48 space-y-1 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-reduce:animate-none duration-150">
            <div className="px-2.5 py-1 text-xs font-sans text-neutral-500 border-b border-neutral-200">
              Select language
            </div>
            <button
              type="button"
              onClick={() => handleSelectLanguage("en")}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg font-medium transition-colors duration-150 cursor-pointer focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98] ${
                currentLang === "en"
                  ? "bg-brand-100 text-brand-900 font-semibold"
                  : "text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              <span>English (Default)</span>
              {currentLang === "en" && <Check className="h-3.5 w-3.5 text-brand-700" />}
            </button>
            <button
              type="button"
              onClick={() => handleSelectLanguage("te")}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg font-medium transition-colors duration-150 cursor-pointer focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98] ${
                currentLang === "te"
                  ? "bg-brand-100 text-brand-900 font-semibold"
                  : "text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              <span>తెలుగు (Telugu)</span>
              {currentLang === "te" && <Check className="h-3.5 w-3.5 text-brand-700" />}
            </button>
          </div>
        )}

        {/* Floating Button */}
        <button
          type="button"
          onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
          aria-label="Toggle language between English and Telugu"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-card hover:bg-white text-neutral-800 border border-neutral-300 shadow-md hover:shadow-lg transition-colors duration-150 text-xs font-semibold select-none cursor-pointer focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98]"
        >
          <Languages className="h-3.5 w-3.5 text-brand-700" />
          <span className="font-sans text-xs">
            {currentLang === "te" ? "తెలుగు" : "EN"}
          </span>
          <span className="text-[10px] text-neutral-400">|</span>
          <span className="text-xs text-neutral-500 font-normal">
            {currentLang === "te" ? "Switch to EN" : "తెలుగు"}
          </span>
        </button>
      </div>

      {/* First-Load Language Selection Dialog */}
      {showFirstLoadModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-reduce:animate-none duration-150"
        >
          <div className="bg-surface-card border border-neutral-300 rounded-2xl max-w-md w-full p-6 shadow-xl space-y-5 motion-safe:animate-in motion-safe:zoom-in-95 motion-reduce:animate-none duration-150">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-neutral-950">
                    Select Your Language
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans">
                    మీ భాషను ఎంచుకోండి
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowFirstLoadModal(false)}
                className="text-neutral-400 hover:text-neutral-700 p-1 rounded-md focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98]"
                aria-label="Close language selector"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed font-sans">
              Welcome to A1 Pest Control Services Visakhapatnam. How would you like to view our website and treatment plans?
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                onClick={() => handleSelectLanguage("en")}
                className="p-4 rounded-xl border border-neutral-300 hover:border-brand-700 hover:bg-brand-100/40 text-left transition-colors duration-150 group cursor-pointer focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98]"
              >
                <span className="block text-sm font-bold text-neutral-950 group-hover:text-brand-900">
                  English
                </span>
                <span className="block text-xs text-neutral-500 mt-0.5">
                  Standard Interface
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectLanguage("te")}
                className="p-4 rounded-xl border border-neutral-300 hover:border-brand-700 hover:bg-brand-100/40 text-left transition-colors duration-150 group cursor-pointer focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98]"
              >
                <span className="block text-sm font-bold text-neutral-950 group-hover:text-brand-900">
                  తెలుగు
                </span>
                <span className="block text-xs text-neutral-500 mt-0.5">
                  Telugu Translation
                </span>
              </button>
            </div>

            <p className="text-xs text-neutral-500 text-center pt-1 font-sans">
              You can toggle between English and Telugu anytime using the floating widget at the bottom right.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

