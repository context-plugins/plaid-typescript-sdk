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

export type CraCheckReportIncomeInsightsGetRequest = {
  clientId?: string;
  secret?: string;
  userToken?: string;
  thirdPartyUserToken?: string;
  userId?: string;
  options?: CraCheckReportIncomeInsightsGetOptions | null;
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
