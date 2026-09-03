import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationPaymentTokenCreateResponse = {
  paymentToken: string;
  paymentTokenExpirationTime: Date;
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
