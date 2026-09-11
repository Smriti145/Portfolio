export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  flow: string[];
  features: string[];
  stack: string[];
  why: string;
  github?: string;
  note?: string;
  accent: string;
};
export const projects: Project[] = [
  {
    id: "tracechain",
    number: "01",
    name: "TraceChain",
    category: "Product traceability / Full-stack system",
    tagline: "Every product has a story. Make it traceable.",
    description:
      "Connecting product identity to its supply-chain journey, from a manufacturer’s portal to a scan in your hand.",
    problem:
      "Product identity and supply-chain records are often disconnected. A label alone cannot communicate a product’s journey.",
    solution:
      "A manufacturer portal creates product records and unique QR codes. An Express API connects PostgreSQL data to a mobile scanner and a public provenance report.",
    flow: [
      "Register product",
      "Generate QR",
      "Scan & verify",
      "Explore journey",
    ],
    features: [
      "Manufacturer portal & QR generation",
      "JWT authentication & role-based API access",
      "React Native camera verification",
      "Public provenance report & journey timeline",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "React Native",
    ],
    why: "Makes provenance accessible at the point where people need it: a product scan.",
    github: "https://github.com/Smriti145/TraceChain",
    accent: "amber",
  },
  {
    id: "farmio",
    number: "02",
    name: "Farmio",
    category: "E-commerce / Marketplace web project",
    tagline: "A shorter path from farm to table.",
    description:
      "A farm-to-consumer marketplace experience connecting farmers directly with the people buying their produce.",
    problem:
      "Farmers and customers need a direct, understandable way to discover produce and move through an order.",
    solution:
      "Separate farmer and customer interfaces organize product listings, registration, ordering, checkout, and order-summary screens.",
    flow: ["Choose a role", "Browse produce", "Review order", "Checkout"],
    features: [
      "Farmer & customer interface flows",
      "Product catalog and listing screens",
      "Ordering and checkout interfaces",
      "Responsive marketplace presentation",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    why: "Brings the two sides of a marketplace into one clear shopping journey.",
    github: "https://github.com/Smriti145/Farmio",
    note: "The public repository demonstrates the web interface; login is simulated. Backend authentication and MySQL are described in the resume but are not present in the reviewed public source.",
    accent: "sage",
  },
  {
    id: "anvesha",
    number: "03",
    name: "Anvesha",
    category: "Smart India Hackathon 2025 / Mobile",
    tagline: "From the field. With a verifiable origin.",
    description:
      "An Ayurvedic botanical traceability project built for Smart India Hackathon 2025, with mobile collection and provenance workflows.",
    problem:
      "Medicinal plant provenance depends on reliable collection records, including where a resource was collected.",
    solution:
      "The resume documents a React Native application with offline-first data collection, GPS geo-tagging, image capture, and QR-based tracking.",
    flow: [
      "Collect in field",
      "Record location",
      "Capture evidence",
      "Verify provenance",
    ],
    features: [
      "Offline-first data collection",
      "GPS geo-tagging & image capture",
      "QR-based resource tracking",
      "Provenance verification workflows",
    ],
    stack: ["React Native", "Firebase (basic)", "QR Scanner"],
    why: "Connects field collection with traceability to support transparent botanical sourcing.",
    github: "https://github.com/Herb-Supply-Chain/app-anvesha",
    note: "Features are documented in the resume. The linked public repository currently contains a React Native starter, rather than the complete hackathon implementation.",
    accent: "sage",
  },
  {
    id: "keypad",
    number: "04",
    name: "Smart Keypad Door Lock",
    category: "Embedded systems / Hardware",
    tagline: "Small hardware. Thoughtful control.",
    description:
      "A password-protected Arduino door lock with persistent credentials, automatic locking, and buzzer alerts.",
    problem:
      "A small access-control system needs to remember its credentials after power is removed and return to a locked state.",
    solution:
      "Embedded C coordinates keypad input and locking behavior, with EEPROM retaining the password between power cycles.",
    flow: ["Enter code", "Check credential", "Unlock", "Auto-lock"],
    features: [
      "Password-protected access",
      "EEPROM credential persistence",
      "Automatic locking",
      "Buzzer alerts",
    ],
    stack: ["Arduino", "Embedded C", "EEPROM"],
    why: "Explores how software state, persistent memory, and physical behavior work together.",
    accent: "cyan",
  },
];
