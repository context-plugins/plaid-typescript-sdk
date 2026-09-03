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

export type ExpenditureInsights = {
  cashFlow?: AmountWithCurrencyWithMonthlyAverage | null;
  totalExpenditure?: ExpenditureSummary | null;
  essentialExpenditure?: ExpenditureSummary | null;
  nonEssentialExpenditure?: ExpenditureSummary | null;
  other?: ExpenditureSummary | null;
  transfersOut?: ExpenditureSummary | null;
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
