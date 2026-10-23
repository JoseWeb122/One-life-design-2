import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

export function Container({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return createElement(
    as,
    { className: cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className) },
    children,
  );
}

export function Section({
  children,
  className,
  id,
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "white" | "ink" | "brand" | "none";
}) {
  const tones: Record<string, string> = {
    cream: "bg-cream",
    white: "bg-white",
    ink: "bg-ink text-cream",
    brand: "bg-brand text-white",
    none: "",
  };
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-28 lg:py-32",
        tones[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Motion — IntersectionObserver based scroll reveal                   */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "blur";
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: cn(
        variant === "blur" ? "reveal-blur" : "reveal",
        visible && "is-visible",
        className,
      ),
      style: { transitionDelay: `${delay}ms` },
    },
    children,
  );
}

/* ------------------------------------------------------------------ */
/* Type                                                                */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  className,
  tone = "brand",
}: {
  children: ReactNode;
  className?: string;
  tone?: "brand" | "light" | "gold";
}) {
  const tones = {
    brand: "text-brand",
    light: "text-brand-300",
    gold: "text-gold",
  };
  return (
    <p className={cn("eyebrow flex items-center gap-3", tones[tone], className)}>
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-8 shrink-0",
          tone === "light" ? "bg-brand-300/60" : "bg-current opacity-50",
        )}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
  level = 2,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  level?: 1 | 2 | 3;
}) {
  const Tag = (`h${level}` as unknown) as ElementType;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow
            tone={tone === "light" ? "light" : "brand"}
            className={cn(align === "center" && "justify-center")}
          >
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <Tag
          className={cn(
            "mt-5 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.9rem]",
            tone === "light" ? "text-cream" : "text-ink",
          )}
        >
          {title}
        </Tag>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <div
            className={cn(
              "mt-6 text-[1.0625rem] leading-relaxed",
              tone === "light" ? "text-cream/70" : "text-slateink",
              align === "center" && "mx-auto max-w-2xl",
            )}
          >
            {intro}
          </div>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons & links                                                     */
/* ------------------------------------------------------------------ */

type ButtonVariant = "primary" | "outline" | "light" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 font-sans font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-cream hover:bg-brand shadow-[0_1px_2px_rgba(8,22,31,0.16)] hover:shadow-[0_14px_30px_-12px_rgba(15,110,106,0.55)] hover:-translate-y-0.5",
  outline:
    "border border-ink/20 text-ink hover:border-ink/60 hover:bg-ink/[0.03] hover:-translate-y-0.5",
  light:
    "bg-cream text-ink hover:bg-white hover:-translate-y-0.5 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.5)]",
  ghost:
    "border border-cream/25 text-cream hover:bg-cream/10 hover:border-cream/50 hover:-translate-y-0.5",
  gold: "bg-gold text-ink hover:bg-gold-200 hover:-translate-y-0.5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-[0.8125rem]",
  md: "h-12 px-6 text-[0.9375rem]",
  lg: "h-14 px-8 text-[1rem]",
};

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
};

const buttonStyles = ({
  variant = "primary",
  size = "md",
  className,
  withArrow,
}: CommonProps) => ({
  className: cn(base, variants[variant], sizes[size], className),
  children: (
    <>
      {withArrow && <span className="sr-only"> — </span>}
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  ),
});

export function ButtonLink({
  to,
  children,
  variant,
  size,
  className,
  withArrow = true,
  ...rest
}: CommonProps & { to: string } & Omit<
    React.ComponentProps<typeof Link>,
    "to" | "children" | "className"
  >) {
  const s = buttonStyles({ children, variant, size, className, withArrow });
  return (
    <Link to={to} className={s.className} {...rest}>
      {children}
      {withArrow && s.children}
    </Link>
  );
}

export function ButtonAnchor({
  href,
  children,
  variant,
  size,
  className,
  withArrow = true,
  ...rest
}: CommonProps & { href: string } & Omit<
    React.ComponentProps<"a">,
    "href" | "children" | "className"
  >) {
  const s = buttonStyles({ children, variant, size, className, withArrow });
  return (
    <a href={href} className={s.className} {...rest}>
      {children}
      {withArrow && s.children}
    </a>
  );
}

export function Button({
  children,
  variant,
  size,
  className,
  withArrow,
  type = "button",
  ...rest
}: CommonProps &
  Omit<React.ComponentProps<"button">, "children" | "className" | "type"> & {
    type?: "button" | "submit" | "reset";
  }) {
  const s = buttonStyles({ children, variant, size, className, withArrow });
  return (
    <button type={type} className={s.className} {...rest}>
      {children}
      {withArrow && s.children}
    </button>
  );
}

export function TextLink({
  to,
  children,
  className,
  tone = "brand",
}: {
  to: string;
  children: ReactNode;
  className?: string;
  tone?: "brand" | "light";
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium link-underline",
        tone === "light" ? "text-brand-300" : "text-brand",
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Misc                                                               */
/* ------------------------------------------------------------------ */

export function Pill({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "outline" | "line";
  className?: string;
}) {
  const tones = {
    light: "bg-cream-200 text-ink/70",
    dark: "bg-cream/10 text-cream/80",
    outline: "border border-current opacity-70",
    line: "border border-line bg-white text-ink/70",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.75rem] font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ImageFrame({
  src,
  alt,
  className,
  imgClassName,
  ratio = "aspect-[4/3]",
  priority = false,
  overlay,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  priority?: boolean;
  overlay?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-ink/5",
        ratio,
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "h-full w-full object-cover duotone transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          imgClassName,
        )}
      />
      {overlay && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent"
        />
      )}
    </div>
  );
}

export function PrototypeNote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-md border border-gold/35 bg-gold/[0.07] px-4 py-3.5 text-[0.8125rem] leading-relaxed text-ink/75",
        className,
      )}
    >
      <span aria-hidden="true" className="mt-0.5 text-gold">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <p>{children}</p>
    </div>
  );
}
