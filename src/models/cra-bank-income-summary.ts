import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craBankIncomeHistoricalSummarySchema,
  type CraBankIncomeHistoricalSummary,
} from "./cra-bank-income-historical-summary.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";

export type CraBankIncomeSummary = {
  totalAmounts?: CreditAmountWithCurrency[];
  startDate?: string;
  endDate?: string;
  incomeSourcesCount?: number;
  incomeCategoriesCount?: number;
  incomeTransactionsCount?: number;
  historicalAverageMonthlyGrossIncome?: CreditAmountWithCurrency[];
  historicalAverageMonthlyIncome?: CreditAmountWithCurrency[];
  forecastedAverageMonthlyIncome?: CreditAmountWithCurrency[];
  historicalAnnualGrossIncome?: CreditAmountWithCurrency[];
  historicalAnnualIncome?: CreditAmountWithCurrency[];
  forecastedAnnualIncome?: CreditAmountWithCurrency[];
  historicalSummary?: CraBankIncomeHistoricalSummary[];
};

export const craBankIncomeSummarySchema: Schema<CraBankIncomeSummary> = s.object<CraBankIncomeSummary>({
  totalAmounts: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  incomeSourcesCount: s.optional(s.number()),
  incomeCategoriesCount: s.optional(s.number()),
  incomeTransactionsCount: s.optional(s.number()),
  historicalAverageMonthlyGrossIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  historicalAverageMonthlyIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  forecastedAverageMonthlyIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  historicalAnnualGrossIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  historicalAnnualIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  forecastedAnnualIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  historicalSummary: s.optional(s.array(s.lazy(() => craBankIncomeHistoricalSummarySchema))),
  _keysMap: {
    totalAmounts: "total_amounts",
    startDate: "start_date",
    endDate: "end_date",
    incomeSourcesCount: "income_sources_count",
    incomeCategoriesCount: "income_categories_count",
    incomeTransactionsCount: "income_transactions_count",
    historicalAverageMonthlyGrossIncome: "historical_average_monthly_gross_income",
    historicalAverageMonthlyIncome: "historical_average_monthly_income",
    forecastedAverageMonthlyIncome: "forecasted_average_monthly_income",
    historicalAnnualGrossIncome: "historical_annual_gross_income",
    historicalAnnualIncome: "historical_annual_income",
    forecastedAnnualIncome: "forecasted_annual_income",
    historicalSummary: "historical_summary",
  },
});
