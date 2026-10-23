/**
 * Central content layer for One Life One Mile Consulting, Inc.
 *
 * CONTENT SOURCING
 * All company facts below (services, founder, mission, address, compliance
 * statements, FAQs) were taken from the client's existing website,
 * olomconsulting.org, and are reproduced / lightly edited for clarity.
 *
 * Items flagged `placeholder: true` are NOT verified and are marked in the UI.
 * There are no testimonials, case studies, awards, phone numbers, email
 * addresses or social profiles on the source site, so none appear here.
 */

export const company = {
  name: "One Life One Mile Consulting, Inc.",
  shortName: "One Life One Mile",
  initials: "OLM",
  founder: "Tremcia Roddy",
  founderTitle: "Founder & Healthcare Professional",
  tagline: "Transforming Driver Well-Being. One Mile at a Time.",
  mission:
    "Providing innovative mobile healthcare solutions — one life, one mile at a time.",
  positioning:
    "Mobile preventive health screening programs for transportation professionals, employers, and community organizations.",
  description:
    "One Life One Mile Consulting, Inc. makes quality healthcare more accessible by bringing laboratory testing, mobile blood collection, and preventive health screenings directly to individuals, families, employers, and communities.",
  address: {
    line1: "13100 Wortham Center Dr",
    line2: "3rd Floor, Suite 310",
    city: "Houston",
    state: "Texas",
    zip: "77065",
    get full() {
      return `${this.line1}, ${this.line2}, ${this.city}, ${this.state} ${this.zip}`;
    },
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=13100+Wortham+Center+Dr+3rd+floor+suite+310,+Houston,+TX+77065",
  compliance: ["CLIA-waived testing", "HIPAA compliant", "OSHA compliant"],
  yearsExperience: "25+ years",
  serviceArea: "Houston-based · coordinating services nationwide",
  /* placeholder — the source site does not publish a phone number or email */
  contactPlaceholder: true,
};

export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  eyebrow: string;
  summary: string;
  need: string;
  outcome: string;
  image: string;
  imageAlt: string;
  icon: string;
  featured?: boolean;
  hero: string;
  intro: string[];
  audience: { title: string; body: string }[];
  approach: { step: string; title: string; body: string }[];
  goodToKnow: string[];
  partnerNote?: string;
};

