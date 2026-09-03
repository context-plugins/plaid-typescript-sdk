import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationPaymentCreateResponse = {
  paymentId: string;
  status: "PAYMENT_STATUS_INPUT_NEEDED";
  requestId: string;
};

export const paymentInitiationPaymentCreateResponseSchema: Schema<PaymentInitiationPaymentCreateResponse> =
  s.object<PaymentInitiationPaymentCreateResponse>({
    paymentId: s.string(),
    status: s.literal("PAYMENT_STATUS_INPUT_NEEDED"),
    requestId: s.string(),
    _keysMap: {
      paymentId: "payment_id",
      requestId: "request_id",
    },
  });
