import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentInitiationConsentType = {
  Sweeping: "SWEEPING",
  Commercial: "COMMERCIAL",
} as const;
export type PaymentInitiationConsentType =
  | (typeof PaymentInitiationConsentType)[keyof typeof PaymentInitiationConsentType]
  | (string & {});

export const paymentInitiationConsentTypeSchema: EnumSchema<PaymentInitiationConsentType> =
  s.enumOf<PaymentInitiationConsentType>(PaymentInitiationConsentType);
