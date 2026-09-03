import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportNetworkInsightsGetOptionsSchema,
  type CraCheckReportNetworkInsightsGetOptions,
} from "./cra-check-report-network-insights-get-options.js";

export type CraCheckReportNetworkInsightsGetRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  options?: CraCheckReportNetworkInsightsGetOptions | null;
  thirdPartyUserToken?: string;
  userToken?: string;
};

export const craCheckReportNetworkInsightsGetRequestSchema: Schema<CraCheckReportNetworkInsightsGetRequest> =
  s.object<CraCheckReportNetworkInsightsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    options: s.optionalNullable(s.lazy(() => craCheckReportNetworkInsightsGetOptionsSchema)),
    thirdPartyUserToken: s.optional(s.string()),
    userToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      thirdPartyUserToken: "third_party_user_token",
      userToken: "user_token",
    },
  });
