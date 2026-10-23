import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { company, services } from "@/data/site";

const explore = [
  { label: "Home", to: "/" },
  { label: "About the Firm", to: "/about" },
  { label: "Who We Serve", to: "/who-we-serve" },
  { label: "How It Works", to: "/about#process" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden="true"
        className="grain pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-brand/12 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 border-b border-cream/10 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-cream/65">
              {company.description}
            </p>
            <p className="mt-6 font-display text-[1.05rem] italic text-brand-300">
              {company.mission}
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {company.compliance.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-1.5 rounded-full border border-cream/15 px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-cream/70"
                >
                  <ShieldCheck className="h-3 w-3 text-brand-300" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Explore" className="lg:col-span-2">
            <h3 className="eyebrow text-brand-300">Explore</h3>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[0.9375rem] text-cream/70 transition-colors duration-300 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-3">
            <h3 className="eyebrow text-brand-300">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-[0.9375rem] text-cream/70 transition-colors duration-300 hover:text-cream"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-brand-300 transition-colors hover:text-cream"
                >
                  All services
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-brand-300">Contact</h3>
            <address className="mt-5 not-italic">
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-[0.9375rem] leading-relaxed text-cream/70 transition-colors hover:text-cream"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.city}, {company.address.state}{" "}
                  {company.address.zip}
                </span>
              </a>
            </address>

            <p className="mt-5 text-[0.8125rem] leading-relaxed text-cream/50">
              {company.serviceArea}
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-[0.8125rem] font-medium text-ink transition-all duration-300 hover:bg-brand-300 hover:-translate-y-0.5"
            >
              Request a consultation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <p className="mt-5 max-w-xs text-[0.6875rem] leading-relaxed text-cream/35">
              Prototype note: the source website does not publish a telephone
              number, email address, or social profiles, so none are shown here.
              Contact details can be added once verified.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-cream/45">
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link
                to="/privacy"
                className="text-[0.8125rem] text-cream/45 transition-colors hover:text-cream"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-[0.8125rem] text-cream/45 transition-colors hover:text-cream"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="text-[0.8125rem] text-cream/45 transition-colors hover:text-cream"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
