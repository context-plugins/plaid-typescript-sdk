import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IdentityVerificationStatus = {
  Active: "active",
  Success: "success",
  Failed: "failed",
  Expired: "expired",
  Canceled: "canceled",
  PendingReview: "pending_review",
} as const;
export type IdentityVerificationStatus =
  | (typeof IdentityVerificationStatus)[keyof typeof IdentityVerificationStatus]
  | (string & {});

export const identityVerificationStatusSchema: EnumSchema<IdentityVerificationStatus> =
  s.enumOf<IdentityVerificationStatus>(IdentityVerificationStatus);
