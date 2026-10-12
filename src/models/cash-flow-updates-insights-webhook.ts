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

/**
 * For each user's Item enabled for Cash Flow Updates, this webhook will fire between one and four
 * times a day with information on the status of the update. This webhook will not fire immediately
 * upon enrollment in Cash Flow Updates. Upon receiving the webhook, call
 * `/cra/monitoring_insights/get` to retrieve the updated insights. At approximately the same time
 * as the `INSIGHTS_UPDATED` webhook, any event-driven `CASH_FLOW_UPDATES` webhooks (e.g.
 * `LOW_BALANCE_DETECTED`, `LARGE_DEPOSIT_DETECTED`) that were triggered by the update will also
 * fire. This webhook has been replaced by the `CASH_FLOW_INSIGHTS_UPDATED` webhook for all
 * customers who began using Plaid Check on or after December 10, 2025.
 */
export type CashFlowUpdatesInsightsWebhook = {
  /** `CASH_FLOW_UPDATES` */
  webhookType: string;
  /** `INSIGHTS_UPDATED` */
  webhookCode: string;
  /** Enum for the status of the insights */
  status: MonitoringInsightsStatus;
  /** The `user_id` that the report is associated with */
  userId: string;
  /** The Plaid environment the webhook was sent from */
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
