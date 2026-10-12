import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status of the Bank Employment Link session.
 *
 * `APPROVED`: User has approved and verified their employment.
 *
 * `NO_EMPLOYERS_FOUND`: We attempted, but were unable to find any employment in the connected
 * account.
 *
 * `EMPLOYER_NOT_LISTED`: The user explicitly indicated that they did not see their current or
 * previous employer in the list of employer names found.
 *
 * `STARTED`: The user began the bank employment portion of the link flow.
 *
 * `INTERNAL_ERROR`: The user encountered an internal error.
 */
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
