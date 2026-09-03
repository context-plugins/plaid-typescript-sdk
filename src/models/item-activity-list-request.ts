import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemActivityListRequest = {
  clientId?: string;
  secret?: string;
  accessToken?: string;
  cursor?: string;
  count?: number;
};

export const itemActivityListRequestSchema: Schema<ItemActivityListRequest> =
  s.object<ItemActivityListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.optional(s.string()),
    cursor: s.optional(s.string()),
    count: s.optional(s.number()),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
