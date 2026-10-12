import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentsAuthGetRequestOptionsSchema,
  type InvestmentsAuthGetRequestOptions,
} from "./investments-auth-get-request-options.js";

/** InvestmentsAuthGetRequest defines the request schema for `/investments/auth/get` */
export type InvestmentsAuthGetRequest = {
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
  /** An optional object to filter `/investments/auth/get` results. */
  options?: InvestmentsAuthGetRequestOptions;
};

export const investmentsAuthGetRequestSchema: Schema<InvestmentsAuthGetRequest> =
  s.object<InvestmentsAuthGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    options: s.optional(s.lazy(() => investmentsAuthGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
