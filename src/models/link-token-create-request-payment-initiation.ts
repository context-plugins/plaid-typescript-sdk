import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specifies options for initializing Link for use with the Payment Initiation (Europe) product.
 * This field is required if `payment_initiation` is included in the `products` array. Either
 * `payment_id` or `consent_id` must be provided.
 */
export type LinkTokenCreateRequestPaymentInitiation = {
  /** The `payment_id` provided by the `/payment_initiation/payment/create` endpoint. */
  paymentId?: string;
  /** The `consent_id` provided by the `/payment_initiation/consent/create` endpoint. */
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
