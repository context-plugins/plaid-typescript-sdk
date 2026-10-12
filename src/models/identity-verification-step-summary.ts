import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationStepStatusSchema,
  type IdentityVerificationStepStatus,
} from "./identity-verification-step-status.js";

/**
 * Each step will be one of the following values:
 *
 *
 * `active` - This step is the user's current step. They are either in the process of completing
 * this step, or they recently closed their Identity Verification attempt while in the middle of
 * this step. Only one step will be marked as `active` at any given point.
 *
 * `success` - The Identity Verification attempt has completed this step.
 *
 * `failed` - The user failed this step. This can either cause the user to fail the session as a
 * whole, or cause them to fall back to another step depending on how the Identity Verification
 * template is configured. A failed step does not imply a failed session.
 *
 * `waiting_for_prerequisite` - The user needs to complete another step first, before they progress
 * to this step. This step may never run, depending on if the user fails an earlier step or if the
 * step is only run as a fallback.
 *
 * `not_applicable` - This step will not be run for this session.
 *
 * `skipped` - The retry instructions that created this Identity Verification attempt specified that
 * this step should be skipped.
 *
 * `expired` - This step had not yet been completed when the Identity Verification attempt as a
 * whole expired.
 *
 * `canceled` - The Identity Verification attempt was canceled before the user completed this step.
 *
 * `pending_review` - The Identity Verification attempt template was configured to perform a
 * screening that had one or more hits needing review.
 *
 * `manually_approved` - The step was manually overridden to pass by a team member in the dashboard.
 *
 * `manually_rejected` - The step was manually overridden to fail by a team member in the dashboard.
 */
export type IdentityVerificationStepSummary = {
  /** The status of a step in the Identity Verification process. */
  acceptTos: IdentityVerificationStepStatus;
  /** The status of a step in the Identity Verification process. */
  verifySms: IdentityVerificationStepStatus;
  /** The status of a step in the Identity Verification process. */
  kycCheck: IdentityVerificationStepStatus;
  /** The status of a step in the Identity Verification process. */
  documentaryVerification: IdentityVerificationStepStatus;
  /** The status of a step in the Identity Verification process. */
  selfieCheck: IdentityVerificationStepStatus;
  /** The status of a step in the Identity Verification process. */
  watchlistScreening: IdentityVerificationStepStatus;
  /** The status of a step in the Identity Verification process. */
  riskCheck: IdentityVerificationStepStatus;
};

export const identityVerificationStepSummarySchema: Schema<IdentityVerificationStepSummary> =
  s.object<IdentityVerificationStepSummary>({
    acceptTos: identityVerificationStepStatusSchema,
    verifySms: identityVerificationStepStatusSchema,
    kycCheck: identityVerificationStepStatusSchema,
    documentaryVerification: identityVerificationStepStatusSchema,
    selfieCheck: identityVerificationStepStatusSchema,
    watchlistScreening: identityVerificationStepStatusSchema,
    riskCheck: identityVerificationStepStatusSchema,
    _keysMap: {
      acceptTos: "accept_tos",
      verifySms: "verify_sms",
      kycCheck: "kyc_check",
      documentaryVerification: "documentary_verification",
      selfieCheck: "selfie_check",
      watchlistScreening: "watchlist_screening",
      riskCheck: "risk_check",
    },
  });
