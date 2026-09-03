import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CountryCode = {
  Us: "US",
  Gb: "GB",
  Es: "ES",
  Nl: "NL",
  Fr: "FR",
  Ie: "IE",
  Ca: "CA",
  De: "DE",
  It: "IT",
  Pl: "PL",
  Dk: "DK",
  No: "NO",
  Se: "SE",
  Ee: "EE",
  Lt: "LT",
  Lv: "LV",
  Pt: "PT",
  Be: "BE",
  At: "AT",
  Fi: "FI",
} as const;
export type CountryCode = (typeof CountryCode)[keyof typeof CountryCode] | (string & {});

export const countryCodeSchema: EnumSchema<CountryCode> = s.enumOf<CountryCode>(CountryCode);