export const services: Service[] = [
  {
    slug: "preventive-screening-programs",
    title: "Preventive Health Screening Programs",
    navLabel: "Screening Programs",
    eyebrow: "Our core offering",
    featured: true,
    icon: "HeartPulse",
    summary:
      "Structured, on-site screening events designed for transportation companies, fleet operators, employers, churches, and nonprofit organizations.",
    need: "Teams whose work schedules, routes, and job sites make routine preventive care difficult to access.",
    outcome:
      "A purposeful, well-organized screening event that surfaces early signals and gives participants clear information to take to their own healthcare provider.",
    image:
      "https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "A healthcare professional measuring a participant's blood pressure during an on-site preventive health screening.",
    hero: "Preventive health, brought to the yard, the depot, and the sanctuary.",
    intro: [
      "Transportation professionals face elevated health risks driven by long hours, sedentary work, irregular sleep, and high-stress environments. Most of them are not skipping checkups because they don't care — they are skipping them because a clinic appointment does not fit a route sheet.",
      "Our screening programs are built around that reality. We plan the event with you, bring the clinical team and equipment to your location, run an efficient screening flow that respects your operation's schedule, and close with clear, plain-language results and education for every participant.",
    ],
    audience: [
      {
        title: "Fleet & transportation operators",
        body: "Structured screening days for drivers, dispatchers, warehouse staff, and maintenance crews — planned around shift patterns and load schedules.",
      },
      {
        title: "Employers & HR leaders",
        body: "A workplace wellness event that is genuinely organized: clear logistics, defined participation windows, and consistent documentation.",
      },
      {
        title: "Churches & nonprofits",
        body: "Community screening events that make preventive health approachable and accessible for the people you already serve.",
      },
      {
        title: "Schools & community groups",
        body: "Education-forward events that pair screenings with practical wellness resources participants can actually use.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Scope the event",
        body: "We confirm your headcount, location, hours, and which screenings matter most for your population.",
      },
      {
        step: "02",
        title: "Design the flow",
        body: "Stations, staffing, and timing are mapped so participants move through quickly and your operation keeps running.",
      },
      {
        step: "03",
        title: "Deliver on-site",
        body: "Our clinical team arrives with equipment and supplies, sets up, and conducts the screenings at your site.",
      },
      {
        step: "04",
        title: "Close the loop",
        body: "Participants receive their results and education. Organizers receive a post-event summary to inform what comes next.",
      },
    ],
    goodToKnow: [
      "Screenings are preventive in nature — we do not diagnose, treat, or provide emergency care.",
      "Participants are encouraged to review results with their personal healthcare provider.",
      "Corporate and community events are coordinated in advance; we recommend scheduling 3–4 weeks ahead when possible.",
      "Pricing is customized based on event size, services selected, staffing, laboratory coordination, and location.",
    ],
  },
  {
    slug: "mobile-blood-collection",
    title: "Mobile Blood Collection",
    navLabel: "Mobile Blood Collection",
    eyebrow: "We come to you",
    icon: "Droplets",
    summary:
      "Professional mobile phlebotomy — blood collection performed at a home, office, community center, church, or job site.",
    need: "Patients and groups who need a draw but cannot easily get to a draw station.",
    outcome:
      "Specimens collected correctly and comfortably by experienced phlebotomists, without the waiting room.",
    image:
      "https://images.pexels.com/photos/5206977/pexels-photo-5206977.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "A gloved phlebotomist collecting a blood sample during a mobile blood collection visit.",
    hero: "A skilled phlebotomist, at your door, on your schedule.",
    intro: [
      "Blood collection is where convenience usually breaks down. Our mobile service removes the travel entirely: an experienced phlebotomist comes to the individual — at home, at the office, or at a community location — and performs the collection with professional, unhurried care.",
      "It is a simple idea with a large effect, particularly for clients with limited mobility, demanding work hours, or caregiving responsibilities.",
    ],
    audience: [
      {
        title: "Individuals & families",
        body: "In-home collections for clients who prefer privacy, have mobility limitations, or are coordinating care for a family member.",
      },
      {
        title: "Employers",
        body: "On-site collections for small groups without the overhead of a full screening event.",
      },
      {
        title: "Community & faith organizations",
        body: "A draw day hosted where your members already gather.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Confirm the order",
        body: "We review what is being collected and any preparation requirements before the visit is scheduled.",
      },
      {
        step: "02",
        title: "Schedule the visit",
        body: "A time and location are agreed that fit the client — not the other way around.",
      },
      {
        step: "03",
        title: "Collect on site",
        body: "Our phlebotomist performs the collection using proper technique, labeling, and handling.",
      },
      {
        step: "04",
        title: "Transport & coordinate",
        body: "Specimens are handled per protocol and coordinated with the laboratory for processing.",
      },
    ],
    goodToKnow: [
      "Our professionals focus on accurate collection and compassionate care.",
      "Laboratory processing may be performed by qualified independent third-party vendors who maintain their own compliance standards.",
      "Preparation instructions (for example, fasting) are confirmed before the appointment.",
    ],
  },
  {
    slug: "laboratory-testing",
    title: "Comprehensive Laboratory Testing",
    navLabel: "Laboratory Testing",
    eyebrow: "Broad access",
    icon: "FlaskConical",
    summary:
      "Access to hundreds of affordable lab tests without unnecessary delays, coordinated through our laboratory partners.",
    need: "People who want clear answers about their health without a long, expensive process to get them.",
    outcome:
      "A straightforward path from test selection to collection to results the client can discuss with their provider.",
    image:
      "https://images.pexels.com/photos/8540000/pexels-photo-8540000.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "A laboratory professional processing samples using a pipette and test tubes.",
    hero: "Hundreds of tests. One uncomplicated process.",
    intro: [
      "Laboratory testing should not require three phone calls and a month of waiting. We give clients access to a broad menu of lab tests, help them understand what they are ordering, and coordinate collection so the process moves.",
      "Whether a client is ordering personal lab work or an organization is arranging testing for a group, the experience is the same: clear options, professional collection, and results delivered for follow-up.",
    ],
    audience: [
      {
        title: "Individuals",
        body: "Personal lab work ordered directly, with guidance on what each panel measures.",
      },
      {
        title: "Employers & programs",
        body: "Group testing coordinated as part of a wellness or occupational health program.",
      },
      {
        title: "Providers & community partners",
        body: "Collection and coordination support for organizations serving their own populations.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Select the tests",
        body: "We walk through the available options and confirm what is appropriate for the client's goal.",
      },
      {
        step: "02",
        title: "Coordinate the draw",
        body: "Collection is scheduled at our location or on site through our mobile team.",
      },
      {
        step: "03",
        title: "Process & report",
        body: "Specimens are handled per protocol and results are returned for the client's follow-up.",
      },
    ],
    goodToKnow: [
      "Testing is CLIA-waived where applicable.",
      "Certain laboratory services may be performed by qualified independent third-party vendors who operate independently and maintain their own compliance standards.",
      "We do not provide medical diagnosis or treatment. Clients are encouraged to review results with their healthcare provider.",
    ],
  },
  {
    slug: "corporate-occupational-health",
    title: "Corporate & Occupational Health",
    navLabel: "Corporate & Occupational",
    eyebrow: "For employers",
    icon: "Building2",
    summary:
      "Customized wellness programs, drug testing, biometric screenings, employee health services, and DOT physicals.",
    need: "Organizations that must meet health and safety requirements while keeping their workforce well.",
    outcome:
      "Workforce health services delivered on site and organized around your compliance calendar and operating schedule.",
    image:
      "https://images.pexels.com/photos/7580651/pexels-photo-7580651.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "A professional team reviewing documents together in a modern office during program planning.",
    hero: "Workforce health services built around your compliance calendar.",
    intro: [
      "Employers in transportation and logistics carry real health and safety obligations — and a workforce whose schedules make conventional healthcare hard to reach. We design occupational health services that satisfy both: compliant, documented, and delivered where the work happens.",
      "Programs are scoped individually. Some clients need recurring drug testing; others need an annual biometric screening day or coordinated DOT physicals. We build the schedule around what your operation actually requires.",
    ],
    audience: [
      {
        title: "Fleet & safety managers",
        body: "Drug testing, biometric screenings, and coordinated DOT physicals aligned to your compliance calendar.",
      },
      {
        title: "HR & people leaders",
        body: "Wellness programming that gives employees convenient access without disrupting operations.",
      },
      {
        title: "Multi-site operations",
        body: "Coordinated delivery across locations depending on event scope and staffing availability.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Review requirements",
        body: "We map the services, volumes, sites, and timing your program calls for.",
      },
      {
        step: "02",
        title: "Build the schedule",
        body: "Delivery is planned around shifts, routes, and site access so coverage is maintained.",
      },
      {
        step: "03",
        title: "Deliver & document",
        body: "Services are performed on site and documented consistently for your records.",
      },
      {
        step: "04",
        title: "Review & repeat",
        body: "We debrief after each cycle and adjust the next round based on what worked.",
      },
    ],
    goodToKnow: [
      "DOT physicals and cardiac ultrasound screening are provided through our preferred partners.",
      "Drug testing, biometric screenings, and employee health services are customized per program.",
      "We coordinate services across the United States depending on event scope and staffing availability.",
      "Quotes are provided after consultation.",
    ],
    partnerNote:
      "DOT physicals and cardiac ultrasound screening are provided through our preferred partners.",
  },
  {
    slug: "dna-testing",
    title: "DNA Testing Services",
    navLabel: "DNA Testing",
    eyebrow: "Confidential",
    icon: "Dna",
    summary:
      "Confidential, reliable DNA testing for personal, legal, and immigration needs — handled with discretion.",
    need: "Families and individuals navigating sensitive questions who need a dependable, respectful process.",
    outcome:
      "A clear, private testing pathway with professional collection and reliable handling.",
    image:
      "https://images.pexels.com/photos/8940509/pexels-photo-8940509.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "A laboratory technician working carefully with samples in a laboratory setting.",
    hero: "Answers handled with care, privacy, and precision.",
    intro: [
      "DNA testing is rarely just a lab order. It usually arrives alongside a family decision, a legal matter, or an immigration process — and it deserves discretion as much as accuracy.",
      "We coordinate testing for personal, legal, and immigration purposes, manage collection professionally, and keep the process clear and private from the first conversation to the return of results.",
    ],
    audience: [
      {
        title: "Individuals & families",
        body: "Personal relationship testing handled privately and explained in plain language.",
      },
      {
        title: "Legal matters",
        body: "Testing coordinated for legal purposes with attention to proper collection and documentation.",
      },
      {
        title: "Immigration cases",
        body: "DNA testing coordinated to support immigration documentation requirements.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Understand the purpose",
        body: "We confirm the reason for testing, since personal, legal, and immigration cases have different requirements.",
      },
      {
        step: "02",
        title: "Schedule collection",
        body: "Collection is arranged for all parties with clear instructions on identification and preparation.",
      },
      {
        step: "03",
        title: "Process discreetly",
        body: "Samples are handled per protocol and results are returned through the appropriate channel.",
      },
    ],
    goodToKnow: [
      "Testing is confidential. We treat sensitivity as part of the service, not an add-on.",
      "Requirements differ between personal, legal, and immigration testing — we confirm which applies before scheduling.",
      "Laboratory analysis may be performed by qualified independent third-party vendors.",
    ],
  },
];

