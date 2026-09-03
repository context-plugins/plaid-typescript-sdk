import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationIncomeMetricsSchema,
  type CraVerificationIncomeMetrics,
} from "./cra-verification-income-metrics.js";
import {
  craVerificationIncomeStreamInsightsSchema,
  type CraVerificationIncomeStreamInsights,
} from "./cra-verification-income-stream-insights.js";
import {
  craVerificationIncomeTransactionSchema,
  type CraVerificationIncomeTransaction,
} from "./cra-verification-income-transaction.js";

export type CraVerificationIncomeStream = {
  incomeStreamId: string;
  startDate: string;
  endDate: string;
  description: string;
  insights: CraVerificationIncomeStreamInsights;
  incomeMetrics: CraVerificationIncomeMetrics;
  transactions: CraVerificationIncomeTransaction[];
};

export const craVerificationIncomeStreamSchema: Schema<CraVerificationIncomeStream> =
  s.object<CraVerificationIncomeStream>({
    incomeStreamId: s.string(),
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    description: s.string(),
    insights: craVerificationIncomeStreamInsightsSchema,
    incomeMetrics: craVerificationIncomeMetricsSchema,
    transactions: s.array(s.lazy(() => craVerificationIncomeTransactionSchema)),
    _keysMap: {
      incomeStreamId: "income_stream_id",
      startDate: "start_date",
      endDate: "end_date",
      incomeMetrics: "income_metrics",
    },
  });
