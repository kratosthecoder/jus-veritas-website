import { howItWorks } from "@/lib/data/homepage";

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="bg-surface">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="how-it-works-heading" className="font-serif text-3xl font-semibold tracking-tight text-ink">
            How It Works
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item) => (
            <div key={item.step} className="rounded-card border border-border bg-bg p-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
