import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  ButtonLink,
  Container,
  Eyebrow,
  ImageFrame,
  Pill,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CtaBand, FaqAccordion, ServiceIcon } from "@/components/blocks";
import { audiences, faqs, media, services } from "@/data/site";

export default function Services() {
  const [featured, ...rest] = services;

  return (
    <>
      {/* Hero --------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ink pt-28 text-cream sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="grain absolute inset-0 opacity-30" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-10 h-[28rem] w-[28rem] rounded-full bg-brand/18 blur-3xl"
        />
        <Container className="relative">
          <div className="max-w-3xl pb-16 lg:pb-24">
            <Reveal>
              <Eyebrow tone="light">Services</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
                Preventive health screening programs, delivered on site.
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-cream/70">
                Five service lines that work together — from a single mobile
                blood draw to a full corporate occupational health program.
                Every engagement is scoped individually and quoted after
                consultation.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap gap-2">
                <Pill tone="dark">Preventive screening only</Pill>
                <Pill tone="dark">No diagnosis or treatment</Pill>
                <Pill tone="dark">Quotes after consultation</Pill>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Featured ----------------------------------------------------- */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <article className="group grid overflow-hidden rounded-xl border border-line bg-white shadow-[0_30px_70px_-45px_rgba(8,22,31,0.4)] lg:grid-cols-2">
              <div className="relative order-2 lg:order-1">
                <ImageFrame
                  src={featured.image}
                  alt={featured.imageAlt}
                  ratio="aspect-[4/3] lg:aspect-auto lg:h-full"
                  className="h-full"
                  imgClassName="group-hover:scale-[1.04]"
                  overlay
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <Pill tone="dark" className="backdrop-blur-sm">
                    Core offering
                  </Pill>
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center p-8 sm:p-11 lg:order-2 lg:p-14">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <ServiceIcon name={featured.icon} />
                </span>
                <h2 className="mt-7 text-[1.85rem] leading-tight sm:text-[2.1rem]">
                  {featured.title}
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed text-slateink">
                  {featured.summary}
                </p>
                <dl className="mt-8 space-y-5">
                  <div>
                    <dt className="eyebrow text-brand">Who it&apos;s for</dt>
                    <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink/80">
                      {featured.need}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-brand">The outcome</dt>
                    <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink/80">
                      {featured.outcome}
                    </dd>
                  </div>
                </dl>
                <div className="mt-9">
                  <ButtonLink
                    to={`/services/${featured.slug}`}
                    variant="outline"
                    withArrow
                  >
                    Explore this service
                  </ButtonLink>
                </div>
              </div>
            </article>
          </Reveal>
        </Container>
      </Section>

      {/* All services ------------------------------------------------- */}
      <Section tone="white" className="pt-0">
        <Container>
          <SectionHeading
            eyebrow="Full service list"
            title="Choose the starting point that fits your organization."
            intro="Select any service to see who it is for, how we deliver it, and what to expect."
          />
          <ul className="mt-14 space-y-px overflow-hidden rounded-lg border border-line bg-line">
            {rest.map((s, i) => (
              <li key={s.slug}>
                <Reveal delay={i * 70}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group grid items-center gap-6 bg-white p-7 transition-colors duration-400 hover:bg-cream sm:p-9 lg:grid-cols-12 lg:gap-10"
                  >
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-brand transition-all duration-400 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                          <ServiceIcon name={s.icon} />
                        </span>
                        <h3 className="text-[1.35rem] leading-snug">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-[0.9375rem] leading-relaxed text-slateink lg:pr-6">
                        {s.summary}
                      </p>
                    </div>

                    <div className="hidden lg:col-span-3 lg:block">
                      <p className="eyebrow text-brand">Addresses</p>
                      <p className="mt-2 text-[0.875rem] leading-relaxed text-ink/75">
                        {s.need}
                      </p>
                    </div>

                    <div className="hidden lg:col-span-3 lg:block">
                      <p className="eyebrow text-brand">Outcome</p>
                      <p className="mt-2 text-[0.875rem] leading-relaxed text-ink/75">
                        {s.outcome}
                      </p>
                    </div>

                    <div className="lg:col-span-1 lg:flex lg:justify-end">
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-all duration-400 group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                      >
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={200}>
            <div className="mt-10 grid gap-6 rounded-lg border border-line bg-cream p-7 sm:grid-cols-3 sm:p-9">
              {[
                {
                  t: "Preventive, not diagnostic",
                  d: "Our services are preventive screening services only. We do not provide medical diagnosis, treatment, or emergency care.",
                },
                {
                  t: "Coordinated in advance",
                  d: "Corporate and community events require advance coordination — we recommend 3–4 weeks when possible.",
                },
                {
                  t: "Customized pricing",
                  d: "Pricing depends on event size, services selected, staffing, laboratory coordination, and location.",
                },
              ].map((n) => (
                <div key={n.t} className="flex gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                  />
                  <div>
                    <p className="text-[0.9375rem] font-semibold text-ink">
                      {n.t}
                    </p>
                    <p className="mt-1.5 text-[0.875rem] leading-relaxed text-slateink">
                      {n.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Who we serve strip ------------------------------------------- */}
      <Section tone="cream" className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Who we serve</Eyebrow>
                <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
                  Eight audiences, one standard of care.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <ul className="flex flex-wrap gap-2.5">
                  {audiences.map((a) => (
                    <li key={a}>
                      <span className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-[0.875rem] text-ink/80">
                        {a}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ ---------------------------------------------------------- */}
      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Before you book"
                title="What to know before requesting a quote."
              />
              <Reveal delay={180}>
                <div className="mt-9">
                  <ButtonLink
                    to="/faqs"
                    variant="outline"
                    size="sm"
                    withArrow
                  >
                    All FAQs
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <FaqAccordion items={faqs.slice(2, 6)} />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        image={media.trucksDark.src}
        title="Not sure which service fits? Start with a conversation."
        body="Tell us what you're trying to solve. We'll tell you honestly whether we're the right fit."
      />
    </>
  );
}
