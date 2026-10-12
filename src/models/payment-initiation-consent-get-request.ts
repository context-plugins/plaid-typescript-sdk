import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * PaymentInitiationConsentGetRequest defines the request schema for
 * `/payment_initiation/consent/get`
 */
export type PaymentInitiationConsentGetRequest = {
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
  /** The `consent_id` returned from `/payment_initiation/consent/create`. */
  consentId: string;
};

export const paymentInitiationConsentGetRequestSchema: Schema<PaymentInitiationConsentGetRequest> =
  s.object<PaymentInitiationConsentGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    consentId: s.string(),
    _keysMap: {
      clientId: "client_id",
      consentId: "consent_id",
    },
  });
