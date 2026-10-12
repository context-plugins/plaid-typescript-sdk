import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where the payment consent period should start.
 *
 * If the institution is Monzo, only `CONSENT` alignments are supported.
 *
 * `CALENDAR`: line up with a calendar.
 *
 * `CONSENT`: on the date of consent creation.
 */
export const PaymentConsentPeriodicAlignment = {
  Calendar: "CALENDAR",
  Consent: "CONSENT",
} as const;
export type PaymentConsentPeriodicAlignment =
  | (typeof PaymentConsentPeriodicAlignment)[keyof typeof PaymentConsentPeriodicAlignment]
  | (string & {});

export const paymentConsentPeriodicAlignmentSchema: EnumSchema<PaymentConsentPeriodicAlignment> =
  s.enumOf<PaymentConsentPeriodicAlignment>(PaymentConsentPeriodicAlignment);
