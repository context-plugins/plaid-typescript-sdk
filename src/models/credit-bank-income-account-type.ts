import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditBankIncomeAccountType = {
  Depository: "depository",
} as const;
export type CreditBankIncomeAccountType =
  | (typeof CreditBankIncomeAccountType)[keyof typeof CreditBankIncomeAccountType]
  | (string & {});

export const creditBankIncomeAccountTypeSchema: EnumSchema<CreditBankIncomeAccountType> =
  s.enumOf<CreditBankIncomeAccountType>(CreditBankIncomeAccountType);
