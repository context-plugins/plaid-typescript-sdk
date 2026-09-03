import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportCashflowInsightsGetOptionsSchema,
  type CraCheckReportCashflowInsightsGetOptions,
} from "./cra-check-report-cashflow-insights-get-options.js";

export type CraCheckReportCashflowInsightsGetRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  thirdPartyUserToken?: string;
  userToken?: string;
  options?: CraCheckReportCashflowInsightsGetOptions | null;
};

export const craCheckReportCashflowInsightsGetRequestSchema: Schema<CraCheckReportCashflowInsightsGetRequest> =
  s.object<CraCheckReportCashflowInsightsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    thirdPartyUserToken: s.optional(s.string()),
    userToken: s.optional(s.string()),
    options: s.optionalNullable(s.lazy(() => craCheckReportCashflowInsightsGetOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      thirdPartyUserToken: "third_party_user_token",
      userToken: "user_token",
    },
  });
