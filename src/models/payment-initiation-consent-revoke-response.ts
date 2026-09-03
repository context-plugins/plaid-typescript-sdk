import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationConsentRevokeResponse = {
  requestId?: string;
};

export const paymentInitiationConsentRevokeResponseSchema: Schema<PaymentInitiationConsentRevokeResponse> =
  s.object<PaymentInitiationConsentRevokeResponse>({
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
