import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAmountSchema, type PaymentAmount } from "./payment-amount.js";
import {
  paymentConsentPeriodicAmountSchema,
  type PaymentConsentPeriodicAmount,
} from "./payment-consent-periodic-amount.js";
import {
  paymentConsentValidDateTimeSchema,
  type PaymentConsentValidDateTime,
} from "./payment-consent-valid-date-time.js";

export type PaymentInitiationConsentConstraints = {
  validDateTime?: PaymentConsentValidDateTime | null;
  maxPaymentAmount: PaymentAmount;
  periodicAmounts: PaymentConsentPeriodicAmount[];
};

export const paymentInitiationConsentConstraintsSchema: Schema<PaymentInitiationConsentConstraints> =
  s.object<PaymentInitiationConsentConstraints>({
    validDateTime: s.optionalNullable(s.lazy(() => paymentConsentValidDateTimeSchema)),
    maxPaymentAmount: paymentAmountSchema,
    periodicAmounts: s.array(s.lazy(() => paymentConsentPeriodicAmountSchema)),
    _keysMap: {
      validDateTime: "valid_date_time",
      maxPaymentAmount: "max_payment_amount",
      periodicAmounts: "periodic_amounts",
    },
  });
