"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

export function WhatsAppFloatingWidget() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl =
    "https://wa.me/919494281100?text=Hello%20A1%20Pest%20Control%20Visakhapatnam.%20I%20would%20like%20to%20inquire%20about%20pest%20inspection%20and%20transparent%20pricing.";

  return (
    <aside
      aria-label="Instant WhatsApp Dispatch Hotline"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none"
    >
      {/* Elegant Hover / Focus Status Pill (Desktop) */}
      <div
        className={`hidden sm:flex items-center gap-2.5 bg-neutral-950 text-white px-3.5 py-2 rounded-xl border border-neutral-800 shadow-xl transition-opacity transition-transform duration-150 pointer-events-none ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <div className="text-left">
          <p className="text-xs font-semibold leading-tight text-neutral-100">
            Chat on WhatsApp
          </p>
          <p className="text-[11px] text-neutral-400 font-sans">
            Vizag Zonal Team · Fast reply
          </p>
        </div>
      </div>

      {/* Main Floating Trigger Button with Ambient Green Glow */}
      <div className="relative flex items-center justify-center">
        {/* Organic Multi-Layer Ambient Green Glow */}
        <span
          className="absolute -inset-3.5 rounded-full bg-whatsapp/30 blur-xl pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute -inset-1.5 rounded-full bg-brand-500/40 blur-md pointer-events-none"
          aria-hidden="true"
        />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Chat with A1 Pest Control on WhatsApp"
          className="relative z-10 flex items-center justify-center h-14 w-14 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white shadow-xl hover:shadow-2xl motion-safe:transition-transform motion-reduce:transition-none duration-150 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-hover focus-visible:ring-offset-2 cursor-pointer"
        >
          {/* Canonical Official WhatsApp Vector */}
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            className="h-7 w-7 text-white"
            aria-hidden="true"
          >
            <path d="M16.002 2C8.28 2 2 8.28 2 16.002c0 2.658.744 5.143 2.037 7.262L2 30l6.938-1.986a13.92 13.92 0 007.064 1.916c7.722 0 14.002-6.28 14.002-14.002 0-3.74-1.456-7.257-4.102-9.902C23.257 3.382 19.742 2 16.002 2zm8.17 19.866c-.34.962-1.704 1.77-2.38 1.884-.68.113-1.36.17-4.42-1.076-2.154-.868-3.91-2.38-5.385-3.856-1.476-1.475-2.988-3.23-3.856-5.385-1.246-3.06-1.189-3.74-1.076-4.42.114-.676.922-2.04 1.884-2.38.397-.151.794-.151 1.19-.151.34 0 .624.057.85.624.283.68 1.02 2.38 1.134 2.607.113.227.17.51.056.793-.113.284-.17.454-.34.68-.17.227-.34.454-.51.68-.17.17-.34.397-.17.737.17.34.793 1.587 1.927 2.607 1.474 1.303 2.664 1.757 3.118 1.984.453.227.736.17 1.02-.114.283-.283 1.19-1.36 1.53-1.87.34-.51.68-.454 1.133-.284.454.17 2.89 1.36 3.344 1.587.453.227.737.34.85.51.113.17.113 1.02-.227 1.984z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}

