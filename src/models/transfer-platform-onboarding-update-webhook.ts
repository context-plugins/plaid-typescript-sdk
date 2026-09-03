import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type TransferPlatformOnboardingUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  originatorClientId: string;
  environment: WebhookEnvironmentValues;
};

export const transferPlatformOnboardingUpdateWebhookSchema: Schema<TransferPlatformOnboardingUpdateWebhook> =
  s.object<TransferPlatformOnboardingUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    originatorClientId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      originatorClientId: "originator_client_id",
    },
  });
