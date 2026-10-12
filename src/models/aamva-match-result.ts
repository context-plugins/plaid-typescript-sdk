import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The outcome of checking the particular field against state databases.
 *
 *
 * `match` - The field is an exact match with the state database.
 *
 * `no_match` - The field is not an exact match with the state database.
 *
 * `no_data` - The field was unable to be checked against state databases.
 */
export const AamvaMatchResult = {
  Match: "match",
  NoMatch: "no_match",
  NoData: "no_data",
} as const;
export type AamvaMatchResult = (typeof AamvaMatchResult)[keyof typeof AamvaMatchResult] | (string & {});

export const aamvaMatchResultSchema: EnumSchema<AamvaMatchResult> =
  s.enumOf<AamvaMatchResult>(AamvaMatchResult);
