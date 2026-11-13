"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MapPin,
  Send,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { QuoteCalculation, serializeWhatsAppQuote } from "./pricingData";
import { generateIdempotencyKey } from "@/lib/utils";
import { useToast } from "@/components/plane-ui/ToastSystem";
import { analytics } from "@/lib/analytics";

interface SlotBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calc: QuoteCalculation;
  currentLocality: string;
}

const AVAILABLE_SLOTS = [
  "Today • 02:00 PM – 03:00 PM (Rapid)",
  "Today • 04:30 PM – 05:30 PM",
  "Tomorrow • 09:30 AM – 10:30 AM",
  "Tomorrow • 11:30 AM – 12:30 PM",
  "Tomorrow • 03:00 PM – 04:00 PM",
  "Sunday • 10:00 AM – 11:00 AM (Weekend)",
];

export const SlotBookingModal: React.FC<SlotBookingModalProps> = ({
  isOpen,
  onClose,
  calc,
  currentLocality,
}) => {
  const { showToast } = useToast();
  const [selectedSlot, setSelectedSlot] = useState(AVAILABLE_SLOTS[0]);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [locality, setLocality] = useState(currentLocality);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [idempotencyKey, setIdempotencyKey] = useState("");

  // Touch swipe to dismiss state for mobile bottom sheet
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [sheetTranslateY, setSheetTranslateY] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIdempotencyKey(generateIdempotencyKey());
      setIsConfirmed(false);
      setSheetTranslateY(0);
    }
  }, [isOpen]);

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
    } else {
      setSheetTranslateY(0);
    }
    setTouchStartY(null);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert("Please provide a valid 10-digit mobile number for appointment confirmation.");
      return;
    }

    setIsSubmitting(true);

    // Optimistic slot reservation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);

      analytics.track({
        name: "slot_picked",
        slotTime: selectedSlot,
        date: new Date().toISOString(),
        pest: calc.pest.name,
        locality: locality,
      });

      // Show Undo Toast
      showToast({
        title: `Slot Reserved (${selectedSlot})`,
        description: `Technician assigned for ${calc.property.name} in ${locality}. Ref: ${idempotencyKey}`,
        variant: "undo",
        duration: 7000,
        undoLabel: "Undo Slot",
        onUndo: () => {
          setIsConfirmed(false);
        },
      });
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 bg-timber-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full md:max-w-xl bg-surface-parchment rounded-t-2xl md:rounded-2xl border border-surface-hairline shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-transform duration-150 ease-out"
        style={{ transform: `translateY(${sheetTranslateY}px)` }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Mobile Swipe-to-dismiss Handle */}
        <div className="md:hidden w-full flex justify-center py-2.5 bg-surface-travertine cursor-grab active:cursor-grabbing">
          <div className="w-12 h-1.5 rounded-full bg-timber-700/30" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-surface-hairline bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-botanical-100 text-botanical-700 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-display font-bold text-timber-950">
                Lock Price & Pick Rapid Slot
              </h3>
              <p className="text-[11px] font-mono text-timber-700/70">
                Idempotency Ref: <span className="text-botanical-900 font-semibold">{idempotencyKey}</span>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-timber-700/60 hover:text-timber-950 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
          {/* Diagnostic Summary Ticket */}
          <div className="p-4 rounded-xl bg-botanical-100/60 border border-botanical-700/20 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-botanical-900 font-bold">
                  {calc.pest.name}
                </span>
                <p className="text-xs text-timber-700/80">
                  {calc.property.name} • {calc.severity.level} Infestation
                </p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-timber-700/60">LOCKED RANGE</span>
                <p className="text-sm font-mono font-bold text-timber-950 tabular-nums">
                  ₹{calc.minPrice.toLocaleString("en-IN")} – ₹{calc.maxPrice.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            <div className="text-[11px] font-mono text-botanical-900 pt-2 border-t border-botanical-700/15 flex items-center justify-between">
              <span>Formulation: {calc.pest.chemicalFormula.split("(")[0]}</span>
              <span>{calc.warrantyPeriod}</span>
            </div>
          </div>

          {!isConfirmed ? (
            <form onSubmit={handleConfirm} className="space-y-4">
              {/* Select Slot */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-timber-700 font-semibold mb-2">
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
                        className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-botanical-900 text-white border-botanical-900 shadow-sm"
                            : "bg-white hover:bg-surface-travertine border-surface-hairline text-timber-900"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <Clock className={`w-3.5 h-3.5 ${isSelected ? "text-amber-300" : "text-timber-700"}`} />
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-timber-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. Rao / Lakshmi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-surface-hairline bg-white text-timber-950 focus:border-botanical-700 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-timber-700 mb-1">
                    Mobile Number (For WhatsApp Pass)
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit number (9XXXXXXXXX)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-surface-hairline bg-white text-timber-950 font-mono focus:border-botanical-700 outline-none"
                  />
                </div>
              </div>

              {/* Vizag Locality & Door/Flat Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-timber-700 mb-1">
                    Vizag Locality / Area
                  </label>
                  <input
                    type="text"
                    required
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    placeholder="MVP Colony / Gajuwaka / Madhurawada"
                    className="w-full text-xs p-2.5 rounded-lg border border-surface-hairline bg-white text-timber-950 focus:border-botanical-700 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-timber-700 mb-1">
                    1-Time Verification Pass (SMS OTP)
                  </label>
                  <input
                    type="text"
                    autoComplete="one-time-code"
                    maxLength={6}
                    placeholder="Optional 4-6 digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-surface-hairline bg-white text-timber-950 font-mono tracking-widest focus:border-botanical-700 outline-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 rounded-xl bg-crimson-700 hover:bg-crimson-800 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Reserving Dispatch Slot...</span>
                  ) : (
                    <>
                      <span>Confirm & Lock Price</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <a
                  href={serializeWhatsAppQuote(calc, locality)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-botanical-900 hover:bg-botanical-700 text-white font-display font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Direct Dispatch</span>
                </a>
              </div>
            </form>
          ) : (
            /* Confirmed Screen with Undo Option */
            <div className="py-6 text-center space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-14 h-14 rounded-full bg-botanical-100 text-botanical-700 mx-auto flex items-center justify-center border-2 border-botanical-700/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold text-timber-950">
                  Appointment Confirmed!
                </h4>
                <p className="text-xs text-timber-700/80 mt-1 max-w-sm mx-auto">
                  Technician assigned from {locality} depot for{" "}
                  <strong className="text-timber-950">{selectedSlot}</strong>.
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-surface-hairline max-w-sm mx-auto text-left text-xs font-mono space-y-1">
                <div className="flex justify-between text-timber-700">
                  <span>Tracking Code:</span>
                  <span className="font-bold text-timber-950">{idempotencyKey}</span>
                </div>
                <div className="flex justify-between text-timber-700">
                  <span>Contact Provided:</span>
                  <span className="font-bold text-timber-950">{phone || "Provided on file"}</span>
                </div>
                <div className="flex justify-between text-timber-700">
                  <span>Estimated Arrival:</span>
                  <span className="text-botanical-700 font-bold">Within 45 mins</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-timber-900 text-white hover:bg-timber-950 transition-colors"
                >
                  Done
                </button>
                <a
                  href={serializeWhatsAppQuote(calc, locality)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition-colors inline-flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
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

