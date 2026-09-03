import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentProfileCreateRequest = {
  clientId?: string;
  secret?: string;
};

export const paymentProfileCreateRequestSchema: Schema<PaymentProfileCreateRequest> =
  s.object<PaymentProfileCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
    },
  });
