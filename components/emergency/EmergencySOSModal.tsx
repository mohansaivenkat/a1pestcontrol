"use client";

import React, { useState, useEffect } from "react";
import { AlertTriangle, Phone, Send, X, Clock, ShieldAlert } from "lucide-react";
import { analytics } from "@/lib/analytics";

interface EmergencySOSModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLocality?: string;
}

const EMERGENCY_SCENARIOS = [
  "Immediate Commercial Health/FSSAI Audit Hazard",
  "Severe Subterranean Termite Breakout on Door Frames",
  "Acute Bed Bug Outbreak in Hotel / Hostel / Guest Suite",
  "Mass Kitchen Cockroach Swarm Prior to Food Service",
  "Rodent/Rat Infestation Inside Electrical Panel or Kitchen",
  "Pre-Construction Concrete Pouring Chemical Drenching",
];

export const EmergencySOSModal: React.FC<EmergencySOSModalProps> = ({
  isOpen,
  onClose,
  defaultLocality = "Dwaraka Nagar",
}) => {
  const [scenario, setScenario] = useState(EMERGENCY_SCENARIOS[0]);
  const [phone, setPhone] = useState("");
  const [locality, setLocality] = useState(defaultLocality);
  const [secondsRemaining, setSecondsRemaining] = useState(15 * 60);

  useEffect(() => {
    if (!isOpen) return;
    analytics.track({ name: "emergency_sos_opened", locality: defaultLocality });

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, defaultLocality]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const timerDisplay = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const getWhatsAppEmergencyUrl = () => {
    const text = `🚨 *URGENT PEST CONTROL SOS DISPATCH REQUEST*
• Scenario: ${scenario}
• Locality: ${locality || "Visakhapatnam"}
• Phone: ${phone || "Not specified"}
• Status: Guaranteed 15-Minute Response Requested
Please route the nearest available A1 rapid unit immediately.`;
    return `https://wa.me/919494281100?text=${encodeURIComponent(text)}`;
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 motion-safe:animate-in motion-safe:fade-in motion-reduce:animate-none duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-surface-card rounded-2xl border-2 border-accent-700/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Emergency Siren Bar */}
        <div className="bg-accent-700 text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="motion-safe:animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
            </span>
            <h3 className="text-xs font-semibold font-sans">
              24/7 Rapid SOS Emergency Dispatch
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="text-white/80 hover:text-white p-1 rounded transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98]"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Guaranteed 15-Min Callback Readout */}
        <div className="p-5 bg-accent-100/50 border-b border-accent-700/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-accent-700 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold text-accent-700 font-sans">
                Guaranteed 15-minute callback SLA
              </p>
              <p className="text-xs text-neutral-600 font-sans">
                Directly routed to the duty supervisor in Visakhapatnam
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-accent-700 font-sans block">SLA timer</span>
            <p className="font-mono text-xl font-bold text-accent-700 tabular-nums">
              {timerDisplay}
            </p>
          </div>
        </div>

        {/* Content Form */}
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-xs text-neutral-700 font-semibold mb-1.5 font-sans">
              Select Critical Emergency Nature
            </label>
            <select
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-950 font-medium focus:border-accent-700 outline-none focus-visible:ring-2 focus-visible:ring-accent-700"
            >
              {EMERGENCY_SCENARIOS.map((s, idx) => (
                <option key={idx} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-neutral-700 font-semibold mb-1 font-sans">
                Your Mobile Number
              </label>
              <input
                type="tel"
                placeholder="10-digit phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-950 font-mono focus:border-accent-700 outline-none focus-visible:ring-2 focus-visible:ring-accent-700"
              />
            </div>
            <div>
              <label className="block text-xs text-neutral-700 font-semibold mb-1 font-sans">
                Vizag Location
              </label>
              <input
                type="text"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                placeholder="Locality / Landmark"
                className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-950 focus:border-accent-700 outline-none focus-visible:ring-2 focus-visible:ring-accent-700 font-sans"
              />
            </div>
          </div>

          <div className="p-3 rounded-lg bg-neutral-100 border border-neutral-200 text-xs space-y-1.5 font-sans">
            <div className="flex items-center gap-2 font-semibold text-neutral-950">
              <ShieldAlert className="w-4 h-4 text-accent-700 shrink-0" aria-hidden="true" />
              <span>Priority Vehicle Deployment from Srinagar Central Depot</span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Equipped with heavy-duty chemical trenching pumps, industrial thermal applicators, and locked rodent containment stations.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href="tel:+919494281100"
              className="py-3 px-4 rounded-xl bg-accent-700 hover:bg-accent-800 text-white font-display font-semibold text-xs flex items-center justify-center gap-2 transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-700 active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call duty supervisor</span>
            </a>

            <a
              href={getWhatsAppEmergencyUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-brand-900 hover:bg-brand-700 text-white font-display font-semibold text-xs flex items-center justify-center gap-2 transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 active:scale-[0.98]"
            >
              <Send className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Send live GPS pin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
