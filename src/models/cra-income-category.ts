import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The income category for a given stream. The streams returned in the response will be filtered
 * based on these primary and secondary income categories.
 *
 * See the [Income V2 Category
 * Taxonomy](https://plaid.com/documents/income-v2-category-taxonomy.csv) for a full list of income
 * categories.
 */
export type CraIncomeCategory = {
  /** A high level category that communicates the broad category of the stream. */
  primary: string;
  /** A granular category conveying the stream's intent. */
  secondary: string;
};

export const craIncomeCategorySchema: Schema<CraIncomeCategory> = s.object<CraIncomeCategory>({
  primary: s.string(),
  secondary: s.string(),
});
