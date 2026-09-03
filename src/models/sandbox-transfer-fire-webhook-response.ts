import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferFireWebhookResponse = {
  requestId: string;
};

export const sandboxTransferFireWebhookResponseSchema: Schema<SandboxTransferFireWebhookResponse> =
  s.object<SandboxTransferFireWebhookResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
