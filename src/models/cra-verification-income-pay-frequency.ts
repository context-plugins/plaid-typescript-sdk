import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraVerificationIncomePayFrequency = {
  Weekly: "WEEKLY",
  Biweekly: "BIWEEKLY",
  SemiMonthly: "SEMI_MONTHLY",
  Monthly: "MONTHLY",
  Daily: "DAILY",
  Unknown: "UNKNOWN",
} as const;
export type CraVerificationIncomePayFrequency =
  | (typeof CraVerificationIncomePayFrequency)[keyof typeof CraVerificationIncomePayFrequency]
  | (string & {});

export const craVerificationIncomePayFrequencySchema: EnumSchema<CraVerificationIncomePayFrequency> =
  s.enumOf<CraVerificationIncomePayFrequency>(CraVerificationIncomePayFrequency);
