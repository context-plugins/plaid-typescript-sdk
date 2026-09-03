import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxIncomeFireWebhookResponse = {
  requestId: string;
};

export const sandboxIncomeFireWebhookResponseSchema: Schema<SandboxIncomeFireWebhookResponse> =
  s.object<SandboxIncomeFireWebhookResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
