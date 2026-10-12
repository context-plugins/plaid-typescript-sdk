import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { itemSchema, type Item } from "./item.js";
import { transactionSchema, type Transaction } from "./transaction.js";

/** TransactionsGetResponse defines the response schema for `/transactions/get` */
export type TransactionsGetResponse = {
  /**
   * An array containing the `accounts` associated with the Item for which transactions are being
   * returned. Each transaction can be mapped to its corresponding account via the `account_id`
   * field.
   */
  accounts: Account[];
  /**
   * An array containing transactions from the account. Transactions are returned in reverse
   * chronological order, with the most recent at the beginning of the array. The maximum number of
   * transactions returned is determined by the `count` parameter.
   */
  transactions: Transaction[];
  /**
   * The total number of transactions available within the date range specified. If
   * `total_transactions` is larger than the size of the `transactions` array, more transactions are
   * available and can be fetched via manipulating the `offset` parameter.
   */
  totalTransactions: number;
  /** Metadata about the Item. */
  item: Item;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transactionsGetResponseSchema: Schema<TransactionsGetResponse> =
  s.object<TransactionsGetResponse>({
    accounts: s.array(s.lazy(() => accountSchema)),
    transactions: s.array(s.lazy(() => transactionSchema)),
    totalTransactions: s.int(),
    item: itemSchema,
    requestId: s.string(),
    _keysMap: {
      totalTransactions: "total_transactions",
      requestId: "request_id",
    },
  });
