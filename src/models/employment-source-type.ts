import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The types of source employment data that users should be able to share */
export const EmploymentSourceType = {
  Bank: "bank",
  Payroll: "payroll",
} as const;
export type EmploymentSourceType =
  | (typeof EmploymentSourceType)[keyof typeof EmploymentSourceType]
  | (string & {});

export const employmentSourceTypeSchema: EnumSchema<EmploymentSourceType> =
  s.enumOf<EmploymentSourceType>(EmploymentSourceType);
