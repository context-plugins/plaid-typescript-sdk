import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the last successful and failed transactions update for the Item. */
export type ItemStatusTransactions = {
  /**
   * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) timestamp of the last successful transactions
   * update for the Item. The status will update each time Plaid successfully connects with the
   * institution, regardless of whether any new data is available in the update. This field does not
   * reflect transactions updates performed by non-Transactions products (e.g. Signal).
   */
  lastSuccessfulUpdate?: Date | null;
  /**
   * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) timestamp of the last failed transactions
   * update for the Item. The status will update each time Plaid fails an attempt to connect with
   * the institution, regardless of whether any new data is available in the update. This field does
   * not reflect transactions updates performed by non-Transactions products (e.g. Signal).
   */
  lastFailedUpdate?: Date | null;
};

export const itemStatusTransactionsSchema: Schema<ItemStatusTransactions> = s.object<ItemStatusTransactions>({
  lastSuccessfulUpdate: s.optionalNullable(s.dateTime()),
  lastFailedUpdate: s.optionalNullable(s.dateTime()),
  _keysMap: {
    lastSuccessfulUpdate: "last_successful_update",
    lastFailedUpdate: "last_failed_update",
  },
});
