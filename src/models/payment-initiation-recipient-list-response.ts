import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationRecipientSchema,
  type PaymentInitiationRecipient,
} from "./payment-initiation-recipient.js";

export type PaymentInitiationRecipientListResponse = {
  recipients: PaymentInitiationRecipient[];
  requestId: string;
  nextCursor?: string;
};

export const paymentInitiationRecipientListResponseSchema: Schema<PaymentInitiationRecipientListResponse> =
  s.object<PaymentInitiationRecipientListResponse>({
    recipients: s.array(s.lazy(() => paymentInitiationRecipientSchema)),
    requestId: s.string(),
    nextCursor: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
      nextCursor: "next_cursor",
    },
  });
