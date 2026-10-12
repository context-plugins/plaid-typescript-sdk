import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportPartnerInsightsGetOptionsSchema,
  type CraCheckReportPartnerInsightsGetOptions,
} from "./cra-check-report-partner-insights-get-options.js";
import {
  craCheckReportPartnerInsightsGetPartnerInsightsSchema,
  type CraCheckReportPartnerInsightsGetPartnerInsights,
} from "./cra-check-report-partner-insights-get-partner-insights.js";
import { craUserTierSchema, type CraUserTier } from "./cra-user-tier.js";

/**
 * CraCheckReportPartnerInsightsGetRequest defines the request schema for
 * `/cra/check_report/partner_insights/get`.
 */
export type CraCheckReportPartnerInsightsGetRequest = {
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
  /** The third-party user token associated with the requested User data. */
  thirdPartyUserToken?: string;
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
  /** The tier of the user. */
  userTier?: CraUserTier | null;
  /**
   * Deprecated. This field is no longer accepted for new clients (created on or after 2026-07-01).
   * New clients should specify required products when creating the Consumer Report. Existing
   * integrations may continue to pass `partner_insights`.
   *
   * @deprecated
   */
  partnerInsights?: CraCheckReportPartnerInsightsGetPartnerInsights;
  /**
   * Deprecated, specify `partner_insights.prism_versions` instead.
   *
   * @deprecated
   */
  options?: CraCheckReportPartnerInsightsGetOptions | null;
};

export const craCheckReportPartnerInsightsGetRequestSchema: Schema<CraCheckReportPartnerInsightsGetRequest> =
  s.object<CraCheckReportPartnerInsightsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    thirdPartyUserToken: s.optional(s.string()),
    userToken: s.optional(s.string()),
    userTier: s.optionalNullable(s.lazy(() => craUserTierSchema)),
    partnerInsights: s.optional(s.lazy(() => craCheckReportPartnerInsightsGetPartnerInsightsSchema)),
    options: s.optionalNullable(s.lazy(() => craCheckReportPartnerInsightsGetOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      thirdPartyUserToken: "third_party_user_token",
      userToken: "user_token",
      userTier: "user_tier",
      partnerInsights: "partner_insights",
    },
  });
