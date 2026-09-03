import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentProfileRemoveRequest = {
  clientId?: string;
  secret?: string;
  paymentProfileToken: string;
};

export const paymentProfileRemoveRequestSchema: Schema<PaymentProfileRemoveRequest> =
  s.object<PaymentProfileRemoveRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    paymentProfileToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      paymentProfileToken: "payment_profile_token",
    },
  });
