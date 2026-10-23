import { Navigate, useParams } from "react-router-dom";
import { CheckCircle2, Info } from "lucide-react";
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
import { CtaBand, RelatedServices, ServiceIcon } from "@/components/blocks";
import { media, serviceBySlug, services } from "@/data/site";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      {/* Hero --------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ink pt-28 text-cream sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="grain absolute inset-0 opacity-30" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-12 h-[28rem] w-[28rem] rounded-full bg-brand/18 blur-3xl"
        />
        <Container className="relative">
          <div className="grid items-end gap-12 pb-14 lg:grid-cols-12 lg:pb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <nav aria-label="Breadcrumb">
                  <ol className="mb-6 flex items-center gap-2 text-[0.75rem] text-cream/45">
                    <li>
                      <a href="/" className="transition-colors hover:text-cream">
                        Home
                      </a>
                    </li>
                    <li aria-hidden="true" className="text-cream/25">
                      /
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="transition-colors hover:text-cream"
                      >
                        Services
                      </a>
                    </li>
                    <li aria-hidden="true" className="text-cream/25">
                      /
                    </li>
                    <li aria-current="page" className="text-cream/75">
                      {service.navLabel}
                    </li>
                  </ol>
                </nav>
              </Reveal>
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-brand-300">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <Eyebrow tone="light">{service.eyebrow}</Eyebrow>
                </div>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-6 max-w-2xl text-[2.25rem] leading-[1.06] sm:text-5xl lg:text-[3.3rem]">
                  {service.hero}
                </h1>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-cream/70">
                  {service.summary}
                </p>
              </Reveal>
              <Reveal delay={250}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <ButtonLink to="/consultation" variant="light">
                    Request a consultation
                  </ButtonLink>
                  <ButtonLink to="/services" variant="ghost" withArrow>
                    All services
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
            <Reveal delay={220} variant="blur" className="lg:col-span-5">
              <ImageFrame
                src={service.image}
                alt={service.imageAlt}
                ratio="aspect-[4/3]"
                className="rounded-lg border border-cream/10"
                priority
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Overview ----------------------------------------------------- */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Overview"
                title={service.title}
                level={2}
              />
              <Reveal delay={140}>
                <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-slateink">
                  {service.intro.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow text-brand">The need it addresses</p>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/80">
                      {service.need}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow text-brand">What it leads to</p>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/80">
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <Reveal delay={160}>
                <div className="rounded-lg border border-line bg-white p-7 sm:p-8">
                  <h2 className="text-[1.15rem]">Good to know</h2>
                  <ul className="mt-5 space-y-4">
                    {service.goodToKnow.map((g) => (
                      <li key={g.slice(0, 30)} className="flex gap-3">
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                        />
                        <span className="text-[0.875rem] leading-relaxed text-slateink">
                          {g}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 border-t border-line pt-6">
                    <ButtonLink to="/faqs" variant="outline" size="sm" withArrow>
                      Read all FAQs
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Audience ----------------------------------------------------- */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Who this is for"
            title="Designed around the people who actually need it."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {service.audience.map((a, i) => (
              <li key={a.title}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="group h-full bg-white p-8 transition-colors duration-400 hover:bg-cream sm:p-10">
                    <span className="font-display text-[0.9375rem] text-brand/40">
                      0{i + 1}
                    </span>
                    <h3 className="mt-5 text-[1.3rem] leading-snug">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-slateink">
                      {a.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Approach ----------------------------------------------------- */}
      <Section tone="ink" className="overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-brand/15 blur-3xl"
        />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our approach"
                title="How the service is delivered."
                intro="Clear stages, confirmed with you in advance. No surprises on the day."
                tone="light"
              />
              <Reveal delay={200}>
                <div className="mt-10">
                  <ImageFrame
                    src={media.consult.src}
                    alt={media.consult.alt}
                    ratio="aspect-[4/3]"
                    className="rounded-lg border border-cream/10"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ol className="space-y-px overflow-hidden rounded-lg border border-cream/12">
                {service.approach.map((a, i) => (
                  <li key={a.step}>
                    <Reveal delay={i * 90}>
                      <div className="flex items-start gap-6 bg-cream/[0.03] p-6 transition-colors duration-400 hover:bg-cream/[0.07] sm:p-8">
                        <span className="font-display text-[1.75rem] leading-none text-brand-300/50">
                          {a.step}
                        </span>
                        <div>
                          <h3 className="text-[1.2rem] text-cream">
                            {a.title}
                          </h3>
                          <p className="mt-2 text-[0.9375rem] leading-relaxed text-cream/60">
                            {a.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>

              {service.partnerNote && (
                <Reveal delay={320}>
                  <div className="mt-7 flex gap-3 rounded-md border border-gold/30 bg-gold/[0.08] p-5">
                    <Info
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-200"
                    />
                    <p className="text-[0.875rem] leading-relaxed text-cream/80">
                      {service.partnerNote}
                    </p>
                  </div>
                </Reveal>
              )}

              <Reveal delay={360}>
                <div className="mt-8 flex flex-wrap gap-2">
                  <Pill tone="dark">Scoped individually</Pill>
                  <Pill tone="dark">Quoted after consultation</Pill>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <RelatedServices items={services} currentSlug={service.slug} />

      <CtaBand
        eyebrow="Is this right for you?"
        title="Tell us about your team and we'll scope it honestly."
        body="If this service isn't the right fit, we'll say so and point you toward the one that is."
        secondaryLabel="See how we work"
        secondaryTo="/about#process"
      />
    </>
  );
}
