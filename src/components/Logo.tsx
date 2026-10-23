import { cn } from "@/utils/cn";
import { Link } from "react-router-dom";
import { company } from "@/data/site";

export function LogoMark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const stroke = tone === "light" ? "#F8F6F2" : "#08161F";
  const accent = tone === "light" ? "#7FC4BD" : "#0F6E6A";
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9 shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="20"
        cy="20"
        r="18.5"
        fill="none"
        stroke={stroke}
        strokeOpacity="0.22"
        strokeWidth="1.2"
      />
      {/* the road: a single curving mile */}
      <path
        d="M9 31c7.5-2.4 11-7.6 11-13.5 0-3.2-1.4-5.6-3.6-7.5"
        fill="none"
        stroke={accent}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M9 31c7.5-2.4 11-7.6 11-13.5 0-3.2-1.4-5.6-3.6-7.5"
        fill="none"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeDasharray="2 4"
      />
      {/* the life / pulse */}
      <path
        d="M17.5 20.6h4.3l2-4.4 2.7 8.2 2.1-3.8h4.4"
        fill="none"
        stroke={stroke}
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="31.6" cy="9.4" r="2.6" fill={accent} />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      to="/"
      aria-label={`${company.name} — home`}
      className={cn("group flex items-center gap-3", className)}
    >
      <LogoMark tone={tone} className="transition-transform duration-500 group-hover:rotate-[-6deg]" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[0.95rem] font-semibold leading-[1.05] tracking-[-0.01em] sm:text-[1.02rem]",
            tone === "light" ? "text-cream" : "text-ink",
          )}
        >
          One Life One Mile
        </span>
        <span
          className={cn(
            "mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.28em]",
            tone === "light" ? "text-brand-300" : "text-brand",
          )}
        >
          Consulting, Inc.
        </span>
      </span>
    </Link>
  );
}
