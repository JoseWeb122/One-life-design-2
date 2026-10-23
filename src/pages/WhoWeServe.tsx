import {
  Building2,
  Church,
  GraduationCap,
  HeartHandshake,
  Stethoscope,
  Truck,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  ButtonLink,
  Container,
  Eyebrow,
  ImageFrame,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CtaBand, ServiceIcon } from "@/components/blocks";
import { audiences, challenges, media, services } from "@/data/site";

const groups: {
  icon: LucideIcon;
  title: string;
  body: string;
  points: string[];
}[] = [
  {
    icon: Truck,
    title: "Transportation & fleet operators",
    body: "Drivers, dispatchers, warehouse staff, and maintenance crews whose schedules make conventional appointments nearly impossible.",
    points: [
      "Screening days planned around routes and shift windows",
      "Drug testing and biometric screenings on site",
      "Coordinated DOT physicals through preferred partners",
    ],
  },
  {
    icon: Building2,
    title: "Employers & HR teams",
    body: "Organizations that need workforce health services delivered consistently, documented properly, and without disrupting operations.",
    points: [
      "Customized wellness programs",
      "Employee health services",
      "Recurring or annual program cycles",
    ],
  },
  {
    icon: Church,
    title: "Churches & faith communities",
    body: "Congregations looking for an approachable way to bring preventive health to the people they already gather each week.",
    points: [
      "Screening events hosted at your facility",
      "Plain-language education for members",
      "Respectful, unhurried clinical care",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Nonprofits & community groups",
    body: "Organizations serving populations that rarely access preventive care until a problem is already advanced.",
    points: [
      "Community health initiatives",
      "Partnership-based event planning",
      "Coordination across the United States",
    ],
  },
  {
    icon: GraduationCap,
    title: "Schools & education",
    body: "Districts and campuses that want wellness programming and screening access for staff and the families they serve.",
    points: [
      "Staff wellness screening days",
      "Education-forward health events",
      "Advance scheduling around the academic calendar",
    ],
  },
  {
    icon: Stethoscope,
    title: "Healthcare providers",
    body: "Practices and organizations that need collection and coordination support for the populations they serve.",
    points: [
      "Mobile blood collection support",
      "Laboratory coordination",
      "Group testing logistics",
    ],
  },
  {
    icon: User,
    title: "Individuals & families",
    body: "People who want lab work, a mobile blood draw, or confidential DNA testing handled privately and professionally.",
    points: [
      "Personal lab work",
      "In-home blood collection",
      "Confidential DNA testing",
    ],
  },
  {
    icon: Users,
    title: "Community events",
    body: "Health fairs, festivals, and one-off events that need a professional clinical presence on site.",
    points: [
      "Single-day screening stations",
      "Scalable staffing",
      "Clear event-day logistics",
    ],
  },
];

export default function WhoWeServe() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28 text-cream sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="grain absolute inset-0 opacity-30" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 top-8 h-[26rem] w-[26rem] rounded-full bg-brand/18 blur-3xl"
        />
        <Container className="relative">
          <div className="max-w-3xl pb-16 lg:pb-20">
            <Reveal>
              <Eyebrow tone="light">Who we serve</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
                Eight audiences. One standard of clinical care.
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-cream/70">
                We proudly serve individuals, families, employers, healthcare
                providers, schools, churches, nonprofit organizations, and
                communities nationwide — with the same professionalism whether
                the group is ten people or five hundred.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Groups ------------------------------------------------------- */}
      <Section tone="cream" className="pt-16 sm:pt-20">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2">
            {groups.map((g, i) => (
              <li key={g.title}>
                <Reveal delay={i * 70} className="h-full">
                  <div className="group h-full rounded-xl border border-line bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_28px_60px_-34px_rgba(8,22,31,0.35)] sm:p-9">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-brand transition-colors duration-400 group-hover:bg-brand group-hover:text-white">
                      <g.icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h2 className="mt-6 text-[1.35rem] leading-snug">
                      {g.title}
                    </h2>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-slateink">
                      {g.body}
                    </p>
                    <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                      {g.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2.5 text-[0.875rem] text-ink/75"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/50"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Why it matters ---------------------------------------------- */}
      <Section tone="white">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Why it matters"
                title="Elevated risk, limited access."
                intro="Transportation professionals face elevated health risks due to long hours, sedentary work, and high-stress environments. Preventive screening is how organizations respond to that reality practically."
              />
              <ul className="mt-10 space-y-px overflow-hidden rounded-lg border border-line">
                {challenges.slice(0, 4).map((c, i) => (
                  <li key={c.title}>
                    <Reveal delay={i * 80}>
                      <div className="flex items-start gap-5 bg-white p-6 transition-colors duration-400 hover:bg-cream">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-brand">
                          <ServiceIcon name={c.icon} className="h-4 w-4" />
                        </span>
                        <div>
                          <h3 className="text-[1.0625rem]">{c.title}</h3>
                          <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-slateink">
                            {c.help}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={160} variant="blur">
                <div className="relative">
                  <ImageFrame
                    src={media.community.src}
                    alt={media.community.alt}
                    ratio="aspect-[4/5]"
                    className="rounded-lg"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-6 -right-6 -z-10 h-36 w-36 rounded-lg border border-brand/25"
                  />
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-8 text-[0.75rem] leading-relaxed text-slateink-400">
                  Representative imagery shown in this design prototype and will
                  be replaced with client-approved photography.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Audiences pill cloud ---------------------------------------- */}
      <Section tone="cream" className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow mr-2 text-brand">Audiences</span>
              {audiences.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-line bg-white px-4 py-2 text-[0.875rem] text-ink/80"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Services recap ---------------------------------------------- */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="What we deliver"
            title="Every service listed below can be tailored to your group."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Reveal delay={i * 70} className="h-full">
                  <div className="flex h-full flex-col rounded-xl border border-line bg-cream p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-brand">
                      <ServiceIcon name={s.icon} />
                    </span>
                    <h3 className="mt-6 text-[1.2rem]">{s.title}</h3>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-slateink">
                      {s.summary}
                    </p>
                    <div className="mt-6">
                      <ButtonLink
                        to={`/services/${s.slug}`}
                        variant="outline"
                        size="sm"
                        withArrow
                      >
                        Learn more
                      </ButtonLink>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Your organization"
        title="Tell us who you serve and we'll shape the event around them."
        secondaryLabel="See our services"
      />
    </>
  );
}
