import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type TransferEventsUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  environment: WebhookEnvironmentValues;
};

export const transferEventsUpdateWebhookSchema: Schema<TransferEventsUpdateWebhook> =
  s.object<TransferEventsUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
    },
  });
