import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountVerificationInsightsPreviousReturnsSchema,
  type AccountVerificationInsightsPreviousReturns,
} from "./account-verification-insights-previous-returns.js";
import {
  verificationInsightsAccountNumberFormatSchema,
  type VerificationInsightsAccountNumberFormat,
} from "./verification-insights-account-number-format.js";
import {
  verificationInsightsNetworkStatusSchema,
  type VerificationInsightsNetworkStatus,
} from "./verification-insights-network-status.js";

/**
 * Insights from performing database verification for the account. Only returned for Auth Items
 * using Database Auth.
 */
export type VerificationInsights = {
  /**
   * Indicates the score of the name match between the given name provided during database
   * verification (available in the
   * [`verification_name`](https://plaid.com/docs/api/products/auth/#auth-get-response-accounts-verification-name)
   * field if using standard Database Auth, or provided in the request if using `/auth/verify`) and
   * matched Plaid network accounts. If defined, will be a value between 0 and 100. Will be
   * undefined if name matching was not enabled for the database verification session or if there
   * were no eligible Plaid network matches to compare the given name with.
   */
  nameMatchScore?: number | null;
  /** Status information about the account and routing number in the Plaid network. */
  networkStatus: VerificationInsightsNetworkStatus;
  /** Information about known ACH returns for the account and routing number. */
  previousReturns?: AccountVerificationInsightsPreviousReturns;
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
  accountNumberFormat: VerificationInsightsAccountNumberFormat;
};

export const verificationInsightsSchema: Schema<VerificationInsights> = s.object<VerificationInsights>({
  nameMatchScore: s.optionalNullable(s.int()),
  networkStatus: verificationInsightsNetworkStatusSchema,
  previousReturns: s.optional(s.lazy(() => accountVerificationInsightsPreviousReturnsSchema)),
  accountNumberFormat: verificationInsightsAccountNumberFormatSchema,
  _keysMap: {
    nameMatchScore: "name_match_score",
    networkStatus: "network_status",
    previousReturns: "previous_returns",
    accountNumberFormat: "account_number_format",
  },
});
