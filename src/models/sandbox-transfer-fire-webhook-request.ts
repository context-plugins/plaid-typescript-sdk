import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/sandbox/transfer/fire_webhook` */
export type SandboxTransferFireWebhookRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The URL to which the webhook should be sent. */
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
