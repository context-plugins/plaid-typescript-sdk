import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringInsightsStatusSchema,
  type MonitoringInsightsStatus,
} from "./monitoring-insights-status.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type CashFlowUpdatesInsightsWebhook = {
  webhookType: string;
  webhookCode: string;
  status: MonitoringInsightsStatus;
  userId: string;
  environment: WebhookEnvironmentValues;
};

export const cashFlowUpdatesInsightsWebhookSchema: Schema<CashFlowUpdatesInsightsWebhook> =
  s.object<CashFlowUpdatesInsightsWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    status: monitoringInsightsStatusSchema,
    userId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
    },
  });
