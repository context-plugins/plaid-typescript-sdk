import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
