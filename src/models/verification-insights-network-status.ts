import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerificationInsightsNetworkStatus = {
  hasNumbersMatch: boolean;
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
