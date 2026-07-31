/**
 * ISO 3166-1 alpha-2 country codes, resolved to display names at runtime via
 * Intl.DisplayNames so we don't hand-maintain 200+ localized strings.
 *
 * Uninhabited territories (Antarctica, Bouvet Island, Heard & McDonald, French
 * Southern Territories, US Minor Outlying Islands, South Georgia) are omitted —
 * nobody fills out a contact form from there.
 */
const ISO_ALPHA2 =
  "AD AE AF AG AI AL AM AO AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BW BY BZ " +
  "CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK " +
  "FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GT GU GW GY HK HN HR HT HU ID IE IL IM IN IO IQ IR IS " +
  "IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK " +
  "ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL " +
  "PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC " +
  "TD TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW";

export interface Country {
  code: string;
  name: string;
}

/** The country the select defaults to, matching where most inbound traffic originates. */
export const DEFAULT_COUNTRY = "US";

function resolveNames(): Country[] {
  const codes = ISO_ALPHA2.split(" ");
  let display: Intl.DisplayNames | undefined;
  try {
    display = new Intl.DisplayNames(["en"], { type: "region" });
  } catch {
    // Intl.DisplayNames is unavailable (very old browser) — fall back to the raw
    // codes so the select still renders and the form stays submittable.
    display = undefined;
  }
  return codes
    .map((code) => ({ code, name: display?.of(code) ?? code }))
    .sort((a, b) => a.name.localeCompare(b.name, "en"));
}

export const COUNTRIES: Country[] = resolveNames();
