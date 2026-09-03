import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type LiabilitiesDefaultUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  userId?: string;
  error: Error | null;
  accountIdsWithNewLiabilities: string[];
  accountIdsWithUpdatedLiabilities: Record<string, Record<string, unknown>>;
  environment: WebhookEnvironmentValues;
};

export const liabilitiesDefaultUpdateWebhookSchema: Schema<LiabilitiesDefaultUpdateWebhook> =
  s.object<LiabilitiesDefaultUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    error: s.nullable(s.lazy(() => errorSchema)),
    accountIdsWithNewLiabilities: s.array(s.string()),
    accountIdsWithUpdatedLiabilities: s.record(s.string(), s.record(s.string(), s.unknown())),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      accountIdsWithNewLiabilities: "account_ids_with_new_liabilities",
      accountIdsWithUpdatedLiabilities: "account_ids_with_updated_liabilities",
    },
  });
