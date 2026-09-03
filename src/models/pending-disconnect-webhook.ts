import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  pendingDisconnectWebhookReasonSchema,
  type PendingDisconnectWebhookReason,
} from "./pending-disconnect-webhook-reason.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type PendingDisconnectWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  userId?: string;
  reason: PendingDisconnectWebhookReason;
  disconnectTime: Date;
  environment: WebhookEnvironmentValues;
};

export const pendingDisconnectWebhookSchema: Schema<PendingDisconnectWebhook> =
  s.object<PendingDisconnectWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    reason: pendingDisconnectWebhookReasonSchema,
    disconnectTime: s.dateTime(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      disconnectTime: "disconnect_time",
    },
  });
