import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxBankTransferFireWebhookResponse = {
  requestId: string;
};

export const sandboxBankTransferFireWebhookResponseSchema: Schema<SandboxBankTransferFireWebhookResponse> =
  s.object<SandboxBankTransferFireWebhookResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
