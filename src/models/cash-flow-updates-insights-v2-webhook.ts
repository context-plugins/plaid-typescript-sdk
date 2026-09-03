import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashFlowInsightSchema, type CashFlowInsight } from "./cash-flow-insight.js";
import {
  monitoringInsightsStatusSchema,
  type MonitoringInsightsStatus,
} from "./monitoring-insights-status.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type CashFlowUpdatesInsightsV2Webhook = {
  webhookType: string;
  webhookCode: string;
  status: MonitoringInsightsStatus;
  userId: string;
  insights: CashFlowInsight[];
  environment: WebhookEnvironmentValues;
};

export const cashFlowUpdatesInsightsV2WebhookSchema: Schema<CashFlowUpdatesInsightsV2Webhook> =
  s.object<CashFlowUpdatesInsightsV2Webhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    status: monitoringInsightsStatusSchema,
    userId: s.string(),
    insights: s.array(s.lazy(() => cashFlowInsightSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
    },
  });
