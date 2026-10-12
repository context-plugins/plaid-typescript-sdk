import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enhancementsSchema, type Enhancements } from "./enhancements.js";

/** A client-provided transaction that Plaid has enhanced. */
export type ClientProvidedEnhancedTransaction = {
  /** Unique transaction identifier to tie transactions back to clients' systems. */
  id: string;
  /** The raw description of the transaction. */
  description: string;
  /**
   * The value of the transaction, denominated in the account's currency, as stated in
   * `iso_currency_code`. Positive values when money moves out of the account; negative values when
   * money moves in. For example, debit card purchases are positive; credit card payments, direct
   * deposits, and refunds are negative.
   */
  amount: number;
  /** The ISO-4217 currency code of the transaction. */
  isoCurrencyCode: string;
  /** A grouping of the Plaid produced transaction enhancement fields. */
  enhancements: Enhancements;
};

export const clientProvidedEnhancedTransactionSchema: Schema<ClientProvidedEnhancedTransaction> =
  s.object<ClientProvidedEnhancedTransaction>({
    id: s.string(),
    description: s.string(),
    amount: s.float64(),
    isoCurrencyCode: s.string(),
    enhancements: enhancementsSchema,
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
    },
  });
