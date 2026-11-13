"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/components/plane-ui/ToastSystem";
import { SplitText } from "@/components/react-bits/SplitText";
import { BlurText } from "@/components/react-bits/BlurText";
import { DecryptedText } from "@/components/react-bits/DecryptedText";

const localities = [
  "Dwaraka Nagar / Srinagar (Central Hub)",
  "MVP Colony & Sector 1-12",
  "Seethammadhara & HB Colony",
  "Madhurawada & IT SEZ / PM Palem",
  "Gajuwaka & Auto Nagar",
  "Maddilapalem & Resapuvanipalem",
  "Kurmannapalem & Steel Plant Township",
  "Yendada & Rushikonda",
  "Other Area in Visakhapatnam",
];

const pestServices = [
  "Termite Control (Drill-Fill-Seal)",
  "Cockroach Gel Treatment (Odorless)",
  "Bed Bug Eradication (Thermal + Spray)",
  "Rodent Control & Proofing",
  "Mosquito Control (ULV Fogging)",
  "Wood Borer Injection Treatment",
  "Annual Maintenance Contract (AMC)",
  "General Multi-Pest Inspection",
];

export default function ContactPage() {
  const { showToast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pestType: pestServices[0],
    locality: localities[0],
    propertySize: "2 BHK",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast({
        title: "Required Fields Missing",
        description: "Please fill in your name and phone number.",
        variant: "alert",
      });
      return;
    }

    setSubmitted(true);
    showToast({
      title: "Inquiry Sent!",
      description: "A Vizag technician will call you within 15 minutes.",
      variant: "success",
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello A1 Pest Control! I'd like a quote for:\n` +
      `Pest: ${formData.pestType}\n` +
      `Locality: ${formData.locality}\n` +
      `Property: ${formData.propertySize}\n` +
      `Name: ${formData.name || "Customer"}`
  );

  return (
    <div className="py-8 sm:py-12 md:py-16">
      {/* Header with React Bits Animations */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
          <DecryptedText text="RAPID DISPATCH HOTLINE • 60-MIN SLA" />
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-display font-extrabold text-neutral-950 tracking-tight">
          <SplitText text="Get a Fast, Transparent Quote in Visakhapatnam" as="span" />
        </h1>
        <div className="max-w-2xl mx-auto">
          <BlurText
            text="Fill out the form below for an immediate callback or reach out directly via WhatsApp for rapid 60-minute emergency dispatch."
            as="p"
            className="text-xs sm:text-base lg:text-lg text-neutral-700 leading-relaxed font-sans"
          />
        </div>
      </section>

      {/* Main Grid */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-surface-card border border-neutral-300 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl lg:text-lg font-display font-bold text-neutral-950 mb-1">
                Schedule an Inspection
              </h2>
              <p className="text-xs lg:text-sm text-neutral-500 mb-6 font-mono">
                No upfront payment required. Technician inspects first and provides a fixed price.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-neutral-950">
                    Inspection Request Received!
                  </h3>
                  <p className="text-sm text-neutral-700 max-w-md mx-auto">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Our duty supervisor for{" "}
                    <span className="font-semibold">{formData.locality}</span> will call you at{" "}
                    <span className="font-semibold">{formData.phone}</span> within 15 minutes.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900 cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-950 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Rajesh Varma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-950 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98480 12345"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-950 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="rajesh@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-950 mb-1">
                        Property Size
                      </label>
                      <select
                        value={formData.propertySize}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            propertySize: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 bg-white"
                      >
                        <option>1 BHK (400-600 sq ft)</option>
                        <option>2 BHK (800-1100 sq ft)</option>
                        <option>3 BHK (1200-1600 sq ft)</option>
                        <option>Independent Villa (2000+ sq ft)</option>
                        <option>Commercial Restaurant / Kitchen</option>
                        <option>Office / Corporate Space</option>
                        <option>Pre-Construction / Under Construction</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-950 mb-1">
                        Pest Problem / Service
                      </label>
                      <select
                        value={formData.pestType}
                        onChange={(e) =>
                          setFormData({ ...formData, pestType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 bg-white"
                      >
                        {pestServices.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-950 mb-1">
                        Vizag Locality / Area
                      </label>
                      <select
                        value={formData.locality}
                        onChange={(e) =>
                          setFormData({ ...formData, locality: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 bg-white"
                      >
                        {localities.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-950 mb-1">
                      Additional Notes or Specific Symptoms
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="e.g. Wood dust noticed on door frame, or baby cockroach activity near sink."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 bg-white"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-brand-700 hover:bg-brand-900 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      Request Free Callback
                    </button>
                    <a
                      href={`https://wa.me/919494281100?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Details Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Card */}
            <div className="bg-surface-card border border-neutral-300 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-display font-bold text-neutral-950">
                Direct Contact Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-950">Headquarters</h4>
                    <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                      Flat 302, Sai Teja Enclave, 4th Lane, Dwaraka Nagar,
                      Visakhapatnam, Andhra Pradesh 530016
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-950">Dispatch Hotline</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      <a
                        href="tel:+919494281100"
                        className="text-brand-700 font-semibold hover:underline"
                      >
                        <DecryptedText text="+91 94942 81100" />
                      </a>{" "}
                      / 0891-2784401
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-950">Email Inquiries</h4>
                    <p className="text-xs text-neutral-500 mt-0.5 font-mono">
                      support@a1pestcontrolvizag.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-950">Service Hours</h4>
                    <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                      Monday to Sunday: 7:00 AM – 9:00 PM
                      <br />
                      <span className="text-accent-700 font-semibold">
                        24/7 Emergency Dispatch Available
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-4">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <ShieldCheck className="h-4 w-4 text-brand-700 shrink-0" />
                  <span>Licensed under CIBRC No. AP/VSP/2010/8842-P</span>
                </div>
              </div>
            </div>

            {/* Vizag Coverage Area Map/Image Card */}
            <div className="bg-surface-card border border-neutral-300 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
              <div className="aspect-[16/9] relative">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                  alt="Visakhapatnam service coverage map"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-semibold">
                    Zonal dispatch across all Greater Visakhapatnam areas
                  </span>
                </div>
              </div>
              <div className="p-4 bg-neutral-100 text-xs text-neutral-700 font-mono">
                Average technician arrival time: <strong className="text-neutral-950">30–60 mins</strong> from dispatch confirmation.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
