import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  personalFinanceCategoryVersionSchema,
  type PersonalFinanceCategoryVersion,
} from "./personal-finance-category-version.js";

/** An optional object to be used with the request. If specified, `options` must not be `null`. */
export type TransactionsRecurringGetRequestOptions = {
  /**
   * Personal finance categories are now returned by default.
   *
   * @deprecated
   *
   * @default false
   */
  includePersonalFinanceCategory?: boolean;
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

export const transactionsRecurringGetRequestOptionsSchema: Schema<TransactionsRecurringGetRequestOptions> =
  s.object<TransactionsRecurringGetRequestOptions>({
    includePersonalFinanceCategory: s.defaulted(s.boolean(), false),
    personalFinanceCategoryVersion: s.optional(s.lazy(() => personalFinanceCategoryVersionSchema)),
    _keysMap: {
      includePersonalFinanceCategory: "include_personal_finance_category",
      personalFinanceCategoryVersion: "personal_finance_category_version",
    },
  });
