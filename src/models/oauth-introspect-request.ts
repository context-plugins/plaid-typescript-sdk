import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OAuthIntrospectRequest = {
  token: string;
  clientId?: string;
  clientSecret?: string;
  secret?: string;
};

export const oAuthIntrospectRequestSchema: Schema<OAuthIntrospectRequest> = s.object<OAuthIntrospectRequest>({
  token: s.string(),
  clientId: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  secret: s.optional(s.string()),
  _keysMap: {
    clientId: "client_id",
    clientSecret: "client_secret",
  },
});
