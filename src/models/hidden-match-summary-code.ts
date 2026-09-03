import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HiddenMatchSummaryCode = {
  Match: "match",
  PartialMatch: "partial_match",
  NoMatch: "no_match",
  NoData: "no_data",
  NoInput: "no_input",
} as const;
export type HiddenMatchSummaryCode =
  | (typeof HiddenMatchSummaryCode)[keyof typeof HiddenMatchSummaryCode]
  | (string & {});

export const hiddenMatchSummaryCodeSchema: EnumSchema<HiddenMatchSummaryCode> =
  s.enumOf<HiddenMatchSummaryCode>(HiddenMatchSummaryCode);
