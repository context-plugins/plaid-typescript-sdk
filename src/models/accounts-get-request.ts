import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountsGetRequestOptionsSchema,
  type AccountsGetRequestOptions,
} from "./accounts-get-request-options.js";

/** AccountsGetRequest defines the request schema for `/accounts/get` */
export type AccountsGetRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /** An optional object to filter `/accounts/get` results. */
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
