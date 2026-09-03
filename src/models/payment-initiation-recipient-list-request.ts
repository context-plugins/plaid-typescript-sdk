import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationRecipientListRequest = {
  clientId?: string;
  secret?: string;
  count?: number | null;
  cursor?: string;
};

export const paymentInitiationRecipientListRequestSchema: Schema<PaymentInitiationRecipientListRequest> =
  s.object<PaymentInitiationRecipientListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    count: s.optionalNullable(s.number()),
    cursor: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
    },
  });
