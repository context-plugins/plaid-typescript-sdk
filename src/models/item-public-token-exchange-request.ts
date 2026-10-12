import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ItemPublicTokenExchangeRequest defines the request schema for `/item/public_token/exchange` */
export type ItemPublicTokenExchangeRequest = {
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
  /**
   * Your `public_token`, obtained from the Link `onSuccess` callback or
   * `/sandbox/public_token/create`.
   */
  publicToken: string;
};

export const itemPublicTokenExchangeRequestSchema: Schema<ItemPublicTokenExchangeRequest> =
  s.object<ItemPublicTokenExchangeRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    publicToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      publicToken: "public_token",
    },
  });
