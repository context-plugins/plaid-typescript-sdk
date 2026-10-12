import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationIncomeMetricsSchema,
  type CraVerificationIncomeMetrics,
} from "./cra-verification-income-metrics.js";

/** Aggregated summary of all income streams for this user. */
export type CraVerificationIncomeUserSummary = {
  /** List of a user's aggregated income metrics for each currency. */
  incomeMetrics: CraVerificationIncomeMetrics[];
};

export const craVerificationIncomeUserSummarySchema: Schema<CraVerificationIncomeUserSummary> =
  s.object<CraVerificationIncomeUserSummary>({
    incomeMetrics: s.array(s.lazy(() => craVerificationIncomeMetricsSchema)),
    _keysMap: {
      incomeMetrics: "income_metrics",
    },
  });
