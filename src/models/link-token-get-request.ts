import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenGetRequest = {
  clientId?: string;
  secret?: string;
  linkToken: string;
};

export const linkTokenGetRequestSchema: Schema<LinkTokenGetRequest> = s.object<LinkTokenGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  linkToken: s.string(),
  _keysMap: {
    clientId: "client_id",
    linkToken: "link_token",
  },
});
