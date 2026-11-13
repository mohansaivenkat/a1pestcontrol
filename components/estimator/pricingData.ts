export interface PestOption {
  id: string;
  name: string;
  code: string;
  subtitle: string;
  iconName: string;
  chemicalFormula: string;
  formulationMaker: "Bayer Environmental Science" | "Syngenta India" | "BASF Professional" | "UPL Limited";
  cibrcRegNumber: string;
  preparationAdvice: string;
  safetyProfile: "Zero-Odor / Leave-In-Place" | "Odorless Micro-Encapsulated" | "2-Hour Ventilation Required" | "Locked Tamper-Proof Stations";
  protocolNotice: string;
  warrantyStandard: string;
  basePrice: number;
}

export interface PropertyOption {
  id: string;
  name: string;
  sqftEstimate: number;
  multiplier: number;
}

export interface SeverityOption {
  id: string;
  level: "Mild" | "Moderate" | "Severe";
  description: string;
  multiplier: number;
  badgeColor: string;
  pulseAlert?: boolean;
}

export const PEST_CATALOG: PestOption[] = [
  {
    id: "termites",
    name: "Termites (Subterranean Eradication)",
    code: "TERM-01",
    subtitle: "Drill-Fill-Seal Subterranean Pipeline Injection",
    iconName: "Drill",
    chemicalFormula: "Imidacloprid 30.5% SC (Bayer Premise)",
    formulationMaker: "Bayer Environmental Science",
    cibrcRegNumber: "CIR-38,201/2002-Imidacloprid(SC)-244",
    preparationAdvice: "Clear 1 foot along internal baseboards. Modular kitchen cabinetry remains intact.",
    safetyProfile: "Odorless Micro-Encapsulated",
    protocolNotice: "6mm precision drilling with non-shrink polymer hole capping • 5-Year Stamped Warranty",
    warrantyStandard: "5-Year Official Stamped Warranty Certificate",
    basePrice: 3499,
  },
  {
    id: "cockroaches",
    name: "Cockroaches (Domino Gel Bait)",
    code: "ROACH-02",
    subtitle: "Pheromone Domino-Effect Gel + Bio-Drain Barrier",
    iconName: "ShieldAlert",
    chemicalFormula: "Indoxacarb 0.6% Gel + Fipronil 0.05%",
    formulationMaker: "Bayer Environmental Science",
    cibrcRegNumber: "CIR-44,912/2004-Fipronil(Gel)-188",
    preparationAdvice: "No need to empty kitchen utensils, spices, or cupboards. Safe for direct application.",
    safetyProfile: "Zero-Odor / Leave-In-Place",
    protocolNotice: "Zero kitchen evacuation needed • 100% odorless food-grade targeted application",
    warrantyStandard: "90-Day Single Service / 365-Day AMC Guarantee",
    basePrice: 1199,
  },
  {
    id: "bedbugs",
    name: "Bed Bugs (Thermal + Residual)",
    code: "BUG-03",
    subtitle: "2-Stage 180°F Thermal Steam + Nymph Eradication",
    iconName: "Flame",
    chemicalFormula: "Chlorfenapyr 10% SC + Micro-Encapsulated Pyrethroid",
    formulationMaker: "BASF Professional",
    cibrcRegNumber: "CIR-51,330/2006-Chlorfenapyr-309",
    preparationAdvice: "Wash bed linens in hot water. 2-hour home ventilation required post chemical barrier spray.",
    safetyProfile: "2-Hour Ventilation Required",
    protocolNotice: "180°F thermal dry steam + mandatory Day-14 nymph intercept visit",
    warrantyStandard: "Mandatory Day-14 Re-check + 180-Day Guarantee",
    basePrice: 2199,
  },
  {
    id: "rodents",
    name: "Rodents & Rats (Tamper Stations)",
    code: "ROD-04",
    subtitle: "Tamper-Proof Lockable Bait Stations & Duct Proofing",
    iconName: "BoxSelect",
    chemicalFormula: "Bromadiolone 0.005% CB + Non-Drying Elastomer Trays",
    formulationMaker: "Syngenta India",
    cibrcRegNumber: "CIR-29,104/1998-Bromadiolone-112",
    preparationAdvice: "Keep pet feeding bowls elevated for 24 hours. Stations are locked and keyed.",
    safetyProfile: "Locked Tamper-Proof Stations",
    protocolNotice: "Tamper-resistant locked stations safe from children and pets",
    warrantyStandard: "Complete Colony Depletion + 90-Day Free Callback",
    basePrice: 1499,
  },
  {
    id: "mosquitoes",
    name: "Mosquitoes (ULV Cold Fogging)",
    code: "MOSQ-05",
    subtitle: "Cold ULV Fogging + 6-Week Residual Balcony Barrier",
    iconName: "Wind",
    chemicalFormula: "Deltamethrin 2.5% Flow (Water-based ULV, No Diesel)",
    formulationMaker: "Bayer Environmental Science",
    cibrcRegNumber: "CIR-31,885/2000-Deltamethrin-091",
    preparationAdvice: "Close windows during 20-min ULV mist settling; safe for return immediately after.",
    safetyProfile: "Odorless Micro-Encapsulated",
    protocolNotice: "100% water-based cold aerosol mist with zero diesel or oil residue",
    warrantyStandard: "Immediate Adult knockdown + 45-Day Larval Barrier",
    basePrice: 1299,
  },
  {
    id: "woodborers",
    name: "Wood Borers & Ants (Timber Infusion)",
    code: "WOOD-06",
    subtitle: "Precision Syringe Timber Infusion & Skirting Barrier",
    iconName: "Syringe",
    chemicalFormula: "Thiamethoxam 25% WG + Petroleum Distillate Carrier",
    formulationMaker: "Syngenta India",
    cibrcRegNumber: "CIR-48,771/2005-Thiamethoxam-199",
    preparationAdvice: "Inspect all solid wood wardrobes, antique cots, and door frames for yellow powder.",
    safetyProfile: "Odorless Micro-Encapsulated",
    protocolNotice: "Needle-point syringe injection into flight holes preserving wood finish",
    warrantyStandard: "2-Year Furniture Timber Protection Warranty",
    basePrice: 1899,
  },
  {
    id: "annual-amc",
    name: "Comprehensive Annual AMC (Whole Home Shield)",
    code: "AMC-365",
    subtitle: "Quarterly 4-Visit Whole Property Shield (Cockroach + Termite + Ant)",
    iconName: "Award",
    chemicalFormula: "Multi-Spectrum Bayer Clinical Suite",
    formulationMaker: "Bayer Environmental Science",
    cibrcRegNumber: "AP/VSP/2010/8842-P (Whole Unit License)",
    preparationAdvice: "All-in-one preventative maintenance. VIP rapid dispatch on all emergency calls.",
    safetyProfile: "Zero-Odor / Leave-In-Place",
    protocolNotice: "4 scheduled quarterly visits + unlimited free emergency callback visits",
    warrantyStandard: "365-Day Unlimited Free Re-Treatment Contract",
    basePrice: 3899,
  },
];

