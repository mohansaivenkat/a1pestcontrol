import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Termite Control",
  "Cockroach Control",
  "Bed Bug Treatment",
  "Mosquito Control",
  "Rodent Control",
  "Wood Borer Treatment",
];

export function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-8 w-8 rounded-lg bg-neutral-950 flex items-center justify-center p-1 border border-neutral-800">
                <svg viewBox="0 0 48 48" fill="none" className="h-full w-full" aria-hidden="true">
                  <path d="M24 6L38 14V34L24 42L10 34V14L24 6Z" stroke="#2D5A27" strokeWidth="2.5" strokeLinejoin="round"/>
                  <path d="M16 34L22 16" stroke="#FAF8F5" strokeWidth="3.5" strokeLinecap="round"/>
                  <path d="M18.5 27H27.5" stroke="#2D5A27" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M22 16L27 16V34" stroke="#FAF8F5" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 34H30" stroke="#FAF8F5" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="24.5" cy="11.5" r="2" fill="#B8332A"/>
                </svg>
              </div>
              <h3 className="text-lg font-display font-bold text-neutral-950">
                A1 Pest Control
              </h3>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed font-sans">
              Professional, odorless pest control services in Visakhapatnam.
              CIBRC-certified technicians using genuine Bayer products with up
              to 5-year written warranty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-950 font-sans">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-700 hover:text-brand-700 transition-colors duration-150 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand-700 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-950 font-sans">
              Services
            </h4>
            <ul className="mt-3 space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-neutral-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-950 font-sans">
              Contact Us
            </h4>
            <address className="mt-3 not-italic space-y-2 text-sm text-neutral-700">
              <p>
                47-11-26/A, Dwaraka Nagar,
                <br />
                Visakhapatnam, Andhra Pradesh 530016
              </p>
              <p>
                <a
                  href="tel:+919494281100"
                  className="hover:text-brand-700 transition-colors"
                >
                  +91 94942 81100
                </a>
              </p>
              <p className="text-xs text-neutral-500">
                CIBRC License Holder
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <p>&copy; 2026 A1 Pest Control Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-brand-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-brand-700 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
