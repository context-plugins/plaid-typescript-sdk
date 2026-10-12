import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The types of source income data that users should be able to share */
export const IncomeVerificationSourceType = {
  Bank: "bank",
  Payroll: "payroll",
} as const;
export type IncomeVerificationSourceType =
  | (typeof IncomeVerificationSourceType)[keyof typeof IncomeVerificationSourceType]
  | (string & {});

export const incomeVerificationSourceTypeSchema: EnumSchema<IncomeVerificationSourceType> =
  s.enumOf<IncomeVerificationSourceType>(IncomeVerificationSourceType);
