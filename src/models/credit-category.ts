import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information describing the intent of the transaction. Most relevant for credit use cases, but not
 * limited to such use cases.
 *
 * See the [`taxonomy csv file`](https://plaid.com/documents/credit-category-taxonomy.csv) for a
 * full list of credit categories.
 */
export type CreditCategory = {
  /** A high level category that communicates the broad category of the transaction. */
  primary: string;
  /**
   * A granular category conveying the transaction's intent. This field can also be used as a unique
   * identifier for the category.
   */
  detailed: string;
};

export const creditCategorySchema: Schema<CreditCategory> = s.object<CreditCategory>({
  primary: s.string(),
  detailed: s.string(),
});
