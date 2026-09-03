import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxBankIncomeFireWebhookResponse = {
  requestId: string;
};

export const sandboxBankIncomeFireWebhookResponseSchema: Schema<SandboxBankIncomeFireWebhookResponse> =
  s.object<SandboxBankIncomeFireWebhookResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
