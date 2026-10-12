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
 * For each user's Item enabled for Cash Flow Updates, this webhook will fire when an update detects
 * that an expected deposit was missed. Upon receiving the webhook, call
 * `/cra/monitoring_insights/get` to retrieve the updated insights.
 */
export type CashFlowUpdatesExpectedDepositMissedWebhook = {
  /** `CASH_FLOW_UPDATES` */
  webhookType: string;
  /** `EXPECTED_DEPOSIT_MISSED` */
  webhookCode: string;
  /** Enum for the status of the insights */
  status: MonitoringInsightsStatus;
  /** The `user_id` that the report is associated with */
  userId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const cashFlowUpdatesExpectedDepositMissedWebhookSchema: Schema<CashFlowUpdatesExpectedDepositMissedWebhook> =
  s.object<CashFlowUpdatesExpectedDepositMissedWebhook>({
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
