import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationConsentStatusSchema,
  type PaymentInitiationConsentStatus,
} from "./payment-initiation-consent-status.js";

/**
 * PaymentInitiationConsentCreateResponse defines the response schema for
 * `/payment_initiation/consent/create`
 */
export type PaymentInitiationConsentCreateResponse = {
  /** A unique ID identifying the payment consent. */
  consentId: string;
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
  status: PaymentInitiationConsentStatus;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const paymentInitiationConsentCreateResponseSchema: Schema<PaymentInitiationConsentCreateResponse> =
  s.object<PaymentInitiationConsentCreateResponse>({
    consentId: s.string(),
    status: paymentInitiationConsentStatusSchema,
    requestId: s.string(),
    _keysMap: {
      consentId: "consent_id",
      requestId: "request_id",
    },
  });
