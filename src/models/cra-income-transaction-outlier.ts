import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraIncomeTransactionOutlier = {
  isOutlier: boolean;
  amount?: number | null;
};

export const craIncomeTransactionOutlierSchema: Schema<CraIncomeTransactionOutlier> =
  s.object<CraIncomeTransactionOutlier>({
    isOutlier: s.boolean(),
    amount: s.optionalNullable(s.number()),
    _keysMap: {
      isOutlier: "is_outlier",
    },
  });
