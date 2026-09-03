import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationConsentStatusSchema,
  type PaymentInitiationConsentStatus,
} from "./payment-initiation-consent-status.js";

export type PaymentInitiationConsentCreateResponse = {
  consentId: string;
  status: PaymentInitiationConsentStatus;
  requestId: string;
};

export const paymentInitiationConsentCreateResponseSchema: Schema<PaymentInitiationConsentCreateResponse> =
  s.object<PaymentInitiationConsentCreateResponse>({
    consentId: s.string(),
    status: paymentInitiationConsentStatusSchema,
    requestId: s.string(),
    _keysMap: {
      consentId: "consent_id",
      requestId: "request_id",
    },
  });
