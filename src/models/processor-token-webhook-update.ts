import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type ProcessorTokenWebhookUpdate = {
  webhookType: string;
  webhookCode: string;
  error?: Error | null;
  accountId: string;
  newWebhookUrl: string;
  environment: WebhookEnvironmentValues;
};

export const processorTokenWebhookUpdateSchema: Schema<ProcessorTokenWebhookUpdate> =
  s.object<ProcessorTokenWebhookUpdate>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    accountId: s.string(),
    newWebhookUrl: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      accountId: "account_id",
      newWebhookUrl: "new_webhook_url",
    },
  });
