import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountsGetRequestOptionsSchema,
  type AccountsGetRequestOptions,
} from "./accounts-get-request-options.js";

export type AccountsGetRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  options?: AccountsGetRequestOptions;
};

export const accountsGetRequestSchema: Schema<AccountsGetRequest> = s.object<AccountsGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  options: s.optional(s.lazy(() => accountsGetRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
  },
});
