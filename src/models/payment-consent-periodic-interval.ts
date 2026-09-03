import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentConsentPeriodicInterval = {
  Day: "DAY",
  Week: "WEEK",
  Month: "MONTH",
  Year: "YEAR",
} as const;
export type PaymentConsentPeriodicInterval =
  | (typeof PaymentConsentPeriodicInterval)[keyof typeof PaymentConsentPeriodicInterval]
  | (string & {});

export const paymentConsentPeriodicIntervalSchema: EnumSchema<PaymentConsentPeriodicInterval> =
  s.enumOf<PaymentConsentPeriodicInterval>(PaymentConsentPeriodicInterval);
