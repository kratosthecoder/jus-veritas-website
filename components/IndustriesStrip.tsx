import Link from "next/link";
import { menuCategories } from "@/lib/services";

export default function IndustriesStrip() {
  const industries = menuCategories.find((category) => category.slug === "industries");
  if (!industries) return null;

  return (
    <section aria-labelledby="industries-heading" className="bg-bg">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="industries-heading" className="font-serif text-3xl font-semibold tracking-tight text-ink">
            Industries We Serve
          </h2>
          <p className="mt-3 text-text-muted">{industries.description}</p>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.groups.map((group) => (
            <li key={group.slug}>
              <Link
                href={group.href}
                className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent"
              >
                {group.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
