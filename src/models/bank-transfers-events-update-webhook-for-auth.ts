import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type BankTransfersEventsUpdateWebhookForAuth = {
  webhookType: string;
  webhookCode: string;
  environment: WebhookEnvironmentValues;
};

export const bankTransfersEventsUpdateWebhookForAuthSchema: Schema<BankTransfersEventsUpdateWebhookForAuth> =
  s.object<BankTransfersEventsUpdateWebhookForAuth>({
    webhookType: s.string(),
    webhookCode: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
    },
  });
