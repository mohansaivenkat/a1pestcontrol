import React from "react";

export type SchematicType =
  | "termites"
  | "cockroaches"
  | "rodents"
  | "mosquitoes"
  | "bedbugs"
  | "woodborers"
  | "annual-amc";

interface TechnicalSchematicProps {
  type: SchematicType;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const TechnicalSchematic: React.FC<TechnicalSchematicProps> = ({
  type,
  className = "",
  width = "100%",
  height = "100%",
}) => {
  switch (type) {
    case "termites":
      // 6mm Drill-Fill-Seal wall cross-section
      return (
        <svg
          viewBox="0 0 240 140"
          className={className}
          style={{ width, height }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="6mm Drill-Fill-Seal Subterranean Wall Injection Schematic"
        >
          {/* Wall Structure */}
          <rect x="20" y="15" width="200" height="90" rx="2" stroke="#5C3D2E" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M20 60 H220" stroke="#DED6C6" strokeWidth="1" />
          <path d="M20 90 H220" stroke="#5C3D2E" strokeWidth="1.5" />
          
          {/* Baseboard & Concrete Slab */}
          <rect x="15" y="90" width="210" height="35" fill="#F2ECE1" stroke="#261811" strokeWidth="1.5" />
          <line x1="20" y1="125" x2="220" y2="125" stroke="#261811" strokeWidth="2" />
          
          {/* 6mm Drill Hole */}
          <line x1="120" y1="50" x2="120" y2="115" stroke="#B91C1C" strokeWidth="3" strokeLinecap="round" />
          <circle cx="120" cy="50" r="4.5" fill="#FAF7F2" stroke="#B91C1C" strokeWidth="1.5" />
          
          {/* Chemical Dispersion Cone */}
          <path
            d="M90 120 C 110 105, 130 105, 150 120 Z"
            fill="#1B4332"
            fillOpacity="0.25"
            stroke="#2D6A4F"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
          <path
            d="M75 125 C 105 100, 135 100, 165 125 Z"
            fill="#1B4332"
            fillOpacity="0.12"
          />

          {/* Technical Monoline Annotations */}
          <line x1="120" y1="35" x2="155" y2="35" stroke="#5C3D2E" strokeWidth="1" />
          <line x1="120" y1="50" x2="120" y2="35" stroke="#5C3D2E" strokeWidth="1" />
          <text x="160" y="38" fill="#1C130E" fontSize="8" fontFamily="monospace" fontWeight="600">
            6mm DRILL PORT
          </text>

          <line x1="135" y1="112" x2="165" y2="105" stroke="#2D6A4F" strokeWidth="1" />
          <text x="170" y="108" fill="#1B4332" fontSize="7.5" fontFamily="monospace" fontWeight="600">
            IMIDACLOPRID BARRIER
          </text>

          {/* 1 Foot Interval Indicators */}
          <line x1="50" y1="100" x2="50" y2="115" stroke="#8C624C" strokeWidth="1.5" />
          <line x1="190" y1="100" x2="190" y2="115" stroke="#8C624C" strokeWidth="1.5" />
          <path d="M50 108 H120" stroke="#8C624C" strokeWidth="0.8" strokeDasharray="1 2" />
          <text x="75" y="105" fill="#5C3D2E" fontSize="7" fontFamily="monospace">
            1-FT INTERVAL
          </text>
        </svg>
      );

    case "cockroaches":
      // Kitchen hinge bait & domino effect schematic
      return (
        <svg
          viewBox="0 0 240 140"
          className={className}
          style={{ width, height }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Kitchen Cabinet Hinge Indoxacarb Pheromone Bait Schematic"
        >
          {/* Cabinet Hinge Plate */}
          <rect x="35" y="25" width="70" height="90" rx="3" stroke="#5C3D2E" strokeWidth="1.5" fill="#F2ECE1" />
          <circle cx="50" cy="40" r="3.5" fill="#261811" />
          <circle cx="50" cy="100" r="3.5" fill="#261811" />
          <rect x="75" y="35" width="20" height="70" stroke="#261811" strokeWidth="1.2" fill="#DED6C6" />

          {/* Micro Gel Droplet */}
          <circle cx="85" cy="70" r="5" fill="#2D6A4F" />
          <circle cx="85" cy="70" r="9" stroke="#1B4332" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="85" cy="70" r="14" stroke="#2D6A4F" strokeWidth="0.75" strokeOpacity="0.4" />

          {/* Domino Eradication Flow */}
          <path d="M99 70 C 130 70, 140 45, 175 45" stroke="#B91C1C" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="175,42 182,45 175,48" fill="#B91C1C" />

          <path d="M99 70 C 130 70, 140 95, 175 95" stroke="#B91C1C" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="175,92 182,95 175,98" fill="#B91C1C" />

          {/* Nest Vector Targets */}
          <rect x="185" y="35" width="40" height="20" rx="2" stroke="#261811" strokeWidth="1" fill="#FAF7F2" />
          <text x="189" y="48" fill="#1C130E" fontSize="7" fontFamily="monospace" fontWeight="600">
            NEST 01
          </text>

          <rect x="185" y="85" width="40" height="20" rx="2" stroke="#261811" strokeWidth="1" fill="#FAF7F2" />
          <text x="189" y="98" fill="#1C130E" fontSize="7" fontFamily="monospace" fontWeight="600">
            NEST 02
          </text>

          {/* Callouts */}
          <text x="35" y="18" fill="#1B4332" fontSize="7.5" fontFamily="monospace" fontWeight="600">
            0.05g INDOXACARB DROPLET
          </text>
          <text x="135" y="74" fill="#5C3D2E" fontSize="7" fontFamily="monospace">
            DOMINO EFFECT
          </text>
        </svg>
      );

    case "rodents":
      // Tamper-proof bait station schematic
      return (
        <svg
          viewBox="0 0 240 140"
          className={className}
          style={{ width, height }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Tamper-Proof Rodent Station Dual Chamber Schematic"
        >
          {/* Station Exterior Box */}
          <rect x="25" y="25" width="190" height="90" rx="4" stroke="#261811" strokeWidth="2" fill="#FAF7F2" />
          
          {/* Internal Baffles & Runway */}
          <path d="M25 60 H75 V100" stroke="#5C3D2E" strokeWidth="1.5" />
          <path d="M215 60 H165 V100" stroke="#5C3D2E" strokeWidth="1.5" />
          <rect x="95" y="45" width="50" height="50" rx="2" stroke="#B91C1C" strokeWidth="1.5" fill="#FEE2E2" />

          {/* Rodent Entry Holes */}
          <circle cx="25" cy="80" r="10" stroke="#261811" strokeWidth="1.5" fill="#F2ECE1" />
          <circle cx="215" cy="80" r="10" stroke="#261811" strokeWidth="1.5" fill="#F2ECE1" />

          {/* Lockable Core & Key */}
          <circle cx="120" cy="70" r="5" stroke="#261811" strokeWidth="1.5" fill="#FAF7F2" />
          <line x1="120" y1="70" x2="120" y2="76" stroke="#261811" strokeWidth="2" />

          {/* Bromadiolone Rod Indicator */}
          <line x1="105" y1="65" x2="135" y2="65" stroke="#1B4332" strokeWidth="3" strokeLinecap="round" />
          
          {/* Annotations */}
          <text x="82" y="18" fill="#1C130E" fontSize="7.5" fontFamily="monospace" fontWeight="600">
            TAMPER-PROOF LOCK
          </text>
          <text x="30" y="125" fill="#5C3D2E" fontSize="7" fontFamily="monospace">
            SAFETY RUNWAY
          </text>
          <text x="155" y="125" fill="#1B4332" fontSize="7" fontFamily="monospace">
            SECURED BAIT CORE
          </text>
        </svg>
      );

    case "mosquitoes":
      // Cold ULV micro-droplet fogger schematic
      return (
        <svg
          viewBox="0 0 240 140"
          className={className}
          style={{ width, height }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Cold ULV Water-Based Nozzle Atomization Schematic"
        >
          {/* ULV High Velocity Nozzle */}
          <path d="M25 50 L75 58 L75 82 L25 90 Z" stroke="#261811" strokeWidth="1.5" fill="#F2ECE1" />
          <line x1="75" y1="70" x2="105" y2="70" stroke="#2D6A4F" strokeWidth="2.5" />
          <circle cx="105" cy="70" r="4" fill="#2D6A4F" />

          {/* Droplet Atomization Cloud (5-15 Microns) */}
          <circle cx="125" cy="60" r="3" fill="#1B4332" fillOpacity="0.8" />
          <circle cx="135" cy="80" r="2.5" fill="#1B4332" fillOpacity="0.7" />
          <circle cx="150" cy="50" r="2" fill="#2D6A4F" fillOpacity="0.8" />
          <circle cx="160" cy="72" r="3.5" fill="#1B4332" />
          <circle cx="175" cy="62" r="2.8" fill="#2D6A4F" />
          <circle cx="190" cy="85" r="2" fill="#1B4332" fillOpacity="0.6" />
          <circle cx="205" cy="55" r="2.5" fill="#2D6A4F" />
          <circle cx="215" cy="70" r="3" fill="#1B4332" />

          {/* Residual Wall Barrier Zone */}
          <line x1="225" y1="20" x2="225" y2="120" stroke="#5C3D2E" strokeWidth="3" />
          <rect x="220" y="20" width="5" height="100" fill="#2D6A4F" fillOpacity="0.3" />

          {/* Callouts */}
          <text x="25" y="38" fill="#1C130E" fontSize="7.5" fontFamily="monospace" fontWeight="600">
            ULV COLD GENERATOR
          </text>
          <text x="120" y="105" fill="#2D6A4F" fontSize="7.5" fontFamily="monospace" fontWeight="600">
            5–15µm AEROSOL CLOUD
          </text>
          <text x="145" y="125" fill="#5C3D2E" fontSize="7" fontFamily="monospace">
            6-WK SURFACE RESIDUAL
          </text>
        </svg>
      );

    case "bedbugs":
      // 180°F thermal steam mattress seam schematic
      return (
        <svg
          viewBox="0 0 240 140"
          className={className}
          style={{ width, height }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="180 Degree Fahrenheit Thermal Steam Seam Infiltration Schematic"
        >
          {/* Mattress Seam Layer */}
          <rect x="20" y="45" width="200" height="35" rx="3" stroke="#5C3D2E" strokeWidth="1.5" fill="#FAF7F2" />
          <line x1="20" y1="62" x2="220" y2="62" stroke="#DED6C6" strokeWidth="1" strokeDasharray="2 2" />

          {/* Steam Lance & Heat Wave */}
          <path d="M110 15 L120 40 L130 15 Z" fill="#B91C1C" stroke="#991B1B" strokeWidth="1.2" />
          <path
            d="M95 45 C 105 35, 115 55, 125 45 C 135 35, 145 55, 155 45"
            stroke="#B91C1C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Deep Thermal Penetration */}
          <path
            d="M85 80 C 120 115, 140 115, 175 80"
            fill="#B91C1C"
            fillOpacity="0.15"
            stroke="#B91C1C"
            strokeWidth="1"
            strokeDasharray="2 2"
          />

          {/* Day 14 Follow-up Marker */}
          <circle cx="195" cy="100" r="16" stroke="#2D6A4F" strokeWidth="1.5" fill="#EAF4EC" />
          <text x="183" y="103" fill="#1B4332" fontSize="7" fontFamily="monospace" fontWeight="700">
            DAY-14
          </text>

          {/* Annotations */}
          <text x="88" y="25" fill="#B91C1C" fontSize="7.5" fontFamily="monospace" fontWeight="700">
            180°F THERMAL JET
          </text>
          <text x="35" y="115" fill="#1C130E" fontSize="7" fontFamily="monospace">
            EGG MORTALITY (0-HR)
          </text>
          <text x="35" y="125" fill="#2D6A4F" fontSize="7" fontFamily="monospace">
            NYMPH INTERCEPTION
          </text>
        </svg>
      );

    case "woodborers":
      // Precision furniture syringe injection
      return (
        <svg
          viewBox="0 0 240 140"
          className={className}
          style={{ width, height }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Precision Timber Syringe Capillary Infusion Schematic"
        >
          {/* Wood Grain Block */}
          <rect x="25" y="30" width="190" height="80" rx="2" stroke="#5C3D2E" strokeWidth="2" fill="#FAF7F2" />
          <path d="M25 50 Q 120 45 215 50" stroke="#DED6C6" strokeWidth="1" />
          <path d="M25 70 Q 120 65 215 70" stroke="#DED6C6" strokeWidth="1" />
          <path d="M25 90 Q 120 85 215 90" stroke="#DED6C6" strokeWidth="1" />

          {/* Precision Micro Syringe */}
          <line x1="85" y1="12" x2="115" y2="48" stroke="#1C130E" strokeWidth="2" />
          <rect x="75" y="10" width="15" height="25" stroke="#1C130E" strokeWidth="1.2" fill="#F2ECE1" />
          <line x1="115" y1="48" x2="135" y2="72" stroke="#2D6A4F" strokeWidth="2" />

          {/* Chemical Capillary Infiltration */}
          <circle cx="135" cy="72" r="14" fill="#2D6A4F" fillOpacity="0.2" stroke="#1B4332" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="135" cy="72" r="3" fill="#1B4332" />

          {/* Powder Exit Hole */}
          <circle cx="165" cy="50" r="2.5" fill="#5C3D2E" />
          <line x1="165" y1="50" x2="185" y2="35" stroke="#5C3D2E" strokeWidth="1" />
          <text x="190" y="38" fill="#5C3D2E" fontSize="7" fontFamily="monospace">
            POWDER EXIT
          </text>

          {/* Annotations */}
          <text x="35" y="22" fill="#1B4332" fontSize="7.5" fontFamily="monospace" fontWeight="600">
            SYRINGE INFUSION
          </text>
          <text x="75" y="125" fill="#1C130E" fontSize="7" fontFamily="monospace">
            CAPILLARY TIMBER ABSORPTION
          </text>
        </svg>
      );

    case "annual-amc":
    default:
      // Architectural boundary shield
      return (
        <svg
          viewBox="0 0 240 140"
          className={className}
          style={{ width, height }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="360 Degree Whole Perimeter Shield Schematic"
        >
          {/* Architectural Boundary Grid */}
          <rect x="25" y="20" width="190" height="100" rx="4" stroke="#5C3D2E" strokeWidth="1.5" strokeDasharray="3 3" />
          <rect x="45" y="35" width="150" height="70" rx="3" stroke="#261811" strokeWidth="2" fill="#FAF7F2" />

          {/* 4 Quarterly Protective Nodes */}
          <circle cx="45" cy="35" r="7" fill="#1B4332" stroke="#2D6A4F" strokeWidth="2" />
          <circle cx="195" cy="35" r="7" fill="#1B4332" stroke="#2D6A4F" strokeWidth="2" />
          <circle cx="195" cy="105" r="7" fill="#1B4332" stroke="#2D6A4F" strokeWidth="2" />
          <circle cx="45" cy="105" r="7" fill="#1B4332" stroke="#2D6A4F" strokeWidth="2" />

          {/* Central Trust Core */}
          <circle cx="120" cy="70" r="18" fill="#EAF4EC" stroke="#2D6A4F" strokeWidth="1.5" />
          <path d="M113 70 L118 75 L128 65" stroke="#1B4332" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Annotations */}
          <text x="72" y="15" fill="#1B4332" fontSize="7.5" fontFamily="monospace" fontWeight="600">
            4 QUARTERLY DEFENSE VISITS
          </text>
          <text x="68" y="128" fill="#5C3D2E" fontSize="7" fontFamily="monospace">
            365-DAY UNLIMITED GUARANTEE
          </text>
        </svg>
      );
  }
};

