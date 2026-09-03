import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookCodeSchema, type WebhookCode } from "./webhook-code.js";
import { webhookTypeSchema, type WebhookType } from "./webhook-type.js";

export type SandboxItemFireWebhookRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  webhookType?: WebhookType;
  webhookCode: WebhookCode;
};

export const sandboxItemFireWebhookRequestSchema: Schema<SandboxItemFireWebhookRequest> =
  s.object<SandboxItemFireWebhookRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    webhookType: s.optional(s.lazy(() => webhookTypeSchema)),
    webhookCode: webhookCodeSchema,
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
    },
  });
