import {
  AlertTriangle,
  CheckCircle2,
  Minus,
  Plus,
  ShieldCheck,
} from "lucide-react";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Pill,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CtaBand, FaqAccordion } from "@/components/blocks";
import { company, faqs, media } from "@/data/site";

const emergency = faqs.find((f) => f.q.startsWith("Do you provide emergency"))!;

export default function Faqs() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28 text-cream sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="grain absolute inset-0 opacity-30" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-8 h-[26rem] w-[26rem] rounded-full bg-brand/18 blur-3xl"
        />
        <Container className="relative">
          <div className="max-w-3xl pb-16 lg:pb-20">
            <Reveal>
              <Eyebrow tone="light">Frequently asked questions</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
                Clear answers, before you commit to anything.
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-cream/70">
                These are the questions organizations ask us most often, answered
                the same way we answer them on a call.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section tone="cream" className="pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-xl border border-line bg-white p-7 sm:p-9">
                  <h2 className="text-[1.5rem] leading-tight">
                    General questions
                  </h2>
                  <div className="mt-4">
                    <FaqAccordion items={faqs} />
                  </div>
                </div>
              </Reveal>

              {/* Emergency notice */}
              <Reveal delay={140}>
                <div className="mt-6 flex items-start gap-4 rounded-xl border border-[#b4232a]/25 bg-[#b4232a]/[0.05] p-6 sm:p-7">
                  <AlertTriangle
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#b4232a]"
                  />
                  <div>
                    <h2 className="text-[1.15rem] text-ink">
                      Medical emergencies
                    </h2>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/75">
                      {emergency.a}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-6 flex items-start gap-4 rounded-xl border border-line bg-white p-6 sm:p-7">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                  />
                  <div>
                    <h2 className="text-[1.15rem]">Scope of our services</h2>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-slateink">
                      Our services are preventive screening services only. We do
                      not provide medical diagnosis, treatment, or emergency
                      care. Participants are encouraged to consult their personal
                      healthcare provider regarding results.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-xl border border-line bg-white p-7">
                    <h2 className="text-[1.15rem]">Still have a question?</h2>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-slateink">
                      Ask it directly. We answer scope, scheduling, and pricing
                      questions before any commitment is made.
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                      <ButtonLink to="/contact" withArrow>
                        Ask a question
                      </ButtonLink>
                      <ButtonLink
                        to="/consultation"
                        variant="outline"
                        withArrow
                      >
                        Schedule a consultation
                      </ButtonLink>
                    </div>
                  </div>

                  <div className="rounded-xl border border-line bg-white p-7">
                    <ShieldCheck
                      aria-hidden="true"
                      className="h-5 w-5 text-brand"
                    />
                    <h2 className="mt-4 text-[1.15rem]">Compliance</h2>
                    <ul className="mt-4 space-y-2.5">
                      {company.compliance.map((c) => (
                        <li
                          key={c}
                          className="flex items-center gap-2 text-[0.875rem] text-slateink"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-brand"
                          />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <Pill>Preventive screening only</Pill>
                      <Pill>No diagnosis or treatment</Pill>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-line">
                    <img
                      src={media.community.src}
                      alt={media.community.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover duotone"
                    />
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Long-form clarity ------------------------------------------- */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Plain language"
            title="A few things we want to be unambiguous about."
            intro="Trust is easier to build when the limits of a service are stated up front."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {[
              {
                icon: <Minus className="h-4 w-4" />,
                t: "What we do not do",
                b: "We do not diagnose, treat, or manage conditions, and we do not provide emergency care. Screening is preventive.",
              },
              {
                icon: <CheckCircle2 className="h-4 w-4" />,
                t: "What participants receive",
                b: "Their screening results, plain-language education, and a clear recommendation to follow up with their own healthcare provider.",
              },
              {
                icon: <ShieldCheck className="h-4 w-4" />,
                t: "Who performs the work",
                b: "Certain laboratory and ultrasound services may be performed by qualified independent third-party vendors who maintain their own compliance standards.",
              },
              {
                icon: <Plus className="h-4 w-4" />,
                t: "How pricing works",
                b: "Quotes are provided after consultation, based on event size, services selected, staffing requirements, laboratory coordination, and location.",
              },
            ].map((c, i) => (
              <li key={c.t} className="list-none">
                <Reveal delay={i * 80} className="h-full">
                  <div className="h-full bg-white p-8 transition-colors duration-400 hover:bg-cream">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-brand">
                      {c.icon}
                    </span>
                    <h3 className="mt-6 text-[1.25rem]">{c.t}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-slateink">
                      {c.b}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Have what you need? Let's scope your program."
        secondaryLabel="Explore services"
      />
    </>
  );
}
