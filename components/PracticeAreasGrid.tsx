import Link from "next/link";
import { practiceAreas } from "@/lib/data/homepage";

export default function PracticeAreasGrid() {
  return (
    <section aria-labelledby="practice-areas-heading" className="bg-white">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 id="practice-areas-heading" className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
            Practice Areas
          </h2>
          <p className="mt-3 text-charcoal/70">
            Representation and advisory work across the following areas of
            law.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group flex flex-col rounded-md border border-navy/10 bg-parchment p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-serif text-lg font-semibold text-navy group-hover:text-navy-dark">
                {area.name}
              </h3>
              <p className="mt-2 text-sm text-charcoal/70">{area.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
