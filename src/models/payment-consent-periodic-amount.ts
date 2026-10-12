import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAmountSchema, type PaymentAmount } from "./payment-amount.js";
import {
  paymentConsentPeriodicAlignmentSchema,
  type PaymentConsentPeriodicAlignment,
} from "./payment-consent-periodic-alignment.js";
import {
  paymentConsentPeriodicIntervalSchema,
  type PaymentConsentPeriodicInterval,
} from "./payment-consent-periodic-interval.js";

/** Defines consent payments limitations per period. */
export type PaymentConsentPeriodicAmount = {
  /** Maximum cumulative amount for all payments in the specified interval. */
  amount: PaymentAmount;
  /** Payment consent periodic interval. */
  interval: PaymentConsentPeriodicInterval;
  /**
   * Where the payment consent period should start.
   *
   * If the institution is Monzo, only `CONSENT` alignments are supported.
   *
   * `CALENDAR`: line up with a calendar.
   *
   * `CONSENT`: on the date of consent creation.
   */
  alignment: PaymentConsentPeriodicAlignment;
};

export const paymentConsentPeriodicAmountSchema: Schema<PaymentConsentPeriodicAmount> =
  s.object<PaymentConsentPeriodicAmount>({
    amount: paymentAmountSchema,
    interval: paymentConsentPeriodicIntervalSchema,
    alignment: paymentConsentPeriodicAlignmentSchema,
  });
