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

export type VerificationInsights = {
  nameMatchScore?: number | null;
  networkStatus: VerificationInsightsNetworkStatus;
  previousReturns?: AccountVerificationInsightsPreviousReturns;
  accountNumberFormat: VerificationInsightsAccountNumberFormat;
};

export const verificationInsightsSchema: Schema<VerificationInsights> = s.object<VerificationInsights>({
  nameMatchScore: s.optionalNullable(s.number()),
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
