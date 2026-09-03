import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type IdentityDefaultUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  accountIdsWithUpdatedIdentity: Record<string, Record<string, unknown>>;
  error: Error | null;
  environment: WebhookEnvironmentValues;
};

export const identityDefaultUpdateWebhookSchema: Schema<IdentityDefaultUpdateWebhook> =
  s.object<IdentityDefaultUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    accountIdsWithUpdatedIdentity: s.record(s.string(), s.record(s.string(), s.unknown())),
    error: s.nullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      accountIdsWithUpdatedIdentity: "account_ids_with_updated_identity",
    },
  });
