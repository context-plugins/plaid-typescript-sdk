import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * PaymentInitiationPaymentTokenCreateResponse defines the response schema for
 * `/payment_initiation/payment/token/create`
 */
export type PaymentInitiationPaymentTokenCreateResponse = {
  /**
   * A `payment_token` that can be provided to Link initialization to enter the payment initiation
   * flow
   */
  paymentToken: string;
  /**
   * The date and time at which the token will expire, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format. A `payment_token` expires after 15 minutes.
   */
  paymentTokenExpirationTime: Date;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const paymentInitiationPaymentTokenCreateResponseSchema: Schema<PaymentInitiationPaymentTokenCreateResponse> =
  s.object<PaymentInitiationPaymentTokenCreateResponse>({
    paymentToken: s.string(),
    paymentTokenExpirationTime: s.dateTime(),
    requestId: s.string(),
    _keysMap: {
      paymentToken: "payment_token",
      paymentTokenExpirationTime: "payment_token_expiration_time",
      requestId: "request_id",
    },
  });
