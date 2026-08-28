import Image from "next/image";
import Link from "next/link";
import { firm, footerLinks } from "@/lib/data/homepage";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-text-muted">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt="Jus Veritas Associates LLP logo"
              width={192}
              height={192}
              className="h-12 w-12"
            />
            <p className="mt-4 font-serif text-lg font-semibold text-ink">{firm.name}</p>
            <address className="mt-3 not-italic text-sm leading-relaxed">
              {firm.addressLine1}
              <br />
              {firm.addressLine2}
            </address>
            <p className="mt-3 text-sm">
              <a href={`tel:+91${firm.phone}`} className="hover:text-ink">
                {firm.phoneDisplay}
              </a>
            </p>
            <p className="text-sm">
              <a href={`mailto:${firm.email}`} className="hover:text-ink">
                {firm.email}
              </a>
            </p>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold">
              Office Hours
            </h3>
            <ul className="mt-2 space-y-1 text-sm">
              {firm.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Explore" links={footerLinks.explore} />
          <FooterColumn title="Firm" links={footerLinks.firm} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>
      </div>

      <div className="bg-ink">
        <div className="mx-auto max-w-content px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-xs leading-relaxed text-copyright-text">
            This website is not an advertisement or solicitation. The
            information provided is for general purposes only.
          </p>
          <p className="mt-2 text-xs text-copyright-text">
            &#169; {new Date().getFullYear()} {firm.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
