import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  externalPaymentInitiationConsentOptionsSchema,
  type ExternalPaymentInitiationConsentOptions,
} from "./external-payment-initiation-consent-options.js";
import {
  paymentInitiationConsentConstraintsSchema,
  type PaymentInitiationConsentConstraints,
} from "./payment-initiation-consent-constraints.js";
import {
  paymentInitiationConsentPayerDetailsSchema,
  type PaymentInitiationConsentPayerDetails,
} from "./payment-initiation-consent-payer-details.js";
import {
  paymentInitiationConsentScopeSchema,
  type PaymentInitiationConsentScope,
} from "./payment-initiation-consent-scope.js";
import {
  paymentInitiationConsentTypeSchema,
  type PaymentInitiationConsentType,
} from "./payment-initiation-consent-type.js";

export type PaymentInitiationConsentCreateRequest = {
  clientId?: string;
  secret?: string;
  recipientId: string;
  reference: string;
  scopes?: PaymentInitiationConsentScope[];
  type?: PaymentInitiationConsentType;
  constraints: PaymentInitiationConsentConstraints;
  options?: ExternalPaymentInitiationConsentOptions | null;
  payerDetails?: PaymentInitiationConsentPayerDetails | null;
};

export const paymentInitiationConsentCreateRequestSchema: Schema<PaymentInitiationConsentCreateRequest> =
  s.object<PaymentInitiationConsentCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    recipientId: s.string(),
    reference: s.string(),
    scopes: s.optional(s.array(s.lazy(() => paymentInitiationConsentScopeSchema))),
    type: s.optional(s.lazy(() => paymentInitiationConsentTypeSchema)),
    constraints: paymentInitiationConsentConstraintsSchema,
    options: s.optionalNullable(s.lazy(() => externalPaymentInitiationConsentOptionsSchema)),
    payerDetails: s.optionalNullable(s.lazy(() => paymentInitiationConsentPayerDetailsSchema)),
    _keysMap: {
      clientId: "client_id",
      recipientId: "recipient_id",
      payerDetails: "payer_details",
    },
  });
