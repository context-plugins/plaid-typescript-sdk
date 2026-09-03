import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type AuthDefaultUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  accountIdsWithNewAuth: string[];
  accountIdsWithUpdatedAuth: Record<string, Record<string, unknown>>;
  error: Error | null;
  environment: WebhookEnvironmentValues;
};

export const authDefaultUpdateWebhookSchema: Schema<AuthDefaultUpdateWebhook> =
  s.object<AuthDefaultUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    accountIdsWithNewAuth: s.array(s.string()),
    accountIdsWithUpdatedAuth: s.record(s.string(), s.record(s.string(), s.unknown())),
    error: s.nullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      accountIdsWithNewAuth: "account_ids_with_new_auth",
      accountIdsWithUpdatedAuth: "account_ids_with_updated_auth",
    },
  });
