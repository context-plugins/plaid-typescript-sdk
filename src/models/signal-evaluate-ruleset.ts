import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ruleDetailsSchema, type RuleDetails } from "./rule-details.js";
import { ruleResultSchema, type RuleResult } from "./rule-result.js";

/**
 * Details about the transaction result after evaluation by the requested Ruleset. If a
 * `ruleset_key` is not provided, for customers who began using Signal Transaction Scores before
 * October 15, 2025, by default, this field will be omitted. To learn more, see [Signal
 * Rules](https://plaid.com/docs/signal/signal-rules/).
 */
export type SignalEvaluateRuleset = {
  /** The key of the Ruleset used for this transaction. */
  rulesetKey?: string;
  /**
   * The result of the rule that was triggered for this transaction.
   *
   * `ACCEPT`: Accept the transaction for processing. `REROUTE`: Reroute the transaction to a
   * different payment method, as this transaction is too risky. `REVIEW`: Review the transaction
   * before proceeding.
   */
  result: RuleResult;
  /**
   * Rules are run in numerical order. The first rule with a logic match is triggered. These are the
   * details of that rule.
   */
  triggeredRuleDetails?: RuleDetails | null;
  /**
   * The evaluated outcome for this transaction. This field is deprecated, use `result` or
   * `triggered_rule_details.custom_action_key` instead.
   *
   * @deprecated
   */
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
