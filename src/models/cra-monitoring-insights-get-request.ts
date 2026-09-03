import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringConsumerReportPermissiblePurposeSchema,
  type MonitoringConsumerReportPermissiblePurpose,
} from "./monitoring-consumer-report-permissible-purpose.js";

export type CraMonitoringInsightsGetRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  consumerReportPermissiblePurpose: MonitoringConsumerReportPermissiblePurpose;
  userToken?: string;
};

export const craMonitoringInsightsGetRequestSchema: Schema<CraMonitoringInsightsGetRequest> =
  s.object<CraMonitoringInsightsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    consumerReportPermissiblePurpose: monitoringConsumerReportPermissiblePurposeSchema,
    userToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
      userToken: "user_token",
    },
  });
