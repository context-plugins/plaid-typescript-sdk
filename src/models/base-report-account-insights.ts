import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  baseReportAverageFlowInsightsSchema,
  type BaseReportAverageFlowInsights,
} from "./base-report-average-flow-insights.js";
import {
  baseReportLongestGapInsightsSchema,
  type BaseReportLongestGapInsights,
} from "./base-report-longest-gap-insights.js";
import {
  baseReportNumberFlowInsightsSchema,
  type BaseReportNumberFlowInsights,
} from "./base-report-number-flow-insights.js";

export type BaseReportAccountInsights = {
  oldestTransactionDate?: string | null;
  mostRecentTransactionDate?: string | null;
  daysAvailable?: number;
  averageDaysBetweenTransactions?: number;
  longestGapsBetweenTransactions?: BaseReportLongestGapInsights[];
  numberOfInflows?: BaseReportNumberFlowInsights[];
  averageInflowAmounts?: BaseReportAverageFlowInsights[];
  numberOfOutflows?: BaseReportNumberFlowInsights[];
  averageOutflowAmounts?: BaseReportAverageFlowInsights[];
  numberOfDaysNoTransactions?: number;
};

export const baseReportAccountInsightsSchema: Schema<BaseReportAccountInsights> =
  s.object<BaseReportAccountInsights>({
    oldestTransactionDate: s.optionalNullable(s.dateOnly()),
    mostRecentTransactionDate: s.optionalNullable(s.dateOnly()),
    daysAvailable: s.optional(s.number()),
    averageDaysBetweenTransactions: s.optional(s.number()),
    longestGapsBetweenTransactions: s.optional(s.array(s.lazy(() => baseReportLongestGapInsightsSchema))),
    numberOfInflows: s.optional(s.array(s.lazy(() => baseReportNumberFlowInsightsSchema))),
    averageInflowAmounts: s.optional(s.array(s.lazy(() => baseReportAverageFlowInsightsSchema))),
    numberOfOutflows: s.optional(s.array(s.lazy(() => baseReportNumberFlowInsightsSchema))),
    averageOutflowAmounts: s.optional(s.array(s.lazy(() => baseReportAverageFlowInsightsSchema))),
    numberOfDaysNoTransactions: s.optional(s.number()),
    _keysMap: {
      oldestTransactionDate: "oldest_transaction_date",
      mostRecentTransactionDate: "most_recent_transaction_date",
      daysAvailable: "days_available",
      averageDaysBetweenTransactions: "average_days_between_transactions",
      longestGapsBetweenTransactions: "longest_gaps_between_transactions",
      numberOfInflows: "number_of_inflows",
      averageInflowAmounts: "average_inflow_amounts",
      numberOfOutflows: "number_of_outflows",
      averageOutflowAmounts: "average_outflow_amounts",
      numberOfDaysNoTransactions: "number_of_days_no_transactions",
    },
  });
