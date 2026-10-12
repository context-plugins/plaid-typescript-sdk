import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when a change to the user's income is detected. To obtain refreshed Bank Income data, send
 * the user through Link's update mode so they can confirm their income sources, or migrate to CRA
 * Income Insights and call `/cra/check_report/create` for a backend refresh. To receive this
 * webhook, subscribe in the [Dashboard](https://dashboard.plaid.com/developers/webhooks).
 */
export type BankIncomeRefreshUpdateWebhook = {
  /** `INCOME` */
  webhookType: string;
  /** `BANK_INCOME_REFRESH_UPDATE` */
  webhookCode: string;
  /** The `user_id` corresponding to the user the webhook has fired for. */
  userId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const bankIncomeRefreshUpdateWebhookSchema: Schema<BankIncomeRefreshUpdateWebhook> =
  s.object<BankIncomeRefreshUpdateWebhook>({
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
