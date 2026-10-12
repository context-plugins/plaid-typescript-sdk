import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentsTransactionsGetRequestOptionsSchema,
  type InvestmentsTransactionsGetRequestOptions,
} from "./investments-transactions-get-request-options.js";

/**
 * InvestmentsTransactionsGetRequest defines the request schema for `/investments/transactions/get`
 */
export type InvestmentsTransactionsGetRequest = {
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
  accessToken: string;
  /**
   * The earliest date for which to fetch transaction history. Dates should be formatted as
   * YYYY-MM-DD.
   */
  startDate: string;
  /**
   * The most recent date for which to fetch transaction history. Dates should be formatted as
   * YYYY-MM-DD.
   */
  endDate: string;
  /**
   * An optional object to filter `/investments/transactions/get` results. If provided, must be
   * non-`null`.
   */
  options?: InvestmentsTransactionsGetRequestOptions;
};

export const investmentsTransactionsGetRequestSchema: Schema<InvestmentsTransactionsGetRequest> =
  s.object<InvestmentsTransactionsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    options: s.optional(s.lazy(() => investmentsTransactionsGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
