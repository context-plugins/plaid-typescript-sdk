import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountsBalanceGetRequestOptionsSchema,
  type AccountsBalanceGetRequestOptions,
} from "./accounts-balance-get-request-options.js";

/** AccountsBalanceGetRequest defines the request schema for `/accounts/balance/get` */
export type AccountsBalanceGetRequest = {
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /** Optional parameters to `/accounts/balance/get`. */
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
