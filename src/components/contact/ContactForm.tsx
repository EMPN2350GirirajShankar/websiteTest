import { useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { makeStyles, mergeClasses } from "@fluentui/react-components";
import { CheckmarkCircle24Filled } from "@fluentui/react-icons";

import { PrimaryButton } from "../buttons";
import { COUNTRIES, DEFAULT_COUNTRY } from "../../lib/countries";
import { CONTACT_EMAIL, buildContactMailto } from "../../lib/contact";

// ---------------------------------------------------------------------------
// Field model
// ---------------------------------------------------------------------------
// Every field except `phone` is required. `phone` is the one optional field,
// matching the reference form where the red asterisk marks what's mandatory.
interface FormValues {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  country: string;
  phone: string;
  message: string;
}

type FieldName = keyof FormValues;

const EMPTY: FormValues = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  country: DEFAULT_COUNTRY,
  phone: "",
  message: "",
};

// Deliberately permissive: catches typos like a missing @ or trailing dot without
// rejecting valid-but-unusual addresses. The server is the real validator.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@.]+$/;
// Digits, spaces and the usual grouping punctuation. Optional field, so this only
// runs when the visitor actually typed something.
const PHONE_RE = /^[+()\d][\d\s()+.-]{5,}$/;

function validate(values: FormValues): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};

  if (!values.firstName.trim()) errors.firstName = "Enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name.";
  if (!values.company.trim()) errors.company = "Enter your company name.";

  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address, like name@company.com.";
  }

  if (!values.country) errors.country = "Select your country.";

  if (values.phone.trim() && !PHONE_RE.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number, or leave this blank.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a little about what you need.";
  }

  return errors;
}

// Order matters: used to move focus to the first field that failed validation.
const FIELD_ORDER: FieldName[] = [
  "firstName",
  "lastName",
  "company",
  "email",
  "country",
  "phone",
  "message",
];

const useStyles = makeStyles({
  card: {
    backgroundColor: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
    padding: "32px",
    "@media (max-width: 640px)": { padding: "22px" },
  },
  // Two fields per row on desktop, stacking to one on narrow screens. The
  // message field opts out via `spanFull`.
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "18px 20px",
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  spanFull: { gridColumn: "1 / -1" },
  field: { display: "flex", flexDirection: "column", gap: "6px", minWidth: 0 },
  label: {
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: 1.3,
    color: "var(--maq-ink)",
  },
  required: { color: "var(--maq-red)", marginRight: "3px" },
  control: {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "inherit",
    fontSize: "15px",
    lineHeight: 1.5,
    color: "var(--maq-gray-700)",
    backgroundColor: "#fff",
    border: "1px solid var(--maq-border-strong)",
    borderRadius: "6px",
    padding: "10px 12px",
    transition: "border-color 0.16s ease, box-shadow 0.16s ease",
    ":hover": { border: "1px solid var(--maq-gray-500)" },
    ":focus-visible": {
      outline: "none",
      border: "1px solid var(--maq-red)",
      boxShadow: "0 0 0 3px var(--maq-red-pale)",
    },
  },
  // Native select needs its own reset so it matches the text inputs.
  select: {
    appearance: "none",
    backgroundImage:
      "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23667085' d='M1.4 0 6 4.6 10.6 0 12 1.4 6 7.4 0 1.4z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    paddingRight: "34px",
    cursor: "pointer",
  },
  textarea: { minHeight: "132px", resize: "vertical" },
  invalid: {
    border: "1px solid var(--maq-red)",
    ":hover": { border: "1px solid var(--maq-red)" },
  },
  error: {
    fontSize: "12.5px",
    lineHeight: 1.4,
    color: "var(--maq-red)",
    margin: 0,
  },
  consent: {
    gridColumn: "1 / -1",
    fontSize: "12.5px",
    lineHeight: 1.55,
    color: "var(--maq-gray-500)",
    margin: "4px 0 0",
  },
  consentLink: {
    color: "var(--maq-red)",
    fontWeight: 600,
    textDecoration: "none",
    ":hover": { textDecoration: "underline" },
  },
  actions: { gridColumn: "1 / -1", marginTop: "4px" },
  submit: { width: "100%", justifyContent: "center" },
  // Screen-reader-only summary announced when submit fails validation.
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
  success: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
    padding: "8px 0",
  },
  successIcon: { color: "var(--maq-red)" },
  successTitle: { margin: 0, fontSize: "22px", fontWeight: 700, color: "var(--maq-black)" },
  successBody: {
    margin: 0,
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
    maxWidth: "48ch",
  },
});

