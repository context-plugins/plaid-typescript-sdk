import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type ProductPermissionsRequiredAuthWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  environment: WebhookEnvironmentValues;
};

export const productPermissionsRequiredAuthWebhookSchema: Schema<ProductPermissionsRequiredAuthWebhook> =
  s.object<ProductPermissionsRequiredAuthWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
    },
  });
