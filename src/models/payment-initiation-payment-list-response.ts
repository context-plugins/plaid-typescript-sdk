import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationPaymentSchema,
  type PaymentInitiationPayment,
} from "./payment-initiation-payment.js";

/**
 * PaymentInitiationPaymentListResponse defines the response schema for
 * `/payment_initiation/payment/list`
 */
export type PaymentInitiationPaymentListResponse = {
  /** An array of payments that have been created, associated with the given `client_id`. */
  payments: PaymentInitiationPayment[];
  /**
   * The value that, when used as the optional `cursor` parameter to
   * `/payment_initiation/payment/list`, will return the next unreturned payment as its first
   * payment.
   */
  nextCursor: Date | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const paymentInitiationPaymentListResponseSchema: Schema<PaymentInitiationPaymentListResponse> =
  s.object<PaymentInitiationPaymentListResponse>({
    payments: s.array(s.lazy(() => paymentInitiationPaymentSchema)),
    nextCursor: s.nullable(s.dateTime()),
    requestId: s.string(),
    _keysMap: {
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
