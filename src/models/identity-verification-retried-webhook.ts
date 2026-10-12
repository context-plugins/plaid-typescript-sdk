import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when an identity verification has been retried, which can be triggered via the dashboard or
 * the API.
 */
export type IdentityVerificationRetriedWebhook = {
  /** `IDENTITY_VERIFICATION` */
  webhookType: string;
  /** `RETRIED` */
  webhookCode: string;
  /** The ID of the associated Identity Verification attempt. */
  identityVerificationId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const identityVerificationRetriedWebhookSchema: Schema<IdentityVerificationRetriedWebhook> =
  s.object<IdentityVerificationRetriedWebhook>({
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
