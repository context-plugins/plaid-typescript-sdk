import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentConsentPeriodicAlignment = {
  Calendar: "CALENDAR",
  Consent: "CONSENT",
} as const;
export type PaymentConsentPeriodicAlignment =
  | (typeof PaymentConsentPeriodicAlignment)[keyof typeof PaymentConsentPeriodicAlignment]
  | (string & {});

export const paymentConsentPeriodicAlignmentSchema: EnumSchema<PaymentConsentPeriodicAlignment> =
  s.enumOf<PaymentConsentPeriodicAlignment>(PaymentConsentPeriodicAlignment);
