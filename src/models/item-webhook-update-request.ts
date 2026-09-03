import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemWebhookUpdateRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  webhook?: string | null;
};

export const itemWebhookUpdateRequestSchema: Schema<ItemWebhookUpdateRequest> =
  s.object<ItemWebhookUpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    webhook: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
