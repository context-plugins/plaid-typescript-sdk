import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationPaymentGetRequest = {
  clientId?: string;
  secret?: string;
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
