import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationPaymentCreateStatusSchema,
  type PaymentInitiationPaymentCreateStatus,
} from "./payment-initiation-payment-create-status.js";

/**
 * PaymentInitiationPaymentCreateResponse defines the response schema for
 * `/payment_initiation/payment/create`
 */
export type PaymentInitiationPaymentCreateResponse = {
  /** A unique ID identifying the payment */
  paymentId: string;
  /**
   * For a payment returned by this endpoint, there is only one possible value:
   *
   * `PAYMENT_STATUS_INPUT_NEEDED`: The initial phase of the payment
   */
  status: PaymentInitiationPaymentCreateStatus;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const paymentInitiationPaymentCreateResponseSchema: Schema<PaymentInitiationPaymentCreateResponse> =
  s.object<PaymentInitiationPaymentCreateResponse>({
    paymentId: s.string(),
    status: paymentInitiationPaymentCreateStatusSchema,
    requestId: s.string(),
    _keysMap: {
      paymentId: "payment_id",
      requestId: "request_id",
    },
  });
