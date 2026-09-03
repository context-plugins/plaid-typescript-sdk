import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  consumerReportPermissiblePurposeSchema,
  type ConsumerReportPermissiblePurpose,
} from "./consumer-report-permissible-purpose.js";
import {
  craCheckReportCreateBaseReportOptionsSchema,
  type CraCheckReportCreateBaseReportOptions,
} from "./cra-check-report-create-base-report-options.js";
import {
  craCheckReportCreateCashflowInsightsOptionsSchema,
  type CraCheckReportCreateCashflowInsightsOptions,
} from "./cra-check-report-create-cashflow-insights-options.js";
import {
  craCheckReportCreateIncomeInsightsOptionsSchema,
  type CraCheckReportCreateIncomeInsightsOptions,
} from "./cra-check-report-create-income-insights-options.js";
import {
  craCheckReportCreateLendScoreOptionsSchema,
  type CraCheckReportCreateLendScoreOptions,
} from "./cra-check-report-create-lend-score-options.js";
import {
  craCheckReportCreateNetworkInsightsOptionsSchema,
  type CraCheckReportCreateNetworkInsightsOptions,
} from "./cra-check-report-create-network-insights-options.js";
import {
  craCheckReportCreatePartnerInsightsOptionsSchema,
  type CraCheckReportCreatePartnerInsightsOptions,
} from "./cra-check-report-create-partner-insights-options.js";
import { productsSchema, type Products } from "./products.js";

export type CraCheckReportCreateRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  userToken?: string;
  webhook: string;
  daysRequested: number;
  daysRequired?: number;
  clientReportId?: string | null;
  products?: Products[] | null;
  baseReport?: CraCheckReportCreateBaseReportOptions | null;
  cashflowInsights?: CraCheckReportCreateCashflowInsightsOptions | null;
  partnerInsights?: CraCheckReportCreatePartnerInsightsOptions | null;
  lendScore?: CraCheckReportCreateLendScoreOptions | null;
  networkInsights?: CraCheckReportCreateNetworkInsightsOptions | null;
  includeInvestments?: boolean | null;
  incomeInsights?: CraCheckReportCreateIncomeInsightsOptions | null;
  consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose;
};

export const craCheckReportCreateRequestSchema: Schema<CraCheckReportCreateRequest> =
  s.object<CraCheckReportCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    userToken: s.optional(s.string()),
    webhook: s.string(),
    daysRequested: s.number(),
    daysRequired: s.optional(s.number()),
    clientReportId: s.optionalNullable(s.string()),
    products: s.optionalNullable(s.array(s.lazy(() => productsSchema))),
    baseReport: s.optionalNullable(s.lazy(() => craCheckReportCreateBaseReportOptionsSchema)),
    cashflowInsights: s.optionalNullable(s.lazy(() => craCheckReportCreateCashflowInsightsOptionsSchema)),
    partnerInsights: s.optionalNullable(s.lazy(() => craCheckReportCreatePartnerInsightsOptionsSchema)),
    lendScore: s.optionalNullable(s.lazy(() => craCheckReportCreateLendScoreOptionsSchema)),
    networkInsights: s.optionalNullable(s.lazy(() => craCheckReportCreateNetworkInsightsOptionsSchema)),
    includeInvestments: s.optionalNullable(s.boolean()),
    incomeInsights: s.optionalNullable(s.lazy(() => craCheckReportCreateIncomeInsightsOptionsSchema)),
    consumerReportPermissiblePurpose: consumerReportPermissiblePurposeSchema,
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      userToken: "user_token",
      daysRequested: "days_requested",
      daysRequired: "days_required",
      clientReportId: "client_report_id",
      baseReport: "base_report",
      cashflowInsights: "cashflow_insights",
      partnerInsights: "partner_insights",
      lendScore: "lend_score",
      networkInsights: "network_insights",
      includeInvestments: "include_investments",
      incomeInsights: "income_insights",
      consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
    },
  });
