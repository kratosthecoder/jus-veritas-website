import { whyChooseUs } from "@/lib/data/homepage";

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-us-heading" className="bg-bg">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="why-choose-us-heading" className="font-serif text-3xl font-semibold tracking-tight text-ink">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((point) => (
            <div key={point.title} className="rounded-card border border-border bg-surface p-6">
              <h3 className="font-serif text-lg font-semibold text-ink">{point.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
