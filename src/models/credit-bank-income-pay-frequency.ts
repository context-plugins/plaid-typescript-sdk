import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditBankIncomePayFrequency = {
  Weekly: "WEEKLY",
  Biweekly: "BIWEEKLY",
  SemiMonthly: "SEMI_MONTHLY",
  Monthly: "MONTHLY",
  Daily: "DAILY",
  Unknown: "UNKNOWN",
} as const;
export type CreditBankIncomePayFrequency =
  | (typeof CreditBankIncomePayFrequency)[keyof typeof CreditBankIncomePayFrequency]
  | (string & {});

export const creditBankIncomePayFrequencySchema: EnumSchema<CreditBankIncomePayFrequency> =
  s.enumOf<CreditBankIncomePayFrequency>(CreditBankIncomePayFrequency);
