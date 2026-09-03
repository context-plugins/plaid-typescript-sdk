import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAmountCurrencySchema, type PaymentAmountCurrency } from "./payment-amount-currency.js";

export type PaymentAmountToRefund = {
  currency: PaymentAmountCurrency;
  value: number;
};

export const paymentAmountToRefundSchema: Schema<PaymentAmountToRefund> = s.object<PaymentAmountToRefund>({
  currency: paymentAmountCurrencySchema,
  value: s.number(),
});
