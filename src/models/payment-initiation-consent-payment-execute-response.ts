import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  paymentInitiationPaymentStatusSchema,
  type PaymentInitiationPaymentStatus,
} from "./payment-initiation-payment-status.js";

export type PaymentInitiationConsentPaymentExecuteResponse = {
  paymentId: string;
  status: PaymentInitiationPaymentStatus;
  requestId: string;
  error?: Error | null;
};

export const paymentInitiationConsentPaymentExecuteResponseSchema: Schema<PaymentInitiationConsentPaymentExecuteResponse> =
  s.object<PaymentInitiationConsentPaymentExecuteResponse>({
    paymentId: s.string(),
    status: paymentInitiationPaymentStatusSchema,
    requestId: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    _keysMap: {
      paymentId: "payment_id",
      requestId: "request_id",
    },
  });
