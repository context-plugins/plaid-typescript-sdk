import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Indicates that Plaid's authentication process has completed for a user and that Plaid has
 * verified that the user owns their phone number. If you receive this webhook, you should skip your
 * own OTP phone number verification flow for the user, even if the user does not complete the
 * entire Link flow. If the user doesn't complete the full Link flow (as verified by your being able
 * to successfully call `/user_account/session/get` using the `public_token` from the `onSuccess`
 * callback) it is recommended that you implement [webhook
 * verification](https://plaid.com/docs/api/webhooks/webhook-verification/) or another technique to
 * avoid webhook spoofing attacks.
 */
export type LayerAuthenticationPassedWebhook = {
  /** `LAYER` */
  webhookType: string;
  /** `LAYER_AUTHENTICATION_PASSED` */
  webhookCode: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
  /** An identifier for the Link session these events occurred in */
  linkSessionId: string;
  /** The Link token used to create the Link session these events are from */
  linkToken: string;
};

export const layerAuthenticationPassedWebhookSchema: Schema<LayerAuthenticationPassedWebhook> =
  s.object<LayerAuthenticationPassedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    environment: webhookEnvironmentValuesSchema,
    linkSessionId: s.string(),
    linkToken: s.string(),
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      linkSessionId: "link_session_id",
      linkToken: "link_token",
    },
  });
