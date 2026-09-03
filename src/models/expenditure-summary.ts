import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryExpensesSchema, type CategoryExpenses } from "./category-expenses.js";
import { monthlyAverageSchema, type MonthlyAverage } from "./monthly-average.js";

export type ExpenditureSummary = {
  amount?: number | null;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
  monthlyAverage?: MonthlyAverage | null;
  transactionsCount?: number | null;
  percentageOfIncome?: number | null;
  topCategories?: (CategoryExpenses | null)[];
};

export const expenditureSummarySchema: Schema<ExpenditureSummary> = s.object<ExpenditureSummary>({
  amount: s.optionalNullable(s.number()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  monthlyAverage: s.optionalNullable(s.lazy(() => monthlyAverageSchema)),
  transactionsCount: s.optionalNullable(s.number()),
  percentageOfIncome: s.optionalNullable(s.number()),
  topCategories: s.optional(s.array(s.nullable(s.lazy(() => categoryExpensesSchema)))),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    monthlyAverage: "monthly_average",
    transactionsCount: "transactions_count",
    percentageOfIncome: "percentage_of_income",
    topCategories: "top_categories",
  },
});
