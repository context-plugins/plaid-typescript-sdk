import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * TransactionsRulesListRequest defines the request schema for `/beta/transactions/rules/v1/list`
 */
export type TransactionsRulesListRequest = {
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
  /** A unique ID representing the end user whose rules should be listed. */
  clientUserId: string;
};

export const transactionsRulesListRequestSchema: Schema<TransactionsRulesListRequest> =
  s.object<TransactionsRulesListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    clientUserId: s.string(),
    _keysMap: {
      clientId: "client_id",
      clientUserId: "client_user_id",
    },
  });
