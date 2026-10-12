import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craIncomeMetricsSchema, type CraIncomeMetrics } from "./cra-income-metrics.js";
import { craIncomeStreamInsightsSchema, type CraIncomeStreamInsights } from "./cra-income-stream-insights.js";
import { craIncomeTransactionSchema, type CraIncomeTransaction } from "./cra-income-transaction.js";

/** An income stream detected for the user. */
export type CraIncomeStream = {
  /**
   * A unique identifier for an income stream. If the report is regenerated and a new `report_id` is
   * created, the new report will have a new set of `income_stream_id`s.
   */
  incomeStreamId: string;
  /**
   * Minimum of all dates within the specific income stream for days requested by the client. The
   * date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  startDate: string;
  /**
   * Maximum of all dates within the specific income stream for days requested by the client. The
   * date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  endDate: string;
  /** The most common name or original description for the underlying income transactions. */
  description: string;
  /** Modeled insights for a given income stream. */
  insights: CraIncomeStreamInsights;
  /** Modeled income metrics for a given income stream or user summary. */
  incomeMetrics: CraIncomeMetrics;
  /** The transactions data for the income stream ordered by ascending date. */
  transactions: CraIncomeTransaction[];
};

export const craIncomeStreamSchema: Schema<CraIncomeStream> = s.object<CraIncomeStream>({
  incomeStreamId: s.string(),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  description: s.string(),
  insights: craIncomeStreamInsightsSchema,
  incomeMetrics: craIncomeMetricsSchema,
  transactions: s.array(s.lazy(() => craIncomeTransactionSchema)),
  _keysMap: {
    incomeStreamId: "income_stream_id",
    startDate: "start_date",
    endDate: "end_date",
    incomeMetrics: "income_metrics",
  },
});
