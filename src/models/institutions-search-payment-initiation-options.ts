import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Additional options that will be used to filter institutions by various Payment Initiation
 * configurations.
 */
export type InstitutionsSearchPaymentInitiationOptions = {
  /** A unique ID identifying the payment */
  paymentId?: string | null;
  /** A unique ID identifying the payment consent */
  consentId?: string | null;
};

export const institutionsSearchPaymentInitiationOptionsSchema: Schema<InstitutionsSearchPaymentInitiationOptions> =
  s.object<InstitutionsSearchPaymentInitiationOptions>({
    paymentId: s.optionalNullable(s.string()),
    consentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      consentId: "consent_id",
    },
  });
