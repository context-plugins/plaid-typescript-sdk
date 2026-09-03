import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type CraPartnerInsightsCompleteWebhook = {
  webhookType: string;
  webhookCode: string;
  userId: string;
  environment: WebhookEnvironmentValues;
};

export const craPartnerInsightsCompleteWebhookSchema: Schema<CraPartnerInsightsCompleteWebhook> =
  s.object<CraPartnerInsightsCompleteWebhook>({
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
