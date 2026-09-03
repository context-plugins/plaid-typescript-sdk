import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentProfileGetRequest = {
  clientId?: string;
  secret?: string;
  paymentProfileToken: string;
};

export const paymentProfileGetRequestSchema: Schema<PaymentProfileGetRequest> =
  s.object<PaymentProfileGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    paymentProfileToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      paymentProfileToken: "payment_profile_token",
    },
  });
