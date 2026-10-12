import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsRecurringMergeInputSchema,
  type TransactionsRecurringMergeInput,
} from "./transactions-recurring-merge-input.js";

/**
 * TransactionsRecurringMergeRequest defines the request schema for
 * `/transactions/recurring/streams/merge` endpoint.
 */
export type TransactionsRecurringMergeRequest = {
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
  inputs: TransactionsRecurringMergeInput[];
};

export const transactionsRecurringMergeRequestSchema: Schema<TransactionsRecurringMergeRequest> =
  s.object<TransactionsRecurringMergeRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    inputs: s.array(s.lazy(() => transactionsRecurringMergeInputSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
