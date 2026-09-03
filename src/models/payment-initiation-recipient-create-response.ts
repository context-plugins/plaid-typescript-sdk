import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationRecipientCreateResponse = {
  recipientId: string;
  requestId: string;
};

export const paymentInitiationRecipientCreateResponseSchema: Schema<PaymentInitiationRecipientCreateResponse> =
  s.object<PaymentInitiationRecipientCreateResponse>({
    recipientId: s.string(),
    requestId: s.string(),
    _keysMap: {
      recipientId: "recipient_id",
      requestId: "request_id",
    },
  });
