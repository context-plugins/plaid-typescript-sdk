import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashflowReportHistoricalBalanceSchema,
  type CashflowReportHistoricalBalance,
} from "./cashflow-report-historical-balance.js";
import {
  cashflowReportMonthlySummarySchema,
  type CashflowReportMonthlySummary,
} from "./cashflow-report-monthly-summary.js";

export type CashflowAccountInsights = {
  historicalBalances: CashflowReportHistoricalBalance[];
  monthlySummaries: CashflowReportMonthlySummary[];
};

export const cashflowAccountInsightsSchema: Schema<CashflowAccountInsights> =
  s.object<CashflowAccountInsights>({
    historicalBalances: s.array(s.lazy(() => cashflowReportHistoricalBalanceSchema)),
    monthlySummaries: s.array(s.lazy(() => cashflowReportMonthlySummarySchema)),
    _keysMap: {
      historicalBalances: "historical_balances",
      monthlySummaries: "monthly_summaries",
    },
  });
