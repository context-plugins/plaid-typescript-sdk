import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration parameters for the Transactions product */
export type LinkTokenTransactions = {
  /**
   * The maximum number of days of transaction history to request for the Transactions product. The
   * more transaction history is requested, the longer the historical update poll will take. The
   * default value is 90 days. In Production, if a value under 30 is provided, a minimum of 30 days
   * of history will be requested. Once Transactions has been added to an Item, this value cannot be
   * updated.
   *
   * Customers using [Recurring
   * Transactions](https://plaid.com/docs/api/products/transactions/#transactionsrecurringget)
   * should request at least 180 days of history for optimal results.
   *
   * @default 90
   */
  daysRequested?: number;
};

export const linkTokenTransactionsSchema: Schema<LinkTokenTransactions> = s.object<LinkTokenTransactions>({
  daysRequested: s.defaulted(s.int(), 90),
  _keysMap: {
    daysRequested: "days_requested",
  },
});
