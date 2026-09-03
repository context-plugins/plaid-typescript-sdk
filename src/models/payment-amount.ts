import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAmountCurrencySchema, type PaymentAmountCurrency } from "./payment-amount-currency.js";

export type PaymentAmount = {
  currency: PaymentAmountCurrency;
  value: number;
};

export const paymentAmountSchema: Schema<PaymentAmount> = s.object<PaymentAmount>({
  currency: paymentAmountCurrencySchema,
  value: s.number(),
});
