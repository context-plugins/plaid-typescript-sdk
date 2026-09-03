import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type LayerAuthenticationPassedWebhook = {
  webhookType: string;
  webhookCode: string;
  environment: WebhookEnvironmentValues;
  linkSessionId: string;
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