export const PROPERTY_OPTIONS: PropertyOption[] = [
  { id: "1bhk", name: "1 BHK Flat", sqftEstimate: 650, multiplier: 1.0 },
  { id: "2bhk", name: "2 BHK Flat", sqftEstimate: 1150, multiplier: 1.25 },
  { id: "3bhk", name: "3 BHK Flat", sqftEstimate: 1650, multiplier: 1.55 },
  { id: "villa", name: "Independent Villa / Duplex", sqftEstimate: 2600, multiplier: 2.2 },
  { id: "commercial-kitchen", name: "Restaurant / Cloud Kitchen", sqftEstimate: 1800, multiplier: 2.1 },
  { id: "commercial-office", name: "Warehouse / Corporate Office", sqftEstimate: 4000, multiplier: 3.2 },
  { id: "pre-construction", name: "Pre-Construction Site (Per Sq.Ft)", sqftEstimate: 1200, multiplier: 1.8 },
];

export const SEVERITY_OPTIONS: SeverityOption[] = [
  {
    id: "mild",
    level: "Mild",
    description: "Occasional sighting (1-2 weekly), preventative hygiene maintenance",
    multiplier: 1.0,
    badgeColor: "text-botanical-700 bg-botanical-100 border-botanical-700/30",
  },
  {
    id: "moderate",
    level: "Moderate",
    description: "Daily sightings, active foraging near food prep or woodwork",
    multiplier: 1.2,
    badgeColor: "text-amber-800 bg-amber-50 border-amber-500/30",
  },
  {
    id: "severe",
    level: "Severe",
    description: "Acute nesting, wood mud-tubes, biting pests, commercial audit emergency",
    multiplier: 1.45,
    badgeColor: "text-crimson-800 bg-crimson-100 border-crimson-700/40",
    pulseAlert: true,
  },
];

export interface QuoteCalculation {
  pest: PestOption;
  property: PropertyOption;
  severity: SeverityOption;
  minPrice: number;
  maxPrice: number;
  durationMinutes: number;
  visitsIncluded: number;
  warrantyPeriod: string;
}

export type CalculatedQuote = QuoteCalculation;

export function calculateQuote(pestId: string, propertyId: string, severityId: string): QuoteCalculation {
  const pest = PEST_CATALOG.find((p) => p.id === pestId) || PEST_CATALOG[1];
  const property = PROPERTY_OPTIONS.find((prop) => prop.id === propertyId) || PROPERTY_OPTIONS[1];
  const severity = SEVERITY_OPTIONS.find((s) => s.id === severityId) || SEVERITY_OPTIONS[0];

  const rawBase = pest.basePrice * property.multiplier * severity.multiplier;

  // Round to friendly consumer pricing ending in 99 or 49
  const roundedMin = Math.round(rawBase / 50) * 50 - 1;
  const roundedMax = Math.round((rawBase * 1.22) / 50) * 50 - 1;

  let duration = 45;
  if (pest.id === "termites") duration = 120;
  else if (pest.id === "bedbugs") duration = 90;
  else if (property.id === "villa" || property.id === "commercial-office") duration = 150;

  let visits = 1;
  if (pest.id === "bedbugs") visits = 2; // Mandatory Day 14 follow-up
  if (pest.id === "annual-amc") visits = 4;

  return {
    pest,
    property,
    severity,
    minPrice: Math.max(899, roundedMin),
    maxPrice: Math.max(1099, roundedMax),
    durationMinutes: duration,
    visitsIncluded: visits,
    warrantyPeriod: pest.warrantyStandard,
  };
}

export function serializeWhatsAppQuote(
  calc: QuoteCalculation,
  localityName = "MVP Colony",
  phone = "919494281100"
): string {
  const text = `Hi A1 Pest Control (Visakhapatnam),

I generated an instant estimate on your portal:
• Service: ${calc.pest.name}
• Property: ${calc.property.name} (~${calc.property.sqftEstimate} sq ft)
• Severity: ${calc.severity.level}
• Locality: ${localityName}, Visakhapatnam
• Estimated Price: ₹${calc.minPrice.toLocaleString("en-IN")} – ₹${calc.maxPrice.toLocaleString("en-IN")}
• Chemical: ${calc.pest.chemicalFormula}
• Warranty: ${calc.warrantyPeriod}

Please reserve an inspection slot for me today.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

