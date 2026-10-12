import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsGetRequestOptionsSchema,
  type TransactionsGetRequestOptions,
} from "./transactions-get-request-options.js";

/** TransactionsGetRequest defines the request schema for `/transactions/get` */
export type TransactionsGetRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /** An optional object to be used with the request. If specified, `options` must not be `null`. */
  options?: TransactionsGetRequestOptions;
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The earliest date for which data should be returned. Dates should be formatted as YYYY-MM-DD.
   */
  startDate: string;
  /** The latest date for which data should be returned. Dates should be formatted as YYYY-MM-DD. */
  endDate: string;
};

export const transactionsGetRequestSchema: Schema<TransactionsGetRequest> = s.object<TransactionsGetRequest>({
  clientId: s.optional(s.string()),
  options: s.optional(s.lazy(() => transactionsGetRequestOptionsSchema)),
  accessToken: s.string(),
  secret: s.optional(s.string()),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
    startDate: "start_date",
    endDate: "end_date",
  },
});
