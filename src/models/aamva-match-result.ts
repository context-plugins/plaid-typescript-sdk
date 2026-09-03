import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AamvaMatchResult = {
  Match: "match",
  NoMatch: "no_match",
  NoData: "no_data",
} as const;
export type AamvaMatchResult = (typeof AamvaMatchResult)[keyof typeof AamvaMatchResult] | (string & {});

export const aamvaMatchResultSchema: EnumSchema<AamvaMatchResult> =
  s.enumOf<AamvaMatchResult>(AamvaMatchResult);
