import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationIncomeMetricsSchema,
  type CraVerificationIncomeMetrics,
} from "./cra-verification-income-metrics.js";

export type CraVerificationIncomeUserSummary = {
  incomeMetrics: CraVerificationIncomeMetrics[];
};

export const craVerificationIncomeUserSummarySchema: Schema<CraVerificationIncomeUserSummary> =
  s.object<CraVerificationIncomeUserSummary>({
    incomeMetrics: s.array(s.lazy(() => craVerificationIncomeMetricsSchema)),
    _keysMap: {
      incomeMetrics: "income_metrics",
    },
  });
