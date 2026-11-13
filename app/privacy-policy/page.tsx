import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data governance practices of A1 Pest Control Services Visakhapatnam.",
};

export default function PrivacyPolicyPage() {
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
            Data Governance &amp; DPDP Act 2023
          </span>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-950 mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Effective Date: January 1, 2026 • A1 Pest Control Services Visakhapatnam
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-display font-bold text-neutral-950">
            1. Information We Collect
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            When you request a pest inspection or quote via our website, WhatsApp channel, or phone, we collect only necessary dispatch details: your full name, contact phone number, service address in Greater Visakhapatnam, and property type.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-display font-bold text-neutral-950">
            2. Purpose of Processing
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            Collected data is strictly used for technician route assignment, service warranty tracking (e.g. 5-year anti-termite certificates), and digital invoice delivery. We do not sell or share customer lists with third-party advertising brokers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-display font-bold text-neutral-950">
            3. Local Telemetry &amp; Cookies
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            Our web platform uses essential local storage to remember your preferred locality (e.g. MVP Colony, Gajuwaka) and calculate accurate dispatch ETA times. You can decline optional analytics at any time via the cookie banner.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-display font-bold text-neutral-950">
            4. Contact Data Protection Officer
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            For data correction or deletion requests under Indian Digital Personal Data Protection (DPDP) Act, contact our administrative hub:
          </p>
          <div className="bg-neutral-100 p-4 rounded-xl text-xs font-mono text-neutral-800 space-y-1">
            <p><strong>A1 Pest Control Services Visakhapatnam</strong></p>
            <p>Flat 302, Sai Teja Enclave, 4th Lane, Dwaraka Nagar, Vizag 530016</p>
            <p>Email: privacy@a1pestcontrolvizag.in • Phone: +91 94942 81100</p>
          </div>
        </section>
      </div>
    </div>
  );
}

