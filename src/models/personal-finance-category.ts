import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  personalFinanceCategoryVersionSchema,
  type PersonalFinanceCategoryVersion,
} from "./personal-finance-category-version.js";

/**
 * Information describing the intent of the transaction. Most relevant for personal finance use
 * cases, but not limited to such use cases.
 *
 * See the [taxonomy CSV file](https://plaid.com/documents/pfc-taxonomy-all.csv) for a full list of
 * personal finance categories. If you are migrating to personal finance categories from the legacy
 * categories, also refer to the [migration
 * guide](https://plaid.com/docs/transactions/pfc-migration/).
 */
export type PersonalFinanceCategory = {
  /** A high level category that communicates the broad category of the transaction. */
  primary: string;
  /**
   * A granular category conveying the transaction's intent. This field can also be used as a unique
   * identifier for the category.
   */
  detailed: string;
  /**
   * A description of how confident we are that the provided categories accurately describe the
   * transaction intent.
   *
   * `VERY_HIGH`: We are more than 98% confident that this category reflects the intent of the
   * transaction. `HIGH`: We are more than 90% confident that this category reflects the intent of
   * the transaction. `MEDIUM`: We are moderately confident that this category reflects the intent
   * of the transaction. `LOW`: This category may reflect the intent, but there may be other
   * categories that are more accurate. `UNKNOWN`: We don't know the confidence level for this
   * category.
   */
  confidenceLevel?: string | null;
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
  version?: PersonalFinanceCategoryVersion;
};

export const personalFinanceCategorySchema: Schema<PersonalFinanceCategory> =
  s.object<PersonalFinanceCategory>({
    primary: s.string(),
    detailed: s.string(),
    confidenceLevel: s.optionalNullable(s.string()),
    version: s.optional(s.lazy(() => personalFinanceCategoryVersionSchema)),
    _keysMap: {
      confidenceLevel: "confidence_level",
    },
  });
