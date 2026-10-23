import {
  CheckCircle2,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  ButtonAnchor,
  ButtonLink,
  Container,
  Eyebrow,
  ImageFrame,
  Pill,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { company, media, process, values } from "@/data/site";

export default function About() {
  return (
    <>
      {/* Hero ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ink pt-28 text-cream sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="grain absolute inset-0 opacity-30" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-16 h-[30rem] w-[30rem] rounded-full bg-brand/18 blur-3xl"
        />
        <Container className="relative">
          <div className="max-w-3xl pb-16 lg:pb-24">
            <Reveal>
              <Eyebrow tone="light">About the firm</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
                Preventive health is a responsibility — not a luxury.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-cream/70">
                {company.name} provides professional health and wellness
                screening services designed for transportation professionals and
                community-based organizations. Founded by healthcare
                professional {company.founder}, with more than 25 years of
                healthcare experience, the company was built on a simple belief:
                the people who keep the country moving deserve healthcare that
                moves with them.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap gap-2">
                {company.compliance.map((c) => (
                  <Pill key={c} tone="dark">
                    <ShieldCheck className="h-3 w-3 text-brand-300" />
                    {c}
                  </Pill>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story -------------------------------------------------------- */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our story"
                title="Built around the realities of the work."
              />
              <Reveal delay={140}>
                <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-slateink">
                  <p>
                    Transportation professionals face elevated health risks due
                    to long hours, sedentary work, and high-stress environments.
                    Yet the healthcare system is built around appointments that
                    assume a predictable week — which is precisely what many of
                    these professionals do not have.
                  </p>
                  <p>
                    We partner with employers, fleet operators, churches, and
                    nonprofit organizations to deliver structured, compliant,
                    and impactful screening events that promote early detection
                    and long-term well-being.
                  </p>
                  <p>
                    Our approach combines clinical professionalism, regulatory
                    awareness, and operational efficiency — ensuring every event
                    is organized, purposeful, and aligned with your
                    organization&apos;s goals.
                  </p>
                  <p>
                    Beyond transportation, we serve individuals, families,
                    employers, healthcare providers, schools, churches, nonprofit
                    organizations, and communities nationwide — whether that
                    means ordering personal lab work, scheduling a mobile blood
                    draw, organizing a corporate wellness event, or partnering on
                    a community health initiative.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <figure className="mt-11 rounded-lg border-l-2 border-brand bg-white p-7 sm:p-9">
                  <blockquote className="font-display text-[1.35rem] leading-snug text-ink sm:text-[1.6rem]">
                    “{company.mission}”
                  </blockquote>
                  <figcaption className="mt-5 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-brand">
                    Our mission — {company.name}
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <Reveal delay={160} variant="blur">
                <div className="relative">
                  <ImageFrame
                    src={media.team.src}
                    alt={media.team.alt}
                    ratio="aspect-[4/5]"
                    className="rounded-lg"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-lg border border-brand/25"
                  />
                </div>
              </Reveal>
              <Reveal delay={230}>
                <p className="mt-7 text-[0.75rem] leading-relaxed text-slateink-400">
                  Representative imagery shown in this design prototype. Founder
                  and clinical team photography will replace these placeholders
                  prior to launch.
                </p>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-9 rounded-lg border border-line bg-white p-7">
                  <Sparkles
                    aria-hidden="true"
                    className="h-5 w-5 text-brand"
                  />
                  <h3 className="mt-4 text-[1.15rem]">What sets us apart</h3>
                  <ul className="mt-5 space-y-4">
                    {[
                      "Comprehensive laboratory testing with professional mobile phlebotomists who come to you.",
                      "Mobile healthcare delivered to homes, offices, community centers, churches, and job sites.",
                      "Corporate and occupational health programs, including drug testing, biometric screenings, and employee health services.",
                      "Confidential DNA testing for personal, legal, and immigration needs.",
                      "A preventive health focus built on screening, education, and practical wellness resources.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                        />
                        <span className="text-[0.9375rem] leading-relaxed text-slateink">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-line pt-5 text-[0.8125rem] leading-relaxed text-slateink-400">
                    DOT physicals and cardiac ultrasound screening are provided
                    through our preferred partners.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Values ------------------------------------------------------- */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Our principles"
            title="Six commitments that shape how every event is run."
            intro="These are not slogans. They are the working standards our clients notice first."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={i * 70} className="h-full">
                  <div className="group h-full bg-white p-8 transition-colors duration-400 hover:bg-cream">
                    <span className="font-display text-[0.9375rem] text-brand/40">
                      0{i + 1}
                    </span>
                    <h3 className="mt-5 text-[1.25rem]">{v.title}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-slateink">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Process ------------------------------------------------------ */}
      <Section tone="ink" id="process">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cream/10"
        />
        <Container className="relative">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="How it works"
              title="From first conversation to completed event."
              intro="Every engagement follows the same four stages. Each one is confirmed with you before we move forward."
              tone="light"
              className="max-w-2xl"
            />
            <Reveal delay={160}>
              <ButtonLink to="/consultation" variant="light" size="sm" withArrow>
                Begin stage one
              </ButtonLink>
            </Reveal>
          </div>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-lg border border-cream/12 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.step}>
                <Reveal delay={i * 90} className="h-full">
                  <div className="h-full bg-cream/[0.03] p-8 transition-colors duration-400 hover:bg-cream/[0.07]">
                    <span className="font-display text-[2.5rem] leading-none text-brand-300/40">
                      {p.step}
                    </span>
                    <h3 className="mt-6 text-[1.3rem] text-cream">{p.title}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-cream/60">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Location ----------------------------------------------------- */}
      <Section tone="cream">
        <Container>
          <div className="grid items-center gap-12 rounded-xl border border-line bg-white p-8 sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Where we&apos;re based</Eyebrow>
                <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">
                  Houston roots. Nationwide coordination.
                </h2>
                <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-slateink">
                  We are headquartered in Houston, Texas, and coordinate services
                  across the United States depending on event scope and staffing
                  availability.
                </p>
                <address className="mt-8 flex items-start gap-3 not-italic">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-ink">
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                    <br />
                    {company.address.city}, {company.address.state}{" "}
                    {company.address.zip}
                  </span>
                </address>
                <div className="mt-9 flex flex-wrap gap-3">
                  <ButtonLink to="/contact" withArrow>
                    Contact the firm
                  </ButtonLink>
                  <ButtonAnchor
                    href={company.mapsUrl}
                    variant="outline"
                    withArrow={false}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google Maps
                  </ButtonAnchor>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={140} variant="blur">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 bg-ink text-center">
                    <HeartPulse
                      aria-hidden="true"
                      className="h-9 w-9 text-brand-300"
                    />
                    <p className="px-8 font-display text-[1.35rem] leading-snug text-cream">
                      {company.tagline}
                    </p>
                    <p className="text-[0.75rem] uppercase tracking-[0.18em] text-cream/50">
                      {company.name}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Work with us"
        title="Let's design a screening program that fits your operation."
        body="Share a few details about your organization and we'll respond with a tailored plan and a customized quote."
        secondaryLabel="See our services"
      />
    </>
  );
}
