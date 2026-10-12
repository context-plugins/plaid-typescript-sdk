import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ItemAccessTokenInvalidateRequest defines the request schema for `/item/access_token/invalidate`
 */
export type ItemAccessTokenInvalidateRequest = {
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
};

export const itemAccessTokenInvalidateRequestSchema: Schema<ItemAccessTokenInvalidateRequest> =
  s.object<ItemAccessTokenInvalidateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
