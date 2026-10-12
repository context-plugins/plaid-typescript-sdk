import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityGetRequestOptionsSchema,
  type IdentityGetRequestOptions,
} from "./identity-get-request-options.js";

/** IdentityGetRequest defines the request schema for `/identity/get` */
export type IdentityGetRequest = {
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
  /** An optional object to filter `/identity/get` results. */
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
