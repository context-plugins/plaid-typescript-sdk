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

/** Specifies options for initializing Link for use with Plaid Check products */
export type LinkTokenCreateRequestCraOptions = {
  /**
   * The number of days of history to include in Plaid Check products. Maximum is 731; minimum is
   * 180. If a value lower than 180 is provided, a minimum of 180 days of history will be requested.
   */
  daysRequested: number;
  /** The minimum number of days of data required for the report to be successfully generated. */
  daysRequired?: number;
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  clientReportId?: string | null;
  /** Specifies options for initializing Link for use with the Credit Partner Insights product. */
  partnerInsights?: LinkTokenCreateRequestCraOptionsPartnerInsights;
  /**
   * Specifies options for initializing Link for use with the Base Report product, specifically the
   * `client_report_id`.
   */
  baseReport?: LinkTokenCreateRequestCraOptionsBaseReport;
  /** Specifies options for initializing Link for use with the Cashflow Insights product. */
  cashflowInsights?: LinkTokenCreateRequestCraOptionsCashflowInsights;
  /** Specifies options for initializing Link for use with the CRA LendScore product. */
  lendScore?: LinkTokenCreateRequestCraOptionsLendScore;
  /** Specifies options for initializing Link for use with the CRA Network Insights product. */
  networkInsights?: LinkTokenCreateRequestCraOptionsNetworkInsights;
  /** Indicates that investment data should be extracted from the linked account(s). */
  includeInvestments?: boolean | null;
  /** Specifies options for initializing Link for use with the CRA Income Insights product. */
  incomeInsights?: LinkTokenCreateRequestCraOptionsIncomeInsights;
};

export const linkTokenCreateRequestCraOptionsSchema: Schema<LinkTokenCreateRequestCraOptions> =
  s.object<LinkTokenCreateRequestCraOptions>({
    daysRequested: s.int(),
    daysRequired: s.optional(s.int()),
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
