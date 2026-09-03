import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OverrideAccountType = {
  Investment: "investment",
  Credit: "credit",
  Depository: "depository",
  Loan: "loan",
  Payroll: "payroll",
  Other: "other",
} as const;
export type OverrideAccountType =
  | (typeof OverrideAccountType)[keyof typeof OverrideAccountType]
  | (string & {});

export const overrideAccountTypeSchema: EnumSchema<OverrideAccountType> =
  s.enumOf<OverrideAccountType>(OverrideAccountType);
