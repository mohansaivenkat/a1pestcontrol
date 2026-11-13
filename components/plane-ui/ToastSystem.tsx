"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, RotateCcw, X, AlertCircle } from "lucide-react";

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant?: "success" | "alert" | "undo";
  duration?: number;
  onUndo?: () => void;
  undoLabel?: string;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastItem, "id">) => void;
  dismissToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ title, description, variant = "success", duration = 5000, onUndo, undoLabel = "Undo" }: Omit<ToastItem, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastItem = { id, title, description, variant, duration, onUndo, undoLabel };

      setToasts((prev) => [newToast, ...prev].slice(0, 3)); // Max 3 toasts at a time

      if (duration > 0) {
        setTimeout(() => {
          dismissToast(id);
        }, duration);
      }
    },
    [dismissToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}
      {/* Toast Render Viewport - Safe area positioned */}
      <div
        aria-live="assertive"
        className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className="pointer-events-auto flex items-start gap-3 p-3.5 bg-surface-card text-neutral-900 rounded-lg border border-neutral-200 shadow-xl transition-colors duration-150 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-reduce:animate-none"
          >
            {toast.variant === "alert" ? (
              <AlertCircle className="w-5 h-5 text-accent-700 shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
            )}

            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold tracking-tight text-neutral-950 font-sans">{toast.title}</p>
              {toast.description && (
                <p className="text-xs text-neutral-600 mt-0.5 line-clamp-2 font-sans">
                  {toast.description}
                </p>
              )}
            </div>

            {toast.onUndo && (
              <button
                type="button"
                onClick={() => {
                  toast.onUndo?.();
                  dismissToast(toast.id);
                }}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-sans font-medium text-brand-700 bg-brand-100 hover:bg-brand-100/80 border border-brand-500/20 rounded transition-colors duration-150 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98]"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{toast.undoLabel}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => dismissToast(toast.id)}
              className="text-neutral-400 hover:text-neutral-700 p-0.5 rounded transition-colors duration-150 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 active:scale-[0.98]"
              aria-label="Dismiss toast"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

