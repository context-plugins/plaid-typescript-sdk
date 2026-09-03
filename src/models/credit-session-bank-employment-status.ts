import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditSessionBankEmploymentStatus = {
  Approved: "APPROVED",
  NoEmployersFound: "NO_EMPLOYERS_FOUND",
  EmployerNotListed: "EMPLOYER_NOT_LISTED",
  Started: "STARTED",
  InternalError: "INTERNAL_ERROR",
} as const;
export type CreditSessionBankEmploymentStatus =
  | (typeof CreditSessionBankEmploymentStatus)[keyof typeof CreditSessionBankEmploymentStatus]
  | (string & {});

export const creditSessionBankEmploymentStatusSchema: EnumSchema<CreditSessionBankEmploymentStatus> =
  s.enumOf<CreditSessionBankEmploymentStatus>(CreditSessionBankEmploymentStatus);
