import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RuleResult = {
  Accept: "ACCEPT",
  Reroute: "REROUTE",
  Review: "REVIEW",
} as const;
export type RuleResult = (typeof RuleResult)[keyof typeof RuleResult] | (string & {});

export const ruleResultSchema: EnumSchema<RuleResult> = s.enumOf<RuleResult>(RuleResult);
