import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type RecurringCancelledWebhook = {
  webhookType: string;
  webhookCode: string;
  recurringTransferId: string;
  environment: WebhookEnvironmentValues;
};

export const recurringCancelledWebhookSchema: Schema<RecurringCancelledWebhook> =
  s.object<RecurringCancelledWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    recurringTransferId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      recurringTransferId: "recurring_transfer_id",
    },
  });
