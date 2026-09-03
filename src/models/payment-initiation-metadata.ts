import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationStandingOrderMetadataSchema,
  type PaymentInitiationStandingOrderMetadata,
} from "./payment-initiation-standing-order-metadata.js";

export type PaymentInitiationMetadata = {
  supportsInternationalPayments: boolean;
  supportsSepaInstant: boolean;
  maximumPaymentAmount: Record<string, string>;
  supportsRefundDetails: boolean;
  standingOrderMetadata: PaymentInitiationStandingOrderMetadata | null;
  supportsPaymentConsents: boolean;
};

export const paymentInitiationMetadataSchema: Schema<PaymentInitiationMetadata> =
  s.object<PaymentInitiationMetadata>({
    supportsInternationalPayments: s.boolean(),
    supportsSepaInstant: s.boolean(),
    maximumPaymentAmount: s.record(s.string(), s.string()),
    supportsRefundDetails: s.boolean(),
    standingOrderMetadata: s.nullable(s.lazy(() => paymentInitiationStandingOrderMetadataSchema)),
    supportsPaymentConsents: s.boolean(),
    _keysMap: {
      supportsInternationalPayments: "supports_international_payments",
      supportsSepaInstant: "supports_sepa_instant",
      maximumPaymentAmount: "maximum_payment_amount",
      supportsRefundDetails: "supports_refund_details",
      standingOrderMetadata: "standing_order_metadata",
      supportsPaymentConsents: "supports_payment_consents",
    },
  });
