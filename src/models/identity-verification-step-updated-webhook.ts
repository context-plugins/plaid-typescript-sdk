import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired when an end user has completed a step of the Identity Verification process. */
export type IdentityVerificationStepUpdatedWebhook = {
  /** `IDENTITY_VERIFICATION` */
  webhookType: string;
  /** `STEP_UPDATED` */
  webhookCode: string;
  /** The ID of the associated Identity Verification attempt. */
  identityVerificationId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const identityVerificationStepUpdatedWebhookSchema: Schema<IdentityVerificationStepUpdatedWebhook> =
  s.object<IdentityVerificationStepUpdatedWebhook>({
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
