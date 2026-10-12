import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when the status of an identity verification has been updated, which can be triggered via
 * the dashboard or the API.
 */
export type IdentityVerificationStatusUpdatedWebhook = {
  /** `IDENTITY_VERIFICATION` */
  webhookType: string;
  /** `STATUS_UPDATED` */
  webhookCode: string;
  /** The ID of the associated Identity Verification attempt. */
  identityVerificationId: string;
  /** The Plaid environment the webhook was sent from */
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
