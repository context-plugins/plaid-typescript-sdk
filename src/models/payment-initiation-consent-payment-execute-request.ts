import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAmountSchema, type PaymentAmount } from "./payment-amount.js";
import {
  paymentInitiationConsentProcessingModeSchema,
  type PaymentInitiationConsentProcessingMode,
} from "./payment-initiation-consent-processing-mode.js";
import {
  paymentInitiationConsentScopeSchema,
  type PaymentInitiationConsentScope,
} from "./payment-initiation-consent-scope.js";

/**
 * PaymentInitiationConsentPaymentExecuteRequest defines the request schema for
 * `/payment_initiation/consent/payment/execute`
 */
export type PaymentInitiationConsentPaymentExecuteRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The consent ID. */
  consentId: string;
  /** The amount and currency of a payment */
  amount: PaymentAmount;
  /**
   * A random key provided by the client, per unique consent payment. Maximum of 128 characters.
   *
   * The API supports idempotency for safely retrying requests without accidentally performing the
   * same operation twice. If a request to execute a consent payment fails due to a network
   * connection error, you can retry the request with the same idempotency key to guarantee that
   * only a single payment is created. If the request was successfully processed, it will prevent
   * any payment that uses the same idempotency key, and was received within 48 hours of the first
   * request, from being processed.
   */
  idempotencyKey: string;
  /**
   * A reference for the payment. This must be an alphanumeric string with at most 18 characters and
   * must not contain any special characters (since not all institutions support them). If not
   * provided, Plaid will automatically fall back to the reference from consent. In order to track
   * settlement via Payment Confirmation, each payment must have a unique reference. If the
   * reference provided through the API is not unique, Plaid will adjust it. Some institutions may
   * limit the reference to less than 18 characters. If necessary, Plaid will adjust the reference
   * by truncating it to fit the institution's requirements. Both the originally provided and
   * automatically adjusted references (if any) can be found in the `reference` and
   * `adjusted_reference` fields, respectively.
   */
  reference?: string | null;
  /**
   * @deprecated
   */
  scope?: PaymentInitiationConsentScope | null;
  /**
   * Decides the mode under which the payment processing should be performed, using `IMMEDIATE` as
   * default.
   *
   * `IMMEDIATE`: Will immediately execute the payment, waiting for a response from the ASPSP before
   * returning the result of the payment initiation. This is ideal for user-present flows.
   *
   * `ASYNC`: Will accept a payment execution request and schedule it for processing, immediately
   * returning the new `payment_id`. Listen for webhooks to obtain real-time updates on the payment
   * status. This is ideal for non user-present flows.
   */
  processingMode?: PaymentInitiationConsentProcessingMode;
};

export const paymentInitiationConsentPaymentExecuteRequestSchema: Schema<PaymentInitiationConsentPaymentExecuteRequest> =
  s.object<PaymentInitiationConsentPaymentExecuteRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    consentId: s.string(),
    amount: paymentAmountSchema,
    idempotencyKey: s.string(),
    reference: s.optionalNullable(s.string()),
    scope: s.optionalNullable(s.lazy(() => paymentInitiationConsentScopeSchema)),
    processingMode: s.optional(s.lazy(() => paymentInitiationConsentProcessingModeSchema)),
    _keysMap: {
      clientId: "client_id",
      consentId: "consent_id",
      idempotencyKey: "idempotency_key",
      processingMode: "processing_mode",
    },
  });
