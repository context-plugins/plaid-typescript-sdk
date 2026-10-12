import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the payment consent.
 *
 * `UNAUTHORISED`: Consent created, but requires user authorisation.
 *
 * `REJECTED`: Consent authorisation was rejected by the bank.
 *
 * `AUTHORISED`: Consent is active and ready to be used.
 *
 * `REVOKED`: Consent has been revoked and can no longer be used.
 *
 * `EXPIRED`: Consent is no longer valid.
 */
export const PaymentInitiationConsentStatus = {
  Unauthorised: "UNAUTHORISED",
  Authorised: "AUTHORISED",
  Revoked: "REVOKED",
  Rejected: "REJECTED",
  Expired: "EXPIRED",
} as const;
export type PaymentInitiationConsentStatus =
  | (typeof PaymentInitiationConsentStatus)[keyof typeof PaymentInitiationConsentStatus]
  | (string & {});

export const paymentInitiationConsentStatusSchema: EnumSchema<PaymentInitiationConsentStatus> =
  s.enumOf<PaymentInitiationConsentStatus>(PaymentInitiationConsentStatus);
