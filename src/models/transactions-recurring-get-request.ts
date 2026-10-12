import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsRecurringGetRequestOptionsSchema,
  type TransactionsRecurringGetRequestOptions,
} from "./transactions-recurring-get-request-options.js";

/** TransactionsRecurringGetRequest defines the request schema for `/transactions/recurring/get` */
export type TransactionsRecurringGetRequest = {
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
  /** An optional object to be used with the request. If specified, `options` must not be `null`. */
  options?: TransactionsRecurringGetRequestOptions;
  /**
   * An optional list of `account_ids` to retrieve for the Item. Retrieves all active accounts on
   * item if no `account_id`s are provided.
   *
   * Note: An error will be returned if a provided `account_id` is not associated with the Item.
   */
  accountIds?: string[];
};

export const transactionsRecurringGetRequestSchema: Schema<TransactionsRecurringGetRequest> =
  s.object<TransactionsRecurringGetRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    options: s.optional(s.lazy(() => transactionsRecurringGetRequestOptionsSchema)),
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      accountIds: "account_ids",
    },
  });
