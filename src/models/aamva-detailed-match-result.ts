import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AamvaDetailedMatchResult = {
  Match: "match",
  PartialMatch: "partial_match",
  NoMatch: "no_match",
  NoData: "no_data",
} as const;
export type AamvaDetailedMatchResult =
  | (typeof AamvaDetailedMatchResult)[keyof typeof AamvaDetailedMatchResult]
  | (string & {});

export const aamvaDetailedMatchResultSchema: EnumSchema<AamvaDetailedMatchResult> =
  s.enumOf<AamvaDetailedMatchResult>(AamvaDetailedMatchResult);
