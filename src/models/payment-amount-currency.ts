import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentAmountCurrency = {
  Gbp: "GBP",
  Eur: "EUR",
  Pln: "PLN",
  Sek: "SEK",
  Dkk: "DKK",
  Nok: "NOK",
} as const;
export type PaymentAmountCurrency =
  | (typeof PaymentAmountCurrency)[keyof typeof PaymentAmountCurrency]
  | (string & {});

export const paymentAmountCurrencySchema: EnumSchema<PaymentAmountCurrency> =
  s.enumOf<PaymentAmountCurrency>(PaymentAmountCurrency);
