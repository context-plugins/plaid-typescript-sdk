import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  externalPaymentRefundDetailsSchema,
  type ExternalPaymentRefundDetails,
} from "./external-payment-refund-details.js";
import {
  paymentInitiationConsentConstraintsSchema,
  type PaymentInitiationConsentConstraints,
} from "./payment-initiation-consent-constraints.js";
import {
  paymentInitiationConsentScopeSchema,
  type PaymentInitiationConsentScope,
} from "./payment-initiation-consent-scope.js";
import {
  paymentInitiationConsentStatusSchema,
  type PaymentInitiationConsentStatus,
} from "./payment-initiation-consent-status.js";
import {
  paymentInitiationConsentTypeSchema,
  type PaymentInitiationConsentType,
} from "./payment-initiation-consent-type.js";

export type PaymentInitiationConsent = {
  consentId: string;
  status: PaymentInitiationConsentStatus;
  createdAt: Date;
  recipientId: string;
  reference: string;
  constraints: PaymentInitiationConsentConstraints;
  scopes?: PaymentInitiationConsentScope[];
  type?: PaymentInitiationConsentType;
  payerDetails?: ExternalPaymentRefundDetails | null;
};

export const paymentInitiationConsentSchema: Schema<PaymentInitiationConsent> =
  s.object<PaymentInitiationConsent>({
    consentId: s.string(),
    status: paymentInitiationConsentStatusSchema,
    createdAt: s.dateTime(),
    recipientId: s.string(),
    reference: s.string(),
    constraints: paymentInitiationConsentConstraintsSchema,
    scopes: s.optional(s.array(s.lazy(() => paymentInitiationConsentScopeSchema))),
    type: s.optional(s.lazy(() => paymentInitiationConsentTypeSchema)),
    payerDetails: s.optionalNullable(s.lazy(() => externalPaymentRefundDetailsSchema)),
    _keysMap: {
      consentId: "consent_id",
      createdAt: "created_at",
      recipientId: "recipient_id",
      payerDetails: "payer_details",
    },
  });
