import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craBankIncomeItemSchema, type CraBankIncomeItem } from "./cra-bank-income-item.js";
import { craBankIncomeSummarySchema, type CraBankIncomeSummary } from "./cra-bank-income-summary.js";
import { craBankIncomeWarningSchema, type CraBankIncomeWarning } from "./cra-bank-income-warning.js";
import {
  craIncomeInsightsUserSummarySchema,
  type CraIncomeInsightsUserSummary,
} from "./cra-income-insights-user-summary.js";
import { craIncomeStreamSchema, type CraIncomeStream } from "./cra-income-stream.js";

export type CraIncomeInsights = {
  reportId?: string;
  generatedTime?: Date;
  daysRequested?: number;
  clientReportId?: string | null;
  items?: CraBankIncomeItem[];
  userSummary?: CraIncomeInsightsUserSummary | null;
  incomeStreams: CraIncomeStream[];
  bankIncomeSummary?: CraBankIncomeSummary;
  warnings?: CraBankIncomeWarning[];
};

export const craIncomeInsightsSchema: Schema<CraIncomeInsights> = s.object<CraIncomeInsights>({
  reportId: s.optional(s.string()),
  generatedTime: s.optional(s.dateTime()),
  daysRequested: s.optional(s.number()),
  clientReportId: s.optionalNullable(s.string()),
  items: s.optional(s.array(s.lazy(() => craBankIncomeItemSchema))),
  userSummary: s.optionalNullable(s.lazy(() => craIncomeInsightsUserSummarySchema)),
  incomeStreams: s.array(s.lazy(() => craIncomeStreamSchema)),
  bankIncomeSummary: s.optional(s.lazy(() => craBankIncomeSummarySchema)),
  warnings: s.optional(s.array(s.lazy(() => craBankIncomeWarningSchema))),
  _keysMap: {
    reportId: "report_id",
    generatedTime: "generated_time",
    daysRequested: "days_requested",
    clientReportId: "client_report_id",
    userSummary: "user_summary",
    incomeStreams: "income_streams",
    bankIncomeSummary: "bank_income_summary",
  },
});
