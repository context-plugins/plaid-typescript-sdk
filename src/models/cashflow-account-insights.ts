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

/**
 * Insights on the account level. These are only returned for Credit and Depository type accounts.
 */
export type CashflowAccountInsights = {
  /**
   * Calculated data about the historical balances on the account.
   *
   * Available for `credit` and `depository` type accounts.
   */
  historicalBalances: CashflowReportHistoricalBalance[];
  /** Monthly summary statistics derived from transaction-level data. */
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
