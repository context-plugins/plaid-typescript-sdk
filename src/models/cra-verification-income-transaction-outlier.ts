import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Metadata on whether this income transaction is an outlier. */
export type CraVerificationIncomeTransactionOutlier = {
  /**
   * Indicates whether an income transaction amount is unusually high compared to the amounts for
   * that stream.
   */
  isOutlier: boolean;
  /** The amount that the transaction differs from the stream average transaction amount. */
  amount?: number | null;
};

export const craVerificationIncomeTransactionOutlierSchema: Schema<CraVerificationIncomeTransactionOutlier> =
  s.object<CraVerificationIncomeTransactionOutlier>({
    isOutlier: s.boolean(),
    amount: s.optionalNullable(s.float64()),
    _keysMap: {
      isOutlier: "is_outlier",
    },
  });
