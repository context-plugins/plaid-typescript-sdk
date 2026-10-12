import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An optional object to filter `/investments/transactions/get` results. If provided, must be
 * non-`null`.
 */
export type InvestmentsTransactionsGetRequestOptions = {
  /** An array of `account_ids` to retrieve for the Item. */
  accountIds?: string[];
  /** The number of transactions to fetch. @default 100 */
  count?: number;
  /** The number of transactions to skip when fetching transaction history @default 0 */
  offset?: number;
  /**
   * If the Item was not initialized with the investments product via the `products`,
   * `required_if_supported_products`, or `optional_products` array when calling
   * `/link/token/create`, and `async_update` is set to true, the initial Investments extraction
   * will happen asynchronously. Plaid will subsequently fire a `HISTORICAL_UPDATE` webhook when the
   * extraction completes. When `false`, Plaid will wait to return a response until extraction
   * completion and no `HISTORICAL_UPDATE` webhook will fire. Note that while the extraction is
   * happening asynchronously, calls to `/investments/transactions/get` and `/investments/refresh`
   * will return `PRODUCT_NOT_READY` errors until the extraction completes.
   *
   * @default false
   */
  asyncUpdate?: boolean;
};

export const investmentsTransactionsGetRequestOptionsSchema: Schema<InvestmentsTransactionsGetRequestOptions> =
  s.object<InvestmentsTransactionsGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    count: s.defaulted(s.int(), 100),
    offset: s.defaulted(s.int(), 0),
    asyncUpdate: s.defaulted(s.boolean(), false),
    _keysMap: {
      accountIds: "account_ids",
      asyncUpdate: "async_update",
    },
  });
