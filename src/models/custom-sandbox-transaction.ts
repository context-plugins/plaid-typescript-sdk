import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Data to populate as test transaction data. */
export type CustomSandboxTransaction = {
  /**
   * The date of the transaction, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD)
   * format. Transaction date must be the present date or a date up to 14 days in the past. Future
   * dates are not allowed.
   */
  dateTransacted: string;
  /**
   * The date the transaction posted, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * (YYYY-MM-DD) format. Posted date must be the present date or a date up to 14 days in the past.
   * Future dates are not allowed.
   */
  datePosted: string;
  /** The transaction amount. Can be negative. */
  amount: number;
  /** The transaction description. */
  description: string;
  /** The ISO-4217 format currency code for the transaction. Defaults to USD. */
  isoCurrencyCode?: string;
};

export const customSandboxTransactionSchema: Schema<CustomSandboxTransaction> =
  s.object<CustomSandboxTransaction>({
    dateTransacted: s.dateOnly(),
    datePosted: s.dateOnly(),
    amount: s.float64(),
    description: s.string(),
    isoCurrencyCode: s.optional(s.string()),
    _keysMap: {
      dateTransacted: "date_transacted",
      datePosted: "date_posted",
      isoCurrencyCode: "iso_currency_code",
    },
  });
