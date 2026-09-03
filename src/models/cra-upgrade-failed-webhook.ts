import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type CraUpgradeFailedWebhook = {
  webhookType: string;
  webhookCode: string;
  userId: string;
  itemIds: string[];
  environment: WebhookEnvironmentValues;
};

export const craUpgradeFailedWebhookSchema: Schema<CraUpgradeFailedWebhook> =
  s.object<CraUpgradeFailedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    itemIds: s.array(s.string()),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
      itemIds: "item_ids",
    },
  });
