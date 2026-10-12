import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Status information about the account and routing number in the Plaid network. */
export type VerificationInsightsNetworkStatus = {
  /**
   * Indicates whether we found at least one matching account for the ACH account and routing
   * number.
   */
  hasNumbersMatch: boolean;
  /**
   * Indicates if at least one matching account for the ACH account and routing number is already
   * verified.
   */
  isNumbersMatchVerified: boolean;
};

export const verificationInsightsNetworkStatusSchema: Schema<VerificationInsightsNetworkStatus> =
  s.object<VerificationInsightsNetworkStatus>({
    hasNumbersMatch: s.boolean(),
    isNumbersMatchVerified: s.boolean(),
    _keysMap: {
      hasNumbersMatch: "has_numbers_match",
      isNumbersMatchVerified: "is_numbers_match_verified",
    },
  });
