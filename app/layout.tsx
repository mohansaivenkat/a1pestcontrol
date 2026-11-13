import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import { ToastProvider } from "@/components/plane-ui/ToastSystem";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { WhatsAppFloatingWidget } from "@/components/widgets/WhatsAppFloatingWidget";
import { LanguageManager } from "@/components/widgets/LanguageManager";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2D5A27",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://a1pestcontrolvizag.in"),
  title: {
    default: "A1 Pest Control Services Visakhapatnam",
    template: "%s | A1 Pest Control Visakhapatnam",
  },
  description:
    "Professional odorless Bayer pest control services in Visakhapatnam. CIBRC-certified, safe for families & pets. Termite, cockroach, bed bug & mosquito control with up to 5-year warranty.",
  keywords: [
    "pest control vizag",
    "pest control visakhapatnam",
    "termite control vizag",
    "odorless cockroach control vizag",
    "bed bug treatment visakhapatnam",
    "bayer pest control vizag",
  ],
  authors: [{ name: "A1 Pest Control Services Visakhapatnam" }],
  creator: "A1 Pest Control Services",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://a1pestcontrolvizag.in",
    siteName: "A1 Pest Control Services Visakhapatnam",
    title: "A1 Pest Control Services Visakhapatnam",
    description:
      "Professional odorless Bayer pest control in Visakhapatnam. CIBRC licensed, safe for families & pets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-surface-main text-neutral-900 selection:bg-brand-700 selection:text-white">
        <ToastProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
          <LanguageManager />
          <WhatsAppFloatingWidget />
        </ToastProvider>
      </body>
    </html>
  );
}
