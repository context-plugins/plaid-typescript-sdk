import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemAccessTokenInvalidateRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
};

export const itemAccessTokenInvalidateRequestSchema: Schema<ItemAccessTokenInvalidateRequest> =
  s.object<ItemAccessTokenInvalidateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
