import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditBankEmploymentWarningType = {
  BankEmploymentWarning: "BANK_EMPLOYMENT_WARNING",
} as const;
export type CreditBankEmploymentWarningType =
  | (typeof CreditBankEmploymentWarningType)[keyof typeof CreditBankEmploymentWarningType]
  | (string & {});

export const creditBankEmploymentWarningTypeSchema: EnumSchema<CreditBankEmploymentWarningType> =
  s.enumOf<CreditBankEmploymentWarningType>(CreditBankEmploymentWarningType);
