import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentaryVerificationSchema, type DocumentaryVerification } from "./documentary-verification.js";
import {
  identityVerificationStatusSchema,
  type IdentityVerificationStatus,
} from "./identity-verification-status.js";
import {
  identityVerificationStepSummarySchema,
  type IdentityVerificationStepSummary,
} from "./identity-verification-step-summary.js";
import {
  identityVerificationTemplateReferenceSchema,
  type IdentityVerificationTemplateReference,
} from "./identity-verification-template-reference.js";
import {
  identityVerificationUserDataSchema,
  type IdentityVerificationUserData,
} from "./identity-verification-user-data.js";
import { idvProtectEventSchema, type IdvProtectEvent } from "./idv-protect-event.js";
import { kycCheckDetailsSchema, type KycCheckDetails } from "./kyc-check-details.js";
import { riskCheckDetailsSchema, type RiskCheckDetails } from "./risk-check-details.js";
import { selfieCheckSchema, type SelfieCheck } from "./selfie-check.js";
import { verifySmsDetailsSchema, type VerifySmsDetails } from "./verify-sms-details.js";

/**
 * An identity verification attempt represents a customer's attempt to verify their identity,
 * reflecting the required steps for completing the session, the results for each step, and
 * information collected in the process.
 */
export type IdentityVerificationCreateResponse = {
  /** ID of the associated Identity Verification attempt. */
  id: string;
  /**
   * A unique ID that identifies the end user in your system. Either a `user_id` or the
   * `client_user_id` must be provided. This ID can also be used to associate user-specific data
   * from other Plaid products. Financial Account Matching requires this field and the
   * `/link/token/create` `client_user_id` to be consistent. Personally identifiable information,
   * such as an email address or phone number, should not be used in the `client_user_id`.
   */
  clientUserId: string;
  /** An ISO8601 formatted timestamp. */
  createdAt: Date;
  /** An ISO8601 formatted timestamp. */
  completedAt: Date | null;
  /**
   * The ID for the Identity Verification preceding this session. This field will only be filled if
   * the current Identity Verification is a retry of a previous attempt.
   */
  previousAttemptId: string | null;
  /** A shareable URL that can be sent directly to the user to complete verification */
  shareableUrl: string | null;
  /**
   * The resource ID and version number of the template configuring the behavior of a given Identity
   * Verification.
   */
  template: IdentityVerificationTemplateReference;
  /**
   * The identity data that was either collected from the user or provided via API in order to
   * perform an Identity Verification.
   */
  user: IdentityVerificationUserData;
  /**
   * The status of this Identity Verification attempt.
   *
   *
   * `active` - The Identity Verification attempt is incomplete. The user may have completed part of
   * the session, but has neither failed nor passed.
   *
   * `success` - The Identity Verification attempt has completed, passing all steps defined to the
   * associated Identity Verification template.
   *
   * `failed` - The user failed one or more steps in the session and was told to contact support.
   *
   * `expired` - The Identity Verification attempt was active for a long period of time without
   * being completed and was automatically marked as expired. Note that sessions currently do not
   * expire. Automatic expiration is expected to be enabled in the future.
   *
   * `canceled` - The Identity Verification attempt was canceled, either via the dashboard by a
   * user, or via API. The user may have completed part of the session, but has neither failed nor
   * passed.
   *
   * `pending_review` - The Identity Verification attempt template was configured to perform a
   * screening that had one or more hits needing review.
   */
  status: IdentityVerificationStatus;
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
   * `waiting_for_prerequisite` - The user needs to complete another step first, before they
   * progress to this step. This step may never run, depending on if the user fails an earlier step
   * or if the step is only run as a fallback.
   *
   * `not_applicable` - This step will not be run for this session.
   *
   * `skipped` - The retry instructions that created this Identity Verification attempt specified
   * that this step should be skipped.
   *
   * `expired` - This step had not yet been completed when the Identity Verification attempt as a
   * whole expired.
   *
   * `canceled` - The Identity Verification attempt was canceled before the user completed this
   * step.
   *
   * `pending_review` - The Identity Verification attempt template was configured to perform a
   * screening that had one or more hits needing review.
   *
   * `manually_approved` - The step was manually overridden to pass by a team member in the
   * dashboard.
   *
   * `manually_rejected` - The step was manually overridden to fail by a team member in the
   * dashboard.
   */
  steps: IdentityVerificationStepSummary;
  /**
   * Data, images, analysis, and results from the `documentary_verification` step. This field will
   * be `null` unless `steps.documentary_verification` has reached a terminal state of either
   * `success` or `failed`.
   */
  documentaryVerification: DocumentaryVerification | null;
  /**
   * Additional information for the `selfie_check` step. This field will be `null` unless
   * `steps.selfie_check` has reached a terminal state of either `success` or `failed`.
   */
  selfieCheck: SelfieCheck | null;
  /**
   * Additional information for the `kyc_check` (Data Source Verification) step. This field will be
   * `null` unless `steps.kyc_check` has reached a terminal state of either `success` or `failed`.
   */
  kycCheck: KycCheckDetails | null;
  /** Additional information for the `risk_check` step. */
  riskCheck: RiskCheckDetails | null;
  /** Additional information for the `verify_sms` step. */
  verifySms: VerifySmsDetails | null;
  /** ID of the associated screening. */
  watchlistScreeningId: string | null;
  /**
   * Beacon is deprecated in favor of Plaid Protect. This field is only populated for users of the
   * deprecated Beacon product.
   *
   * @deprecated
   */
  beaconUserId: string | null;
  /**
   * Unique user identifier, created by calling `/user/create`. Either a `user_id` or the
   * `client_user_id` must be provided. The `user_id` may only be used instead of the
   * `client_user_id` if you were not a pre-existing user of `/user/create` as of December 10, 2025,
   * or if you have since [migrated to the new User
   * APIs](https://plaid.com/docs/api/users/migrate-to-new-user-apis); for more details, see [New
   * User APIs](https://plaid.com/docs/api/users/user-apis). If both this field and a
   * `client_user_id` are present in a request, the `user_id` must have been created from the
   * provided `client_user_id`.
   */
  userId: string | null;
  /** An ISO8601 formatted timestamp. */
  redactedAt: Date | null;
  /** Information about a Protect event including Trust Index score and fraud attributes. */
  latestScoredProtectEvent?: IdvProtectEvent | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const identityVerificationCreateResponseSchema: Schema<IdentityVerificationCreateResponse> =
  s.object<IdentityVerificationCreateResponse>({
    id: s.string(),
    clientUserId: s.string(),
    createdAt: s.dateTime(),
    completedAt: s.nullable(s.dateTime()),
    previousAttemptId: s.nullable(s.string()),
    shareableUrl: s.nullable(s.string()),
    template: identityVerificationTemplateReferenceSchema,
    user: identityVerificationUserDataSchema,
    status: identityVerificationStatusSchema,
    steps: identityVerificationStepSummarySchema,
    documentaryVerification: s.nullable(s.lazy(() => documentaryVerificationSchema)),
    selfieCheck: s.nullable(s.lazy(() => selfieCheckSchema)),
    kycCheck: s.nullable(s.lazy(() => kycCheckDetailsSchema)),
    riskCheck: s.nullable(s.lazy(() => riskCheckDetailsSchema)),
    verifySms: s.nullable(s.lazy(() => verifySmsDetailsSchema)),
    watchlistScreeningId: s.nullable(s.string()),
    beaconUserId: s.nullable(s.string()),
    userId: s.nullable(s.string()),
    redactedAt: s.nullable(s.dateTime()),
    latestScoredProtectEvent: s.optionalNullable(s.lazy(() => idvProtectEventSchema)),
    requestId: s.string(),
    _keysMap: {
      clientUserId: "client_user_id",
      createdAt: "created_at",
      completedAt: "completed_at",
      previousAttemptId: "previous_attempt_id",
      shareableUrl: "shareable_url",
      documentaryVerification: "documentary_verification",
      selfieCheck: "selfie_check",
      kycCheck: "kyc_check",
      riskCheck: "risk_check",
      verifySms: "verify_sms",
      watchlistScreeningId: "watchlist_screening_id",
      beaconUserId: "beacon_user_id",
      userId: "user_id",
      redactedAt: "redacted_at",
      latestScoredProtectEvent: "latest_scored_protect_event",
      requestId: "request_id",
    },
  });
