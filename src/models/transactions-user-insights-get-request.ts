import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * TransactionsUserInsightsGetRequest defines the request schema for
 * `/beta/transactions/user_insights/v1/get`.
 */
export type TransactionsUserInsightsGetRequest = {
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
  /** A unique client-provided `client_user_id` to retrieve insights for. */
  clientUserId: string;
};

export const transactionsUserInsightsGetRequestSchema: Schema<TransactionsUserInsightsGetRequest> =
  s.object<TransactionsUserInsightsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    clientUserId: s.string(),
    _keysMap: {
      clientId: "client_id",
      clientUserId: "client_user_id",
    },
  });
