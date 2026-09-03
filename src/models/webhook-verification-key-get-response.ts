import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jwkPublicKeySchema, type JwkPublicKey } from "./jwk-public-key.js";

export type WebhookVerificationKeyGetResponse = {
  key: JwkPublicKey;
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
