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

export type PaymentConsentPeriodicAmount = {
  amount: PaymentAmount;
  interval: PaymentConsentPeriodicInterval;
  alignment: PaymentConsentPeriodicAlignment;
};

export const paymentConsentPeriodicAmountSchema: Schema<PaymentConsentPeriodicAmount> =
  s.object<PaymentConsentPeriodicAmount>({
    amount: paymentAmountSchema,
    interval: paymentConsentPeriodicIntervalSchema,
    alignment: paymentConsentPeriodicAlignmentSchema,
  });
