import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  personalFinanceCategoryVersionSchema,
  type PersonalFinanceCategoryVersion,
} from "./personal-finance-category-version.js";

/** An optional object to be used with the request. If specified, `options` must not be `null`. */
export type TransactionsSyncRequestOptions = {
  /**
   * Include the raw unparsed transaction description from the financial institution.
   *
   * @default false
   */
  includeOriginalDescription?: boolean | null;
  /**
   * Personal finance categories are now returned by default.
   *
   * @deprecated
   *
   * @default false
   */
  includePersonalFinanceCategory?: boolean;
  /**
   * Counterparties and extra merchant fields are now returned by default.
   *
   * @deprecated
   *
   * @default false
   */
  includeLogoAndCounterpartyBeta?: boolean;
  /**
   * Indicates which version of the personal finance category taxonomy is being used. [View PFCv2
   * and PFCv1 taxonomies](https://plaid.com/documents/pfc-taxonomy-all.csv).
   *
   * If you enabled Transactions or Enrich before December 3, 2025 you will receive the `v1`
   * taxonomy by default and may request `v2` by explicitly setting this field to `v2` in the
   * request.
   *
   * If you enabled Transactions or Enrich on or after December 3, 2025, you may only receive the
   * `v2` taxonomy.
   */
  personalFinanceCategoryVersion?: PersonalFinanceCategoryVersion;
  /**
   * This field only applies to calls for Items where the Transactions product has not already been
   * initialized (i.e., by specifying `transactions` in the `products`,
   * `required_if_supported_products`, or `optional_products` array when calling
   * `/link/token/create` or by making a previous call to `/transactions/sync` or
   * `/transactions/get`). In those cases, the field controls the maximum number of days of
   * transaction history that Plaid will request from the financial institution. The more
   * transaction history is requested, the longer the historical update poll will take. If no value
   * is specified, 90 days of history will be requested by default. In Production, if a value less
   * than 30 is provided, a minimum of 30 days of transaction history will be requested.
   *
   * If you are initializing your Items with transactions during the `/link/token/create` call (e.g.
   * by including `transactions` in the `/link/token/create` `products` array), you must use the
   * [`transactions.days_requested`](https://plaid.com/docs/api/link/#link-token-create-request-transactions-days-requested)
   * field in the `/link/token/create` request instead of in the `/transactions/sync` request.
   *
   * If the Item has already been initialized with the Transactions product, this field will have no
   * effect. The maximum amount of transaction history to request on an Item cannot be updated if
   * Transactions has already been added to the Item. To request older transaction history on an
   * Item where Transactions has already been added, you must delete the Item via `/item/remove` and
   * send the user through Link to create a new Item.
   *
   * Customers using [Recurring
   * Transactions](https://plaid.com/docs/api/products/transactions/#transactionsrecurringget)
   * should request at least 180 days of history for optimal results.
   *
   * @default 90
   */
  daysRequested?: number;
  /**
   * If provided, the returned updates and cursor will only reflect the specified account's
   * transactions. Omitting `account_id` returns updates for all accounts under the Item. Note that
   * specifying an `account_id` effectively creates a separate incremental update stream -- and
   * therefore a separate cursor -- for that account. If multiple accounts are queried this way, you
   * will maintain multiple cursors, one per `account_id`.
   *
   * If you decide to begin filtering by `account_id` after using no `account_id`, start fresh with
   * a null cursor and maintain separate `(account_id, cursor)` pairs going forward. Do not reuse
   * any previously saved cursors, as this can cause pagination errors or incomplete data.
   *
   * Note: An error will be returned if a provided `account_id` is not associated with the Item.
   */
  accountId?: string;
};

export const transactionsSyncRequestOptionsSchema: Schema<TransactionsSyncRequestOptions> =
  s.object<TransactionsSyncRequestOptions>({
    includeOriginalDescription: s.defaulted(s.nullable(s.boolean()), false),
    includePersonalFinanceCategory: s.defaulted(s.boolean(), false),
    includeLogoAndCounterpartyBeta: s.defaulted(s.boolean(), false),
    personalFinanceCategoryVersion: s.optional(s.lazy(() => personalFinanceCategoryVersionSchema)),
    daysRequested: s.defaulted(s.int(), 90),
    accountId: s.optional(s.string()),
    _keysMap: {
      includeOriginalDescription: "include_original_description",
      includePersonalFinanceCategory: "include_personal_finance_category",
      includeLogoAndCounterpartyBeta: "include_logo_and_counterparty_beta",
      personalFinanceCategoryVersion: "personal_finance_category_version",
      daysRequested: "days_requested",
      accountId: "account_id",
    },
  });
