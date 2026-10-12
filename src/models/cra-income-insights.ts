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

/** The Check Income Insights Report for an end user. */
export type CraIncomeInsights = {
  /** The unique identifier associated with the Check Income Insights Report. */
  reportId?: string;
  /** The time when the Check Income Insights Report was generated. */
  generatedTime?: Date;
  /** The number of days requested by the customer for the Check Income Insights Report. */
  daysRequested?: number;
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  clientReportId?: string | null;
  /** The list of Items in the report along with the associated metadata about the Item. */
  items?: CraBankIncomeItem[];
  /** Aggregated summary of all income streams for this user. */
  userSummary?: CraIncomeInsightsUserSummary | null;
  /** The list of income streams for this user. */
  incomeStreams: CraIncomeStream[];
  /**
   * This is a V1 (II1) schema. For the V2 (II2) equivalent, use `CraIncomeInsightsUserSummary`.
   * Summary for income across all income sources and items (max history of 730 days).
   */
  bankIncomeSummary?: CraBankIncomeSummary;
  /**
   * If data from the report was unable to be retrieved, the warnings object will contain
   * information about the error that caused the data to be incomplete.
   */
  warnings?: CraBankIncomeWarning[];
};

export const craIncomeInsightsSchema: Schema<CraIncomeInsights> = s.object<CraIncomeInsights>({
  reportId: s.optional(s.string()),
  generatedTime: s.optional(s.dateTime()),
  daysRequested: s.optional(s.int()),
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
