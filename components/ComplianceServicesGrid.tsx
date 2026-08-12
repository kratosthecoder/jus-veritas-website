import Link from "next/link";
import { complianceServices } from "@/lib/data/homepage";

export default function ComplianceServicesGrid() {
  return (
    <section aria-labelledby="compliance-services-heading" className="bg-[#FFFBF3]">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 id="compliance-services-heading" className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
            Compliance &amp; Registration Services
          </h2>
          <p className="mt-3 text-charcoal/70">
            Filing and registration services for individuals and businesses,
            handled end to end.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {complianceServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-md border border-gold/20 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-serif text-lg font-semibold text-navy group-hover:text-gold">
                {service.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-charcoal/70">
                {service.description}
              </p>
              <p className="mt-4 text-sm font-medium text-gold">
                Starting from &#8377;{service.priceFrom}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
