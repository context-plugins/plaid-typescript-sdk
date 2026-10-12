import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportIncomeInsightsGetOptionsSchema,
  type CraCheckReportIncomeInsightsGetOptions,
} from "./cra-check-report-income-insights-get-options.js";
import {
  craCheckReportPermissiblePurposeSchema,
  type CraCheckReportPermissiblePurpose,
} from "./cra-check-report-permissible-purpose.js";

/** Defines the request schema for `/cra/check_report/income_insights/get`. */
export type CraCheckReportIncomeInsightsGetRequest = {
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
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
  /** The third-party user token associated with the requested User data. */
  thirdPartyUserToken?: string;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
  /**
   * Deprecated. This field is no longer accepted for new clients (created on or after 2026-07-01).
   * New clients should specify required products when creating the Consumer Report. Existing
   * integrations may continue to pass `options`.
   *
   * @deprecated
   */
  options?: CraCheckReportIncomeInsightsGetOptions | null;
  /**
   * The CRA report token (formatted `cra-report-<env>-<uuid>`) identifying a specific consumer
   * report. When provided alongside `consumer_report_permissible_purpose`, pins retrieval to that
   * report and stamps its permissible purpose. If omitted, the most recently generated report for
   * the user is returned.
   */
  reportId?: string;
  consumerReportPermissiblePurpose?: CraCheckReportPermissiblePurpose;
};

export const craCheckReportIncomeInsightsGetRequestSchema: Schema<CraCheckReportIncomeInsightsGetRequest> =
  s.object<CraCheckReportIncomeInsightsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.optional(s.string()),
    thirdPartyUserToken: s.optional(s.string()),
    userId: s.optional(s.string()),
    options: s.optionalNullable(s.lazy(() => craCheckReportIncomeInsightsGetOptionsSchema)),
    reportId: s.optional(s.string()),
    consumerReportPermissiblePurpose: s.optional(s.lazy(() => craCheckReportPermissiblePurposeSchema)),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      thirdPartyUserToken: "third_party_user_token",
      userId: "user_id",
      reportId: "report_id",
      consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
    },
  });
