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
 * a new loan payment. Upon receiving the webhook, call `/cra/monitoring_insights/get` to retrieve
 * the updated insights.
 */
export type CashFlowUpdatesNewLoanPaymentWebhook = {
  /** `CASH_FLOW_UPDATES` */
  webhookType: string;
  /** `NEW_LOAN_PAYMENT_DETECTED` */
  webhookCode: string;
  /** Enum for the status of the insights */
  status: MonitoringInsightsStatus;
  /** The `user_id` that the report is associated with */
  userId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const cashFlowUpdatesNewLoanPaymentWebhookSchema: Schema<CashFlowUpdatesNewLoanPaymentWebhook> =
  s.object<CashFlowUpdatesNewLoanPaymentWebhook>({
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
