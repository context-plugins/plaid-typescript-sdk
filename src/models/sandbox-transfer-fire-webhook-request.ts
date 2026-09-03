import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferFireWebhookRequest = {
  clientId?: string;
  secret?: string;
  webhook: string;
};

export const sandboxTransferFireWebhookRequestSchema: Schema<SandboxTransferFireWebhookRequest> =
  s.object<SandboxTransferFireWebhookRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    webhook: s.string(),
    _keysMap: {
      clientId: "client_id",
    },
  });
