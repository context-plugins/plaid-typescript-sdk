import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jwkPublicKeySchema, type JwkPublicKey } from "./jwk-public-key.js";

/**
 * WebhookVerificationKeyGetResponse defines the response schema for `/webhook_verification_key/get`
 */
export type WebhookVerificationKeyGetResponse = {
  /**
   * A JSON Web Key (JWK) that can be used in conjunction with [JWT
   * libraries](https://jwt.io/#libraries-io) to verify Plaid webhooks
   */
  key: JwkPublicKey;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const webhookVerificationKeyGetResponseSchema: Schema<WebhookVerificationKeyGetResponse> =
  s.object<WebhookVerificationKeyGetResponse>({
    key: jwkPublicKeySchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
