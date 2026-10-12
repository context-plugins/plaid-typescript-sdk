import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  amountWithCurrencyWithMonthlyAverageSchema,
  type AmountWithCurrencyWithMonthlyAverage,
} from "./amount-with-currency-with-monthly-average.js";
import { expenditureSummarySchema, type ExpenditureSummary } from "./expenditure-summary.js";
import {
  outlierTransactionsInsightsSchema,
  type OutlierTransactionsInsights,
} from "./outlier-transactions-insights.js";

/**
 * Comprehensive analysis of spending patterns, categorizing expenses into essential, non-essential,
 * and other categories.
 */
export type ExpenditureInsights = {
  /** Net cash flow for the period (inflows minus outflows), including a monthly average. */
  cashFlow?: AmountWithCurrencyWithMonthlyAverage | null;
  /**
   * Summary statistics for a specific expenditure category, including total amount, monthly
   * average, and percentage of income.
   */
  totalExpenditure?: ExpenditureSummary | null;
  /**
   * Summary statistics for a specific expenditure category, including total amount, monthly
   * average, and percentage of income.
   */
  essentialExpenditure?: ExpenditureSummary | null;
  /**
   * Summary statistics for a specific expenditure category, including total amount, monthly
   * average, and percentage of income.
   */
  nonEssentialExpenditure?: ExpenditureSummary | null;
  /**
   * Summary statistics for a specific expenditure category, including total amount, monthly
   * average, and percentage of income.
   */
  other?: ExpenditureSummary | null;
  /**
   * Summary statistics for a specific expenditure category, including total amount, monthly
   * average, and percentage of income.
   */
  transfersOut?: ExpenditureSummary | null;
  /**
   * Insights into unusually large transactions that exceed typical spending patterns for the
   * account.
   */
  outlierTransactions?: OutlierTransactionsInsights | null;
};

export const expenditureInsightsSchema: Schema<ExpenditureInsights> = s.object<ExpenditureInsights>({
  cashFlow: s.optionalNullable(s.lazy(() => amountWithCurrencyWithMonthlyAverageSchema)),
  totalExpenditure: s.optionalNullable(s.lazy(() => expenditureSummarySchema)),
  essentialExpenditure: s.optionalNullable(s.lazy(() => expenditureSummarySchema)),
  nonEssentialExpenditure: s.optionalNullable(s.lazy(() => expenditureSummarySchema)),
  other: s.optionalNullable(s.lazy(() => expenditureSummarySchema)),
  transfersOut: s.optionalNullable(s.lazy(() => expenditureSummarySchema)),
  outlierTransactions: s.optionalNullable(s.lazy(() => outlierTransactionsInsightsSchema)),
  _keysMap: {
    cashFlow: "cash_flow",
    totalExpenditure: "total_expenditure",
    essentialExpenditure: "essential_expenditure",
    nonEssentialExpenditure: "non_essential_expenditure",
    transfersOut: "transfers_out",
    outlierTransactions: "outlier_transactions",
  },
});
