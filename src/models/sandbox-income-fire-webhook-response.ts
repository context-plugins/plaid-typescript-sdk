import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * SandboxIncomeFireWebhookResponse defines the response schema for `/sandbox/income/fire_webhook`
 */
export type SandboxIncomeFireWebhookResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxIncomeFireWebhookResponseSchema: Schema<SandboxIncomeFireWebhookResponse> =
  s.object<SandboxIncomeFireWebhookResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
