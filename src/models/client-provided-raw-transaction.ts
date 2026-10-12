import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A client-provided transaction for Plaid to enhance. */
export type ClientProvidedRawTransaction = {
  /** A unique ID for the transaction used to help you tie data back to your systems. */
  id: string;
  /** The raw description of the transaction. */
  description: string;
  /**
   * The value of the transaction with direction. (NOTE: this will affect enrichment results, so
   * directions are important). Negative (-) for credits (e.g., incoming transfers, refunds)
   * Positive (+) for debits (e.g., purchases, fees, outgoing transfers)
   */
  amount: number;
  /** The ISO-4217 currency code of the transaction e.g. USD. */
  isoCurrencyCode: string;
};

export const clientProvidedRawTransactionSchema: Schema<ClientProvidedRawTransaction> =
  s.object<ClientProvidedRawTransaction>({
    id: s.string(),
    description: s.string(),
    amount: s.float64(),
    isoCurrencyCode: s.string(),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
    },
  });
