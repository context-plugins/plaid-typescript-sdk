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

/** CraCheckReportCreateRequest defines the request schema for `/cra/check_report/create`. */
export type CraCheckReportCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
  /** The destination URL to which webhooks will be sent */
  webhook: string;
  /**
   * The number of days of data to request for the report. Default value is 365; maximum is 731;
   * minimum is 180. If a value lower than 180 is provided, a minimum of 180 days of history will be
   * requested.
   */
  daysRequested: number;
  /** The minimum number of days of data required for the report to be successfully generated. */
  daysRequired?: number;
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  clientReportId?: string | null;
  /**
   * Specifies a list of products to generate when creating the report (in addition to the Base
   * Report, which is always generated). These products will be made available before a success
   * webhook is sent. Note that specifying `cra_partner_insights` in this field will trigger a
   * billable event. Other products are not billed until the respective reports are retrieved via
   * their product-specific `/get` endpoints.
   */
  products?: Products[] | null;
  /** Defines configuration options to generate a Base Report */
  baseReport?: CraCheckReportCreateBaseReportOptions | null;
  /** Defines configuration options to generate Cashflow Insights */
  cashflowInsights?: CraCheckReportCreateCashflowInsightsOptions | null;
  /** Defines configuration to generate Partner Insights. */
  partnerInsights?: CraCheckReportCreatePartnerInsightsOptions | null;
  /** Defines configuration options to generate the LendScore */
  lendScore?: CraCheckReportCreateLendScoreOptions | null;
  /** Defines configuration options to generate Network Insights */
  networkInsights?: CraCheckReportCreateNetworkInsightsOptions | null;
  /** Indicates that investment data should be extracted from the linked account(s). */
  includeInvestments?: boolean | null;
  /** Defines configuration options to generate Income Insights. */
  incomeInsights?: CraCheckReportCreateIncomeInsightsOptions | null;
  /**
   * Describes the reason you are generating a Consumer Report for this user. When calling
   * `/link/token/create`, this field is required when using Plaid Check (CRA) products; invalid if
   * not using Plaid Check (CRA) products.
   *
   * `ACCOUNT_REVIEW_CREDIT`: In connection with a consumer credit transaction for the review or
   * collection of an account pursuant to FCRA Section 604(a)(3)(A).
   *
   * `ACCOUNT_REVIEW_NON_CREDIT`: For a legitimate business need of the information to review a
   * non-credit account provided primarily for personal, family, or household purposes to determine
   * whether the consumer continues to meet the terms of the account pursuant to FCRA Section
   * 604(a)(3)(F)(2).
   *
   * `EXTENSION_OF_CREDIT`: In connection with a credit transaction initiated by and involving the
   * consumer pursuant to FCRA Section 604(a)(3)(A).
   *
   * `LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING`: For a legitimate business need in connection with
   * a business transaction initiated by the consumer primarily for personal, family, or household
   * purposes in connection with a property rental assessment pursuant to FCRA Section
   * 604(a)(3)(F)(i).
   *
   * `LEGITIMATE_BUSINESS_NEED_OTHER`: For a legitimate business need in connection with a business
   * transaction made primarily for personal, family, or household initiated by the consumer
   * pursuant to FCRA Section 604(a)(3)(F)(i).
   *
   * `WRITTEN_INSTRUCTION_PREQUALIFICATION`: In accordance with the written instructions of the
   * consumer pursuant to FCRA Section 604(a)(2), to evaluate an application's profile to make an
   * offer to the consumer.
   *
   * `WRITTEN_INSTRUCTION_OTHER`: In accordance with the written instructions of the consumer
   * pursuant to FCRA Section 604(a)(2), such as when an individual agrees to act as a guarantor or
   * assumes personal liability for a consumer, business, or commercial loan.
   *
   * `ELIGIBILITY_FOR_GOVT_BENEFITS`: In connection with an eligibility determination for a
   * government benefit where the entity is required to consider an applicant's financial status
   * pursuant to FCRA Section 604(a)(3)(D).
   */
  consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose;
};

export const craCheckReportCreateRequestSchema: Schema<CraCheckReportCreateRequest> =
  s.object<CraCheckReportCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    userToken: s.optional(s.string()),
    webhook: s.string(),
    daysRequested: s.int(),
    daysRequired: s.optional(s.int()),
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
