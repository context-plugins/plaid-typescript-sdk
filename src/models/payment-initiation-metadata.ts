import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationStandingOrderMetadataSchema,
  type PaymentInitiationStandingOrderMetadata,
} from "./payment-initiation-standing-order-metadata.js";

/**
 * Metadata that captures what specific payment configurations an institution supports when making
 * Payment Initiation requests.
 */
export type PaymentInitiationMetadata = {
  /** Indicates whether the institution supports payments from a different country. */
  supportsInternationalPayments: boolean;
  /** Indicates whether the institution supports SEPA Instant payments. */
  supportsSepaInstant: boolean;
  /**
   * A mapping of currency to maximum payment amount (denominated in the smallest unit of currency)
   * supported by the institution.
   *
   * Example: `{"GBP": "10000"}`
   */
  maximumPaymentAmount: Record<string, string>;
  /**
   * Indicates whether the institution supports returning refund details when initiating a payment.
   */
  supportsRefundDetails: boolean;
  /**
   * Metadata specifically related to valid Payment Initiation standing order configurations for the
   * institution.
   */
  standingOrderMetadata: PaymentInitiationStandingOrderMetadata | null;
  /** Indicates whether the institution supports payment consents. */
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
