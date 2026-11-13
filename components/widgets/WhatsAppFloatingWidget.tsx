"use client";

import React, { useState } from "react";
import { MessageSquare, PhoneCall, ShieldCheck, ArrowRight, X } from "lucide-react";

export function WhatsAppFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl =
    "https://wa.me/919494281100?text=Hello%20A1%20Pest%20Control%20Visakhapatnam.%20I%20would%20like%20to%20inquire%20about%20pest%20inspection%20and%20transparent%20pricing.";

  return (
    <aside
      aria-label="Instant WhatsApp Dispatch Hotline"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none"
    >
      {/* Expanded Quick Dispatch Card */}
      {isOpen && (
        <div className="w-[300px] sm:w-[320px] rounded-2xl bg-white border border-neutral-300 p-4 text-neutral-900 shadow-lg motion-safe:transition-opacity motion-reduce:transition-none duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-whatsapp text-white flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.301-.15-1.767-.867-2.04-.967-.275-.101-.475-.15-.675.15-.2.3-.775.967-.95 1.167-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.485-.893-.795-1.496-1.778-1.67-2.078-.175-.3-.018-.462.13-.611.134-.133.3-.349.45-.524.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.584-.492-.505-.675-.514-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.115 3.23 5.124 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.767-.725 2.017-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35zm-5.467 7.42c-1.954 0-3.867-.525-5.547-1.52l-.397-.235-4.125 1.08 1.1-4.02-.259-.413A11.758 11.758 0 0 1 .8 12.046C.8 5.748 5.948.6 12.247.6c3.05 0 5.918 1.19 8.075 3.346a11.33 11.33 0 0 1 3.346 8.077c-.001 6.302-5.148 11.45-11.447 11.45zm0-20.916C6.732.886 2.4 5.218 2.4 10.733a9.8 9.8 0 0 0 1.5 5.26l.16.27-.66 2.41 2.47-.65.26.15a9.82 9.82 0 0 0 5.09 1.42c5.514 0 9.847-4.332 9.847-9.847s-4.333-9.847-9.847-9.847z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-display font-bold text-neutral-950 leading-tight">
                  A1 WhatsApp Hotline
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  <span className="text-xs text-neutral-500">Vizag Zonal Team Online</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Close WhatsApp card"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-600 font-sans my-3 leading-relaxed">
            Send photos of pest damage or termite mud tubes for free instant diagnosis &amp; transparent quotation.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-sans font-semibold text-xs transition-colors shadow-md active:scale-[0.98]"
          >
            <span>Start WhatsApp Chat</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      )}

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

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label={isOpen ? "Close WhatsApp Assistant" : "Open WhatsApp Assistant"}
          aria-expanded={isOpen}
          className="relative z-10 flex items-center justify-center h-14 w-14 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white shadow-xl hover:shadow-2xl motion-safe:transition-transform motion-reduce:transition-none duration-150 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-hover focus-visible:ring-offset-2 cursor-pointer"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7 text-white"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.301-.15-1.767-.867-2.04-.967-.275-.101-.475-.15-.675.15-.2.3-.775.967-.95 1.167-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.485-.893-.795-1.496-1.778-1.67-2.078-.175-.3-.018-.462.13-.611.134-.133.3-.349.45-.524.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.584-.492-.505-.675-.514-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.115 3.23 5.124 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.767-.725 2.017-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35zm-5.467 7.42c-1.954 0-3.867-.525-5.547-1.52l-.397-.235-4.125 1.08 1.1-4.02-.259-.413A11.758 11.758 0 0 1 .8 12.046C.8 5.748 5.948.6 12.247.6c3.05 0 5.918 1.19 8.075 3.346a11.33 11.33 0 0 1 3.346 8.077c-.001 6.302-5.148 11.45-11.447 11.45zm0-20.916C6.732.886 2.4 5.218 2.4 10.733a9.8 9.8 0 0 0 1.5 5.26l.16.27-.66 2.41 2.47-.65.26.15a9.82 9.82 0 0 0 5.09 1.42c5.514 0 9.847-4.332 9.847-9.847s-4.333-9.847-9.847-9.847z"/>
            </svg>
          )}
        </button>
      </div>
    </aside>
  );
}

