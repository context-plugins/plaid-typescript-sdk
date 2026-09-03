import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EmploymentSourceType = {
  Bank: "bank",
  Payroll: "payroll",
} as const;
export type EmploymentSourceType =
  | (typeof EmploymentSourceType)[keyof typeof EmploymentSourceType]
  | (string & {});

export const employmentSourceTypeSchema: EnumSchema<EmploymentSourceType> =
  s.enumOf<EmploymentSourceType>(EmploymentSourceType);
