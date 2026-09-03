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

export type IdentityVerificationGetResponse = {
  id: string;
  clientUserId: string;
  createdAt: Date;
  completedAt: Date | null;
  previousAttemptId: string | null;
  shareableUrl: string | null;
  template: IdentityVerificationTemplateReference;
  user: IdentityVerificationUserData;
  status: IdentityVerificationStatus;
  steps: IdentityVerificationStepSummary;
  documentaryVerification: DocumentaryVerification | null;
  selfieCheck: SelfieCheck | null;
  kycCheck: KycCheckDetails | null;
  riskCheck: RiskCheckDetails | null;
  verifySms: VerifySmsDetails | null;
  watchlistScreeningId: string | null;
  beaconUserId: string | null;
  userId: string | null;
  redactedAt: Date | null;
  latestScoredProtectEvent?: IdvProtectEvent | null;
  requestId: string;
};

export const identityVerificationGetResponseSchema: Schema<IdentityVerificationGetResponse> =
  s.object<IdentityVerificationGetResponse>({
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
