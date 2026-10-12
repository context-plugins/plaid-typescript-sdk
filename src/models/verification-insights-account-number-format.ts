import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicator of account number format validity for institution.
 *
 * `valid`: indicates that the account number has a correct format for the institution.
 *
 * `invalid`: indicates that the account number has an incorrect format for the institution.
 *
 * `unknown`: indicates that there was not enough information to determine whether the format is
 * correct for the institution.
 */
export const VerificationInsightsAccountNumberFormat = {
  Valid: "valid",
  Invalid: "invalid",
  Unknown: "unknown",
} as const;
export type VerificationInsightsAccountNumberFormat =
  | (typeof VerificationInsightsAccountNumberFormat)[keyof typeof VerificationInsightsAccountNumberFormat]
  | (string & {});

export const verificationInsightsAccountNumberFormatSchema: EnumSchema<VerificationInsightsAccountNumberFormat> =
  s.enumOf<VerificationInsightsAccountNumberFormat>(VerificationInsightsAccountNumberFormat);
