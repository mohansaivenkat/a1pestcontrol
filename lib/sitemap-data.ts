export interface VizagLocality {
  slug: string;
  name: string;
  zone: "North Corridor" | "Central Core" | "South Industrial" | "Beach Road Coastal";
  postalCode: string;
  eta: string;
  activeTechs: number;
  landmarks: string[];
  pestVulnerabilities: string;
  coastalRisk: "Severe" | "High" | "Moderate";
  addressDepot: string;
}

export const VIZAG_LOCALITIES: Record<string, VizagLocality> = {
  "mvp-colony": {
    slug: "mvp-colony",
    name: "MVP Colony",
    zone: "Central Core",
    postalCode: "530017",
    eta: "30-40 min",
    activeTechs: 3,
    landmarks: ["Sector 1 to 12", "AS Raja Grounds", "Ushodaya Junction", "Samata College"],
    pestVulnerabilities: "High coastal moisture from Lawson's Bay causes accelerated dampwood termite colonies in teak furniture and subterranean nests in older bungalows.",
    coastalRisk: "Severe",
    addressDepot: "Zonal Unit: Sector 6, MVP Double Road, Visakhapatnam 530017",
  },
  "gajuwaka": {
    slug: "gajuwaka",
    name: "Gajuwaka",
    zone: "South Industrial",
    postalCode: "530026",
    eta: "45-60 min",
    activeTechs: 2,
    landmarks: ["Old Gajuwaka", "New Gajuwaka", "Auto Nagar", "BHPV", "Steel Plant Township"],
    pestVulnerabilities: "Industrial warehouses and dense residential commercial belts suffer severe American cockroach infestations in municipal drainage lines and Norway rat burrowing near godowns.",
    coastalRisk: "Moderate",
    addressDepot: "South Industrial Depot: Auto Nagar Main Gate, Gajuwaka, Visakhapatnam 530026",
  },
  "madhurawada": {
    slug: "madhurawada",
    name: "Madhurawada",
    zone: "North Corridor",
    postalCode: "530048",
    eta: "45-55 min",
    activeTechs: 2,
    landmarks: ["IT SEZ Hill 2 & 3", "Cricket Stadium", "Mithilapuri VUDA Colony", "Marikavalasa"],
    pestVulnerabilities: "Rapid high-rise residential construction creates severe pre-slab termite entry points; proximity to hills causes seasonal wood borer and mosquito surges during the Bay of Bengal monsoon.",
    coastalRisk: "High",
    addressDepot: "North Tech Depot: IT SEZ Road, Near ACA-VDCA Stadium, Madhurawada 530048",
  },
  "seethammadhara": {
    slug: "seethammadhara",
    name: "Seethammadhara",
    zone: "Central Core",
    postalCode: "530013",
    eta: "25-35 min",
    activeTechs: 3,
    landmarks: ["North Extension", "HB Colony", "BSNL Office", "Gurudwara Junction"],
    pestVulnerabilities: "Mature trees and multi-story apartment basements create chronic mosquito breeding pockets and German cockroach colonies inside modular kitchens.",
    coastalRisk: "Moderate",
    addressDepot: "Central Depot: 2nd Lane, North Extension, Seethammadhara, Visakhapatnam 530013",
  },
  "maddilapalem": {
    slug: "maddilapalem",
    name: "Maddilapalem",
    zone: "Central Core",
    postalCode: "530013",
    eta: "20-30 min",
    activeTechs: 4,
    landmarks: ["Andhra University Campus", "CMR Central Mall", "RTC Bus Depot", "Pithapuram Colony"],
    pestVulnerabilities: "High student hostel density and food retail corridors present acute bed bug outbreaks requiring 2-stage thermal eradication and German cockroach baiting.",
    coastalRisk: "Moderate",
    addressDepot: "AU Hub: Pithapuram Colony Road, Maddilapalem, Visakhapatnam 530013",
  },
  "dwaraka-nagar": {
    slug: "dwaraka-nagar",
    name: "Dwaraka Nagar & Srinagar",
    zone: "Central Core",
    postalCode: "530016",
    eta: "15-25 min",
    activeTechs: 5,
    landmarks: ["RTC Complex", "Srinagar 4th Lane", "Diamond Park", "Sankara Matam Road"],
    pestVulnerabilities: "Commercial food plazas and retail complexes require strict FSSAI-compliant odorless Indoxacarb gel baiting and ultrasonic rat exclusion barriers.",
    coastalRisk: "Moderate",
    addressDepot: "Headquarters: Flat 302, Sai Teja Enclave, 4th Lane, Dwaraka Nagar / Srinagar, Visakhapatnam 530016",
  },
};

export const LOCALITY_SLUGS = Object.keys(VIZAG_LOCALITIES);

