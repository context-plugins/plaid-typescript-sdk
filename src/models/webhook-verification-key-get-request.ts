import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * WebhookVerificationKeyGetRequest defines the request schema for `/webhook_verification_key/get`
 */
export type WebhookVerificationKeyGetRequest = {
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
  /** The key ID ( `kid` ) from the JWT header. */
  keyId: string;
};

export const webhookVerificationKeyGetRequestSchema: Schema<WebhookVerificationKeyGetRequest> =
  s.object<WebhookVerificationKeyGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    keyId: s.string(),
    _keysMap: {
      clientId: "client_id",
      keyId: "key_id",
    },
  });
