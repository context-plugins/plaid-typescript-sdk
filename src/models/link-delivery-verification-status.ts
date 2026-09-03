import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LinkDeliveryVerificationStatus = {
  AutomaticallyVerified: "automatically_verified",
  PendingAutomaticVerification: "pending_automatic_verification",
  PendingManualVerification: "pending_manual_verification",
  ManuallyVerified: "manually_verified",
  VerificationExpired: "verification_expired",
  VerificationFailed: "verification_failed",
  Unsent: "unsent",
  DatabaseMatched: "database_matched",
  DatabaseInsightsPending: "database_insights_pending",
} as const;
export type LinkDeliveryVerificationStatus =
  | (typeof LinkDeliveryVerificationStatus)[keyof typeof LinkDeliveryVerificationStatus]
  | (string & {});

export const linkDeliveryVerificationStatusSchema: EnumSchema<LinkDeliveryVerificationStatus> =
  s.enumOf<LinkDeliveryVerificationStatus>(LinkDeliveryVerificationStatus);
