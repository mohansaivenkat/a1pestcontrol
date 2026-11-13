import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of service for A1 Pest Control Services Visakhapatnam.",
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-16 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900 mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <div className="bg-surface-card border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 text-neutral-800">
        <div className="border-b border-neutral-200 pb-4">
          <span className="text-xs font-mono font-bold text-brand-700 uppercase tracking-widest">
            Service Terms &amp; Warranty Guidelines
          </span>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-950 mt-1">
            Terms of Service
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Last Updated: January 1, 2026 • Visakhapatnam Jurisdiction
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-display font-bold text-neutral-950">
            1. Scope of Pest Management Services
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            A1 Pest Control Services provides scientific chemical and mechanical pest management across Visakhapatnam district using authenticated CIBRC-registered formulations (Bayer, Syngenta, BASF).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-display font-bold text-neutral-950">
            2. Warranty Standards &amp; Callbacks
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            - <strong>Termite Treatments:</strong> Accompanied by a 1 to 5-year stamped warranty certificate. If live subterranean termite activity recurs in treated masonry/woodwork, A1 provides free spot re-injections.
            <br />
            - <strong>Cockroach Gel Treatments:</strong> 90-day single service or 365-day AMC coverage with scheduled checkups.
            <br />
            - <strong>Bed Bug Treatments:</strong> Mandates a 2-stage cycle (Day 1 initial + Day 14 follow-up) for full 180-day warranty coverage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-display font-bold text-neutral-950">
            3. Safety &amp; Customer Cooperation
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            Clients agree to observe pre-treatment guidelines (e.g. 2-hour room ventilation for residual bed bug treatments, keeping pets off damp surfaces). Odorless gel treatments do not require food or kitchen utensil removal.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-display font-bold text-neutral-950">
            4. Pricing &amp; GST Invoicing
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            Prices locked through our online estimator or written quote are final with no hidden transit or consumable surcharges. Stamped GST tax invoices are generated upon service completion.
          </p>
        </section>
      </div>
    </div>
  );
}

