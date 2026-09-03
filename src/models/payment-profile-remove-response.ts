import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentProfileRemoveResponse = {
  requestId: string;
};

export const paymentProfileRemoveResponseSchema: Schema<PaymentProfileRemoveResponse> =
  s.object<PaymentProfileRemoveResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
