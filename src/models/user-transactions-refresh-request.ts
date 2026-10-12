import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UserTransactionsRefreshRequest defines the request schema for `/user/transactions/refresh` */
export type UserTransactionsRefreshRequest = {
  /** A Plaid-generated ID that identifies the end user. */
  userId: string;
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

export const userTransactionsRefreshRequestSchema: Schema<UserTransactionsRefreshRequest> =
  s.object<UserTransactionsRefreshRequest>({
    userId: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      userId: "user_id",
      clientId: "client_id",
    },
  });
