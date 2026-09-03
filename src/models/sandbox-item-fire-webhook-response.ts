import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxItemFireWebhookResponse = {
  webhookFired: boolean;
  requestId: string;
};

export const sandboxItemFireWebhookResponseSchema: Schema<SandboxItemFireWebhookResponse> =
  s.object<SandboxItemFireWebhookResponse>({
    webhookFired: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      webhookFired: "webhook_fired",
      requestId: "request_id",
    },
  });
