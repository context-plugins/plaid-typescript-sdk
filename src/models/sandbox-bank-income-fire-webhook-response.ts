import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * SandboxBankIncomeFireWebhookResponse defines the response schema for
 * `/sandbox/bank_income/fire_webhook`
 */
export type SandboxBankIncomeFireWebhookResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxBankIncomeFireWebhookResponseSchema: Schema<SandboxBankIncomeFireWebhookResponse> =
  s.object<SandboxBankIncomeFireWebhookResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
