import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAmountCurrencySchema, type PaymentAmountCurrency } from "./payment-amount-currency.js";

export type PaymentAmountRefunded = {
  currency: PaymentAmountCurrency;
  value: number;
};

export const paymentAmountRefundedSchema: Schema<PaymentAmountRefunded> = s.object<PaymentAmountRefunded>({
  currency: paymentAmountCurrencySchema,
  value: s.number(),
});
