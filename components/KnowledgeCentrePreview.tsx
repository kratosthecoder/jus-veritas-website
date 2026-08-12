import Link from "next/link";
import { articles } from "@/lib/data/homepage";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function KnowledgeCentrePreview() {
  return (
    <section aria-labelledby="knowledge-heading" className="bg-white">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 id="knowledge-heading" className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
              Knowledge Centre
            </h2>
            <p className="mt-3 text-charcoal/70">
              General-purpose articles on legal procedure and compliance
              requirements.
            </p>
          </div>
          <Link
            href="/knowledge"
            className="text-sm font-medium text-navy hover:text-gold"
          >
            View all articles
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col rounded-md border border-navy/10 bg-parchment p-6"
            >
              <div className="flex items-center gap-3 text-xs text-charcoal/60">
                <span className="rounded-full bg-navy/10 px-2.5 py-1 font-medium text-navy">
                  {article.category}
                </span>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-navy">
                <Link href={`/knowledge/${article.slug}`} className="hover:text-gold">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-charcoal/70">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
