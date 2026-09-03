import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentProfileCreateResponse = {
  paymentProfileToken: string;
  requestId: string;
};

export const paymentProfileCreateResponseSchema: Schema<PaymentProfileCreateResponse> =
  s.object<PaymentProfileCreateResponse>({
    paymentProfileToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      paymentProfileToken: "payment_profile_token",
      requestId: "request_id",
    },
  });
