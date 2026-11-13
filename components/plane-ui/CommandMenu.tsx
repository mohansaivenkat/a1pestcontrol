"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Shield,
  MapPin,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { PEST_CATALOG } from "@/components/estimator/pricingData";
import { VIZAG_LOCALITIES } from "@/lib/sitemap-data";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSOS?: () => void;
  onSelectPest?: (pestId: string) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({
  isOpen,
  onClose,
  onOpenSOS,
  onSelectPest,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  // Reset search when opened
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }

  // Global keydown handler for Cmd+K and Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Build searchable items
  const items = useMemo(() => {
    const pestItems = PEST_CATALOG.map((pest) => ({
      id: `pest-${pest.id}`,
      type: "service" as const,
      title: pest.name,
      subtitle: `${pest.chemicalFormula} • ${pest.warrantyStandard}`,
      badge: pest.code,
      action: () => {
        onSelectPest?.(pest.id);
        const estimatorEl = document.getElementById("cost-estimator");
        if (estimatorEl) {
          estimatorEl.scrollIntoView({ behavior: "smooth" });
        }
        onClose();
      },
    }));

    const localityItems = Object.values(VIZAG_LOCALITIES).map((loc) => ({
      id: `loc-${loc.slug}`,
      type: "locality" as const,
      title: `${loc.name} (${loc.postalCode})`,
      subtitle: `${loc.eta} dispatch • ${loc.activeTechs} active techs • ${loc.zone}`,
      badge: "VIZAG ZONE",
      action: () => {
        router.push(`/locations/${loc.slug}`);
        onClose();
      },
    }));

    const actionItems = [
      {
        id: "act-sos",
        type: "action" as const,
        title: "24/7 Emergency SOS Technician Dispatch",
        subtitle: "15-minute guaranteed callback • Pre-slab pouring or acute infestation",
        badge: "EMERGENCY",
        action: () => {
          onOpenSOS?.();
          onClose();
        },
      },
      {
        id: "act-certifications",
        type: "action" as const,
        title: "Clinical Trust Vault & MSDS Sheets",
        subtitle: "CIBRC license AP/VSP/2010/8842-P and Bayer chemical safety sheets",
        badge: "VERIFIED",
        action: () => {
          router.push("/eco-safe-certifications");
          onClose();
        },
      },
      {
        id: "act-residential",
        type: "action" as const,
        title: "Residential Pest Control Services",
        subtitle: "Zero-odor kitchen gel, subterranean termite drill-fill-seal, bed bug heat",
        badge: "HOME",
        action: () => {
          router.push("/residential-pest-control-vizag");
          onClose();
        },
      },
      {
        id: "act-commercial",
        type: "action" as const,
        title: "Commercial & Industrial AMC Contracts",
        subtitle: "FSSAI audit readiness, Gajuwaka warehouses, IT SEZ offices",
        badge: "FSSAI",
        action: () => {
          router.push("/commercial-pest-control-vizag");
          onClose();
        },
      },
    ];

    const all = [...actionItems, ...pestItems, ...localityItems];

    if (!query.trim()) return all;

    const q = query.toLowerCase();
    return all.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
    );
  }, [query, router, onOpenSOS, onSelectPest, onClose]);

  // Keyboard navigation within list
  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (e.key === "Enter" && items[selectedIndex]) {
      e.preventDefault();
      items[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Menu"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-28 px-4 bg-timber-950/70 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-reduce:animate-none duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-surface-parchment rounded-xl border border-timber-700/40 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownList}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-surface-hairline bg-white/70">
          <Search className="w-5 h-5 text-timber-700/60 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search Vizag localities (530017, MVP Colony), treatments, MSDS…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm font-sans text-timber-950 placeholder:text-timber-700/50 outline-none focus-visible:ring-1 focus-visible:ring-brand-700 rounded"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs font-sans text-timber-700 bg-surface-travertine rounded border border-surface-hairline">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-surface-hairline/30">
          {items.length === 0 ? (
            <div className="py-12 text-center text-xs font-sans text-timber-700/60">
              No clinical treatments or Vizag zones matching &quot;{query}&quot;
            </div>
          ) : (
            items.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg flex items-center justify-between transition-colors duration-150 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98] ${
                    isSelected ? "bg-botanical-100 text-botanical-900" : "hover:bg-surface-travertine/60 text-timber-950"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-3">
                    <div
                      className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                        item.badge === "EMERGENCY"
                          ? "bg-crimson-100 text-crimson-800"
                          : item.type === "locality"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-botanical-100 text-botanical-700"
                      }`}
                    >
                      {item.badge === "EMERGENCY" ? (
                        <AlertTriangle className="w-4 h-4" />
                      ) : item.type === "locality" ? (
                        <MapPin className="w-4 h-4" />
                      ) : (
                        <Shield className="w-4 h-4" />
                      )}
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-semibold leading-tight font-sans">{item.title}</p>
                      <p className="text-xs text-timber-700/70 truncate mt-0.5 font-sans">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-sans px-2 py-0.5 rounded bg-surface-travertine border border-surface-hairline text-timber-700">
                      {item.badge}
                    </span>
                    {isSelected && <ArrowRight className="w-3.5 h-3.5 text-botanical-700" />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Command Footer */}
        <div className="px-4 py-2.5 border-t border-surface-hairline bg-surface-travertine/60 flex items-center justify-between text-[11px] font-mono text-timber-700/70">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>A1 Pest Control • Visakhapatnam</span>
        </div>
      </div>
    </div>
  );
};

