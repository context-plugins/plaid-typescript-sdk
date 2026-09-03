import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craIncomeMetricsSchema, type CraIncomeMetrics } from "./cra-income-metrics.js";

export type CraIncomeInsightsUserSummary = {
  incomeMetrics: CraIncomeMetrics[];
};

export const craIncomeInsightsUserSummarySchema: Schema<CraIncomeInsightsUserSummary> =
  s.object<CraIncomeInsightsUserSummary>({
    incomeMetrics: s.array(s.lazy(() => craIncomeMetricsSchema)),
    _keysMap: {
      incomeMetrics: "income_metrics",
    },
  });
