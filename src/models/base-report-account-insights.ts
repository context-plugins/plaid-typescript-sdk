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

/**
 * Calculated insights derived from transaction-level data. This field has been deprecated in favor
 * of [Base Report attributes aggregated across
 * accounts](https://plaid.com/docs/api/products/check/#cra-check_report-base_report-get-response-report-attributes)
 * and will be removed in a future release.
 */
export type BaseReportAccountInsights = {
  /** Date of the earliest transaction for the account. */
  oldestTransactionDate?: string | null;
  /** Date of the most recent transaction for the account. */
  mostRecentTransactionDate?: string | null;
  /** Number of days available for the account. */
  daysAvailable?: number;
  /** Average number of days between sequential transactions */
  averageDaysBetweenTransactions?: number;
  /**
   * Longest gap between sequential transactions in a time period. This array can include multiple
   * time periods.
   */
  longestGapsBetweenTransactions?: BaseReportLongestGapInsights[];
  /**
   * The number of debits into the account. This array will be empty for non-depository accounts.
   */
  numberOfInflows?: BaseReportNumberFlowInsights[];
  /**
   * Average amount of debit transactions into the account in a time period. This array will be
   * empty for non-depository accounts. This field only takes into account USD transactions from the
   * account.
   */
  averageInflowAmounts?: BaseReportAverageFlowInsights[];
  /**
   * The number of outflows from the account. This array will be empty for non-depository accounts.
   */
  numberOfOutflows?: BaseReportNumberFlowInsights[];
  /**
   * Average amount of transactions out of the account in a time period. This array will be empty
   * for non-depository accounts. This field only takes into account USD transactions from the
   * account.
   */
  averageOutflowAmounts?: BaseReportAverageFlowInsights[];
  /** Number of days with no transactions */
  numberOfDaysNoTransactions?: number;
};

export const baseReportAccountInsightsSchema: Schema<BaseReportAccountInsights> =
  s.object<BaseReportAccountInsights>({
    oldestTransactionDate: s.optionalNullable(s.dateOnly()),
    mostRecentTransactionDate: s.optionalNullable(s.dateOnly()),
    daysAvailable: s.optional(s.int()),
    averageDaysBetweenTransactions: s.optional(s.float64()),
    longestGapsBetweenTransactions: s.optional(s.array(s.lazy(() => baseReportLongestGapInsightsSchema))),
    numberOfInflows: s.optional(s.array(s.lazy(() => baseReportNumberFlowInsightsSchema))),
    averageInflowAmounts: s.optional(s.array(s.lazy(() => baseReportAverageFlowInsightsSchema))),
    numberOfOutflows: s.optional(s.array(s.lazy(() => baseReportNumberFlowInsightsSchema))),
    averageOutflowAmounts: s.optional(s.array(s.lazy(() => baseReportAverageFlowInsightsSchema))),
    numberOfDaysNoTransactions: s.optional(s.int()),
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
