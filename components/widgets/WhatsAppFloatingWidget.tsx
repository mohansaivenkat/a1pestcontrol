"use client";

import React, { useState } from "react";
import { MessageSquare, PhoneCall, ShieldCheck, ArrowRight } from "lucide-react";

export function WhatsAppFloatingWidget() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl =
    "https://wa.me/919494281100?text=Hello%20A1%20Pest%20Control%20Visakhapatnam.%20I%20would%20like%20to%20inquire%20about%20pest%20inspection%20and%20transparent%20pricing.";

  return (
    <aside
      aria-label="Instant WhatsApp Dispatch Hotline"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none"
    >
      {/* Tooltip Card (Desktop on Hover or tap) */}
      <div
        className={`hidden sm:flex items-center gap-3 bg-neutral-950 text-white px-3.5 py-2.5 rounded-xl border border-neutral-800 shadow-xl transition-opacity transition-transform duration-150 pointer-events-none ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        <div className="text-left">
          <p className="text-xs font-semibold leading-tight flex items-center gap-1.5">
            <span>Vizag Dispatch Officer</span>
            <span className="text-[10px] font-sans font-medium text-emerald-400">Active</span>
          </p>
          <p className="text-[11px] text-neutral-400">Average response: &lt; 5 mins</p>
        </div>
      </div>

      {/* Main Interactive Button with Organic Multi-Layered Green Ambience */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with A1 Pest Control on WhatsApp"
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white shadow-xl hover:shadow-2xl transition-transform duration-150 hover:scale-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-hover focus-visible:ring-offset-2"
      >
        {/* Rich Multi-Layered Green Ambience Glow (Anti-AI Slop Organic Halo) */}
        <span
          className="absolute -inset-4 rounded-full bg-emerald-500/30 blur-xl motion-safe:animate-pulse pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute -inset-2.5 rounded-full bg-whatsapp/40 blur-lg pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute -inset-1 rounded-full bg-emerald-400/50 blur-sm pointer-events-none"
          aria-hidden="true"
        />

        {/* Official Symmetrical WhatsApp Brand Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7 relative z-10 transition-transform duration-150 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.767-.867-2.04-.967-.275-.101-.475-.15-.675.15-.2.3-.775.967-.95 1.167-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.485-.893-.795-1.496-1.778-1.67-2.078-.175-.3-.018-.462.13-.611.134-.133.3-.349.45-.524.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.584-.492-.505-.675-.514-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.115 3.23 5.124 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.767-.725 2.017-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35zm-5.467 7.42c-1.954 0-3.867-.525-5.547-1.52l-.397-.235-4.125 1.08 1.1-4.02-.259-.413A11.758 11.758 0 0 1 .8 12.046C.8 5.748 5.948.6 12.247.6c3.05 0 5.918 1.19 8.075 3.346a11.33 11.33 0 0 1 3.346 8.077c-.001 6.302-5.148 11.45-11.447 11.45zm0-20.916C6.732.886 2.4 5.218 2.4 10.733a9.8 9.8 0 0 0 1.5 5.26l.16.27-.66 2.41 2.47-.65.26.15a9.82 9.82 0 0 0 5.09 1.42c5.514 0 9.847-4.332 9.847-9.847s-4.333-9.847-9.847-9.847z" />
        </svg>
      </a>
    </aside>
  );
}

