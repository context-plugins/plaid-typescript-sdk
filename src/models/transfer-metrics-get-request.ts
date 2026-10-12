import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/metrics/get` */
export type TransferMetricsGetRequest = {
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
  /**
   * The Plaid client ID of the transfer originator. Should only be present if `client_id` is a
   * [Platform customer](https://plaid.com/docs/transfer/application/#originators-vs-platforms).
   */
  originatorClientId?: string | null;
};

export const transferMetricsGetRequestSchema: Schema<TransferMetricsGetRequest> =
  s.object<TransferMetricsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
    },
  });
