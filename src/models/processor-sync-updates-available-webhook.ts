import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type ProcessorSyncUpdatesAvailableWebhook = {
  webhookType: string;
  webhookCode: string;
  accountId: string;
  initialUpdateComplete: boolean;
  historicalUpdateComplete: boolean;
  environment: WebhookEnvironmentValues;
};

export const processorSyncUpdatesAvailableWebhookSchema: Schema<ProcessorSyncUpdatesAvailableWebhook> =
  s.object<ProcessorSyncUpdatesAvailableWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    accountId: s.string(),
    initialUpdateComplete: s.boolean(),
    historicalUpdateComplete: s.boolean(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      accountId: "account_id",
      initialUpdateComplete: "initial_update_complete",
      historicalUpdateComplete: "historical_update_complete",
    },
  });
