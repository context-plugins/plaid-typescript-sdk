import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityGetRequestOptionsSchema,
  type IdentityGetRequestOptions,
} from "./identity-get-request-options.js";

export type IdentityGetRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  options?: IdentityGetRequestOptions;
};

export const identityGetRequestSchema: Schema<IdentityGetRequest> = s.object<IdentityGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  options: s.optional(s.lazy(() => identityGetRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
  },
});
