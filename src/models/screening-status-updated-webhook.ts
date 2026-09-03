import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type ScreeningStatusUpdatedWebhook = {
  webhookType: string;
  webhookCode: string;
  screeningId: string;
  environment: WebhookEnvironmentValues;
};

export const screeningStatusUpdatedWebhookSchema: Schema<ScreeningStatusUpdatedWebhook> =
  s.object<ScreeningStatusUpdatedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    screeningId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      screeningId: "screening_id",
    },
  });
