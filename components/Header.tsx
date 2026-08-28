"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { firm, hero } from "@/lib/data/homepage";
import { menuCategories } from "@/lib/services";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Jus Veritas Associates LLP logo"
            width={176}
            height={176}
            className="h-9 w-9 lg:h-11 lg:w-11"
            priority
          />
          <span className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            {firm.shortName}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {menuCategories.map((category) => (
            <div
              key={category.slug}
              className="relative"
              onMouseEnter={() => setOpenCategory(category.slug)}
              onMouseLeave={() => setOpenCategory(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-btn px-3 py-2 text-sm font-medium text-text hover:text-ink"
                aria-expanded={openCategory === category.slug}
                aria-haspopup="true"
                onClick={() =>
                  setOpenCategory(openCategory === category.slug ? null : category.slug)
                }
              >
                {category.label}
                <ChevronDown />
              </button>

              {openCategory === category.slug && (
                <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 rounded-card border border-border bg-surface p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {category.label}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">{category.description}</p>
                  <div className="mt-4 grid grid-cols-3 gap-x-6 gap-y-3">
                    {category.groups.map((group) => (
                      <Link
                        key={group.slug}
                        href={group.href}
                        className="text-sm text-text hover:text-ink"
                      >
                        {group.label}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={category.href}
                    className="mt-5 inline-block border-t border-border pt-4 text-sm font-medium text-ink hover:underline"
                  >
                    View all {category.label.toLowerCase()} services
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a href={`tel:+91${firm.phone}`} className="text-sm font-medium text-ink hover:text-ink-soft">
            {firm.phoneDisplay}
          </a>
          <Link
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-btn bg-gold px-5 py-2.5 text-sm font-medium text-btn-primary-text transition hover:brightness-95"
          >
            {hero.primaryCta.label}
          </Link>
        </div>

        <button
          type="button"
          className="flex items-center justify-center p-2 text-ink xl:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-surface xl:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {menuCategories.map((category) => (
              <MobileSection key={category.slug} title={category.label} href={category.href}>
                {category.groups.map((group) => (
                  <Link
                    key={group.slug}
                    href={group.href}
                    className="block py-1.5 text-sm text-text-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {group.label}
                  </Link>
                ))}
              </MobileSection>
            ))}
            <a
              href={`tel:+91${firm.phone}`}
              className="border-t border-border py-3 text-sm font-medium text-ink"
            >
              {firm.phoneDisplay}
            </a>
            <Link
              href={hero.primaryCta.href}
              className="mt-2 inline-flex items-center justify-center rounded-btn bg-gold px-5 py-2.5 text-sm font-medium text-btn-primary-text"
              onClick={() => setMobileOpen(false)}
            >
              {hero.primaryCta.label}
            </Link>
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
    <div className="border-t border-border first:border-t-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-sm font-medium text-text"
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
      className={`h-4 w-4 shrink-0 transition-transform ${rotated ? "rotate-180" : ""}`}
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