export const serviceBySlug = (slug?: string) =>
  services.find((s) => s.slug === slug);

export const challenges = [
  {
    icon: "Route",
    title: "Healthcare that doesn't fit the schedule",
    body: "Long hours, unpredictable routes, and shift work mean a clinic appointment is often the first thing that gets dropped — not because anyone doesn't care.",
    help: "We bring the clinical team to your yard, depot, office, or community location, and plan the screening flow around your operating schedule.",
  },
  {
    icon: "ShieldCheck",
    title: "Compliance pressure without added admin load",
    body: "Drug testing, biometric screenings, and DOT physicals all carry documentation requirements — and coordinating them across sites is real work.",
    help: "We scope the requirement, schedule delivery on site, and document consistently so your records stay clean and your team stays covered.",
  },
  {
    icon: "Users",
    title: "Communities that are underserved",
    body: "Congregations, nonprofits, and community groups serve people who rarely get preventive care until something is already wrong.",
    help: "We design approachable community screening events that pair testing with plain-language education and clear next steps.",
  },
  {
    icon: "Activity",
    title: "Problems found too late",
    body: "Hypertension, diabetes, and cardiovascular risk are quiet for years. By the time symptoms appear, options are narrower and costs are higher.",
    help: "Structured screening surfaces early signals while there is still time to act — and every participant leaves knowing what their numbers mean.",
  },
];

