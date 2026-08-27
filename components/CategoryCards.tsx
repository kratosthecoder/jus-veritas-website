import Link from "next/link";
import { menuCategories } from "@/lib/services";

export default function CategoryCards() {
  return (
    <section aria-labelledby="categories-heading" className="bg-surface">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="categories-heading" className="font-serif text-3xl font-semibold tracking-tight text-ink">
            Everything Filed in One Place
          </h2>
          <p className="mt-3 text-text-muted">
            Six service categories covering registration, compliance and tax
            filing for individuals and businesses.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((category) => (
            <Link
              key={category.slug}
              href={category.href}
              className="flex flex-col rounded-card border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <h3 className="font-serif text-lg font-semibold text-ink">{category.label}</h3>
              <p className="mt-2 text-sm text-text-muted">{category.description}</p>
              <span className="mt-4 text-sm font-medium text-accent">Explore {category.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
