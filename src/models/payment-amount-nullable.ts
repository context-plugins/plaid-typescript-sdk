import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAmountCurrencySchema, type PaymentAmountCurrency } from "./payment-amount-currency.js";

export type PaymentAmountNullable = {
  currency: PaymentAmountCurrency;
  value: number;
};

export const paymentAmountNullableSchema: Schema<PaymentAmountNullable> = s.object<PaymentAmountNullable>({
  currency: paymentAmountCurrencySchema,
  value: s.number(),
});
