import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type RecurringNewTransferWebhook = {
  webhookType: string;
  webhookCode: string;
  recurringTransferId: string;
  transferId: string;
  environment: WebhookEnvironmentValues;
};

export const recurringNewTransferWebhookSchema: Schema<RecurringNewTransferWebhook> =
  s.object<RecurringNewTransferWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    recurringTransferId: s.string(),
    transferId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      recurringTransferId: "recurring_transfer_id",
      transferId: "transfer_id",
    },
  });
