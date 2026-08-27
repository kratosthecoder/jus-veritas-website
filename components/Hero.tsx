import Link from "next/link";
import { firm, hero } from "@/lib/data/homepage";

export default function Hero() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg text-text-muted">{hero.subheadline}</p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-btn bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark sm:w-auto"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-btn border border-border bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:justify-center sm:gap-8">
            <p>
              {firm.addressLine1}, {firm.addressLine2}
            </p>
            <p>
              <a href={`tel:+91${firm.phone}`} className="hover:text-accent">
                {firm.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
