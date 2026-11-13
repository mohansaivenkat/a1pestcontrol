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
        <div className="h-2 w-2 rounded-full bg-emerald-400 motion-safe:animate-ping motion-reduce:animate-none" />
        <div className="text-left">
          <p className="text-xs font-semibold leading-tight flex items-center gap-1.5">
            <span>Vizag Dispatch Officer</span>
            <span className="text-[10px] font-sans font-medium text-emerald-400">Active</span>
          </p>
          <p className="text-[11px] text-neutral-400">Average response: &lt; 5 mins</p>
        </div>
      </div>

      {/* Main Interactive Button with Pulsating Glowing Ambience */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with A1 Pest Control on WhatsApp"
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white shadow-xl hover:shadow-2xl transition-transform duration-150 hover:scale-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-hover focus-visible:ring-offset-2"
      >
        {/* Soft Ambient Breathing Halo Glow (Anti-AI slop organic pulse) */}
        <span
          className="absolute -inset-2 rounded-full bg-whatsapp/30 blur-md motion-safe:animate-pulse motion-reduce:animate-none pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute -inset-3.5 rounded-full bg-whatsapp/15 blur-lg pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp Brand Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7 relative z-10 transition-transform duration-150 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.03C9.33 7.03 9 7.11 8.76 7.37C8.48 7.67 7.67 8.44 7.67 10.02C7.67 11.6 8.82 13.12 8.98 13.33C9.14 13.55 11.23 16.78 14.44 18.16C15.2 18.49 15.79 18.69 16.26 18.84C17.03 19.08 17.73 19.05 18.28 18.96C18.9 18.87 20.18 18.18 20.45 17.43C20.71 16.67 20.71 16.03 20.63 15.89C20.55 15.75 20.35 15.67 20.05 15.52C19.74 15.37 18.25 14.64 17.97 14.54C17.7 14.44 17.5 14.39 17.3 14.69C17.1 14.99 16.53 15.67 16.35 15.87C16.18 16.07 16 16.1 15.7 15.95C15.39 15.8 14.1 15.38 12.56 14.01C11.36 12.94 10.55 11.62 10.32 11.22C10.09 10.82 10.3 10.6 10.45 10.45C10.59 10.32 10.76 10.09 10.91 9.92C11.06 9.74 11.11 9.62 11.21 9.41C11.31 9.21 11.26 9.04 11.18 8.89C11.11 8.74 10.53 7.31 10.28 6.72C10.05 6.15 9.81 6.22 9.63 6.22C9.46 6.22 9.26 6.22 9.06 6.22C8.86 6.22 8.53 6.3 8.33 6.52" />
        </svg>

        {/* Live Active Duty Status Pulse Badge */}
        <span
          className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center z-20"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white motion-safe:animate-ping motion-reduce:animate-none" />
        </span>
      </a>
    </aside>
  );
}

