import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAccountSessionGetRequest = {
  clientId?: string;
  secret?: string;
  publicToken: string;
};

export const userAccountSessionGetRequestSchema: Schema<UserAccountSessionGetRequest> =
  s.object<UserAccountSessionGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    publicToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      publicToken: "public_token",
    },
  });
