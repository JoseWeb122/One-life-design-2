import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Quote,
  ShieldCheck,
} from "lucide-react";
import {
  ButtonLink,
  Container,
  Eyebrow,
  ImageFrame,
  Pill,
  Reveal,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import {
  CtaBand,
  FaqAccordion,
  ServiceIcon,
} from "@/components/blocks";
import {
  audiences,
  challenges,
  company,
  faqs,
  media,
  process,
  services,
  values,
} from "@/data/site";

/* ================================================================== */
/* A. Hero                                                             */
/* ================================================================== */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div
        aria-hidden="true"
        className="hairline-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-20 h-[34rem] w-[34rem] rounded-full bg-brand/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-40 h-[24rem] w-[24rem] rounded-full bg-gold/8 blur-3xl"
      />

      <Container className="relative pb-16 sm:pb-20 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>
                Mobile Preventive Health Screening · Houston, Texas
              </Eyebrow>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 text-[2.5rem] leading-[1.03] tracking-[-0.025em] sm:text-[3.4rem] lg:text-[4.05rem]">
                Preventive healthcare
                <br className="hidden sm:block" /> that comes to{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">your people.</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 z-0 h-[0.32em] bg-brand/15"
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-slateink sm:text-[1.125rem]">
                {company.name} delivers laboratory testing, mobile blood
                collection, and structured on-site health screenings for
                transportation companies, employers, and community
                organizations — planned properly, delivered professionally, and
                documented consistently.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink to="/consultation" size="lg">
                  Schedule a Consultation
                </ButtonLink>
                <ButtonLink to="/services" variant="outline" size="lg" withArrow>
                  Explore Our Services
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-11 flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-start sm:gap-10">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink">
                      Compliant practice
                    </p>
                    <p className="mt-1 text-[0.8125rem] text-slateink">
                      {company.compliance.join(" · ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink">
                      Founded by {company.founder}
                    </p>
                    <p className="mt-1 text-[0.8125rem] text-slateink">
                      {company.yearsExperience} of healthcare experience
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200} variant="blur">
              <div className="relative">
                <div className="absolute -right-4 -top-5 z-20 hidden rounded-lg border border-line bg-white px-5 py-4 shadow-[0_18px_40px_-20px_rgba(8,22,31,0.35)] sm:block">
                  <p className="font-display text-2xl leading-none text-ink">
                    25<span className="text-brand">+</span>
                  </p>
                  <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-slateink">
                    Years in healthcare
                  </p>
                </div>

                <ImageFrame
                  src={media.heroPrimary.src}
                  alt={media.heroPrimary.alt}
                  ratio="aspect-[4/5]"
                  className="rounded-lg shadow-[0_40px_80px_-40px_rgba(8,22,31,0.45)]"
                  priority
                  imgClassName="group-hover:scale-[1.03]"
                />

                <div className="absolute -bottom-8 -left-4 z-20 w-[62%] max-w-[15rem] overflow-hidden rounded-lg border border-line bg-white p-1.5 shadow-[0_24px_50px_-24px_rgba(8,22,31,0.4)] sm:-left-8">
                  <ImageFrame
                    src={media.heroInset.src}
                    alt={media.heroInset.alt}
                    ratio="aspect-[16/10]"
                    className="rounded-[0.35rem]"
                  />
                  <p className="px-2.5 py-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-slateink">
                    On-site events for fleets &amp; crews
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-lg border border-brand/25"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Audience ticker */}
      <div className="relative border-y border-line bg-white/70 py-4">
        <div className="no-scrollbar flex items-center gap-x-7 gap-y-3 overflow-x-auto px-5 py-1 sm:px-8 lg:flex-wrap lg:justify-center lg:overflow-visible">
          <span className="eyebrow shrink-0 text-brand">Who we serve</span>
          {audiences.map((a) => (
            <span
              key={a}
              className="shrink-0 whitespace-nowrap text-[0.875rem] text-slateink"
            >
              {a}
              <span aria-hidden="true" className="ml-8 text-line">
                /
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* B. Positioning statement                                            */
/* ================================================================== */

function Positioning() {
  return (
    <Section tone="cream" className="pt-20 sm:pt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-display text-[1.6rem] leading-[1.3] text-ink sm:text-[1.9rem]">
                “{company.mission}”
              </p>
              <p className="mt-6 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-brand">
                Our mission
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <Pill tone="line">Preventive, not diagnostic</Pill>
                <Pill tone="line">We travel to you</Pill>
                <Pill tone="line">Nationwide coordination</Pill>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="text-[1.0625rem] leading-relaxed text-slateink sm:text-[1.125rem]">
                One Life One Mile Consulting, Inc. is dedicated to making
                quality healthcare more accessible through convenient
                laboratory testing, mobile blood collection, preventive health
                screenings, occupational health services, DNA testing, and
                wellness programs.
              </p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-slateink sm:text-[1.125rem]">
                Transportation professionals face elevated health risks driven
                by long hours, sedentary work, and high-stress environments —
                and conventional clinic hours rarely fit a route sheet. So we
                built the service around the work: structured, compliant
                screening events delivered at the yard, the depot, the office,
                or the community center.
              </p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-slateink sm:text-[1.125rem]">
                We believe early detection, education, and proactive care can
                improve lives and strengthen communities.
              </p>
              <div className="mt-8">
                <TextLink to="/about">More about the firm</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ================================================================== */
/* C. Client challenges                                                */
/* ================================================================== */

function Challenges() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow="The challenges we hear most"
          title={
            <>
              The problem is rarely motivation.
              <br className="hidden sm:block" /> It&apos;s access.
            </>
          }
          intro="Most of the people we screen are not avoiding their health. They are working schedules that make conventional healthcare almost impossible to reach. These are the four situations we are built for."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {challenges.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={i * 80} className="h-full">
                <div className="group flex h-full flex-col bg-white p-8 transition-colors duration-400 hover:bg-cream sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-brand transition-all duration-400 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <ServiceIcon name={c.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-display text-[0.9375rem] text-line transition-colors duration-400 group-hover:text-brand/40">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-[1.35rem] leading-snug">{c.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slateink">
                    {c.body}
                  </p>
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="eyebrow text-brand">How we help</p>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/80">
                      {c.help}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ================================================================== */
/* D. Services                                                         */
/* ================================================================== */

function Services() {
  const featured = services.find((s) => s.featured) ?? services[0];
  const rest = services.filter((s) => s.slug !== featured.slug);

  return (
    <Section tone="cream">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="What we offer"
            title="Five service lines, one coordinated approach."
            intro="Every engagement is scoped individually. Some organizations need a single screening day; others need a recurring occupational health program."
            className="max-w-2xl"
          />
          <Reveal delay={150}>
            <ButtonLink to="/services" variant="outline" size="sm" withArrow>
              Services overview
            </ButtonLink>
          </Reveal>
        </div>

        {/* Featured */}
        <Reveal className="mt-14">
          <article className="group grid overflow-hidden rounded-xl border border-line bg-white shadow-[0_30px_70px_-45px_rgba(8,22,31,0.4)] lg:grid-cols-2">
            <div className="relative order-2 overflow-hidden lg:order-1">
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
                  Our core offering
                </Pill>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-center p-8 sm:p-11 lg:order-2 lg:p-14">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                <ServiceIcon name={featured.icon} />
              </span>
              <h3 className="mt-7 text-[1.85rem] leading-tight sm:text-[2.15rem]">
                {featured.title}
              </h3>
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

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <ButtonLink to={`/services/${featured.slug}`} withArrow>
                  Learn more
                </ButtonLink>
                <TextLink to="/consultation">Request a quote</TextLink>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Supporting services */}
        <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {rest.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={i * 80} className="h-full">
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_28px_60px_-32px_rgba(8,22,31,0.4)]"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover duotone transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/70 to-ink/5"
                    />
                    <span className="absolute bottom-4 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-cream/95 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <ServiceIcon name={s.icon} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[1.2rem] leading-snug">{s.title}</h3>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-slateink">
                      {s.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ================================================================== */
/* E. Process                                                          */
/* ================================================================== */

function Process() {
  return (
    <Section tone="white" id="process">
      <Container>
        <SectionHeading
          eyebrow="How an engagement works"
          title="A simple, predictable path from first call to completed event."
          intro="Most of our clients are organizing something for the first time. The process below reflects how we typically work — every stage is confirmed with you before it happens."
        />

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {process.map((p, i) => (
            <li key={p.step}>
              <Reveal delay={i * 100} className="h-full">
                <div className="relative h-full">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-[2.75rem] leading-none text-brand/25">
                      {p.step}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 bg-line"
                    />
                  </div>
                  <h3 className="mt-6 text-[1.35rem]">{p.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slateink">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col gap-5 rounded-lg border border-line bg-cream p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-slateink">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                <strong className="font-semibold text-ink">
                  Plan ahead.
                </strong>{" "}
                Corporate and community events require advance coordination — we
                recommend scheduling at least 3–4 weeks in advance when
                possible.
              </span>
            </p>
            <ButtonLink to="/consultation" size="sm" variant="outline" withArrow>
              Start planning
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ================================================================== */
/* F. Approach / featured expertise                                    */
/* ================================================================== */

function Approach() {
  return (
    <Section tone="ink" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-3xl"
      />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="light">Why organizations choose us</Eyebrow>
              <h2 className="mt-6 text-3xl leading-[1.1] text-cream sm:text-4xl lg:text-[2.9rem]">
                Clinical professionalism, regulatory awareness, and operational
                efficiency — in that order, every time.
              </h2>
              <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-cream/70">
                A screening event only works if it is genuinely organized. Our
                approach combines clinical discipline with real logistics
                planning, so your people move through efficiently and your
                records are consistent.
              </p>
            </Reveal>

            <ul className="mt-11 space-y-px overflow-hidden rounded-lg border border-cream/12">
              {values.map((v, i) => (
                <li key={v.title}>
                  <Reveal delay={i * 70}>
                    <div className="group flex items-start gap-5 bg-cream/[0.03] p-5 transition-colors duration-400 hover:bg-cream/[0.07] sm:p-6">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-300/20 text-brand-300">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <h3 className="text-[1.0625rem] text-cream">
                          {v.title}
                        </h3>
                        <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-cream/60">
                          {v.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={180} variant="blur">
              <div className="relative">
                <ImageFrame
                  src={media.fleet.src}
                  alt={media.fleet.alt}
                  ratio="aspect-[5/4]"
                  className="rounded-lg border border-cream/10"
                />
                <div className="absolute -bottom-10 right-2 w-[74%] max-w-sm rounded-lg border border-cream/12 bg-ink-700/95 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur sm:-bottom-12 sm:right-6 sm:p-7">
                  <Quote
                    aria-hidden="true"
                    className="h-6 w-6 text-brand-300/60"
                  />
                  <p className="mt-4 font-display text-[1.15rem] italic leading-snug text-cream">
                    {company.tagline}
                  </p>
                  <p className="mt-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-300">
                    {company.name}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ================================================================== */
/* G. About preview                                                    */
/* ================================================================== */

function AboutPreview() {
  return (
    <Section tone="cream">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal variant="blur">
              <div className="relative">
                <ImageFrame
                  src={media.team.src}
                  alt={media.team.alt}
                  ratio="aspect-[4/5]"
                  className="rounded-lg"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-5 -right-5 -z-10 h-36 w-36 rounded-lg border border-brand/25"
                />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 text-[0.75rem] leading-relaxed text-slateink-400">
                Representative imagery shown in this design prototype. Founder
                and team photography will replace these placeholders.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About the firm"
              title={
                <>
                  Founded by a healthcare professional with{" "}
                  {company.yearsExperience.toLowerCase()} of experience.
                </>
              }
            />
            <Reveal delay={160}>
              <p className="mt-7 text-[1.0625rem] leading-relaxed text-slateink">
                {company.name} was founded by{" "}
                <strong className="font-semibold text-ink">
                  {company.founder}
                </strong>
                , a healthcare professional with more than 25 years of
                experience, with one mission: to make preventive healthcare
                simple, convenient, and accessible for everyone.
              </p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-slateink">
                What began as a conviction — that preventive health is a
                responsibility, not a luxury — now serves individuals, families,
                employers, healthcare providers, schools, churches, nonprofit
                organizations, and communities across the country.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
                {[
                  {
                    k: "Founded by",
                    v: company.founder,
                  },
                  {
                    k: "Experience",
                    v: `${company.yearsExperience} in healthcare`,
                  },
                  {
                    k: "Headquarters",
                    v: `${company.address.city}, ${company.address.state}`,
                  },
                ].map((item) => (
                  <div key={item.k}>
                    <p className="eyebrow text-brand">{item.k}</p>
                    <p className="mt-2 text-[0.9375rem] text-ink">{item.v}</p>
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <ButtonLink to="/about" variant="outline" withArrow>
                  Read our full story
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ================================================================== */
/* H. FAQ preview                                                      */
/* ================================================================== */

function FaqPreview() {
  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Straight answers"
              title="Questions we're asked before every engagement."
              intro="Clear expectations make better events. Here is what organizations usually want to confirm first."
            />
            <Reveal delay={200}>
              <div className="mt-9">
                <ButtonLink to="/faqs" variant="outline" size="sm" withArrow>
                  View all FAQs
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <FaqAccordion items={faqs.slice(0, 5)} />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ================================================================== */

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <Challenges />
      <Services />
      <Process />
      <Approach />
      <AboutPreview />
      <FaqPreview />
      <CtaBand />
    </>
  );
}
