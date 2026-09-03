import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationStatus5 = {
  AutomaticallyVerified: "automatically_verified",
  PendingAutomaticVerification: "pending_automatic_verification",
  PendingManualVerification: "pending_manual_verification",
  Unsent: "unsent",
  ManuallyVerified: "manually_verified",
  VerificationExpired: "verification_expired",
  VerificationFailed: "verification_failed",
  DatabaseMatched: "database_matched",
  DatabaseInsightsPass: "database_insights_pass",
  DatabaseInsightsPassWithCaution: "database_insights_pass_with_caution",
  DatabaseInsightsFail: "database_insights_fail",
} as const;
export type VerificationStatus5 =
  | (typeof VerificationStatus5)[keyof typeof VerificationStatus5]
  | (string & {});

export const verificationStatus5Schema: EnumSchema<VerificationStatus5> =
  s.enumOf<VerificationStatus5>(VerificationStatus5);
