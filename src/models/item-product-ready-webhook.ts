import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type ItemProductReadyWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  error?: Error | null;
  environment: WebhookEnvironmentValues;
};

export const itemProductReadyWebhookSchema: Schema<ItemProductReadyWebhook> =
  s.object<ItemProductReadyWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
    },
  });
