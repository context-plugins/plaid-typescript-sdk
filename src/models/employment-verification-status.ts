import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EmploymentVerificationStatus = {
  EmploymentStatusActive: "EMPLOYMENT_STATUS_ACTIVE",
  EmploymentStatusInactive: "EMPLOYMENT_STATUS_INACTIVE",
} as const;
export type EmploymentVerificationStatus =
  | (typeof EmploymentVerificationStatus)[keyof typeof EmploymentVerificationStatus]
  | (string & {});

export const employmentVerificationStatusSchema: EnumSchema<EmploymentVerificationStatus> =
  s.enumOf<EmploymentVerificationStatus>(EmploymentVerificationStatus);
