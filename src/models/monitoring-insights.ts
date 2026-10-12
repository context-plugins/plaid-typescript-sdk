import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringIncomeInsightsSchema,
  type MonitoringIncomeInsights,
} from "./monitoring-income-insights.js";
import { monitoringLoanInsightsSchema, type MonitoringLoanInsights } from "./monitoring-loan-insights.js";

/** An object representing the Monitoring Insights for the given Item */
export type MonitoringInsights = {
  /** An object representing the income subcategory of the report */
  income: MonitoringIncomeInsights;
  /** An object representing the loan exposure subcategory of the report */
  loans: MonitoringLoanInsights;
};

export const monitoringInsightsSchema: Schema<MonitoringInsights> = s.object<MonitoringInsights>({
  income: monitoringIncomeInsightsSchema,
  loans: monitoringLoanInsightsSchema,
});
