import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { forecastedMonthlyIncomeSchema, type ForecastedMonthlyIncome } from "./forecasted-monthly-income.js";
import { historicalAnnualIncomeSchema, type HistoricalAnnualIncome } from "./historical-annual-income.js";
import { incomeSourcesCountsSchema, type IncomeSourcesCounts } from "./income-sources-counts.js";
import { monitoringIncomeSourceSchema, type MonitoringIncomeSource } from "./monitoring-income-source.js";
import {
  totalMonthlyIncomeInsightsSchema,
  type TotalMonthlyIncomeInsights,
} from "./total-monthly-income-insights.js";

export type MonitoringIncomeInsights = {
  totalMonthlyIncome: TotalMonthlyIncomeInsights;
  incomeSourcesCounts: IncomeSourcesCounts;
  forecastedMonthlyIncome: ForecastedMonthlyIncome;
  historicalAnnualIncome: HistoricalAnnualIncome;
  incomeSources: MonitoringIncomeSource[];
};

export const monitoringIncomeInsightsSchema: Schema<MonitoringIncomeInsights> =
  s.object<MonitoringIncomeInsights>({
    totalMonthlyIncome: totalMonthlyIncomeInsightsSchema,
    incomeSourcesCounts: incomeSourcesCountsSchema,
    forecastedMonthlyIncome: forecastedMonthlyIncomeSchema,
    historicalAnnualIncome: historicalAnnualIncomeSchema,
    incomeSources: s.array(s.lazy(() => monitoringIncomeSourceSchema)),
    _keysMap: {
      totalMonthlyIncome: "total_monthly_income",
      incomeSourcesCounts: "income_sources_counts",
      forecastedMonthlyIncome: "forecasted_monthly_income",
      historicalAnnualIncome: "historical_annual_income",
      incomeSources: "income_sources",
    },
  });
