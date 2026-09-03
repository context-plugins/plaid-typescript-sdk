import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationPaymentSchema,
  type PaymentInitiationPayment,
} from "./payment-initiation-payment.js";

export type PaymentInitiationPaymentListResponse = {
  payments: PaymentInitiationPayment[];
  nextCursor: Date | null;
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
