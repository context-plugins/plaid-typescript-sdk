import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type LinkSessionFinishedWebhook = {
  webhookType: string;
  webhookCode: string;
  status: string;
  linkSessionId: string;
  linkToken: string;
  publicToken?: string;
  publicTokens?: string[];
  userId?: string;
  environment: WebhookEnvironmentValues;
};

export const linkSessionFinishedWebhookSchema: Schema<LinkSessionFinishedWebhook> =
  s.object<LinkSessionFinishedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    status: s.string(),
    linkSessionId: s.string(),
    linkToken: s.string(),
    publicToken: s.optional(s.string()),
    publicTokens: s.optional(s.array(s.string())),
    userId: s.optional(s.string()),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      linkSessionId: "link_session_id",
      linkToken: "link_token",
      publicToken: "public_token",
      publicTokens: "public_tokens",
      userId: "user_id",
    },
  });
