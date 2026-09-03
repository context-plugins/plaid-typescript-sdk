import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityVerificationRetryRequestStepsObject = {
  verifySms: boolean;
  kycCheck: boolean;
  documentaryVerification: boolean;
  selfieCheck: boolean;
};

export const identityVerificationRetryRequestStepsObjectSchema: Schema<IdentityVerificationRetryRequestStepsObject> =
  s.object<IdentityVerificationRetryRequestStepsObject>({
    verifySms: s.boolean(),
    kycCheck: s.boolean(),
    documentaryVerification: s.boolean(),
    selfieCheck: s.boolean(),
    _keysMap: {
      verifySms: "verify_sms",
      kycCheck: "kyc_check",
      documentaryVerification: "documentary_verification",
      selfieCheck: "selfie_check",
    },
  });
