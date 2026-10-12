import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired when a bank income report has failed to generate */
export type CraBankIncomeErrorWebhook = {
  /** `CRA_INCOME` */
  webhookType: string;
  /** `ERROR` */
  webhookCode: string;
  /** The `user_id` corresponding to the user the webhook has fired for. */
  userId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const craBankIncomeErrorWebhookSchema: Schema<CraBankIncomeErrorWebhook> =
  s.object<CraBankIncomeErrorWebhook>({
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