export const audiences = [
  "Transportation & fleet operators",
  "Employers & HR teams",
  "Churches",
  "Nonprofit organizations",
  "Schools",
  "Healthcare providers",
  "Individuals & families",
  "Community groups",
];

export const values = [
  {
    title: "Accessibility",
    body: "Quality healthcare should not depend on whether you can get to a clinic during business hours. We remove the distance.",
  },
  {
    title: "Clinical professionalism",
    body: "Experienced healthcare professionals, proper technique, and consistent handling on every visit — no exceptions.",
  },
  {
    title: "Regulatory awareness",
    body: "CLIA-waived testing with HIPAA and OSHA compliant practice built into how we work, not bolted on afterward.",
  },
  {
    title: "Operational efficiency",
    body: "Screening events are planned like operations, because they are. Clear logistics. Defined timing. No wasted hours.",
  },
  {
    title: "Early detection",
    body: "We believe education and proactive care improve lives and strengthen communities. Finding it early changes the conversation.",
  },
  {
    title: "Compassion",
    body: "Behind every sample is a person. Care is delivered with integrity, patience, and respect.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We learn your goals, your population, and your constraints — headcount, locations, hours, and the requirements you already carry.",
  },
  {
    step: "02",
    title: "Assess",
    body: "We identify which screenings and services are relevant, what can be delivered directly, and where preferred partners are involved.",
  },
  {
    step: "03",
    title: "Develop",
    body: "You receive a tailored event or program plan: services, stations, staffing, timing, and a customized quote.",
  },
  {
    step: "04",
    title: "Move forward",
    body: "We deliver on site, handle the clinical work, and close with results, education, and a debrief that shapes the next cycle.",
  },
];

