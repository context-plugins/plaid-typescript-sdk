import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OAuthRevokeRequest = {
  token: string;
  clientId?: string;
  clientSecret?: string;
  secret?: string;
};

export const oAuthRevokeRequestSchema: Schema<OAuthRevokeRequest> = s.object<OAuthRevokeRequest>({
  token: s.string(),
  clientId: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  secret: s.optional(s.string()),
  _keysMap: {
    clientId: "client_id",
    clientSecret: "client_secret",
  },
});
