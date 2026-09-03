import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type SyncUpdatesAvailableWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  userId?: string;
  initialUpdateComplete: boolean;
  historicalUpdateComplete: boolean;
  environment: WebhookEnvironmentValues;
};

export const syncUpdatesAvailableWebhookSchema: Schema<SyncUpdatesAvailableWebhook> =
  s.object<SyncUpdatesAvailableWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    initialUpdateComplete: s.boolean(),
    historicalUpdateComplete: s.boolean(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      initialUpdateComplete: "initial_update_complete",
      historicalUpdateComplete: "historical_update_complete",
    },
  });
