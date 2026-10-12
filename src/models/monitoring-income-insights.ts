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

/** An object representing the income subcategory of the report */
export type MonitoringIncomeInsights = {
  /** Details about the total monthly income */
  totalMonthlyIncome: TotalMonthlyIncomeInsights;
  /** Details about the number of income sources */
  incomeSourcesCounts: IncomeSourcesCounts;
  /**
   * An object representing the predicted average monthly net income amount. This amount reflects
   * the funds deposited into the account and may not include any withheld income such as taxes or
   * other payroll deductions
   */
  forecastedMonthlyIncome: ForecastedMonthlyIncome;
  /** An object representing the historical annual income amount. */
  historicalAnnualIncome: HistoricalAnnualIncome;
  /** The income sources for this Item. Each entry in the array is a single income source */
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
