import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * PaymentInitiationConsentRevokeRequest defines the request schema for
 * `/payment_initiation/consent/revoke`
 */
export type PaymentInitiationConsentRevokeRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The consent ID. */
  consentId: string;
};

export const paymentInitiationConsentRevokeRequestSchema: Schema<PaymentInitiationConsentRevokeRequest> =
  s.object<PaymentInitiationConsentRevokeRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    consentId: s.string(),
    _keysMap: {
      clientId: "client_id",
      consentId: "consent_id",
    },
  });
