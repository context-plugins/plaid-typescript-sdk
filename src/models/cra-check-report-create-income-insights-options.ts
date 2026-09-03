import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { incomeInsightsFilterSchema, type IncomeInsightsFilter } from "./income-insights-filter.js";

export type CraCheckReportCreateIncomeInsightsOptions = {
  incomeInsightsFilter?: IncomeInsightsFilter | null;
  incomeInsightsVersion: "II2";
};

export const craCheckReportCreateIncomeInsightsOptionsSchema: Schema<CraCheckReportCreateIncomeInsightsOptions> =
  s.object<CraCheckReportCreateIncomeInsightsOptions>({
    incomeInsightsFilter: s.optionalNullable(s.lazy(() => incomeInsightsFilterSchema)),
    incomeInsightsVersion: s.literal("II2"),
    _keysMap: {
      incomeInsightsFilter: "income_insights_filter",
      incomeInsightsVersion: "income_insights_version",
    },
  });
