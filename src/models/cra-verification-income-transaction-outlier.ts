import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraVerificationIncomeTransactionOutlier = {
  isOutlier: boolean;
  amount?: number | null;
};

export const craVerificationIncomeTransactionOutlierSchema: Schema<CraVerificationIncomeTransactionOutlier> =
  s.object<CraVerificationIncomeTransactionOutlier>({
    isOutlier: s.boolean(),
    amount: s.optionalNullable(s.number()),
    _keysMap: {
      isOutlier: "is_outlier",
    },
  });
