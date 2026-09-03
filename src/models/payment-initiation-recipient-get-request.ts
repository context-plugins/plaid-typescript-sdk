import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationRecipientGetRequest = {
  clientId?: string;
  secret?: string;
  recipientId: string;
};

export const paymentInitiationRecipientGetRequestSchema: Schema<PaymentInitiationRecipientGetRequest> =
  s.object<PaymentInitiationRecipientGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    recipientId: s.string(),
    _keysMap: {
      clientId: "client_id",
      recipientId: "recipient_id",
    },
  });
