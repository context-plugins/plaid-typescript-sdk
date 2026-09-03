import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountsBalanceGetRequestOptionsSchema,
  type AccountsBalanceGetRequestOptions,
} from "./accounts-balance-get-request-options.js";

export type AccountsBalanceGetRequest = {
  accessToken: string;
  secret?: string;
  clientId?: string;
  options?: AccountsBalanceGetRequestOptions;
};

export const accountsBalanceGetRequestSchema: Schema<AccountsBalanceGetRequest> =
  s.object<AccountsBalanceGetRequest>({
    accessToken: s.string(),
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    options: s.optional(s.lazy(() => accountsBalanceGetRequestOptionsSchema)),
    _keysMap: {
      accessToken: "access_token",
      clientId: "client_id",
    },
  });
