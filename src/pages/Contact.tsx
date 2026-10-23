import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import {
  Button,
  ButtonLink,
  Container,
  Eyebrow,
  Pill,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CtaBand, FaqAccordion } from "@/components/blocks";
import {
  CheckboxAgree,
  SelectInput,
  TextArea,
  TextInput,
  emailRe,
} from "@/components/form";
import { company, faqs, media } from "@/data/site";

type Errors = Partial<
  Record<
    | "name"
    | "email"
    | "organization"
    | "assistance"
    | "message"
    | "contactMethod"
    | "agree",
    string
  >
>;

const assistanceOptions = [
  { value: "preventive-screening-programs", label: "Preventive health screening program" },
  { value: "corporate-occupational-health", label: "Corporate / occupational health" },
  { value: "mobile-blood-collection", label: "Mobile blood collection" },
  { value: "laboratory-testing", label: "Laboratory testing" },
  { value: "dna-testing", label: "DNA testing" },
  { value: "community-event", label: "Community, church, or nonprofit event" },
  { value: "personal", label: "Personal lab work / individual service" },
  { value: "other", label: "Something else" },
];

const contactMethods = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "either", label: "Either is fine" },
];

function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-xl border border-line bg-white p-8 sm:p-12">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
        <CheckCircle2 className="h-7 w-7" />
      </span>
      <h2 className="mt-7 text-[1.75rem] leading-tight sm:text-[2rem]">
        Your inquiry form is complete.
      </h2>
      <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-slateink">
        This is a <strong className="text-ink">design prototype</strong>. Nothing
        has been transmitted, and no one at {company.shortName} has been
        notified. In the production build, this step submits your details to the
        firm&apos;s inbox or CRM so a team member can follow up.
      </p>

      <div className="mt-8 rounded-lg border border-line bg-cream p-6">
        <p className="eyebrow text-brand">Prototype status</p>
        <ul className="mt-4 space-y-2.5 text-[0.875rem] text-slateink">
          <li className="flex gap-2.5">
            <span className="text-brand">✓</span>
            Validation, error handling, and the confirmation state are fully
            functional.
          </li>
          <li className="flex gap-2.5">
            <span className="text-brand">✓</span>
            Field structure is ready to connect to a real backend, CRM, or email
            service.
          </li>
          <li className="flex gap-2.5">
            <span className="text-slateink-400">○</span>
            No live submission endpoint is configured.
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button variant="outline" onClick={onReset} withArrow={false}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Fill out another inquiry
        </Button>
        <ButtonLink to="/services" variant="outline" withArrow>
          Browse services
        </ButtonLink>
      </div>
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    organization: "",
    assistance: "",
    message: "",
    contactMethod: "",
  });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof values) => (v: string) =>
    setValues((s) => ({ ...s, [k]: v }));

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your full name.";
    if (!values.email.trim()) e.email = "Please enter your email address.";
    else if (!emailRe.test(values.email.trim()))
      e.email = "Please enter a valid email address, e.g. name@company.com.";
    if (!values.assistance)
      e.assistance = "Please select the type of assistance you need.";
    if (values.message.trim().length < 20)
      e.message = "Please describe your project or challenge in at least 20 characters.";
    if (!values.contactMethod)
      e.contactMethod = "Please choose a preferred contact method.";
    if (!agree) e.agree = "Please acknowledge the privacy notice to continue.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = document.querySelector<HTMLElement>("[aria-invalid='true'], [role='alert']");
      first?.focus?.();
      return;
    }
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("idle");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1400);
  };

  const simulateError = () => {
    setStatus("error");
    window.setTimeout(() => setStatus("idle"), 4000);
  };

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
              <Eyebrow tone="light">Contact</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
                Let&apos;s talk about what your team needs.
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-cream/70">
                Whether you are organizing a screening event for a fleet,
                planning a workplace wellness day, arranging a mobile blood
                draw, or ordering personal lab work — start here and we will
                scope it with you.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section tone="cream" className="pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <SuccessPanel
                  onReset={() => {
                    setSubmitted(false);
                    setValues({
                      name: "",
                      email: "",
                      organization: "",
                      assistance: "",
                      message: "",
                      contactMethod: "",
                    });
                    setAgree(false);
                    setErrors({});
                  }}
                />
              ) : (
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="rounded-xl border border-line bg-white p-7 sm:p-10"
                >
                  <Reveal>
                    <h2 className="text-[1.6rem] leading-tight sm:text-[1.85rem]">
                      Send an inquiry
                    </h2>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-slateink">
                      Fields marked{" "}
                      <span aria-hidden="true" className="text-brand">
                        *
                      </span>{" "}
                      are required.
                    </p>
                  </Reveal>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="mt-6 flex items-start gap-3 rounded-md border border-[#b4232a]/30 bg-[#b4232a]/[0.06] p-4"
                    >
                      <AlertTriangle
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#b4232a]"
                      />
                      <p className="text-[0.875rem] leading-relaxed text-ink/80">
                        This prototype cannot reach a live endpoint. Please try
                        again, or use the form as a demonstration of the
                        production experience.
                      </p>
                    </div>
                  )}

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <TextInput
                      label="Full name"
                      required
                      autoComplete="name"
                      placeholder="Jordan Rivera"
                      value={values.name}
                      onChange={(e) => set("name")(e.target.value)}
                      error={errors.name}
                    />
                    <TextInput
                      label="Email address"
                      required
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      value={values.email}
                      onChange={(e) => set("email")(e.target.value)}
                      error={errors.email}
                    />
                    <TextInput
                      label="Company or organization"
                      autoComplete="organization"
                      placeholder="Acme Freight LLC"
                      value={values.organization}
                      onChange={(e) => set("organization")(e.target.value)}
                      className="sm:col-span-2"
                    />
                    <SelectInput
                      label="Type of assistance required"
                      required
                      options={assistanceOptions}
                      value={values.assistance}
                      onChange={(e) => set("assistance")(e.target.value)}
                      error={errors.assistance}
                      className="sm:col-span-2"
                    />
                    <TextArea
                      label="Project or challenge"
                      required
                      hint="Headcount, locations, timing, and anything else that helps us scope it."
                      placeholder="We operate 140 drivers across three terminals and want to run a biometric screening day this quarter…"
                      value={values.message}
                      onChange={(e) => set("message")(e.target.value)}
                      error={errors.message}
                      className="sm:col-span-2"
                    />
                    <div className="sm:col-span-2">
                      <fieldset>
                        <legend className="mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink">
                          Preferred contact method
                          <span aria-hidden="true" className="ml-1 text-brand">
                            *
                          </span>
                        </legend>
                        <div className="flex flex-wrap gap-2.5">
                          {contactMethods.map((m) => (
                            <label
                              key={m.value}
                              className="cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="contactMethod"
                                value={m.value}
                                checked={values.contactMethod === m.value}
                                onChange={() => set("contactMethod")(m.value)}
                                className="sr-only"
                              />
                              <span
                                className={
                                  "inline-flex rounded-md border px-4 py-2 text-[0.875rem] transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/45 has-[:focus-visible]:ring-offset-2 " +
                                  (values.contactMethod === m.value
                                    ? "border-brand bg-brand/[0.06] font-medium text-brand"
                                    : "border-line bg-white text-ink/70 hover:border-ink/30")
                                }
                              >
                                {m.label}
                              </span>
                            </label>
                          ))}
                        </div>
                        {errors.contactMethod && (
                          <p
                            role="alert"
                            className="mt-2 text-[0.8125rem] font-medium text-[#b4232a]"
                          >
                            • {errors.contactMethod}
                          </p>
                        )}
                      </fieldset>
                    </div>

                    <div className="sm:col-span-2">
                      <CheckboxAgree
                        checked={agree}
                        onChange={setAgree}
                        error={errors.agree}
                      >
                        I understand that{" "}
                        <strong className="text-ink">
                          this form is part of a design prototype
                        </strong>{" "}
                        and will not be transmitted to{" "}
                        {company.shortName}. I have read the{" "}
                        <Link
                          to="/privacy"
                          className="font-medium text-brand underline decoration-brand/30 underline-offset-2 hover:decoration-brand"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </CheckboxAgree>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2
                            aria-hidden="true"
                            className="mr-2 h-4 w-4 animate-spin"
                          />
                          Sending…
                        </>
                      ) : (
                        "Send inquiry"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="md"
                      onClick={simulateError}
                      disabled={status === "submitting"}
                      className="border-line bg-transparent text-ink/60 hover:bg-cream hover:text-ink"
                    >
                      Preview failure state
                    </Button>
                  </div>
                  <p className="mt-5 text-[0.8125rem] leading-relaxed text-slateink-400">
                    Prototype note: submissions are simulated locally. No data
                    leaves your browser and nothing is stored or delivered to
                    the company.
                  </p>
                </form>
              )}
            </div>

            {/* Details */}
            <aside className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="rounded-xl border border-line bg-white p-7 sm:p-9">
                  <h2 className="text-[1.3rem]">Company details</h2>
                  <address className="mt-6 flex items-start gap-3 not-italic">
                    <MapPin
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                    />
                    <a
                      href={company.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.9375rem] leading-relaxed text-ink transition-colors hover:text-brand"
                    >
                      {company.address.line1}
                      <br />
                      {company.address.line2}
                      <br />
                      {company.address.city}, {company.address.state}{" "}
                      {company.address.zip}
                    </a>
                  </address>

                  <div className="mt-7 flex items-start gap-3 border-t border-line pt-6">
                    <Clock
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    />
                    <p className="text-[0.875rem] leading-relaxed text-slateink">
                      Corporate and community events require advance
                      coordination. We recommend scheduling at least{" "}
                      <strong className="text-ink">3–4 weeks in advance</strong>{" "}
                      when possible.
                    </p>
                  </div>

                  <div className="mt-7 flex items-start gap-3 border-t border-line pt-6">
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    />
                    <p className="text-[0.875rem] leading-relaxed text-slateink">
                      {company.compliance.join(" · ")}
                    </p>
                  </div>

                  <div className="mt-8 rounded-md border border-gold/35 bg-gold/[0.07] p-5">
                    <p className="text-[0.8125rem] leading-relaxed text-ink/75">
                      <strong className="text-ink">Not published:</strong> the
                      existing website does not list a telephone number or email
                      address, so none are shown here. Verified contact details
                      can be added before launch.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    <Pill>Houston, Texas</Pill>
                    <Pill>Nationwide coordination</Pill>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-6 overflow-hidden rounded-xl border border-line">
                  <ImageFrameLazy />
                </div>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-6 rounded-xl border border-line bg-white p-7">
                  <h2 className="text-[1.15rem]">Need something scheduled?</h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slateink">
                    Use the consultation request to share scope, headcount, and
                    timing — we will come back with a plan and a quote.
                  </p>
                  <div className="mt-6">
                    <ButtonLink to="/consultation" size="sm" withArrow>
                      Schedule a consultation
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Quick answers"
                title="Common questions before you write to us."
              />
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <FaqAccordion items={faqs.slice(0, 4)} />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Prefer to plan it out?"
        title="Walk through your program with us step by step."
        body="The consultation request takes about two minutes and covers scope, sites, and timing."
        primaryLabel="Schedule a Consultation"
        secondaryLabel="Explore services"
        image={media.consult.src}
      />
    </>
  );
}

function ImageFrameLazy() {
  return (
    <img
      src={media.lab.src}
      alt="A laboratory professional handling samples during processing."
      loading="lazy"
      decoding="async"
      className="aspect-[16/9] w-full object-cover duotone"
    />
  );
}
