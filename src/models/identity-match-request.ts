import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityMatchRequestOptionsSchema,
  type IdentityMatchRequestOptions,
} from "./identity-match-request-options.js";
import { identityMatchUserSchema, type IdentityMatchUser } from "./identity-match-user.js";

export type IdentityMatchRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  user?: IdentityMatchUser;
  options?: IdentityMatchRequestOptions;
};

export const identityMatchRequestSchema: Schema<IdentityMatchRequest> = s.object<IdentityMatchRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  user: s.optional(s.lazy(() => identityMatchUserSchema)),
  options: s.optional(s.lazy(() => identityMatchRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
  },
});
