import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of a step in the Identity Verification process. */
export const IdentityVerificationStepStatus = {
  Success: "success",
  Active: "active",
  Failed: "failed",
  WaitingForPrerequisite: "waiting_for_prerequisite",
  NotApplicable: "not_applicable",
  Skipped: "skipped",
  Expired: "expired",
  Canceled: "canceled",
  PendingReview: "pending_review",
  ManuallyApproved: "manually_approved",
  ManuallyRejected: "manually_rejected",
} as const;
export type IdentityVerificationStepStatus =
  | (typeof IdentityVerificationStepStatus)[keyof typeof IdentityVerificationStepStatus]
  | (string & {});

export const identityVerificationStepStatusSchema: EnumSchema<IdentityVerificationStepStatus> =
  s.enumOf<IdentityVerificationStepStatus>(IdentityVerificationStepStatus);
