import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The confidence that Plaid can support the user in the digital income verification flow instead of
 * requiring a manual paystub upload. One of the following:
 *
 * `"HIGH"`: It is very likely that this user can use the digital income verification flow.
 *
 * "`LOW`": It is unlikely that this user can use the digital income verification flow.
 *
 * `"UNKNOWN"`: It was not possible to determine if the user is supportable with the information
 * passed.
 */
export const IncomeVerificationPrecheckConfidence = {
  High: "HIGH",
  Low: "LOW",
  Unknown: "UNKNOWN",
} as const;
export type IncomeVerificationPrecheckConfidence =
  | (typeof IncomeVerificationPrecheckConfidence)[keyof typeof IncomeVerificationPrecheckConfidence]
  | (string & {});

export const incomeVerificationPrecheckConfidenceSchema: EnumSchema<IncomeVerificationPrecheckConfidence> =
  s.enumOf<IncomeVerificationPrecheckConfidence>(IncomeVerificationPrecheckConfidence);
