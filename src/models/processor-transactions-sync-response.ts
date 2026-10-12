import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountNullableSchema, type AccountNullable } from "./account-nullable.js";
import { removedTransactionSchema, type RemovedTransaction } from "./removed-transaction.js";
import { transactionSchema, type Transaction } from "./transaction.js";
import {
  transactionsUpdateStatusSchema,
  type TransactionsUpdateStatus,
} from "./transactions-update-status.js";

/**
 * ProcessorTransactionsSyncResponse defines the response schema for `/processor/transactions/sync`
 */
export type ProcessorTransactionsSyncResponse = {
  /**
   * A description of the update status for transaction pulls of an Item. This field contains the
   * same information provided by transactions webhooks, and may be helpful for webhook
   * troubleshooting or when recovering from missed webhooks.
   *
   * `TRANSACTIONS_UPDATE_STATUS_UNKNOWN`: Unable to fetch transactions update status for Item.
   * `NOT_READY`: The Item is pending transaction pull. `INITIAL_UPDATE_COMPLETE`: Initial pull for
   * the Item is complete, historical pull is pending. `HISTORICAL_UPDATE_COMPLETE`: Both initial
   * and historical pull for Item are complete.
   */
  transactionsUpdateStatus: TransactionsUpdateStatus;
  /** A single account at a financial institution. */
  account: AccountNullable | null;
  /**
   * Transactions that have been added to the Item since `cursor` ordered by ascending last modified
   * time.
   */
  added: Transaction[];
  /**
   * Transactions that have been modified on the Item since `cursor` ordered by ascending last
   * modified time.
   */
  modified: Transaction[];
  /**
   * Transactions that have been removed from the Item since `cursor` ordered by ascending last
   * modified time.
   */
  removed: RemovedTransaction[];
  /**
   * Cursor used for fetching any future updates after the latest update provided in this response.
   * The cursor obtained after all pages have been pulled (indicated by `has_more` being `false`)
   * will be valid for at least 1 year. This cursor should be persisted for later calls. If
   * transactions are not yet available, this will be an empty string.
   */
  nextCursor: string;
  /**
   * Represents if more than requested count of transaction updates exist. If true, the additional
   * updates can be fetched by making an additional request with `cursor` set to `next_cursor`. If
   * `has_more` is true, it's important to pull all available pages, to make it less likely for
   * underlying data changes to conflict with pagination.
   */
  hasMore: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const processorTransactionsSyncResponseSchema: Schema<ProcessorTransactionsSyncResponse> =
  s.object<ProcessorTransactionsSyncResponse>({
    transactionsUpdateStatus: transactionsUpdateStatusSchema,
    account: s.nullable(s.lazy(() => accountNullableSchema)),
    added: s.array(s.lazy(() => transactionSchema)),
    modified: s.array(s.lazy(() => transactionSchema)),
    removed: s.array(s.lazy(() => removedTransactionSchema)),
    nextCursor: s.string(),
    hasMore: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      transactionsUpdateStatus: "transactions_update_status",
      nextCursor: "next_cursor",
      hasMore: "has_more",
      requestId: "request_id",
    },
  });
