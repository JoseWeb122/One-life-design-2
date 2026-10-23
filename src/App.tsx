import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import WhoWeServe from "@/pages/WhoWeServe";
import Faqs from "@/pages/Faqs";
import Contact from "@/pages/Contact";
import Consultation from "@/pages/Consultation";
import { Privacy, Terms } from "@/pages/Legal";
import NotFound from "@/pages/NotFound";
import { company, serviceBySlug } from "@/data/site";

const BASE_TITLE = `${company.name} | Mobile Preventive Health Screenings`;

const meta: Record<string, { title: string; description: string }> = {
  "/": {
    title: BASE_TITLE,
    description:
      "Mobile laboratory testing, on-site blood collection, and structured preventive health screening programs for transportation companies, employers, and community organizations. Houston, Texas.",
  },
  "/about": {
    title: `About the Firm | ${company.name}`,
    description:
      "Founded by healthcare professional Tremcia Roddy with more than 25 years of healthcare experience. Learn the story, mission, and principles behind One Life One Mile Consulting, Inc.",
  },
  "/services": {
    title: `Services | ${company.name}`,
    description:
      "Preventive health screening programs, mobile blood collection, comprehensive laboratory testing, corporate and occupational health, and confidential DNA testing.",
  },
  "/who-we-serve": {
    title: `Who We Serve | ${company.name}`,
    description:
      "We serve transportation and fleet operators, employers, churches, nonprofits, schools, healthcare providers, individuals, and families nationwide.",
  },
  "/faqs": {
    title: `Frequently Asked Questions | ${company.name}`,
    description:
      "Answers about the scope of our preventive screening services, scheduling lead times, nationwide coordination, and how pricing is determined.",
  },
  "/contact": {
    title: `Contact | ${company.name}`,
    description:
      "Send an inquiry about mobile health screenings, occupational health services, laboratory testing, or DNA testing. Based in Houston, Texas.",
  },
  "/consultation": {
    title: `Schedule a Consultation | ${company.name}`,
    description:
      "Plan a structured wellness screening program for your organization in three short steps.",
  },
  "/privacy": {
    title: `Privacy Policy | ${company.name}`,
    description:
      "How One Life One Mile Consulting, Inc. approaches privacy and the handling of participant information.",
  },
  "/terms": {
    title: `Terms of Service | ${company.name}`,
    description:
      "The general basis on which One Life One Mile Consulting, Inc. provides preventive screening and occupational health services.",
  },
};

function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const service = serviceBySlug(pathname.split("/").pop());
    let entry = meta[pathname];

    if (!entry && service && pathname.startsWith("/services/")) {
      entry = {
        title: `${service.title} | ${company.name}`,
        description: service.summary,
      };
    }
    if (!entry) entry = meta["/"];

    document.title = entry.title;
    let tag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = entry.description;
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <HashRouter>
      <RouteMeta />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
