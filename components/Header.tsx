"use client";

import { useState } from "react";
import Link from "next/link";
import { firm, practiceAreas, complianceServices, nav } from "@/lib/data/homepage";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"practice" | "services" | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-parchment/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-xl font-semibold text-navy sm:text-2xl">
          {firm.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("practice")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-navy"
              aria-expanded={openDropdown === "practice"}
              aria-haspopup="true"
              onClick={() =>
                setOpenDropdown(openDropdown === "practice" ? null : "practice")
              }
            >
              {nav.practiceAreas.label}
              <ChevronDown />
            </button>
            {openDropdown === "practice" && (
              <div className="absolute left-0 top-full w-72 rounded-md border border-navy/10 bg-white py-2 shadow-md">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/practice-areas/${area.slug}`}
                    className="block px-4 py-2 text-sm text-charcoal hover:bg-parchment hover:text-navy"
                  >
                    {area.name}
                  </Link>
                ))}
                <Link
                  href={nav.practiceAreas.href}
                  className="mt-1 block border-t border-navy/10 px-4 pt-2 text-sm font-medium text-navy"
                >
                  View all practice areas
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-navy"
              aria-expanded={openDropdown === "services"}
              aria-haspopup="true"
              onClick={() =>
                setOpenDropdown(openDropdown === "services" ? null : "services")
              }
            >
              {nav.services.label}
              <ChevronDown />
            </button>
            {openDropdown === "services" && (
              <div className="absolute left-0 top-full w-72 rounded-md border border-navy/10 bg-white py-2 shadow-md">
                {complianceServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-sm text-charcoal hover:bg-parchment hover:text-navy"
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  href={nav.services.href}
                  className="mt-1 block border-t border-navy/10 px-4 pt-2 text-sm font-medium text-navy"
                >
                  View all services
                </Link>
              </div>
            )}
          </div>

          <Link href={nav.knowledge.href} className="text-sm font-medium text-charcoal hover:text-navy">
            {nav.knowledge.label}
          </Link>
          <Link href={nav.about.href} className="text-sm font-medium text-charcoal hover:text-navy">
            {nav.about.label}
          </Link>
          <Link href={nav.contact.href} className="text-sm font-medium text-charcoal hover:text-navy">
            {nav.contact.label}
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:+91${firm.phone}`}
            className="text-sm font-medium text-navy hover:text-gold"
          >
            {firm.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          className="flex items-center justify-center p-2 text-navy lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-navy/10 bg-parchment lg:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            <MobileSection title={nav.practiceAreas.label} href={nav.practiceAreas.href}>
              {practiceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  className="block py-1.5 text-sm text-charcoal/80"
                  onClick={() => setMobileOpen(false)}
                >
                  {area.name}
                </Link>
              ))}
            </MobileSection>
            <MobileSection title={nav.services.label} href={nav.services.href}>
              {complianceServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block py-1.5 text-sm text-charcoal/80"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </MobileSection>
            <Link
              href={nav.knowledge.href}
              className="border-t border-navy/10 py-3 text-sm font-medium text-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              {nav.knowledge.label}
            </Link>
            <Link
              href={nav.about.href}
              className="py-3 text-sm font-medium text-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              {nav.about.label}
            </Link>
            <Link
              href={nav.contact.href}
              className="py-3 text-sm font-medium text-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              {nav.contact.label}
            </Link>
            <a
              href={`tel:+91${firm.phone}`}
              className="mt-2 border-t border-navy/10 pt-3 text-sm font-medium text-navy"
            >
              {firm.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function MobileSection({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-navy/10 first:border-t-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-sm font-medium text-charcoal"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Link href={href} className="text-left" onClick={(e) => e.stopPropagation()}>
          {title}
        </Link>
        <ChevronDown rotated={open} />
      </button>
      {open && <div className="pb-2 pl-2">{children}</div>}
    </div>
  );
}

function ChevronDown({ rotated }: { rotated?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 transition-transform ${rotated ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
    >
      <path d="M5 7.5l5 5 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      {open ? (
        <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
      )}
    </svg>
  );
}