export function ContactForm() {
  const s = useStyles();
  const baseId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const directMailto = buildContactMailto();

  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  // Errors stay hidden until the first submit attempt, then update live so the
  // visitor sees them clear as they fix each field.
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  const fieldId = (name: FieldName) => `${baseId}-${name}`;
  const errorId = (name: FieldName) => `${baseId}-${name}-error`;

  function update(name: FieldName, value: string) {
    const next = { ...values, [name]: value };
    setValues(next);
    if (submitted) setErrors(validate(next));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const found = validate(values);
    setErrors(found);

    const firstInvalid = FIELD_ORDER.find((name) => found[name]);
    if (firstInvalid) {
      formRef.current
        ?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstInvalid))}`)
        ?.focus();
      return;
    }

    const subject = `Contact form inquiry from ${values.firstName.trim()} ${values.lastName.trim()}`;
    const countryName = COUNTRIES.find((c) => c.code === values.country)?.name ?? values.country;
    const body = [
      "Hello MAQ Software team,",
      "",
      "I submitted this via the Contact Us form:",
      "",
      `First name: ${values.firstName.trim()}`,
      `Last name: ${values.lastName.trim()}`,
      `Company: ${values.company.trim()}`,
      `Email: ${values.email.trim()}`,
      `Country: ${countryName}`,
      `Phone: ${values.phone.trim() || "(not provided)"}`,
      "",
      "Message:",
      values.message.trim(),
      "",
      "Best regards,",
      `${values.firstName.trim()} ${values.lastName.trim()}`,
    ].join("\n");

    window.location.href = buildContactMailto(subject, body);
    setSent(true);
  }

  if (sent) {
    return (
      <div className={s.card}>
        <div className={s.success} role="status">
          <CheckmarkCircle24Filled className={s.successIcon} />
          <h2 className={s.successTitle}>Your email draft is ready.</h2>
          <p className={s.successBody}>
            Your default email app should open with a prefilled draft addressed to {" "}
            <a className={s.consentLink} href={directMailto}>
              {CONTACT_EMAIL}
            </a>
            . If it did not open, use this link to start the email manually.
          </p>
        </div>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;

  return (
    <div className={s.card}>
      <form ref={formRef} className={s.grid} onSubmit={handleSubmit} noValidate>
        {/* Announced to screen readers on a failed submit; the per-field messages
            below carry the detail for sighted users. */}
        <p className={s.srOnly} role="alert">
          {submitted && errorCount > 0
            ? `${errorCount} ${errorCount === 1 ? "field needs" : "fields need"} your attention.`
            : ""}
        </p>

        <TextField
          name="firstName"
          label="First name"
          autoComplete="given-name"
          values={values}
          errors={errors}
          onChange={update}
          fieldId={fieldId}
          errorId={errorId}
          s={s}
        />
        <TextField
          name="lastName"
          label="Last name"
          autoComplete="family-name"
          values={values}
          errors={errors}
          onChange={update}
          fieldId={fieldId}
          errorId={errorId}
          s={s}
        />
        <TextField
          name="company"
          label="Company"
          autoComplete="organization"
          values={values}
          errors={errors}
          onChange={update}
          fieldId={fieldId}
          errorId={errorId}
          s={s}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          values={values}
          errors={errors}
          onChange={update}
          fieldId={fieldId}
          errorId={errorId}
          s={s}
        />

        <div className={s.field}>
          <label className={s.label} htmlFor={fieldId("country")}>
            <span className={s.required} aria-hidden="true">
              *
            </span>
            Country
          </label>
          <select
            id={fieldId("country")}
            name="country"
            className={mergeClasses(s.control, s.select, errors.country && s.invalid)}
            value={values.country}
            required
            autoComplete="country"
            aria-invalid={errors.country ? true : undefined}
            aria-describedby={errors.country ? errorId("country") : undefined}
            onChange={(e) => update("country", e.target.value)}
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className={s.error} id={errorId("country")}>
              {errors.country}
            </p>
          )}
        </div>

        <TextField
          name="phone"
          label="Phone"
          type="tel"
          optional
          autoComplete="tel"
          values={values}
          errors={errors}
          onChange={update}
          fieldId={fieldId}
          errorId={errorId}
          s={s}
        />

        <div className={mergeClasses(s.field, s.spanFull)}>
          <label className={s.label} htmlFor={fieldId("message")}>
            <span className={s.required} aria-hidden="true">
              *
            </span>
            Message
          </label>
          <textarea
            id={fieldId("message")}
            name="message"
            className={mergeClasses(s.control, s.textarea, errors.message && s.invalid)}
            value={values.message}
            required
            placeholder="What are you trying to build or solve?"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? errorId("message") : undefined}
            onChange={(e) => update("message", e.target.value)}
          />
          {errors.message && (
            <p className={s.error} id={errorId("message")}>
              {errors.message}
            </p>
          )}
        </div>

        <p className={s.consent}>
          By submitting this form, you agree to the processing of your personal data by
          MAQ Software in accordance with our{" "}
          <a className={s.consentLink} href="/privacystatement">
            Privacy Statement
          </a>
          .
        </p>

        <div className={s.actions}>
          <PrimaryButton size="large" type="submit" className={s.submit}>
            Submit
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Single-line input. Kept in this file because it is coupled to the form's
// styles and value/error shape rather than being a general-purpose control.
// ---------------------------------------------------------------------------
function TextField({
  name,
  label,
  type = "text",
  optional = false,
  autoComplete,
  values,
  errors,
  onChange,
  fieldId,
  errorId,
  s,
}: {
  name: FieldName;
  label: string;
  type?: "text" | "email" | "tel";
  optional?: boolean;
  autoComplete?: string;
  values: FormValues;
  errors: Partial<Record<FieldName, string>>;
  onChange: (name: FieldName, value: string) => void;
  fieldId: (name: FieldName) => string;
  errorId: (name: FieldName) => string;
  s: ReturnType<typeof useStyles>;
}) {
  const error = errors[name];
  return (
    <div className={s.field}>
      <label className={s.label} htmlFor={fieldId(name)}>
        {!optional && (
          <span className={s.required} aria-hidden="true">
            *
          </span>
        )}
        {label}
      </label>
      <input
        id={fieldId(name)}
        name={name}
        type={type}
        className={mergeClasses(s.control, error && s.invalid)}
        value={values[name]}
        required={!optional}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId(name) : undefined}
        onChange={(e) => onChange(name, e.target.value)}
      />
      {error && (
        <p className={s.error} id={errorId(name)}>
          {error}
        </p>
      )}
    </div>
  );
}
