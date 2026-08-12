import { credentials } from "@/lib/data/homepage";

export default function CredentialsBar() {
  return (
    <section aria-label="Firm credentials" className="border-y border-navy/10 bg-parchment">
      <div className="mx-auto max-w-content px-4 py-8 sm:px-6 lg:px-8">
        <ul className="flex flex-col flex-wrap items-start gap-x-10 gap-y-3 text-sm text-charcoal/80 sm:flex-row sm:items-center sm:justify-center">
          {credentials.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
