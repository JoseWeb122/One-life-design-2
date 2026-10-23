import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FileText, Info } from "lucide-react";
import {
  ButtonLink,
  Container,
  Eyebrow,
  PrototypeNote,
  Reveal,
  Section,
} from "@/components/ui";
import { company } from "@/data/site";

function LegalShell({
  title,
  updated,
  sections,
  intro,
}: {
  title: string;
  updated: string;
  sections: { h: string; p: string[] }[];
  intro: string;
}) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${title} | ${company.name}`;
  }, [pathname, title]);

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28 text-cream sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="grain absolute inset-0 opacity-30" />
        <Container className="relative">
          <div className="max-w-3xl pb-14 lg:pb-16">
            <Reveal>
              <Eyebrow tone="light">Legal</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 text-[2.15rem] leading-[1.08] sm:text-[2.75rem] lg:text-[3rem]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-[0.9375rem] text-cream/60">
                Last updated: {updated}
              </p>
              <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-cream/70">
                {intro}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section tone="cream" className="pt-14 sm:pt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <PrototypeNote className="mb-8">
                <strong className="text-ink">Placeholder content.</strong> This
                page exists to complete the site structure. The wording below is
                a neutral framework for the client and their legal counsel to
                review, edit, and approve — it is not legal advice and has not
                been verified against the company&apos;s actual policies.
              </PrototypeNote>

              <div className="rounded-xl border border-line bg-white p-7 sm:p-10">
                {sections.map((s, i) => (
                  <Reveal key={s.h} delay={i * 50}>
                    <section
                      className={
                        i === 0
                          ? ""
                          : "mt-10 border-t border-line pt-10"
                      }
                    >
                      <h2 className="text-[1.35rem] leading-snug">{s.h}</h2>
                      {s.p.map((para) => (
                        <p
                          key={para.slice(0, 28)}
                          className="mt-4 text-[1rem] leading-relaxed text-slateink"
                        >
                          {para}
                        </p>
                      ))}
                    </section>
                  </Reveal>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <Reveal delay={120}>
                <div className="sticky top-24 rounded-xl border border-line bg-white p-7">
                  <FileText
                    aria-hidden="true"
                    className="h-5 w-5 text-brand"
                  />
                  <h2 className="mt-4 text-[1.15rem]">On this page</h2>
                  <nav aria-label="Section navigation">
                    <ol className="mt-4 space-y-2.5">
                      {sections.map((s, i) => (
                        <li
                          key={s.h}
                          className="flex gap-3 text-[0.875rem] leading-snug text-slateink"
                        >
                          <span className="text-slateink-400">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {s.h}
                        </li>
                      ))}
                    </ol>
                  </nav>
                  <div className="mt-7 border-t border-line pt-6">
                    <p className="flex items-start gap-2 text-[0.8125rem] leading-relaxed text-slateink">
                      <Info
                        aria-hidden="true"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand"
                      />
                      Questions about our services? Use the contact form.
                    </p>
                    <div className="mt-5">
                      <ButtonLink
                        to="/contact"
                        variant="outline"
                        size="sm"
                        withArrow
                      >
                        Contact us
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

export function Privacy() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="Prototype draft — pending client review"
      intro={`${company.name} respects the privacy of every individual who participates in a screening event or visits this website. This page outlines the principles we expect to follow once the policy is finalized.`}
      sections={[
        {
          h: "Scope of this policy",
          p: [
            "This policy is intended to describe how personal and health-related information is handled in connection with our preventive screening services, mobile blood collection, laboratory coordination, occupational health programs, and DNA testing services.",
            "This version is a structural placeholder prepared for the design prototype. It must be reviewed, amended, and approved by the company and its legal counsel before publication.",
          ],
        },
        {
          h: "Information we may collect",
          p: [
            "Depending on the service, this may include contact details, organizational details, scheduling information, and — where a screening or collection is performed — the health information necessary to deliver that service safely and accurately.",
          ],
        },
        {
          h: "How information may be used",
          p: [
            "To schedule and deliver requested services, to coordinate with laboratories and qualified independent third-party vendors, to document occupational health services where required, and to communicate with participants or organizers about results and next steps.",
          ],
        },
        {
          h: "HIPAA considerations",
          p: [
            "The company states that it operates in a HIPAA compliant manner. Protected health information should only be used or disclosed as permitted by applicable law, and participants should be provided with a Notice of Privacy Practices describing their rights.",
            "The specific text of that notice is not reproduced here and must be supplied by the company.",
          ],
        },
        {
          h: "Third-party providers",
          p: [
            "Certain laboratory and ultrasound services may be performed by qualified independent third-party vendors. Those providers operate independently and maintain their own compliance and privacy standards. Participants should be informed when a third party is involved.",
          ],
        },
        {
          h: "Website data",
          p: [
            "This website is currently a frontend design prototype. No form on this site transmits, stores, or processes personal information. Once a live submission endpoint, CRM, or email service is connected, the company's published privacy policy should describe exactly what is collected and why.",
          ],
        },
        {
          h: "Contacting the company",
          p: [
            `The company is based at ${company.address.line1}, ${company.address.line2}, ${company.address.city}, ${company.address.state} ${company.address.zip}. The existing website does not publish a telephone number or email address; verified contact details should be added here once confirmed.`,
          ],
        },
      ]}
    />
  );
}

export function Terms() {
  return (
    <LegalShell
      title="Terms of Service"
      updated="Prototype draft — pending client review"
      intro="These terms outline the general basis on which One Life One Mile Consulting, Inc. expects to provide its services. The wording below is a structural placeholder for client and legal review."
      sections={[
        {
          h: "Nature of our services",
          p: [
            "Our services are preventive screening services only. We do not provide medical diagnosis, treatment, or emergency care. Participation in a screening event is not a substitute for medical care, and participants are encouraged to consult their personal healthcare provider regarding any results.",
          ],
        },
        {
          h: "No emergency care",
          p: [
            "If you are experiencing a medical emergency, call 911 immediately. Our teams do not provide emergency response services.",
          ],
        },
        {
          h: "Scheduling and coordination",
          p: [
            "Corporate and community events require advance coordination. We recommend scheduling at least 3–4 weeks in advance where possible. All events are confirmed subject to scope, staffing availability, and location.",
          ],
        },
        {
          h: "Service area",
          p: [
            "We coordinate services across the United States depending on event scope and staffing availability. Availability for any specific location or date is confirmed at the time of scheduling.",
          ],
        },
        {
          h: "Pricing and quotes",
          p: [
            "Pricing is customized based on event size, services selected, staffing requirements, laboratory coordination, and location. Quotes are provided after consultation. Nothing on this website constitutes a fixed price or a binding offer.",
          ],
        },
        {
          h: "Third-party providers",
          p: [
            "Certain services — including DOT physicals and cardiac ultrasound screening, as well as certain laboratory and ultrasound services — may be provided through preferred or independent third-party partners. Those providers operate independently and maintain their own compliance standards.",
          ],
        },
        {
          h: "Prototype website",
          p: [
            "This website is a design prototype. Interactive elements are intended to demonstrate the intended user experience and may not reflect final functionality, content, or policies.",
          ],
        },
      ]}
    />
  );
}
