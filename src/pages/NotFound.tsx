import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import { ButtonLink, Container, Reveal } from "@/components/ui";
import { services } from "@/data/site";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-ink pt-32 pb-20 text-cream">
      <div aria-hidden="true" className="grain absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <p className="eyebrow text-brand-300">404 — page not found</p>
          <h1 className="mt-6 max-w-2xl text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
            That route doesn&apos;t exist — yet.
          </h1>
          <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-cream/70">
            Nothing lives at{" "}
            <code className="rounded bg-cream/10 px-2 py-0.5 text-[0.875rem] text-cream">
              {pathname}
            </code>
            . Here are the places people usually need.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink to="/" variant="light" withArrow={false}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost" withArrow>
              Contact the firm
            </ButtonLink>
          </div>

          <div className="mt-14 max-w-2xl rounded-xl border border-cream/12 bg-cream/[0.04] p-7">
            <p className="flex items-center gap-2 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-brand-300">
              <Compass className="h-4 w-4" />
              Our services
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-[0.9375rem] text-cream/70 transition-colors hover:text-cream"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
