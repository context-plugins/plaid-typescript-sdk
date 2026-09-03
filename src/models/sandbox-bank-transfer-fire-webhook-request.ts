import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxBankTransferFireWebhookRequest = {
  clientId?: string;
  secret?: string;
  webhook: string;
};

export const sandboxBankTransferFireWebhookRequestSchema: Schema<SandboxBankTransferFireWebhookRequest> =
  s.object<SandboxBankTransferFireWebhookRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    webhook: s.string(),
    _keysMap: {
      clientId: "client_id",
    },
  });
