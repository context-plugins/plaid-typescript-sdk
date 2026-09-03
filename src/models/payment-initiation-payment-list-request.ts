import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationPaymentListRequest = {
  clientId?: string;
  secret?: string;
  count?: number | null;
  cursor?: Date | null;
  consentId?: string | null;
};

export const paymentInitiationPaymentListRequestSchema: Schema<PaymentInitiationPaymentListRequest> =
  s.object<PaymentInitiationPaymentListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    count: s.optionalNullable(s.number()),
    cursor: s.optionalNullable(s.dateTime()),
    consentId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      consentId: "consent_id",
    },
  });
