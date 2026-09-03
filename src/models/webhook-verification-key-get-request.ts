import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WebhookVerificationKeyGetRequest = {
  clientId?: string;
  secret?: string;
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
