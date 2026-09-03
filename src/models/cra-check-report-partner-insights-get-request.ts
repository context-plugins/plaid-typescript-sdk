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

export type CraCheckReportPartnerInsightsGetRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  thirdPartyUserToken?: string;
  userToken?: string;
  userTier?: CraUserTier | null;
  partnerInsights?: CraCheckReportPartnerInsightsGetPartnerInsights;
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
