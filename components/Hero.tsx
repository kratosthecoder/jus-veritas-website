import Link from "next/link";
import { firm, hero } from "@/lib/data/homepage";

export default function Hero() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-5xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg text-dark-body">{hero.subheadline}</p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-btn bg-gold px-6 py-3 text-sm font-medium text-btn-primary-text transition hover:brightness-95 sm:w-auto"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-btn border border-white bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink sm:w-auto"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2 border-t border-ink-soft pt-6 text-sm text-dark-body sm:flex-row sm:justify-center sm:gap-8">
            <p>
              {firm.addressLine1}, {firm.addressLine2}
            </p>
            <p>
              <a href={`tel:+91${firm.phone}`} className="hover:text-gold-bright">
                {firm.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
