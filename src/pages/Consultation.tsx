import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
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
} from "@/components/ui";
import {
  CheckboxAgree,
  RadioCards,
  SelectInput,
  TextArea,
  TextInput,
  emailRe,
} from "@/components/form";
import { company, media, services } from "@/data/site";
import { cn } from "@/utils/cn";

type Data = {
  org: string;
  name: string;
  email: string;
  role: string;
  service: string;
  people: string;
  sites: string;
  timing: string;
  notes: string;
  agree: boolean;
};

const empty: Data = {
  org: "",
  name: "",
  email: "",
  role: "",
  service: "",
  people: "",
  sites: "",
  timing: "",
  notes: "",
  agree: false,
};

const steps = [
  {
    id: 1,
    title: "Your details",
    blurb: "Who we're speaking with.",
  },
  {
    id: 2,
    title: "Scope of work",
    blurb: "What you need and at what scale.",
  },
  {
    id: 3,
    title: "Review & send",
    blurb: "Confirm and submit your request.",
  },
];

const serviceOptions = services.map((s) => ({
  value: s.slug,
  label: s.title,
}));

const sizeOptions = [
  { value: "1-10", label: "1–10 people" },
  { value: "11-50", label: "11–50 people" },
  { value: "51-150", label: "51–150 people" },
  { value: "151-500", label: "151–500 people" },
  { value: "500+", label: "More than 500" },
];

const timingOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-month", label: "Within the next month" },
  { value: "1-3-months", label: "In 1–3 months" },
  { value: "exploring", label: "Still exploring options" },
];

