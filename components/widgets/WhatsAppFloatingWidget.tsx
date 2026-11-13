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
          {/* Official WhatsApp Vector */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 text-white"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}

