import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request to list a historical log of user consent events. */
export type ItemActivityListRequest = {
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
  accessToken?: string;
  /** Cursor used for pagination. */
  cursor?: string;
  /** @default 50 */
  count?: number;
};

export const itemActivityListRequestSchema: Schema<ItemActivityListRequest> =
  s.object<ItemActivityListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.optional(s.string()),
    cursor: s.optional(s.string()),
    count: s.defaulted(s.int(), 50),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
