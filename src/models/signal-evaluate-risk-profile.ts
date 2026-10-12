import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** RiskProfile is deprecated, use `ruleset` instead. */
export type SignalEvaluateRiskProfile = {
  /** The key of the risk profile used for this transaction. */
  key?: string;
  /**
   * Legacy method of inspecting the result of the ruleset. New integrations should simply use the
   * "result" property instead. This value will be omitted if you do not have a live existing
   * integration with rules using this field.
   */
  outcome?: string;
};

export const signalEvaluateRiskProfileSchema: Schema<SignalEvaluateRiskProfile> =
  s.object<SignalEvaluateRiskProfile>({
    key: s.optional(s.string()),
    outcome: s.optional(s.string()),
  });
