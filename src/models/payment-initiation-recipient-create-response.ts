import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * PaymentInitiationRecipientCreateResponse defines the response schema for
 * `/payment_initiation/recipient/create`
 */
export type PaymentInitiationRecipientCreateResponse = {
  /** A unique ID identifying the recipient */
  recipientId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
