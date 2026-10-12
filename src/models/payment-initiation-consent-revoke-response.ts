import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * PaymentInitiationConsentRevokeResponse defines the response schema for
 * `/payment_initiation/consent/revoke`
 */
export type PaymentInitiationConsentRevokeResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const paymentInitiationConsentRevokeResponseSchema: Schema<PaymentInitiationConsentRevokeResponse> =
  s.object<PaymentInitiationConsentRevokeResponse>({
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
