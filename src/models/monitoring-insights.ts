import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringIncomeInsightsSchema,
  type MonitoringIncomeInsights,
} from "./monitoring-income-insights.js";
import { monitoringLoanInsightsSchema, type MonitoringLoanInsights } from "./monitoring-loan-insights.js";

export type MonitoringInsights = {
  income: MonitoringIncomeInsights;
  loans: MonitoringLoanInsights;
};

export const monitoringInsightsSchema: Schema<MonitoringInsights> = s.object<MonitoringInsights>({
  income: monitoringIncomeInsightsSchema,
  loans: monitoringLoanInsightsSchema,
});
