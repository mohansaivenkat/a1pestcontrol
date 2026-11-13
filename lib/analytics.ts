// Privacy-friendly telemetry and analytics engine for A1 Pest Control Visakhapatnam

export type AnalyticsEvent =
  | { name: "estimator_calculate"; pest: string; property: string; severity: string; priceMin: number; priceMax: number }
  | { name: "slot_picked"; slotTime: string; date: string; pest: string; locality: string }
  | { name: "slot_booked"; pest?: string; locality?: string; slot?: string }
  | { name: "emergency_sos_opened"; locality?: string }
  | { name: "emergency_sos_triggered"; locality: string; timestamp: number }
  | { name: "whatsapp_quote_clicked"; pest: string; property: string; locality: string }
  | { name: "locality_switched"; locality: string; eta: string }
  | { name: "msds_downloaded"; chemicalName: string }
  | { name: "command_menu_opened" };

class A1Analytics {
  private queue: AnalyticsEvent[] = [];

  track(event: AnalyticsEvent) {
    if (typeof window === "undefined") return;

    this.queue.push(event);

    // Development & auditing log without tracking PII
    if (process.env.NODE_ENV !== "production") {
      console.info(`[A1 Analytics Telemetry]`, event.name, event);
    }

    // Dispatch custom DOM event for lightweight external observers (GTM, Plausible, PostHog, or custom server)
    try {
      const customEvent = new CustomEvent("a1_telemetry", { detail: event });
      window.dispatchEvent(customEvent);
    } catch {
      // Fallback
    }
  }
}

export const analytics = new A1Analytics();