export const faqs = [
  {
    q: "Are your services medical treatment?",
    a: "No. Our services are preventive screening services only. We do not provide medical diagnosis, treatment, or emergency care. Participants are encouraged to consult their personal healthcare provider regarding results.",
  },
  {
    q: "Do you provide emergency services?",
    a: "No. If you are experiencing a medical emergency, call 911 immediately.",
  },
  {
    q: "Are laboratory and ultrasound services performed by your company?",
    a: "Certain services may be performed by qualified independent third-party vendors. Those providers operate independently and maintain their own compliance standards.",
  },
  {
    q: "How far in advance should we schedule an event?",
    a: "Corporate and community events require advance coordination. We recommend scheduling at least 3–4 weeks in advance when possible.",
  },
  {
    q: "Do you offer nationwide services?",
    a: "Yes. We coordinate services across the United States depending on event scope and staffing availability.",
  },
  {
    q: "How is pricing determined?",
    a: "Pricing is customized based on event size, services selected, staffing requirements, laboratory coordination, and location. Quotes are provided after consultation.",
  },
];

/** Imagery used across the site. All are replaceable stock photographs. */
export const media = {
  heroPrimary: {
    src: "https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "A healthcare professional measuring a participant's blood pressure during an on-site health screening.",
  },
  heroInset: {
    src: "https://images.pexels.com/photos/2800121/pexels-photo-2800121.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Aerial view of semi trucks parked at a transportation logistics facility.",
  },
  fleet: {
    src: "https://images.pexels.com/photos/2348359/pexels-photo-2348359.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "A row of commercial semi trucks parked at a fleet terminal.",
  },
  team: {
    src: "https://images.pexels.com/photos/6129506/pexels-photo-6129506.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "A healthcare professional in scrubs, representative of the One Life One Mile clinical team.",
  },
  community: {
    src: "https://images.pexels.com/photos/7345446/pexels-photo-7345446.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "A healthcare volunteer checking an older adult's blood pressure in a home setting.",
  },
  consult: {
    src: "https://images.pexels.com/photos/7845382/pexels-photo-7845382.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Two professionals discussing program planning documents in an office.",
  },
  lab: {
    src: "https://images.pexels.com/photos/7231757/pexels-photo-7231757.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "A laboratory professional working with samples and test tubes.",
  },
  trucksDark: {
    src: "https://images.pexels.com/photos/30536324/pexels-photo-30536324.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "A lineup of semi trucks photographed outdoors.",
  },
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: services.map((s) => ({
      label: s.navLabel,
      to: `/services/${s.slug}`,
      desc: s.summary,
    })),
  },
  { label: "Who We Serve", to: "/who-we-serve" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];
