import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when the attempt to refresh Payroll Income data for a user via
 * `/credit/payroll_income/refresh` failed because the user must re-connect their payroll account.
 */
export type IncomeVerificationRefreshReconnectNeededWebhook = {
  /** `INCOME` */
  webhookType: string;
  /** `INCOME_VERIFICATION_REFRESH_RECONNECT_NEEDED` */
  webhookCode: string;
  /** The `user_id` corresponding to the user the webhook has fired for. */
  userId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const incomeVerificationRefreshReconnectNeededWebhookSchema: Schema<IncomeVerificationRefreshReconnectNeededWebhook> =
  s.object<IncomeVerificationRefreshReconnectNeededWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
    },
  });
