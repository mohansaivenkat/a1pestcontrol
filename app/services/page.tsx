import { Metadata } from "next";
import { ServicesPageClient } from "@/components/services/ServicesPageClient";

export const metadata: Metadata = {
  title: "Professional Pest Control Services | Visakhapatnam",
  description:
    "CIBRC-certified pest control treatments in Visakhapatnam. Termites, cockroaches, bed bugs, rodents, mosquitoes, and wood borers with upfront transparent pricing.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
