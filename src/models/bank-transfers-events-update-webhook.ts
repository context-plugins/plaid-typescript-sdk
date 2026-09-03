import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type BankTransfersEventsUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  environment: WebhookEnvironmentValues;
};

export const bankTransfersEventsUpdateWebhookSchema: Schema<BankTransfersEventsUpdateWebhook> =
  s.object<BankTransfersEventsUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
    },
  });
