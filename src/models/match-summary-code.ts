import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MatchSummaryCode = {
  Match: "match",
  PartialMatch: "partial_match",
  NoMatch: "no_match",
  NoData: "no_data",
  NoInput: "no_input",
} as const;
export type MatchSummaryCode = (typeof MatchSummaryCode)[keyof typeof MatchSummaryCode] | (string & {});

export const matchSummaryCodeSchema: EnumSchema<MatchSummaryCode> =
  s.enumOf<MatchSummaryCode>(MatchSummaryCode);
