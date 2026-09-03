import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkTokenCreateRequestCraOptionsBaseReportSchema,
  type LinkTokenCreateRequestCraOptionsBaseReport,
} from "./link-token-create-request-cra-options-base-report.js";
import {
  linkTokenCreateRequestCraOptionsCashflowInsightsSchema,
  type LinkTokenCreateRequestCraOptionsCashflowInsights,
} from "./link-token-create-request-cra-options-cashflow-insights.js";
import {
  linkTokenCreateRequestCraOptionsIncomeInsightsSchema,
  type LinkTokenCreateRequestCraOptionsIncomeInsights,
} from "./link-token-create-request-cra-options-income-insights.js";
import {
  linkTokenCreateRequestCraOptionsLendScoreSchema,
  type LinkTokenCreateRequestCraOptionsLendScore,
} from "./link-token-create-request-cra-options-lend-score.js";
import {
  linkTokenCreateRequestCraOptionsNetworkInsightsSchema,
  type LinkTokenCreateRequestCraOptionsNetworkInsights,
} from "./link-token-create-request-cra-options-network-insights.js";
import {
  linkTokenCreateRequestCraOptionsPartnerInsightsSchema,
  type LinkTokenCreateRequestCraOptionsPartnerInsights,
} from "./link-token-create-request-cra-options-partner-insights.js";

export type LinkTokenCreateRequestCraOptions = {
  daysRequested: number;
  daysRequired?: number;
  clientReportId?: string | null;
  partnerInsights?: LinkTokenCreateRequestCraOptionsPartnerInsights;
  baseReport?: LinkTokenCreateRequestCraOptionsBaseReport;
  cashflowInsights?: LinkTokenCreateRequestCraOptionsCashflowInsights;
  lendScore?: LinkTokenCreateRequestCraOptionsLendScore;
  networkInsights?: LinkTokenCreateRequestCraOptionsNetworkInsights;
  includeInvestments?: boolean | null;
  incomeInsights?: LinkTokenCreateRequestCraOptionsIncomeInsights;
};

export const linkTokenCreateRequestCraOptionsSchema: Schema<LinkTokenCreateRequestCraOptions> =
  s.object<LinkTokenCreateRequestCraOptions>({
    daysRequested: s.number(),
    daysRequired: s.optional(s.number()),
    clientReportId: s.optionalNullable(s.string()),
    partnerInsights: s.optional(s.lazy(() => linkTokenCreateRequestCraOptionsPartnerInsightsSchema)),
    baseReport: s.optional(s.lazy(() => linkTokenCreateRequestCraOptionsBaseReportSchema)),
    cashflowInsights: s.optional(s.lazy(() => linkTokenCreateRequestCraOptionsCashflowInsightsSchema)),
    lendScore: s.optional(s.lazy(() => linkTokenCreateRequestCraOptionsLendScoreSchema)),
    networkInsights: s.optional(s.lazy(() => linkTokenCreateRequestCraOptionsNetworkInsightsSchema)),
    includeInvestments: s.optionalNullable(s.boolean()),
    incomeInsights: s.optional(s.lazy(() => linkTokenCreateRequestCraOptionsIncomeInsightsSchema)),
    _keysMap: {
      daysRequested: "days_requested",
      daysRequired: "days_required",
      clientReportId: "client_report_id",
      partnerInsights: "partner_insights",
      baseReport: "base_report",
      cashflowInsights: "cashflow_insights",
      lendScore: "lend_score",
      networkInsights: "network_insights",
      includeInvestments: "include_investments",
      incomeInsights: "income_insights",
    },
  });
