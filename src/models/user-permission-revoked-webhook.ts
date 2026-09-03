import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type UserPermissionRevokedWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  userId?: string;
  error?: Error | null;
  environment: WebhookEnvironmentValues;
};

export const userPermissionRevokedWebhookSchema: Schema<UserPermissionRevokedWebhook> =
  s.object<UserPermissionRevokedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
    },
  });
