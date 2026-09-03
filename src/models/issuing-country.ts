import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IssuingCountry = {
  Match: "match",
  NoMatch: "no_match",
} as const;
export type IssuingCountry = (typeof IssuingCountry)[keyof typeof IssuingCountry] | (string & {});

export const issuingCountrySchema: EnumSchema<IssuingCountry> = s.enumOf<IssuingCountry>(IssuingCountry);
