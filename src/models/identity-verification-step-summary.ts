import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationStepStatusSchema,
  type IdentityVerificationStepStatus,
} from "./identity-verification-step-status.js";

export type IdentityVerificationStepSummary = {
  acceptTos: IdentityVerificationStepStatus;
  verifySms: IdentityVerificationStepStatus;
  kycCheck: IdentityVerificationStepStatus;
  documentaryVerification: IdentityVerificationStepStatus;
  selfieCheck: IdentityVerificationStepStatus;
  watchlistScreening: IdentityVerificationStepStatus;
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
