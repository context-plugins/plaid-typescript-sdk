import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** LinkTokenGetRequest defines the request schema for `/link/token/get` */
export type LinkTokenGetRequest = {
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
  /** A `link_token` from a previous invocation of `/link/token/create` */
  linkToken: string;
};

export const linkTokenGetRequestSchema: Schema<LinkTokenGetRequest> = s.object<LinkTokenGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  linkToken: s.string(),
  _keysMap: {
    clientId: "client_id",
    linkToken: "link_token",
  },
});
