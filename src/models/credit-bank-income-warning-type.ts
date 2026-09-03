import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditBankIncomeWarningType = {
  BankIncomeWarning: "BANK_INCOME_WARNING",
} as const;
export type CreditBankIncomeWarningType =
  | (typeof CreditBankIncomeWarningType)[keyof typeof CreditBankIncomeWarningType]
  | (string & {});

export const creditBankIncomeWarningTypeSchema: EnumSchema<CreditBankIncomeWarningType> =
  s.enumOf<CreditBankIncomeWarningType>(CreditBankIncomeWarningType);
