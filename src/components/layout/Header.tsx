import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Logo, LogoMark } from "@/components/Logo";
import { ButtonLink, Container } from "@/components/ui";
import { company, nav } from "@/data/site";
import { cn } from "@/utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  // Interior pages open on a dark (ink) hero, so the floating header needs a
  // light treatment until the user scrolls into the page body.
  const onDarkHero = location.pathname !== "/" && !scrolled && !mobileOpen;

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative text-[0.875rem] font-medium tracking-tight transition-colors duration-300",
      onDarkHero
        ? isActive
          ? "text-brand-300"
          : "text-cream/70 hover:text-cream"
        : isActive
          ? "text-brand"
          : "text-ink/70 hover:text-ink",
    );

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled || mobileOpen
            ? "border-b border-line/80 bg-cream/92 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container>
          <div
            className={cn(
              "flex items-center justify-between gap-6 transition-all duration-500",
              scrolled ? "h-16" : "h-20",
            )}
          >
            <Logo tone={onDarkHero ? "light" : "dark"} />

            {/* Desktop nav */}
            <nav
              aria-label="Primary"
              className="hidden items-center gap-8 lg:flex"
            >
              {nav.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesOpen((v) => !v)}
                      className={cn(
                        "flex items-center gap-1.5 text-[0.875rem] font-medium tracking-tight transition-colors duration-300",
                        onDarkHero
                          ? isServicesActive
                            ? "text-brand-300"
                            : "text-cream/70 hover:text-cream"
                          : isServicesActive
                            ? "text-brand"
                            : "text-ink/70 hover:text-ink",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        servicesOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1.5 opacity-0",
                      )}
                    >
                      <div className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_28px_60px_-28px_rgba(8,22,31,0.35)]">
                        <ul className="p-2">
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <NavLink
                                to={child.to}
                                className="group flex items-start gap-3 rounded-md px-3.5 py-3 transition-colors duration-200 hover:bg-cream"
                              >
                                <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/40 transition-colors duration-200 group-hover:bg-brand" />
                                <span>
                                  <span className="block text-[0.875rem] font-medium text-ink">
                                    {child.label}
                                  </span>
                                  <span className="mt-0.5 block text-[0.8125rem] leading-snug text-slateink">
                                    {child.desc}
                                  </span>
                                </span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={item.to}
                          className="flex items-center justify-between border-t border-line bg-cream/70 px-5 py-3.5 text-[0.8125rem] font-medium text-ink transition-colors hover:bg-cream"
                        >
                          All services overview
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink key={item.to} to={item.to} className={linkCls}>
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <ButtonLink
                to="/consultation"
                size="sm"
                variant={onDarkHero ? "light" : "primary"}
              >
                Schedule a Consultation
              </ButtonLink>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={cn(
                "relative z-50 flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
                onDarkHero
                  ? "border-cream/25 bg-cream/10 text-cream hover:bg-cream/20"
                  : "border-line bg-white/70 text-ink hover:bg-white",
              )}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-400",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-0 top-0 max-h-[92vh] overflow-y-auto rounded-b-2xl bg-cream pb-8 pt-24 shadow-[0_30px_60px_-20px_rgba(8,22,31,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            mobileOpen ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <Container>
            <nav aria-label="Mobile">
              <ul className="divide-y divide-line/70">
                {nav.map((item) =>
                  item.children ? (
                    <li key={item.label} className="py-1">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                        className="flex w-full items-center justify-between py-4 text-left font-display text-[1.35rem] text-ink"
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "h-4 w-4 text-slateink transition-transform duration-300",
                            mobileServicesOpen && "rotate-180",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          mobileServicesOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <ul className="pb-3">
                            <li>
                              <Link
                                to={item.to}
                                className="block py-2.5 pl-1 text-[0.9375rem] font-medium text-brand"
                              >
                                Services overview
                              </Link>
                            </li>
                            {item.children.map((c) => (
                              <li key={c.to}>
                                <Link
                                  to={c.to}
                                  className="block py-2.5 pl-1 text-[0.9375rem] text-ink/75"
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        className="block py-4 font-display text-[1.35rem] text-ink"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <div className="mt-7 flex flex-col gap-3">
              <ButtonLink to="/consultation" size="lg" withArrow>
                Schedule a Consultation
              </ButtonLink>
              <p className="flex items-start gap-2.5 pt-2 text-[0.8125rem] leading-relaxed text-slateink">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  {company.address.line1}, {company.address.line2},{" "}
                  {company.address.city}, {company.address.state}{" "}
                  {company.address.zip}
                </span>
              </p>
            </div>

            <div className="mt-7 flex items-center gap-3 border-t border-line pt-6">
              <LogoMark tone="dark" className="h-8 w-8" />
              <p className="text-[0.75rem] leading-snug text-slateink">
                {company.tagline}
              </p>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
