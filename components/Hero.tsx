import Link from "next/link";
import { firm } from "@/lib/data/homepage";

export default function Hero() {
  return (
    <section className="border-b border-navy/10 bg-parchment">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
            {firm.name} — Advocates and Compliance Practitioners in{" "}
            {firm.city}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal/80">
            A South Extension-I based practice offering court representation
            across civil, criminal and commercial matters, alongside GST,
            income tax and company registration services for individuals and
            businesses.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/practice-areas"
              className="inline-flex items-center justify-center rounded-sm border border-navy bg-navy px-6 py-3 text-sm font-medium text-parchment transition-colors hover:bg-navy-dark"
            >
              Practice Areas
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-sm border border-gold bg-transparent px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold/10"
            >
              Compliance Services
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-navy/10 pt-6 text-sm text-charcoal/70 sm:flex-row sm:gap-8">
            <p>
              {firm.addressLine1}, {firm.addressLine2}
            </p>
            <p>
              <a href={`tel:+91${firm.phone}`} className="hover:text-navy">
                {firm.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
