import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationRecipientSchema,
  type PaymentInitiationRecipient,
} from "./payment-initiation-recipient.js";

/**
 * PaymentInitiationRecipientListResponse defines the response schema for
 * `/payment_initiation/recipient/list`
 */
export type PaymentInitiationRecipientListResponse = {
  /** An array of payment recipients created for Payment Initiation */
  recipients: PaymentInitiationRecipient[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * The value that, when used as the optional `cursor` parameter to
   * `/payment_initiation/recipient/list`, will return the corresponding recipient as its first
   * recipient.
   */
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
