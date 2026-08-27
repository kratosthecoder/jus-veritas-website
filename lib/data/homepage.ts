// Central copy store for the homepage, header and footer.
// Menu/category data lives in lib/services.ts — this file holds firm details,
// page copy and the smaller content blocks (FAQ, how-it-works, trust points).

import { menuCategories } from "@/lib/services";

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
  contact: { label: "Contact", href: "/contact" },
};

export const hero = {
  headline: "Registrations, Compliance and Tax Filing, Handled End to End",
  subheadline:
    "Company registration, GST, income tax and licensing services for individuals and businesses, managed by one team from start to finish.",
  primaryCta: { label: "Get Started", href: "/get-started" },
  secondaryCta: { label: "Talk to an Expert", href: "/contact" },
};

export const whyChooseUs = [
  {
    title: "One Point of Contact",
    description: "A single team follows your filing from submission through to completion.",
  },
  {
    title: "Transparent Pricing",
    description: "Package pricing shown upfront, with no hidden charges added later.",
  },
  {
    title: "Filing Accuracy",
    description: "Documentation checked against current statutory requirements before submission.",
  },
  {
    title: "Timely Reminders",
    description: "Advance reminders for recurring filings and renewal deadlines.",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Share Your Requirement",
    description: "Tell us what you need — a registration, a filing or a licence.",
  },
  {
    step: 2,
    title: "Document Collection",
    description: "We share a checklist and collect the documents needed for your filing.",
  },
  {
    step: 3,
    title: "Preparation & Filing",
    description: "Your application or return is prepared, reviewed and filed with the relevant authority.",
  },
  {
    step: 4,
    title: "Confirmation & Records",
    description: "You receive the filed acknowledgement and copies of all records for your files.",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "How long does company registration take?",
    answer:
      "Timelines depend on document readiness and processing times at the Ministry of Corporate Affairs, typically ranging from a few days to a few weeks.",
  },
  {
    question: "Do I need a registered office to register a company?",
    answer:
      "Yes, a registered office address in India is required at the time of incorporation and for ongoing compliance.",
  },
  {
    question: "How often do I need to file GST returns?",
    answer:
      "Filing frequency depends on the GST scheme you are registered under — monthly, quarterly or annual filings may apply.",
  },
  {
    question: "What happens if I miss a compliance deadline?",
    answer:
      "Late filings can attract penalties and interest depending on the filing type. We send advance reminders to help you avoid this.",
  },
  {
    question: "Can you handle compliance for a company already registered elsewhere?",
    answer:
      "Yes, we take on ongoing compliance, filings and licensing for existing companies and LLPs.",
  },
  {
    question: "Is pricing fixed or does it vary by case?",
    answer:
      "We quote package pricing upfront for standard filings; matters requiring additional work are quoted separately before we proceed.",
  },
];

export const enquiryInterests = [
  ...menuCategories.map((category) => category.label),
  "Other",
];

export const consentText =
  "I consent to Jus Veritas Associates LLP collecting my name, phone number and email address for the purpose of responding to this enquiry. I have read the Privacy Policy and understand I may withdraw consent at any time.";

export const footerLinks = {
  explore: menuCategories.map((category) => ({
    label: category.label,
    href: category.href,
  })),
  firm: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};
