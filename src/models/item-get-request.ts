import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemGetRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
};

export const itemGetRequestSchema: Schema<ItemGetRequest> = s.object<ItemGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
  },
});
