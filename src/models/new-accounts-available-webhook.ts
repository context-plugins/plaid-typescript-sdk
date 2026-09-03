import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type NewAccountsAvailableWebhook = {
  webhookType?: string;
  webhookCode?: string;
  itemId?: string;
  userId?: string;
  error?: Error | null;
  environment?: WebhookEnvironmentValues;
};

export const newAccountsAvailableWebhookSchema: Schema<NewAccountsAvailableWebhook> =
  s.object<NewAccountsAvailableWebhook>({
    webhookType: s.optional(s.string()),
    webhookCode: s.optional(s.string()),
    itemId: s.optional(s.string()),
    userId: s.optional(s.string()),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    environment: s.optional(s.lazy(() => webhookEnvironmentValuesSchema)),
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
    },
  });
