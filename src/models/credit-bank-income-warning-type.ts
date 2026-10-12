import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The warning type which will always be `BANK_INCOME_WARNING`. */
export const CreditBankIncomeWarningType = {
  BankIncomeWarning: "BANK_INCOME_WARNING",
} as const;
export type CreditBankIncomeWarningType =
  | (typeof CreditBankIncomeWarningType)[keyof typeof CreditBankIncomeWarningType]
  | (string & {});

export const creditBankIncomeWarningTypeSchema: EnumSchema<CreditBankIncomeWarningType> =
  s.enumOf<CreditBankIncomeWarningType>(CreditBankIncomeWarningType);
