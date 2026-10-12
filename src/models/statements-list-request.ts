import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** StatementsListRequest defines the request schema for `/statements/list` */
export type StatementsListRequest = {
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
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
};

export const statementsListRequestSchema: Schema<StatementsListRequest> = s.object<StatementsListRequest>({
  accessToken: s.string(),
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  _keysMap: {
    accessToken: "access_token",
    clientId: "client_id",
  },
});
