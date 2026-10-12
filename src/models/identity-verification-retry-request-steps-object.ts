import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Instructions for the `custom` retry strategy specifying which steps should be required or
 * skipped.
 *
 *
 * Note:
 *
 *
 * This field must be provided when the retry strategy is `custom` and must be omitted otherwise.
 *
 * Custom retries override settings in your Plaid Template. For example, if your Plaid Template has
 * `verify_sms` disabled, a custom retry with `verify_sms` enabled will still require the step.
 *
 * The `selfie_check` step is currently not supported on the sandbox server. Sandbox requests will
 * silently disable the `selfie_check` step when provided.
 */
export type IdentityVerificationRetryRequestStepsObject = {
  /**
   * A boolean field specifying whether the new session should require or skip the `verify_sms`
   * step.
   */
  verifySms: boolean;
  /**
   * A boolean field specifying whether the new session should require or skip the `kyc_check` (Data
   * Source Verification) step.
   */
  kycCheck: boolean;
  /**
   * A boolean field specifying whether the new session should require or skip the
   * `documentary_verification` step.
   */
  documentaryVerification: boolean;
  /**
   * A boolean field specifying whether the new session should require or skip the `selfie_check`
   * step. If a previous session has already passed the `selfie_check` step, the new selfie check
   * will be a Selfie Reauthentication check, in which the selfie is tested for liveness and for
   * consistency with the previous selfie.
   */
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
