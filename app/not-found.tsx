import Link from "next/link";
import { ArrowLeft, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-700 bg-accent-100 px-3 py-1 rounded-full">
          404 Error
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-neutral-600 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. Explore our core services or return to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-700 hover:bg-brand-900 text-white text-sm font-semibold transition-colors"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 hover:border-brand-700 hover:text-brand-700 text-sm font-semibold transition-colors"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}

