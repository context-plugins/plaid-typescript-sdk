import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  personalFinanceCategoryVersionSchema,
  type PersonalFinanceCategoryVersion,
} from "./personal-finance-category-version.js";

/** An optional object to be used with the request. */
export type TransactionsEnrichRequestOptions = {
  /**
   * Include `legacy_category` and `legacy_category_id` in the response (in addition to the default
   * `personal_finance_category`).
   *
   * Categories are based on Plaid's legacy taxonomy. For a full list of legacy categories, see
   * [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   *
   * @default false
   */
  includeLegacyCategory?: boolean;
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
};

export const transactionsEnrichRequestOptionsSchema: Schema<TransactionsEnrichRequestOptions> =
  s.object<TransactionsEnrichRequestOptions>({
    includeLegacyCategory: s.defaulted(s.boolean(), false),
    personalFinanceCategoryVersion: s.optional(s.lazy(() => personalFinanceCategoryVersionSchema)),
    _keysMap: {
      includeLegacyCategory: "include_legacy_category",
      personalFinanceCategoryVersion: "personal_finance_category_version",
    },
  });
