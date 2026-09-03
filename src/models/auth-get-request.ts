import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authGetRequestOptionsSchema, type AuthGetRequestOptions } from "./auth-get-request-options.js";

export type AuthGetRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  options?: AuthGetRequestOptions;
};

export const authGetRequestSchema: Schema<AuthGetRequest> = s.object<AuthGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  options: s.optional(s.lazy(() => authGetRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
  },
});
