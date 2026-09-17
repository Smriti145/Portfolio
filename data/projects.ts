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
  {
    id: "grocerycompare",
    number: "05",
    name: "GroceryCompare",
    category: "Grocery comparison / Mobile + API",
    tagline: "One basket. A clearer comparison.",
    description:
      "A React Native grocery app that compares complete baskets across sample Blinkit, Zepto, and Swiggy offers.",
    problem:
      "Comparing individual prices can hide missing products, different pack sizes, and stale offers. A useful comparison needs to account for the whole basket.",
    solution:
      "A typed mobile app connects to an Express API and PostgreSQL through Prisma. The comparison engine checks availability, offer freshness, location, and equivalent pack sizes before ranking eligible basket totals.",
    flow: [
      "Browse products",
      "Build a basket",
      "Check eligibility",
      "Compare totals",
    ],
    features: [
      "Paginated product search and persisted cart preferences",
      "Complete-basket comparison with pack-size and freshness checks",
      "Integer-paise pricing and delivery-time tie-breaking",
      "Shared TypeScript contracts and validated API requests",
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Zustand",
    ],
    why: "Makes the rules behind a price comparison explicit, so a cheaper total is only useful when the basket is actually comparable.",
    github: "https://github.com/Smriti145/GroceryCompare",
    note: "The repository uses sample offers. It does not fetch live retailer prices or transfer baskets to checkout. Totals exclude checkout fees and discounts.",
    accent: "cyan",
  },
  {
    id: "personal-helper",
    number: "06",
    name: "Personal Helper",
    category: "Saha / Native routine companion",
    tagline: "A little structure for everyday life.",
    description:
      "Saha is a native Android and iOS companion for configurable routines, daily checklists, and personal wellbeing tracking.",
    problem:
      "Everyday routines can span multiple schedules and categories. Keeping reminders, completion, and changing preferences in sync takes more than a simple to-do list.",
    solution:
      "React Native screens share routine and scheduling logic with an account API. Saved routines and account data persist through the API, while Notifee manages native reminder queues with completion, snooze, quiet-hour, and category preferences.",
    flow: [
      "Set preferences",
      "Build a routine",
      "Track the day",
      "Review the week",
    ],
    features: [
      "Account registration, login, and configurable onboarding",
      "Routine builder, daily checklist, and weekly insights",
      "Medication schedules, meals, hydration, movement, and sleep tracking",
      "Native reminders, data export, and account deletion",
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Notifee",
      "React Native Keychain",
      "Drizzle ORM",
    ],
    why: "Brings daily planning and personal tracking into one adaptable mobile experience, with explicit control over reminders and saved data.",
    github: "https://github.com/Smriti145/Personal-Helper",
    note: "Reminder delivery depends on device permissions and OS restrictions. Exact alarm delivery and indefinite background renewal are not guaranteed; cross-midnight snoozing remains an open audit item. Preview mode is unsaved.",
    accent: "sage",
  },
];
