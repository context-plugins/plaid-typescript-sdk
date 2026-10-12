import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** SandboxItemFireWebhookResponse defines the response schema for `/sandbox/item/fire_webhook` */
export type SandboxItemFireWebhookResponse = {
  /** Value is `true` if the test `webhook_code` was successfully fired. */
  webhookFired: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
