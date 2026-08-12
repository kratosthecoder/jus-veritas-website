// Central copy store for the homepage. Edit text here without touching layout/component code.

export const firm = {
  name: "Jus Veritas Associates LLP",
  shortName: "Jus Veritas Associates",
  addressLine1: "South Extension-I",
  addressLine2: "New Delhi, 110049",
  city: "New Delhi",
  phone: "7703818373",
  phoneDisplay: "+91 77038 18373",
  email: "legal@jusveritas.in",
  established: "2003", // [CONFIRM]
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
    { days: "Saturday", time: "8:00 AM – 8:00 PM" },
    { days: "Sunday", time: "By prior appointment" },
  ],
};

export const nav = {
  practiceAreas: { label: "Practice Areas", href: "/practice-areas" },
  services: { label: "Services", href: "/services" },
  knowledge: { label: "Knowledge", href: "/knowledge" },
  about: { label: "About", href: "/about" },
  contact: { label: "Contact", href: "/contact" },
};

export type PracticeArea = {
  slug: string;
  name: string;
  description: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "civil-litigation",
    name: "Civil Litigation",
    description:
      "Representation in civil suits before District Courts, High Courts and appellate forums.",
  },
  {
    slug: "criminal-law",
    name: "Criminal Law",
    description:
      "Defence and complainant representation in criminal proceedings, including bail and trial matters.",
  },
  {
    slug: "matrimonial-family-law",
    name: "Matrimonial & Family Law",
    description:
      "Matters relating to divorce, maintenance, custody and family settlements.",
  },
  {
    slug: "commercial-disputes",
    name: "Commercial Disputes",
    description:
      "Contractual and business disputes before civil courts and commercial courts.",
  },
  {
    slug: "arbitration",
    name: "Arbitration",
    description:
      "Representation in domestic arbitration proceedings under the Arbitration and Conciliation Act.",
  },
  {
    slug: "consumer-cases",
    name: "Consumer Cases",
    description:
      "Complaints and representation before District, State and National Consumer Commissions.",
  },
  {
    slug: "constitutional-matters",
    name: "Constitutional Matters",
    description:
      "Writ petitions and constitutional remedies before the High Court and Supreme Court.",
  },
  {
    slug: "intellectual-property",
    name: "Intellectual Property",
    description:
      "Advisory and enforcement matters relating to trademarks, copyright and related rights.",
  },
  {
    slug: "real-estate-property-law",
    name: "Real Estate & Property Law",
    description:
      "Title matters, property disputes and documentation relating to immovable property.",
  },
];

export type ComplianceService = {
  slug: string;
  name: string;
  description: string;
  priceFrom: string; // rupee figure, marked [CONFIRM] where a real figure is needed
};

export const complianceServices: ComplianceService[] = [
  {
    slug: "gst-registration",
    name: "GST Registration",
    description: "New GST registration for businesses and professionals.",
    priceFrom: "1,999", // [CONFIRM]
  },
  {
    slug: "gst-return-filing",
    name: "GST Return Filing",
    description: "Monthly and quarterly GST return filing and reconciliation.",
    priceFrom: "999", // [CONFIRM]
  },
  {
    slug: "income-tax-return-filing",
    name: "Income Tax Return Filing",
    description: "ITR preparation and filing for individuals and businesses.",
    priceFrom: "1,499", // [CONFIRM]
  },
  {
    slug: "company-registration",
    name: "Company Registration",
    description: "Private limited company incorporation, start to finish.",
    priceFrom: "6,999", // [CONFIRM]
  },
  {
    slug: "llp-registration",
    name: "LLP Registration",
    description: "Limited Liability Partnership formation and documentation.",
    priceFrom: "5,999", // [CONFIRM]
  },
  {
    slug: "trademark-registration",
    name: "Trademark Registration",
    description: "Trademark search, application filing and prosecution support.",
    priceFrom: "4,999", // [CONFIRM]
  },
  {
    slug: "roc-annual-compliance",
    name: "ROC Annual Compliance",
    description: "Annual filings and statutory compliance for companies and LLPs.",
    priceFrom: "3,999", // [CONFIRM]
  },
  {
    slug: "tds-return-filing",
    name: "TDS Return Filing",
    description: "Quarterly TDS return preparation and filing.",
    priceFrom: "1,499", // [CONFIRM]
  },
];

export const credentials = [
  `Established practice since ${firm.established}`,
  firm.name,
  `${firm.addressLine1}, ${firm.city}`,
  "Advocates enrolled with the Bar Council of Delhi",
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
};

export const articles: Article[] = [
  {
    slug: "gst-return-filing-deadlines",
    title: "Understanding GST Return Filing Deadlines for FY 2025-26",
    category: "Compliance",
    date: "2026-07-14",
    excerpt:
      "A summary of monthly and quarterly GST filing timelines and the penalties that apply for late filing.",
  },
  {
    slug: "maintenance-under-hindu-marriage-act",
    title: "Maintenance Provisions Under the Hindu Marriage Act: An Overview",
    category: "Matrimonial & Family Law",
    date: "2026-06-30",
    excerpt:
      "A general overview of interim and permanent maintenance provisions available to parties in matrimonial proceedings.",
  },
  {
    slug: "llp-vs-private-limited",
    title: "LLP or Private Limited Company: Points to Consider",
    category: "Compliance",
    date: "2026-06-10",
    excerpt:
      "A comparison of registration requirements, compliance burden and liability structure for new businesses.",
  },
];

export const enquiryInterests = [
  "Civil Litigation",
  "Criminal Law",
  "Matrimonial & Family Law",
  "Commercial Disputes",
  "Arbitration",
  "Consumer Cases",
  "Constitutional Matters",
  "Intellectual Property",
  "Real Estate & Property Law",
  "GST Registration",
  "GST Return Filing",
  "Income Tax Return Filing",
  "Company Registration",
  "LLP Registration",
  "Trademark Registration",
  "ROC Annual Compliance",
  "TDS Return Filing",
  "Other",
];

export const consentText =
  "I consent to Jus Veritas Associates LLP collecting my name, phone number and email address for the purpose of responding to this enquiry. I have read the Privacy Policy and understand I may withdraw consent at any time.";

export const footerLinks = {
  practiceAreas: practiceAreas.slice(0, 6).map((p) => ({
    label: p.name,
    href: `/practice-areas/${p.slug}`,
  })),
  services: complianceServices.slice(0, 6).map((s) => ({
    label: s.name,
    href: `/services/${s.slug}`,
  })),
  firm: [
    { label: "About", href: "/about" },
    { label: "Knowledge Centre", href: "/knowledge" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};
