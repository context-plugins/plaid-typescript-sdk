import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsSyncRequestOptionsSchema,
  type TransactionsSyncRequestOptions,
} from "./transactions-sync-request-options.js";

/** TransactionsSyncRequest defines the request schema for `/transactions/sync` */
export type TransactionsSyncRequest = {
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
  /**
   * The cursor value represents the last update requested. Providing it will cause the response to
   * only return changes after this update. If omitted, the entire history of updates will be
   * returned, starting with the first-added transactions on the Item. The cursor also accepts the
   * special value of `"now"`, which can be used to fast-forward the cursor as part of migrating an
   * existing Item from `/transactions/get` to `/transactions/sync`. For more information, see the
   * [Transactions sync migration guide](https://plaid.com/docs/transactions/sync-migration/). Note
   * that using the `"now"` value is not supported for any use case other than migrating existing
   * Items from `/transactions/get`.
   *
   * The upper-bound length of this cursor is 256 characters of base64.
   */
  cursor?: string;
  /** The number of transaction updates to fetch. @default 100 */
  count?: number;
  /** An optional object to be used with the request. If specified, `options` must not be `null`. */
  options?: TransactionsSyncRequestOptions;
};

export const transactionsSyncRequestSchema: Schema<TransactionsSyncRequest> =
  s.object<TransactionsSyncRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    cursor: s.optional(s.string()),
    count: s.defaulted(s.int(), 100),
    options: s.optional(s.lazy(() => transactionsSyncRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
