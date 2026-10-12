import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information describing the intent of the transaction. Most relevant for business finance use
 * cases, but not limited to such use cases.
 */
export type BusinessFinanceCategory = {
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
};

export const businessFinanceCategorySchema: Schema<BusinessFinanceCategory> =
  s.object<BusinessFinanceCategory>({
    primary: s.string(),
    detailed: s.string(),
    confidenceLevel: s.optionalNullable(s.string()),
    _keysMap: {
      confidenceLevel: "confidence_level",
    },
  });
