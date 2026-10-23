import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  Building2,
  Dna,
  Droplets,
  FlaskConical,
  HeartPulse,
  Minus,
  Plus,
  Route,
  ShieldCheck,
  Users,
  Activity,
  type LucideIcon,
} from "lucide-react";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Reveal,
  Section,
} from "@/components/ui";
import { company, media, type Service } from "@/data/site";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/* Icon registry                                                       */
/* ------------------------------------------------------------------ */

const icons: Record<string, LucideIcon> = {
  HeartPulse,
  Droplets,
  FlaskConical,
  Building2,
  Dna,
  Route,
  ShieldCheck,
  Users,
  Activity,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? HeartPulse;
  return <Icon aria-hidden="true" className={cn("h-5 w-5", className)} />;
}

/* ------------------------------------------------------------------ */
/* FAQ accordion                                                       */
/* ------------------------------------------------------------------ */

export function FaqAccordion({
  items,
  tone = "dark",
}: {
  items: { q: string; a: string }[];
  tone?: "dark" | "light";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const light = tone === "light";

  return (
    <ul
      className={cn(
        "divide-y",
        light ? "divide-cream/12" : "divide-line",
      )}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span
                  className={cn(
                    "font-display text-[1.0625rem] leading-snug transition-colors duration-300 sm:text-[1.15rem]",
                    light
                      ? "text-cream group-hover:text-brand-300"
                      : "text-ink group-hover:text-brand",
                  )}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    light
                      ? "border-cream/25 text-cream/70 group-hover:border-brand-300 group-hover:text-brand-300"
                      : "border-line text-slateink group-hover:border-brand group-hover:text-brand",
                    isOpen && "rotate-180",
                  )}
                >
                  {isOpen ? (
                    <Minus className="h-3.5 w-3.5" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" />
                  )}
                </span>
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "max-w-2xl pb-6 pr-12 text-[0.9375rem] leading-relaxed",
                    light ? "text-cream/65" : "text-slateink",
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Reusable conversion band                                            */
/* ------------------------------------------------------------------ */

export function CtaBand({
  eyebrow = "Next step",
  title = (
    <>
      Ready to bring structured wellness screening to your organization?
    </>
  ),
  body = "Tell us about your team, your sites, and your timeline. We will come back with a tailored plan and a customized quote.",
  primaryLabel = "Schedule a Consultation",
  primaryTo = "/consultation",
  secondaryLabel = "Explore our services",
  secondaryTo = "/services",
  image = media.fleet.src,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-[0.16] grayscale"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/55"
      />
      <div aria-hidden="true" className="grain absolute inset-0 opacity-30" />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-3xl leading-[1.08] sm:text-4xl lg:text-[3rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-cream/70">
              {body}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink to={primaryTo} variant="light" size="lg">
                {primaryLabel}
              </ButtonLink>
              <ButtonLink to={secondaryTo} variant="ghost" size="lg" withArrow>
                {secondaryLabel}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 flex items-center gap-2 text-[0.8125rem] text-cream/50">
              <ShieldCheck className="h-4 w-4 text-brand-300" />
              {company.compliance.join(" · ")}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Back to top                                                         */
/* ------------------------------------------------------------------ */

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-[0_10px_30px_-12px_rgba(8,22,31,0.4)] backdrop-blur transition-all duration-400 hover:bg-ink hover:text-cream",
        show
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Related services strip                                              */
/* ------------------------------------------------------------------ */

export function RelatedServices({
  items,
  currentSlug,
}: {
  items: Service[];
  currentSlug?: string;
}) {
  const related = items.filter((s) => s.slug !== currentSlug).slice(0, 3);
  return (
    <Section tone="cream">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Related services</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl">
              Other ways we support your team
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ButtonLink to="/services" variant="outline" size="sm" withArrow>
              All services
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={i * 90} className="h-full">
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col bg-white p-7 transition-colors duration-400 hover:bg-cream-200/60"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h3 className="mt-6 text-xl">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-slateink">
                    {s.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
