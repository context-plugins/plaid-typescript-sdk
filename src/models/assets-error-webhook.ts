import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type AssetsErrorWebhook = {
  webhookType: string;
  webhookCode: string;
  error: Error | null;
  assetReportId: string;
  userId?: string;
  environment: WebhookEnvironmentValues;
};

export const assetsErrorWebhookSchema: Schema<AssetsErrorWebhook> = s.object<AssetsErrorWebhook>({
  webhookType: s.string(),
  webhookCode: s.string(),
  error: s.nullable(s.lazy(() => errorSchema)),
  assetReportId: s.string(),
  userId: s.optional(s.string()),
  environment: webhookEnvironmentValuesSchema,
  _keysMap: {
    webhookType: "webhook_type",
    webhookCode: "webhook_code",
    assetReportId: "asset_report_id",
    userId: "user_id",
  },
});
