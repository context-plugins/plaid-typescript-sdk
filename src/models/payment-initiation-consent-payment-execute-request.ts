import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAmountSchema, type PaymentAmount } from "./payment-amount.js";
import {
  paymentInitiationConsentProcessingModeSchema,
  type PaymentInitiationConsentProcessingMode,
} from "./payment-initiation-consent-processing-mode.js";
import {
  paymentInitiationConsentScopeSchema,
  type PaymentInitiationConsentScope,
} from "./payment-initiation-consent-scope.js";

export type PaymentInitiationConsentPaymentExecuteRequest = {
  clientId?: string;
  secret?: string;
  consentId: string;
  amount: PaymentAmount;
  idempotencyKey: string;
  reference?: string | null;
  scope?: PaymentInitiationConsentScope | null;
  processingMode?: PaymentInitiationConsentProcessingMode;
};

export const paymentInitiationConsentPaymentExecuteRequestSchema: Schema<PaymentInitiationConsentPaymentExecuteRequest> =
  s.object<PaymentInitiationConsentPaymentExecuteRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    consentId: s.string(),
    amount: paymentAmountSchema,
    idempotencyKey: s.string(),
    reference: s.optionalNullable(s.string()),
    scope: s.optionalNullable(s.lazy(() => paymentInitiationConsentScopeSchema)),
    processingMode: s.optional(s.lazy(() => paymentInitiationConsentProcessingModeSchema)),
    _keysMap: {
      clientId: "client_id",
      consentId: "consent_id",
      idempotencyKey: "idempotency_key",
      processingMode: "processing_mode",
    },
  });
