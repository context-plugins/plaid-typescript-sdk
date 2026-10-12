import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAmountCurrencySchema, type PaymentAmountCurrency } from "./payment-amount-currency.js";

/** The amount and currency of a payment */
export type PaymentAmountToRefund = {
  /**
   * The ISO-4217 currency code of the payment. For standing orders and payment consents, `"GBP"`
   * must be used. For Poland, Denmark, Sweden and Norway, only the local currency is currently
   * supported.
   */
  currency: PaymentAmountCurrency;
  /** The amount of the payment. Must contain at most two digits of precision e.g. `1.23`. */
  value: number;
};

export const paymentAmountToRefundSchema: Schema<PaymentAmountToRefund> = s.object<PaymentAmountToRefund>({
  currency: paymentAmountCurrencySchema,
  value: s.float64(),
});
