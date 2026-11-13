import { Metadata } from "next";
import { AboutPageClient } from "@/components/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Clinical Pest Biology & Local Vizag Operating History",
  description:
    "Learn about A1 Pest Control Services Visakhapatnam. CIBRC licensed since 2010, delivering hospital-grade, odorless pest eradication calibrated for Vizag's coastal micro-climates.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
