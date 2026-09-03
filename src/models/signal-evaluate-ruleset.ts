import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ruleDetailsSchema, type RuleDetails } from "./rule-details.js";
import { ruleResultSchema, type RuleResult } from "./rule-result.js";

export type SignalEvaluateRuleset = {
  rulesetKey?: string;
  result: RuleResult;
  triggeredRuleDetails?: RuleDetails | null;
  outcome?: string;
};

export const signalEvaluateRulesetSchema: Schema<SignalEvaluateRuleset> = s.object<SignalEvaluateRuleset>({
  rulesetKey: s.optional(s.string()),
  result: ruleResultSchema,
  triggeredRuleDetails: s.optionalNullable(s.lazy(() => ruleDetailsSchema)),
  outcome: s.optional(s.string()),
  _keysMap: {
    rulesetKey: "ruleset_key",
    triggeredRuleDetails: "triggered_rule_details",
  },
});
