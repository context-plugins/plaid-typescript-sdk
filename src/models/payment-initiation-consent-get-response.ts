import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  externalPaymentRefundDetailsSchema,
  type ExternalPaymentRefundDetails,
} from "./external-payment-refund-details.js";
import {
  paymentInitiationConsentConstraintsSchema,
  type PaymentInitiationConsentConstraints,
} from "./payment-initiation-consent-constraints.js";
import {
  paymentInitiationConsentScopeSchema,
  type PaymentInitiationConsentScope,
} from "./payment-initiation-consent-scope.js";
import {
  paymentInitiationConsentStatusSchema,
  type PaymentInitiationConsentStatus,
} from "./payment-initiation-consent-status.js";
import {
  paymentInitiationConsentTypeSchema,
  type PaymentInitiationConsentType,
} from "./payment-initiation-consent-type.js";

/**
 * PaymentInitiationConsentGetResponse defines the response schema for
 * `/payment_initiation/consent/get`
 */
export type PaymentInitiationConsentGetResponse = {
  /** The consent ID. */
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
  /** Consent creation timestamp, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format. */
  createdAt: Date;
  /** The ID of the recipient the payment consent is for. */
  recipientId: string;
  /** A reference for the payment consent. */
  reference: string;
  /** Limitations that will be applied to payments initiated using the payment consent. */
  constraints: PaymentInitiationConsentConstraints;
  /**
   * Deprecated, use the 'type' field instead.
   *
   * @deprecated
   */
  scopes?: PaymentInitiationConsentScope[];
  /**
   * Payment consent type. Defines possible use case for payments made with the given consent.
   *
   * `SWEEPING`: Allows moving money between accounts owned by the same user.
   *
   * `COMMERCIAL`: Allows initiating payments from the user's account to third parties.
   */
  type?: PaymentInitiationConsentType;
  /** Details about external payment refund */
  payerDetails?: ExternalPaymentRefundDetails | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const paymentInitiationConsentGetResponseSchema: Schema<PaymentInitiationConsentGetResponse> =
  s.object<PaymentInitiationConsentGetResponse>({
    consentId: s.string(),
    status: paymentInitiationConsentStatusSchema,
    createdAt: s.dateTime(),
    recipientId: s.string(),
    reference: s.string(),
    constraints: paymentInitiationConsentConstraintsSchema,
    scopes: s.optional(s.array(s.lazy(() => paymentInitiationConsentScopeSchema))),
    type: s.optional(s.lazy(() => paymentInitiationConsentTypeSchema)),
    payerDetails: s.optionalNullable(s.lazy(() => externalPaymentRefundDetailsSchema)),
    requestId: s.string(),
    _keysMap: {
      consentId: "consent_id",
      createdAt: "created_at",
      recipientId: "recipient_id",
      payerDetails: "payer_details",
      requestId: "request_id",
    },
  });
