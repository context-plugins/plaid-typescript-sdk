import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A transaction on the Employment Refresh Report. Note that this transaction differs from a Base
 * Report transaction in that it will only be deposits, and the amounts will be omitted.
 */
export type CraEmploymentRefreshReportTransaction = {
  /** The ID of the account in which this transaction occurred. */
  accountId: string;
  /** The string returned by the financial institution to describe the transaction. */
  originalDescription: string;
  /**
   * For pending transactions, the date that the transaction occurred; for posted transactions, the
   * date that the transaction posted. Both dates are returned in an ISO 8601 format ( `YYYY-MM-DD`
   * ).
   */
  date: string;
  /**
   * When `true`, identifies the transaction as pending or unsettled. Pending transaction details
   * (name, type, amount, category ID) may change before they are settled.
   */
  pending: boolean;
  /**
   * The unique ID of the transaction. Like all Plaid identifiers, the `transaction_id` is case
   * sensitive.
   */
  transactionId: string;
};

export const craEmploymentRefreshReportTransactionSchema: Schema<CraEmploymentRefreshReportTransaction> =
  s.object<CraEmploymentRefreshReportTransaction>({
    accountId: s.string(),
    originalDescription: s.string(),
    date: s.dateOnly(),
    pending: s.boolean(),
    transactionId: s.string(),
    _keysMap: {
      accountId: "account_id",
      originalDescription: "original_description",
      transactionId: "transaction_id",
    },
  });
