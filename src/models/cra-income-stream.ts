import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craIncomeMetricsSchema, type CraIncomeMetrics } from "./cra-income-metrics.js";
import { craIncomeStreamInsightsSchema, type CraIncomeStreamInsights } from "./cra-income-stream-insights.js";
import { craIncomeTransactionSchema, type CraIncomeTransaction } from "./cra-income-transaction.js";

export type CraIncomeStream = {
  incomeStreamId: string;
  startDate: string;
  endDate: string;
  description: string;
  insights: CraIncomeStreamInsights;
  incomeMetrics: CraIncomeMetrics;
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
