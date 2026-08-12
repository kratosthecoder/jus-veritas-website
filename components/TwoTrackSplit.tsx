import Link from "next/link";
import { practiceAreas, complianceServices } from "@/lib/data/homepage";

export default function TwoTrackSplit() {
  return (
    <section aria-labelledby="two-track-heading" className="bg-white">
      <h2 id="two-track-heading" className="sr-only">
        Choose legal representation or compliance services
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Legal Representation */}
        <div className="bg-navy px-4 py-14 text-parchment sm:px-6 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-lg">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-light">
              Litigation &amp; Advisory
            </span>
            <h3 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
              Legal Representation
            </h3>
            <p className="mt-3 text-sm text-parchment/80">
              Representation and advisory work across the following areas of
              practice.
            </p>
            <ul className="mt-8 space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="flex items-center justify-between border-b border-parchment/15 py-2 text-sm text-parchment/90 hover:text-gold-light"
                  >
                    <span>{area.name}</span>
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/practice-areas"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-light hover:text-parchment"
            >
              View all practice areas
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Compliance & Registration */}
        <div className="bg-[#FFF8EC] px-4 py-14 sm:px-6 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-lg">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Filing &amp; Registration
            </span>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-navy sm:text-3xl">
              Compliance &amp; Registration
            </h3>
            <p className="mt-3 text-sm text-charcoal/70">
              Fast, transparent filing services for individuals and
              businesses.
            </p>
            <ul className="mt-8 space-y-3">
              {complianceServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between border-b border-gold/20 py-2 text-sm text-charcoal hover:text-gold"
                  >
                    <span>{service.name}</span>
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold-light"
            >
              Explore compliance services
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor">
      <path d="M4 10h12M11 5l5 5-5 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
