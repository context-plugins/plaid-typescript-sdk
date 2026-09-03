import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskCheckEmailName = {
  NoInput: "no_input",
  Indeterminate: "indeterminate",
  NoMatch: "no_match",
  PartialMatch: "partial_match",
  Match: "match",
  NoData: "no_data",
} as const;
export type RiskCheckEmailName = (typeof RiskCheckEmailName)[keyof typeof RiskCheckEmailName] | (string & {});

export const riskCheckEmailNameSchema: EnumSchema<RiskCheckEmailName> =
  s.enumOf<RiskCheckEmailName>(RiskCheckEmailName);
