import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
