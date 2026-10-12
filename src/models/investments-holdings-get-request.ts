import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentHoldingsGetRequestOptionsSchema,
  type InvestmentHoldingsGetRequestOptions,
} from "./investment-holdings-get-request-options.js";

/** InvestmentsHoldingsGetRequest defines the request schema for `/investments/holdings/get` */
export type InvestmentsHoldingsGetRequest = {
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
   * An optional object to filter `/investments/holdings/get` results. If provided, must not be
   * `null`.
   */
  options?: InvestmentHoldingsGetRequestOptions;
};

export const investmentsHoldingsGetRequestSchema: Schema<InvestmentsHoldingsGetRequest> =
  s.object<InvestmentsHoldingsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    options: s.optional(s.lazy(() => investmentHoldingsGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
