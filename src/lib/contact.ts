import { useNavigate } from "react-router-dom";

export const CONTACT_EMAIL = "CustomerSuccess@MAQSoftware.com";

/** Builds a mailto: URL for the shared contact inbox. */
export function buildContactMailto(subject?: string, body?: string): string {
  const parts: string[] = [];
  if (subject) parts.push(`subject=${encodeURIComponent(subject)}`);
  if (body) parts.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT_EMAIL}${parts.length ? `?${parts.join("&")}` : ""}`;
}

/**
 * Returns a handler that gives every contact button the same behaviour:
 * navigate to the Contact page, where the visitor fills out the contact form.
 *
 * This used to also pop open a mail compose window. That was dropped when the
 * contact form landed — routing everyone through the form is the whole point
 * (it keeps the shared inbox off the page, where scrapers were harvesting it).
 *
 * The signature is unchanged so the ~20 existing call sites keep working. The
 * subject they pass is carried through as router state, so the form can use it
 * for attribution or to prefill once a backend exists.
 */
export function useContactAction() {
  const navigate = useNavigate();
  return (subjectOrMailto?: string, _body?: string) => {
    const source = subjectOrMailto?.startsWith("mailto:") ? undefined : subjectOrMailto;
    navigate("/contact", source ? { state: { source } } : undefined);
  };
}
