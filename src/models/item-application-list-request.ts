import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemApplicationListRequest = {
  clientId?: string;
  secret?: string;
  accessToken?: string | null;
};

export const itemApplicationListRequestSchema: Schema<ItemApplicationListRequest> =
  s.object<ItemApplicationListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
