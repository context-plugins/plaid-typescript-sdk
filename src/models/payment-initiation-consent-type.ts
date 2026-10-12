import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Payment consent type. Defines possible use case for payments made with the given consent.
 *
 * `SWEEPING`: Allows moving money between accounts owned by the same user.
 *
 * `COMMERCIAL`: Allows initiating payments from the user's account to third parties.
 */
export const PaymentInitiationConsentType = {
  Sweeping: "SWEEPING",
  Commercial: "COMMERCIAL",
} as const;
export type PaymentInitiationConsentType =
  | (typeof PaymentInitiationConsentType)[keyof typeof PaymentInitiationConsentType]
  | (string & {});

export const paymentInitiationConsentTypeSchema: EnumSchema<PaymentInitiationConsentType> =
  s.enumOf<PaymentInitiationConsentType>(PaymentInitiationConsentType);
