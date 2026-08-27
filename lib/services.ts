// Single source of truth for the site's service taxonomy.
// Drives: header mega-menu, mobile accordion, homepage category cards,
// and the homepage industries strip. Do not duplicate this list elsewhere —
// import from here.

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export type MenuGroupItem = {
  label: string;
  slug: string;
  href: string;
};

export type MenuCategory = {
  label: string;
  slug: string;
  href: string;
  description: string;
  groups: MenuGroupItem[];
};

function buildCategory(label: string, description: string, groupLabels: string[]): MenuCategory {
  const categorySlug = slugify(label);
  return {
    label,
    slug: categorySlug,
    href: `/${categorySlug}`,
    description,
    groups: groupLabels.map((groupLabel) => {
      const groupSlug = slugify(groupLabel);
      return {
        label: groupLabel,
        slug: groupSlug,
        href: `/${categorySlug}/${groupSlug}`,
      };
    }),
  };
}

export const menuCategories: MenuCategory[] = [
  buildCategory(
    "Registrations",
    "Company, business entity and statutory registrations, start to finish.",
    [
      "Company Formation",
      "Other Business Entities",
      "Foreign Company Setup",
      "Tax & Statutory Registrations",
      "Intellectual Property",
      "NGO & Trust Registrations",
      "Startup & Growth",
      "Export Registrations",
    ]
  ),
  buildCategory(
    "Compliance",
    "Ongoing statutory and regulatory compliance for registered businesses.",
    [
      "Annual ROC Filings",
      "Post-Incorporation Compliance",
      "Company Structure Changes",
      "Closure & Dormancy",
      "Payroll & Labour Compliance",
      "FEMA & Foreign Investment",
      "Audit Support",
    ]
  ),
  buildCategory(
    "Licensing",
    "Sector-specific licenses and regulatory approvals.",
    [
      "Basic Business Licenses",
      "Food & Restaurant",
      "Advertising & Signage",
      "Safety & Building",
      "Environment & Waste",
      "Product & Quality",
      "Healthcare & Pharma",
      "Labour & Workplace",
      "Specialised",
    ]
  ),
  buildCategory(
    "GST",
    "GST registration, filing and advisory services.",
    [
      "Registration",
      "Return Filing",
      "Input Tax Credit & Reconciliation",
      "E-Invoicing & E-Way Bill",
      "Refunds & Exports",
      "Notices & Litigation",
      "Advisory",
    ]
  ),
  buildCategory(
    "Income Tax",
    "Income tax filing, payments and advisory for individuals and businesses.",
    ["Return Filing", "TDS & TCS", "Tax Payments & Computation", "Notices & Assessment", "Advisory"]
  ),
  buildCategory(
    "Industries",
    "Compliance and registration support tailored to your sector.",
    [
      "Food & Restaurant",
      "Manufacturing & Factory",
      "Import & Export",
      "E-commerce & Online Sellers",
      "Healthcare & Clinics",
      "Construction & Real Estate",
      "NGO & Trust",
      "IT & Software Services",
      "Retail & Trading",
      "Education & Coaching",
      "Beauty, Salon & Wellness",
      "Logistics & Transport",
    ]
  ),
];
