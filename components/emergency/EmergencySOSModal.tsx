"use client";

import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  X,
  Phone,
  Send,
  Clock,
  MapPin,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { analytics } from "@/lib/analytics";

interface EmergencySOSModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLocality?: string;
}

const EMERGENCY_SCENARIOS = [
  "Pre-Slab Termite Drenching Before Concrete Pouring (Construction Site)",
  "Acute Commercial Kitchen Infestation (Restaurant / Cloud Kitchen FSSAI Audit)",
  "Severe Bed Bug Outbreak in Hostel / Hotel Guest Room",
  "Rodent Infiltration in Server Room / Pharma Warehouse",
  "Wasp Swarm / Stinging Pest Emergency near Residential Balcony",
];

export const EmergencySOSModal: React.FC<EmergencySOSModalProps> = ({
  isOpen,
  onClose,
  defaultLocality = "Dwaraka Nagar / Srinagar Hub",
}) => {
  const [scenario, setScenario] = useState(EMERGENCY_SCENARIOS[0]);
  const [locality, setLocality] = useState(defaultLocality);
  const [phone, setPhone] = useState("");
  const [countdown, setCountdown] = useState(900); // 15 mins = 900 seconds
  const [isCalling, setIsCalling] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    analytics.track({
      name: "emergency_sos_triggered",
      locality,
      timestamp: Date.now(),
    });

    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, locality]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  const timerDisplay = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  const getWhatsAppEmergencyUrl = () => {
    const text = `[URGENT PEST EMERGENCY DISPATCH - VISAKHAPATNAM]
• Emergency Scenario: ${scenario}
• Locality: ${locality}
• Callback Contact: ${phone || "Will share on WhatsApp"}
• Status: Guaranteed 15-Minute Response Requested
Please route the nearest available A1 rapid unit immediately.`;
    return `https://wa.me/919494281100?text=${encodeURIComponent(text)}`;
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-timber-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-surface-parchment rounded-2xl border-2 border-crimson-700/60 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Emergency Siren Bar */}
        <div className="bg-crimson-800 text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
            </span>
            <h3 className="font-mono text-xs uppercase tracking-widest font-bold">
              24/7 Rapid SOS Emergency Dispatch
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Guaranteed 15-Min Callback Readout */}
        <div className="p-5 bg-crimson-100/50 border-b border-crimson-700/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-crimson-800 shrink-0" />
            <div>
              <p className="text-xs font-bold text-crimson-900 uppercase tracking-wide">
                Guaranteed 15-Minute Callback SLA
              </p>
              <p className="text-[11px] text-timber-700">
                Directly routed to the duty supervisor in Visakhapatnam
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-crimson-800 uppercase">SLA TIMER</span>
            <p className="font-mono text-xl font-bold text-crimson-900 tabular-nums">
              {timerDisplay}
            </p>
          </div>
        </div>

        {/* Content Form */}
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-timber-700 font-semibold mb-1.5">
              Select Critical Emergency Nature
            </label>
            <select
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-surface-hairline bg-white text-timber-950 font-medium focus:border-crimson-700 outline-none"
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
              <label className="block text-xs font-mono uppercase tracking-wider text-timber-700 mb-1">
                Your Mobile Number
              </label>
              <input
                type="tel"
                placeholder="10-digit phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-surface-hairline bg-white text-timber-950 font-mono focus:border-crimson-700 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-timber-700 mb-1">
                Vizag Location
              </label>
              <input
                type="text"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                placeholder="Locality / Landmark"
                className="w-full text-xs p-2.5 rounded-lg border border-surface-hairline bg-white text-timber-950 focus:border-crimson-700 outline-none"
              />
            </div>
          </div>

          <div className="p-3 rounded-lg bg-surface-travertine border border-surface-hairline text-xs space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-timber-950">
              <ShieldAlert className="w-4 h-4 text-crimson-700" />
              <span>Priority Vehicle Deployment from Srinagar Central Depot</span>
            </div>
            <p className="text-[11px] text-timber-700/80 leading-relaxed">
              Equipped with heavy-duty chemical trenching pumps, industrial thermal applicators, and locked rodent containment stations.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href="tel:+919494281100"
              className="py-3 px-4 rounded-xl bg-crimson-800 hover:bg-crimson-900 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Duty Supervisor</span>
            </a>

            <a
              href={getWhatsAppEmergencyUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-botanical-900 hover:bg-botanical-700 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
            >
              <Send className="w-4 h-4 text-emerald-400" />
              <span>Send Live GPS Pin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

