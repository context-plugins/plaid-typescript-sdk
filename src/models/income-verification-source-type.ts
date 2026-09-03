import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomeVerificationSourceType = {
  Bank: "bank",
  Payroll: "payroll",
} as const;
export type IncomeVerificationSourceType =
  | (typeof IncomeVerificationSourceType)[keyof typeof IncomeVerificationSourceType]
  | (string & {});

export const incomeVerificationSourceTypeSchema: EnumSchema<IncomeVerificationSourceType> =
  s.enumOf<IncomeVerificationSourceType>(IncomeVerificationSourceType);
