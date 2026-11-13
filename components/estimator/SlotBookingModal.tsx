"use client";

import React, { useState } from "react";
import { CalculatedQuote, serializeWhatsAppQuote } from "./pricingData";
import {
  Calendar,
  Clock,
  ShieldCheck,
  Send,
  X,
  CheckCircle2,
  Lock,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { analytics } from "@/lib/analytics";

interface SlotBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calc: CalculatedQuote;
  currentLocality: string;
}

const AVAILABLE_SLOTS = [
  "Immediate Rapid Squad (~30–45 Mins)",
  "Today Afternoon (2:00 PM – 4:00 PM)",
  "Today Evening (5:00 PM – 7:30 PM)",
  "Tomorrow Morning Express (8:00 AM – 10:30 AM)",
  "Tomorrow Afternoon (1:00 PM – 3:30 PM)",
];

export const SlotBookingModal: React.FC<SlotBookingModalProps> = ({
  isOpen,
  onClose,
  calc,
  currentLocality,
}) => {
  const [selectedSlot, setSelectedSlot] = useState(AVAILABLE_SLOTS[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [locality, setLocality] = useState(currentLocality);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [idempotencyKey, setIdempotencyKey] = useState("A1-SLOT-PENDING");

  React.useEffect(() => {
    setIdempotencyKey(`A1-SLOT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`);
  }, []);

  // Swipe-to-dismiss states
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [sheetTranslateY, setSheetTranslateY] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - touchStartY;
    if (deltaY > 0) {
      setSheetTranslateY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    if (sheetTranslateY > 120) {
      onClose();
    }
    setSheetTranslateY(0);
    setTouchStartY(null);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      analytics.track({
        name: "slot_booked",
        pest: calc.pest.name,
        slot: selectedSlot,
        locality,
      });
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 bg-neutral-950/75 motion-safe:animate-in motion-safe:fade-in motion-reduce:animate-none duration-200"
      onClick={onClose}
    >
      <div
        className="w-full md:max-w-xl bg-surface-card rounded-t-2xl md:rounded-2xl border border-neutral-300 overflow-hidden flex flex-col max-h-[90vh] transition-transform duration-150 ease-out"
        style={{ transform: `translateY(${sheetTranslateY}px)` }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Mobile Swipe Handle */}
        <div className="md:hidden w-full flex justify-center py-2.5 bg-neutral-100 cursor-grab active:cursor-grabbing">
          <div className="w-12 h-1.5 rounded-full bg-neutral-300" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200 bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center">
              <Calendar className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-display font-bold text-neutral-950">
                Lock Price & Pick Rapid Slot
              </h3>
              <p className="text-xs text-neutral-600 font-sans">
                Idempotency Ref: <span className="text-brand-700 font-mono font-semibold">{idempotencyKey}</span>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-neutral-500 hover:text-neutral-950 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
          {/* Diagnostic Summary Ticket */}
          <div className="p-4 rounded-xl bg-brand-100/60 border border-brand-500/20 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs text-brand-900 font-bold block">
                  {calc.pest.name}
                </span>
                <p className="text-xs text-neutral-700">
                  {calc.property.name} • {calc.severity.level} Infestation
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-600 font-sans block">Locked range</span>
                <p className="text-sm font-sans font-bold text-neutral-950 tabular-nums">
                  <span className="font-mono">₹{calc.minPrice.toLocaleString("en-IN")}</span> to <span className="font-mono">₹{calc.maxPrice.toLocaleString("en-IN")}</span>
                </p>
              </div>
            </div>

            <div className="text-xs text-brand-900 pt-2 border-t border-brand-700/15 flex items-center justify-between">
              <span>Formulation: {calc.pest.chemicalFormula.split("(")[0]}</span>
              <span className="font-mono">{calc.warrantyPeriod}</span>
            </div>
          </div>

          {!isConfirmed ? (
            <form onSubmit={handleConfirm} data-endpoint="/api/slots/reserve" className="space-y-4">
              {/* Select Slot */}
              <div>
                <label className="block text-xs text-neutral-700 font-semibold mb-2">
                  Select Vizag Arrival Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {AVAILABLE_SLOTS.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 active:scale-[0.98] disabled:opacity-50 ${
                          isSelected
                            ? "bg-brand-900 text-white border-brand-900"
                            : "bg-white hover:bg-neutral-100 border-neutral-300 text-neutral-900"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <Clock className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-brand-100" : "text-neutral-700"}`} aria-hidden="true" />
                          <span className="truncate">{slot}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Phone Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-neutral-700 font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. Rao / Lakshmi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-950 focus:border-brand-700 outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-700 font-semibold mb-1">
                    Mobile Number (For WhatsApp Pass)
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit number (9XXXXXXXXX)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-950 font-mono focus:border-brand-700 outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                  />
                </div>
              </div>

              {/* Vizag Locality & Door/Flat Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-neutral-700 font-semibold mb-1">
                    Vizag Locality or Area
                  </label>
                  <input
                    type="text"
                    required
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    placeholder="MVP Colony / Gajuwaka / Madhurawada"
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-950 focus:border-brand-700 outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-700 font-semibold mb-1">
                    1-Time Verification Pass (SMS OTP)
                  </label>
                  <input
                    type="text"
                    autoComplete="one-time-code"
                    maxLength={6}
                    placeholder="Optional 4-6 digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-950 font-mono focus:border-brand-700 outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 rounded-xl bg-accent-700 hover:bg-accent-800 text-white font-display font-semibold text-xs flex items-center justify-center gap-2 transition-colors duration-150 active:scale-[0.98] disabled:opacity-50 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                >
                  {isSubmitting ? (
                    <span>Reserving Dispatch Slot…</span>
                  ) : (
                    <>
                      <span>Confirm and lock price</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>

                <a
                  href={serializeWhatsAppQuote(calc, locality)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-brand-900 hover:bg-brand-700 text-white font-display font-semibold text-xs flex items-center justify-center gap-2 transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  <span>WhatsApp direct dispatch</span>
                </a>
              </div>
            </form>
          ) : (
            /* Confirmed Screen with Undo Option */
            <div className="py-6 text-center space-y-4 motion-safe:animate-in motion-safe:fade-in motion-reduce:animate-none">
              <div className="w-14 h-14 rounded-full bg-brand-100 text-brand-700 mx-auto flex items-center justify-center border-2 border-brand-700/30">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold text-neutral-950">
                  Appointment Confirmed!
                </h4>
                <p className="text-xs text-neutral-700 mt-1 max-w-sm mx-auto">
                  Technician assigned from {locality} depot for{" "}
                  <strong className="text-neutral-950">{selectedSlot}</strong>.
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-neutral-200 max-w-sm mx-auto text-left text-xs space-y-1 font-sans">
                <div className="flex justify-between text-neutral-700">
                  <span>Tracking Code:</span>
                  <span className="font-mono font-bold text-neutral-950">{idempotencyKey}</span>
                </div>
                <div className="flex justify-between text-neutral-700">
                  <span>Contact Provided:</span>
                  <span className="font-mono font-bold text-neutral-950">{phone || "Provided on file"}</span>
                </div>
                <div className="flex justify-between text-neutral-700">
                  <span>Estimated Arrival:</span>
                  <span className="text-brand-700 font-bold">Within 45 mins</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-neutral-900 text-white hover:bg-neutral-950 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 active:scale-[0.98]"
                >
                  Done
                </button>
                <a
                  href={serializeWhatsAppQuote(calc, locality)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-brand-700 text-white hover:bg-brand-900 transition-colors duration-150 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Send GPS Pin on WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
