import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result of the rule that was triggered for this transaction.
 *
 * `ACCEPT`: Accept the transaction for processing. `REROUTE`: Reroute the transaction to a
 * different payment method, as this transaction is too risky. `REVIEW`: Review the transaction
 * before proceeding.
 */
export const RuleResult = {
  Accept: "ACCEPT",
  Reroute: "REROUTE",
  Review: "REVIEW",
} as const;
export type RuleResult = (typeof RuleResult)[keyof typeof RuleResult] | (string & {});

export const ruleResultSchema: EnumSchema<RuleResult> = s.enumOf<RuleResult>(RuleResult);
