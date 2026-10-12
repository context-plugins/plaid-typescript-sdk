import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * PaymentInitiationPaymentGetRequest defines the request schema for
 * `/payment_initiation/payment/get`
 */
export type PaymentInitiationPaymentGetRequest = {
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
  /** The `payment_id` returned from `/payment_initiation/payment/create`. */
  paymentId: string;
};

export const paymentInitiationPaymentGetRequestSchema: Schema<PaymentInitiationPaymentGetRequest> =
  s.object<PaymentInitiationPaymentGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    paymentId: s.string(),
    _keysMap: {
      clientId: "client_id",
      paymentId: "payment_id",
    },
  });
