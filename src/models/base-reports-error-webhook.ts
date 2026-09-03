import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type BaseReportsErrorWebhook = {
  webhookType: string;
  webhookCode: string;
  error: Error | null;
  userId: string;
  environment: WebhookEnvironmentValues;
};

export const baseReportsErrorWebhookSchema: Schema<BaseReportsErrorWebhook> =
  s.object<BaseReportsErrorWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.nullable(s.lazy(() => errorSchema)),
    userId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
    },
  });
