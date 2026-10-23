import { useId, type ReactNode } from "react";
import { cn } from "@/utils/cn";

const fieldBase =
  "w-full rounded-md border bg-white px-4 py-3 text-[0.9375rem] text-ink transition-colors duration-200 placeholder:text-slateink-400/70 focus:outline-none focus:ring-2 focus:ring-brand/30";

export function FieldShell({
  label,
  htmlFor,
  required,
  hint,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label
        htmlFor={htmlFor}
        className="mb-2 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-brand">
            *
          </span>
        )}
        {!required && (
          <span className="ml-2 text-[0.6875rem] font-normal normal-case tracking-normal text-slateink-400">
            Optional
          </span>
        )}
      </label>
      {hint && (
        <p id={`${htmlFor}-hint`} className="mb-2 text-[0.8125rem] text-slateink">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p
          role="alert"
          className="mt-2 flex items-start gap-1.5 text-[0.8125rem] font-medium text-[#b4232a]"
        >
          <span aria-hidden="true">•</span>
          {error}
        </p>
      )}
    </div>
  );
}

export function TextInput({
  label,
  required,
  hint,
  error,
  className,
  ...rest
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
} & React.ComponentProps<"input">) {
  const autoId = useId();
  const id = rest.id ?? autoId;
  return (
    <FieldShell
      label={label}
      htmlFor={id}
      required={required}
      hint={hint}
      error={error}
      className={className}
    >
      <input
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className={cn(
          fieldBase,
          error ? "border-[#b4232a]/60" : "border-line focus:border-brand",
        )}
        {...rest}
      />
    </FieldShell>
  );
}

export function TextArea({
  label,
  required,
  hint,
  error,
  className,
  ...rest
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
} & React.ComponentProps<"textarea">) {
  const autoId = useId();
  const id = rest.id ?? autoId;
  return (
    <FieldShell
      label={label}
      htmlFor={id}
      required={required}
      hint={hint}
      error={error}
      className={className}
    >
      <textarea
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className={cn(
          fieldBase,
          "min-h-[9rem] resize-y",
          error ? "border-[#b4232a]/60" : "border-line focus:border-brand",
        )}
        {...rest}
      />
    </FieldShell>
  );
}

export function SelectInput({
  label,
  required,
  hint,
  error,
  options,
  placeholder = "Please select…",
  className,
  ...rest
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
} & React.ComponentProps<"select">) {
  const autoId = useId();
  const id = rest.id ?? autoId;
  return (
    <FieldShell
      label={label}
      htmlFor={id}
      required={required}
      hint={hint}
      error={error}
      className={className}
    >
      <div className="relative">
        <select
          id={id}
          required={required}
          aria-invalid={!!error}
          className={cn(
            fieldBase,
            "appearance-none pr-11",
            error ? "border-[#b4232a]/60" : "border-line focus:border-brand",
          )}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slateink"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="m6 9 6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
    </FieldShell>
  );
}

export function RadioCards({
  legend,
  name,
  options,
  value,
  onChange,
  error,
  columns = 2,
}: {
  legend: string;
  name: string;
  options: { value: string; label: string; desc?: string }[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
  columns?: 1 | 2 | 3;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink">
        {legend}
        <span aria-hidden="true" className="ml-1 text-brand">
          *
        </span>
      </legend>
      <div
        className={cn(
          "grid gap-2.5",
          columns === 1 && "grid-cols-1",
          columns === 2 && "sm:grid-cols-2",
          columns === 3 && "sm:grid-cols-3",
        )}
      >
        {options.map((o) => {
          const active = value === o.value;
          return (
            <label
              key={o.value}
              className={cn(
                "group flex cursor-pointer items-start gap-3 rounded-md border bg-white p-4 transition-all duration-200",
                "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/45 has-[:focus-visible]:ring-offset-2",
                active
                  ? "border-brand bg-brand/[0.04] shadow-[0_0_0_1px_var(--color-brand)]"
                  : "border-line hover:border-ink/30",
              )}
            >
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={active}
                onChange={() => onChange(o.value)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors",
                  active ? "border-brand bg-brand" : "border-line",
                )}
              >
                {active && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>
              <span>
                <span className="block text-[0.9375rem] font-medium text-ink">
                  {o.label}
                </span>
                {o.desc && (
                  <span className="mt-1 block text-[0.8125rem] leading-snug text-slateink">
                    {o.desc}
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p
          role="alert"
          className="mt-2 flex items-start gap-1.5 text-[0.8125rem] font-medium text-[#b4232a]"
        >
          <span aria-hidden="true">•</span>
          {error}
        </p>
      )}
    </fieldset>
  );
}

export function CheckboxAgree({
  checked,
  onChange,
  error,
  children,
  id = "agree",
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <div>
      <div
        className={cn(
          "flex items-start gap-3 rounded-md border bg-white p-4 transition-colors",
          error ? "border-[#b4232a]/60" : "border-line",
        )}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={!!error}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-brand)]"
        />
        <label
          htmlFor={id}
          className="cursor-pointer text-[0.875rem] leading-relaxed text-slateink"
        >
          {children}
        </label>
      </div>
      {error && (
        <p
          role="alert"
          className="mt-2 flex items-start gap-1.5 text-[0.8125rem] font-medium text-[#b4232a]"
        >
          <span aria-hidden="true">•</span>
          {error}
        </p>
      )}
    </div>
  );
}

export const emailRe = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
