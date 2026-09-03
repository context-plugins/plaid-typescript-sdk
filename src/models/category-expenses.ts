import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { monthlyAverageSchema, type MonthlyAverage } from "./monthly-average.js";

export type CategoryExpenses = {
  id?: string;
  transactionsCount?: number | null;
  amount?: number | null;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
  monthlyAverage?: MonthlyAverage | null;
};

export const categoryExpensesSchema: Schema<CategoryExpenses> = s.object<CategoryExpenses>({
  id: s.optional(s.string()),
  transactionsCount: s.optionalNullable(s.number()),
  amount: s.optionalNullable(s.number()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  monthlyAverage: s.optionalNullable(s.lazy(() => monthlyAverageSchema)),
  _keysMap: {
    transactionsCount: "transactions_count",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    monthlyAverage: "monthly_average",
  },
});
