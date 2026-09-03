import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationConsentRevokeRequest = {
  clientId?: string;
  secret?: string;
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
