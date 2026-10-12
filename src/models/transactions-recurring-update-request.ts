import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsRecurringUpdateInputSchema,
  type TransactionsRecurringUpdateInput,
} from "./transactions-recurring-update-input.js";

/**
 * TransactionsRecurringUpdateRequest defines the request schema for
 * `/transactions/recurring/streams/update` endpoint.
 */
export type TransactionsRecurringUpdateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** A list of all the operations to be performed. This will either all succeed or all fail. */
  inputs: TransactionsRecurringUpdateInput[];
};

export const transactionsRecurringUpdateRequestSchema: Schema<TransactionsRecurringUpdateRequest> =
  s.object<TransactionsRecurringUpdateRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    inputs: s.array(s.lazy(() => transactionsRecurringUpdateInputSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
