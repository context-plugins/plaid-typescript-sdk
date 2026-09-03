import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SignalDecisionOutcome = {
  Approve: "APPROVE",
  Review: "REVIEW",
  Reject: "REJECT",
  TakeOtherRiskMeasures: "TAKE_OTHER_RISK_MEASURES",
  NotEvaluated: "NOT_EVALUATED",
} as const;
export type SignalDecisionOutcome =
  | (typeof SignalDecisionOutcome)[keyof typeof SignalDecisionOutcome]
  | (string & {});

export const signalDecisionOutcomeSchema: EnumSchema<SignalDecisionOutcome> =
  s.enumOf<SignalDecisionOutcome>(SignalDecisionOutcome);
