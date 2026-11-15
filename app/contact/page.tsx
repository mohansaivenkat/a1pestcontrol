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
  ExternalLink,
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[30px] bg-[#A9EFC0]/60 border border-[#115439]/20 text-[#115439] text-xs font-semibold shadow-xs">
          <ShieldCheck className="h-4 w-4 text-[#115439] shrink-0" />
          <DecryptedText text="RAPID DISPATCH HOTLINE • 60-MIN SLA" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-[#001457] tracking-[-0.96px] leading-[1.12]">
          <SplitText text="Get a Fast, Transparent Quote in Visakhapatnam" as="span" />
        </h1>
        <div className="max-w-2xl mx-auto">
          <BlurText
            text="Fill out the form below for an immediate callback or reach out directly via WhatsApp for rapid 60-minute emergency dispatch."
            as="p"
            className="text-base sm:text-lg text-[#36393D] font-medium leading-[26px] font-sans"
          />
        </div>
      </section>

      {/* Main Grid */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#EAEBE5] rounded-[24px] sm:rounded-[30px] p-5 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#001457] mb-1">
                Schedule an Inspection
              </h2>
              <p className="text-xs sm:text-sm text-[#86888B] mb-6 font-mono">
                No upfront payment required. Technician inspects first and provides a fixed price.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-[#A9EFC0]/70 text-[#115439] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#001457]">
                    Inspection Request Received!
                  </h3>
                  <p className="text-sm text-[#36393D] max-w-md mx-auto">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Our duty supervisor for{" "}
                    <span className="font-semibold">{formData.locality}</span> will call you at{" "}
                    <span className="font-semibold">{formData.phone}</span> within 15 minutes.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-[#115439] underline underline-offset-4 hover:text-[#001457] cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#001457] mb-1">
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
                        className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#EAEBE5] text-sm text-[#36393D] placeholder:text-[#86888B] focus:outline-none focus:border-[#001457] focus:ring-1 focus:ring-[#001457] bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#001457] mb-1">
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
                        className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#EAEBE5] text-sm text-[#36393D] placeholder:text-[#86888B] focus:outline-none focus:border-[#001457] focus:ring-1 focus:ring-[#001457] bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#001457] mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="rajesh@example.com"
                        className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#EAEBE5] text-sm text-[#36393D] placeholder:text-[#86888B] focus:outline-none focus:border-[#001457] focus:ring-1 focus:ring-[#001457] bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#001457] mb-1">
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
                        className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#EAEBE5] text-sm text-[#36393D] focus:outline-none focus:border-[#001457] focus:ring-1 focus:ring-[#001457] bg-white transition-colors"
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
                      <label className="block text-xs font-semibold text-[#001457] mb-1">
                        Pest Problem / Service
                      </label>
                      <select
                        value={formData.pestType}
                        onChange={(e) =>
                          setFormData({ ...formData, pestType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#EAEBE5] text-sm text-[#36393D] focus:outline-none focus:border-[#001457] focus:ring-1 focus:ring-[#001457] bg-white transition-colors"
                      >
                        {pestServices.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#001457] mb-1">
                        Vizag Locality / Area
                      </label>
                      <select
                        value={formData.locality}
                        onChange={(e) =>
                          setFormData({ ...formData, locality: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#EAEBE5] text-sm text-[#36393D] focus:outline-none focus:border-[#001457] focus:ring-1 focus:ring-[#001457] bg-white transition-colors"
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
                    <label className="block text-xs font-semibold text-[#001457] mb-1">
                      Additional Notes or Specific Symptoms
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="e.g. Wood dust noticed on door frame, or baby cockroach activity near sink."
                      className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#EAEBE5] text-sm text-[#36393D] placeholder:text-[#86888B] focus:outline-none focus:border-[#001457] focus:ring-1 focus:ring-[#001457] bg-white transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-[30px] bg-[#001457] hover:bg-[#002F47] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-[0.98] cursor-pointer"
                    >
                      <Send className="h-4 w-4 text-[#F7BE00]" />
                      <span>Request Free Callback</span>
                    </button>
                    <a
                      href={`https://wa.me/919494281100?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-[30px] bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-[0.98]"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Details Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Card */}
            <div className="bg-white border border-[#EAEBE5] rounded-[24px] sm:rounded-[30px] p-5 sm:p-8 space-y-6 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#001457]">
                Direct Contact Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#36393D]">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#A9EFC0]/60 text-[#115439] flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-[#115439]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001457]">Headquarters</h4>
                    <p className="text-xs text-[#414042] mt-0.5 leading-relaxed">
                      Flat 302, Sai Teja Enclave, 4th Lane, Dwaraka Nagar,
                      Visakhapatnam, Andhra Pradesh 530016
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#A9EFC0]/60 text-[#115439] flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-[#115439]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001457]">Dispatch Hotline</h4>
                    <p className="text-xs text-[#414042] mt-0.5">
                      <a
                        href="tel:+919494281100"
                        className="text-[#115439] font-semibold hover:underline"
                      >
                        <DecryptedText text="+91 94942 81100" />
                      </a>{" "}
                      / 0891-2784401
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#A9EFC0]/60 text-[#115439] flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-[#115439]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001457]">Email Inquiries</h4>
                    <p className="text-xs text-[#414042] mt-0.5 font-mono">
                      support@a1pestcontrolvizag.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#A9EFC0]/60 text-[#115439] flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4 text-[#115439]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001457]">Service Hours</h4>
                    <p className="text-xs text-[#414042] mt-0.5 leading-relaxed">
                      Monday to Sunday: 7:00 AM – 9:00 PM
                      <br />
                      <span className="text-[#115439] font-semibold">
                        24/7 Emergency Dispatch Available
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#EAEBE5] pt-4">
                <div className="flex items-center gap-2 text-xs text-[#36393D]">
                  <ShieldCheck className="h-4 w-4 text-[#115439] shrink-0" />
                  <span>Licensed under CIBRC No. AP/VSP/2010/8842-P</span>
                </div>
              </div>
            </div>

            {/* Vizag Central Depot Interactive Google Map Card */}
            <div className="bg-white border border-[#EAEBE5] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-xs">
              <div className="p-4 sm:p-5 border-b border-[#EAEBE5] bg-neutral-50/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-[#A9EFC0]/60 text-[#115439] flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-[#115439]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-bold text-[#001457] leading-tight">
                      A1 Pest Control Visakhapatnam Depot
                    </h3>
                    <p className="text-[11px] text-[#414042] font-sans">
                      Flat 302, Sai Teja Enclave, 4th Lane, Dwaraka Nagar
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[30px] bg-[#A9EFC0]/70 border border-[#115439]/20 text-[11px] font-semibold text-[#115439] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1DAA4C] animate-pulse" />
                  <span>Central Hub</span>
                </div>
              </div>

              {/* Interactive Google Maps Iframe */}
              <div className="relative w-full h-[280px] sm:h-[320px] bg-neutral-100">
                <iframe
                  title="A1 Pest Control Visakhapatnam Central Depot Map"
                  src="https://maps.google.com/maps?q=17.7254148,83.3085348&hl=en&z=17&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="p-4 sm:p-5 bg-white space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs text-[#36393D]">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-[#115439] shrink-0" />
                    <span>Average technician arrival: <strong className="text-[#001457] font-semibold">30–60 mins</strong> across all Vizag zones.</span>
                  </div>
                  <span className="text-[11px] text-[#86888B] font-mono">17.7254° N, 83.3085° E</span>
                </div>

                <div className="pt-1">
                  <a
                    href="https://www.google.com/maps/place/A1+Pest+Control/@17.7254148,83.3059599,17z/data=!4m8!3m7!1s0x3a3943c4f704149f:0x498ddb0bbd82f327!8m2!3d17.7254148!4d83.3085348!9m1!1b1!16s%2Fg%2F11xc_ghc__?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[30px] bg-[#001457] hover:bg-[#002F47] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-[0.98]"
                  >
                    <ExternalLink className="h-4 w-4 text-[#F7BE00]" />
                    <span>Open in Google Maps & Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
