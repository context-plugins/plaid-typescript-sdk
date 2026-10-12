import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A binary match indicator specifying whether the country that issued the provided document matches
 * the country that the user separately provided to Plaid.
 *
 * Note: You can configure whether a `no_match` on `issuing_country` fails the
 * `documentary_verification` by editing your Plaid Template.
 */
export const IssuingCountry = {
  Match: "match",
  NoMatch: "no_match",
} as const;
export type IssuingCountry = (typeof IssuingCountry)[keyof typeof IssuingCountry] | (string & {});

export const issuingCountrySchema: EnumSchema<IssuingCountry> = s.enumOf<IssuingCountry>(IssuingCountry);
