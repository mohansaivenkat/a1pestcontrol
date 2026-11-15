"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface-card border-b border-neutral-200 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 rounded-lg active:scale-[0.98] motion-safe:transition-transform motion-reduce:transition-none duration-150 shrink-0"
          >
            <div className="h-9 w-9 rounded-lg bg-neutral-950 flex items-center justify-center p-1.5 shadow-sm border border-neutral-800 group-hover:border-brand-700 transition-colors duration-150">
              <svg viewBox="0 0 48 48" fill="none" className="h-full w-full" aria-hidden="true">
                <path d="M24 6L38 14V34L24 42L10 34V14L24 6Z" stroke="#2D5A27" strokeWidth="2.5" strokeLinejoin="round"/>
                <path d="M16 34L22 16" stroke="#FAF8F5" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M18.5 27H27.5" stroke="#2D5A27" strokeWidth="3" strokeLinecap="round"/>
                <path d="M22 16L27 16V34" stroke="#FAF8F5" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 34H30" stroke="#FAF8F5" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="24.5" cy="11.5" r="2" fill="#B8332A"/>
              </svg>
            </div>
            <div>
              <span className="text-lg font-display font-bold text-navy-950 leading-tight block tracking-tight">
                A1 Pest Control
              </span>
              <span className="text-xs font-sans text-neutral-500 leading-none">
                Visakhapatnam
              </span>
            </div>
          </Link>

          {/* Desktop Nav (Laptop & Desktop Only: >= 1024px) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors active:scale-[0.98] ${
                    isActive
                      ? "text-brand-700 font-semibold"
                      : "text-neutral-700 hover:text-brand-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right (Laptop & Desktop Only: >= 1024px) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919494281100"
              className="flex items-center gap-1.5 text-sm text-navy-950 hover:text-brand-900 font-medium transition-colors active:scale-[0.98]"
            >
              <Phone className="h-4 w-4 text-brand-900" />
              <span>+91 94942 81100</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 text-sm font-bold text-navy-950 bg-gold-500 hover:bg-gold-600 rounded-[30px] transition-colors shadow-xs active:scale-[0.98]"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Tablet Quick Action (768px to 1023px) */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            <a
              href="tel:+919494281100"
              className="flex items-center gap-1.5 text-xs font-semibold text-navy-950 bg-white hover:bg-neutral-100 px-3.5 py-1.5 rounded-[30px] border border-neutral-200 transition-colors active:scale-[0.98]"
            >
              <Phone className="h-3.5 w-3.5 text-brand-900" />
              <span>+91 94942 81100</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-1.5 text-xs font-bold text-navy-950 bg-gold-500 hover:bg-gold-600 rounded-[30px] transition-colors shadow-xs active:scale-[0.98]"
            >
              Quote
            </Link>
          </div>

          {/* Mobile & Tablet Hamburger Toggle (< 1024px) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-brand-700 transition-colors active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg border border-neutral-200 hover:border-neutral-300"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile & Tablet Dropdown Menu Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-sans font-semibold text-neutral-500 px-3 pb-1">
                  Navigation
                </span>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`px-3.5 py-2.5 rounded-xl text-sm md:text-base font-medium transition-colors active:scale-[0.98] ${
                        isActive
                          ? "text-brand-700 font-semibold bg-brand-100 border border-brand-500/20"
                          : "text-neutral-800 hover:bg-neutral-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col justify-between gap-3 px-3 pt-2 md:pt-0 md:border-l md:border-neutral-200 md:pl-6">
                <div>
                  <span className="text-xs font-sans font-semibold text-neutral-500 block pb-1.5">
                    Direct zonal assistance
                  </span>
                  <a
                    href="tel:+919494281100"
                    className="flex items-center gap-2 text-sm md:text-base text-neutral-900 font-bold hover:text-brand-700 transition-colors active:scale-[0.98]"
                  >
                    <Phone className="h-4 w-4 text-brand-700" />
                    <span>+91 94942 81100</span>
                  </a>
                  <p className="text-xs text-neutral-600 font-sans mt-1">
                    Direct Visakhapatnam Zonal Hotline · 60-Minute Emergency Dispatch
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm md:text-base font-bold text-navy-950 bg-gold-500 hover:bg-gold-600 rounded-[30px] transition-colors shadow-xs active:scale-[0.98]"
                  >
                    <span>Get Free Instant Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
