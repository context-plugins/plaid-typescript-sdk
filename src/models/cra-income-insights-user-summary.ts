import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craIncomeMetricsSchema, type CraIncomeMetrics } from "./cra-income-metrics.js";

/** Aggregated summary of all income streams for this user. */
export type CraIncomeInsightsUserSummary = {
  /** List of a user's aggregated income metrics for each currency. */
  incomeMetrics: CraIncomeMetrics[];
};

export const craIncomeInsightsUserSummarySchema: Schema<CraIncomeInsightsUserSummary> =
  s.object<CraIncomeInsightsUserSummary>({
    incomeMetrics: s.array(s.lazy(() => craIncomeMetricsSchema)),
    _keysMap: {
      incomeMetrics: "income_metrics",
    },
  });