export default function Consultation() {
  const [data, setData] = useState<Data>(empty);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting">("idle");
  const [done, setDone] = useState(false);

  const set = <K extends keyof Data>(k: K, v: Data[K]) => {
    setData((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const progress = useMemo(() => (done ? 100 : ((step - 1) / 3) * 100), [step, done]);

  const validateStep = (s: number) => {
    const e: Partial<Record<keyof Data, string>> = {};
    if (s === 1) {
      if (!data.name.trim()) e.name = "Please enter your full name.";
      if (!data.email.trim()) e.email = "Please enter your email address.";
      else if (!emailRe.test(data.email.trim()))
        e.email = "Please enter a valid email address, e.g. name@company.com.";
      if (!data.role.trim()) e.role = "Please tell us your role.";
    }
    if (s === 2) {
      if (!data.service) e.service = "Please choose the service you're interested in.";
      if (!data.people) e.people = "Please select an approximate group size.";
      if (!data.sites.trim()) e.sites = "Please list the city or site(s) involved.";
      if (!data.timing) e.timing = "Please select a rough timeline.";
    }
    if (s === 3) {
      if (!data.agree) e.agree = "Please acknowledge the prototype notice to continue.";
    }
    return e;
  };

  const next = () => {
    const e = validateStep(step);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStep((s) => Math.min(3, s + 1));
    window.scrollTo({ top: 260, behavior: "smooth" });
  };

  const back = () => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 260, behavior: "smooth" });
  };

  const submit = () => {
    const e = validateStep(3);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("idle");
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28 text-cream sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="grain absolute inset-0 opacity-30" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 top-10 h-[26rem] w-[26rem] rounded-full bg-brand/18 blur-3xl"
        />
        <Container className="relative">
          <div className="grid items-end gap-12 pb-14 lg:grid-cols-12 lg:pb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="light">Consultation</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-6 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
                  Plan a screening program in three short steps.
                </h1>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-cream/70">
                  Tell us who you are, what you need, and when you need it. We
                  will respond with a tailored plan and a customized quote —
                  pricing is set after consultation.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <div className="mt-9 flex flex-wrap gap-2">
                  <Pill tone="dark">No obligation</Pill>
                  <Pill tone="dark">Customized quote</Pill>
                  <Pill tone="dark">Plan ahead: 3–4 weeks</Pill>
                </div>
              </Reveal>
            </div>
            <Reveal delay={220} variant="blur" className="hidden lg:col-span-5 lg:block">
              <div className="rounded-xl border border-cream/12 bg-cream/[0.04] p-7">
                <CalendarCheck
                  aria-hidden="true"
                  className="h-6 w-6 text-brand-300"
                />
                <h2 className="mt-5 text-[1.25rem] text-cream">
                  What happens after you send it
                </h2>
                <ol className="mt-6 space-y-4">
                  {[
                    "We review your scope and confirm what can be delivered directly.",
                    "We come back with questions on headcount, sites, and timing.",
                    "You receive a tailored plan and a customized quote.",
                  ].map((t, i) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-300/20 text-[0.6875rem] font-semibold text-brand-300">
                        {i + 1}
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-cream/65">
                        {t}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section tone="cream" className="pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              {done ? (
                <div className="rounded-xl border border-line bg-white p-8 sm:p-12">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h2 className="mt-7 text-[1.75rem] leading-tight sm:text-[2rem]">
                    Consultation request captured.
                  </h2>
                  <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-slateink">
                    This is a <strong className="text-ink">frontend prototype</strong>
                    . Your request has not been sent and no meeting has been
                    booked. In production, this step hands off to the firm&apos;s
                    scheduling or CRM system and confirms a real appointment.
                  </p>

                  <div className="mt-8 overflow-hidden rounded-lg border border-line">
                    <div className="bg-cream px-6 py-4">
                      <p className="eyebrow text-brand">Summary you entered</p>
                    </div>
                    <dl className="divide-y divide-line">
                      {[
                        ["Organization", data.org || "—"],
                        ["Contact", `${data.name} · ${data.role}`],
                        ["Email", data.email],
                        ["Service", serviceOptions.find((s) => s.value === data.service)?.label ?? "—"],
                        ["Group size", sizeOptions.find((s) => s.value === data.people)?.label ?? "—"],
                        ["Location(s)", data.sites],
                        ["Timeline", timingOptions.find((s) => s.value === data.timing)?.label ?? "—"],
                        ["Notes", data.notes || "—"],
                      ].map(([k, v]) => (
                        <div
                          key={k}
                          className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-6"
                        >
                          <dt className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-slateink">
                            {k}
                          </dt>
                          <dd className="text-[0.9375rem] text-ink sm:col-span-2">
                            {v}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      withArrow={false}
                      onClick={() => {
                        setDone(false);
                        setData(empty);
                        setStep(1);
                      }}
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Start a new request
                    </Button>
                    <ButtonLink to="/services" variant="outline" withArrow>
                      Explore services
                    </ButtonLink>
                  </div>
                </div>
              ) : (
                <div className="overflow-hidden rounded-xl border border-line bg-white">
                  {/* Progress */}
                  <div className="border-b border-line bg-cream/60 px-7 py-6 sm:px-10">
                    <div className="flex items-center justify-between gap-4">
                      {steps.map((s) => {
                        const active = s.id === step;
                        const complete = s.id < step;
                        return (
                          <div
                            key={s.id}
                            className="flex min-w-0 flex-1 items-center gap-3"
                          >
                            <span
                              aria-hidden="true"
                              className={cn(
                                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[0.8125rem] font-semibold transition-colors duration-300",
                                complete
                                  ? "border-brand bg-brand text-white"
                                  : active
                                    ? "border-ink bg-ink text-cream"
                                    : "border-line bg-white text-slateink",
                              )}
                            >
                              {complete ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                s.id
                              )}
                            </span>
                            <span className="hidden min-w-0 sm:block">
                              <span
                                className={cn(
                                  "block truncate text-[0.875rem] font-medium",
                                  active ? "text-ink" : "text-slateink",
                                )}
                              >
                                {s.title}
                              </span>
                              <span className="block truncate text-[0.75rem] text-slateink-400">
                                {s.blurb}
                              </span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div
                      className="mt-5 h-1 w-full overflow-hidden rounded-full bg-line"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Math.round(progress)}
                      aria-label="Consultation request progress"
                    >
                      <div
                        className="h-full rounded-full bg-brand transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{ width: `${Math.max(progress, 6)}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-7 sm:p-10">
                    {step === 1 && (
                      <div className="grid gap-6">
                        <h2 className="text-[1.5rem] leading-tight">
                          Who are we speaking with?
                        </h2>
                        <TextInput
                          label="Full name"
                          required
                          autoComplete="name"
                          placeholder="Jordan Rivera"
                          value={data.name}
                          onChange={(e) => set("name", e.target.value)}
                          error={errors.name}
                        />
                        <TextInput
                          label="Work email"
                          required
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="name@company.com"
                          value={data.email}
                          onChange={(e) => set("email", e.target.value)}
                          error={errors.email}
                        />
                        <TextInput
                          label="Company or organization"
                          autoComplete="organization"
                          placeholder="Acme Freight LLC"
                          value={data.org}
                          onChange={(e) => set("org", e.target.value)}
                        />
                        <TextInput
                          label="Your role"
                          required
                          placeholder="Safety & Compliance Manager"
                          value={data.role}
                          onChange={(e) => set("role", e.target.value)}
                          error={errors.role}
                        />
                      </div>
                    )}

                    {step === 2 && (
                      <div className="grid gap-6">
                        <h2 className="text-[1.5rem] leading-tight">
                          What do you need?
                        </h2>
                        <SelectInput
                          label="Primary service"
                          required
                          options={serviceOptions}
                          value={data.service}
                          onChange={(e) => set("service", e.target.value)}
                          error={errors.service}
                        />
                        <div>
                          <RadioCards
                            legend="Approximate group size"
                            name="people"
                            options={sizeOptions}
                            value={data.people}
                            onChange={(v) => set("people", v)}
                            error={errors.people}
                            columns={3}
                          />
                        </div>
                        <TextInput
                          label="City or site(s)"
                          required
                          hint="Where would the screening or collection take place?"
                          placeholder="Houston, TX — two terminals"
                          value={data.sites}
                          onChange={(e) => set("sites", e.target.value)}
                          error={errors.sites}
                        />
                        <div>
                          <RadioCards
                            legend="Rough timeline"
                            name="timing"
                            options={timingOptions}
                            value={data.timing}
                            onChange={(v) => set("timing", v)}
                            error={errors.timing}
                            columns={2}
                          />
                        </div>
                        <TextArea
                          label="Anything else we should know"
                          hint="Compliance deadlines, shift patterns, access requirements, prior events."
                          placeholder="DOT physicals are due for 40 drivers by the end of Q3…"
                          value={data.notes}
                          onChange={(e) => set("notes", e.target.value)}
                        />
                      </div>
                    )}

                    {step === 3 && (
                      <div className="grid gap-6">
                        <h2 className="text-[1.5rem] leading-tight">
                          Review your request
                        </h2>
                        <dl className="divide-y divide-line overflow-hidden rounded-lg border border-line">
                          {[
                            ["Contact", `${data.name} · ${data.role}`],
                            ["Email", data.email],
                            ["Organization", data.org || "—"],
                            ["Service", serviceOptions.find((s) => s.value === data.service)?.label ?? "—"],
                            ["Group size", sizeOptions.find((s) => s.value === data.people)?.label ?? "—"],
                            ["Location(s)", data.sites],
                            ["Timeline", timingOptions.find((s) => s.value === data.timing)?.label ?? "—"],
                          ].map(([k, v]) => (
                            <div
                              key={k}
                              className="grid gap-1 px-5 py-3.5 sm:grid-cols-3 sm:gap-6"
                            >
                              <dt className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-slateink">
                                {k}
                              </dt>
                              <dd className="text-[0.9375rem] text-ink sm:col-span-2">
                                {v}
                              </dd>
                            </div>
                          ))}
                        </dl>

                        <CheckboxAgree
                          checked={data.agree}
                          onChange={(v) => set("agree", v)}
                          error={errors.agree}
                        >
                          I understand this is a{" "}
                          <strong className="text-ink">
                            design prototype
                          </strong>
                          . No request is transmitted, no meeting is booked, and
                          no data is stored. I have read the{" "}
                          <a
                            href="#/privacy"
                            className="font-medium text-brand underline decoration-brand/30 underline-offset-2"
                          >
                            Privacy Policy
                          </a>
                          .
                        </CheckboxAgree>
                      </div>
                    )}

                    {/* Controls */}
                    <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-line pt-7">
                      {step > 1 && (
                        <Button
                          variant="outline"
                          withArrow={false}
                          onClick={back}
                          disabled={status === "submitting"}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                      )}
                      {step < 3 ? (
                        <Button onClick={next} size="md">
                          Continue
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          onClick={submit}
                          size="lg"
                          disabled={status === "submitting"}
                        >
                          {status === "submitting" ? (
                            <>
                              <Loader2
                                aria-hidden="true"
                                className="mr-2 h-4 w-4 animate-spin"
                              />
                              Sending request…
                            </>
                          ) : (
                            "Send consultation request"
                          )}
                        </Button>
                      )}
                      <p className="flex items-center gap-2 text-[0.8125rem] text-slateink-400">
                        <ClipboardList className="h-3.5 w-3.5" />
                        Step {step} of 3
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Side rail */}
            <aside className="lg:col-span-4">
              <Reveal delay={120}>
                <div className="rounded-xl border border-line bg-white p-7">
                  <h2 className="text-[1.15rem]">Prefer to talk first?</h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slateink">
                    Send a general inquiry instead and we will set up a
                    conversation at a time that suits your schedule.
                  </p>
                  <div className="mt-6">
                    <ButtonLink to="/contact" variant="outline" size="sm" withArrow>
                      Go to contact page
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-6 rounded-xl border border-line bg-white p-7">
                  <h2 className="text-[1.15rem]">Planning tips</h2>
                  <ul className="mt-5 space-y-4">
                    {[
                      "Book 3–4 weeks ahead where possible — corporate and community events require advance coordination.",
                      "Have approximate headcount and shift windows ready; it shapes staffing and station flow.",
                      "Note any compliance deadlines so we can sequence testing and physicals correctly.",
                      "Pricing depends on event size, services selected, staffing, laboratory coordination, and location.",
                    ].map((t) => (
                      <li key={t.slice(0, 24)} className="flex gap-3">
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                        />
                        <span className="text-[0.875rem] leading-relaxed text-slateink">
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-6 overflow-hidden rounded-xl border border-line">
                  <img
                    src={media.community.src}
                    alt={media.community.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover duotone"
                  />
                </div>
              </Reveal>

              <Reveal delay={300}>
                <address className="mt-6 flex items-start gap-3 rounded-xl border border-line bg-white p-6 not-italic">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                  />
                  <span className="text-[0.875rem] leading-relaxed text-slateink">
                    {company.address.line1}, {company.address.line2},{" "}
                    {company.address.city}, {company.address.state}{" "}
                    {company.address.zip}
                  </span>
                </address>
              </Reveal>

              <p className="mt-6 flex items-center gap-2 text-[0.75rem] text-slateink-400">
                <ShieldCheck className="h-3.5 w-3.5 text-brand" />
                {company.compliance.join(" · ")}
              </p>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
