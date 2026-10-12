import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when the status of an onboarding originator has been updated. Call
 * `/transfer/originator/get` to check the latest status
 */
export type TransferPlatformOnboardingUpdateWebhook = {
  /** `"TRANSFER"` */
  webhookType: string;
  /** `"PLATFORM_ONBOARDING_UPDATE"` */
  webhookCode: string;
  /** The client ID of the originator */
  originatorClientId: string;
  /** The Plaid environment the webhook was sent from */
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
