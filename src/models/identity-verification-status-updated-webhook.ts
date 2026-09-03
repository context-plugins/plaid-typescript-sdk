import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type IdentityVerificationStatusUpdatedWebhook = {
  webhookType: string;
  webhookCode: string;
  identityVerificationId: string;
  environment: WebhookEnvironmentValues;
};

export const identityVerificationStatusUpdatedWebhookSchema: Schema<IdentityVerificationStatusUpdatedWebhook> =
  s.object<IdentityVerificationStatusUpdatedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    identityVerificationId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      identityVerificationId: "identity_verification_id",
    },
  });
