import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryExpensesSchema, type CategoryExpenses } from "./category-expenses.js";
import { monthlyAverageSchema, type MonthlyAverage } from "./monthly-average.js";
import { monthlySummarySchema, type MonthlySummary } from "./monthly-summary.js";

export type LoanPaymentsIndicators = {
  amount?: number | null;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
  monthlyAverage?: MonthlyAverage | null;
  categoryDetails?: (CategoryExpenses | null)[];
  topProviders?: string[];
  transactionsCount?: number | null;
  monthlySummaries?: (MonthlySummary | null)[];
  daysSinceLastOccurrence?: number | null;
  percentageOfIncome?: number | null;
};

export const loanPaymentsIndicatorsSchema: Schema<LoanPaymentsIndicators> = s.object<LoanPaymentsIndicators>({
  amount: s.optionalNullable(s.number()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  monthlyAverage: s.optionalNullable(s.lazy(() => monthlyAverageSchema)),
  categoryDetails: s.optional(s.array(s.nullable(s.lazy(() => categoryExpensesSchema)))),
  topProviders: s.optional(s.array(s.string())),
  transactionsCount: s.optionalNullable(s.number()),
  monthlySummaries: s.optional(s.array(s.nullable(s.lazy(() => monthlySummarySchema)))),
  daysSinceLastOccurrence: s.optionalNullable(s.number()),
  percentageOfIncome: s.optionalNullable(s.number()),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    monthlyAverage: "monthly_average",
    categoryDetails: "category_details",
    topProviders: "top_providers",
    transactionsCount: "transactions_count",
    monthlySummaries: "monthly_summaries",
    daysSinceLastOccurrence: "days_since_last_occurrence",
    percentageOfIncome: "percentage_of_income",
  },
});
