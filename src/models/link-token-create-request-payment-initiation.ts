import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateRequestPaymentInitiation = {
  paymentId?: string;
  consentId?: string;
};

export const linkTokenCreateRequestPaymentInitiationSchema: Schema<LinkTokenCreateRequestPaymentInitiation> =
  s.object<LinkTokenCreateRequestPaymentInitiation>({
    paymentId: s.optional(s.string()),
    consentId: s.optional(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      consentId: "consent_id",
    },
  });
