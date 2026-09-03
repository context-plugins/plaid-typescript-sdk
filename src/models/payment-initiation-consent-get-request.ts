import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationConsentGetRequest = {
  clientId?: string;
  secret?: string;
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
