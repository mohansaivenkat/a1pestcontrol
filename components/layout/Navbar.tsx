"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-40 bg-surface-card border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-lg bg-neutral-950 flex items-center justify-center p-1.5 shadow-sm border border-neutral-800 group-hover:border-brand-700 transition-colors">
              <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
                <path d="M24 6L38 14V34L24 42L10 34V14L24 6Z" stroke="#2D5A27" strokeWidth="2.5" strokeLinejoin="round"/>
                <path d="M16 34L22 16" stroke="#FAF8F5" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M18.5 27H27.5" stroke="#2D5A27" strokeWidth="3" strokeLinecap="round"/>
                <path d="M22 16L27 16V34" stroke="#FAF8F5" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 34H30" stroke="#FAF8F5" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="24.5" cy="11.5" r="2" fill="#B8332A"/>
              </svg>
            </div>
            <div>
              <span className="text-lg font-display font-bold text-neutral-950 leading-tight block tracking-tight">
                A1 Pest Control
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 leading-none">
                Visakhapatnam
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
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

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919494281100"
              className="flex items-center gap-1.5 text-sm text-neutral-700 hover:text-brand-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 94942 81100</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-brand-700 hover:bg-brand-900 rounded-lg transition-colors"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-brand-700 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-200 pb-4 pt-2">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "text-brand-700 font-semibold bg-brand-100"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 flex flex-col gap-2 px-3">
              <a
                href="tel:+919494281100"
                className="flex items-center gap-2 text-sm text-neutral-700"
              >
                <Phone className="h-4 w-4" />
                +91 94942 81100
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-brand-700 hover:bg-brand-900 rounded-lg transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
